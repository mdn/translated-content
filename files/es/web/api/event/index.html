---
title: evento
slug: Web/API/Event
tags:
  - para_revisar
translation_of: Web/API/Event
---
<p>{{APIRef("DOM")}}</p>

<p>« <a href="/es/Referencia_DOM_de_Gecko" title="es/Referencia_DOM_de_Gecko">Referencia DOM de Gecko</a></p>

<h3 id="Introducci.C3.B3n" name="Introducci.C3.B3n">Introducción</h3>

<p>Éste capítulo describe el Modelo De Evento DOM de nivel 2 como es implementado por <a href="/es/Gecko" title="es/Gecko">Gecko</a>. La propia interfaz de <a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event">Evento</a> es descrita, así como las interfaces para el registro de evento sobre los nodos en el DOM, manipuladores y "oyentes" (<code>listeners</code>) de eventos, y varios ejemplos mas extensos que muestran como las varias interfaces de evento se relacionan unas  con las otras.</p>

<p>Hay un diagrama excelente que explica claramente las tres fases del flujo de eventos a través del DOM en el <a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/events.html#Events-flow">DOM Level 3 Events draft</a>.</p>

<h4 id="La_interfaz_evento_.28Event.29_de_DOM" name="La_interfaz_evento_.28Event.29_de_DOM">La interfaz evento (<code>Event</code>) de DOM</h4>

<p>Los gestores de eventos pueden estar atados a varios elementos en el DOM. Cuando un evento ocurre, un objeto de evento es dinámicamente creado y pasado secuencialmente a las "escuchas" (<small>listeners</small>) autorizadas para la gestión del evento. La interfaz <code>Event</code> del DOM es entonces accesible por la función de manejo, vía el objeto de evento puesto como el primer (y único) argumento.</p>

<p><span class="comment">Given that we don't list the three ways right here, the sentence is unclear, and is not perfectly right either IMO. -Nickolay There are three ways to attach an event listener to an element. With 2 of those techniques, the event object is passed to the handler function implicitly. The remaining technique requires you to specify the &lt;code&gt;event&lt;/code&gt; object as a parameter, which is passed explicitly to the event handler function.</span> El ejemplo siguiente muestra como un objeto de evento es pasado a una función de gestión de evento, y puede llamarse desde otra parecida.</p>

<p>El parámetro "evt" no es pasado en el código de abajo, el objeto de evento es cambiado automáticamente a <em>foo</em>. Todo lo necesario es definir un parámetro en el gestor de evento para recibir el objeto de evento.</p>

<pre>function foo(evt) {
  // Las funciones de gestión como esta
  // dan una referencia implícita del
  // evento que toca manejar
  // (en este caso se llama "evt").
  alert(evt);
}
table_el.onclick = foo;
</pre>

<p>Este ejemplo es muy simple pero muestra una característica importante de los eventos en el DOM de Gecko, la cual es que en el DOM se accede a los objetos de eventos a través de las funciones de manejo. Entonces al tener una referencia al objeto de evento, se puede llegar a todas las propiedades y métodos descritos en este capítulo.</p>

<p>Para más detalles de como los eventos se mueven dentro del DOM, ver: <a href="/es/Referencia_DOM_de_Gecko/Ejemplos#Ejemplo_5:_Propagaci.C3.B3n_de_evento" title="es/Referencia_DOM_de_Gecko/Ejemplos#Ejemplo_5:_Propagaci.C3.B3n_de_evento">Ejemplo 5: Propagación de evento</a></p>

<h4 id="Lista_de_los_gestores_de_evento_del_DOM" name="Lista_de_los_gestores_de_evento_del_DOM">Lista de los gestores de evento del DOM</h4>

<p>Además del objeto <code>event</code> descrito aquí, el Gecko DOM también proporciona métodos para registrar oyentes de eventos en nodos en el DOM, quitando aquellos oyentes de eventos, y enviando eventos desde el DOM.</p>

