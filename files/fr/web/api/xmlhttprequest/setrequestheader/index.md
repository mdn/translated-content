---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
translation_of: Web/API/XMLHttpRequest/setRequestHeader
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p>La méthode <code><strong>setRequestHeader()</strong></code> de l'objet {{domxref("XMLHttpRequest")}} permet d'éditer le header d'une requête HTTP. Vous devez appeler la méthode <code>setRequestHeader()</code>, après la méthode {{domxref("XMLHttpRequest.open", "open()")}}, et avant {{domxref("XMLHttpRequest.send", "send()")}}. Si vous faite appel plusieurs fois à <code>setRequestHeader()</code> dans une même requête, tout sera combiné au sein d'un même header.</p>

<p>A chaque fois que vous appellez <code>setRequestHeader()</code>, son contenu est ajouté à la fin du header existant.</p>

<p>Si aucun {{HTTPHeader("Accept")}} n'a été configurer avec cette méthode, un <code>Accept</code> header avec le type <code>"*/*"</code> sera envoyé avec la requête lorsque {{domxref("XMLHttpRequest.send", "send()")}} sera appellée.</p>

<p>Pour des raisons de sécurité, certain header ne peuvent être manipulés que par le user agent. Ceux-ci contiennent les paramètres {{Glossary("Forbidden_header_name", "forbidden header names", 1)}}  et {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.</p>

<div class="note">
<p><strong>Note:</strong> Dans certain cas, vous pourrez rencontrer l'erreur / exception "<strong>not allowed by Access-Control-Allow-Headers in preflight response</strong>" quand vous enverez une requête cross domains. Dans ce cas, vous devrez configurer {{HTTPHeader("Access-Control-Allow-Headers")}} dans votre réponse HTTP coté serveur.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>XMLHttpRequest</em>.setRequestHeader(<var>header</var>, <var>value</var>)
</pre>

<h3 id="Paramètre">Paramètre</h3>

<dl>
 <dt><code>header</code></dt>
 <dd>Le paramètre du header.</dd>
 <dt><code>value</code></dt>
 <dd>La valeur de ce paramètre.</dd>
</dl>

<h3 id="Valeurs_de_retour">Valeurs de retour</h3>

<p><code>undefined</code>.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('XMLHttpRequest', '#the-setRequestHeader()-method', 'setRequestHeader()')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilitée_avec_les_navigateurs">Compatibilitée avec les navigateurs</h2>

<p>{{Compat("api.XMLHttpRequest.setRequestHeader")}}</p>

<h2 id="A_voir_aussi">A voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Using XMLHttpRequest</a></li>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">HTML in XMLHttpRequest</a></li>
</ul>
