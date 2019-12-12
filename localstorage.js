class LocalStr{
    
    constructor(){
        this.defaultCity = 'Miami';
        this.defaultState = 'us';
    }

    getLocation(){

        let city = '';
        let state = '';
        if(localStorage.getItem('city') !== null){
            city = localStorage.getItem('city');
        }
        else{
            city = this.defaultCity;
        }
        if(localStorage.getItem('state') !== null){
            state = localStorage.getItem('state');
        }
        else{
            state =  this.defaultState;
        }
        return{
            city : city,
            state : state
        }

    }

    setLocation(city,state){
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
    }

}