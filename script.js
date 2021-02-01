
var menu=false;
function btnClick()
{
    var btn = document.getElementById("menu_mobile");
    if(menu==true)
    {
      menu=false;
      btn.style.display="none";
    }
    else
    {
        menu=true;
        btn.style.display="block";
    }
}