        // Script to get the parameter from the url
        const queryString = window.location.search;
        console.log(queryString);
        // Voorbeeld: https://www.mysite.nl/index.html?name=Vincent
        // value: ?name=Vincent
        </script>

        
        <script>
        // Script to show the name in an alert box
          const urlParams = new URLSearchParams(queryString);

          const nameUser = urlParams.get('name')
          alert(nameUser);
