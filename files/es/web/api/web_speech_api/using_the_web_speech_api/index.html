---
title: Uso de la Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
translation_of: Web/API/Web_Speech_API/Using_the_Web_Speech_API
original_slug: Web/API/Web_Speech_API/Uso_de_la_Web_Speech_API
---
<p class="summary">La API Web Speech API proporciona dos funcionalidades distintas — reconocimiento de voz, y síntesis de voz (también conocido como texto a voz o tts) — lo que nos ofrece nuevas e interesantes posibilidades para accesibilidad y otros mecanismos. Este artículo ofrece una breve introducción en las dos áreas, así como unas demos.</p>

<h2 id="Reconocimiento_de_voz">Reconocimiento de voz</h2>

<p>El reconocimiento de voz implica recibir voz a través del micrófono de un dispositivo, luego es verificado por un servicio de reconocimiento de voz contra una lista de palabras o frases 'grammar' (esta lista básicamente es el vocabulario a reconocer en una app particular). Cuando se reconoce con éxito una palabra o frase, esta se devuelve como una cadena de texto y así poder iniciar otras acciones.</p>

<p>La API Web Speech tiene una interfaz principal de control para el - {{domxref ("SpeechRecognition")}} -, además de una serie de interfaces estrechamente relacionadas para representar la gramática, los resultados, etc. Normalmente, el sistema de reconocimiento de voz predeterminado que dispone el dispositivo se utilizará para el reconocimiento de voz: la mayoría de los sistemas operativos modernos tienen un sistema de reconocimiento de voz para emitir comandos de voz. Piense en Dictado en macOS, Siri en iOS, Cortana en Windows 10, Android Speech, etc.</p>

<div class="note">
<p><strong>Note</strong>: En algunos navegadores como Chrome, el uso del reconocimiento de voz implica el uso de un motor de reconocimiento basado en un servidor. Tu audio se envía a un servicio de reconocimiento web para ser procesado, por lo que no funcionará offline.</p>
</div>

<h3 id="Demo">Demo</h3>

<p>Para mostrar un uso sencillo del reconocimiento de voz Web, hemos escrito una demo llamada <a href="https://github.com/mdn/web-speech-api/tree/master/speech-color-changer">Speech color changer</a>. Cuando se toca o hace click en la pantalla, se puede decir un color HTML, y el color de fondo de la aplicación cambiará a ese color.</p>

<p><img alt="The UI of an app titled Speech Color changer. It invites the user to tap the screen and say a color, and then it turns the background of the app that colour. In this case it has turned the background red." src="https://mdn.mozillademos.org/files/11975/speech-color-changer.png" style="border: 1px solid black; display: block; height: 533px; margin: 0px auto; width: 300px;"></p>

<p>Para ejecutar la demo, se puede clonar (o <a href="https://github.com/mdn/web-speech-api/archive/master.zip">directamente descargar</a>) el repositorio Github donde se encuentra, abrir el fichero index HTML en un navegador de escritorio compatible, o navegar a través del enlace <a href="https://mdn.github.io/web-speech-api/speech-color-changer/">live demo URL</a> en un navegador de móvil compatible como Chrome.</p>

<h3 id="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h3>

<p>Actualmente, la compatibilidad de la Web Speech API para el reconocimiento de voz se limita a Chrome para escritorio y Android — Chrome tiene soporte desde la versión 33 pero con interfaces 'prefixed', por lo que se deben incluir ese tipo de interfaces 'prefixed', por ejemplo <code>webkitSpeechRecognition</code>.</p>

<h3 id="HTML_y_CSS">HTML y CSS</h3>

<p>El HTML y el CSS para esta app no son importantes. Solo tenemos un título, instrucciones en un párrafo, y un div dentro del cual visualizaremos los mensajes de diagnósticos.</p>

<pre class="brush: html">&lt;h1&gt;Speech color changer&lt;/h1&gt;
&lt;p&gt;Tap/click then say a color to change the background color of the app.&lt;/p&gt;
&lt;div&gt;
  &lt;p class="output"&gt;&lt;em&gt;...diagnostic messages&lt;/em&gt;&lt;/p&gt;
&lt;/div&gt;</pre>

<p>El CSS proporciona un estilo responsive muy simple para que se visualice bien en todos los dispositivos.</p>

<h3 id="JavaScript">JavaScript</h3>

<p>Miremos el JavaScript con un poco más de detalle.</p>

<h4 id="Compatibilidad_con_Chrome">Compatibilidad con Chrome </h4>

