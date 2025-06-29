const teamLogos = {
    // add more later
  "Dindigul Dragons": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iMOpelDFTaTNvR5ZRmgzrVqtAmIzrGvc6A&s", 
  "Nellai Royal Kings": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpLOEF-A0YAkPGWA7jpx1zDMdfPBqR3b98Q&s", 
  "Los Angeles Knight Riders": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhLO1w_vaDwt6pp62y6VnVjBoxzcLXHxKyA&s", 
  "Washington Freedom": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpb3jg6A7LQ_o-Wgh4QVyyum8SdsnYMtG8w&s",
  "Seattle Orcas":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqCRdUimxq3v5LFK4fyaU9SWtoWAqkY8Kbw&s",
  "San Francisco Unicorns":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzCFJ0_nBKMl9TRQ3-55rsVxpMI67IDXfFg&s",
  "Mi New York":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2QR9BdPBcFzJE9XPuilbQ5_lzXfBwlGYqw&s",
  "Texas Super Kings":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOp4zwgIWymBvFKjhj04Gz36yZcFvNFAyqrw&s"
};

function cleanTeamName(name) {
    // Remove anything in square brackets
    return name.replace(/\s*\[.*?\]/g, "").trim();
}
// Function to get team logo
function getTeamLogo(teamName) {
    // Direct match
    if (teamLogos[teamName]) {
        return teamLogos[teamName];
    }
    else{
        return 
    }
 }
 function display_result(upcoming){
    const container = document.getElementById("match-container");
    const seriesContainer = document.getElementById("series");
    container.innerHTML = "";
    if(upcoming.length <= 0){
            container.innerHTML = "<p>No upcoming matches found.</p>";
    }
    else{
            if (seriesContainer) {
                        seriesContainer.innerHTML = "";
                        seriesContainer.textContent = upcoming[0].series;
            }
            upcoming.forEach(  match => {
                        const team1 = cleanTeamName(match.t1);
                        const logoUrl = getTeamLogo(team1);
                        const team2 = cleanTeamName(match.t2);
                        const logoUrl2 = getTeamLogo(team2);

                        const block = document.createElement("div");
                        block.className = "block1";
                            
                        block.innerHTML = `

                                <img src= ${logoUrl}  alt = "${team1} logo" class = "event-image">
                                <img src= ${logoUrl2} alt="${team2} logo" class = "event-image">
                                <h3>${team1} vs ${team2}</h3>
                                <ul>
                                    <li>Date: ${new Date(match.dateTimeGMT).toLocaleString()}</li>
                                    <li>Status: ${match.status}</li>
                                    <li>Match Type: ${match.matchType}</li>
                                </ul>
                                <p>Upcoming match between ${team1} and ${team2}. Stay tuned for updates!</p>
                                <button>Tickets</button>
                            `;
                        container.appendChild(block);
                        });

    }}

function fetchAndDisplayMatches(limit = 3){
    fetch("https://api.cricapi.com/v1/cricScore?apikey=cefa3164-fb82-4627-8d67-39982b59742d")
        .then(res => res.json())
        .then(data => {
            const cachedData = localStorage.getItem("cachedTopMatches");
            if (data.status === "success"){ 
                const upcoming = data.data.filter(match => match.status.includes("Match not started") && match.series.includes("Major League Cricket 2025"))
                localStorage.setItem("cachedTopMatches", JSON.stringify(upcoming));
                if (limit != null){
                    display_result(upcoming.slice(0, limit))
                }
                else{
                    display_result(upcoming)
                }
            }
            else if (cachedData){
                 if (limit != null){
                    display_result(JSON.parse(cachedData).slice(0, limit))
                }
                else{
                    display_result(JSON.parse(cachedData))
                }
            }
            else{document.getElementById("match-container").innerHTML = "<p>API limit exceeded and no cached data available.</p>";}
})
        .catch(err => {
            console.error("Failed to load matches", err);
            document.getElementById("match-container").innerHTML = "<p>Error loading match data.</p>";
        });
}

window.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("matches.html")) {
        fetchAndDisplayMatches(null); // other pages
    } else {
        fetchAndDisplayMatches(4); // main page
        
    }
        
});

