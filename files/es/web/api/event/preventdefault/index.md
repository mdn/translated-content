---
title: event.preventDefault
slug: Web/API/Event/preventDefault
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Event/preventDefault
---
<p>{{ApiRef("DOM")}}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><em>event</em>.preventDefault()
</pre>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<p>Cambiar el estado de una caja de selección es la función por defecto de la acción de hacer clic sobre la caja. Este ejemplo ilustra como hacer que esto no ocurra:</p>

<pre>&lt;html&gt;
&lt;head&gt;
&lt;title&gt;ejemplo de preventDefault&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function stopDefAction(evt) {
  evt.preventDefault();
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;p&gt;Por favor, haz clic sobre la caja de selección.&lt;/p&gt;

&lt;form&gt;
&lt;input type="checkbox" onclick="stopDefAction(event);"/&gt;
&lt;label for="checkbox"&gt;Selección&lt;/label&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Puedes ver <code>preventDefault</code> en acción <a class="external" href="http://developer.mozilla.org/samples/domref/dispatchEvent.html">aquí</a>.</p>

<p>El siguiente ejemplo demuestra cómo puede evitarse que un texto invalido entre en un campo de formulario mediante preventDefault().</p>

<pre>&lt;html&gt;
&lt;head&gt;
&lt;title&gt;preventDefault example&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function checkName(evt) {
var charCode = evt.charCode;

  if (charCode != 0) {
    if (charCode &lt; 97 || charCode &gt; 122) {
      evt.preventDefault();
      alert("Por favor usa sólo letras minúsculas." + "\n"
            + "charCode: " + charCode + "\n"
      );
    }
  }
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;p&gt;Por favor entra tu nombre en letras minúsculas solamente.&lt;/p&gt;
&lt;form&gt;
&lt;input type="text" onkeypress="checkName(event);"/&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Llamar a <code>preventDefault</code> en cualquier momento durante la ejecución, cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá.</p>

<p>Puedes usar <a href="es/DOM/event.cancelable">event.cancelable</a> para comprobar si el evento es cancelable o no. Llamar a <code>preventDefault</code> para un evento no cancelable, no tiene ningún efecto.</p>

<p><code>preventDefault</code> no detiene las siguientes llamadas al evento producidas en el DOM. En su lugar debería usarse <a href="es/DOM/event.stopPropagation">event.stopPropagation</a> para ese propósito.</p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-preventDefault">DOM Level 2 Events: preventDefault</a></p>
