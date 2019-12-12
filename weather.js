// apiKey   
class Weather{

    constructor(apiKey,city,state){
        this.apiKey = apiKey;
        this.city = city;
        this.state = state;
    }

    async getWeather(){
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city,state){ 
        this.city = city;
        this.state = state;
    }

}

window.onbeforeunload = function (e) {
    localStorage.clear();
};


