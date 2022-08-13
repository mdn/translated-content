---
title: Bugs importantes solucionados en Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
original_slug: Bugs_importantes_solucionados_en_Firefox_3
---
<div>{{FirefoxSidebar}}</div>

<p>Este artículo es una lista de correcciones importantes de errores en Firefox 3 que no resultan obvios en la documentación.</p>

<ul>
 <li>Si ocurre un error mientras se analiza un overlay, el overlay no se aplica. Los errores del análisis se registran en la consola de errores. ({{ Bug(335755) }})</li>
 <li>Error corregido en el que los elementos '<code>&lt;menupopup&gt;</code>' pueden colocarse dentro de un contenedor cuando se adjuntan en un elemento menú o de tipo menú. ({{ Bug(345896) }})</li>
 <li>La propiedad '<code>dlgType</code>' de botones funciona correctamente. ({{ Bug(308591) }})</li>
 <li>El argumento '<code>canBubble</code>' de <a href="es/DOM/event.initEvent">event.initEvent</a> funciona correctamente de manera que los eventos pueden ser llamados sin que se hagan recurrentes. ({{ Bug(330190) }})</li>
 <li>El evento '<code>DOMAttrModified</code>' maneja correctamente atributos con nombres con espacio. ({{ Bug(362391) }})</li>
 <li>Las instrucciones de procesamiento XML, tal como '<code>&lt;?xml-stylesheet ?&gt;</code>', se han agregado al DOM de documentos XUL. Lo que significa que no está garantizado que <a href="es/DOM/document.firstChild">document.firstChild</a> sea el elemento raíz, en su lugar utiliza <a href="es/DOM/document.documentElement">document.documentElement</a>. Por otro lado las instrucciones de procesamiento '<code>&lt;?xml-stylesheet ?&gt;</code>' y '<code>&lt;?xul-overlay ?&gt;</code>' ya no tienen efecto fuera del prólogo del documento. ({{ Bug(319654) }})</li>
 <li>Las funciones '<code>getElementsByAttributeNS()</code>' se han añadido a los elementos y documentos XUL. ({{ Bug(239976) }})</li>
 <li>Los escuchadores de eventos se mantienen cuando se mueve o se quita un elemento de un documento XUL. ({{ Bug(286619) }})</li>
 <li>Los eventos de mutación se disparan para documentos no mostrados. ({{ Bug(201236) }})</li>
 <li>Corregidos varios problemas con elementos de dibujo en orden equivocado. ({{ Bug(317375) }})</li>
 <li>Se ha corregido <code><a href="es/DOM/element.getElementsByTagName">getElementsByTagName()</a></code> para que funcione correctamente en sub-árboles que tienen elementos con prefijos en los nombres de las etiquetas. ({{ Bug(206053) }}).</li>
 <li>Los eventos '<code>DOMNodeInserted</code>' y '<code>DOMNodeRemoved</code>' se aplican correctamente a los nodos apropiados ({{ Bug(367164) }}).</li>
 <li>La expresión '<code>\d</code>', uno de los caracteres especiales usados en expresiones regulares, ha sido corregida para que concuerde sólo con dígitos del alfabeto latino (equivalente a <code>{{ mediawiki.external('0-9') }}</code>). ({{ Bug(378738) }})</li>
 <li>La categoría 'image-sniffing-services' permite que un descodificador de imágenes implementado como una extensión, descodifique correctamente imágenes enviadas con un tipo MIME incorrecto. ({{ Bug(391667) }})</li>
</ul>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<ul>
 <li><a href="es/Firefox_3_para_desarrolladores">Firefox 3 para desarrolladores</a></li>
</ul>

<p> </p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/Notable_bugs_fixed_in_Firefox_3", "fr": "fr/Bugs_importants_corrig\u00e9s_dans_Firefox_3", "ja": "ja/Notable_bugs_fixed_in_Firefox_3", "pl": "pl/Istotne_b\u0142\u0119dy_poprawione_w_Firefoksie_3" } ) }}</p>
