---
title: Usar promesas
slug: Web/JavaScript/Guide/Using_promises
tags:
  - Asíncrono
  - Guía
  - Intermedio
  - Promesa
  - Promesas
translation_of: Web/JavaScript/Guide/Using_promises
original_slug: Web/JavaScript/Guide/Usar_promesas
---
<div>{{jsSidebar("JavaScript Guide")}}</div>

<p>Una {{jsxref("Promise")}} (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona. Dado que la mayoría de las personas consumen <code>promises</code> ya creadas, esta guía explicará primero cómo consumirlas, y luego cómo crearlas.</p>

<p>Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones <code>callback</code>, en lugar de pasar callbacks a una función.</p>

<p>Considera la función <code>crearArchivoAudioAsync()</code>, la cual genera de manera asíncrona un archivo de sonido de acuerdo a un archivo de configuración, y dos funciones callback, una que es llamada si el archivo de audio es creado satisfactoriamente, y la otra que es llamada si ocurre un error. El código podría verse de la siguiente forma:</p>

<pre class="brush: js line-numbers  language-js">function exitoCallback(resultado) {
  console.log("Archivo de audio disponible en la URL " + resultado);
}

function falloCallback(error) {
  console.log("Error generando archivo de audio " + error);
}

crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);
</pre>

<p>... las funciones modernas devuelven un objeto <code>promise</code> al que puedes adjuntar funciones de retorno (callbacks). Si <code>crearArchivoAudioAsync</code> fuera escrita de manera tal que devuelva un objeto <code>promise</code>, usarla sería tan simple como esto:</p>

<pre class="brush: js line-numbers  language-js">crearArchivoAudioAsync(audioConfig).then(exitoCallback, falloCallback);</pre>

<p>Lo cual es la versión corta de:</p>

<pre class="brush: js line-numbers  language-js">const promesa = crearArchivoAudioAsync(audioConfig);
promesa.then(exitoCallback, falloCallback);</pre>

<p>Llamamos a esto una <em>llamada a función asíncrona</em>. Esta convención tiene varias ventajas. Exploraremos cada una de ellas.</p>

<h2 id="Garantías">Garantías</h2>

<p>A diferencia de las funciones callback pasadas al "viejo estilo", una promesa viene con algunas garantías:</p>

<ul>
 <li>Las funciones callback nunca serán llamadas antes de la <a href="/es/docs/Web/JavaScript/EventLoop#Ejecutar_hasta_completar">terminación de la ejecución actual</a> del bucle de eventos de JavaScript.</li>
 <li>Las funciones callback añadidas con <code>then()</code> incluso después del éxito o fracaso de la operación asíncrona serán llamadas como se mostró anteriormente.</li>
 <li>Múltiples funciones callback pueden ser añadidas llamando a <code>then()</code> varias veces. Cada una de ellas es ejecutada una seguida de la otra, en el orden en el que fueron insertadas.</li>
</ul>

<p>Una de las grandes ventajas de usar <code>promises</code> es el encadenamiento, explicado a continuación.</p>

<h2 id="Encadenamiento">Encadenamiento</h2>

<p>Una necesidad común es el ejecutar dos o más operaciones asíncronas seguidas, donde cada operación posterior se inicia cuando la operación previa tiene éxito, con el resultado del paso previo. Logramos esto creando una cadena de objetos <code>promises</code>.</p>

<p>Aquí está la magia: la función <code>then()</code> devuelve una promesa nueva, diferente de la original:</p>

<pre class="brush: js">const promesa = hazAlgo();
const promesa2 = promesa.then(exitoCallback, falloCallback);
</pre>

<p>o</p>

<pre class="brush: js">let promesa2 = hazAlgo().then(exitoCallback, falloCallback);
</pre>

<p>Esta segunda promesa (<code>promesa2</code>) representa no sólo la terminación de <code>hazAlgo()</code>, sino también de <code>exitoCallback</code> o <code>falloCallback</code> que pasaste, las cuales pueden ser otras funciones asíncronas devolviendo una promesa. Cuando ese es el caso, cualquier función callback añadida a <code>promesa2</code> se queda en cola detrás de la promesa devuelta por <code>exitoCallback</code> o <code>falloCallback</code>.</p>

<p>Básicamente, cada promesa representa la terminación de otro paso (asíncrono on no) en la cadena.</p>

