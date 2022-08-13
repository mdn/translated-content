---
title: Cadenas del User Agent de Gecko
slug: Web/HTTP/Headers/User-Agent/Firefox
tags:
  - Desarrollo_Web
  - Todas_las_Categorías
translation_of: Web/HTTP/Headers/User-Agent/Firefox
original_slug: Cadenas_del_User_Agent_de_Gecko
---
<h3 id="Uso_Apropiado" name="Uso_Apropiado">Uso Apropiado</h3>
<p>No se recomienda el uso de las cadenas del User Agent como su principal opción para la detección del navegador. Vea <a href="es/Deteccion_Cross_browser_y_Soporte_Cross_Browser"> Deteccion Cross browser y Soporte Cross Browser</a> para una ojeada mas en profundo a varias técnicas sobre detección de navegadores con recomendaciones.</p>
<p>En particular, recomendamos usar la detección de la cadena del User Agent para detección del navegador del lado del servidor. Si su actual código del lado cliente usa detección de la cadena del User Agent, simplemente puede hacer una búsqueda por la cadena "Gecko" en el User Agent para detectar cualquier navegador basado en Gecko.</p>
<p>Para todos los detalles que lidian con detecciones con Gecko los cuales lidian con bugs especificos o los cuales requieran conocimiento de strings especificos o fechas de la compilación, use el objeto <a href="es/DOM_Client_Object_Cross-Reference/navigator">navigator</a>.</p>
<h3 id="Lista_de_user_agents_liberados_por_Netscape_y_AOL_basados_en_Gecko" name="Lista_de_user_agents_liberados_por_Netscape_y_AOL_basados_en_Gecko">Lista de user agents liberados por Netscape y AOL basados en Gecko</h3>
<p>Vea <a class="external" href="http://www.mozilla.org/build/revised-user-agent-strings.html">mozilla.org's user-agent strings reference</a> para Plataforma específico,
 <i>
  Seguridad</i>
 ,
 <i>
  Sistema Operativo</i>
 o
 <i>
  CPU</i>
 y valores de
 <i>
  localización</i>
 .</p>
<ul>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.4) Gecko/20030624 Netscape/7.1 (ax)&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0.2) Gecko/20030208 Netscape/7.02&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0.2) Gecko/20021120 Netscape/7.01&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0.1) Gecko/20020823 Netscape/7.0&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.1) Gecko/20020730 AOL/7.0&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0rc2) Gecko/20020512 Netscape/7.0b1&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4.2) Gecko/20020220 CS 2000 7.0/7.0&lt;/tt&gt;
  <ul>
   <li>&lt;tt&gt;Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.4.2) Gecko/20020502 CS 2000 7.0/7.0&lt;/tt&gt;</li>
  </ul>
 </li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4.1) Gecko/20020508 Netscape6/6.2.3&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4.1) Gecko/20020314 Netscape6/6.2.2&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4) Gecko/20011128 Netscape6/6.2.1&lt;/tt&gt;</li>
 <li>&lt;tt&gt;Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.2) Gecko/20010726 Netscape6/6.1&lt;/tt&gt;</li>
</ul>
<p><br>
 Para una información más detallada sobre liberaciones de Netscape y Mozilla, por favor vea el <a class="external" href="http://www.mozilla.org/releases/cvstags.html">mozilla.org cvstags reference</a>.</p>
<p> </p>
<div class="originaldocinfo">
 <h3 id="Informacion_Del_documento_Original" name="Informacion_Del_documento_Original">Informacion Del documento Original</h3>
 <ul>
  <li>Autor: Bob Clary</li>
  <li>Última Actualización: Junio 30, 2003</li>
  <li>Copyright © 2001-2003 Netscape. Todos los derechos reservados.</li>
 </ul>
</div>
<p> </p>
