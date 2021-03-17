var toggle  = document.getElementById('box');
var clickcount = document.getElementById('click-count');
var count = 0;

toggle.addEventListener('click', function()
{
    count++;
    clickcount.innerText = count + " ";
});