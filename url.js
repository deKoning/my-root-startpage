        // Script to get the parameter from the url
        const queryString = window.location.search;
        console.log(queryString);
        // Example: https://www.mysite.nl/index.html?name=Vincent
        // value: ?name=Vincent

        
 
        // Script to show the name in an alert box
          const urlParams = new URLSearchParams(queryString);

          const nameUser = urlParams.get('name')
          alert(nameUser);
        
        // update the nameUser in the HTML file
        ocument.getElementById("name").innerHTML = nameUser;
