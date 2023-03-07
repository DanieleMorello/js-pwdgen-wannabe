// Decrizione passaggi:
// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23

// uso prompt per chieder il nome all' utente
const userName = prompt("Scrivi come ti chiami");
console.log(userName);

// uso prompt per chieder il suo cognome 
const lastName = prompt("Scrivi il tuo cognome");
console.log(lastName);

// uso prompt per chieder il suo colore preferito
const preferitColor = prompt("Scrivi il tuo collore preferito");
console.log(preferitColor);

// Stampo in pagina il risultato usando questo formato: nomecognomecolorepreferito23
// uso document.getElmentById per selezionare l' elemento html e uso inner.html per
// stamparlo in pagina
const result = document.getElementById('connotations').innerHTML = `Ciao mi chiamo ${userName} ${lastName} ed il mio colore preferito è il ${preferitColor}`
console.log(result);