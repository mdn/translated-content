---
title: 'CSP: style-src-attr'
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Style
  - Sécurité
  - source
  - style-src
  - style-src-attr
translation_of: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
---
<div>{{HTTPSidebar}}</div>

<p>La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>style</strong></code><strong><code>-src-attr</code></strong> spécifie les sources valides pour des feuilles de styles appliquées à des éléments individuels du DOM par l'attribut <code>style</code>.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Version de CSP</th>
   <td>3</td>
  </tr>
  <tr>
   <th scope="row">Type de directive</th>
   <td>{{Glossary("Fetch directive")}}</td>
  </tr>
  <tr>
   <th scope="row">{{CSP("default-src")}} par défaut</th>
   <td>
    <p>Oui, si cette directive est absente, l'agent utilisateur consultera la directive {{CSP("style-src")}}, qui a pour valeur par défaut celle de la directive <code>default-src</code></p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une ou plusieurs sources peuvent être autorisées pour cette directive :</p>

<pre class="syntaxbox">Content-Security-Policy: style-src-attr &lt;source&gt;;
Content-Security-Policy: style-src-attr &lt;source&gt; &lt;source&gt;;
</pre>

<p><code>style-src-attr</code> peut être utilisée conjointement à {{CSP("style-src")}} :</p>

<pre>Content-Security-Policy: <code>style</code>-src &lt;source&gt;;
Content-Security-Policy: <code>style</code>-src-attr &lt;source&gt;;</pre>

<h3 id="Sources">Sources</h3>

<p>{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<dl>
 <dt>'report-sample'</dt>
 <dd>Requiert qu'un échantillon du code violant la directive soit inclus dans le rapport envoyé.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{specName("CSP 3.0", "#directive-style-src-attr", "style-src-attr")}}</td>
   <td>{{Spec2("CSP 3.0")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.style-src-attr")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{CSP("style-src")}}</li>
 <li>{{CSP("style-src-elem")}}</li>
 <li>{{HTTPHeader("Link")}} header</li>
 <li>{{HTMLElement("style")}}, {{HTMLElement("link")}}</li>
 <li>{{cssxref("@import")}}</li>
 <li>{{domxref("CSSStyleSheet.insertRule()")}}</li>
 <li>{{domxref("CSSGroupingRule.insertRule()")}}</li>
 <li>{{domxref("CSSStyleDeclaration.cssText")}}</li>
</ul>
