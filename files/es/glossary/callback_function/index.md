---
title: Función Callback
slug: Glossary/Callback_function
translation_of: Glossary/Callback_function
---
<p>Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.</p>

<p>Ejemplo:</p>

<pre class="brush: js">function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);</pre>

<p>El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.</p>

<p><font><font>Sin embargo, </font><font>tenga en </font><font>cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se </font><font>haya completado </font><font>una </font><font>operación a</font></font> sincrónica  — <font><font>estas se denominan devoluciones de llamada asincrónicas. </font><font>Por ejemplo, nuestro sencillo ejemplo de</font></font> <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html">maps-example.html</a> (<a href="https://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html">ver en vivo</a>) <font><font>utiliza la API de Google Maps y la API de geolocalización para mostrar un mapa de la ubicación actual de su dispositivo.</font></font></p>

<p><font><font>Como obtener las coordenadas del dispositivo de su GPS es asíncrono (no sabemos exactamente cuándo se devolverán los datos),</font></font> el método {{domxref("Geolocation.getCurrentPosition()")}} <font><font>toma una función de devolución de llamada anónima como parámetro, que a su vez toma los datos de coordenadas devueltos como un parámetro. </font><font>Esta función solo se ejecuta cuando se devuelven los datos de coordenadas.</font></font></p>

<h2 id="Aprende_más"><strong>Aprende más</strong></h2>

<h3 id="Conocimientos_generales"><strong>Conocimientos generales</strong></h3>

<ul>
 <li><a href="https://es.wikipedia.org/wiki/Callback_(inform%C3%A1tica)">Callback</a> en Wikipedia</li>
</ul>
