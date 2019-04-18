const form = document.getElementById('vote-form');

//formulaire decoute des votes
form.addEventListener('submit', (e) => {
    const choix = document.querySelector('input[name=employe]:checked').value;
    const data = {employe:choix};

    //handle the post request on poll
    fetch('http://localhost:3000/poll',{
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'content-Type': 'application/json'
        })
    })
    .then(res => res.json()) //indique le type de donnees auxquelles on sattend
    .then(data => console.log(data))
    .catch(err => console.log(err));

    e.preventDefault();

});  

// handle the get request on poll
fetch('http://localhost:3000/poll')
.then(res => res.json())
.then(data => {
    const votes = data.votes;
    const totalVotes = votes.length; //count the total number of Votes
    //count votes points using two parameters (acc = accumulator current = the current value)
     const voteCounts = votes.reduce((acc, vote) => ((acc[vote.employe] = (acc[vote.employe] || 0) + parseInt(vote.points)), acc), {});
     
     //the datapOints to be display into the chart
     let dataPoints = [
        {label: 'Henri', y: voteCounts.Henri},
        {label: 'Monique', y: voteCounts.Monique},
        {label: 'Bertrand', y: voteCounts.Bertrand},
        {label: 'Georgette', y: voteCounts.Georgette},
        {label: 'Richard', y: voteCounts.Richard},
        {label: 'Aboubacar', y: voteCounts.Aboubacar},
        {label: 'Fatim', y: voteCounts.Fatim},
    ];
    const chartContainer = document.querySelector('#chartContainer');
    if(chartContainer){
        const chart = new CanvasJS.Chart('chartContainer', {
            animationEnables: true,
            theme: 'theme1',
            title: {
                text: `Resultats nombre de votants ${totalVotes}`
            },
            data:[
                {
                    type: 'column',  //column par defaut pour presenter Histogramme
                    dataPoints: dataPoints
                }
            ]
        });
        chart.render();
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;
    
        var pusher = new Pusher('5482885c7f8152230ea1', {
          cluster: 'eu',
          forceTLS: true
        });
    
        var channel = pusher.subscribe('employee-poll');// employee-poll est le nom du canal
        channel.bind('vote-employe', function(data) {
          dataPoints = dataPoints.map(x => {
              if(x.label == data.employe){
                x.y += data.points;
                return x;
    
              }else {
                  return x;
              }
          });
          chart.render();
        });
    }


});


