---
title: 'CSP: font-src'
slug: Web/HTTP/Headers/Content-Security-Policy/font-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Sécurité
  - font
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/font-src
---
<div>{{HTTPSidebar}}</div>

<p>La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>font</strong></code><strong><code>-src</code></strong> spécifie les sources valides pour les polices chargés avec {{cssxref("@font-face")}}.</p>

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

<pre class="syntaxbox">Content-Security-Policy: font-src &lt;source&gt;;
Content-Security-Policy: font-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources">Sources</h3>

<p>{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Cas_de_violation">Cas de violation</h3>

<p>Soit cet en-tête CSP :</p>

<pre class="brush: bash">Content-Security-Policy: font-src https://example.com/</pre>

<p>Cette définition de police sera bloquée et ne se chargera pas :</p>

<pre class="brush: html">&lt;style&gt;
  @font-face {
    font-family: "MyFont";
    src: url("https://not-example.com/font");
  }
  body {
    font-family: "MyFont";
  }
&lt;/style&gt;</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{specName("CSP 3.0", "#directive-font-src", "font-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>Inchangé.</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-font-src", "font-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.font-src")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{cssxref("@font-face")}}</li>
</ul>
