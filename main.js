menu_list_array= ["Chicken Tandoori",
"Veggie Mania",
"Pepperoni",
"Veg Supreem Pizza",
"Paneer Tikka Pizza",
]

function getmenu(){
    var htmldata
    htmldata="<ol class=menulist"
    menu_list_array.sort()
    for(var i=0;i<menu_list_array.length;i++)
    htmldata=htmldata +'<li>' + menu_list_array[i] + '</li>'
}
    
    htmldata=htmldata"</ol>"
    document. getElementById("display_menu").innerhtml  = htmldata;


}


function, add_ltem()(
    var htmldata;
    var item= document.getElementById("add_item").value
menu_list_array.push(item);
    menu_list_array.sort(); 
    htmldata="<section class="cards" >"
    for(var i=0;i<menu_list_array.length;i++)
    htmldata + "<div class="cards"" + "<img src"images/pizzaImage.png"/>" +menu_list_array[i] "</div>"





}

htmldata=htmldata"</section>"
document. getElementById("display_menu").innerhtml  = htmldata;


htmldata=htmldata"</section>"
document. getElementById("display_menu").innerhtml  = htmldata; 
