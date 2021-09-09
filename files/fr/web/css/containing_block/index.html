---
title: À propos du bloc conteneur
slug: Web/CSS/Containing_block
tags:
  - CSS
  - Guide
  - Reference
translation_of: Web/CSS/Containing_block
original_slug: Web/CSS/A_Propos_Du_Bloc_Conteneur
---
<div>{{CSSRef}}</div>

<p>Le <strong>bloc englobant (<em>containing block</em>)</strong> affecte souvent la taille et la position d'un élément. La plupart du temps, le bloc englobant est la <a href="/en-US/docs/Learn/CSS/Building_blocks/The_box_model#les_propri%c3%a9t%c3%a9s_des_bo%c3%aetes">zone de contenu</a> de l'ancêtre de <a href="/fr/docs/Web/HTML/Block-level_elements">bloc</a> le plus proche mais cette règle n'est pas absolue. Dans cet article, nous verrons les différents facteurs qui participent à la définition du bloc englobant.</p>

<p>Lorsqu'un agent utilisateur (un navigateur web par exemple) dispose un document, il génère une boîte pour chaque élément du document. Chaque boîte est divisée en quatre zones :</p>

<ol>
 <li>La zone de contenu (<em>content area</em>)</li>
 <li>La zone de remplissage (<em>padding area</em>)</li>
 <li>La zone de bordure (<em>border area</em>)</li>
 <li>La zone de marge (<em>margin area</em>)</li>
</ol>

<p><img alt="Diagram of the box model" src="box-model.png"></p>

<div class="note">
<p><strong>Note :</strong> Voir <a href="/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_mod%C3%A8le_de_bo%C3%AEte">cet article pour découvrir le modèle de boîtes</a> en CSS.</p>
</div>

<p>On pourrait penser que le bloc englobant d'un élément est toujours la zone de contenu de son élément parent. Toutefois, ce n'est pas toujours le cas. Voyons donc les facteurs qui déterminent ce bloc englobant.</p>

<h2 id="Les_effets_du_bloc_englobant">Les effets du bloc englobant</h2>

<p>Avant d'aller plus loin, voyons l'impact du bloc englobant sur un élément.</p>

<p>Les dimensions et la position d'un élément sont souvent dépendants du bloc englobant. Les valeurs en pourcentages appliquées à des propriétés comme {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} sont calculées relativement à la taille du bloc englobant. Il en va de même pour les propriétés de décalage des éléments positionnés de façon absolue (c'est-à-dire avec {{cssxref("position")}} qui vaut <code>absolute</code> ou <code>fixed</code>).</p>

<h2 id="Identifier_le_bloc_englobant">Identifier le bloc englobant</h2>

<p>Le bloc englobant est entièrement déterminé par la valeur de la propriété {{cssxref("position")}} pour l'élément :</p>

