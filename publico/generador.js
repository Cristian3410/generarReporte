


document.getElementById("boton").addEventListener("click", async (e)  =>{
    (e).preventDefault();

    
    const respuesta = await fetch("/productos");
    const data = await respuesta.json();

    const resultadodiv  = document.getElementById("resultado")
    resultadodiv.innerHTML = "";
    data.forEach((usuarios) => {
        const usuarioDiv = document.createElement("div");
        usuarioDiv.textContent = `ID: ${usuarios.idUsuario}, Edad: ${usuarios.Edad}, Cargo: ${usuarios.Cargo}`;
        resultadodiv.appendChild(usuarioDiv);
    });



}


)