---
title: Añadir lectores de canales a Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
tags:
  - RSS
  - Todas_las_Categorías
translation_of: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
original_slug: Añadir_lectores_de_canales_a_Firefox
---
<div>{{FirefoxSidebar}}</div><p>A partir de Firefox 2, Firefox permite seleccionar diferentes lectores de canales RSS o Atom para usarlos cuando se trata de leer un canal. Este artículo proporciona información sobre cómo añadir lectores adicionales no admitidos por defecto.</p>

<h2 id="A.C3.B1adir_un_nuevo_lector_de_canales_basado_en_la_web" name="A.C3.B1adir_un_nuevo_lector_de_canales_basado_en_la_web">Añadir un nuevo lector de canales basado en la web</h2>

<p>Para añadir un nuevo lector de canales basado en la web, todo lo que tiene que hacer es añadir tres nuevas preferencias:</p>

<dl>
 <dt><code>browser.contentHandlers.types.<em>número</em>.title</code></dt>
 <dd>El nombre del lector de canales.</dd>
 <dt><code>browser.contentHandlers.types.<em>número</em>.type</code></dt>
 <dd>Para un lector de canales, en este caso sería "application/vnd.mozilla.maybe.feed".</dd>
 <dt><code>browser.contentHandlers.types.<em>número</em>.uri</code></dt>
 <dd>La URI del lector de canales. Utilice "%s" donde se deba insertar la URL del canal.</dd>
</dl>

<p><code><em>número</em></code> debe ser reemplazado con el siguiente número único más alto que no haya sido usado aún. Por ejemplo, si desea añadir un nuevo lector de canales llamado "Lector Sencillo", y ya están definidos manejadores de contenido con los números 0 al 4, debe sustituir <code><em>número</em></code> por 5, como sigue:</p>

<ul>
 <li><code>browser.contentHandlers.types.5.title</code>: Lector Sencillo</li>
 <li><code>browser.contentHandlers.types.5.type</code>: application/vnd.mozilla.maybe.feed</li>
 <li><code>browser.contentHandlers.types.5.uri</code>: <span class="nowiki">http://www.urllectorsencillo.com?feed=%s</span></li>
</ul>

<p>Puede añadir estas preferencias manualmente, visitando about:config, o puede programarlo, si una extensión desea instalar un nuevo lector de canales.</p>

<h3 id="A.C3.B1adir_un_lector_de_canales_desde_una_aplicaci.C3.B3n_web" name="A.C3.B1adir_un_lector_de_canales_desde_una_aplicaci.C3.B3n_web">Añadir un lector de canales desde una aplicación web</h3>

<p>El código JavaScript en la web puede añadir un lector de canales fácilmente, usando la función <code>navigator.registerContentHandler()</code>, de esta manera:</p>

<pre>navigator.registerContentHandler("application/vnd.mozilla.maybe.feed",
                                 "http://www.urllectorsencillo.com?feed=%s",
                                 "Lector Sencillo");
</pre>

<h2 id="A.C3.B1adir_una_nueva_aplicaci.C3.B3n_lectora_de_canales" name="A.C3.B1adir_una_nueva_aplicaci.C3.B3n_lectora_de_canales">Añadir una nueva aplicación lectora de canales</h2>

<p>La manera más sencilla de hacer esto es simplemente usar la interfaz de usuario disponible, usando el panel Canales en la ventana de preferencias (u opciones, dependiendo de su plataforma).</p>

<p>También se puede hacer programáticamente mediante una extensión, lo cual se hace estableciendo el valor de la opción <code>browser.feeds.handlers.application</code> a la ruta de la aplicación a usar para leer los canales.</p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/Adding_feed_readers_to_Firefox", "ja": "ja/Adding_feed_readers_to_Firefox", "zh-tw": "zh_tw/\u65b0\u589e\u6d88\u606f\u4f86\u6e90\u95b1\u8b80\u5de5\u5177" } ) }}</p>
