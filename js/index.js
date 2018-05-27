window.addEventListener('load',function () {
    let banner=document.querySelector('.banner')
    let a=document.querySelectorAll('.navBox>.line>a')
    let imgs=document.querySelectorAll('.imgBox>li>a>img')
    let width = parseInt(getComputedStyle(banner).width)
    let leftBtn=document.querySelector('.banner>.leftBtn')
    let rightBtn=document.querySelector('.banner>.rightBtn')
    console.log(width);
    let current=0,next=0;
    let flag=true;

    //鼠标移入
   a.forEach(function (element) {
       element.addEventListener('mouseenter',function () {
           element.classList.add('active')
       })
       element.addEventListener('mouseleave',function () {
           element.classList.remove('active')
       })
   })

//    轮播
//     setInterval(move,3000)
   function move() {
       next++;
       if (next==imgs.length){
           next=0
       }
       imgs[next].style.left = width + "px"
       animate(imgs[current],{left:-width});
       animate(imgs[next],{left:0},function () {
           flag=true;
       })
       current=next;
   }
    function movel() {
        next--;
        if (next<0){
            next=imgs.length-1
        }
        imgs[next].style.left = -width + "px"
        animate(imgs[current],{left:width});
        animate(imgs[next],{left:0},function () {
            flag=true;
        })
        current=next;
    }


//   箭头
    leftBtn.addEventListener('click',function () {
        if (!flag){
            return
        }
        flag=false;
        movel();
    })
    rightBtn.addEventListener('click',function () {
        if (!flag){
            return
        }
        flag=false;
        move();
    })

})