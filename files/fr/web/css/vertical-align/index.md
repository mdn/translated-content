---
title: vertical-align
slug: Web/CSS/vertical-align
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/vertical-align
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>vertical-align</code></strong> définit l'alignement vertical d'une boîte en ligne (<em>inline</em>) ou d'une cellule de tableau.</p>

<div>{{EmbedInteractiveExample("pages/css/vertical-align.html")}}</div>

<p>La propriété <code>vertical-align</code> peut être utilisée dans deux contextes :</p>

<ul>
 <li>Afin d'aligner verticalement la boîte d'un élément en ligne à l'intérieur de la boîte en ligne de son conteneur (par exemple pour aligner verticalement une image ({{HTMLElement("img")}} sur une ligne de texte)</li>
 <li>ou pour aligner verticalement le contenu d'une cellule dans un tableau</li>
</ul>

<p><code>vertical-align</code> ne s'applique qu'aux cellules de tableaux et aux éléments en ligne (<em>inline</em>), elle ne peut pas être utilisée pour aligner verticalement <a href="/fr/docs/Web/HTML/Éléments_en_bloc">les éléments de bloc</a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Avec un mot-clé */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* Valeurs de longueur */
/* type &lt;length&gt; */
vertical-align: 10em;
vertical-align: 4px;

/* Valeurs en pourcentage */
/* type &lt;percentage&gt; */
vertical-align: 20%;

/* Valeurs globales */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<h4 id="Pour_les_éléments_inline">Pour les éléments <em>inline</em></h4>

<div class="note">
<p><strong>Note :</strong>  La plupart des valeurs alignent l'élément verticalement, relativement à son élément parent.</p>
</div>

<dl>
 <dt><code>baseline</code></dt>
 <dd>Aligne la ligne de base de l'élément avec celle de son parent. La ligne de base de certains <a href="/fr/docs/Web/CSS/Élément_remplacé">éléments remplacés</a>, comme {{HTMLElement("textarea")}}, n'est pas définie par la spécification HTML et le comportement de ce mot-clé peut donc changer d'un navigateur à un autre.</dd>
 <dt><code>sub</code></dt>
 <dd>Aligne la ligne de base sur la ligne de base inférieure (celle utilisée pour les indices) de l'élément parent.</dd>
 <dt><code>super</code></dt>
 <dd>Aligne la ligne de base sur la ligne de base supérieure (celle utilisée pour les exposants) de l'élément parent.</dd>
 <dt><code>text-top</code></dt>
 <dd>Aligne le haut de l'élément avec le haut de la police de l'élément parent.</dd>
 <dt><code>text-bottom</code></dt>
 <dd>Aligne le bas de l'élément avec le bas de la police de l'élément parent.</dd>
 <dt><code>middle</code></dt>
 <dd>Aligne le milieu de l'élément avec la hauteur donnée par la ligne de base de l'élément parent à laquelle on ajoute la moitié de sa hauteur.</dd>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>Aligne la ligne de base de l'élément à la hauteur de la ligne de base de l'élément parent à laquelle on ajoute la hauteur donnée. Les valeurs négatives sont autorisées.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>Fonctionne comme avec les valeurs de type {{cssxref("&lt;length&gt;")}}, le pourcentage indique une fraction de la propriété {{cssxref("line-height")}}. Les valeurs négatives sont autorisées.</dd>
</dl>

<p>Les valeurs suivantes alignent l'élément par rapport à la ligne entière (absolu) plutôt que par rapport à leur parent (relatif) :</p>

<dl>
 <dt><code>top</code></dt>
 <dd>Aligne le haut de l'élément et de ses descendants avec le haut de la ligne entière.</dd>
 <dt><code>bottom</code></dt>
 <dd>Aligne le bas de l'élément et de ses descendants avec le bas de la ligne entière.</dd>
</dl>

<p>Pour les éléments qui n'ont pas de ligne de base définie, c'est le bord de la marge basse qui est utilisée.</p>

<h4 id="Pour_les_cellules_de_tableau">Pour les cellules de tableau</h4>

<dl>
 <dt><code>baseline</code>, <code>sub</code>, <code>super</code>, <code>text-top</code>, <code>text-bottom</code>, <code>&lt;length&gt;</code> et <code>&lt;percentage&gt;</code></dt>
 <dd>La ligne de base de la cellule est alignée avec celle de toutes les autres cellules de la ligne courante qui sont alignées par rapport à la ligne de base. Les valeurs négatives sont autorisées.</dd>
 <dt><code>top</code></dt>
 <dd>Aligne le bord haut de la boîte de remplissage (<em>padding</em>) de la cellule avec le haut de la ligne.</dd>
 <dt><code>middle</code></dt>
 <dd>Centre la boîte de remplissage (<em>padding</em>) de la cellule avec la ligne.</dd>
 <dt><code>bottom</code></dt>
 <dd>Aligne le bord bas de la boîte de remplissage (<em>padding</em>) avec le bas de la ligne.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemple">Exemple</h2>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  Une &lt;img src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="une icone générique" width="32" height="32" /&gt;
  image alignée par défaut.
&lt;/div&gt;
&lt;div&gt;
  Une &lt;img class="haut" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /&gt;
  image alignée avec text-top.
&lt;/div&gt;
&lt;div&gt;
  Une &lt;img class="bas" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /&gt;
  image alignée avec text-bottom.&lt;/div&gt;
&lt;div&gt;
  Une &lt;img class="pourcents" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /&gt;
  image alignée avec 200%.
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">img.haut {
  vertical-align: text-top;
}
img.bas {
  vertical-align: text-bottom;
}
img.pourcents {
  vertical-align: 200%;
}
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple")}}</p>

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
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'vertical-align')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td><code>vertical-align</code> peut désormais être animée.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visudet.html#propdef-vertical-align', 'vertical-align')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Ajoute la valeur {{cssxref("&lt;length&gt;")}} et permet d'appliquer la propriété aux éléments dont {{cssxref("display")}} est de type <code>table-cell</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#vertical-align', 'vertical-align')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.vertical-align")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("line-height")}}, {{cssxref("text-align")}}, {{cssxref("margin")}}</li>
 <li><a href="https://phrogz.net/css/vertical-align/index.html">Comprendre <code>vertical-align</code> ou comment (ne pas) centrer des éléments verticalement</a> (en anglais)</li>
 <li><a href="https://christopheraue.net/design/vertical-align">Tout ce qu'il y a à savoir sur <code>vertical-align</code></a> (en anglais)</li>
 <li><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Cas_utilisation_flexbox#Centrer_des_éléments">Centrer des éléments avec <em>flexbox</em></a></li>
</ul>
