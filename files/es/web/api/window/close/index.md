---
title: Window.close()
slug: Web/API/Window/close
translation_of: Web/API/Window/close
---
<p>{{ ApiRef() }}</p>

<h2 id="Summary" name="Summary">Resumen</h2>

<p>Cierra la ventana actual, o la ventana en la cual fue llamada.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="eval"><em>window</em>.close();
</pre>

<h2 id="Description" name="Description">Descripción</h2>

<p>Cuando este método es llamado, la ventana referenciada es cerrada.</p>

<p>Este método solo se permite ser llamado por ventanas que fueron abiertas por un script utilizando el método {{domxref("window.open()")}}. Si la ventana no fue abierta por un script, el siguiente error aparece en la consola de JavaScript: S<code>cripts</code><code> may not close windows that were not opened by script.</code></p>

<h2 id="Examples" name="Examples">Ejemplos</h2>

<h3 id="Closing_a_window_opened_with_window.open.28.29" name="Closing_a_window_opened_with_window.open.28.29">Cerrar una ventana abierta con window.open()</h3>

<p>Este es un ejemplo que demuestra como utilizar este método para cerrar una ventana que fue abierta por un script llamando {{domxref("window.open()")}}.</p>

<pre>&lt;script type="text/javascript"&gt;
//Global var to store a reference to the opened window
var openedWindow;

function openWindow()
{
  openedWindow = window.open('moreinfo.htm');
}

function closeOpenedWindow()
{
  openedWindow.close();
}
&lt;/script&gt;
</pre>

<h3 id="Closing_the_current_window" name="Closing_the_current_window">Cerrando la ventana actual</h3>

<h3 id="Closing_the_current_window" name="Closing_the_current_window"><span style="font-size: 14px; line-height: 1.5;">Cuando se llama al método del objeto window close() directamente, en vez de llamar a close() en una instancia de la ventana, el navegador cerrará la ventana que está en primer plano,  independientemente si el script fue creado en la ventana o no.</span><span style="font-size: 14px; line-height: 1.5;"> (Firefox 35.0.1: los scripts no pueden cerrar ventanas que ellos no han abierto)</span></h3>

<pre>&lt;script type="text/javascript"&gt;
function closeCurrentWindow()
{
  window.close();
}
&lt;/script&gt;
</pre>

<h2 id="Specification" name="Specification">Especificación</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-window-close', 'window.close()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Additional_Reference" name="Additional_Reference">Referencia adicional</h2>

<p>{{Compat("api.Window.close")}}</p>