<p>Como se ha mencionado anteriormente, Chrome actualmente admite el reconocimiento de voz con propiedades 'prefixed', por lo tanto, al principio de nuestro código incluiremos las siguientes líneas para usar los objetos que correspondan a Chrome, y así cualquier implementación en el futuro pueda admitir estas características sin ningún 'prefixed':</p>

<pre class="brush: js">var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent</pre>

<h4 id="La_gramática_-grammar-">La gramática -grammar-</h4>

<p>Las siguientes líneas de código definen la gramática que queremos que reconozca nuestra app. Se define una variable para contener nuestra gramática:</p>

<pre class="brush: js">var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ... ];
var grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = ' + colors.join(' | ') + ' ;'</pre>

<p>El formato usado para 'grammar' es <a class="external external-icon" href="http://www.w3.org/TR/jsgf/">JSpeech Grammar Format</a> (<strong>JSGF</strong>) — Se puede encontrar más sobre las especificaciones de este formato en el anterior enlace. Sin embargo y por ahora vamos a echarle un vistazo rápidamente:</p>

<ul>
 <li>Las líneas se separan con punto y coma como en JavaScript.</li>
 <li>La primera línea — <code>#JSGF V1.0;</code> — establece el formato y versión utilizados. Esto siempre se debe incluir primero.</li>
 <li>La segunda línea indica el tipo de términos que queremos que se reconozcan. <code>public</code> declara que es una regla pública, la cadena entre los paréntesis angulares definen el nombre reconocido para éste término (<code>color</code>), y la lista de elementos que siguen al signo igual son los valores alternativos que se reconocerán y aceptaran como valores apropiados al término. Observar como cada elemento se separa con el carácter pipe ' | ' .</li>
 <li>Se pueden definir tantos términos como se desee en líneas separadas siguiendo la estructura anterior, e incluir definiciones gramaticales complejas. Esta demostración básica la mantenemos lo más simple posible.</li>
</ul>

<h4 id="Conectando_la_gramática_a_nuestro_reconocimiento_de_voz">Conectando la gramática a nuestro reconocimiento de voz</h4>

<p>Lo siguiente que tenemos que hacer es definir una instancia de reconocimiento de voz para el control en nuestra aplicación. Esto se hace usando el constructor {{domxref("SpeechRecognition.SpeechRecognition()", "SpeechRecognition()")}}. También creamos una lista de gramática de voz para contener nuestra gramática usando el constructor {{domxref("SpeechGrammarList.SpeechGrammarList()","SpeechGrammarList()")}}.</p>

<pre class="brush: js">var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();</pre>

<p>Añadimos nuestra  <code>grammar</code>  a la lista anterior usando el método {{domxref("SpeechGrammarList.addFromString()")}}. Este método acepta como parámetro la cadena que queremos añadir, así como opcionalmente, un valor que especifique la importancia de esta gramática en relación a otras gramáticas disponibles en la lista (el rango del valor va desde 0 hasta 1 inclusive). La gramática agregada está disponible en la lista como una instancia del objeto {{domxref("SpeechGrammar")}}.</p>

<pre class="brush: js">speechRecognitionList.addFromString(grammar, 1);</pre>

<p>Después añadimos la lista {{domxref("SpeechGrammarList")}} a la instancia del reconocimiento de voz estableciéndola en la propiedad {{domxref("SpeechRecognition.grammars")}}. También establecemos algunas otras propiedades a la instancia de reconocimiento antes de continuar:</p>

<ul>
 <li>{{domxref("SpeechRecognition.continuous")}}: Controla si se capturan los resultados de forma continua (<code>true</code>), o solo un resultado cada vez que se inicia el reconocimiento (<code>false</code>).</li>
 <li>{{domxref("SpeechRecognition.lang")}}: Establece el idioma del reconocimiento. Esto es una buena práctica y, por lo tanto, recomendable.</li>
 <li>{{domxref("SpeechRecognition.interimResults")}}: Define si el sistema de reconocimiento de voz debe devolver resultados provisionales o solo resultados finales. Para nuestra demo es suficiente con los resultados finales.</li>
 <li>{{domxref("SpeechRecognition.maxAlternatives")}}:  Establece el número de posibles coincidencias alternativas que se deben devolver por resultado. Esto a veces puede ser útil, por ejemplo, si un resultado no está completamente claro y desea mostrar una lista de alternativas para que el usuario elija la correcta. Esta opción no es necesaria para la demo, por lo que solo especificamos una (la cual es la predeterminada).</li>
