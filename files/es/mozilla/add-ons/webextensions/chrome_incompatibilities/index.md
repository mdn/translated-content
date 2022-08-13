---
title: Incompatibilidades con Chrome
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
---
<p><span style="background-color: #ffffff; color: #333333; display: inline !important; float: none; font-family: arial,x-locale-body,sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-decoration-style: initial; text-indent: 0px; text-transform: none; white-space: normal;">WebExtensions está diseñado para ser compatible con las extensiones de Chrome y Opera: en la medida de lo posible, las extensiones escritas para esos navegadores deberían ejecutarse en Firefox con cambios mínimos.</span></p>

<p style="margin: 0px 0px 24px; padding: 0px; border: 0px; color: rgb(51, 51, 51); font-family: arial, x-locale-body, sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-style: initial;"><font><font>Sin embargo, Firefox cuenta actualmente con soporte para sólo un conjunto limitado de funciones y API compatibles con Chrome y Opera.<span> </span></font><font>Estamos trabajando en agregar más soporte, pero muchas características aún no son compatibles, y es posible que nunca admitamos algunas.</font></font></p>

<p style="margin: 0px 0px 24px; padding: 0px; border: 0px; color: rgb(51, 51, 51); font-family: arial, x-locale-body, sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-style: initial;"><font><font>En este artículo se enumeran todas las características y API que se admiten total o parcialmente en Firefox.<span> </span></font><font>Cuando una característica está parcialmente soportada, hemos indicado cuáles son las lagunas.</font></font></p>

<p style="margin: 0px 0px 24px; padding: 0px; border: 0px; color: rgb(51, 51, 51); font-family: arial, x-locale-body, sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-style: initial;"><font><font>Es seguro asumir que las funciones y las API que no se enumeran aquí en absoluto aún no son compatibles.</font></font></p>

<h2 id="Funciones_de_manifest.json">Funciones de manifest.json</h2>

<h3 id="Claves_completamente_compatibles">Claves completamente compatibles</h3>

<ul>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/applications">applications</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/default_locale">default_locale</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/description">description</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/name">name</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/version">version</a></code></li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a></code></li>
</ul>

<h3 id="Claves_parcialmente_admitidas">Claves parcialmente admitidas</h3>

<h4 id="Datos_de_fondo">Datos de fondo</h4>

<p>Firefox no admite la propiedad <code>"persistent"</code>. Los scripts de fondo permanecen cargados todo el tiempo.</p>

<h4 id="Scripts_de_contenido">Scripts de contenido</h4>

<p>Firefox no admite actualmente:</p>

<ul>
 <li><code>include_globs</code></li>
 <li><code>exclude_globs</code></li>
 <li><code>match_about_blank</code></li>
</ul>

<h4 id="Permisos">Permisos</h4>

<p><span style="background-color: #ffffff; color: #333333; display: inline !important; float: none; font-family: arial,x-locale-body,sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-decoration-style: initial; text-indent: 0px; text-transform: none; white-space: normal;">Firefox aún no admite los siguientes permisos</span>:</p>

<ul>
 <li><code>activeTab</code></li>
 <li><code>background</code></li>
 <li><code>clipboardRead</code></li>
 <li><code>clipboardWrite</code></li>
 <li><code>geolocation</code></li>
 <li><code>nativeMessaging</code></li>
 <li><code>unlimitedStorage</code></li>
</ul>

<p><span style="background-color: #ffffff; color: #333333; display: inline !important; float: none; font-family: arial,x-locale-body,sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-decoration-style: initial; text-indent: 0px; text-transform: none; white-space: normal;">Obviamente, también no admite permisos para las</span> <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API#Chrome_incompatibilities">APIs que no son compatibles</a>.</p>

<h2 id="APIs_JavaScript">APIs JavaScript</h2>

<h3 id="APIs_completamente_soportadas">APIs completamente soportadas</h3>

<ul>
 <li><a href="/es/docs/Mozilla/Add-ons/WebExtensions/API/alarms">alarmas</a></li>
 <li><a href="/es/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus">Menú contextual</a></li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">pageAction</a>
  <ul>
   <li><font><font>Las URL relativas pasadas a<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: normal; font-weight: normal; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word; font-size: medium; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; text-decoration-style: initial;'>setPopup()</code><font><font>se resuelven en relación con el documento de la persona que llama, en lugar de con la raíz de la extensión</font></font> .</li>
  </ul>
 </li>
</ul>

<h3 id="APIs_parcialmente_soportadas">APIs parcialmente soportadas</h3>

<h4 id="marcadores">marcadores</h4>

<ul>
 <li>Firefox no admite:
  <ul>
   <li><code>getRecent()</code></li>
   <li><code>search()</code></li>
   <li><code>removeTree()</code> (<code>remove</code> también elimina carpetas no vacías)</li>
   <li><code>onCreated</code></li>
   <li><code>onRemoved</code></li>
   <li><code>onChanged</code></li>
   <li><code>onMoved</code></li>
   <li><code>onChildrenReordered</code></li>
   <li><code>onImportBegan</code></li>
   <li><code>onImportEnded</code></li>
   <li>BookmarkTreeNodeUnmodifiable</li>
  </ul>
 </li>
 <li>Firefox tiene marcadores especiales como "Marcado recientemente" o "Visitado recientemente"</li>
