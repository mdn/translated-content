---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/scrollbar-color
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>scrollbar-color</code></strong> permet à un auteur de définir la couleur utilisée pour le curseur et la piste (la ligne sur laquelle se déplace le curseur) de la barre de défilement.</p>

<p>{{EmbedInteractiveExample("pages/css/scrollbar-color.html")}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css">/* Valeurs avec un mot-clé */
scrollbar-color: auto;
scrollbar-color: dark;
scrollbar-color: light;

/* Valeur de couleur */
/* La première cible le curseur et la seconde la piste */
/* type &lt;color&gt; */
scrollbar-color: rebeccapurple green;

/* Valeurs globales */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;scrollbar-face-color&gt;</code></dt>
 <dd>Une valeur définissant la couleur.<br>

 <table class="standard-table">
  <tbody>
   <tr>
    <td><code>auto</code></td>
    <td>
     <p>Utilise le rendu par défaut du système pour la piste de la barre de défilement si aucune autre couleur n'est indiquée pour la mise en forme CSS de la barre de défilement.</p>
    </td>
   </tr>
   <tr>
    <td><code>dark</code></td>
    <td>Affiche une barre de défilement sombre. Ce peut être la variante sombre fournie par le système sous-jacent ou une barre de défilement personnalisée avec des couleurs sombres.</td>
   </tr>
   <tr>
    <td><code>light</code></td>
    <td>Affiche une barre de défilement claire. Ce peut être la variante claire fournie par le système sous-jacent ou une barre de défilement personnalisée avec des couleurs claires.</td>
   </tr>
   <tr>
    <td><code>&lt;color&gt; &lt;color&gt;</code></td>
    <td>La première couleur est appliquée au curseur et la seconde à la piste sur laquelle se déplace le curseur.</td>
   </tr>
  </tbody>
 </table>

 <div class="note">
 <p><strong>Note :</strong> Pour toute valeur de <code>scrollbar-color</code>, les agents utilisateur doivent appliquer la valeur sur l'élément racine de la zone d'affichage (<em>viewport</em>).</p>
 </div>

 <div class="note">
 <p><strong>Note :</strong> Si la couleur d'une partie de la barre de défilement est indiquée, les implémentations peuvent afficher une barre de défilement simple (plutôt que celle provenant du système) afin de la colorer avec la/les couleur(s) indiquée(s).</p>
 </div>
 </dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="scroller"&gt;Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.&lt;/div&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Lorsqu'on utilise <code>scrollbar-color</code> avec certains couleurs spécifiques, il est nécessaire de s'assurer que le contraste entre le curseur et la piste est suffisant. Lorsque des mots-clés sont utilisés, c'est à l'agent utilisateur de s'assurer que le contraste est suffisant. Voir <a href="https://www.w3.org/TR/WCAG20-TECHS/G183.html">les techniques WCAG 2.0 G183 : Utiliser un ratio de contraste de 3:1</a>.</p>

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
   <td>{{SpecName("CSS Scrollbars", "#scrollbar-color", "scrollbar-color")}}</td>
   <td>{{Spec2("CSS Scrollbars")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("css.properties.scrollbar-color")}}</div>
