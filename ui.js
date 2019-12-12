class UI{
    
    constructor(){
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.pressure = document.querySelector('#w-pressure');
        this.visibility = document.querySelector('#w-visibility');
        this.wind = document.querySelector('#w-wind');
    }

    paint(data){
        this.location.textContent = `${data.name}, ${data.sys.country}`;
        this.desc.textContent = data.weather[0].description;
        this.string.textContent = `${data.main.temp}${String.fromCharCode(176)}C`;
        this.icon.setAttribute("src",`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        this.humidity.textContent = `humidity: ${data.main.humidity}`;
        this.pressure.textContent = `pressure: ${data.main.pressure}`;
        this.visibility.textContent = `visibility: ${data.visibility}`;
        this.wind.textContent = `wind-speed: ${data.wind.speed}`;
    }

}