</ul>

<pre class="brush: js">recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;</pre>

<h4 id="Comenzando_el_reconocimiento_de_voz">Comenzando el reconocimiento de voz</h4>

<p>Tomamos las referencias de la salida {{htmlelement("div")}} y del elemento HTML (para que podamos enviar mensajes de diagnostico y actualizar el color de fondo de la aplicación más adelante), e implementamos un manejador onclick para que cuando se haga click o se toque la pantalla, se inicie el reconocimiento de voz. Esto se logra llamando al método {{domxref("SpeechRecognition.start()")}}. El método <code>forEach()</code> se usa para visualizar indicadores de colores que muestran qué colores intenta decir.</p>

<pre class="brush: js">var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '&lt;span style="background-color:' + v + ';"&gt; ' + v + ' &lt;/span&gt;';
});
hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}</pre>

<h4 id="Recepción_y_manejo_de_resultados">Recepción y manejo de resultados</h4>

<p>Una vez que comienza el reconocimiento de voz, hay muchos manejadores de eventos que se pueden usar para recuperar los resultados, así como otros elementos de información adicional (ver <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Event_handlers"><code>SpeechRecognition</code> event handlers list</a>.) El más común que probablemente usarás es {{domxref("SpeechRecognition.onresult")}}, el cual es lanzado cuando se recibe el resultado con éxito:</p>

<pre class="brush: js">recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}</pre>

<p>La tercera línea es un poco más compleja, así que vamos a explicarla paso a paso. La propiedad {{domxref("SpeechRecognitionEvent.results")}} devuelve un objeto {{domxref("SpeechRecognitionResultList")}} que contiene los objetos {{domxref("SpeechRecognitionResult")}}. Tiene un getter para que pueda ser accesible como si fuera un array — así el primer <code>[0]</code> devuelve el <code>SpeechRecognitionResult</code> en la posición 0. Cada objeto <code>SpeechRecognitionResult</code> contiene objetos {{domxref("SpeechRecognitionAlternative")}} que contienen palabras individuales reconocidas. Estos también tienen getters para que se puedan acceder a ellos como arrays — por lo tanto el segundo <code>[0]</code> devuelve <code>SpeechRecognitionAlternative</code> en la posición 0. Luego devolvemos su propiedad <code>transcript</code> para obtener una cadena que contenga  el resultado individual reconocido como un string, estableciendo el color de fondo a ese color, e informando del color reconocido como un mensaje de diagnóstico en el IU.</p>

<p>También usamos el manejador {{domxref("SpeechRecognition.onspeechend")}} para parar el servicio de reconocimiento de voz (usando {{domxref("SpeechRecognition.stop()")}}) cuando se ha reconocido una sola palabra y se ha finalizado de hablar:</p>

<pre class="brush: js">recognition.onspeechend = function() {
  recognition.stop();
}</pre>

<h4 id="Manejo_de_errores_y_voz_no_reconocida">Manejo de errores y voz no reconocida</h4>

<p>Los dos últimos manejadores son para controlar los casos donde no se reconoce ninguna de las palabras definidas en la gramática, o cuando ocurre un error. {{domxref("SpeechRecognition.onnomatch")}} maneja el primer caso mencionado, pero tenga en cuenta que de momento no parece que se dispare correctamente; solo devuelve lo que ha reconocido:</p>

<pre class="brush: js">recognition.onnomatch = function(event) {
  diagnostic.textContent = 'I didnt recognise that color.';
}</pre>

<p>{{domxref("SpeechRecognition.onerror")}} maneja los casos donde se ha producido en error en el reconocimiento  — la propiedad {{domxref("SpeechRecognitionError.error")}} contiene el error devuelto:</p>

<pre class="brush: js">recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}</pre>

<h2 id="Síntesis_de_voz">Síntesis de voz</h2>

<p>La síntesis de voz (también  conocida como texto a voz o tts) implica recibir  contenido en forma de texto dentro de una aplicación y convertirla en voz a través del altavoz del dispositivo o de la conexión de salida del audio.</p>

<p>La Web Speech API tiene una interface principal controladora — {{domxref("SpeechSynthesis")}} — además de una serie de interfaces estrechamente relacionadas para representar  el texto que se va a sintetizar (conocido como dictados 'utterances'), voces que se usarán para los dictados, etc. De nuevo, la mayoría de sistemas operativos disponen de algún sistema de síntesis de voz que pueden serán usados por la API si están disponibles.</p>

