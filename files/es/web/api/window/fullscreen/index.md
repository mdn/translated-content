---
title: window.fullScreen
slug: Web/API/Window/fullScreen
tags:
  - Referencia_DOM_de_Gecko
  - páginas_a_traducir
translation_of: Web/API/Window/fullScreen
---
<div>{{APIRef}}</div>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Esta propiedad indica si la ventana se presenta en modo de pantalla comleta o no. Su funcionamiento es sólo fiable a partir de Gecko 1.9 (Firefox 3), ver Notas más abajo.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">var <var>isInFullScreen</var> = <var>windowRef</var>.fullScreen;
</pre>

<p><br>
 Con privilegios chrome, el valor de esta propiedad se puede cambiar, de otra forma, es de sólo lectura. Ten en cuenta que si intentas cambiar el valor de esta propiedad sin tener privilegios chrome, no cambiará nada y la propiedad simplemente fallará. Esto se hace para evitar que los programas diseñados para Internet Explorer fallen.</p>

<h3 id="Valor_devuelto" name="Valor_devuelto">Valor devuelto</h3>

<dl>
 <dt><code>isInFullScreen</code></dt>
 <dd>Un valor<em>binario</em> . Los valores posibles son:</dd>
</dl>

<ul>
 <li><code>true</code>: (Cierto) la ventana esta en modo pantalla completa.</li>
 <li><code>false</code>: (Falso)la ventana NO esta en modo pantalla completa.</li>
</ul>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<p>DOM nivel 0. <code>window.fullScreen</code> no forma parte de ninguna especificación W3C.</p>

<h3 id="Notas" name="Notas">Notas</h3>

<p>El funcionamiento de esta propiedad es fiable sólo en Mozilla 1.9 (Firefox 3) y posteriores. Mozilla 1.8 y versiones anteriores manejan esta propiedad pero el valor devuelto es siempre <code>false</code>, aún cuando la ventana está en modo pantalla completa ({{ Bug(127013) }}).</p>
