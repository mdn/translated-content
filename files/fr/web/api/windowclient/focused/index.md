---
title: WindowClient.focused
slug: Web/API/WindowClient/focused
translation_of: Web/API/WindowClient/focused
---
<div>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</div>

<p>La propriété <strong><code>focused</code></strong> , en lecture seule de l'interface  {{domxref("WindowClient")}} , est un {{domxref("Boolean")}} qui indique si client actuel a le focus .</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">myFocused = WindowClient.focused;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("Boolean")}}.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client) {
        if(!client.focused)
          return client.focus();
        }
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});</pre>

<h2 id="Specifications">Specifications</h2>

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
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WindowClient.focused")}}</p>
