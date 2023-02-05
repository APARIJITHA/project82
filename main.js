canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
 color="blue";
 width_of_line= 10;
var last_position_of_mouse_x,last_position_of_mouse_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
    mouseEvent ="mousedown";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP!";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent =="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
        console.log("last position of x and y coordinates =");
        console.log("x="+last_position_of_mouse_x + "y="+ last_position_of_mouse_y);
        ctx.moveTo(last_position_of_mouse_x,last_position_of_mouse_y);

        console.log("current position of xand y coordinates =");
        console.log("x="+current_position_of_mouse_x + "y="+ current_position_of_mouse_y);
       
        ctx.stroke();
    }
    last_position_of_mouse_y= current_position_of_mouse_y;
    last_position_of_mouse_x= current_position_of_mouse_x;
}
function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)

}