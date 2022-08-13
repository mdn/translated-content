---
title: event.which
slug: Web/API/UIEvent/which
tags:
  - DOM
  - events
  - metodo
  - which
translation_of: Web/API/KeyboardEvent/which
original_slug: Web/API/KeyboardEvent/which
---
<p>{{ ApiRef() }}</p>
<h3 id="Summary" name="Summary">Resumen</h3>
<p>Devuelve el <code>keyCode</code> de la tecla presionada, o el codigo del caracter (<code>charCode</code>) de la tecla alfanumerica presionada.</p>
<h3 id="Syntax" name="Syntax">Sintaxis</h3>
<pre class="eval"><em>var keyResult</em> = event.which;
</pre>
<p><code>keyResult</code> contiene el codigo numerico para una tecla en particular, dependiendo si la tecla presionada es alfanumerica o no-alfanumerica. Por favor mire <code><a href="/en/DOM/event.charCode" title="en/DOM/event.charCode">charCode</a></code> y <code><a href="/en/DOM/event.keyCode" title="en/DOM/event.keyCode">keyCode</a></code> para mas informacion.</p>
<h3 id="Example" name="Example">Ejemplo</h3>
<pre>&lt;html&gt;
&lt;head&gt;
&lt;title&gt;charCode/keyCode/which example&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function showKeyPress(evt)
{
alert("onkeypress handler: \n"
      + "keyCode property: " + evt.keyCode + "\n"
      + "which property: " + evt.which + "\n"
      + "charCode property: " + evt.charCode + "\n"
      + "Character Key Pressed: "
      + String.fromCharCode(evt.charCode) + "\n"
     );
}


function keyDown(evt)
{
alert("onkeydown handler: \n"
      + "keyCode property: " + evt.keyCode + "\n"
      + "which property: " + evt.which + "\n"
     );
}


&lt;/script&gt;
&lt;/head&gt;

&lt;body
 onkeypress="showKeyPress(event);"
 onkeydown="keyDown(event);"
&gt;

&lt;p&gt;Por favor presione cualquier tecla.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<div class="note">
 <strong>Nota:</strong> El codigo de arriba falla en Firefox 9 debido al <a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=696020" title="onkeypress attribute on body no longer gets events happening on the window">bug 696020</a>.</div>
<h3 id="Specification" name="Specification">Especificacion</h3>
<p>No es parte de ninguna especificacion.</p>
