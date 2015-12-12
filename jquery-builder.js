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

   var html = '<table>';

   html += '<tr><td>Name</td><td>Amount</td><td>Status</td></tr>';

   var total = 0;
   for (var i = 0; i < accounts.length; i++) {

       html += '<tr>';

       html += '<td>' + accounts[i].accountName + '</td>';
        html += '<td>' + accounts[i].amount + '</td>';
        html += '<td>' + accounts[i].status + '</td>';
        html += '</tr>';
        total += accounts[i].amount;
    }
    html += '<tr><td><strong>Total</strong></td>' + '<td><strong>' + total + '</strong></td>' + '<td></td></tr>';
    html += '</table>';
    document.querySelector('.container').innerHTML = html;