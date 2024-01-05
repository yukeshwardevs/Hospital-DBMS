document.addEventListener('DOMContentLoaded',function()
{
    var createbutton=document.querySelector('.btn')
    createbutton.addEventListener('click',function()
    {
        var nameinput=document.getElementById('nameinca').value;
        var emailinput=document.getElementById('emailinca').value;
        var numinput=document.getElementById('numberinca').value;
        var passinput=document.getElementById('passinca').value;

        console.log('Name:',nameinput);
        console.log('Email:',emailinput);
        console.log('Number:',numinput);
        console.log('Password:',passinput);

        alert('Name:'+nameinput+
        '\nEmail:'+emailinput +'\nNumber:'+numinput +'\nPassword:'+passinput);
    });
});