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

    function row(){
        r = "";
        r += td(arguments[0]) + td(arguments[1]) + td(arguments[2]);
        return tr(r);
    }

  
    var html = '<table>';

    html += '<tr><td>Name</td><td>Amount</td><td>Status</td></tr>';

    var total = 0;
    for (var i = 0; i < accounts.length; i++) {

        html += '<tr>';

        
        html +=  td(accounts[i].accountName);
        html +=  td(accounts[i].amount);
        html +=  td(accounts[i].status);

        html += '</tr>';

        total += accounts[i].amount;
    }

    html += '<tr><td><strong>Total</strong></td>' + '<td><strong>' + total + '</strong></td>' + '<td></td></tr>';

    html += '</table>';


    document.querySelector('.container').innerHTML = html;