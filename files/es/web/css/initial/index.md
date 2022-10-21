---
title: initial
slug: Web/CSS/initial
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/initial
---
<p> <a href="es/Gu%c3%ada_de_referencia_de_CSS">Guía de referencia de CSS</a>
</p><p><br>
</p>
<h3 id="Resumen" name="Resumen"> Resumen </h3>
<p><b>initial</b> es un valor permitido en todas las propiedades CSS. Fuerza la utilización del <a href="es/CSS/Valor_inicial">valor inicial</a> de la propiedad para el elemento al cual se aplica.
</p>
<h4 id="Para_propiedades_no_heredadas" name="Para_propiedades_no_heredadas"> Para propiedades no heredadas </h4>
<p>Para las propiedades <a href="es/CSS/inheritance#propiedades_heredadas_y_no_heredadas">no heredadas</a>, este valor refuerza el comportamiento por defecto y es necesario sólo para sobrescribir otra regla. Por ejemplo:
</p>
<pre class="eval"> /* definimos un borde verde de un encabezamiento de segundo nivel */
 h2 { border: medium solid green }

 /* pero las cabeceras de la barra lateral utilizan el valor inicial de la propiedad <a href="es/CSS/color">color</a> */
 #sidebar h2 { border-color: initial; }

 /* ...en CSS1 se obtiene usando 'border: medium solid' */
</pre>
<h4 id="Para_propiedades_heredadas" name="Para_propiedades_heredadas"> Para propiedades heredadas </h4>
<p>Para las propiedades <a href="es/CSS/inheritance#propiedades_heredadas_y_no_heredadas">heredadas</a>, se usa menos ya que no refuerza el comportamiento por defecto.
</p>
<h3 id="Especificaciones" name="Especificaciones"> Especificaciones </h3>
<ul><li> <a class="external" href="http://www.w3.org/TR/css3-values/#keywords">css3-values</a>
</li><li> <a class="external" href="http://www.w3.org/TR/css3-cascade/#initial0">css3-cascade</a>
</li></ul>
<h3 id="Compatibilidad" name="Compatibilidad"> Compatibilidad </h3>
<p>Sólo algunas especificaciones son soportadas en Firefox (las cuales se incrementan en cada versión superior) <span class="comment">Únicamente soportado en Firefox algunas propiedades (se incrementa el número en cada versión).</span>
</p>
<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n"> Ver también </h3>
<p><a href="es/CSS/inherit">inherit</a>
</p><p><br>
</p>
<div class="noinclude">
<p><span class="comment">Categorías</span>
</p><p><span class="comment">Interwiki Languages Links</span>
</p>
</div>
{{ languages( { "fr": "fr/CSS/initial", "en": "en/CSS/initial" } ) }}
