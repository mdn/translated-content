---
title: background-position-y
slug: Web/CSS/background-position-y
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/background-position-y
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>background-position-y</code></strong> définit la position verticale initiale de chaque image d'arrière-plan. La position est relative à l'origine définie par {{cssxref("background-origin")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/background-position-y.html")}}</div>

<div class="note">
  <p><strong>Note :</strong> La valeur de cette propriété sera surchargée par n'importe quelle déclaration avec  {{cssxref("background")}} ou {{cssxref("background-position")}} située après la déclaration.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
background-position-y: top;
background-position-y: bottom;
background-position-y: center;

/* Valeurs proportionnelles */
/* Type &lt;percentage&gt;        */
background-position-y: 25%;

/* Valeurs de longueur */
/* Type &lt;length&gt;       */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Déclaration indiquant un décalage  */
/* relatif à un des côtés de la boîte */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Gestion de plusieurs valeurs */
/* pour plusieurs arrières-plan */
background-position-y: 0px, center;

/* Valeurs globales */
background-position-y: inherit;
background-position-y: initial;
background-position-y: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>top</code></dt>
 <dd>Le bord haut de l'image d'arrière-plan est aligné avec le bord haut de la zone dédiée à l'arrière-plan.</dd>
 <dt><code>center</code></dt>
 <dd>L'image d'arrière-plan est centrée verticalement par rapport à la zone dédiée à l'arrière-plan.</dd>
 <dt><code>bottom</code></dt>
 <dd>Le bas de l'image d'arrière-plan est aligné avec le bas de la zone dédiée à l'arrière-plan.</dd>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) qui définit le décalage vertical de l'arrière-plan correspondant par rapport au bord haut de la zone d'arrière-plan. Si aucun côté n'est indiqué, l'écart fera référence au bord haut. Certains navigateurs permettent d'indiquer un décalage par rapport au côté bas.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>Une valeur en pourcentages (type {{cssxref("&lt;percentage&gt;")}}) qui définit le décalage vertical de l'arrière-plan correspondant par rapport à un bord horizontal de la zone d'arrière-plan, proportionnellement à la hauteur de la zone. Si aucun côté n'est indiqué, l'écart fera référence au bord haut. Une valeur de 100% indique que le bas de l'image d'arrière-plan sera aligné avec le bas du conteneur et une valeur de 50% centrera l'image.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

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
   <td>{{SpecName('CSS4 Backgrounds', '#background-position-longhands', 'background-position-y')}}</td>
   <td>{{Spec2('CSS4 Backgrounds')}}</td>
   <td>Spécification initiale pour les propriétés détaillées de {{cssxref("background-position")}}, implémentée depuis longtemps.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.background-position-y")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("background-position")}}</li>
 <li>{{cssxref("background-position-x")}}</li>
 <li>{{cssxref("background-position-inline")}}</li>
 <li>{{cssxref("background-position-block")}}</li>
 <li><a href="/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds">Manipuler plusieurs arrière-plans</a></li>
</ul>
