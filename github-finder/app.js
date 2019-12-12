const usernameInput = document.querySelector('#usernameInput');
const github = new Github('c2527516df945cd4d21b','ce11f486c560fe37cb37befec4a561263c1520c3');
const ui = new UI();
//1. callback
// usernameInput.addEventListener('keyup',function(e){
//     github.getUser(e.target.value, function(response){
//         console.log(response);
//     });
// });

//2. async await 

usernameInput.addEventListener('keyup',function(e){
    const username = e.target.value;
    if(username !== '')
    {
        const profileData = github.getUser(username);
        
        profileData.then((profile)=>{
            if(profile.profileData.message !== 'Not Found'){
                ui.showProfile(profile.profileData);
                ui.showRepos(profile.reposData);
            }
            else{
                // display an alert for profile not found
                ui.showAlert('Profile not found for a given username','alert alert-danger');
                //ui.clearAlert();
            }
        },(reject)=>{
            console.log(`rejected due to ${reject}`);
        });
    }
    else{
        // remove profile
        ui.removeProfile();
    }
});
