// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

// Función para agregar amigos
function agregarAmigo() {
    // Captura el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();  // Elimina espacios en blanco al inicio y al final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Actualizar la lista en el HTML
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpia la lista actual

    // Crea los elementos <li> para cada amigo y los añade a la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        resultado.innerHTML = "La lista de amigos está vacía. ¡Añade algunos nombres primero!";
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado
    resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎉`;
}