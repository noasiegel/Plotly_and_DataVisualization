const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));


//returning lat long data 

d3.json(url).then(dataArray => {
    latlongpairs = dataArray.map(eachData => {
        return [eachData.location.latitude, eachData.location.longitude]
    });
    console.log(latlongpairs);
});