</ul>

<h4 id="browserAction">browserAction</h4>

<ul>
 <li>Firefox no admite:
  <ul>
   <li><code>enable()</code> o <code>disable()</code>.</li>
  </ul>
 </li>
 <li><font><font>Las URL relativas pasadas a<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: normal; font-weight: normal; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word; font-size: medium; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; text-decoration-style: initial;'>setPopup()</code><font><font>se resuelven en relación con el documento de la persona que llama, en lugar de con la raíz de la extensión</font></font> .</li>
</ul>

<h4 id="cookies">cookies</h4>

<ul>
 <li style="margin: 0px 0px 6px; padding: 0px; border: 0px;"><font><font>eventos onChanged pueden ser subtely diferentes</font></font></li>
 <li style="margin: 0px 0px 6px; padding: 0px; border: 0px;"><font><font>Creación de cookies de sesión<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: inherit; font-weight: inherit; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word;'>set</code><font><font>podría fallar</font></font></li>
 <li><code class="prettyprint">getAllCookieStores</code> siempre<font><font> devuelve un almacén predeterminado y sin pestañas</font></font></li>
 <li style="margin: 0px 0px 6px; padding: 0px; border: 0px;"><font><font>el acceso a las cookies desde pestañas privadas es imposible</font></font></li>
</ul>

<h4 id="extension">extension</h4>

<ul>
 <li>Firefox  sólo soporta :
  <ul>
   <li><code>getBackgroundPage()</code></li>
   <li><code>getURL()</code></li>
   <li><code>inIncognitoContext</code> en los scripts de contenido</li>
  </ul>
 </li>
</ul>

<h4 id="i18n">i18n</h4>

<ul>
 <li><span style="background-color: #ffffff; color: #333333; display: inline !important; float: none; font-family: arial,x-locale-body,sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: left; text-decoration-style: initial; text-indent: 0px; text-transform: none; white-space: normal;">En la API JavaScript API, Firefox solo soporta</span> <code>getMessage()</code>.</li>
 <li>Firefox solo soporta los mensajes predefinidos <code>@@extension_id</code> y <code>@@ui_locale</code>.</li>
 <li>Firefox no localiza archivos CSS.</li>
 <li>Las cadenas para ser localizadas deben consistir enteramente de  <code>__MSG_foo__</code> con el fin de realizar una sustitución al crearlas.</li>
</ul>

<h4 id="notifications">notifications</h4>

<ul>
 <li><span style="background-color: #ffffff; color: #333333; display: inline !important; float: none; font-family: arial,x-locale-body,sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: left; text-decoration-style: initial; text-indent: 0px; text-transform: none; white-space: normal;">Las únicas opciones de notificación admitidas son</span> :

  <ul>
   <li><code>iconUrl</code></li>
   <li><code>title</code></li>
   <li><code>message</code>.</li>
  </ul>
 </li>
 <li><span style="background-color: #ffffff; color: #333333; display: inline !important; float: none; font-family: arial,x-locale-body,sans-serif; font-size: medium; font-style: normal; font-weight: normal; letter-spacing: normal; text-align: left; text-decoration-style: initial; text-indent: 0px; text-transform: none; white-space: normal;">Los únicos métodos soportados son</span> :
  <ul>
   <li><code>create()</code></li>
   <li><code>clear()</code></li>
   <li><code>getAll()</code>.</li>
  </ul>
 </li>
 <li style="margin: 0px 0px 6px; padding: 0px; border: 0px;"><font><font>El único evento soportado es<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: inherit; font-weight: inherit; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word;'>onClosed</code><font><font>.</font></font></li>
 <li style="margin: 0px 0px 6px; padding: 0px; border: 0px;"><font><font>Firefox no proporciona<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: inherit; font-weight: inherit; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word;'>byUser</code><font><font>datos.</font></font></li>
</ul>

<h4 id="Tiempo_de_ejecución">Tiempo de ejecución</h4>

<ul>
 <li>Firefox sólo admite:
  <ul>
   <li><code>onStartup()</code></li>
   <li><code>getManifest()</code></li>
   <li><code>getURL()</code></li>
   <li><code>id</code></li>
   <li><code>sendMessage()</code></li>
   <li><code>onMessage</code></li>
   <li><code>onConnect</code></li>
  </ul>
 </li>
</ul>

<h4 id="Almacenamiento">Almacenamiento</h4>

<ul>
 <li style="margin: 0px 0px 6px; padding: 0px; border: 0px;"><font><font>El único área de almacenamiento que soporta Firefox es<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: inherit; font-weight: inherit; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word;'>local</code><font><font>.</font></font></li>
 <li style="margin: 0px 0px 6px; padding: 0px; border: 0px;"><font><font>Firefox no soporta<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: inherit; font-weight: inherit; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word;'>getBytesInUse()</code><font><font>o<span> </span></font></font><code style='background-color: rgb(238, 238, 238); color: rgb(51, 51, 51); margin: 0px; padding: 2px 5px; border: 0px; font-style: inherit; font-weight: inherit; border-radius: 2px; font-family: consolas, "Liberation Mono", courier, monospace; word-wrap: break-word;'>clear))</code><font><font>.</font></font></li>
