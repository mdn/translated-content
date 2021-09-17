---
title: ':focus-within'
slug: 'Web/CSS/:focus-within'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:focus-within'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:focus-within</code></strong> s'applique à tous les éléments pour lesquels la pseudo-classe {{cssxref(":focus")}} s'applique ainsi qu'à tous leurs éléments descendants, y compris ceux du <em>Shadow DOM</em>. Autrement dit, cette pseudo-classe s'applique lorsqu'un élément a reçu le focus via le clavier ou la souris (par exemple lorsqu'on clique sur un champ d'un formulaire).</p>

<pre class="brush: css no-line-numbers">/* Cible n'importe quel &lt;div&gt; lorsqu'un */
/* de ses descendants a reçu le focus */
div:focus-within {
  background: yellow;
}</pre>

<p>Cette pseudo-classe s'applique également aux descendants de l'élément ciblé ainsi qu'aux descendants dont la racine est la racine d'un arbre du {{Glossary("Shadow DOM")}}.</p>

<p>Ce sélecteur est notamment utile lorsqu'on veut, par exemple, mettre en avant l'ensemble d'un formulaire lorsque l'utilisateur passe le focus sur l'un de ses éléments {{HTMLElement("input")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.name-container {
  padding: 4px;
}

.name-container:focus-within {
  background: yellow;
}

input {
  margin: 4px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  L'élément div ci-après aura un fond jaune
  si l'un des deux champs de saisie a le focus.
&lt;/p&gt;
&lt;div class="name-container"&gt;
  &lt;label for="prenom"&gt;
    Prénom :
    &lt;input id="prenom" placeholder="Prénom" type="text"&gt;
  &lt;/label&gt;
  &lt;label for="nom"&gt;
    Nom :
    &lt;input id="nom" placeholder="Nom" type="text"&gt;
  &lt;/label&gt;
&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 500, 150)}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#the-focus-within-pseudo", ":focus-within")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.focus-within")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":focus")}}</li>
 <li>{{CSSxRef(":focus-visible")}} {{Experimental_Inline}}</li>
</ul>
