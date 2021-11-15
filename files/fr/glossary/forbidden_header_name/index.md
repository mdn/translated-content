---
title: Nom d'en-tête interdit
slug: Glossary/Forbidden_header_name
tags:
  - En-têtes
  - Fetch
  - Glossaire
  - HTTP
  - Interdit
translation_of: Glossary/Forbidden_header_name
original_slug: Glossaire/Forbidden_header_name
---
<p><dfn>Un nom d'en-tête interdit est un </dfn>nom d'<a href="/fr/docs/HTTP/Headers">en-tête HTTP</a> qui ne peut être modifié par programmation, spécifiquement, un nom d'en-tête de <strong>requête</strong> HTTP (contraste avec {{Glossary("Forbidden response header name","Nom d'en-tête de réponse interdit")}}).</p>

<p>Les modifications de ces en-têtes sont interdites pour que l'agent utilisateur garde un total contrôle sur eux. Les noms commençant par `<code>Sec-</code>` sont réservés à la création de nouveaux en-têtes à l'abri des {{glossary("API","API")}} utilisant <a href="/fr/docs/Web/API/Fetch_API">Fetch</a> qui accordent aux développeurs le contrôle des en-têtes, tels que {{domxref("XMLHttpRequest")}}.</p>

<p>Les noms d'en-tête interdits commencent avec <code>Proxy-</code> ou <code>Sec-</code>, ou se composent de l'un d'eux :</p>

<ul>
 <li><code>Accept-Charset</code></li>
 <li><code>Accept-Encoding</code></li>
 <li><code>Access-Control-Request-Headers</code></li>
 <li><code>Access-Control-Request-Method</code></li>
 <li><code>Connection</code></li>
 <li><code>Content-Length</code></li>
 <li><code>Cookie</code></li>
 <li><code>Cookie2</code></li>
 <li><code>Date</code></li>
 <li><code>DNT</code></li>
 <li><code>Expect</code></li>
 <li><code>Host</code></li>
 <li><code>Keep-Alive</code></li>
 <li><code>Origin</code></li>
 <li><code>Proxy-</code></li>
 <li><code>Sec-</code></li>
 <li><code>Referer</code></li>
 <li><code>TE</code></li>
 <li><code>Trailer</code></li>
 <li><code>Transfer-Encoding</code></li>
 <li><code>Upgrade</code></li>
 <li><code>Via</code></li>
</ul>

<div class="note">
<p><strong>Note :</strong> L'en-tête <code>User-Agent</code> n'est plus interdit, <a href="https://fetch.spec.whatwg.org/#terminology-headers">conformément à la spécification</a> — voir la liste des noms d'en-tête interdit (implémentée dans Firefox 43), et peut donc maintenant être défini dans un objet <a href="/fr/docs/Web/API/Headers">en-tête</a> Fetch, via XHR <a href="/fr/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29">setRequestHeader()</a>, etc.</p>
</div>
