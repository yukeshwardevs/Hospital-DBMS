document.addEventListener('DOMContentLoaded', function()
{
    var submitButton = document.querySelector('.btn');
    submitButton.addEventListener('click',function()
    {
        var nameinput = document.getElementById('namein').value;
        var pass= document.getElementById('pswd').value;

        console.log('Name:',nameinput);
        console.log('Password',pass);

        alert('Name: ' +nameinput + '\nPassword: ' + pass);
    });
});