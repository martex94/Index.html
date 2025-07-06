document.getElementById("startButton").addEventListener("click", function() {
  console.log("Gioco avviato!"); // Messaggio di debug
  // Qui dovresti vedere la logica per avviare il gioco
});
// Variabili globali
let energy = 24;

// Funzioni core
function startExpedition() {
    if (energy > 0) {
        energy--;
        console.log(`Spedizione avviata! Energia rimanente: ${energy}`);
    }
}
