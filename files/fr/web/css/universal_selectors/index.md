---
title: Sélecteurs universels
slug: Web/CSS/Universal_selectors
tags:
  - CSS
  - Reference
  - Sélecteur
translation_of: Web/CSS/Universal_selectors
original_slug: Web/CSS/Sélecteurs_universels
---
<div>{{CSSRef("Selectors")}}</div>

<p>L'astérisque (*) est le sélecteur universel en CSS. Il correspond à un élément de n'importe quel type.</p>

<pre class="brush: css no-line-numbers">* {
  color: green;
}</pre>

<p>En CSS 3, l'astérisque peut être combinée avec les espaces de nom :</p>

<ul>
 <li><code>ns|*</code> - correspond à tous les éléments de l'espace de noms <code>ns</code></li>
 <li><code>*|*</code> - correspond à tous les éléments</li>
 <li><code>|*</code> - correspond à tous les éléments sans espace de noms déclaré</li>
</ul>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">* { <em>style properties</em> }</pre>

<p>L'astérisque est optionnelle lorsqu'elle est utilisée avec des sélecteurs simples. Par exemple, <code>*.warning</code> et <code>.warning</code> seront équivalents.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">* [lang^=fr] {
  color:green;
}

*.warning {
  color:red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

.floating + * {
  clear: left;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="warning"&gt;
  &lt;span lang="fr"&gt;Un span vert&lt;/span&gt; dans un paragraphe rouge.
&lt;/p&gt;
&lt;p id="maincontent" lang="fr"&gt;
  &lt;span class="warning"&gt;Un span rouge&lt;/span&gt; dans un paragraphe vert.
&lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', 250, 100)}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#the-universal-selector', 'universal selector')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#universal-selector', 'universal selector')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Définition du comportement avec les espaces de noms et ajout d'indications pour omettre le sélecteur avec les pseudo-éléments.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#universal-selector', 'universal selector')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.universal")}}</p>
