---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
tags:
  - CSS
  - CSSOM
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-behavior
---
<div>{{CSSRef}}</div>

<p>La propriété<strong> <code>scroll-behavior</code></strong> définit le comportement du défilement pour une boîte de défilement lorsque celui-ci provient de la navigation ou des API CSSOM.</p>

<p>Pour les autres défilements, appliqués par l'utilisateur, cette propriété n'a aucun impact. Lorsque cette propriété est définie sur l'élément racine, elle s'applique à la zone d'affichage (<em>viewport</em>).</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}</div>

<p>Les agents utilisateur peuvent choisir d'ignorer cette propriété. Lorsque cette propriété est indiquée sur l'élément <code>body</code>, elle ne se propage pas à la zone d'affichage (<em>viewport</em>).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Valeurs globales */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: unset;
</pre>

<p>La propriété <code>scroll-behavior</code> est définie avec l'un des mots-clés suivants.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>La boîte de défilement progresse de façon instantanée.</dd>
 <dt><code>smooth</code></dt>
 <dd>Le défilement est doux et utilise une fonction de minutage définie par l'agent utilisateur pendant une période définie par l'agent utilisateur. Les agents utilisateur doivent respecter les conventions de la plate-forme s'il y en a.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav, scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;nav&gt;
  &lt;a href="#page-1"&gt;1&lt;/a&gt;
  &lt;a href="#page-2"&gt;2&lt;/a&gt;
  &lt;a href="#page-3"&gt;3&lt;/a&gt;
&lt;/nav&gt;
&lt;scroll-container&gt;
  &lt;scroll-page id="page-1"&gt;1&lt;/scroll-page&gt;
  &lt;scroll-page id="page-2"&gt;2&lt;/scroll-page&gt;
  &lt;scroll-page id="page-3"&gt;3&lt;/scroll-page&gt;
&lt;/scroll-container&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", "100%", 250)}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p><a href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_vestibulaire">Les troubles du système vestibulaires</a> peuvent être causés par la maladie, l'âge ou des blessures. Ces troubles entraînent des vertiges, fatigues et nausées suite aux mouvements.</p>

<p>En utilisant la caractéristique média <code>prefers-reduced-motion</code>, on peut désactiver le défilement instantanné pour les utilisateurs qui ont paramétré leur système/navigateur afin de réduire les animations et mouvements :</p>

<pre class="brush: css">html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}</pre>

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
   <td>{{SpecName('CSSOM View', "#propdef-scroll-behavior", 'scroll-behavior')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.scroll-behavior")}}</p>
