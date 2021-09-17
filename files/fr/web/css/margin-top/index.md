---
title: margin-top
slug: Web/CSS/margin-top
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/margin-top
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>margin-top</code></strong> définit l'espace vertical pour la marge appliquée en haut de l'élément. Une valeur négative peut être utilisée.</p>

<div>{{EmbedInteractiveExample("pages/css/margin-top.html")}}</div>

<p>Cette propriété n'a aucun effet sur les éléments non-remplacés en ligne (<em>inline</em>) tels que {{HTMLElement("tt")}} ou {{HTMLElement("span")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt;       */
margin-top: 10px;  /* Une longueur absolue */
margin-top: 1em;   /* Une longueur proportionnelle à la taille du texte */
margin-top: 5%;    /* Une marge relative à la largeur */
                   /* du bloc englobant le plus proche */

/* Valeur avec un mot-clé */
margin-top: auto;

/* Valeurs globales */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
</pre>

<p>Le mot-clé <code>auto</code> ou une valeur de longueur (<code>&lt;length&gt;</code>) ou de pourcentage (<code>&lt;percentage&gt;</code>).</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>Cette valeur définit une largeur fixée. Pour les valeurs qui peuvent être utilisées, voir la page sur le type {{cssxref("&lt;length&gt;")}}.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>Une valeur en pourcentage (type {{cssxref("&lt;percentage&gt;")}} qui est relative à la <strong>largeur</strong> du bloc englobant.</dd>
 <dt><code>auto</code></dt>
 <dd>Voir {{cssxref("margin")}}.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  background-color: blue;
  background-clip: border-box;
  width: 50px;
  height: 2em;
}
.exemple {
  margin-top: 3em;
  background-color: gold;
  background-clip: border-box;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;&lt;/div&gt;
&lt;p class=exemple&gt;
  C’est ce qui arriva en effet, et bien plus tôt
  qu’elle ne s’y attendait. Elle n’avait pas bu
  la moitié de la bouteille, que sa tête touchait
  au plafond et qu’elle fut forcée de se baisser
  pour ne pas se casser le cou.&lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS3 Box', '#the-margin', 'margin-top')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td>Aucun changement significatif</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'margin-top')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td><code>margin-top</code> peut désormais être animée.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-top')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>L'effet sur les éléments en ligne (<em>inline</em>) est retiré.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#margin-top', 'margin-top')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.margin-top")}}</p>
