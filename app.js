const localStr = new LocalStr();
const weather = new Weather('9f3c46c3d071422d2d04c94d9c9aa667', localStr.getLocation().city, localStr.getLocation().state);
const ui = new UI();
const savebtn = document.querySelector('#save-loc');
const city = document.querySelector('#city');
const state = document.querySelector('#state');

document.addEventListener('DOMContentLoaded', getWeather);
savebtn.addEventListener('click',(e)=>{
    weather.changeLocation(city.value,state.value);
    getWeather();
    localStr.setLocation(city.value,state.value);
    $('#change-loc-Modal').modal('hide');
    $('.form-control').val('');
}); 

function getWeather() {
    weather.getWeather().then((data) => {
        ui.paint(data); 
    }).catch((err) => {
        console.log(err);
    })
};



