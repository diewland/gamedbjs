var gameDB = function(title, data, dashboard){

    var self = this;

    this.title     = title;
    this.data0     = data;      // original data
    this.data      = data;      // filtered data
    this.dashboard = dashboard;

    this.make = function(){
        var html = '';

        // title
        html = '<h1>' + this.title + '</h1>';

        // search
        html += "<div>"
             +  "Search"
             +  " <input id='txt_search' type='text' />"
             +  " <input id='btn_reset' type='button' value='X' />"
             +  "</div>"
             +  "<br />";

        // choose button 1
        html += "<input class='btn_choose' type='button' value='Submit' />"
             +  "<br /><br />";

        // table
        html += "<div id='div_grid'></div>"
             +  "<br />";

        // choose button 2
        html += "<input class='btn_choose' type='button' value='Submit' />";

        // render html
        this.dashboard.innerHTML = html;
        this.update_table();

        // binding events
        var txt_search = document.getElementById('txt_search');
        var btn_reset  = document.getElementById('btn_reset');
        var btn_chooses = document.getElementsByClassName('btn_choose');

        txt_search.onkeyup = function(){
            self.update_table(this.value);
        }
        btn_reset.onclick = function(){
            txt_search.value = '';
            txt_search.focus();
            self.update_table();
        };
        for(var i in btn_chooses){
            btn_chooses[i].onclick = function(){
                var items = [];
                var cboxs = document.getElementsByClassName('cbx');
                for(var i=0; i<cboxs.length; i++){
                    var cbx = cboxs[i];
                    if(cbx.checked){
                        items.push(self.data[i]);
                    }
                }
                self.choose(items);
            }
        }

        // focus on search box
        txt_search.focus();
    }

    this.update_table = function(val){
        var val = val || '';
        var div_grid = document.getElementById('div_grid');
        self.data = self.search(self.data0, val);
        var html = self.draw_table(self.data);
        div_grid.innerHTML = html;

        // bind checkbox events
        var cbx_alls = document.getElementsByClassName('cbx_all');
        var cboxs = document.getElementsByClassName('cbx');
        if(cbx_alls.length > 0){
            for(var i in cbx_alls){
                cbx_alls[i].onclick = this.bind_cbx_all;
            }
        }
        for(var i=0; i<cboxs.length; i++){
            cboxs[i].onclick = this.bind_cbx;
        }
    }

    this.draw_table = function(data){
        var html = "<table>"
                 + "<tr>"
                 + "<th><input class='cbx_all' type='checkbox' /></th>"
                 + "<th align='left'>Features</th>"
                 + "</tr>";
        for(var i=0; i<data.length; i++){
            var cur = data[i];
            html += "<tr>"
                 + "<td><input class='cbx' type='checkbox' /></td>"
                 + "<td>" + (i*1+1) + '. ' + cur.title + "</td>"
                 + "</tr>";
        }

         html += "<tr>"
             + "<th><input class='cbx_all' type='checkbox' /></th>"
             + "<th align='left'>Features</th>"
             + "</tr>";


        html += "</table>";
        return html;
    }

    this.search = function(data, q){
        var result = [];
        for(var i=0; i<data.length; i++){
            var cur = data[i];
            if(cur.title.toLowerCase().indexOf(q.toLowerCase()) >= 0){
                result.push(cur);
            }
        }
        return result;
    }

    this.choose = function(items){
        var str = 'Selected Items:\n\n';
        console.log('Selected Items');
        for(var i=0; i<items.length; i++){
            var num = i*1+1;
            var item = items[i];
            str += num + '. ' + item.title + '\n';
            console.log(num, item);
        }
        alert(str);
    }

    this.bind_cbx_all = function(e){
        var cbx_alls= document.getElementsByClassName('cbx_all');
        var cboxs = document.getElementsByClassName('cbx');
        for(var i in cbx_alls){
            cbx_alls[i].checked = this.checked;
        }
        for(var i=0; i<cboxs.length; i++){
            cboxs[i].checked = this.checked;
        }
    }
    this.bind_cbx = function(e){
        var cbx_alls= document.getElementsByClassName('cbx_all');
        var cboxs   = document.getElementsByClassName('cbx');
        var cnt = 0;
        for(var i=0; i<cboxs.length; i++){
            if(cboxs[i].checked){
                cnt++;
            }
        }
        for(var i in cbx_alls){
            cbx_alls[i].checked = cboxs.length == cnt;
        }
    }

    this.whoami = function(){
        return "This is gameDB of " + this.title;
    }
}