<p>Estos y los varios <a href="/es/DOM/element#Manejo_de_los_eventos" title="es/DOM/element#Manejo_de_los_eventos">manejos de eventos</a> de elementos HTML o XML son los puntos de entrada principales para los eventos en el DOM. Estos tres métodos se describen en la lista de <a href="/es/DOM/element" title="es/DOM/element">referencia al elemento</a>.</p>

<p>Puede también pasar la referencia del objeto del evento como un parámetro predefinido, llamado <code>event</code>, a la función que maneja el evento. Esto es muy parecido a la forma en que trabaja <code>this</code>, pero para objetos de eventos, más bien que las referencias del objeto del elemento.</p>

<pre>&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Ejemplo de parámetro de objeto de evento&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function showCoords(event){
  alert(
    "clientX value: " + event.clientX + "\n" +
    "clientY value: " + event.clientY + "\n"
  );
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body onmousedown="showCoords(event)"&gt;
&lt;p&gt;Para ver las coordinadas del ratón
haga clic en cualquier lugar de esta página.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>El parámetro predefinido del objeto <code>event</code> permite pasar tantos parámetros de gestión de evento como sea necesario:</p>

<pre>&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Ejemplo de objeto con varios parámetros&lt;/title&gt;

&lt;script type="text/javascript"&gt;

var par2 = 'hello';
var par3 = 'world!';

function muestraCoords(evt, p2, p3){
  alert(
    "clienteX value: " + evt.clientX + "\n"
    + "clientY value: " + evt.clientY + "\n"
    + "p2: " + p2 + "\n"
    + "p3: " + p3 + "\n"
  );
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body onmousedown="muestraCoords(event, par2, par3)"&gt;
&lt;p&gt;Para ver las coordinadas del ratón
haga clic en cualquier lugar de esta página.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="Propiedades" name="Propiedades">Propiedades</h3>

<dl>
 <dt><a href="/es/DOM/event.altKey" title="es/DOM/event.altKey">event.altKey</a> </dt>
 <dd>Devuelve un valor indicando si la tecla <code>&lt;alt&gt;</code> fue pulsada durante el evento.</dd>
 <dt><a href="/es/DOM/event.bubbles" title="es/DOM/event.bubbles">event.bubbles</a> </dt>
 <dd>Devuelve un valor que indica si el evento se propaga hacia arriba a través del DOM o no.</dd>
 <dt><a href="/es/DOM/event.button" title="es/DOM/event.button">event.button</a> </dt>
 <dd>Devuelve el botón del ratón.</dd>
 <dt><a href="/es/DOM/event.cancelBubble" title="es/DOM/event.cancelBubble">event.cancelBubble</a> {{deprecated_inline}} </dt>
 <dd>Devuelve un valor que indica si la propagación hacia arriba fue cancelada o no.</dd>
 <dt><a href="/es/DOM/event.cancelable" title="es/DOM/event.cancelable">event.cancelable</a> </dt>
 <dd>Devuelve un valor que indica si el evento se puede cancelar.</dd>
 <dt><a href="/es/DOM/event.charCode" title="es/DOM/event.charCode">event.charCode</a> </dt>
 <dd>Devuelve el valor Unicode de una tecla de carácter que fue apretada como parte de un evento <a href="/es/DOM/event/keypress" title="es/DOM/event/keypress">keypress</a>.</dd>
 <dt><a href="/es/DOM/event.clientX" title="es/DOM/event.clientX">event.clientX</a> </dt>
 <dd>Devuelve la posición horizontal del evento.</dd>
 <dt><a href="/es/DOM/event.clientY" title="es/DOM/event.clientY">event.clientY</a> </dt>
 <dd>Devuelve la posición vertical del evento.</dd>
 <dt><a href="/es/DOM/event.ctrlKey" title="es/DOM/event.ctrlKey">event.ctrlKey</a> </dt>
 <dd>Devuelve un valor que indica si la tecla <code>&lt;Ctrl&gt;</code> fue apretada durante el evento.</dd>
 <dt><a href="/es/DOM/event.currentTarget" title="es/DOM/event.currentTarget">event.currentTarget</a> </dt>
 <dd>Devuelve una referencia al objetivo actual registrado para el evento.</dd>
 <dt><a href="/es/DOM/event.detail" title="es/DOM/event.detail">event.detail</a> </dt>
 <dd>Devuelve detalles sobre el evento, dependiendo del tipo de evento.</dd>
 <dt><a href="/es/DOM/event.eventPhase" title="es/DOM/event.eventPhase">event.eventPhase</a> </dt>
 <dd>Utilizado para indicar qué fase del flujo del evento es actualmente en proceso de evaluación.</dd>
 <dt><a href="/es/DOM/event.explicitOriginalTarget" title="es/DOM/event.explicitOriginalTarget">event.explicitOriginalTarget</a> </dt>
 <dd>El objetivo del evento (específico a Mozilla).</dd>
 <dt><a href="/es/DOM/event.isChar" title="es/DOM/event.isChar">event.isChar</a> </dt>
 <dd>Devuelve un valor que indica si el evento produce o no una tecla de carácter.</dd>
 <dt><a href="/es/DOM/event.keyCode" title="es/DOM/event.keyCode">event.keyCode</a> </dt>
 <dd>Devuelve el valor Unicode de una tecla que no es caracter en un evento <a href="/es/DOM/event/keypress" title="es/DOM/event/keypress">keypress</a> o cualquier tecla en cualquier otro tipo de evento de teclado.</dd>
 <dt><a href="/es/DOM/event.layerX" title="es/DOM/event.layerX">event.layerX</a> </dt>
 <dd>Devuelve la coordenada horizontal del evento relativo a la capa actual.</dd>
 <dt><a href="/es/DOM/event.layerY" title="es/DOM/event.layerY">event.layerY</a> </dt>
 <dd>Devuelve la coordenada vertical del evento relativo a la capa actual.</dd>
 <dt><a href="/es/DOM/event.metaKey" title="es/DOM/event.metaKey">event.metaKey</a> </dt>
 <dd>Devuelve un valor booleano indicando si la <code>meta</code> tecla fue presionada durante un evento.</dd>
 <dt><a href="/es/DOM/event.originalTarget" title="es/DOM/event.originalTarget">event.originalTarget</a> </dt>
 <dd>El objetivo principal de un evento, antes de cualquier reapunte (Especifiación Mozilla).</dd>
 <dt><a href="/es/DOM/event.pageX" title="es/DOM/event.pageX">event.pageX</a> </dt>
 <dd>Devuelve la coordenada horizontal del evento, relativo al documento completo.</dd>
 <dt><a href="/es/DOM/event.pageY" title="es/DOM/event.pageY">event.pageY</a> </dt>
 <dd>Devuelve la coordenada vertical del evento, relativo al documento completo.</dd>
 <dt><a href="/es/DOM/event.relatedTarget" title="es/DOM/event.relatedTarget">event.relatedTarget</a> </dt>
 <dd>Identifica un objetivo secundario para el evento.</dd>
 <dt><a href="/es/DOM/event.screenX" title="es/DOM/event.screenX">event.screenX</a> </dt>
 <dd>Devuelve la coordenada horizontal del evento en la pantalla.</dd>
 <dt><a href="/es/DOM/event.screenY" title="es/DOM/event.screenY">event.screenY</a> </dt>
 <dd>Devuelve la coordenada vertical del evento en la pantalla.</dd>
 <dt><a href="/es/DOM/event.shiftKey" title="es/DOM/event.shiftKey">event.shiftKey</a> </dt>
 <dd>Devuelve un valor booleano indicando si la tecla <code>&lt;shift&gt;</code> fue presionada cuando el evento fue disparado.</dd>
 <dt><a href="/es/DOM/event.target" title="es/DOM/event.target">event.target</a> </dt>
 <dd>Devuelve una referencia al objetivo en la cual el evento fue originalmente enviado.</dd>
 <dt><a href="/es/DOM/event.timeStamp" title="es/DOM/event.timeStamp">event.timeStamp</a> </dt>
 <dd>Devuelve el momento de creación del evento.</dd>
 <dt><a href="/es/DOM/event.type" title="es/DOM/event.type">event.type</a> </dt>
 <dd>Devuelve el nombre del evento (distingue mayúsculas y minúsculas).</dd>
 <dt><a href="/es/DOM/event.view" title="es/DOM/event.view">event.view</a> </dt>
 <dd>El atributo vista identifica la <code>AbstractView</code> del cual el evento fue generado.</dd>
 <dt><a href="/es/DOM/event.which" title="es/DOM/event.which">event.which</a> </dt>
 <dd>Devuelve el valor Unicode de la tecla en un evento del teclado, sin importar el tipo de tecla que se presionó.</dd>
</dl>

<h3 id="M.C3.A9todos" name="M.C3.A9todos">Métodos</h3>

<dl>
 <dt><a href="/es/DOM/event.initEvent" title="es/DOM/event.initEvent">event.initEvent</a> </dt>
 <dd>Inicia el valor de un evento que se ha creado vía la interfaz <code>DocumentEvent</code>.</dd>
 <dt><a href="/es/DOM/event.initKeyEvent" title="es/DOM/event.initKeyEvent">event.initKeyEvent</a> </dt>
 <dd>Inicia un evento del teclado. (Específico de Gecko).</dd>
 <dt><a href="/es/DOM/event.initMouseEvent" title="es/DOM/event.initMouseEvent">event.initMouseEvent</a> </dt>
 <dd>Inicia un evento del ratón una vez que se ha creado.</dd>
 <dt><a href="/es/DOM/event.initUIEvent" title="es/DOM/event.initUIEvent">event.initUIEvent</a> </dt>
 <dd>Inicia un evento de la interfaz de usuario (<em>UI</em>) una vez que se ha creado.</dd>
 <dt><a href="/es/DOM/event.preventBubble" title="es/DOM/event.preventBubble">event.preventBubble</a> {{obsolete_inline}} </dt>
 <dd>Previene la expansión del evento. Este método es desaconsejado en favor del estándar <a href="/es/DOM/event.stopPropagation" title="es/DOM/event.stopPropagation">stopPropagation</a> y ha sido <a href="/es/Los_cambios_en_Gecko_1.9_afectando_a_los_sitios_web" title="es/Los_cambios_en_Gecko_1.9_afectando_a_los_sitios_web">retirado en Gecko 1.9</a>.</dd>
 <dt><a href="/es/DOM/event.preventCapture" title="es/DOM/event.preventCapture">event.preventCapture</a> {{obsolete_inline}}</dt>
 <dd>Este método es desaconsejado en favor del estándar <a href="/es/DOM/event.stopPropagation" title="es/DOM/event.stopPropagation">stopPropagation</a> y ha sido <a href="/es/Los_cambios_en_Gecko_1.9_afectando_a_los_sitios_web" title="es/Los_cambios_en_Gecko_1.9_afectando_a_los_sitios_web">retirado en Gecko 1.9</a>.</dd>
 <dt><a href="/es/DOM/event.preventDefault" title="es/DOM/event.preventDefault">event.preventDefault</a> </dt>
 <dd>Cancela el evento (si éste es anulable).</dd>
 <dt><a href="/es/DOM/event.stopPropagation" title="es/DOM/event.stopPropagation">event.stopPropagation</a> </dt>
 <dd>Para la propagación de los eventos más allá en el DOM.</dd>
</dl>
