---
title: Uso de URL como valor de la propiedad cursor
slug: conflicting/Web/CSS/cursor
tags:
  - CSS
  - Todas_las_Categorías
translation_of: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
original_slug: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
---
<p><a href="/es/Gecko" title="es/Gecko">Gecko</a> 1.8 (<a href="/es/Firefox_1.5_para_Desarrolladores" title="es/Firefox_1.5_para_Desarrolladores">Firefox 1.5</a>, SeaMonkey 1.0) soporta el uso de URLs como valores para la <a class="external" href="http://www.sidar.org/recur/desdi/traduc/es/css/ui.html#propdef-cursor">propiedad cursor</a> (CSS2). Esto nos permite definir la imagen que queremos como puntero del ratón, además podemos usar cualquiera de los formatos gráficos soportados por Gecko.</p>
<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>
<p>La sintaxis de esta propiedad es:</p>
<pre class="eval">cursor: [&lt;url&gt;,]* cursor-genérico;
</pre>
<p>Esto es, se pueden indicar cero o más direcciones URL (separadas por comas), que <strong>deben</strong> ser seguidas de uno de los cursores genéricos definidos en la especificación, por ej. <code>help</code> o <code>pointer</code>.</p>
<p>Los siguientes valores están permitidos:</p>
<pre class="eval">cursor: url(foo.cur), url(<span class="nowiki">http://developer.mozilla.org/wiki-images/es/e/ed/firefox.jpg</span>), help;
</pre>
<p>Primero se intentará cargar <em>foo.cur</em>. Si este archivo no existe o no es válido por alguna otra razón, se probará con <em>firefox.jpg</em>, y si este tampoco puede ser cargado, se usará <em>help</em>.</p>
<p>El soporte a la <a class="external" href="http://www.w3.org/TR/css3-ui/#cursor">sintaxis de CSS3</a> para los valores de cursor fue añadido en Gecko 1.8beta3; por lo tanto en Firefox 1.5 funciona. Esto permite especificar las coordenadas del punto en el que la imagen del cursor es fijada al área activa. Si no se especifican, las coordenadas del punto de contacto son tomadas del propio archivo (para archivos CUR y XBM) o se fijan en la esquina superior izquierda de la imagen.</p>
<p>Un ejemplo de la sintaxis CSS3:</p>
<pre class="eval">cursor: url(<span class="nowiki">http://developer.mozilla.org/wiki-images/es/e/ed/firefox.jpg</span>), auto;

cursor: url(<span class="nowiki">http://developer.mozilla.org/wiki-images/es/e/ed/firefox.jpg</span>) 90 90, auto;
</pre>
<p><br>
 El primer número es la coordenada X, y el segundo la coordenada Y. El ejemplo anterior pone el punto de contacto del área activa a (90,90) píxeles de la esquina superior izquierda (0,0).</p>
<h3 id="Limitaciones" name="Limitaciones">Limitaciones</h3>
<p>Pueden usarse todos los formatos gráficos soportados por Gecko. Por lo tanto puede usar imágenes PNG, JPG, CUR, GIF, etc. Sin embargo, ANI no está soportado. Además, si especifica un GIF animado, el cursor usará el GIF, pero sin animación. Esta limitación podría ser superada en futuras versiones.</p>
<p>Gecko no limita el tamaño de los cursores. Sin embargo, quien busque la máxima compatibilidad multiplataforma debería limitarlos a un tamaño de 32x32, los cursores más grandes no funcionarán en Windows 9x (95, 98, MÍ).</p>
<p>Los cursores translúcidos no estan soportados en las versiones de Windows anteriores a XP. Esto es una limitación del sistema operativo. La transparencia funciona en todas las plataformas.</p>
<p>Solo las versiones de Mozilla para Windows, OS/2 y GNU/Linux (usando GTK+ 2.4 o superior) soportan valores URL para los cursores. El soporte en otras plataformas podría ser añadido en futuras versiones: (Mac OS: {{ Bug(286304) }}, QNX Neutrino: {{ Bug(286307) }}, XLib: {{ Bug(286309) }}, Qt: {{ Bug(286310) }}, BeOS: {{ Bug(298184) }}, GTK 2.0/2.2: {{ Bug(308536) }})</p>
<h3 id="Compatibilidad_con_otros_navegadores" name="Compatibilidad_con_otros_navegadores">Compatibilidad con otros navegadores</h3>
<p>Microsoft Internet Explorer también soporta URI como valor para la propiedad <code>cursor</code>. Sin embargo, solo soporta los formatos gráficos CUR y ANI. Además, es menos estricto con la sintaxis de la propiedad <code>cursor</code>. Esto significa que declaraciones como:</p>
<pre class="eval">cursor: url(foo.cur);
</pre>
<p>O:</p>
<pre class="eval">cursor: url(foo.cur), pointer, url(bar.cur), auto;
</pre>
<p>funcionarán en MSIE, pero no lo harán en los navegadores basados en Gecko. Para ser compatible con Gecko y actuar conforme a la especificación de CSS2.1, ponga la lista de URIs primero, y ponga siempre <strong>un</strong> cursor genérico <strong>al final</strong>. <span class="comment">: ''To-do: document what MSIE does with CSS 3 hotspot locations''</span></p>
