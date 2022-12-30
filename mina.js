
let images = document.querySelectorAll('img')
let fixedBox = document.querySelector('#fixed-box')
let smallBox = document.querySelector('#small-box')
let leftBtn = document.querySelector('#left-btn')
let rigthtBtn = document.querySelector('#rigth-btn')
let closeBtn = document.querySelector('#close-btn')
let index =0;
// for show window when i click on any image
for(let i =0;i<images.length;i++){
    images[i].addEventListener('click',function(e){// is an element gived by addeventlistner
        let clickedImg = e.target.getAttribute('src')
        smallBox.style.backgroundImage=`url(${clickedImg})`
        fixedBox.style.display='flex'
        index=i
    })
}

// for close window 
closeBtn.addEventListener('click',function(){
    fixedBox.style.display='none'
})

rigthtBtn.addEventListener('click',nextImg)

leftBtn.addEventListener('click',prevImage)

function nextImg(){
    index++;
    if(index==images.length)
    index=0;
    let nextImg = images[index].getAttribute('src');
    smallBox.style.backgroundImage=`url(${nextImg})`

}

function prevImage(){
    index--;
    if(index<0)
    index=images.length
    let nextImg = images[index].getAttribute('src');
    smallBox.style.backgroundImage=`url(${nextImg})`
}

function closeWindow(){
    fixedBox.style.display='none'
}

document.addEventListener('keyup' ,function(e){
    if(e.key=='ArrowLeft'){
        prevImage()
    }else if(e.key=='ArrowRight'){
        nextImg()
    }else if(e.key=='Escape')
    closeWindow()
})
//timer to go to the next image
setInterval(function(){
    nextImg()
},4500)