---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json
---
<p>{{AddonSidebar}}</p>

<div class="blockIndicator note">
<p>Este artículo describe manifest.json para extensiones web. Si estás buscando información acerca de manifest.json en PWAs, revisa el artículo sobre <a href="/en-US/docs/Web/Manifest">Web App Manifest</a>.</p>
</div>

<p>El archivo <code>manifest.json</code> es el único archivo que toda extensión usando la API WebExtension debe contener necesariamente.</p>

<p>Usando <code>manifest.json</code>, puedes especificar los metadatos básicos de tu extensión como nombre y versión, así como aspectos funcionales de tu extensión (tales como scripts en segundo plano, scripts de contenido y acciones del navegador).</p>

<p>Es un archivo con formato <a href="/en-US/docs/Glossary/JSON">JSON</a>, con una excepción: permite comentarios con "<code>//</code>".</p>


<h2 id="Lista_de_claves_de_manifest.json">Lista de claves de <code>manifest.json</code></h2>

<p>Las claves de manifest.json son:</p>

<div class="index">{{ListSubpages("/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json")}}</div>


<h3 class="index" id="Notas_acerca_de_las_claves_de_manifest.json">Notas acerca de las claves de manifest.json</h3>

<ul>
 <li><code>"manifest_version"</code>, <code>"version"</code>, and <code>"name"</code> son las únicas llaves obligatorias.</li>
 <li><code>"default_locale"</code> Debe estar presente <strong>solo</strong> si la carpeta "<code>_locales</code>" existe.</li>
 <li><code>"browser_specific_settings"</code> no tiene soporte en Google Chrome.</li>
</ul>

<h3 id="Acceder_a_las_claves_de_manifest.json_en_tiempo_de_ejecución">Acceder a las claves de  manifest.json en tiempo de ejecución</h3>

<p>Puedes acceder a el manifest desde el código JavaScript de tu extensión utilizando la función {{WebExtAPIRef("runtime.getManifest()")}}:</p>

<pre class="brush: js; no-line-numbers notranslate">browser.runtime.getManifest().version;</pre>


<h2 id="Compatibilidad_de_Navegadores">Compatibilidad de Navegadores</h2>

<p>Para un resumen extendido de las llaves y sub-llaves ver la <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json"> tabla completa de compatibilidad de <code>manifest.json</code> en navegadores</a>.</p>



<p>{{Compat("webextensions.manifest")}}</p>

<h2 id="Ver_También">Ver También</h2>

<p>API JavaScript de {{WebExtAPIRef("permissions")}}</p>
