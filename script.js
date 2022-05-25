var colortheme = "light";

function ontheme(){
	// console.log("color  , colortheme)
	if (colortheme == "dark") {
		document.getElementById("nav1").className = "navbar darkcolorbg toptable p-3";
		document.getElementById("nav2").className = "navbar lightcolor titlename ";
		document.getElementById("sec").className = "sectionform";
		document.getElementById("top1").className = "darkcolorbg";
		document.getElementById("top2").className = "darkcolorbg dropdown1 ";
		document.getElementById("countryname").className = "countryname p-2";
		document.getElementById("country").className = "form-control mediumcolorbg fontcolor";

		document.getElementById("profile").className = "p-3 h-130 mediumcolorbg mid-centre";

		document.getElementById("middle1").className = "darkcolorbg p-2";
		document.getElementById("middle2").className = "darkcolorbg p-2";
		document.getElementById("middle3").className = "darkcolorbg p-2";
		document.getElementById("middle4").className = "darkcolorbg p-2";

		document.getElementById("middleword-1").className = "card-body cardfont1";
		document.getElementById("middleword-2").className = "card-body cardfont2";
		document.getElementById("middleword-3").className = "card-body cardfont3";
		document.getElementById("middleword-4").className = "card-body cardfont4";

		document.getElementById("middleline-1").className = "lightcolorbg cardbox1";
		document.getElementById("middleline-2").className = "lightcolorbg cardbox2";
		document.getElementById("middleline-3").className = "lightcolorbg cardbox3";
		document.getElementById("middleline-4").className = "lightcolorbg cardbox4";

		document.getElementById("clickbutton").className = "btn clickbtn";
		document.getElementById("clickbutton").innerHTML = "Light";

		document.getElementById("footer").className = "darkcolorbg footerend fontcolor";

		document.getElementById("down").className = "darkcolorbg";
		document.getElementById("down1").className = "darkcolorbg";

		colortheme = "light";
		var newsubject = JSON.parse(localStorage.getItem("subject"));
		start(newsubject);

		var newsubject1 = JSON.parse(localStorage.getItem("subject1"));
		startpie(newsubject1);
	}
	else {
		document.getElementById("nav1").className = "navbar darkcolorbg-v toptable p-3";
		document.getElementById("nav2").className = "navbar lightcolor-v titlename";
		document.getElementById("sec").className = "sectionform";
		document.getElementById("top1").className = "darkcolorbg-v";
		document.getElementById("top2").className = "lightcolor-v  dropdown1 ";
		document.getElementById("countryname").className = "lightcolor-v countryname p-2";
		document.getElementById("country").className = "form-control lightcolorbg-v fontcolor";

		document.getElementById("profile").className = "p-3 h-130 background-v mid-centre";

		document.getElementById("middle1").className = "darkcolorbg-v p-2";
		document.getElementById("middle2").className = "darkcolorbg-v p-2";
		document.getElementById("middle3").className = "darkcolorbg-v p-2";
		document.getElementById("middle4").className = "darkcolorbg-v p-2";

		document.getElementById("middleword-1").className = "card-body lightcolor-v";
		document.getElementById("middleword-2").className = "card-body lightcolor-v";
		document.getElementById("middleword-3").className = "card-body lightcolor-v";
		document.getElementById("middleword-4").className = "card-body lightcolor-v";

		document.getElementById("middleline-1").className = "lightcolorbg-v";
		document.getElementById("middleline-2").className = "lightcolorbg-v";
		document.getElementById("middleline-3").className = "lightcolorbg-v";
		document.getElementById("middleline-4").className = "lightcolorbg-v";

		document.getElementById("clickbutton").className = "btn clickbtn1";
		document.getElementById("clickbutton").innerHTML = "Dark";

		document.getElementById("footer").className = "darkcolorbg-v footerend lightcolor-v";

		document.getElementById("down").className = "darkcolorbg-v";
		document.getElementById("down1").className = "darkcolorbg-v";

		colortheme = "dark";
		var newsubject = JSON.parse(localStorage.getItem("subject"));
		startone(newsubject);

		var newsubject1 = JSON.parse(localStorage.getItem("subject1"));
		startpieone(newsubject1);
	}
}

// passing all countries in dropdown 
function getcountries() {
    fetch("http://disease.sh/v3/covid-19/countries").then(country => {
        return country.json();
    })
    .then (data => {
        for(let i=0; i<data.length -1; i++) {
            document.getElementById("country").innerHTML+= `<option onclick="myfunction(this)" value= "`+data[i]['countryInfo']['iso2']+`">`+data[i]['country']+`</option>`;
        }
    })
}
getcountries();


function myfunction(countryvalue) {
    fetch("http://disease.sh/v3/covid-19/countries" + '/' +countryvalue.value).then (country1 => {
        return country1.json();
    })
    .then(datacountry => {

        document.getElementById("cases").innerHTML = numberWithCommas(datacountry.cases);
        document.getElementById("active").innerHTML = numberWithCommas(datacountry.active);
        document.getElementById("recovered").innerHTML = numberWithCommas(datacountry.recovered);
        document.getElementById("deaths").innerHTML = numberWithCommas(datacountry.deaths);
        document.getElementById("countryname").innerHTML = numberWithCommas(datacountry.country);    

		var subject = [
			{
				"category": "category 1",
				"column-1": datacountry.cases,
			},
			{
				"category": "category 2",
				"column-1": datacountry.active,
			},
			{
				"category": "category 3",
				"column-1": datacountry.recovered,
			},
			{
				"category": "category 3",
				"column-1": datacountry.deaths,
			}
		]
		start(subject);

		localStorage.setItem("subject", JSON.stringify(subject));
		if (colortheme == "dark") {
			startone(subject);
		}
		else {
			start(subject);
		}

		var subject1 =  [
			{
				"category": "Cases",
				"column": datacountry.cases,
			},
			{
				"category": "Active",
				"column": datacountry.active,
			},
			{
				"category": "Recovered",
				"column": datacountry.recovered,
			},
			{
				"category": "Deaths",
				"column": datacountry.deaths,
			},
		]
		startpie(subject1);

		localStorage.setItem("subject1", JSON.stringify(subject1));
		if (colortheme == "dark") {
			startpieone(subject1);
		}
		else {
			startpie(subject1);
		}
    })
}


