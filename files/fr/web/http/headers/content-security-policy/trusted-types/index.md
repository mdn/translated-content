---
title: 'CSP: trusted-types'
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Security
  - Sécurité
  - source
  - trusted-types
translation_of: Web/HTTP/Headers/Content-Security-Policy/trusted-types
---
<div>{{HTTPSidebar}}</div>

<p>La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>trusted-types</strong></code> {{experimental_inline}} informe l'agent utilisateur qu'il faut restreindre la création de règles Trusted Types (fonctions qui créent des valeurs typées non falsifiables, dans le but de les passer au puits XSS du DOM au lieu de chaines de caractères).</p>

<p>Conjointement à la directive <a href="/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for"><code>require-trusted-types-for</code></a>, cette directive permet aux auteurs de définir des règles empêchant d'injecter des données dans le DOM et donc de réduire la fenêtre de tir pour les attaques XSS sur le DOM à quelques pans isolés de la base de code d'une application, facilitant donc son contrôle et sa relecture. Cette directive déclare une liste de permissions de noms de règles de Trusted Types créée avec <code>TrustedTypes.createPolicy</code> à partir de l'API Trusted Types.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types &lt;policyName&gt;;
Content-Security-Policy: trusted-types &lt;policyName&gt; &lt;policyName&gt; 'allow-duplicates';
</pre>

<dl>
 <dt>&lt;nomRègle&gt;</dt>
 <dd>Un nom de règle est composé de caractères alphanumériques ou d'un ou plusieurs "<code>-#=_/@.%</code>".  Une astérisque (<code>*</code>) comme nom de règle informe l'agent utilisateur d'autoriser tout nom de règle unique (quoique la valeur <code>'allow-duplicates'</code> pourrait permettre d'être plus laxiste à l'avenir).</dd>
 <dt><code>'none'</code></dt>
 <dd>Interdit la création de toute règle de Trusted Type (identique au fait de ne renseigner aucun nom de règle).</dd>
 <dt><code>'allow-duplicates'</code></dt>
 <dd>Autorise la création de règles dont le nom a déjà été utilisé.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Soit l'en-tête CSP :</p>

<pre>Content-Security-Policy: trusted-types foo bar 'allow-duplicates';</pre>

<p>Ce code génèrera une erreur car une des règles créées a un nom non autorisé :</p>

<pre class="brush: js">if (typeof trustedTypes !== 'undefined') {
  const policyFoo = trustedTypes.createPolicy('foo', {});
  const policyFoo2 = trustedTypes.createPolicy('foo', {});
  const policyBaz = trustedTypes.createPolicy('baz', {}); // Throws and dispatches a SecurityPolicyViolationEvent.
}
</pre>

<h2 id="Prothèse_démulation">Prothèse d'émulation</h2>

<p>Un <a href="https://github.com/w3c/webappsec-trusted-types#polyfill">prothèse d'émulation pour les Trusted Types</a> est disponible sur Github.</p>

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
   <td><a href="https://w3c.github.io/webappsec-trusted-types/dist/spec/">Trusted Types</a></td>
   <td>Draft</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("http.headers.csp.Content-Security-Policy.trusted-types")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li><a href="/en-US/docs/Glossary/Cross-site_scripting">Cross-Site Scripting (XSS)</a></li>
 <li><a href="https://web.dev/trusted-types">Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types</a></li>
 <li>Trusted Types with <a href="https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types">DOMPurify</a> XSS sanitizer</li>
</ul>
