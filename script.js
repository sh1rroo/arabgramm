let post = document.getElementById("post1"); 

let postsBox = document.getElementById("allposts") 
 
let imgurls = [ 
    "https://sh1rroo.github.io/biosite/myselfphoto.png", 
    "https://sh1rroo.github.io/biosite/yalegenda.jfif", 
    "https://ss.sport-express.ru/userfiles/materials/194/1946228/volga.jpg",
    "https://icdn.lenta.ru/images/2023/02/12/09/20230212094150333/square_1280_65c2bf9a6ab0183bc209e70a41856653.jpg"
] 

for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("postImg")[0] 
    imgpost.setAttribute("src", imgurls[i%4]) 
 
    postsBox.appendChild(newpost); 
}

var btn = document.getElementById('btn');

function Toogle(){
    if(btn.classList.contains("far")){
        btn.classList.remove("far");
        btn.classList.add("fas");
    }
    else{
        btn.classList.remove("fas");
        btn.classList.add("far");
    }
}
