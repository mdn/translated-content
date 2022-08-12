---
title: API
slug: Mozilla/Add-ons/WebExtensions/API
tags:
  - Extenciones Web
translation_of: Mozilla/Add-ons/WebExtensions/API
---
<p>Las API de JavaScript para las Extensiones Web se pueden usar dentro de los <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts">scripts en segundo plano</a> de la extensión y en cualquier otro documento contenido en la extensión, incluyendo las ventanas emergentes de <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Page_actions">acción de página</a> o <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_action">acción del navegador</a>, <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Sidebars">barras laterales</a>, <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Options_pages">páginas de opciones</a> o <a href="/en-US/Add-ons/WebExtensions/manifest.json/chrome_url_overrides">páginas de pestañas nuevas</a>. A algunas de estas API también se puede acceder mediante los <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts">scripts de contenido</a> de una extensión ( consulte la <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs">lista en la guía de script de contenido</a>).</p>

<p>Para usar API más poderosas debes <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions">solicitar permiso</a> en manifest.json en tu extensión.</p>

<p>Puedes acceder a las API utilizando el namespace <code>browser</code>:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">logTabs</span><span class="punctuation token">(</span>tabs<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>tabs<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

browser<span class="punctuation token">.</span>tabs<span class="punctuation token">.</span><span class="function token">query</span><span class="punctuation token">(</span><span class="punctuation token">{</span>currentWindow<span class="punctuation token">:</span> <span class="keyword token">true</span><span class="punctuation token">}</span><span class="punctuation token">,</span> logTabs<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<div>
<p>Muchas de las APIs son asíncronas, devolviendo un <code>Promise</code>:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">logCookie</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">logError</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">error</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">var</span> setCookie <span class="operator token">=</span> browser<span class="punctuation token">.</span>cookies<span class="punctuation token">.</span><span class="keyword token">set</span><span class="punctuation token">(</span>
  <span class="punctuation token">{</span>url<span class="punctuation token">:</span> <span class="string token">"https://developer.mozilla.org/"</span><span class="punctuation token">}</span>
<span class="punctuation token">)</span><span class="punctuation token">;</span>
setCookie<span class="punctuation token">.</span><span class="function token">then</span><span class="punctuation token">(</span>logCookie<span class="punctuation token">,</span> logError<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>
</div>

<div>
<p>Tenga en cuenta que esto es diferente del sistema de extensiones de Google Chrome, que utiliza el nombre <code>chrome</code> en lugar de <code>browser</code>, y que utiliza <code>callbacks</code> en lugar de <code>promise</code> para funciones asíncronas. Como ayuda para portar, la implementación de Firefox de la API WebExtensions admite <code>chrome</code> y <code>callbacks</code>, así como <code>browser</code> y <code>promise</code>. Mozilla también ha escrito un <em>polyfill</em> que habilita el código que usa  <code>browser</code> y <code>promise</code> para trabajar sin cambios en Chrome.: <a class="external external-icon" href="https://github.com/mozilla/webextension-polyfill">https://github.com/mozilla/webextension-polyfill</a>.</p>

<p>Firefox también implementa estas APIs bajo el nombre <code>chrome</code> usando <code>callbacks</code>. Esto permite que el código escrito para Chrome se ejecute sin cambios en Firefox para las APIs documentadas aquí.</p>

<p>Microsoft Edge usa el namespace <code>browser</code>, pero aún no admite APIs asíncronas basadas en <code>promise</code>. En Edge, por el momento, las APIs asíncronas deben utilizar <code>callbacks</code>.</p>

<p>No todos los navegadores son compatibles con todas las APIs: para obtener más información, consulte <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Soporte del navegador para las API de JavaScript</a>.</p>

<h2 id="Listado_de_API_de_JavaScript">Listado de API de JavaScript</h2>

<p>Vea a continuación una lista completa de las API de JavaScript:</p>

<p>Esta página lista todas las APIs JavaScript de WebExtension que actualmente son soportadas.</p>
</div>

<div>{{SubpagesWithSummaries}}</div>

<h2 id="Incompatibilidades_con_Chrome">Incompatibilidades con Chrome</h2>

<p>Nosotros no soportamos ninguna API que no es listada arriba.</p>

<p>Incluso, para las APIs que están listadas arriba, no siempre soportamos todas las propiedades que Chrome soporta. Por favor, chequea la página de la API para cualquier incompatibilidad con Chrome.</p>
