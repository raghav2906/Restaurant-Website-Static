function register(){
    document.getElementById("login").style.display="none";
    document.getElementById("register").style.display="block";
}
function login(){
    document.getElementById("login").style.display="block";
    document.getElementById("register").style.display="none";
}
function logcheck()
{
    var res=true;
    var a=document.getElementById("maill").value;
    if(a=="" || a[0]==" ")
    {
        document.getElementById("maill").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("maill").style.border="none";
    }
    var b=document.getElementById("pswdl").value;
    if(b.length<8 || b=="")
    {
        document.getElementById("pswdl").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("pswdl").style.border="none";
    }
    if(res==true)
    {
        document.getElementById("improvel").style.display="none";
        alert("succesfull login");
    }
    else
    {
        document.getElementById("improvel").style.display="block";
    }
}
function regcheck()
{
    var res=true;
    var a=document.getElementById("pswdr").value;
    if(a.length < 8 || a=="")
    {
        
        document.getElementById("pswdr").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("pswdr").style.border="none";
    }
    var b=document.getElementById("name").value;
    if(b=="" || b[0]==" ")
    {
        document.getElementById("name").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("name").style.border="none";
    }
    var c=document.getElementById("age").value;
    if(c<0 ||c >100 ||c=="")
    {
        document.getElementById("age").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("age").style.border="none";
    }
    var d=document.getElementById("ph").value;
    if(d=="" || d<1000000000 || d>9999999999)
    {
        document.getElementById("ph").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("ph").style.border="none";
    }
    var e=document.getElementById("add").value;
    if(e=="" || e[0]==" ")
    {
        document.getElementById("add").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("add").style.border="none";
    }
    var f=document.getElementById("mailr").value;
    if(f=="" || f[0]==" ")
    {
        document.getElementById("mailr").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("mailr").style.border="none";
    }
    var i;var j=0;
    for(i=0;i<f.length;i++)
    {
        if(f[i]=="@"){j=1;}
    }
    if(j==0)
    {
        document.getElementById("mailr").style.border="1px solid red";
        res=false;
    }
    else
    {
        document.getElementById("mailr").style.border="none";
    }
    if(res==false)
    {
        document.getElementById("improve").style.display="block";
    }
    if(res == true)
    {
        document.getElementById("improve").style.display="none";
        alert("succesfully registered\n Now you can login");
        document.getElementById("login").style.display="block";
        document.getElementById("register").style.display="none";

    }
    
    
}