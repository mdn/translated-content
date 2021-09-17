---
title: '-webkit-text-security'
slug: Web/CSS/-webkit-text-security
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-text-security
---
<div>{{CSSRef}} {{Non-standard_header}}</div>

<p><code><strong>-webkit-text-security</strong></code> est une propriété CSS non-standard qui permet de masquer les caractères saisis dans un camp d'un formulaire (ex. {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}) en les remplaçant par une forme géométrique. Cette propriété n'affecte que les champs qui ne sont pas de type <code>password</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;
</pre>

<h2 id="Exemples">Exemples</h2>

<p>En utilisant un navigateur qui prend en charge cette propriété et en saisissant des caractères dans le champs, vous pourrez les voir remplacées par des carrés.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;label for="name"&gt;Nom :&lt;/label&gt;
&lt;input type="text" name="name" id="name" /&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input {
  -webkit-text-security: square;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété WebKit est spécifique à ce moteur et ne fait partie d'aucune spécification<em>.</em></p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Cette propriété est prise en charge par les navigateurs basés sur WebKit ou Blink.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/WebKit_Extensions">Les extensions CSS spécifiques à WebKit</a></li>
</ul>
