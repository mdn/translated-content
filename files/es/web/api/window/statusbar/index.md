---
title: Window.statusbar
slug: Web/API/Window/statusbar
translation_of: Web/API/Window/statusbar
---
<div>{{APIRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>Retorna el objeto statusbar, la visibilidad se puede alternar en la ventana.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>objRef</var> = window.statusbar
</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<p>El siguiente ejemplo HTML muestra una forma de utilizar la propiedad visible de los diversos objetos de "bar", y tambien el cambio de privilegios nesesarios para escribir en la propiedad visible para cada una de las ventanas existentes.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;Various DOM Tests&lt;/title&gt;

&lt;script&gt;
// cambia el estado de la barra en la ventana existente
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
window.statusbar.visible=!window.statusbar.visible;
&lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Various DOM Tests&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notas">Notas</h2>

<p>Al cargar la pagina del ejemplo anterior se muestra el siguiente cuadro de dialogo:<img alt="" src="https://mdn.mozillademos.org/files/550/Modify_any_open_window_dialog.png" style="height: 262px; width: 607px;"></p>

<p>Para alternar la visibilidad de las barras,  debe de firmar sus scripts o abilitar los privilegios apropiados, como en el ejemplo anterior. Tenga en cuenta que cambiar la visibilidad de manera dinamica de las barras de herramientas puede cambiar el tamaño de la ventana de forma dramatica y afectando de manera significativa el rendimiento de su pagina.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'browsers.html#dom-window-statusbar', 'Window.statusbar')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'browsers.html#dom-window-statusbar', 'Window.statusbar')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">Ver tambien</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Window.locationbar">window.locationbar</a>, <a href="/en-US/docs/Web/API/Window.menubar">window.menubar</a>, <a href="/en-US/docs/Web/API/Window.personalbar">window.personalbar</a>, <a href="/en-US/docs/Web/API/Window.scrollbars">window.scrollbars</a>, <a href="/en-US/docs/Web/API/Window.toolbar">window.toolbar</a></li>
</ul>
