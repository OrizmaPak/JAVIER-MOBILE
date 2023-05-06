let vplay = false;
let vmute = false;
let vvolume = 1;

const setvplay=(action)=>{
    if(action == 'true'){
        vplay = true
    }
    if(action == 'false'){
        vplay = false
    }
    console.log('vplay', vplay)
}

const profileContent =()=>{
    document.getElementById('navHeader').innerHTML = `
    <img 
            onclick="mainHeader();forYouContent();"
            class="w-[50px] h-[50px] " 
            src="./public/leftr.png" alt="">
            <p class="w-full anton txtwb profilefont">Sabinus_2</p>
            <img class="navheaderimg inverter" src="./public/arrow.png" alt=""> 
    `
    document.getElementById('contentContainer').innerHTML = `
    <div class="flex flex-col items-center justify-start w-full h-full mt-16 overflow-auto">
               <img class="w-[150px] h-[150px] rounded-[50%] mb-4 mt-32" src="./public/face.jpg" alt="">
               <h2 class="mb-4 text-2xl font-thin anton txtwb">@Sabinus_4</h2>
               <div class="flex justify-around w-full mb-4 h-fit max-w-[500px]">
                    <div class="flex flex-col justify-center">
                        <p class="text-2xl text-center anton txtwb">500</p>
                        <p class="font-serif text-center opacity-70 text-md txtwb">Following</p>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-2xl text-center anton txtwb">500</p>
                        <p class="font-serif text-center opacity-70 text-md txtwb">Followers</p>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-2xl text-center anton txtwb">500</p>
                        <p class="font-serif text-center opacity-70 text-md txtwb">Likes</p>
                    </div>
               </div>
               <button class="text-white w-fit px-9 mx-auto py-2 mb-6 rounded-md bg-[#f13939]">Follow</button>
               <div class="w-full flex sticky-header bgbw min-h-[40px]">
                    <div class="w-[25%] flex bg-[#979595] justify-center items-center h-full border-[0.5px] border-[#d4d4d4]">
                        <img class="rotate-90 inverter" src="./public/menu.png" alt="">
                    </div>
                    <div class="w-[25%] flex justify-center items-center h-full border-[0.5px] border-[#d4d4d4]">
                        <img class="inverter" src="./public/video.png" alt="">
                    </div>
                    <div class="w-[25%] flex justify-center items-center h-full border-[0.5px] border-[#d4d4d4]">
                        <img class="inverter" src="./public/chat (2).png" alt="">
                    </div>
                    <div class="w-[25%] flex justify-center items-center h-full border-[0.5px] border-[#d4d4d4]">
                        <img class="inverter" src="./public/no-love.png" alt="">
                    </div>
               </div>
               <div class="flex flex-wrap justify-center w-full h-fit">
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
                    <div class="min-w-[150px] m-[0.5px] min-h-[150px] w-[150px] h-[150px]">
                        <img src="./public/face.jpg" alt="">
                    </div>
               </div>
           </div>
    `
}

const searchHeader =()=>{
    document.getElementById('navHeader').innerHTML = `
        <img 
            onclick="mainHeader()"
            class="w-[50px] h-[50px] " 
            src="./public/leftr.png" alt="">
        <input class="w-[80%] h-10 rounded-md px-4 font-semibold bg-[#e6e6e6] " placeholder="Search" type="text">
        <img class="navheaderimg inverter" src="./public/search.png" alt="">
    `
    document.getElementById('modalContainer').innerHTML = `
    <div class="flex justify-end w-full px-2 my-2 cursor-pointer p h-fit">
    <img
    onclick="this.parentElement.parentElement.style.height = '0px'"
     class="w-4 inverterRev" src="./public/close.png" alt="">
 </div>
 <!-- SEARCH -->
 <P class="relative top-[-25px] text-center txtbw anton w-fit mx-auto">looking for?</P>`
    document.getElementById('modalContainer').style.height = '105vh'
}

const mainHeader =()=>{
    document.getElementById('navHeader').innerHTML = `
        <img 
                onclick="document.getElementById('javierSideContainer').classList.add('navigationleftopen')"
                class="navheaderimg inverter" 
                src="./public/menu.png" alt="">
            <div class="flex items-center justify-center w-full h-full font-bold navheadertxt inverter">
                <p id="following" onclick="followingContent();this.classList.add('border-b-2');this.nextElementSibling.classList.remove('border-b-2')"class="mx-2 cursor-pointer anton opacity-80">Following</p>
                <p id="forYou" onclick="forYouContent();this.classList.add('border-b-2');this.previousElementSibling.classList.remove('border-b-2')" class="mx-2 border-b-2 cursor-pointer anton">For You</p>
            </div>
            <img onclick="searchHeader()" class="navheaderimg inverter" src="./public/search.png" alt="">
    `
    document.getElementById('modalContainer').style.height = '0px'
    document.getElementById('modalContainer').innerHTML = ``
}