<p>En el pasado, hacer varias operaciones asíncronas en fila conduciría a la clásica pirámide de funciones callback:</p>

<pre class="brush: js">hazAlgo(function(resultado) {
  hazAlgoMas(resultado, function(nuevoResultado) {
    hazLaTerceraCosa(nuevoResultado, function(resultadoFinal) {
      console.log('Obtenido el resultado final: ' + resultadoFinal
    }, falloCallback);
  }, falloCallback);
}, falloCallback);
</pre>

<p>Con las funciones modernas, adjuntamos nuestras functiones callback a las promesas devueltas, formando una cadena de promesa:</p>

<pre class="brush: js">hazAlgo().then(function(resultado) {
  return hazAlgoMas(resultado);
})
.then(function(nuevoResultado) {
  return hazLaTerceraCosa(nuevoResultado);
})
.then(function(resultadoFinal) {
  console.log('Obtenido el resultado final: ' + resultadoFinal);
})
.catch(falloCallback);
</pre>

<p>Los argumentos a <code>then</code> son opcionales, y <code>catch(falloCallBack)</code> es un atajo para <code>then(null, falloCallBack)</code>. Es posible que veas esto expresado con <a href="/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions">funciones de flecha</a> :</p>

<pre class="brush: js">hazAlgo()
.then(resultado =&gt; hazAlgoMas(resultado))
.then(nuevoResultado =&gt; hazLaTerceraCosa(nuevoResultado))
.then(resultadoFinal =&gt; {
  console.log(`Obtenido el resultado final: ${resultadoFinal}`);
})
.catch(falloCallback);
</pre>

<p><strong>Importante</strong>: Devuelve siempre resultados, de otra forma las funciones callback no se encadenarán, y los errores no serán capturados.</p>

<h3 id="Encadenar_después_de_una_captura">Encadenar después de una captura</h3>

<p>Es posible encadenar después de un fallo - por ejemplo: un <code>catch</code>- lo que es útil para lograr nuevas acciones incluso después de una acción fallida en la cadena. Lea el siguiente ejemplo:</p>

<pre class="brush: js">new Promise((resolver, rechazar) =&gt; {
    console.log('Inicial');

    resolver();
})
.then(() =&gt; {
    throw new Error('Algo falló');

    console.log('Haz esto');
})
.catch(() =&gt; {
    console.log('Haz aquello');
})
.then(() =&gt; {
    console.log('Haz esto sin que importe lo que sucedió antes');
});
</pre>

<p>Esto devolverá el siguiente texto:</p>

<pre>Inicial
Haz aquello
Haz esto sin que importe lo que sucedió antes
</pre>

<p>Note que el texto "Haz esto" no es escrito porque el error "Algo falló" causó un rechazo.</p>

<h2 id="Propagación_de_errores">Propagación de errores</h2>

<p>Tal vez recuerdes haber visto <code>falloCallback</code> tres veces en la pirámide en un ejemplo anterior, en comparación con sólo una vez al final de la cadena de promesas:</p>

<pre class="brush: js">hazAlgo()
.then(resultado =&gt; hazAlgoMas(valor))
.then(nuevoResultado =&gt; hazLaTerceraCosa(nuevoResultado))
.then(resultadoFinal =&gt; console.log(`Obtenido el resultado final: ${resultadoFinal}`))
.catch(falloCallback);
</pre>

<p>Básicamente, una cadena de promesas se detiene si hay una excepción, y recorre la cadena buscando manejadores de captura. Lo siguiente está mucho más adaptado a la forma de trabajo del código síncrono:</p>

<pre class="brush: js">try {
  let resultado = syncHazAlgo();
  let nuevoResultado = syncHazAlgoMas(resultado);
  let resultadoFinal = syncHazLaTerceraCosa(nuevoResultado);
  console.log(`Obtenido el resultado final: ${resultadoFinal}`);
} catch(error) {
  falloCallback(error);
}
</pre>

<p>Esta simetría con el código síncrono culmina con la mejora sintáctica <a href="/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona">async/await</a> en ECMASCript 2017:</p>

<pre class="brush: js">async function foo() {
  try {
    let resultado = await hazAlgo();
    let nuevoResultado = await hazAlgoMas(resultado);
    let resultadoFinal = await hazLaTerceraCosa(nuevoResultado);
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  } catch(error) {
    falloCallback(error);
  }
}
</pre>

<p>Se construye sobre <code>promesas</code>, por ejemplo, <code>hazAlgo()</code> es la misma función que antes. Puedes leer más sobre la sintaxis <a href="https://developers.google.com/web/fundamentals/getting-started/primers/async-functions">aquí</a>.</p>

<p>Las <code>promesas</code> resuelven un fallo fundamental de la pirámide de funciones callback, capturando todos los errores, incluso excepciones lanzadas y errores de programación. Esto es esencial para la composición funcional de operaciones asíncronas.</p>

<h2 id="Eventos_de_rechazo_de_Promesas">Eventos de rechazo de Promesas</h2>

<p>Cuando una <code>promesa</code> es rechazada, uno de los dos eventos se envía al ámbito global (generalmente, éste es el {{domxref("window")}}, o, si se utiliza en un trabajador web, es el  {{domxref("Worker")}} u otra interfaz basada en un trabajador). Los dos eventos son:</p>

<p><strong>{{domxref("Window.rejectionhandled_event", "rejectionhandled")}}</strong></p>

<p>Se envía cuando se rechaza una promesa, una vez que el rechazo ha sido manejado por la función <code>reject</code> del ejecutor.</p>

<p><strong>{{domxref("Window.unhandledrejection_event", "unhandledrejection")}}</strong></p>

<p>Se envía cuando se rechaza una promesa pero no hay un controlador de rechazo disponible.</p>

<p>En ambos casos, el evento (del tipo {{domxref("PromiseRejectionEvent")}}) tiene como miembros una propiedad {{domxref("PromiseRejectionEvent.promise", "promise")}} que indica que la promesa fue rechazada, y una propiedad {{domxref("PromiseRejectionEvent.reason", "reason")}} que proporciona el motivo por el cuál se rechaza la promesa.</p>

<p>Esto hace posible ofrecer el manejo de errores de promesas, y también ayuda a depurarlos. Estos controladores son globales, por lo tanto, todos los errores serán manejados por éstos independientemente de la fuente.</p>

<p><u>Un caso de especial utilidad</u>: al escribir código para {{Glossary("Node.js")}}, es común que los módulos que incluyas en tu proyecto no cuenten con un controlador de evento para promesas rechazadas. Estos se registran en la consola en tiempo de ejecución de Node. Puedes capturarlos para analizarlos y manejarlos en tu código - o solo evitar que abarroten tu salida - agregando un controlador para el evento {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}, como se muestra a continuación:</p>

<pre><code>window.addEventListener("</code>unhandledrejection<code>", event =&gt; {
  /* Podrías comenzar agregando código para examinar
     la promesa específica analizando event.promise
     y la razón del rechazo, accediendo a event.reason */

  event.preventDefault();
}, false);</code></pre>

<p>Llamando al método {{domxref("Event.preventDefault", "preventDefault()")}} del evento, le dices a Javascript en tiempo de ejecución que no realice su acción predeterminada cuando las promesas rechazadas no cuenten con manejadores. En el caso de Node, esa acción predeterminada usualmente registra el error en la consola.</p>

<p>Lo ideal, por supuesto, sería examinar las promesas rechazadas para asegurarte que ninguna de ellas tienen errores de código reales antes de descartar esos eventos.</p>

<h2 id="Crear_una_promesa_alrededor_de_una_vieja_API_de_callbacks"><strong>Crear una promesa alrededor de una vieja API de callbacks</strong></h2>

<p>Una {{jsxref("Promise")}} puede ser creada desde cero usando su constructor. Esto debería ser sólo necesario para envolver viejas APIs.</p>

<p>En un mundo ideal, todas las funciones asíncronas devolverían promesas. Desafortunadamente, algunas APIs aún esperan que se les pase callbacks con resultado fallido/exitoso a la forma antigua. El ejemplo más obvio es la función {{domxref("WindowTimers.setTimeout", "setTimeout()")}}:</p>

<pre class="brush: js">setTimeout(() =&gt; diAlgo("pasaron 10 segundos"), 10000);
</pre>

<p>Combinar callbacks del viejo estilo con promesas es problemático. Si <code>diAlgo</code> falla o contiene un error de programación, nada lo captura. La función <code>setTimeout</code> es culpable de esto.</p>

<p>Afortunadamente podemos envolverlas en una promesa. La mejor práctica es envolver las funciones problemáticas en el nivel más bajo posible, y después nunca llamarlas de nuevo  directamente:</p>

<pre class="brush: js">const espera = ms =&gt; new Promise(resuelve =&gt; setTimeout(resuelve, ms));

espera(10000).then(() =&gt; diAlgo("10 segundos")).catch(falloCallback);
</pre>

<p>Básicamente, el constructor de la promesa toma una función ejecutora que nos permite resolver o rechazar manualmente una promesa. Dado que <code>setTimeout</code> no falla realmente, descartamos el rechazo en este caso.</p>

<h2 id="Composición">Composición</h2>

<p>{{jsxref("Promise.resolve()")}} y {{jsxref("Promise.reject()")}} son atajos para crear manualmente una promesa resuelta o rechazada respectivamente. Esto puede ser útil a veces.</p>

<p>{{jsxref("Promise.all()")}} son {{jsxref("Promise.race()")}} son dos herramientas de composición para ejecutar operaciones asíncronas en paralelo.</p>

<p>Podemos comenzar operaciones en paralelo y esperar que finalicen todas ellas de la siguiente manera:</p>

<pre><code>Promise.all([func1(), func2(), func3()])
.then(([resultado1, resultado2, resultado3]) =&gt; { /* usa resultado1, resultado2 y resultado3 */ });</code></pre>

<p>La composición secuencial es posible usando Javascript inteligente:</p>

<pre><code>[func1, func2, func3].reduce((p, f) =&gt; p.then(f), Promise.resolve())
.then(result3 =&gt; { /* use result3 */ });</code></pre>

<p>Básicamente, reducimos un conjunto de funciones asíncronas a una cadena de promesas equivalente a: <code>Promise.resolve().then(func1).then(func2).then(func3);</code></p>

<p>Esto se puede convertir en una función de composición reutilizable, que es común en la programación funcional:</p>

<pre><code>const aplicarAsync = (acc,val) =&gt; acc.then(val);
const componerAsync = (...funcs) =&gt; x =&gt; funcs.reduce(aplicarAsync, Promise.resolve(x));</code></pre>

<p>La función <code>componerAsync()</code> aceptará cualquier número de funciones como argumentos, y devolverá una nueva función que acepta un valor inicial que es pasado a través del conducto de composición. Esto es beneficioso porque cualquiera o todas las funciones pueden ser o asíncronas o síncronas y se garantiza que serán ejecutadas en el orden correcto:</p>

<pre class="brush: js">const transformData = componerAsync(func1, asyncFunc1, asyncFunc2, func2);
const resultado3 = transformData(data);
</pre>

<p>En ECMAScript 2017, la composición secuencial puede ser realizada usando simplemente async/await:</p>

<pre class="brush: js">let resultado;
for (const f of [func1, func2, func3]) {
  resultado = await f(resultado);
}
</pre>

<h2 id="Sincronización">Sincronización</h2>

<p>Para evitar sorpresas, las funciones pasadas a <code>then()</code> nunca serán llamadas sincrónicamente, incluso con una promesa ya resuelta:</p>

<pre class="brush: js">Promise.resolve().then(() =&gt; console.log(2));
console.log(1); // 1, 2
</pre>

<p>En lugar de ejecutarse inmediatamente, la función pasada es colocada en una cola de microtareas, lo que significa que se ejecuta más tarde cuando la cola es vaciada al final del actual ciclo de eventos de JavaScript:</p>

<pre class="brush: js">const espera = ms =&gt; new Promise(resuelve =&gt; setTimeout(resuelve, ms));

espera().then(() =&gt; console.log(4));
Promise.resuelve().then(() =&gt; console.log(2)).then(() =&gt; console.log(3));
console.log(1); // 1, 2, 3, 4
</pre>

<h2 id="Anidamiento">Anidamiento</h2>

<p>Las cadenas de promesas simples se mantienen planas sin anidar, ya que el anidamiento puede ser el resultado de una composición descuidada. Vea <a href="/es/docs/Web/JavaScript/Guide/Usar_promesas$edit#Common_mistakes">errores comunes</a>.</p>

<p>El anidamiento es una estructura de control para limitar el alcance de las sentencias <code>catch</code>. Específicamente, un <code>catch</code> anidado sólo captura fallos dentro de su contexto y por debajo, no captura errores que están más arriba en la cadena fuera del alcance del anidamiento. Cuando se usa correctamente, da mayor precisión en la recuperación de errores:</p>

<pre><code>hacerAlgoCritico()
.then(resultado =&gt; hacerAlgoOpcional()
  .then(resultadoOpcional =&gt; hacerAlgoSuper(resultadoOpcional))
  .catch(e =&gt; {})) // Ignorar si hacerAlgoOpcional falla.
.then(() =&gt; masAsuntosCriticos())
.catch(e =&gt; console.log("Acción crítica fallida: " + e.message));</code>
</pre>

<p>Nota que aquí los pasos opcionales están anidados, por la precaria colocación de lo externo (y) alrededor de ellos.</p>

<p>La declaración interna <code>catch</code> solo detecta errores de <code>hacerAlgoOpcional()</code> y <code>hacerAlgoSuper()</code>, después de lo cuál el código se reanuda con <code>masAsuntosCriticos()</code>. Es importante destacar que si <code>hacerAlgoCritico()</code> falla, el error es capturado únicamente por el <code>catch</code> final.</p>

<h2 id="Errores_comunes">Errores comunes</h2>

<p>Aquí hay algunos errores comunes que deben tenerse en cuenta al componer cadenas de promesas. Varios de estos errores se manifiestan en el siguiente ejemplo:</p>

<pre><code>// ¡Mal ejemplo!
hacerlAlgo().then(function(resultado) {
  hacerOtraCosa(resultado) // Olvida devolver una promesa desde el interior de la cadena + anidamiento innecesario
  .then(nuevoResultado =&gt; hacerUnaTerceraCosa(nuevoResultado));
}).then(() =&gt; hacerUnaCuartaCosa());
// Olvida terminar la cadena con un catch!</code></pre>

<p>El primer error es no encadenar las acciones adecuadamente. Esto sucede cuando creamos una promesa y olvidamos devolverla. Como consecuencia, la cadena se rompe, o mejor dicho, tenemos dos cadenas independientes que compiten. Esto significa que <code>hacerUnaCuartaCosa()</code> no esperará a que finalicen <code>hacerOtraCosa()</code> o <code>hacerUnaTerceraCosa()</code>, y se ejecutará paralelamente a ellas. Las cadenas separadas también tienen un manejador de errores separado, lo que provoca errores no detectados.</p>

<p>El segundo error es el anidamiento innecesario, que da lugar al primer error. La anidación también limita el alcance de los manejadores de errores internos, que - si no son deseados - pueden llevar a errores no detectados. Una variante de esto es el <a href="https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it">constructor anti-patrón de promesas</a>, el cuál combina el anidamiento con el uso redundante del constructor de promesa para envolver el código que ya usa promesas. </p>

<p>El tercer error es olvidar cerrar las cadenas con catch.Las cadenas de promesas no terminadas conducen a errores no capturados en la mayoría de los navegadores.</p>

<p>Una buena regla es devolver o terminar siempre las cadenas de promesas, y tan pronto como obtenga una nueva promesa, devolverla de inmediato, para aplanar las cosas:</p>

<pre><code>hacerAlgo()
.then(function(resultado) {
  return hacerOtraCosa(resultado);
})
.then(nuevoResultado =&gt; hacerUnaTerceraCosa(nuevoResultado))
.then(() =&gt; hacerUnaCuartaCosa())
.catch(error =&gt; console.log(error));</code></pre>

<p>Nota que <code>() =&gt; x</code> es un atajo para <code>() =&gt; { return x; }</code>.</p>

<p>Ahora tenemos una cadena determinística simple con un manejador de error adecuado.</p>

<p>El uso de <a href="/en-US/docs/Web/JavaScript/Reference/Statements/async_function">async / await</a> aborda la mayoría, si no todos estos problemas, la desventaja es que el error más común con esa sintaxis es olvidar la palabra clave <a href="en-US/docs/Web/JavaScript/Reference/Statements/async_function">await</a>.</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{jsxref("Promise.then()")}}</li>
 <li><a href="http://promisesaplus.com/">Promises/A+ specification</a></li>
 <li><a href="http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html">Nolan Lawson: Tenemos un problema con las promesas — Errores comunes con las promesas</a></li>
</ul>
