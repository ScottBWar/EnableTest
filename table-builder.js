//Accounts Data ------------------------
    var accounts = [
        {
            accountName: 'Checking Account',
            amount: 15010,
            status: 'active'
        },
        {
            accountName: 'Savings Account',
            amount: 55020,
            status: 'active'
        },
        {
            accountName: 'Travel Fund Account',
            amount: 25030,
            status: 'inactive'
        },
        {
            accountName: 'Investment Account',
            amount: 1500500,
            status: 'active'
        },
        {
            accountName: 'Education Account',
            amount: 14500,
            status: 'active'
        }
    ];

    accounts.sum = function(){
         var sum = 0;
        for(var i = 0; i < this.length; i++){
           sum += this[i].amount;
        }
        return sum;
    };

    var total = accounts.sum();

    // Table Object----------------------------------

    function Table(){
        var self = this;

        this.contents = "";

        this.addRow = function(){
            row = "";
            row += td(arguments[0]) + td(arguments[1]) + td(arguments[2]);
            self.contents +=  tr(row);
        };

    }



    //

    function wrap(content,tag){
        return "<" + tag + ">" + content + "</" + tag + ">";
    }

    function makewrapper(tag){
     return function(content){
        return wrap(content,tag);
     };
    }

    var td = makewrapper("td");
    var tr = makewrapper("tr");
    var strong = makewrapper("strong");
    var table = makewrapper("table");

//---------
  
    var table1 = new Table();

    table1.addRow("Name","Amount","Status");

    for (var i = 0; i < accounts.length; i++) {
        table1.addRow(accounts[i].accountName,accounts[i].amount,accounts[i].status);
    }

    table1.addRow(strong("Total"),strong(total),"");

    var html = table(table1.contents);

    document.querySelector('.container').innerHTML = html;