const followingContent =()=>{
    document.getElementById('contentContainer').innerHTML = `
    <div class="flex flex-col items-center justify-around w-full h-full p-4 bgbw">
    <p class="text-center anton txtwb opacity-80">Follow to have more videos on your feeds</p>
    <div class="flex flex-col w-full h-fit">
        <p class="txtwb">suggestions</p>
        <div class="flex w-full overflow-x-auto overflow-y-hidden h-fit">
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
            <div class="w-[180px] h-[260px] mr-1 rounded-md p-6 flex justify-around items-center box-border flex-col bg-[#8f8f8f]">
                <img class="w-[100px] h-[100px] rounded-[50%]" src="./public/face.png" alt="">
                <p class="-tracking-widest anton txtwb">Mark Angel</p>
                <p class="font-serif opacity-60">@markangelcomedy</p>
                <button class="cursor-pointer w-[80%] h-fit py-2 px-4 bg-[#f83030] text-white font-medium">follow</button>
            </div>
            
        </div>
    </div>
</div>
    `
}

const forYouContent =()=>{
    document.getElementById('contentContainer').innerHTML =`
    <div class="relative flex items-center justify-center w-full h-full scroll-item">
    <div 
    onclick="
        if(this.children[0].getAttribute('src') == './public/play.png'){
            this.children[0].setAttribute('src', './public/pause.png');
            this.nextElementSibling.play();
            this.nextElementSibling.muted = false;
            this.classList.add('opacity-0')
        }else{  
            this.children[0].setAttribute('src', './public/play.png');
            this.nextElementSibling.pause();
            this.nextElementSibling.muted = false;
            this.classList.remove('opacity-0')
        }
        "
    class="absolute z-[100] flex items-center justify-center w-full h-full">
        <img 
        onloadeddata="
        if(this.parentElement.nextElementSibling.paused){
            this.setAttribute('src', './public/play.png')
            this.classList.remove('opacity-0')
        }else{
            this.setAttribute('src', './public/pause.png')
            this.classList.add('opacity-0')
        }
        "
        class="cursor-pointer playbtn" 
        src="./public/play.png" alt="">
    </div>
    <video 
        onloadeddata="intersectThis(this);"
        onplay="setvplay('true');setTimeout(()=>{setvplay('true')},1000)
                this.previousElementSibling.children[0].setAttribute('src', './public/pause.png')
                this.previousElementSibling.children[0].classList.add('opacity-0')"
                onpause="setvplay('false');
                this.previousElementSibling.children[0].setAttribute('src', './public/play.png')
                this.previousElementSibling.children[0].classList.remove('opacity-0')"
        loading="lazy" 
        onwaiting="document.getElementById('bigPlayIcon').style.opacity = '1';document.getElementById('bigPlayIcon').setAttribute('src', './public/loading-rings.gif');"
        loop 
        muted
        src="./public/videosample.mp4"
        class="md:max-w-[1000px] max-h-full"
        >
    </video>
    <!-- NAV VIDEO RIGHT SIDE -->
    <div class="z-[201] navright w-fit h-full max-h-[80%] top-[10%] right-[8px] flex items-center flex-col justify-center absolute">
        <div class="my-4 w-fit h-fit">
            <img onclick="profileContent();" class="navrightimg rounded-[50%] border-white border-solid border-[2px]" src="./public/face.png" alt="">
            <img class="navrightimg2 relative bottom-[10px] left-[17px]" src="./public/plus.png" alt="">
        </div>
        <div class="flex-col items-center justify-center my-flex">
            <img onclick="if(this.getAttribute('src') == './public/heart.png'){this.setAttribute('src', './public/hearts.png')}else{this.setAttribute('src', './public/heart.png')};this.classList.add('flip-scale-up-hor');setTimeout(()=>{this.classList.remove('flip-scale-up-hor')},500)" 
            src="./public/heart.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="text-center navrighttxt anton inverter">224k</p>
        </div>
        <div onclick="loadComments();document.getElementById('modalContainer').style.height = '100vh'" class="flex flex-col items-center justify-center my-4">
            <img 
            src="./public/chat (1).png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            onclick="loadShare();document.getElementById('modalContainer').style.height = '50vh'"
            src="./public/share.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            id="modeSwitch"
            onclick="
            if(this.getAttribute('src') == './public/moon.png'){
                this.setAttribute('src', './public/sun.png')
                document.getElementById('body').classList.add('dark')
            }else{
                this.setAttribute('src', './public/moon.png')
                document.getElementById('body').classList.remove('dark')
            }
            "
            src="./public/moon.png" alt="" 
            class="relative cursor-pointer navrightimg3">
        </div>
    </div>

    <!-- NAV VIDEO LEFT SIDE -->
    <div class="z-[101] navright w-fit max-w-[300px] h-fit max-h-[80%] bottom-[10%] left-[8px] flex items-start p-3 flex-col justify-end absolute">
        <p class="mb-2 text-3xl shadow-md anton break-word txtwb">markangelcomedy</p>
        <p class="mb-2 text-xl shadow-md anton break-word txtwb">Valentine goes wrong</p>
        <div class="rolling-text-container">
            <div class="rolling-text">
              <span class="mb-2 text-xl shadow-md w-fit anton txtwb">original sound and quality picture with canon for comedy</span>
              <!-- <span class="mb-2 text-xl shadow-md anton txtwb">original sound and quality picture with canon for comedy</span> -->
            </div>
          </div>
    </div>
    
</div>
    <div class="relative flex items-center justify-center w-full h-full scroll-item">
    <div 
    onclick="
        if(this.children[0].getAttribute('src') == './public/play.png'){
            this.children[0].setAttribute('src', './public/pause.png');
            this.nextElementSibling.play();
            this.nextElementSibling.muted = false;
            this.classList.add('opacity-0')
        }else{  
            this.children[0].setAttribute('src', './public/play.png');
            this.nextElementSibling.pause();
            this.nextElementSibling.muted = false;
            this.classList.remove('opacity-0')
        }
        "
    class="absolute z-[100] flex items-center justify-center w-full h-full">
        <img 
        onloadeddata="
        if(this.parentElement.nextElementSibling.paused){
            this.setAttribute('src', './public/play.png')
            this.classList.remove('opacity-0')
        }else{
            this.setAttribute('src', './public/pause.png')
            this.classList.add('opacity-0')
        }
        "
        class="cursor-pointer playbtn" 
        src="./public/play.png" alt="">
    </div>
    <video 
        onloadeddata="intersectThis(this);"
        onplay="setvplay('true');setTimeout(()=>{setvplay('true')},1000)
                this.previousElementSibling.children[0].setAttribute('src', './public/pause.png')
                this.previousElementSibling.children[0].classList.add('opacity-0')"        
                onpause="setvplay('false');
                this.previousElementSibling.children[0].setAttribute('src', './public/play.png')
                this.previousElementSibling.children[0].classList.remove('opacity-0')"
        loading="lazy" 
        onwaiting="document.getElementById('bigPlayIcon').style.opacity = '1';document.getElementById('bigPlayIcon').setAttribute('src', './public/loading-rings.gif');"
        loop 
        muted
        src="./public/videosample2.mp4"
        class="md:max-w-[1000px] max-h-full"
        >
    </video>
    <!-- NAV VIDEO RIGHT SIDE -->
    <div class="z-[201] navright w-fit h-full max-h-[80%] top-[10%] right-[8px] flex items-center flex-col justify-center absolute">
        <div class="my-4 w-fit h-fit">
            <img onclick="profileContent();" class="navrightimg rounded-[50%] border-white border-solid border-[2px]" src="./public/face.png" alt="">
            <img class="navrightimg2 relative bottom-[10px] left-[17px]" src="./public/plus.png" alt="">
        </div>
        <div class="flex-col items-center justify-center my-flex">
            <img onclick="if(this.getAttribute('src') == './public/heart.png'){this.setAttribute('src', './public/hearts.png')}else{this.setAttribute('src', './public/heart.png')};this.classList.add('flip-scale-up-hor');setTimeout(()=>{this.classList.remove('flip-scale-up-hor')},500)" 
            src="./public/heart.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="text-center navrighttxt anton inverter">224k</p>
        </div>
        <div onclick="loadComments();document.getElementById('modalContainer').style.height = '100vh'" class="flex flex-col items-center justify-center my-4">
            <img 
            src="./public/chat (1).png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            onclick="loadShare();document.getElementById('modalContainer').style.height = '50vh'"
            src="./public/share.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            id="modeSwitch"
            onclick="
            if(this.getAttribute('src') == './public/moon.png'){
                this.setAttribute('src', './public/sun.png')
                document.getElementById('body').classList.add('dark')
            }else{
                this.setAttribute('src', './public/moon.png')
                document.getElementById('body').classList.remove('dark')
            }
            "
            src="./public/moon.png" alt="" 
            class="relative cursor-pointer navrightimg3">
        </div>
    </div>

    <!-- NAV VIDEO LEFT SIDE -->
    <div class="z-[101] navright w-fit max-w-[300px] h-fit max-h-[80%] bottom-[10%] left-[8px] flex items-start p-3 flex-col justify-end absolute">
        <p class="mb-2 text-3xl shadow-md anton break-word txtwb">markangelcomedy</p>
        <p class="mb-2 text-xl shadow-md anton break-word txtwb">Valentine goes wrong</p>
        <div class="rolling-text-container">
            <div class="rolling-text">
              <span class="mb-2 text-xl shadow-md w-fit anton txtwb">original sound and quality picture with canon for comedy</span>
              <!-- <span class="mb-2 text-xl shadow-md anton txtwb">original sound and quality picture with canon for comedy</span> -->
            </div>
          </div>
    </div>
    
</div>
    <div class="relative flex items-center justify-center w-full h-full scroll-item">
    <div 
    onclick="
        if(this.children[0].getAttribute('src') == './public/play.png'){
            this.children[0].setAttribute('src', './public/pause.png');
            this.nextElementSibling.play();
            this.nextElementSibling.muted = false;
            this.classList.add('opacity-0')
        }else{  
            this.children[0].setAttribute('src', './public/play.png');
            this.nextElementSibling.pause();
            this.nextElementSibling.muted = false;
            this.classList.remove('opacity-0')
        }
        "
    class="absolute z-[100] flex items-center justify-center w-full h-full">
        <img 
        onloadeddata="
        if(this.parentElement.nextElementSibling.paused){
            this.setAttribute('src', './public/play.png')
            this.classList.remove('opacity-0')
        }else{
            this.setAttribute('src', './public/pause.png')
            this.classList.add('opacity-0')
        }
        "
        class="cursor-pointer playbtn" 
        src="./public/play.png" alt="">
    </div>
    <video 
        onloadeddata="intersectThis(this);"
        onplay="setvplay('true');setTimeout(()=>{setvplay('true')},1000)
                this.previousElementSibling.children[0].setAttribute('src', './public/pause.png')
                this.previousElementSibling.children[0].classList.add('opacity-0')"       
                onpause="setvplay('false');
                this.previousElementSibling.children[0].setAttribute('src', './public/play.png')
                this.previousElementSibling.children[0].classList.remove('opacity-0')"
        loading="lazy" 
        onwaiting="document.getElementById('bigPlayIcon').style.opacity = '1';document.getElementById('bigPlayIcon').setAttribute('src', './public/loading-rings.gif');"
        loop 
        muted
        src="./public/videosample3.mp4"
        class="md:max-w-[1000px] max-h-full"
        >
    </video>
    <!-- NAV VIDEO RIGHT SIDE -->
    <div class="z-[201] navright w-fit h-full max-h-[80%] top-[10%] right-[8px] flex items-center flex-col justify-center absolute">
        <div class="my-4 w-fit h-fit">
            <img onclick="profileContent();" class="navrightimg rounded-[50%] border-white border-solid border-[2px]" src="./public/face.png" alt="">
            <img class="navrightimg2 relative bottom-[10px] left-[17px]" src="./public/plus.png" alt="">
        </div>
        <div class="flex-col items-center justify-center my-flex">
            <img onclick="if(this.getAttribute('src') == './public/heart.png'){this.setAttribute('src', './public/hearts.png')}else{this.setAttribute('src', './public/heart.png')};this.classList.add('flip-scale-up-hor');setTimeout(()=>{this.classList.remove('flip-scale-up-hor')},500)" 
            src="./public/heart.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="text-center navrighttxt anton inverter">224k</p>
        </div>
        <div onclick="loadComments();document.getElementById('modalContainer').style.height = '100vh'" class="flex flex-col items-center justify-center my-4">
            <img 
            src="./public/chat (1).png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            onclick="loadShare();document.getElementById('modalContainer').style.height = '50vh'"
            src="./public/share.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            id="modeSwitch"
            onclick="
            if(this.getAttribute('src') == './public/moon.png'){
                this.setAttribute('src', './public/sun.png')
                document.getElementById('body').classList.add('dark')
            }else{
                this.setAttribute('src', './public/moon.png')
                document.getElementById('body').classList.remove('dark')
            }
            "
            src="./public/moon.png" alt="" 
            class="relative cursor-pointer navrightimg3">
        </div>
    </div>

    <!-- NAV VIDEO LEFT SIDE -->
    <div class="z-[101] navright w-fit max-w-[300px] h-fit max-h-[80%] bottom-[10%] left-[8px] flex items-start p-3 flex-col justify-end absolute">
        <p class="mb-2 text-3xl shadow-md anton break-word txtwb">markangelcomedy</p>
        <p class="mb-2 text-xl shadow-md anton break-word txtwb">Valentine goes wrong</p>
        <div class="rolling-text-container">
            <div class="rolling-text">
              <span class="mb-2 text-xl shadow-md w-fit anton txtwb">original sound and quality picture with canon for comedy</span>
              <!-- <span class="mb-2 text-xl shadow-md anton txtwb">original sound and quality picture with canon for comedy</span> -->
            </div>
          </div>
    </div>
    
</div>
    <div class="relative flex items-center justify-center w-full h-full scroll-item">
    <div 
    onclick="
        if(this.children[0].getAttribute('src') == './public/play.png'){
            this.children[0].setAttribute('src', './public/pause.png');
            this.nextElementSibling.play();
            this.nextElementSibling.muted = false;
            this.classList.add('opacity-0')
        }else{  
            this.children[0].setAttribute('src', './public/play.png');
            this.nextElementSibling.pause();
            this.nextElementSibling.muted = false;
            this.classList.remove('opacity-0')
        }
        "
    class="absolute z-[100] flex items-center justify-center w-full h-full">
        <img 
        onloadeddata="
        if(this.parentElement.nextElementSibling.paused){
            this.setAttribute('src', './public/play.png')
            this.classList.remove('opacity-0')
        }else{
            this.setAttribute('src', './public/pause.png')
            this.classList.add('opacity-0')
        }
        "
        class="cursor-pointer playbtn" 
        src="./public/play.png" alt="">
    </div>
    <video 
        onloadeddata="intersectThis(this);"
        onplay="setvplay('true');setTimeout(()=>{setvplay('true')},1000)
                this.previousElementSibling.children[0].setAttribute('src', './public/pause.png')
                this.previousElementSibling.children[0].classList.add('opacity-0')"        
                onpause="setvplay('false');
                this.previousElementSibling.children[0].setAttribute('src', './public/play.png')
                this.previousElementSibling.children[0].classList.remove('opacity-0')"
        loading="lazy" 
        onwaiting="document.getElementById('bigPlayIcon').style.opacity = '1';document.getElementById('bigPlayIcon').setAttribute('src', './public/loading-rings.gif');"
        loop 
        muted
        src="./public/videosample4.mp4"
        class="md:max-w-[1000px] max-h-full"
        >
    </video>
    <!-- NAV VIDEO RIGHT SIDE -->
    <div class="z-[201] navright w-fit h-full max-h-[80%] top-[10%] right-[8px] flex items-center flex-col justify-center absolute">
        <div class="my-4 w-fit h-fit">
            <img onclick="profileContent();" class="navrightimg rounded-[50%] border-white border-solid border-[2px]" src="./public/face.png" alt="">
            <img class="navrightimg2 relative bottom-[10px] left-[17px]" src="./public/plus.png" alt="">
        </div>
        <div class="flex-col items-center justify-center my-flex">
            <img onclick="if(this.getAttribute('src') == './public/heart.png'){this.setAttribute('src', './public/hearts.png')}else{this.setAttribute('src', './public/heart.png')};this.classList.add('flip-scale-up-hor');setTimeout(()=>{this.classList.remove('flip-scale-up-hor')},500)" 
            src="./public/heart.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="text-center navrighttxt anton inverter">224k</p>
        </div>
        <div onclick="loadComments();document.getElementById('modalContainer').style.height = '100vh'" class="flex flex-col items-center justify-center my-4">
            <img 
            src="./public/chat (1).png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            onclick="loadShare();document.getElementById('modalContainer').style.height = '50vh'"
            src="./public/share.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            id="modeSwitch"
            onclick="
            if(this.getAttribute('src') == './public/moon.png'){
                this.setAttribute('src', './public/sun.png')
                document.getElementById('body').classList.add('dark')
            }else{
                this.setAttribute('src', './public/moon.png')
                document.getElementById('body').classList.remove('dark')
            }
            "
            src="./public/moon.png" alt="" 
            class="relative cursor-pointer navrightimg3">
        </div>
    </div>

    <!-- NAV VIDEO LEFT SIDE -->
    <div class="z-[101] navright w-fit max-w-[300px] h-fit max-h-[80%] bottom-[10%] left-[8px] flex items-start p-3 flex-col justify-end absolute">
        <p class="mb-2 text-3xl shadow-md anton break-word txtwb">markangelcomedy</p>
        <p class="mb-2 text-xl shadow-md anton break-word txtwb">Valentine goes wrong</p>
        <div class="rolling-text-container">
            <div class="rolling-text">
              <span class="mb-2 text-xl shadow-md w-fit anton txtwb">original sound and quality picture with canon for comedy</span>
              <!-- <span class="mb-2 text-xl shadow-md anton txtwb">original sound and quality picture with canon for comedy</span> -->
            </div>
          </div>
    </div>
    
</div>
    <div class="relative flex items-center justify-center w-full h-full scroll-item">
    <div 
    onclick="
        if(this.children[0].getAttribute('src') == './public/play.png'){
            this.children[0].setAttribute('src', './public/pause.png');
            this.nextElementSibling.play();
            this.nextElementSibling.muted = false;
            this.classList.add('opacity-0')
        }else{  
            this.children[0].setAttribute('src', './public/play.png');
            this.nextElementSibling.pause();
            this.nextElementSibling.muted = false;
            this.classList.remove('opacity-0')
        }
        "
    class="absolute z-[100] flex items-center justify-center w-full h-full">
        <img 
        onloadeddata="
        if(this.parentElement.nextElementSibling.paused){
            this.setAttribute('src', './public/play.png')
            this.classList.remove('opacity-0')
        }else{
            this.setAttribute('src', './public/pause.png')
            this.classList.add('opacity-0')
        }
        "
        class="cursor-pointer playbtn" 
        src="./public/play.png" alt="">
    </div>
    <video 
        onloadeddata="intersectThis(this);"
        onplay="setvplay('true');setTimeout(()=>{setvplay('true')},1000)
                this.previousElementSibling.children[0].setAttribute('src', './public/pause.png')
                this.previousElementSibling.children[0].classList.add('opacity-0')"        
        onpause="setvplay('false');
                this.previousElementSibling.children[0].setAttribute('src', './public/play.png')
                this.previousElementSibling.children[0].classList.remove('opacity-0')"
        loading="lazy" 
        onwaiting="document.getElementById('bigPlayIcon').style.opacity = '1';document.getElementById('bigPlayIcon').setAttribute('src', './public/loading-rings.gif');"
        loop 
        muted
        src="./public/videosample5.mp4"
        class="md:max-w-[1000px] max-h-full"
        >
    </video>
    <!-- NAV VIDEO RIGHT SIDE -->
    <div class="z-[201] navright w-fit h-full max-h-[80%] top-[10%] right-[8px] flex items-center flex-col justify-center absolute">
        <div class="my-4 w-fit h-fit">
            <img onclick="profileContent();" class="navrightimg rounded-[50%] border-white border-solid border-[2px]" src="./public/face.png" alt="">
            <img class="navrightimg2 relative bottom-[10px] left-[17px]" src="./public/plus.png" alt="">
        </div>
        <div class="flex-col items-center justify-center my-flex">
            <img onclick="if(this.getAttribute('src') == './public/heart.png'){this.setAttribute('src', './public/hearts.png')}else{this.setAttribute('src', './public/heart.png')};this.classList.add('flip-scale-up-hor');setTimeout(()=>{this.classList.remove('flip-scale-up-hor')},500)" 
            src="./public/heart.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="text-center navrighttxt anton inverter">224k</p>
        </div>
        <div onclick="loadComments();document.getElementById('modalContainer').style.height = '100vh'" class="flex flex-col items-center justify-center my-4">
            <img 
            src="./public/chat (1).png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            onclick="loadShare();document.getElementById('modalContainer').style.height = '50vh'"
            src="./public/share.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            id="modeSwitch"
            onclick="
            if(this.getAttribute('src') == './public/moon.png'){
                this.setAttribute('src', './public/sun.png')
                document.getElementById('body').classList.add('dark')
            }else{
                this.setAttribute('src', './public/moon.png')
                document.getElementById('body').classList.remove('dark')
            }
            "
            src="./public/moon.png" alt="" 
            class="relative cursor-pointer navrightimg3">
        </div>
    </div>

    <!-- NAV VIDEO LEFT SIDE -->
    <div class="z-[101] navright w-fit max-w-[300px] h-fit max-h-[80%] bottom-[10%] left-[8px] flex items-start p-3 flex-col justify-end absolute">
        <p class="mb-2 text-3xl shadow-md anton break-word txtwb">markangelcomedy</p>
        <p class="mb-2 text-xl shadow-md anton break-word txtwb">Valentine goes wrong</p>
        <div class="rolling-text-container">
            <div class="rolling-text">
              <span class="mb-2 text-xl shadow-md w-fit anton txtwb">original sound and quality picture with canon for comedy</span>
              <!-- <span class="mb-2 text-xl shadow-md anton txtwb">original sound and quality picture with canon for comedy</span> -->
            </div>
          </div>
    </div>
    
</div>
    <div class="relative flex items-center justify-center w-full h-full scroll-item">
    <div 
    onclick="
        if(this.children[0].getAttribute('src') == './public/play.png'){
            this.children[0].setAttribute('src', './public/pause.png');
            this.nextElementSibling.play();
            this.nextElementSibling.muted = false;
            this.classList.add('opacity-0')
        }else{  
            this.children[0].setAttribute('src', './public/play.png');
            this.nextElementSibling.pause();
            this.nextElementSibling.muted = false;
            this.classList.remove('opacity-0')
        }
        "
    class="absolute z-[100] flex items-center justify-center w-full h-full">
        <img 
        onloadeddata="
        if(this.parentElement.nextElementSibling.paused){
            this.setAttribute('src', './public/play.png')
            this.classList.remove('opacity-0')
        }else{
            this.setAttribute('src', './public/pause.png')
            this.classList.add('opacity-0')
        }
        "
        class="cursor-pointer playbtn" 
        src="./public/play.png" alt="">
    </div>
    <video 
        onloadeddata="intersectThis(this);"
        onplay="setvplay('true');setTimeout(()=>{setvplay('true')},1000)
                this.previousElementSibling.children[0].setAttribute('src', './public/pause.png')
                this.previousElementSibling.children[0].classList.add('opacity-0')"        
        onpause="setvplay('false');
                this.previousElementSibling.children[0].setAttribute('src', './public/play.png')
                this.previousElementSibling.children[0].classList.remove('opacity-0')"
        loading="lazy" 
        onwaiting="document.getElementById('bigPlayIcon').style.opacity = '1';document.getElementById('bigPlayIcon').setAttribute('src', './public/loading-rings.gif');"
        loop 
        muted
        src="./public/videosample2.mp4"
        class="md:max-w-[1000px] max-h-full"
        >
    </video>
    <!-- NAV VIDEO RIGHT SIDE -->
    <div class="z-[201] navright w-fit h-full max-h-[80%] top-[10%] right-[8px] flex items-center flex-col justify-center absolute">
        <div class="my-4 w-fit h-fit">
            <img onclick="profileContent();" class="navrightimg rounded-[50%] border-white border-solid border-[2px]" src="./public/face.png" alt="">
            <img class="navrightimg2 relative bottom-[10px] left-[17px]" src="./public/plus.png" alt="">
        </div>
        <div class="flex-col items-center justify-center my-flex">
            <img onclick="if(this.getAttribute('src') == './public/heart.png'){this.setAttribute('src', './public/hearts.png')}else{this.setAttribute('src', './public/heart.png')};this.classList.add('flip-scale-up-hor');setTimeout(()=>{this.classList.remove('flip-scale-up-hor')},500)" 
            src="./public/heart.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="text-center navrighttxt anton inverter">224k</p>
        </div>
        <div onclick="loadComments();document.getElementById('modalContainer').style.height = '100vh'" class="flex flex-col items-center justify-center my-4">
            <img 
            src="./public/chat (1).png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            onclick="loadShare();document.getElementById('modalContainer').style.height = '50vh'"
            src="./public/share.png" alt="" 
            class="relative cursor-pointer navrightimg3">
            <p class="navrighttxt anton inverter ">224k</p>
        </div>
        <div class="flex flex-col items-center justify-center my-4">
            <img 
            id="modeSwitch"
            onclick="
            if(this.getAttribute('src') == './public/moon.png'){
                this.setAttribute('src', './public/sun.png')
                document.getElementById('body').classList.add('dark')
            }else{
                this.setAttribute('src', './public/moon.png')
                document.getElementById('body').classList.remove('dark')
            }
            "
            src="./public/moon.png" alt="" 
            class="relative cursor-pointer navrightimg3">
        </div>
    </div>

    <!-- NAV VIDEO LEFT SIDE -->
    <div class="z-[101] navright w-fit max-w-[300px] h-fit max-h-[80%] bottom-[10%] left-[8px] flex items-start p-3 flex-col justify-end absolute">
        <p class="mb-2 text-3xl shadow-md anton break-word txtwb">markangelcomedy</p>
        <p class="mb-2 text-xl shadow-md anton break-word txtwb">Valentine goes wrong</p>
        <div class="rolling-text-container">
            <div class="rolling-text">
              <span class="mb-2 text-xl shadow-md w-fit anton txtwb">original sound and quality picture with canon for comedy</span>
              <!-- <span class="mb-2 text-xl shadow-md anton txtwb">original sound and quality picture with canon for comedy</span> -->
            </div>
          </div>
    </div>
    
</div>
    `
}

