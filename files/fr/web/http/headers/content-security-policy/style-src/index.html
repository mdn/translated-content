---
title: 'CSP: style-src'
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
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
translation_of: Web/HTTP/Headers/Content-Security-Policy/style-src
---
<div>{{HTTPSidebar}}</div>

<p>La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <strong><code>style-src</code></strong> spécifie les sources valides pour des feuilles de style.</p>

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
   <th scope="row">{{CSP("default-src")}} fallback</th>
   <td>Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une ou plusieurs sources peuvent être autorisées pour cette directive :</p>

<pre class="syntaxbox">Content-Security-Policy: style-src &lt;source&gt;;
Content-Security-Policy: style-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources">Sources</h3>

<p>{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Cas_de_violation">Cas de violation</h3>

<p>Soit cet en-tête CSP :</p>

<pre class="brush: bash">Content-Security-Policy: style-src https://example.com/</pre>

<p>Ces feuilles de style seront bloquées et ne se chargeront pas :</p>

<pre class="brush: html">&lt;link href="https://not-example.com/styles/main.css" rel="stylesheet" type="text/css" /&gt;

&lt;style&gt;
#inline-style { background: red; }
&lt;/style&gt;

&lt;style&gt;
  @import url("https://not-example.com/styles/print.css") print;
&lt;/style&gt;</pre>

<p>De même que les styles chargés avec l'en-tête {{HTTPHeader("Link")}} :</p>

<pre class="brush: bash">Link: &lt;https://not-example.com/styles/stylesheet.css&gt;;rel=stylesheet
</pre>

<p>Les attributes de style seront aussi bloqués :</p>

<pre class="brush: html">&lt;div style="display:none"&gt;Foo&lt;/div&gt;</pre>

<p>De même que les styles ajoutés par JavaScript en définissant l'attribut <code>style</code> directement, ou en définissant la propriété {{domxref("CSSStyleDeclaration.cssText", "cssText")}} :</p>

<pre class="brush: js">document.querySelector('div').setAttribute('style', 'display:none;');
document.querySelector('div').style.cssText = 'display:none;';</pre>

<p>Toutefois, les propriétés de styles qui sont définies directement dans l'attribut {{domxref("HTMLElement.style", "style")}} ne seront pas bloquées, permettant aux utilisateurs de manipuler sainement les styles avec JavaScript :</p>

<pre class="brush: js">document.querySelector('div').style.display = 'none';</pre>

<p>Ce genre de manipulations peut être bloqué en désactivant JavaScript au moyen de la directive CSP {{CSP("script-src")}}.</p>

<h3 id="Styles_embarqués_non_fiables">Styles embarqués non fiables</h3>

<div class="note">
<p><strong>Note :</strong> Bloquer les styles et scripts embarqués est l'une des stratégies de sécurité majeures que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.</p>
</div>

<p>Vous pouvez autoriser les styles embarqués en spécifiant la valeur <code>'unsafe-inline'</code>, des nonces ou des hashs correspondant à la feuille de style.</p>

<pre class="brush: bash">Content-Security-Policy: style-src 'unsafe-inline';
</pre>

<p>Cette directive CSP autorisera toutes les feuilles de styles embarquées telles que l'élément {{HTMLElement("style")}} et l'attribut <code>style</code> sur tous les éléments :</p>

<pre class="brush: html">&lt;style&gt;
#inline-style { background: red; }
&lt;/style&gt;

&lt;div style="display:none"&gt;Foo&lt;/div&gt;
</pre>

<p>Vous pouvez aussi utiliser un nonce pour autoriser spécifiquement certains éléments {{HTMLElement("style")}} :</p>

<pre class="brush: bash">Content-Security-Policy: style-src 'nonce-2726c7f26c'</pre>

<p>Vous devrez alors définir ce nonce sur l'élément {{HTMLElement("style")}} :</p>

<pre class="brush: html">&lt;style nonce="2726c7f26c"&gt;
#inline-style { background: red; }
&lt;/style&gt;</pre>

<p>Autrement, vous pourrez créer des hashs à partir de vos feuilles de styles. CSP accepte les algorithmes sha256, sha384 et sha512.</p>

<pre class="brush: bash">Content-Security-Policy: style-src 'sha256-a330698cbe9dc4ef1fb12e2ee9fc06d5d14300262fa4dc5878103ab7347e158f'</pre>

<p>Lors de la génération du hash, vous ne devez pas inclure les balises et tenir compte de la casse et des caractères blancs (espaces, retours à la ligne, etc.).</p>

<pre class="brush: html">&lt;style&gt;#inline-style { background: red; }&lt;/style&gt;</pre>

<h3 id="Style_non_fiables">Style non fiables</h3>

<p>La valeur <code>'unsafe-eval'</code> contrôle différente méthodes de mise en page qui créent des déclarations de style à partir de chaines de caractères. Si <code>'unsafe-eval'</code> n'est pas spécifiée avec la directive <code>style-src</code>, ces méthodes seront bloquées et n'auront aucun effet :</p>

<ul>
 <li>{{domxref("CSSStyleSheet.insertRule()")}}</li>
 <li>{{domxref("CSSGroupingRule.insertRule()")}}</li>
 <li>{{domxref("CSSStyleDeclaration.cssText")}}</li>
</ul>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{specName("CSP 3.0", "#directive-style-src", "style-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>Inchangé.</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-style-src", "style-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("http.headers.csp.Content-Security-Policy.style-src")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{CSP("style-src-elem")}}</li>
 <li>{{CSP("style-src-attr")}}</li>
 <li>{{HTTPHeader("Link")}} header</li>
 <li>{{HTMLElement("style")}}, {{HTMLElement("link")}}</li>
 <li>{{cssxref("@import")}}</li>
 <li>{{domxref("CSSStyleSheet.insertRule()")}}</li>
 <li>{{domxref("CSSGroupingRule.insertRule()")}}</li>
 <li>{{domxref("CSSStyleDeclaration.cssText")}}</li>
</ul>
