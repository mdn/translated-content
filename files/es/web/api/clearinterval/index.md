---
title: WindowTimers.clearInterval()
slug: Web/API/clearInterval
translation_of: Web/API/WindowOrWorkerGlobalScope/clearInterval
original_slug: Web/API/WindowOrWorkerGlobalScope/clearInterval
---
<div>
<div>{{APIRef("HTML DOM")}}</div>
</div>

<p>Cancela una acción reiterativa que se inició mediante una llamada a {{domxref("window.setInterval", "setInterval")}}.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox"><em>window</em>.clearInterval(<var>intervalID</var>)
</pre>

<p><code>intervalID</code> es el identificador de la acción reiterativa que se desea cancelar. Este ID se obtiene a partir de <code>setInterval()</code>.</p>

<h2 id="Example" name="Example">Ejemplo</h2>

<p>Vea el <a href="/en-US/docs/DOM/window.setInterval#Example" title="DOM/window.setInterval#Example">ejemplo de<code> setInterval()</code></a>.</p>

<h2 id="Specification" name="Specification">Especificación</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'timers.html#timers', 'clearInterval')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">Vea también</h2>

<ul>
 <li><a href="/en-US/docs/JavaScript/Timers" title="JavaScript/Timers">JavaScript timers</a></li>
 <li>{{domxref("WindowTimers.setTimeout")}}</li>
 <li>{{domxref("WindowTimers.setInterval")}}</li>
 <li>{{domxref("WindowTimers.clearTimeout")}}</li>
 <li>{{domxref("window.requestAnimationFrame")}}</li>
 <li><a href="/en-US/docs/JavaScript/Timers/Daemons" title="JavaScript/Timers/Daemons"><em>Daemons</em> management</a></li>
</ul>
