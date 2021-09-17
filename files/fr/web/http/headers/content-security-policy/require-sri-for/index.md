---
title: 'CSP: require-sri-for'
slug: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Subresource Integrity
  - Sécurité
  - require-sri-for
translation_of: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
---
<div>{{Obsolete_header}}</div>

<p>La directive HTTP {{HTTPHeader("Content-Security-Policy")}} <code><strong>require-sri-for</strong></code> informe l'agent utilisateur de requérir la vérification <a href="/en-US/docs/Web/Security/Subresource_Integrity">d'intégrité des sous-ressources</a> pour les scripts et styles de la page.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Content-Security-Policy: require-sri-for script;
Content-Security-Policy: require-sri-for style;
Content-Security-Policy: require-sri-for script style;
</pre>

<dl>
 <dt><code>script</code></dt>
 <dd>Requiert {{Glossary("SRI")}} pour les scripts.</dd>
 <dt><code>style</code></dt>
 <dd>Requiert {{Glossary("SRI")}} pour les feuilles de styles.</dd>
 <dt><code>script style</code></dt>
 <dd>Requiert {{Glossary("SRI")}} pour les deux, scripts et feuilles de styles.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Soit cet en-tête CSP :</p>

<pre>Content-Security-Policy: require-sri-for script style</pre>

<p>Cet élément {{HTMLElement("script")}} sera chargé et exécuté puisqu'il utilise un attribut <code>integrity</code> valide.</p>

<pre class="brush: html; example-good">&lt;script src="https://code.jquery.com/jquery-3.1.1.slim.js"
        integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
        crossorigin="anonymous"&gt;&lt;/script&gt;</pre>

<p>Toutefois, ce script sera bloqué car il n'utilise pas cet attribut :</p>

<pre class="brush: html; example-bad">&lt;script src="https://code.jquery.com/jquery-3.1.1.slim.js"&gt;&lt;/script&gt;</pre>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.require-sri-for")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li><a href="/en-US/docs/Web/Security/Subresource_Integrity">Subresource Integrity</a></li>
</ul>