</ul>

<h4 id="tabs">tabs</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>getCurrent()</code></li>
   <li><code>sendRequest()</code></li>
   <li><code>getSelected()</code></li>
   <li><code>duplicate()</code></li>
   <li><code>highlight()</code></li>
   <li><code>move()</code></li>
   <li><code>detectLanguage()</code></li>
   <li><code>captureVisibleTab()</code></li>
   <li><code>getZoom()</code></li>
   <li><code>setZoom()</code></li>
   <li><code>getZoomSettings()</code></li>
   <li><code>setZoomSettings()</code></li>
  </ul>
 </li>
</ul>

<p>Firefox treats <code>highlighted</code> and <code>active</code> as the same since Firefox cannot select multiple tabs.</p>

<p>Firefox doesn't yet support the <code>callback</code> argument to <code>executeScript()</code>.</p>

<h4 id="webNavigation">webNavigation</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>getFrame()</code></li>
   <li><code>getAllFrames()</code></li>
   <li><code>onCreatedNavigationTarget</code></li>
   <li><code>onHistoryStateUpdated</code></li>
   <li>transition types and qualifiers</li>
   <li>Filtering</li>
  </ul>
 </li>
</ul>

<p><code>onReferenceFragmentUpdated</code> also triggers for <code>pushState</code>.</p>

<h4 id="webRequest">webRequest</h4>

<ul>
 <li>Firefox does not support:
  <ul>
   <li><code>handlerBehaviorChanged()</code></li>
   <li><code>onAuthRequired</code></li>
   <li><code>onBeforeRedirect</code></li>
   <li><code>onErrorOccurred</code></li>
  </ul>
 </li>
 <li>Requests can be:
  <ul>
   <li>canceled only in <code>onBeforeRequest</code></li>
   <li>modified/redirected only in <code>onBeforeSendHeaders</code></li>
  </ul>
 </li>
 <li>Responses can be modified only in <code>onHeadersReceived</code>.</li>
 <li>Filtering by <code>windowId</code> and <code>tabId</code> is not supported.</li>
 <li>The <code>"requestBody"</code> instruction in <code>opt_extraInfoSpec</code> is not supported.</li>
 <li>Redirection is not allowed in <code>onBeforeRequest</code> or <code>onHeadersReceived</code>, but is allowed in <code>onBeforeSendHeaders</code>.</li>
 <li><code>requestId</code> is not included in the argument passed to the listener.</li>
</ul>

<h4 id="windows">windows</h4>

<ul>
 <li><code>onFocusChanged</code> will trigger multiple times for a given focus change.</li>
 <li><code>create()</code> does not support the <code>focused</code>, <code>type</code>, or <code>state</code> options.</li>
 <li><code>update()</code> only supports the <code>focused</code> option.</li>
</ul>

<h3 id="Planned_APIs">Planned APIs</h3>

<p>We don't yet support the following APIs, but plan to, soon:</p>

<ul>
 <li><a class="external text" href="https://developer.chrome.com/extensions/commands" rel="nofollow">commands</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/devtools" rel="nofollow">Devtools (mostly panels)</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/downloads" rel="nofollow">downloads</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/history" rel="nofollow">history</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/idle" rel="nofollow">idle</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/omnibox" rel="nofollow">omnibox</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/permissions" rel="nofollow">permissions</a></li>
 <li><a class="external text" href="https://developer.chrome.com/extensions/runtime#method-connectNative" rel="nofollow">Native messaging (runtime.connectNative)</a></li>
</ul>

<h3 id="CSS">CSS</h3>

<h4 id="Localized_String_Interpolation">Localized String Interpolation</h4>

<p>We currently do not support interpolation of localized strings <code>__MSG_</code> tokens in extension CSS files: {{bug(1209184)}}.</p>

<h4 id="Relative_URLs">Relative URLs</h4>

<p>We resolve URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.</p>

<h3 id="Miscellaneous_incompatibilities">Miscellaneous incompatibilities</h3>

<ul>
 <li>Chrome allows any optional arguments to be omitted, even if followed by other arguments. Firefox currently supports this only under specific circumetances. We recommend only omitting optional arguments at the end of the arguments list, and using <code>null</code> for all other cases.</li>
 <li>Firefox currently <a href="https://bugzil.la/932513">does not allow</a> the <code>{{jsxref("Statements/let", "let")}}</code> or <code>{{jsxref("Statements/const", "const")}}</code> statement in ordinary web pages or Web Extensions. While it is possible to enable support for Firefox's variant of the statement using a special <code>&lt;script&gt;</code> tag, this is not recommended. Instead, if your extension code uses <code>let</code> or <code>const</code> statements, we recommend that you <a href="/en-US/Add-ons/WebExtensions/Tips#Using_advanced_JavaScript_features_from_ECMAScript_6_and_7">transpile them using Babel</a> until support is turned on globally.</li>
</ul>
