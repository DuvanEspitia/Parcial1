import React, { useState } from 'react';
import './App.css';

function App() {

  /////////////////ejercicio 1
  const [segundos, setSegundos] = useState(''); // definimos nuestra varible cambiante para representar en tiempor real
  const [resultado, setResultado] = useState(''); // Se definie el resultaod a imprimir direcamente cambiate del resultado

  // SegundosT es a totales y segundosR a restantes.
  /// funcion que permite obtener los valores que representa cada unidad en base a los segundos
  function convertidor(segundosT) {
    const horas = Math.floor(segundosT / 3600); // math.floor  redondea un número al múltiplo o al entero inferior más próximo de la cifra significativa especificada.
    const minutos = Math.floor((segundosT % 3600) / 60);//cantidad de minutos completos en la cantidad total de segundos,
    const segundosR = segundosT % 60;  //calcular el numero de segundos restantes 

    return { horas, minutos, segundosT: segundosR }; //retornamos esos valores de las formulas Y asignamor nuevo valor a segundos
  }
  // pequeña validacion para decir si el campo ingreado es correcto
  function SegundosFormula() {
    if (segundos === '') {
      setResultado('ingresa los segundos.');
      return;
    }
    const segundosTotales = parseInt(segundos, 10); // parseInt para convertir una cadena (string)  a int
    if (isNaN(segundosTotales)) {
      setResultado('error');
      return;
    }
    const tiempoConvertido = convertidor(segundosTotales); /// envio a mi metodo principal los valores ya transformados7
    //seteo los valores retornados para poder se apreciados en pantall
    setResultado(`Horas: ${tiempoConvertido.horas}, Minutos: ${tiempoConvertido.minutos}, Segundos: ${tiempoConvertido.segundosT}`);

  }

  ////Ejericio 2
  const [minutos, setMinutos] = useState(''); // definimos nuestra varible cambiante para representar en tiempor real
  const [resultado2, setResultado2] = useState(''); // Se definie el resultaod a imprimir direcamente cambiate del resultado


  function calcularValorMinutos(){

    if(minutos ===""){ //validacion
      setResultado2('ingresa los minutos.')
      
    }else{

      if(minutos<=3){
        setResultado2("300 pesos")
      }
      else{
        let valorAcobrar = ((minutos-3)*50)+300  // al valore total le resto los 3 minutos para evitar cobrar 150 por esos 3 y le sumo los 300 de la base
        setResultado2(valorAcobrar+" pesos")

      }


    }
return

  }
      /////Tercer ejercio

      const [nombre, setNombre] = useState(''); // definimos nuestra varible cambiante para representar en tiempor real
      const [hora, setHora] = useState(''); // definimos nuestra varible cambiante para representar en tiempor real
      const [resultado3, setResultado3] = useState(''); // Se definie el resultaod a imprimir direcamente cambiate del resultado
        function imprimirNombreConHora(){

          if(nombre ==="" && hora ==""){
            setResultado3("Algun campo esta vacio") //validaciones

          }
          else if(hora <12){ /// si es antes de las 12
            setResultado3(nombre+" Buenos dias")
          }
          else if(hora>12 && hora<18){ //entre las 12 y 6 de la tarder (18)
            setResultado3(nombre+" Buenos tardes")
          }else if(hora>18&&hora<24){ //entre las 6(18) y 24 (12)
            setResultado3(nombre+" Buenas noches")
          }else{
            setResultado3("numero no valido")//Cualquie otro numero
          }



        }


  return (
    <div className="center">
      <div>
        <span>Ejercicio 1</span><br />
        <label htmlFor="segundos">Ingresa la cantidad de segundos:</label><br />
        <input
          type="number" id="segundos" placeholder="Segundos"
          value={segundos} onChange={(e) => setSegundos(e.target.value)}// seteamos los seegundos recibidos
    
        /><br />
        <button onClick={SegundosFormula}>Convertir</button>

        <div id="resultado">{resultado}</div>
      </div>
      <div><br /><br />
        <span>Ejercicio 2</span><br />

        <label htmlFor="segundos">Ingresa la cantidad de minutos:</label><br />
        <input
          type="number" id="segundos" placeholder="Minutos"
          value={minutos} onChange={(e) => setMinutos(e.target.value)}
        /><br />
        <button onClick={calcularValorMinutos}>Calcular</button>

        <div id="resultado2">{resultado2}</div>

      </div>

      <div><br /><br />
        <span>Ejercicio 3</span><br />
        <label htmlFor="segundos">Ingresa la hora en formato 24hrs</label><br />
        <input
          type="text" id="segundos" placeholder="Nombre"
          value={nombre} onChange={(e) => setNombre(e.target.value)}
        /><br />
        <input
          type="text" id="segundos" placeholder="Hora"
          value={hora} onChange={(e) => setHora(e.target.value)}
        /><br />
        <button onClick={imprimirNombreConHora}>Aceptar</button>

        <div id="resultado2">{resultado3}</div>

      </div>
    </div>
  );
}

export default App;
