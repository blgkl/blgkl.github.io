var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus();
};

function displayResults()
{
	var average = 0;
	var high=0;
	for(var i=0;i<scores.length;i++)
	{
		if(i>0){
			if(scores[high]<scores[i]){
				high=i;
			}
		}
		average= (average*(i)+parseInt(scores[i]))/(i+1);
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> <p>Average score = "+average + "</p> <br \> <p>High Score = "+names[high]+" with a score of "+scores[high]+"</p>" ;
}

function displayScores(){
	var txt="<h2> Scores </h2> <br /> <tr><td><strong>Name</strong></td><td><strong>Score</strong></td></tr>";

	for(var i=0; i<names.length; i++){
		txt+="<tr><td>"+names[i]+"</td> <td>"+scores[i]+"</td></tr>";
	}

	document.getElementById("scores_table").innerHTML=txt;

}

function addScore(){
	var tempName=document.getElementById("name").value;
	var tempScore=document.getElementById("score").value;

	if(tempName.length==0 || tempScore<0 || tempScore>100){
		alert("You must enter a name and a valid score");
	}
	else{
		names.push(tempName);
		scores.push(tempScore);
		$("name").value = "";
		$("score").value = "";
		$("name").focus();
	}
	
}