---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - filterResponseData
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
---
<div>{{AddonSidebar()}}</div>

<p>Utilisez cette fonction pour créer un objet {{WebExtAPIRef("webRequest.StreamFilter")}} pour une requête particulière.<br>
 Vous pouvez ensuite utiliser le filtre de flux pour surveiller et modifier la réponse. Vous appelez typiquement cette fonction à partir d'un écouteur d'événements <code>webRequest</code>.</p>

<p>Pour utiliser cette API, vous devez avoir la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">permission de l'API</a> "webRequestBlocking", ainsi que les permissions normales nécessaires à l'auditeur de l'événement (la permission "webRequest" et la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">permission hôte </a>pour l'hôte).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var filter = browser.webRequest.filterResponseData(
  requestId       // string
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>requestId</code></dt>
 <dd><code>string</code>. ID de la requête à filtrer. Vous pouvez l'obtenir à partir de l'objet de <code>details</code> qui est passé dans n'importe quel écouteur d'événement <code>webRequest</code>.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Un objet {{WebExtAPIRef("webRequest.StreamFilter")}} que vous pouvez utiliser pour surveiller et modifier la réponse.</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple, tiré de l'extension <a href="https://github.com/mdn/webextensions-examples/tree/master/http-response">http-response</a>, crée un filtre dans  {{WebExtAPIRef("webRequest.onBeforeRequest")}} et l'utilise pour modifier la réponse :</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = event =&gt; {
    let str = decoder.decode(event.data, {stream: true});
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension Example');
    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.webRequest.filterResponseData", 10)}}</p>
