---
title: ':any-link'
slug: 'Web/CSS/:any-link'
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:any-link'
---
<div>{{CSSRef}}</div>

<p>La pseudo-classe <strong><code>:any-link</code></strong> permet de représenter un élément qui agit comme la source de l'ancre d'un hyperlien (qu'il ait été visité ou non). Elle permet donc de cibler les éléments {{HTMLElement("a")}}, {{HTMLElement("area")}} ou {{HTMLElement("link")}} avec un attribut <code>href</code>. Autrement dit, elle cible les éléments qui correspondent à {{cssxref(":link")}} ou à {{cssxref(":visited")}}.</p>

<pre class="brush: css no-line-numbers  language-css">/* cible tous les éléments qui seraient ciblés par */
/* :link ou :visited */
:any-link {
  color: green;
  font-weight: bold;
}</pre>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">:any-link {
  color: green;
  font-weight: bold;
}

/* Pour les navigateurs WebKit */
:-webkit-any-link {
  color: green;
  font-weight: bold;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="https://mozilla.org"&gt;Une page différente&lt;/a&gt;&lt;br&gt;
&lt;a href="#"&gt;Une ancre&lt;/a&gt;&lt;br&gt;
&lt;a&gt;Un lien sans cible (n'est pas mis en forme)&lt;/a&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","100%")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS4 Selectors", "#the-any-link-pseudo", ":any-link")}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.any-link")}}</p>
