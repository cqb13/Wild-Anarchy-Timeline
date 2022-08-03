const search = document.getElementById('search_box');

search.addEventListener('keydown', (event) => {
    if(event.key == "Enter"){
        find();
    }
});

//TODO: finsih this and dont get distracted by side bar shit
function find(){
    console.log(document.getElementById('search_box').value)
}

function openNav() {
    document.getElementById("side_bar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("side_bar").style.width = "0";
  }
