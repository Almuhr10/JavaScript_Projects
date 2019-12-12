class UI{

    constructor(){
         this.profileDiv = document.querySelector('#profileDiv');
         this.repoDiv = document.querySelector('#repoDiv');
    }
    
    showProfile(profile){
        
        profileDiv.innerHTML = `
            <div class="row">
                <div class="col-md-3"> 
                    <img src="${profile.avatar_url}" class="img-fluid pb-2" alt="" target="__blank">  
                    <a href="${profile.html_url}" target="__blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <button class="btn btn-primary">Repositories: ${profile.public_repos}</button>
                    <button class="btn btn-info">Public_gists: ${profile.public_gists}</button>
                    <button class="btn btn-success">Followers ${profile.followers}</button>
                    <button class="btn btn-light">Following ${profile.following}</button>
                    <br>
                    <ul class="list-group pt-2">
                        <li class="list-group-item list-group-item-info">Company: ${profile.company}</li>
                        <li class="list-group-item list-group-item-info">Blog: ${profile.blog}</li>
                        <li class="list-group-item list-group-item-info">Location: ${profile.location}</li>
                        <li class="list-group-item list-group-item-info">Created at: ${profile.created_at}</li>
                    </ul>
                </div>
            </div>
        `
    }

    removeProfile(){
        profileDiv.innerHTML = '';
    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const searchContainerDiv = document.querySelector('#searchContainerDiv');
        const heading = document.querySelector('#heading');
        searchContainerDiv.insertBefore(div,heading);
        setTimeout(this.clearAlert,3000);
    }

    clearAlert(){
        const alertDiv = document.querySelector('.alert');
        if(alertDiv){
            alertDiv.remove();
        }
    }

    showRepos(profile){

        let repos = '';
        profile.forEach(repo => {
            
            repos = repos + 
            `
                 <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6"> 
                        <span class= "badge badge-primary">Stars: ${repo.stargazers_count} 
                        </span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}
                        </span>
                        <span class="badge badge-success">Forks: ${repo.forms_count}
                        </span>
                    </div>
                 </div>    
            `
        });


       repoDiv.innerHTML = repos;
    }

}