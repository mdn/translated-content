---
title: webRequest.StreamFilter.resume()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.resume()
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
---
<div>{{AddonSidebar()}}</div>

<p>Reprend une requête qui a été précédemment suspendue par un appel à {{WebExtAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}}.</p>

<p>Vous ne pouvez pas appeler cette fonction avant que l'événement  {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ne soit déclenché.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">filter.suspend()
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>None.</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>None.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.webRequest.StreamFilter.suspend", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple utilise la <em>suspend/resume</em> pour retarder une requête web</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event =&gt; {
    filter.suspend();

    setTimeout(() =&gt; {
      filter.resume();
      filter.disconnect();
    }, 1000);

  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>{{WebExtExamples}}</p>
