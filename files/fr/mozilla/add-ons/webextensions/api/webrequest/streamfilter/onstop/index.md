---
title: webRequest.StreamFilter.onstop
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstop
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.onstop
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstop
---
<div>{{AddonSidebar()}}</div>

<div>
<p>Un gestionnaire d'événements qui sera appelé lorsque le flux n'a plus de données à livrer. IDans le gestionnaire d'événements, vous pouvez toujours appeler des fonctions de filtrage telles que {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}, ou {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}.</p>
</div>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.webRequest.StreamFilter.onstop", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple ajoutera des "extra stuff" à la réponse  :</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let encoder = new TextEncoder();

  filter.ondata = event =&gt; {
    // pass through all the response data
    filter.write(event.data);
  }

  filter.onstop = event =&gt; {
    filter.write(encoder.encode("extra stuff"));
    filter.disconnect();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>{{WebExtExamples}}</p>
