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
            row += wrap(arguments[0],"td") + wrap(arguments[1],"td") + wrap(arguments[2],"td");
            self.contents +=  wrap(row,"tr");
        };

    }



    //

    function wrap(content,tag){
        return "<" + tag + ">" + content + "</" + tag + ">";
    }

//---------
  
    var table1 = new Table();

    table1.addRow("Name","Amount","Status");

    for (var i = 0; i < accounts.length; i++) {
        table1.addRow(accounts[i].accountName,accounts[i].amount,accounts[i].status);
    }

    table1.addRow(wrap("Total","strong"),wrap(total,"strong"),"");

    var html = wrap(table1.contents,"table");

    document.querySelector('.container').innerHTML = html;