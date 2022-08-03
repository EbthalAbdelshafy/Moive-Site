//  Open and Close Side Navbar
let sideNav=0,True=1;
$(".strip-toggel-menu").click(function()
{True?($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"),
sideNav=$(".nav-tab-menu").width(),
$(".strip-header-nav").css("left",sideNav),
$(".fa-align-justify").toggleClass("fa-times"),
$(".nav-tab-menu .item1").animate({opacity:"1",paddingTop:"35px"},1000),
$(".nav-tab-menu .item2").animate({opacity:"1",paddingTop:"25px"},1100),
$(".nav-tab-menu .item3").animate({opacity:"1",paddingTop:"25px"},1200),
$(".nav-tab-menu .item4").animate({opacity:"1",paddingTop:"25px"},1300),
$(".nav-tab-menu .item5").animate({opacity:"1",paddingTop:"25px"},1400),
$(".nav-tab-menu .item6").animate({opacity:"1",paddingTop:"25px"},1500),
True=!True):($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"),
$(".fa-align-justify").toggleClass("fa-times"),
$(".strip-header-nav").css("left",0),
$(".nav-tab-menu li").animate({opacity:"0",paddingTop:"500px"},500),True=!True)});


//   Get Data from API
URL="https://api.themoviedb.org/3/movie/now_playing?api_key=e21f4f04a32cda8566afc6fe6efea5c7";
nowPlayingUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=e21f4f04a32cda8566afc6fe6efea5c7";
popularUrl="https://api.themoviedb.org/3/movie/popular?api_key=e21f4f04a32cda8566afc6fe6efea5c7";
topRatedUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=e21f4f04a32cda8566afc6fe6efea5c7";
trendingUrl="https://api.themoviedb.org/3/trending/all/day?api_key=e21f4f04a32cda8566afc6fe6efea5c7";
latestUrl="https://api.themoviedb.org/3/movie/latest?api_key=e21f4f04a32cda8566afc6fe6efea5c7";
upComingUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=e21f4f04a32cda8566afc6fe6efea5c7";
let imgPath="https://image.tmdb.org/t/p/w500";
let div=document.getElementById("rowData") ;
let allMovies=[];
let MoviesLinks = document.getElementsByClassName(".nav-category");
getMovies();
//       Category  Function 
let categoryItem = document.getElementsByClassName("nav-category");
//console.log(categoryItem);
let categoryName="";
 for(let i =0;i<categoryItem.length;i++){
     categoryItem[i].addEventListener("click",function(myHtml){
    "Now playing"==(categoryName=myHtml.target.innerHTML)&&(URL=nowPlayingUrl,getMovies()),
    "Popular"==categoryName?(URL=popularUrl,getMovies()):
    "Top Rated"==categoryName?(URL=topRatedUrl,getMovies()):
    "Trending"==categoryName?(URL=trendingUrl,getMovies()):
     "Upcoming"==categoryName&&(URL=upComingUrl,getMovies())});
 }

//                   Get Api Function

function getMovies()
{
    let myHtml =new XMLHttpRequest;
    myHtml.open("get",URL),myHtml.send(),myHtml.onreadystatechange=function()
    {
        if(myHtml.readyState==4&&myHtml.status==200){
            allMovies=(allMovies=JSON.parse(myHtml.response)).results;
            console.log(allMovies);
            displayMovies();
        }
       
}
};
//getMovies();

//      Display Function
function displayMovies(){
let temp ="";
for(let i=0;i<allMovies.length;i++){
    temp +=`<div class="col-md-4 col-lg-4 my-3 ">
    <div class="Movie  shadow rounded position-relative"> 
    <div class="post "> 
    <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class=" w-100 img-fluid rounded"">
    
      <div class="layer d-flex align-items-center "> 
       <div class="info p-0 ">    
      <h2>${allMovies[i].original_title}</h2>
       <p>${allMovies[i].overview}</p> 
       <p >rate: ${allMovies[i].vote_average}</p> 
       <p>${allMovies[i].release_date}</p>
        </div>
        </div>
        </div>
       </div>
       </div>`
}
 div.innerHTML= temp;
}


//    get Movie by word function  
allMoviesByWord=document.getElementById("allMovies");