function countryindia() {
    fetch("http://disease.sh/v3/covid-19/countries/IN").then( country => {
        return country. json();
    })
    .then(datacountry => {
        document.getElementById("cases").innerHTML = numberWithCommas(datacountry.cases);
        document.getElementById("active").innerHTML = numberWithCommas(datacountry.active);
        document.getElementById("recovered").innerHTML = numberWithCommas(datacountry.recovered);
        document.getElementById("deaths").innerHTML = numberWithCommas(datacountry.deaths);
        document.getElementById("countryname").innerHTML = numberWithCommas(datacountry.country);   

        $(document).ready(function()
        {
            $("#country").val($("#country option"). eq(93). val() )
        })

		var subject = [
			{
				"category": "category 1",
				"column-1": datacountry.cases,
			},
			{
				"category": "category 2",
				"column-1": datacountry.active,
			},
			{
				"category": "category 3",
				"column-1": datacountry.recovered,
			},
			{
				"category": "category 3",
				"column-1": datacountry.deaths,
			}
		]
		start(subject);

		localStorage.setItem("subject", JSON.stringify(subject));
		if (colortheme == "dark") {
			startone(subject);
		}
		else {
			start(subject);
		}

		var subject1 =  [
			{
				"category": "Cases",
				"column": datacountry.cases,
			},
			{
				"category": "Active",
				"column": datacountry.active,
			},
			{
				"category": "Recovered",
				"column": datacountry.recovered,
			},
			{
				"category": "Deaths",
				"column": datacountry.deaths,
			},
		]
		startpie(subject1);

		localStorage.setItem("subject1", JSON.stringify(subject1));
		if (colortheme == "dark") {
			startpieone(subject1);
		}
		else {
			startpie(subject1);
		}
    })
}
countryindia();


function numberWithCommas(x) {
	// console.log(x)
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function start(data) {
AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "category",
					"angle": 30,
					"depth3D": 30,
					"fontSize": 8,
					"startDuration": 1,
					"color": "#66FCF1" ,
					"textColor": "#66FCF1",
					"borderColor": "#C3073F",
					"categoryAxis": {
						"gridPosition": "start",
						"axisColor": "#63FFB1",
						"fillColor": "#66FCF1"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[value]]",
							"fillAlphas": 1,
							"fillColors": "#66FCF1", 
							"color": "#66FCF1",
							"lineThickness": 0,
							"id": "AmGraph-1",
							"title": "graph 1",
							"type": "column",
							"valueField": "column-1"
						},
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Axis title",
							"axisColor": "#66FCF1",
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Covid Graph"
						}
					],
					"dataProvider": data,
				}
			);
		}
start();


function startone(data) {
	AmCharts.makeChart("chartdiv",
					{
						"type": "serial",
						"categoryField": "category",
						"angle": 30,
						"depth3D": 30,
						"fontSize": 8,
						"startDuration": 1,
						"color": "#1b1227 " ,
						"textColor": "#1b1227 ",
						"borderColor": "#C3073F",
						"textColor": "#1b1227",
						"categoryAxis": {
							"gridPosition": "start",
							"axisColor": "#63FFB1",
							"fillColor": "#1b1227"
						},
						"trendLines": [],
						"graphs": [
							{
								"balloonText": "[[value]]",
								"fillAlphas": 1,
								"fillColors": "#1b1227 ", 
								"color": "#1b1227 ",
								"lineThickness": 0,
								"id": "AmGraph-1",
								"title": "graph 1",
								"type": "column",
								"valueField": "column-1"
							},
						],
						"guides": [],
						"valueAxes": [
							{
								"id": "ValueAxis-1",
								"title": "Axis title",
								"axisColor": "#1b1227",
							}
						],
						"allLabels": [],
						"balloon": {},
						"legend": {
							"enabled": true,
							"useGraphSettings": true
						},
						"titles": [
							{
								"id": "Title-1",
								"size": 15,
								"text": "Covid Graph"
							}
						],
						"dataProvider": data,
					}
				);
			}
	startone();


function startpie(piedata) {
	AmCharts.makeChart("chartdivterm",
					{
						"type": "pie",
						"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
						"titleField": "category",
						"valueField": "column",
						"baseColor" : "#F97E03",
						"fontSize": 12,
						"innerRadius": 20,
						"theme": "chalk",
						"textColor":"#F97E03",
						"allLabels": [],
						"balloon": {},
						"titles": [],
						"dataProvider": piedata,
					}
				);
		}
startpie();

function startpieone(piedata) {
	AmCharts.makeChart("chartdivterm",
					{
						"type": "pie",
						"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
						"titleField": "category",
						"valueField": "column",
						"baseColor" : "#1b1227",
						"color": "#1b1227",
						"fontSize": 12,
						"innerRadius": 20,
						"theme": "chalk",
						"textColor":"#1b1227",
						"allLabels": [],
						"balloon": {},
						"titles": [],
						"dataProvider": piedata,
					}
				);
		}
startpieone();
