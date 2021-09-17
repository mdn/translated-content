---
title: margin-left
slug: Web/CSS/margin-left
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/margin-left
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>margin-left</code></strong> d'un élément définit l'espace horizontal à gauche qui formera la marge à gauche de l'élément. On peut avoir une marge gauche négative qui rapproche l'élément de ses voisins ou une marge positive qui l'en écarte.</p>

<div>{{EmbedInteractiveExample("pages/css/margin-left.html")}}</div>

<p>Les marges des côtés droit et gauche de deux boîtes adjacentes peuvent fusionner entre elles. C'est ce qu'on appelle <a href="/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"><em>la fusion de marges</em></a>.</p>

<p>Dans certains cas où les dimensions sont sur-contraintes (autrement dit quand <code>width</code>, <code>margin-left</code>, <code>border</code>, <code>padding</code>, la taille de la zone de contenu et <code>margin-right</code> sont toutes définies), <code>margin-left</code> est ignorée. La valeur calculée sera la même que si <code>auto</code> avait été utilisée.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt;       */
margin-left: 10px;  /* Une longueur absolue */
margin-left: 1em;   /* Une longueur absolue relative à la taille du texte */
margin-left: 5%;    /* Une marge dont la taille est relative à la largeur
                       du bloc englobant */

/* Valeur avec un mot-clé */
margin-left: auto;

/* Valeurs globales */
margin-left: inherit;
margin-left: initial;
margin-left: unset;
</pre>

<p>La valeur de cette propriété peut être le mot-clé <code>auto</code>, une longueur (<code>&lt;length&gt;</code>) ou un pourcentage (<code>&lt;percentage&gt;</code>).</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>Une valeur fixe, du type {{cssxref("&lt;length&gt;")}} : elle peut être exprimée en pixels (<code>px</code>) ou en fonction de la taille du texte (<code>em</code>) ou être relative à la taille de la zone d'affichage (<em>viewport</em>) (<code>vh</code>).</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>Une valeur exprimée en pourcentage (type {{cssxref("&lt;percentage&gt;")}} relative à la largeur du bloc englobant.</dd>
 <dt><code>auto</code></dt>
 <dd>Un mot-clé qui indique que la marge droite s'adapte à l'espace restant. Cet espace est principalement défini par le mode de disposition utilisé.L'espace calculé sera réparti de façon équitable entre la marge droite et la marge gauche si celle-ci vaut également <code>auto</code>. Le tableau suivant précise les différents cas :
 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">Valeur de {{cssxref("display")}}</th>
    <th scope="col">Valeur de {{cssxref("float")}}</th>
    <th scope="col">Valeur de {{cssxref("position")}}</th>
    <th scope="col">Valeur calculée pour <code>auto</code></th>
    <th scope="col">Commentaires</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <th><code>inline</code>, <code>inline-block</code>, <code>inline-table</code></th>
    <th><em>n'importe laquelle</em></th>
    <th><code>static</code> ou <code>relative</code></th>
    <td><code>0</code></td>
    <td>Disposition en ligne</td>
   </tr>
   <tr>
    <th><code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>block</code>, <code>table</code>, <code>inline-table</code>, <code>list-item</code>, <code>table-caption</code></th>
    <th><em>n'importe laquelle</em></th>
    <th><code>static</code> ou <code>relative</code></th>
    <td><code>0</code> sauf si <code>margin-left</code> et <code>margin-right</code> valent <code>auto</code>. Dans ce cas, la valeur utilisée sera celle qui permet de centrer l'élément au sein de l'élément parent.</td>
    <td>Disposition en bloc</td>
   </tr>
   <tr>
    <th><code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>block</code>, <code>table</code>, <code>inline-table</code>, <code>list-item</code>, <code>table-caption</code></th>
    <th><code>left</code> ou <code>right</code></th>
    <th><code>static</code> ou <code>relative</code></th>
    <td><code>0</code></td>
    <td>Disposition en bloc avec les éléments flottants</td>
   </tr>
   <tr>
    <th><em>n'importe quelle </em><code>table-*</code><em>, sauf </em><code>table-caption</code></th>
    <th><em>n'importe laquelle</em></th>
    <th><em>n'importe laquelle</em></th>
    <td><code>0</code></td>
    <td>Les éléments <code>table-*</code> n'ont pas de marge, il faut utiliser {{cssxref("border-spacing")}} à la place.</td>
   </tr>
   <tr>
    <th><em>n'importe laquelle, sauf <code>flex</code>,</em> <code>inline-flex</code><em>, ou </em><code>table-*</code></th>
    <th><em>n'importe laquelle</em></th>
    <th><em><code>fixed</code></em> ou <code>absolute</code></th>
    <td><code>0</code> sauf si <code>margin-left</code> et <code>margin-right</code> valent <code>auto</code>. Dans ce cas, la valeur utilisée sera celle qui permet de centrer la boîte de bordure dans la zone de largeur disponible si elle fixée.</td>
    <td>Positionnement absolu.</td>
   </tr>
   <tr>
    <th><code>flex</code>, <code>inline-flex</code></th>
    <th><em>n'importe laquelle</em></th>
    <th><em>n'importe laquelle</em></th>
    <td><code>0</code>, sauf s'il reste de l'espace horizontal libre. Dans ce cas, l'espace restant sera distribué de façon équitable entre toutes les marges avec <code>auto</code>.</td>
    <td>Boîtes flexibles.</td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.exemple {
  margin-left: 50%;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Un grand rosier se trouvait à l’entrée du jardin ;
   les roses qu’il portait étaient blanches, mais
   trois jardiniers étaient en train de les peindre
   en rouge.
&lt;/p&gt;
&lt;p class=exemple&gt;
  Alice s’avança pour les regarder, et, au moment où
  elle approchait, elle en entendit un qui disait :
  « Fais donc attention, Cinq, et ne m’éclabousse pas
  ainsi avec ta peinture. »
&lt;/p&gt;
&lt;p&gt;
  « Ce n’est pas de ma faute, » dit Cinq d’un ton
  bourru, « c’est Sept qui m’a poussé le coude. »
&lt;/p&gt;</pre>

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
   <td>{{SpecName('CSS3 Box', '#the-margin', 'margin-left')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td>Pas de modification significative depuis CSS 2.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'margin-left')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td><code>margin-left</code> peut désormais être animée.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Flexbox', '#item-margins', 'margin-left')}}</td>
   <td>{{Spec2('CSS3 Flexbox')}}</td>
   <td>Le comportement de <code>margin-left</code> sur les éléments flexibles est défini.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-left')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>L'effet sur les éléments en ligne (<em>inline</em>) est retiré.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#margin-left', 'margin-left')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.margin-left")}}</p>
