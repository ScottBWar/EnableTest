    console.log("whatever");
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

    function row(){
        r = "";
        r += td(arguments[0]) + td(arguments[1]) + td(arguments[2]);
        return tr(r);
    }

  
    var html = '';

    html += row("Name","Amount","Status");


    for (var i = 0; i < accounts.length; i++) {
        html += row(accounts[i].accountName,accounts[i].amount,accounts[i].status);
    }

    html += row(strong("Total"),strong(total),"");

    var content = table(html);


    document.querySelector('.container').innerHTML = content;