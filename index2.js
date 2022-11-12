function validar() {
	var nombre = document.getElementById("nombre");
	var personas = document.getElementById("personas");
	var hora = document.getElementById("hora").selectedIndex;

	if(nombre.value.length == 0)
	{
      alert("Debe ingresar su nombre");
    	nombre.focus();
    	return false;
	}
	if(personas.value.length == 0)
	{
		alert("Por favor, ingrese la cantidad de personas");
		personas.focus();
		return false;
	}
	if(hora == 0 || horario == null)
	{
		alert("Por favor, seleccione un horario");
		return false;
    }
}

   
let inputPersonas = document.getElementById('personas');
inputPersonas.onclick = () => {
    console.log('Click')
}
inputPersonas.onblur = () => {
    console.log('No seleccionó')
}
    {
        const boton = document.querySelector('button');
        function sendData(data) {
              console.log('Enviar');
            } 
    }

    