---
title: 'CSP: script-src'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Script
  - Security
  - Sécurité
  - script-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src
---
<div>{{HTTPSidebar}}</div>

<p>La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>script-src</strong></code> spécifie les sources valides pour du code JavaScript. Cela inclut non seulement les URL chargées directement par les éléments {{HTMLElement("script")}}, mais aussi les scripts embarqués, les attributs de gestion d'évènements (<code>onclick</code>) et <a href="/en-US/docs/Web/XSLT">les feuilles de style XSLT</a> pouvant déclencher l'exécution de scripts.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Version de CSP</th>
   <td>1</td>
  </tr>
  <tr>
   <th scope="row">Type de directive</th>
   <td>{{Glossary("Fetch directive")}}</td>
  </tr>
  <tr>
   <th scope="row">{{CSP("default-src")}} par défaut</th>
   <td>Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une ou plusieurs sources peuvent être autorisées pour cette directive :</p>

<pre class="syntaxbox">Content-Security-Policy: script-src &lt;source&gt;;
Content-Security-Policy: script-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources">Sources</h3>

<p>{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Cas_de_violation">Cas de violation</h3>

<p>Soit cet en-tête CSP :</p>

<pre class="brush: bash">Content-Security-Policy: script-src https://example.com/</pre>

<p>Ces scripts seront bloqués et ne seront pas chargés ou exécutés :</p>

<pre class="brush: html">&lt;script src="https://not-example.com/js/library.js"&gt;&lt;/script&gt;</pre>

<p>Notez que les gestionnaires d'évènements par attributs sont aussi bloqués :</p>

<pre class="brush: html">&lt;button id="btn" onclick="doSomething()"&gt;</pre>

<p>Vous devez les remplacer par des appels à la méthode {{domxref("EventTarget.addEventListener", "addEventListener")}} :</p>

<pre class="brush: js">document.getElementById("btn").addEventListener('click', doSomething);</pre>

<h3 id="Scripts_embarqués_non_fiables">Scripts embarqués non fiables</h3>

<div class="note">
<p><strong>Note :</strong> Bloquer les styles et scripts embarqués est l'une des stratégies de sécurité majeures que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.</p>
</div>

<p>Vous pouvez autoriser les scripts embarqués et les gestionnaires d'évènements par attributs en spécifiant la valeur <code>'unsafe-inline'</code>, des nonces ou des hashs correspondant au script.</p>

<pre class="brush: bash">Content-Security-Policy: script-src 'unsafe-inline';
</pre>

<p>Cette directive CSP autorisera tous les scripts {{HTMLElement("script")}} embarqués :</p>

<pre class="brush: html">&lt;script&gt;
  var inline = 1;
&lt;/script&gt;</pre>

<p>Vous pouvez aussi utiliser un nonce pour autoriser spécifiquement certains éléments {{HTMLElement("script")}} embarqués :</p>

<pre class="brush: bash">Content-Security-Policy: script-src 'nonce-2726c7f26c'</pre>

<p>Vous devrez alors définir ce nonce sur l'élément {{HTMLElement("script")}} :</p>

<pre class="brush: html">&lt;script nonce="2726c7f26c"&gt;
  var inline = 1;
&lt;/script&gt;</pre>

<p>Autrement, vous pouvez créer des hashs à partir de vos scripts. CSP accepte les algorithmes sha256, sha384 et sha512.</p>

<pre class="brush: bash">Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='</pre>

<p>Lors de la génération du hash, vous ne devez pas inclure les balises et tenir compte de la casse et des caractères blancs (espaces, retours à la ligne, etc.).</p>

<pre class="brush: html">&lt;script&gt;var inline = 1;&lt;/script&gt;</pre>

<h3 id="Expressions_dévaluation_non_fiables">Expressions d'évaluation non fiables</h3>

<p>La valeur <code>'unsafe-eval'</code> contrôle différents méthodes qui créent du code JavaScript à partir de chaines de caractères. Si <code>'unsafe-eval'</code> n'est pas spécifiée avec la directive <code>script-src</code>, ces méthodes seront bloquées et n'auront aucun effet :</p>

<ul>
 <li>{{jsxref("eval", "eval()")}}</li>
 <li>{{jsxref("Function", "Function()")}}</li>
 <li>En passant une chaine à des méthodes tel que : <code>window.setTimeout("alert(\"Hello World!\");", 500);</code>
  <ul>
   <li>{{domxref("window.setTimeout")}}</li>
   <li>{{domxref("window.setInterval")}}</li>
   <li>{{domxref("window.setImmediate")}}</li>
  </ul>
 </li>
 <li>{{domxref("window.execScript")}} {{non-standard_inline}} (IE10 et versions précédentes)</li>
</ul>

<h3 id="strict-dynamic">strict-dynamic</h3>

<p>La valeur <code>'strict-dynamic'</code> spécifie que la confiance explicitement donnée à un script de la page, par le biais d'un nonce ou d'un hash, doit être propagée à tous les scripts chargés par celui-ci. En conséquence, toute liste de permissions ou expressions de sources telles que <code>'self'</code> ou <code>'unsafe-inline'</code> sont ignorées. Par exemple, une règle telle que <code>script-src 'strict-dynamic' 'nonce-R4nd0m' https://whitelisted.com/</code> autoriserait le chargement de scripts comme <code>&lt;script nonce="R4nd0m" src="https://example.com/loader.js"&gt;</code> et s'appliquerait ensuite à tous les scripts chargés par <code>loader.js</code>, mais interdirait les scripts chargés depuis <code>https://whitelisted.com/</code> à moins qu'ils soient accompagnés d'un nonce ou chargés depuis un script dont la source est de confiance.</p>

<pre class="brush: bash">script-src 'strict-dynamic' 'nonce-<em>someNonce</em>'</pre>

<p><em>Ou</em></p>

<pre class="brush: bash">script-src 'strict-dynamic' 'sha256-<em>base64EncodedHash</em>'</pre>

<p>Il est possible de déployer <code>strict-dynamic</code> de manière rétrocompatible, sans chercher à connaitre l'agent utilisateur. Cette directive :</p>

<pre class="brush: bash">script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'</pre>

<p>fonctionnera comme <code>'unsafe-inline' https:</code> pour les navigateurs supportant CSP1, <code>https: 'nonce-abcdefg'</code> pour ceux supportant CSP2 et comme <code>'nonce-abcdefg' 'strict-dynamic'</code> pour ceux supportant CSP3.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{specName("CSP 3.0", "#directive-script-src", "script-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>Inchangé.</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-script-src", "script-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("http.headers.csp.Content-Security-Policy.script-src")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTMLElement("script")}}</li>
 <li>{{CSP("script-src-elem")}}</li>
 <li>{{CSP("script-src-attr")}}</li>
</ul>
