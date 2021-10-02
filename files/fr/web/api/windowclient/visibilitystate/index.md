---
title: WindowClient.visibilityState
slug: Web/API/WindowClient/visibilityState
translation_of: Web/API/WindowClient/visibilityState
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>La propriété <strong><code>visibilityState</code></strong>,  en lecture seule de l'interface {{domxref("WindowClient")}} indique la visibilité du client courant. La valeur pourra être :  <code>hidden</code>, <code>visible</code>, <code>prerender</code>, or <code>unloaded</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">myVisState = WindowClient.visibilityState;</pre>

<h3 id="Value">Value</h3>

<p>une  {{domxref("DOMString")}}.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client) {
        if(visibilityState === 'hidden')
          return client.focus();
        }
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#window-client-interface', 'WindowClient')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WindowClient.visibilityState")}}</p>