<h3 id="Demo_2">Demo</h3>

<p>Para mostrar un uso sencillo de la síntesis de voz Web, tenemos la demo llamada <a href="https://mdn.github.io/web-speech-api/speak-easy-synthesis/">Speak easy synthesis</a>. Esta incluye un juego de controles de formulario para introducir texto a sintetizar, configurar el tono, velocidad de reproducción y la voz a usar cuando el texto sea pronunciado.  Después de introducir el texto se puede presionar <kbd>Enter</kbd>/<kbd>Return</kbd> para escucharlo.</p>

<p><img alt="UI of an app called speak easy synthesis. It has an input field in which to input text to be synthesised, slider controls to change the rate and pitch of the speech, and a drop down menu to choose between different voices." src="https://mdn.mozillademos.org/files/11977/speak-easy-synthesis.png" style="border: 1px solid black; display: block; height: 533px; margin: 0px auto; width: 300px;"></p>

<p>Para ejecutar la demo, se puede clonar (o <a href="https://github.com/mdn/web-speech-api/archive/master.zip">directamente descargar</a>) el repositorio Github donde se encuentra, abrir el fichero index HTML en un navegador de escritorio compatible, o navegar a través del enlace <a href="https://mdn.github.io/web-speech-api/speech-color-changer/">live demo URL</a> en un navegador de móvil compatible como Chrome.</p>

<h3 id="Compatibilidad_de_navegadores_2">Compatibilidad de navegadores</h3>

<p>El soporte para la síntesis de voz Web Speech API solo ha llegado a los navegadores más importantes  y actualmente se limita a los siguientes:</p>

<ul>
 <li>
  <p>Firefox para escritorio y dispositivos móviles en Gecko 42+ (Windows)/44+, sin prefijos, y se puede activar configurando el flag <code>media.webspeech.synth.enabled</code> a <code>true</code> en <code>about:config</code>.</p>
 </li>
 <li>
  <p>Firefox OS 2.5+ lo soporta por defecto y sin ser necesario ningún permiso.</p>
 </li>
 <li>
  <p>Chrome para escritorio y  Android tienen soporte desde la versión 33, sin prefijos.</p>
 </li>
</ul>

<h3 id="HTML_y_CSS_2">HTML y CSS</h3>

<p>El HTML y CSS de nuevo no son fundamentales, simplemente contiene un titulo, algunas instrucciones de uso y un formulario con algunos controles sencillos. El elemento {{htmlelement("select")}} inicialmente está vacío pero se rellena con {{htmlelement("option")}} mediante JavaScript (ver más adelante.)</p>

<pre class="brush: html">&lt;h1&gt;Speech synthesiser&lt;/h1&gt;

&lt;p&gt;Enter some text in the input below and press return to hear it. change voices using the dropdown menu.&lt;/p&gt;

&lt;form&gt;
  &lt;input type="text" class="txt"&gt;
  &lt;div&gt;
    &lt;label for="rate"&gt;Rate&lt;/label&gt;&lt;input type="range" min="0.5" max="2" value="1" step="0.1" id="rate"&gt;
    &lt;div class="rate-value"&gt;1&lt;/div&gt;
    &lt;div class="clearfix"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="pitch"&gt;Pitch&lt;/label&gt;&lt;input type="range" min="0" max="2" value="1" step="0.1" id="pitch"&gt;
    &lt;div class="pitch-value"&gt;1&lt;/div&gt;
    &lt;div class="clearfix"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;select&gt;

  &lt;/select&gt;
&lt;/form&gt;</pre>

<h3 id="JavaScript_2">JavaScript</h3>

<p>Analicemos el JavaScript usado en esta app.</p>

<h4 id="Configurar_variables">Configurar variables</h4>

<p>En primer lugar, capturamos las referencias de todos los elementos DOM involucrados en la IU, pero lo más importante es capturar una referencia a  {{domxref("Window.speechSynthesis")}}. Este es el punto de entrada a la API — devuelve una instancia a {{domxref("SpeechSynthesis")}}, la interface controladora para la síntesis de voz en la web.</p>

<pre class="brush: js">var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];
</pre>

<h4 id="Rellenar_el_elemento_select">Rellenar el elemento select </h4>