<ul>
 <li>Si la propriété <code>position</code><strong> </strong>vaut <code><strong>static</strong></code>, <code><strong>relative</strong></code> ou <code><strong>sticky</strong></code>, le bloc englobant est constitué par le bord de la boîte de contenu de l'ancêtre le plus proche qui est un conteneur de bloc (c'est-à-dire qui est un élément avec <code>display</code> qui vaut <code>inline-block</code>, <code>block</code> ou <code>list-item</code>) ou qui crée un contexte de formatage (tel qu'un conteneur de tableau, un conteneur flexible, un conteneur de grille ou le conteneur du bloc même).</li>
 <li>Si la propriété <code>position</code> vaut <code><strong>absolute</strong></code>, le bloc englobant est constitué par le bord de la boîte de remplissage (<em>padding</em>) de l'ancêtre le plus proche dont la valeur de <code>position</code> est différente de <code>static</code> (<code>fixed</code>, <code>absolute</code>, <code>relative</code> ou <code>sticky</code>).</li>
 <li>Si la propriété <code>position</code> vaut <code><strong>fixed</strong></code>, le bloc englobant est formé par le {{glossary("viewport")}} (ou la page dans le cas des média paginés).</li>
 <li>Si la propriété <code>position</code><strong> </strong>vaut <code><strong>absolute</strong></code> ou <code><strong>fixed</strong></code>, le bloc englobant peut également être constitué par le bord de la boîte de remplissage le plus proche qui a :
  <ol>
   <li>Une propriété {{cssxref("transform")}} ou {{cssxref("perspective")}} avec une valeur différente de <code>none</code></li>
   <li>Une propriété {{cssxref("will-change")}} qui vaut <code>transform</code> ou <code>perspective</code></li>
   <li>Une propriété {{cssxref("filter")}} différente de <code>none</code> ou une propriété <code>will-change</code> différente of <code>filter</code> (ne fonctionne que pour Firefox).</li>
   <li>Une propriété {{cssxref("contain")}} qui vaut <code>paint</code>.</li>
  </ol>
 </li>
</ul>

<div class="note">
<p><strong>Note :</strong> Le bloc englobant contenant l'élément racine ({{HTMLElement("html")}}) est situé dans un rectangle appelé <strong>bloc englobant initial</strong>. Ce dernier a les dimensions de la zone d'affichage (<em>viewport</em>) ou de la page (pour les média paginés).</p>
</div>

<h2 id="Calcul_des_pourcentages_à_partir_du_bloc_englobant">Calcul des pourcentages à partir du bloc englobant</h2>

<p>Comme mentionné ci-avant, lorsque certaines propriétés ont une valeur en pourcentage, la valeur calculée dépend du bloc contenant l'élément. Les propriétés qui fonctionnent de cette manière sont les propriétés <em><strong>box model</strong></em> et <em><strong>offset</strong></em> :</p>

<ol>
 <li>Les valeurs calculées des propriétés {{cssxref("height")}}, {{cssxref("top")}} et {{cssxref("bottom")}} sont construites à partir de la hauteur du bloc englobant.</li>
 <li>Les valeurs calculées des propriétés {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} et {{cssxref("margin")}} sont calculées à partir de la largeur (<code>width</code>) du bloc englobant.</li>
</ol>

<h2 id="Quelques_exemples">Quelques exemples</h2>

<p>Le code HTML utilisé pour les exemples suivants sera :</p>

<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;Et voici un paragraphe !&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<h3 id="Premier_exemple">Premier exemple</h3>

<p>Dans cet exemple, le paragraphe est positionné de façon statique et son bloc englobant est la zone de contenu de {{HTMLElement("section")}} car cet élément est l'ancêtre le plus proche qui est un conteneur de bloc.</p>

<pre class="brush: html hidden">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;Et voici un paragraphe !&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<pre class="brush: css">body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%;   /* == 400px * .5 = 200px */
  height: 25%;  /* == 160px * .25 = 40px */
  margin: 5%;   /* == 400px * .05 = 20px */
  padding: 5%;  /* == 400px * .05 = 20px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Premier_exemple','100%','300')}}</p>

<h3 id="Deuxième_exemple">Deuxième exemple</h3>

<p>Dans cet exemple, le bloc englobant est formé par l'élément {{HTMLElement("body")}}<strong> </strong>car <code>&lt;section&gt;</code> n'est pas un conteneur de bloc en raison de <code>display: inline</code> et il ne crée pas de contexte de formatage.</p>

<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;Et voici un paragraphe !&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<pre class="brush: css">body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%;     /* == half the body's width */
  height: 200px;  /* Note: a percentage would be 0 */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Deuxième_exemple','100%','300')}}</p>

<h3 id="Troisième_exemple">Troisième exemple</h3>

<p>Ici, le bloc englobant du paragraphe est <code>&lt;section&gt;</code> car la propriété <code>position</code> de ce dernier vaut <code>absolute</code>. Les valeurs exprimées en pourcentages et associées au paragraphe sont relatives à la zone de remplissage du bloc englobant (ce ne serait pas le cas si la propriété {{cssxref("box-sizing")}} du bloc englobant valait <code>border-box</code>).</p>

<pre class="brush: html hidden">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;Et voici un paragraphe !&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<pre class="brush: css">body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%;   /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%;  /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%;   /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%;  /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Troisième_exemple','100%','300')}}</p>

<h3 id="Quatrième_exemple">Quatrième exemple</h3>

<p>Dans cet exemple, la propriété <code>position</code> du paragraphe vaut <code>fixed</code>. Le bloc englobant est donc le bloc englobant initial (c'est-à-dire le <em>viewport</em> pour les écrans). Aussi, les dimensions du paragraphe changent selon la taille de la fenêtre du navigateur.</p>

<pre class="brush: html hidden">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;Et voici un paragraphe !&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<pre class="brush: css">body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%;   /* == (50vw - (width of vertical scrollbar)) */
  height: 50%;  /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%;   /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%;  /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Quatrième_exemple','100%','300')}}</p>

<h3 id="Cinquième_exemple">Cinquième exemple</h3>

<p>Dans cet exemple, la propriété <code>position</code> du paragraphe vaut <code>absolute</code>. Son bloc englobant est donc <code>&lt;section&gt;</code> car c'est l'ancêtre le plus proche dont la propriété {{cssxref("transform")}} ne vaut pas <code>none</code>.</p>

<pre class="brush: html hidden">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;Et voici un paragraphe !&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<pre class="brush: css">body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%;   /* == 200px */
  height: 25%;  /* == 40px */
  margin: 5%;   /* == 20px */
  padding: 5%;  /* == 20px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Cinquième_exemple','100%','300')}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La propriété {{cssxref("all")}} permet de réinitialiser l'ensemble des déclarations CSS dans un certain état.</li>
</ul>