async function getMoviesByWord(event){
    let myHtml= new XMLHttpRequest;
    wordUlr="https://api.themoviedb.org/3/search/movie?query="+event+"&api_key=e21f4f04a32cda8566afc6fe6efea5c7"
    myHtml.open("get",wordUlr),myHtml.send(),
        myHtml.onreadystatechange=function()
        { if(myHtml.readyState==4&&myHtml.status==200)
        
            allMovies=(allMovies=JSON.parse(myHtml.response)).results,
        
            displayMovies()}
        
        };
allMoviesByWord.onkeyup=function()
{
    getMoviesByWord(allMoviesByWord.value)
};

//          Search Function
searchUrl="https://api.themoviedb.org/3/search/movie?query=mad&api_key=e21f4f04a32cda8566afc6fe6efea5c7";
searchTab=document.getElementById("searchWord");
searchTab.onkeyup=function()
 {let searchWord = searchTab.value,
    temp ="";

 for(let i=0;i<allMovies.length;i++){
 if(allMovies[i].original_title.includes( searchWord))
  temp += `<div class="col-md-4 col-lg-4 my-3 ">
  <div class="Movie  shadow rounded position-relative"> 
  <div class="post "> 
  <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class=" w-100 img-fluid rounded"">
  
    <div class="layer d-flex align-items-center "> 
     <div class="info p-0 ">    
    <h2>${allMovies[i].original_title}</h2>
     <p>${allMovies[i].overview}</p> 
     <p >rate: ${allMovies[i].vote_average}</p> 
     <p>${allMovies[i].release_date}</p>
      </div>
      </div>
      </div>
     </div>
     </div>`
  div.innerHTML= temp;
}};









//               Validation 


let userName=document.getElementById("name");
let userNameAlert=document.getElementById("namealert");
let userEmail=document.getElementById("email");
let userEmailAlert=document.getElementById("emailalert");
let userPhone=document.getElementById("phone");
let userPhoneAlert=document.getElementById("phonealert");
let userAge=document.getElementById("age");
let userAgeAlert=document.getElementById("agealert");
let userPassword=document.getElementById("password");
let userPasswordAlert=document.getElementById("passwordalert");
let userRePassword=document.getElementById("rePassword");
let userRePasswordAlert=document.getElementById("repasswordalert");

function userNameValidation()
{
    let regex = /^[a-zA-Z0-9]+$/;
    if(regex.test(userName.value)==true){
        userNameAlert.classList.add("d-none");
       userNameAlert.classList.remove("d-block");
    
    }
    else{
        userNameAlert.classList.add("d-block");
        userNameAlert.classList.remove("d-none");
    }
};
userName.addEventListener("keyup", userNameValidation);
function userEmailValidation()
{
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regex.test(userEmail.value)==true){
        userEmailAlert.classList.add("d-none");
       userEmailAlert.classList.remove("d-block");
    
    }
    else{
        userEmailAlert.classList.add("d-block");
        userEmailAlert.classList.remove("d-none");
    }
};
userEmail.addEventListener("keyup", userEmailValidation);

function userPhoneValidation()
{
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/;
    if(regex.test(userPhone.value)==true){
        userPhoneAlert.classList.add("d-none");
        userPhoneAlert.classList.remove("d-block");
    
    }
    else{
        userPhoneAlert.classList.add("d-block");
        userPhoneAlert.classList.remove("d-none");
    }
};
userPhone.addEventListener("keyup", userPhoneValidation);

function userAgeValidation()
{
    let regex = /^[1-9][0-9]?$|^100$/;
    if(regex.test(userAge.value)==true){
        userAgeAlert.classList.add("d-none");
        userAgeAlert.classList.remove("d-block");
    
    }
    else{
        userAgeAlert.classList.add("d-block");
        userAgeAlert.classList.remove("d-none");
    }
};
userAge.addEventListener("keyup", userAgeValidation);

function userPasswordValidation()
{
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(userPassword.value)==true){
        userPasswordAlert.classList.add("d-none");
        userPasswordAlert.classList.remove("d-block");
    
    }
    else{
        userPasswordAlert.classList.add("d-block");
        userPasswordAlert.classList.remove("d-none");
    }
};
userPassword.addEventListener("keyup", userPasswordValidation);

function userRePasswordValidation()
{
    if(userRePassword.value==userPassword.value){
        userRePasswordAlert.classList.add("d-none");
        userRePasswordAlert.classList.remove("d-block"); 
    }
    else{
        userRePasswordAlert.classList.add("d-block");
        userRePasswordAlert.classList.remove("d-none");
    }
};
userRePassword.addEventListener("keyup", userRePasswordValidation);