const images = [
    'outfit3.jpg','outfit2.jpg','outfit4.jpg','outfit5.jpg',
    'outfit6.jpg','outfit7.jpg','outfit8.jpg',
    'outfit9.jpg','outfit10.jpg'
]
document.getElementById("Dislike").addEventListener("click",change);
document.getElementById("like").addEventListener("click",change);
let i = 0

function change(event){
    const img= document.getElementById("img")
    img.src=images[i]
    i++
}

const liked =[]
const disliked=[]


function like(event){
    liked.push(images[i]);
}
function like(event){
    disliked.push(images[i]);
}