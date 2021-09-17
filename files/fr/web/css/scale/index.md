---
title: scale
slug: Web/CSS/scale
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/scale
---
<div>{{CSSRef}}{{seecompattable}}</div>

<p>La propriété <strong><code>scale</code></strong> permet de mise à l'échelle individuellement et indépendamment de la propriété {{cssxref("transform")}}. Cela peut être utile pour la construction d'une interface utilisateur et évite d'avoir à se souvenir de l'ordre exact des fonctions de transformations à indiquer pour <code>transform</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css">/* Valeurs avec un mot-clé */
scale: none;

/* Une seule valeur */
/* Les valeurs supérieures à 1 agrandissent l'élément */
scale: 2;
/* Les valeurs inférieures à 1 rétrécissent l'élément */
scale: 0.5;

/* Deux valeurs */
scale: 2 0.5;

/* Trois valeurs */
scale: 2 0.5 2;</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt>Une seule valeur de longueur/pourcentage</dt>
 <dd>Une longueur ou un pourcentage qui définit une mise à l'échelle en deux dimensions. Le facteur utilisé est le même pour l'axe X et l'axe Y. Cela est équivalent à la fonction <code>scale()</code> (mise à l'échelle sur deux dimensions) avec une seule valeur.</dd>
 <dt>Deux valeurs de longueur/pourcentage</dt>
 <dd>Deux longueurs ou pourcentages qui définissent respectivement les composantes horizontale et verticale de l'agrandissement/rétrécissement en deux dimensions. Cela est équivalent à la fonction <code>scale()</code> appelée avec ces deux arguments.</dd>
 <dt>Trois valeurs de longueur/pourcentage</dt>
 <dd>Trois longueurs ou pourcentages qui définissent respectivement les composantes horizontale, verticale et en profondeur de la mise à l'échelle sur trois dimensions. Cela est équivalent à la fonction <code>scale3d()</code> appelée avec ces trois arguments.</dd>
 <dt><code>none</code></dt>
 <dd>Cette valeur indique qu'aucune mise à l'échelle ne devrait être appliquée.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="scale"&gt;Scaling&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.scale {
  transition: scale 1s;
}

div:hover .scale {
  scale: 2 0.7;
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

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
   <td>{{SpecName('CSS Transforms 2', '#individual-transforms', 'individual transforms')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.scale")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref('translate')}}</li>
 <li>{{cssxref('rotate')}}</li>
 <li>{{cssxref('transform')}}</li>
</ul>
