//Accounts Data ------------------------
var accounts = [{
    accountName: 'Checking Account',
    amount: 15010,
    status: 'active'
}, {
    accountName: 'Savings Account',
    amount: 55020,
    status: 'active'
}, {
    accountName: 'Travel Fund Account',
    amount: 25030,
    status: 'inactive'
}, {
    accountName: 'Investment Account',
    amount: 1500500,
    status: 'active'
}, {
    accountName: 'Education Account',
    amount: 14500,
    status: 'active'
}];

function wrap(content, tag) {
    return "<" + tag + ">" + content + "</" + tag + ">";
}
// Table Object----------------------------------

function Table(headers,data) {
    var self = this;

    this.contents = "";

    this.addRow = function(array) {
        var row = "";
        for (var i in array) {
            row += wrap(array[i], "td");
        }
        self.contents += wrap(row, "tr");
    };

    this.addData = function() {
        console.log(self);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var row = [];
            for (var k in Object.keys(data[i])) {
                row.push(data[i][Object.keys(data[i])[k]]);
            }
            self.addRow(row);
        }

    };

    this.addTotals = function() {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data[i].amount;
        }
        self.addRow([wrap("Total", "strong"), wrap(total, "strong"), ""]);
    };

    this.toHtml = function(){
        var html = wrap(self.contents, "table");
        return html;
    };

    self.addRow(headers),self.addData(),self.addTotals();
}
//

//---------

var table1 = new Table(["Name", "Amount", "Status"],accounts);


document.querySelector('.container').innerHTML = table1.toHtml();