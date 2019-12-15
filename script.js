window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            let astronauts = "";
            let astronaut = "";
            // json.sort(sortByHours(hoursInSpace));
            for(let i = 0; i < json.length; i++) {
                astronaut = `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li id="active" style="">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(', ')}</li>
                        </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `;
                astronauts += astronaut;
            }
            container.innerHTML += astronauts;
            
            let active = document.querySelectorAll("#active");
            for(let i=0; i < active.length; i++) {
                if(active[i].innerText === "Active: true"){
                    active[i].style.color = "green";
                }
            }

            document.querySelector("#heading").innerHTML = `Astronauts (${json.length})`
            
        });
    });

});

