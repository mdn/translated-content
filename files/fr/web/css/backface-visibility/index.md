---
title: backface-visibility
slug: Web/CSS/backface-visibility
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/backface-visibility
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>backface-visibility</code></strong> indique si la face arrière d'un élément doit être visible lorsqu'elle est orientée vers l'utilisateur. La face arrière d'un élément est un arrière-plan transparent qui, lorsqu'il est visible, permet de voir un reflet symétrique de la face avant de l'élément.</p>

<div>{{EmbedInteractiveExample("pages/css/backface-visibility.html")}}</div>

<p>Dans certains cas, on souhaite que la face avant ne soit pas visible par transparence. Par exemple, si on souhaite simuler une carte à jouer qu'on retourne.</p>

<p>Cette propriété n'aura aucun effet tant que les transformations appliquées sont uniquement en 2D car aucun effet de perspective ne sera introduit.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
backface-visibility: visible;
backface-visibility: hidden;

/* Valeurs globales */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: unset;</pre>

<p>La propriété <code>backface-visibility</code> est définie avec l'un des mots-clés suivants.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>Ce mot-clé indique que la face arrière est visible lorsqu'elle est tournée vers l'utilisateur. Cela permet d'obtenir un effet miroir sur la face avant.</dd>
 <dt><code>hidden</code></dt>
 <dd>Ce mot-clé indique que la face arrière n'est pas visible. La face avant est donc cachée.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on dessine un cube avec des faces transparentes.</p>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* Des classes utilitaires pour afficher ou
   masquer les faces arrières du cube */
.hidebf div {
  backface-visibility: hidden;
}

.showbf div {
  backface-visibility: visible;
}

/* On définit les règles pour le conteneur, */
/* le cube et une face quelconque */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* On définit chacune des faces */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* On améliore le rendu du tableau */
th, p, td {
  background-color: #EEEEEE;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th&gt;&lt;code&gt;backface-visibility: visible;&lt;/code&gt;&lt;/th&gt;
      &lt;th&gt;&lt;code&gt;backface-visibility: hidden;&lt;/code&gt;&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;
        &lt;div class="container"&gt;
          &lt;div class="cube showbf"&gt;
            &lt;div class="face front"&gt;1&lt;/div&gt;
            &lt;div class="face back"&gt;2&lt;/div&gt;
            &lt;div class="face right"&gt;3&lt;/div&gt;
            &lt;div class="face left"&gt;4&lt;/div&gt;
            &lt;div class="face top"&gt;5&lt;/div&gt;
            &lt;div class="face bottom"&gt;6&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;p&gt;
          Toutes les faces sont transparentes et les trois
          faces arrières sont visibles au travers des faces
          avant.
        &lt;/p&gt;
      &lt;/td&gt;
      &lt;td&gt;
        &lt;div class="container"&gt;
          &lt;div class="cube hidebf"&gt;
            &lt;div class="face front"&gt;1&lt;/div&gt;
            &lt;div class="face back"&gt;2&lt;/div&gt;
            &lt;div class="face right"&gt;3&lt;/div&gt;
            &lt;div class="face left"&gt;4&lt;/div&gt;
            &lt;div class="face top"&gt;5&lt;/div&gt;
            &lt;div class="face bottom"&gt;6&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;p&gt;
          Aucune face n'est opaque mais les trois faces arrières
          sont désormais cachées.
        &lt;/p&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '100%', 360)}}</p>

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
   <td>{{SpecName('CSS Transforms 2', '#propdef-backface-visibility', 'backface-visibility')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.backface-visibility")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS">Utiliser les transformations CSS</a></li>
</ul>
