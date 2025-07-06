// Variabili globali
let energy = 24;

// Funzioni core
function startExpedition() {
    if (energy > 0) {
        energy--;
        console.log(`Spedizione avviata! Energia rimanente: ${energy}`);
    }
}