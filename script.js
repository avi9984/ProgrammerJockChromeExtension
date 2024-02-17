fetch('https://v2.jokeapi.dev/joke/Programming')
    .then(res => res.json())
    .then((data) => {
        const jokeSetup = data.setup || '';
        const jokeDelivery = data.delivery || '';

        if (jokeSetup && jokeDelivery) {
            const combinedJoke = `
            ${jokeSetup} :
            ${jokeDelivery}`;

            const jokeEle = document.getElementById('joke');
            jokeEle.innerHTML = combinedJoke;
        } else {
            console.error('Incomplete joke data received:', data);
        }
    })
    .catch(error => console.error('Error fetching joke:', error));