<p>Para rellenar el elemento {{htmlelement("select")}} con las diferentes opciones de voz del que dispone el dispositivo, hemos escrito la función <code>populateVoiceList()</code>. Primero invocamos {{domxref("SpeechSynthesis.getVoices()")}}, que devuelve una lista de todas las voces disponibles representadas por objetos {{domxref("SpeechSynthesisVoice")}}. Después recorremos esa lista — para cada voz creamos un elemento {{htmlelement("option")}}, establecemos su contenido con el nombre de la voz (desde {{domxref("SpeechSynthesisVoice.name")}}), y el lenguaje de la misma (desde {{domxref("SpeechSynthesisVoice.lang")}}), y <code>-- DEFAULT</code> si la voz es la predeterminada para el motor de síntesis (verificando si {{domxref("SpeechSynthesisVoice.default")}} devuelve <code>true</code>.)</p>

<p>Para cada opción también creamos atributos <code>data-</code>, conteniendo el nombre y lenguaje de la voz asociada, para que más tarde podamos usarlos fácilmente, y después añadimos las opciones 'option' como hijos del select.</p>

<pre class="brush: js">function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i &lt; voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}</pre>

<p>Cuando vamos a ejecutar la función hacemos lo siguiente debido a que Firefox no soporta {{domxref("SpeechSynthesis.onvoiceschanged")}}, y sólo devolverá una lista de voces cuando se ejecute {{domxref("SpeechSynthesis.getVoices()")}}. Sin embargo con Chrome solo hay que esperar a que se active el evento antes de rellenar la lista, de ahí la siguiente parte de código.</p>

<pre class="brush: js">populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}</pre>

<h4 id="Reproduciendo_el_texto_introducido">Reproduciendo el texto introducido</h4>

<p>A continuación, creamos un manejador de eventos para comenzar a reproducir el texto introducido en el campo de texto. Usamos un manejador <a href="/en-US/docs/Web/API/GlobalEventHandlers/onsubmit">onsubmit</a> en el formulario para que la acción ocurra cuando se presione <kbd>Enter</kbd>/<kbd>Return</kbd>. Primero creamos una nueva instancia de  {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "SpeechSynthesisUtterance()")}} usando su constructor — a este se le pasa el valor de la entrada de texto como parámetro.</p>

<p>A continuación, debemos obtener la voz que queremos utilizar. Usamos la propiedad {{domxref("HTMLSelectElement")}} <code>selectedOptions</code> para devolver el elemento seleccionado {{htmlelement("option")}}. Entonces usamos el atributo de este elemento <code>data-name</code>, encontrando el objeto {{domxref("SpeechSynthesisVoice")}} cuyo nombre coincida con el valor del atributo. Y configuramos la propiedad de {{domxref("SpeechSynthesisUtterance.voice")}} con el valor que coincida con la opción seleccionada.</p>

<p>Por último, configuramos {{domxref("SpeechSynthesisUtterance.pitch")}} y {{domxref("SpeechSynthesisUtterance.rate")}} con los valores de los elementos del formulario correspondientes. Entonces y ya configurado todo lo necesario, comenzamos la reproducción invocando  {{domxref("SpeechSynthesis.speak()")}}, y pasándolo a la instancia {{domxref("SpeechSynthesisUtterance")}} como parámetro.</p>

<pre class="brush: js">inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i &lt; voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);</pre>

<p>Al final del manejador incluimos un manejador {{domxref("SpeechSynthesisUtterance.onpause")}} para mostrar cómo usar {{domxref("SpeechSynthesisEvent")}}. Cuando se invoca a  {{domxref("SpeechSynthesis.pause()")}},este devuelve un mensaje informando del número y nombre del carácter en el que se detuvo la reproducción.</p>

<pre class="brush: js">   utterThis.onpause = function(event) {
    var char = event.utterance.text.charAt(event.charIndex);
    console.log('Speech paused at character ' + event.charIndex + ' of "' +
    event.utterance.text + '", which is "' + char + '".');
  }</pre>

<p>Por último, llamamos a <a href="/en-US/docs/Web/API/HTMLElement/blur">blur()</a> en la entrada de texto. Esto permite ocultar la entrada de texto en Firefox OS.</p>

<pre class="brush: js">  inputTxt.blur();
}</pre>

<h4 id="Actualizando_los_valores_de_tono_y_velocidad_mostrados">Actualizando los valores de tono y velocidad mostrados</h4>

<p>La última parte del código simplemente actualiza los valores <code>pitch</code>/<code>rate</code> mostrados en la IU, cada vez que el slider cambia de posición.</p>

<pre class="brush: js">pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}</pre>
