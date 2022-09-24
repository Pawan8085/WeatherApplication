const key='61e1eb173ed6d93e5e43a567fc7cb64f';
document.getElementById('icon').addEventListener('click',myfunc)
let city='balod';
async function balod(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let res = await fetch(url);
    let data = await res.json();
    append(data)
}
balod();
async function myfunc(){
   
    let city=document.getElementById('myinput').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let res = await fetch(url);
    let data = await res.json();
    append(data)
    
}
let mydiv=document.getElementById('div1');
function append(data){
    // console.log(data);
    // console.log(data.sys.sunrise)//sunset
    // console.log(data.wind.speed);
    // console.log(data.clouds.all);
    mydiv.innerHTML=null;
    let innerDiv=document.createElement('div');
    let h2=document.createElement('h2');
    h2.innerText=data.name;
    let mindiv=document.createElement('div');
    mindiv.setAttribute('id','minDiv')
    let p1=document.createElement('p');
    p1.innerText=`min temp ${data.main.temp_min}`;
    let minimg=document.createElement('img');
    minimg.src="https://cdn0.iconfinder.com/data/icons/flatline-color/512/weather-app-temperature-forecast-application-512.png";
    minimg.setAttribute('id','minImg');
    mindiv.append(p1,minimg);
    let maxdiv=document.createElement('div');
    maxdiv.setAttribute('id','maxDiv')
    let maximg=document.createElement('img');
    maximg.src="https://cdn0.iconfinder.com/data/icons/flatline-color/512/weather-app-temperature-forecast-application-512.png";
    maximg.setAttribute('id','maxImg');
    let p2=document.createElement('p')
    maxdiv.append(p2,maximg)
    p2.innerText=`max temp ${data.main.temp_min}`;
    let cloudDiv=document.createElement('div');
    cloudDiv.setAttribute('id','cloudDiv');
    let p3=document.createElement('p');
    p3.innerText=`cloud ${data.clouds.all}`;
    let cloudimg=document.createElement('img');
    cloudimg.src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png';
    cloudDiv.append(p3,cloudimg);
    let p4=document.createElement('p');
    p4.innerText=`sunrise ${data.sys.sunrise}`
    let p5=document.createElement('p');
    p5.innerText=`sunset ${data.sys.sunset}`
    let p6=document.createElement('p');
    p6.innerText=`wind ${data.wind.speed}km/h`
    innerDiv.append(h2,mindiv,maxdiv,cloudDiv,p4,p5,p6);
    mydiv.append(innerDiv);
    let iframe=document.getElementById('gmap_canvas');
        iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}