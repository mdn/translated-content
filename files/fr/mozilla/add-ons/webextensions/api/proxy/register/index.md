---
title: proxy.register()
slug: Mozilla/Add-ons/WebExtensions/API/proxy/register
tags:
  - API
  - Add-ons
  - Function
  - Méthode
  - Proxy
  - Reference
  - WebExtensions
  - register
  - registerProxyScript
translation_of: Mozilla/Add-ons/WebExtensions/API/proxy/register
---
<p>{{AddonSidebar()}} {{deprecated_header}}</p>

<p>Cette méthode était obsolète dans Firefox 68 et sera supprimée de Firefox 71. Dans Firefox 68 ou une version ultérieure, l'appel de cette méthode enregistre un message d'erreur sur la console :</p>

<p><img alt="" src="proxy_register_warning.png"></p>

<p>Enregistre un <a href="/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_%28PAC%29_file">fichier PAC (Proxy Auto-Configuration)</a>. Le fichier est exécuté immédiatement, et sa fonction <code>FindProxyForURL()</code> sera appelée pour toutes les demandes HTTP, HTTPS ou FTP.</p>

<p>Si les fichiers PAC sont enregistrés par plusieurs extensions, les demandes seront initialement transmises à celle qui a été enregistrée en premier.</p>

<ul>
 <li>Si la fonction <code>FindProxyForURL()</code> dans le premier PAC renvoie "DIRECT" pour une demande, alors la demande sera transmise inchangée à la fonction  <code>FindProxyForURL()</code> dans le prochain PAC.</li>
 <li>Si la fonction <code>FindProxyForURL()</code> dans le premier PAC transfère la requête en renvoyant "PROXY" ou une autre valeur proxy, l'URL du proxy sera transmise à la fonction <code>FindProxyForURL()</code> dans le prochain PAC.</li>
</ul>

<p>Chaque extension ne peut enregistrer qu'un seul fichier PAC : si vous appelez  <code>register()</code> deux fois, le second fichier PACremplacera le premier.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Communiquez_avec_les_fichiers_PAC">Communiquez avec les fichiers PAC</h2>

<p>Vous pouvez échanger des messages entre le fichier PAC et la page d'arrière-plan de votre extension (ou toute autre page privilégiée, comme les pages contextuelles) en utilisant <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage">runtime.sendMessage()</a></code> et <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage">runtime.onMessage</a></code>.</p>

<p>Pour envoyer un message au fichier PAC, vous devez définir l'option <code>toProxyScript</code> :</p>

<pre class="brush: js">// background.js

// Log any messages from the proxy.
browser.runtime.onMessage.addListener((message, sender) =&gt; {
  if (sender.url === browser.extension.getURL(proxyScriptURL)) {
    console.log(message);
  }
});

let messageToProxy = {
  enabled: true,
  foo: "A string",
  bar: 1234
};

browser.runtime.sendMessage(messageToProxy, {toProxyScript: true});</pre>

<pre class="brush: js">// pac.js

browser.runtime.onMessage.addListener((message) =&gt; {
  if (message.enabled) {
    browser.runtime.sendMessage("I'm enabled!");
  }
});</pre>

<h2 id="Spécification_de_fichier_PAC">Spécification de fichier PAC</h2>

<p>La syntaxe de base du fichier PAC est décrite dans la <a href="/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file">documentation PAC</a>, mais l'implémentation utilisée par l'API proxy diffère de la conception PAC standard de différentes manières, décrites dans cette section.</p>

<h3 id="Valeur_retournée_FindProxyForURL">Valeur retournée FindProxyForURL()</h3>

<p>La norme <code>FindProxyForURL()</code> <a href="/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_%28PAC%29_file#Return_value_format">renvoie une chaîne</a>. Dans Firefox 55 et 56, le fichier PAC utilisé avec l'API proxy renvoie également une chaîne. Dans Firefox 55 <em>seulement</em>, vous devez passer un argument à la valeur de retour "DIRECT", même s'il n'a pas besoin d'argument.</p>

<p>À partir de Firefox 57, <code>FindProxyForURL()</code> peut toujours renvoyer une chaîne, mais peut également (et de préférence) renvoyer un tableau d'objets  {{WebExtAPIRef("proxy.ProxyInfo")}}.</p>

<p>Si le tableau contient plus d'un objet, alors tous les objets <code>ProxyInfo</code> après le premier représentent les basculements : si le proxy à la position N dans le tableau n'est pas accessible quand son <code>ProxyInfo.failoverTimeout</code> expire, alors le navigateur essaiera le proxy à la position N + 1.</p>

<p>Par exemple :</p>

<pre class="brush: js">const proxySpecification = [
  {
    type: "socks",
    host: "foo.com",
    port: 1080,
    proxyDNS: true,
    failoverTimeout: 5
  },
  {
    type: "socks",
    host: "bar.com",
    port: 1060,
  }
];</pre>

<p>Le premier proxy dans le tableau sera essayé en premier. S'il ne répond pas dans <code>failoverTimeout</code> secondes, le prochain sera essayé, jusqu'à ce que la fin du tableau est atteint.</p>

<h3 id="Environnement_du_fichier_PAC">Environnement du fichier PAC</h3>

<p>Les fonctions globales d'assistance généralement disponibles pour les fichiers PAC  (<code><a href="/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file#isPlainHostName()_2">isPlainHostName()</a></code>, <code><a href="/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file#dnsDomainIs()">dnsDomainIs()</a></code>, etc) ne sont pas disponibles.</p>

<p>Le code qui s'exécute dans le fichier PAC n'a pas accès à :</p>

<ul>
 <li>outes les fonctions DOM (par exemple, <a href="/fr/docs/Web/API/Window">window</a> ou l'une de ses propriétés)</li>
 <li>les API WebExtension sauf <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage">runtime.sendMessage()</a></code> et <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage">runtime.onMessage</a></code></li>
 <li>l' <a href="/fr/docs/Web/API/Console">API console</a> - pour consigner les messages d'un PAC, envoyez un message au script d'arrière-plan :</li>
</ul>

<pre class="brush: js">//  pac.js

// send the log message to the background script
browser.runtime.sendMessage(`Proxy-blocker: blocked ${url}`);</pre>

<pre class="brush: js">// background-script.js

function handleMessage(message, sender) {
  // only handle messages from the proxy script
  if (sender.url != browser.extension.getURL(proxyScriptURL)) {
    return;
  }
  console.log(message);
}

browser.runtime.onMessage.addListener(handleMessage);</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var registering = browser.proxy.register(
  url   // string
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>url</code></dt>
 <dd><code>String</code>. URL pointant vers le fichier PAC à charger. Les fichiers PAC doivent être groupés avec l'extension, et l'<code>url</code> doit être relative au fichier <a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a> de l'extension.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie sans argument lorsque le fichier PAC a été enregistré ou rejetée en cas d'erreur.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">const proxyScriptURL = "proxy/proxy-script.js";

browser.proxy.register(proxyScriptURL);</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.proxy.register")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