const loadShare =()=>{
    document.getElementById('modalContainer').innerHTML = `
    <div class="flex justify-end w-full px-2 my-2 cursor-pointer p h-fit">
                <img
                onclick="this.parentElement.parentElement.style.height = '0px'"
                 class="w-4 inverterRev" src="./public/close.png" alt="">
             </div>
             <!-- COMMENTS -->
             <P class="relative top-[-25px] text-center txtbw anton w-fit mx-auto">Share to</P>
             <!-- SHARE CONTENT -->
             <div id="shareContainer" class="flex justify-between w-full overflow-auto shadow-inner h-fit">
                
                <div class="min-w-[120px] min-h-[120px] p-4 darkshadow shadow-xl m-2 cursor-pointer flex flex-col justify-center items-center border-[2px] border-[#dadada] dark:border-[#252525]">
                    <img class="w-[50px] h-[50px]" src="./public/twitter (1).png" alt="">
                    <p class="anton txtbw opacity-60">Twitter</p>
                </div>
                
                <div class="min-w-[120px] min-h-[120px] p-4 darkshadow shadow-xl m-2 cursor-pointer flex flex-col justify-center items-center border-[2px] border-[#dadada] dark:border-[#252525]">
                    <img class="w-[50px] h-[50px]" src="./public/facebook (1).png" alt="">
                    <p class="anton txtbw opacity-60">Facebook</p>
                </div>
                
                <div class="min-w-[120px] min-h-[120px] p-4 darkshadow shadow-xl m-2 cursor-pointer flex flex-col justify-center items-center border-[2px] border-[#dadada] dark:border-[#252525]">
                    <img class="w-[50px] h-[50px]" src="./public/link.png" alt="">
                    <p class="anton txtbw opacity-60">Copy Link</p>
                </div>
                
                <div class="min-w-[120px] min-h-[120px] p-4 darkshadow shadow-xl m-2 cursor-pointer flex flex-col justify-center items-center border-[2px] border-[#dadada] dark:border-[#252525]">
                    <img class="w-[50px] h-[50px]" src="./public/whatsapp.png" alt="">
                    <p class="anton txtbw opacity-60">Whatsapp</p>
                </div>
                
                <div class="min-w-[120px] min-h-[120px] p-4 darkshadow shadow-xl m-2 cursor-pointer flex flex-col justify-center items-center border-[2px] border-[#dadada] dark:border-[#252525]">
                    <img class="w-[50px] h-[50px]" src="./public/pinterest.png" alt="">
                    <p class="anton txtbw opacity-60">Pinterest</p>
                </div>
                
                <div class="min-w-[120px] min-h-[120px] p-4 darkshadow shadow-xl m-2 cursor-pointer flex flex-col justify-center items-center border-[2px] border-[#dadada] dark:border-[#252525]">
                    <img class="w-[50px] h-[50px]" src="./public/telegram (1).png" alt="">
                    <p class="anton txtbw opacity-60">Telegram</p>
                </div>
                
                <div class="min-w-[120px] min-h-[120px] p-4 darkshadow shadow-xl m-2 cursor-pointer flex flex-col justify-center items-center border-[2px] border-[#dadada] dark:border-[#252525]">
                    <img class="w-[50px] h-[50px]" src="./public/message (1).png" alt="">
                    <p class="anton txtbw opacity-60">sms</p>
                </div>

             </div>`
}

