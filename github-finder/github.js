// client id c2527516df945cd4d21b
// client secret ce11f486c560fe37cb37befec4a561263c1520c3
// url https://api.github.com/users/{username}

class Github{

    constructor(clientId, clientSecretId){
        this.clientId = clientId;
        this.clientSecretId = clientSecretId;
        this.http = new XMLHttpRequest();
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // get user using callback
    // getUser(username,callback){

    //     this.http.open('GET',`https://api.github.com/users/${username}`,true);

    //     const self = this.http;
    //     this.http.onload = function(){  
    //         callback(self.response);
    //     }

    //     this.http.send();
    // }
    
    //get user using fetch, await

    async getUser(username){

        //fetching profile data
        const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecretId}`);
        const profileData = await profileResponse.json();

        // fetching repos 
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecretId}`);
        const reposData = await reposResponse.json();
        return {
            profileData,
            reposData
        };
    }

}