const loadComments =()=>{
    document.getElementById('modalContainer').innerHTML = `
    <div class="flex justify-end w-full px-2 my-2 cursor-pointer p h-fit">
                <img
                onclick="this.parentElement.parentElement.style.height = '0px'"
                 class="w-4 inverterRev" src="./public/close.png" alt="">
             </div>
             <!-- COMMENTS -->
             <P class="relative top-[-25px] text-center txtbw anton  w-fit mx-auto">1000 comments</P>
             <!-- COMMENT CONTAINER -->
             <div class="commentContainer">
                 
                 <div class="flex flex-col w-full h-fit">
                     <div class="flex w-full h-fit">
                         <img class="w-[40px] mx-2 h-[40px] rounded-[50%]" src="./public/face.png" alt="">
                         <div class="w-full">
                             <p class="font-bold anton">Tricia</p>
                             <p class="flex justify-between w-full nunito">my opinion on this matter is that he is very funny 
                                <span class="block">
                                    <img onclick="
                                        if(this.getAttribute('src') == './public/love.png'){
                                            this.setAttribute('src', './public/loved.png')
                                        }else{
                                            this.setAttribute('src', './public/love.png')
                                        }
                                        " src="./public/love.png" alt="">
                                    <span>10</span>
                                </span>
                             </p>
                         </div>
                     </div>
                     <!-- REPLY CONTAINER -->
                     <div class="w-[100%] scale-90 pl-[70px]  h-0 overflow-hidden">
                         <div class="flex w-full h-fit">
                             <img class="w-[40px] mx-2 h-[40px] rounded-[50%]" src="./public/face.png" alt="">
                             <div class="w-full">
                                 <p class="font-bold anton">Tricia</p>
                                 <p class="nunito">my opinion on this matter is that he is very funny</p>
                             </div>
                         </div>
                         <div class="flex w-full h-fit">
                             <img class="w-[40px] mx-2 h-[40px] rounded-[50%]" src="./public/face.png" alt="">
                             <div class="w-full">
                                 <p class="font-bold anton">Tricia</p>
                                 <p class="nunito">my opinion on this matter is that he is very funny</p>
                             </div>
                         </div>
                     </div>
                     <p 
                         class="px-[50px] italic txtbw w-fit nunito hover:underline cursor-pointer" 
                      onloadeddata="this.previousElementSibling.innerHTML == ''? this.classList.add('hidden') : this.classList.remove('hidden')" 
                     onclick="
                     if(this.previousElementSibling.classList.contains('h-0')){
                        this.previousElementSibling.classList.add('h-fit')
                        this.previousElementSibling.classList.remove('h-0')
                     }else{
                         this.previousElementSibling.classList.remove('h-fit')
                         this.previousElementSibling.classList.add('h-0')
                         
                     }
                     ">4 replies</p>
                 </div>
                 
             </div>
    `
}

const rightNav =(action)=>{
    if(window.innerWidth < 768){
        if(action == 'OPEN'){
            addpc();
            if(document.getElementById('JavierContainer')){
                document.getElementById('JavierContainer').classList.remove('containerGridClose');
            }
        }
        if(action == 'CLOSE'){
            removepc();
            if(document.getElementById('JavierContainer')){
                document.getElementById('JavierContainer').classList.add('containerGridClose');
            }
        }
    }
}


window.addEventListener('load', e=>{mainHeader();if(document.getElementById('forYou'))document.getElementById('forYou').click();})

setTimeout(() => {
    // document.getElementById('modeSwitch').click();
}, 2000);

const intersectThis =(video)=>{
    // return
    const myElement = video;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is in viewport
    //   setTimeout(() => {
        video.volume = vvolume;
          video.muted = false;
        //   if(vmute == true) video.muted = true;
        // }, 200);   
        console.log('Element is in viewport');
        console.log('vplay', vplay)
        if(vplay == true)video.play();

    } else {
        // Element is not in viewport
      video.pause();
      console.log('Element is not in viewport');
    }
  });
}, { threshold: 0.5 }); // play video when it's 50% in view

observer.observe(myElement);
  }
