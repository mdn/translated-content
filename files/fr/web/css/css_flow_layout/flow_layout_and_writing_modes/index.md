---
title: Disposition de flux et modes d'écriture
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes
tags:
  - CSS
  - Guide
  - Mode d'écriture
translation_of: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes
original_slug: Web/CSS/CSS_Flow_Layout/Disposition_flux_et_modes_écriture
---
<p>La spécification CSS 2.1, qui décrit le comportement classique du flux normal, prend l'hypothèse d'un mode d'écriture horizontal. <a href="/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_de_bloc_en_ligne_avec_flux_normal">Les propriétés liées à la disposition</a> devraient fonctionner de façon identique pour les modes d'écritures verticaux. Dans ce guide, nous verrons comment le flux normal se comporte selon les différents modes d'écriture.</p>

<p>Ce guide n'est pas un guide exhaustif sur l'utilisation des modes d'écriture en CSS. Son objectif est de documenter les interactions, éventuellement inattendues, entre le flux et les modes d'écriture. Pour plus de ressources à ce sujet, vous pouvez vour référer aux <a href="#Ressources_externes">ressources externes</a> ainsi qu'à la section <a href="#Voir_aussi">Voir aussi</a> en fin de page.</p>

<h2 id="La_spécification_des_modes_d'écriture">La spécification des modes d'écriture</h2>

<p>Le module de spécification <em>CSS Writing Modes</em> de niveau 3 définit l'impact du mode d'écriture sur le flux. Voici l'introduction <a href="https://drafts.csswg.org/css-writing-modes-3/#text-flow">de la spécification </a>quant aux modes d'écriture :</p>

<blockquote>
<p>« En CSS, un mode d'écriture est défini par les propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}. Ce mode est principalement défini selon sa direction en ligne (<em>inline</em>) et selon sa direction de bloc. »</p>
</blockquote>

<p>La spécification définit la direction en ligne comme la direction selon laquelle le contenu est ordonné sur une ligne. Cela définit le début et la fin de la direction en ligne. Le début correspond à l'emplacement du début d'une phrase sur la ligne et la fin correspond à l'emplacement où la ligne de texte se coupe pour passer sur une nouvelle ligne.</p>

<p>La direction de bloc correspond à la direction selon laquelle les boîtes (ex. les paragraphes) s'empilent pour ce mode d'écriture. La propriété <code>writing-mode</code> contrôle la direction de bloc. Si on souhaite changer la page ou une partie de la page afin d'utiliser la direction <code>vertical-lr</code>, on pourra utiliser <code>writing-mode: vertical-lr</code> sur un élément. Cela aura pour effet de modifier la direction de bloc et, par conséquent, de modifier la direction en ligne.</p>

<p>Les modes d'écritures peuvent être utilisés pour respecter la façon d'écrire de certaines langues. Ils peuvent également être utilisés à des fins stylistiques (pour avoir un titre vertical par exemple).</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}</p>

<h2 id="La_propriété_writing-mode_et_le_flux_de_bloc">La propriété <code>writing-mode</code> et le flux de bloc</h2>

<p>La propriété {{cssxref("writing-mode")}} s'utilise avec les valeurs <code>horizontal-tb</code>, <code>vertical-rl</code> et <code>vertical-lr</code>. Ces valeurs contrôlent la direction selon laquelle les blocs se suivent sur la page. La valeur initiale de cette propriété est <code>horizontal-tb</code> ce qui signifie que l'axe de bloc est dirigé de haut en bas (<code>tb</code> pour <em>top to bottom</em> qui signifie de haut en bas) et que l'axe en ligne est horizontal. Les langues qui s'écrivent de gauche à droite telles que le français ou les langues qui s'écrivent de droite à gauche telles que l'arabe utilisent toutes <code>horizontal-tb</code>.</p>

<p>Voici un exemple avec <code>horizontal-tb</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}</p>

<p>La valeur <code>vertical-rl</code> permet d'avoir une direction de bloc de droite à gauche et une direction en ligne verticale, comme on peut le voir dans l'exemple qui suit.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}</p>

<p>Dans cet autre exemple, on voit comment se comporte la troisième valeur possible pour <code>writing-mode</code> : <code>vertical-lr</code>. On a une direction de bloc horizontal de la gauche vers la droite et une direction en ligne verticale.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}</p>

<h2 id="Les_boîtes_utilisant_un_mode_d'écriture_différent_de_leur_parent">Les boîtes utilisant un mode d'écriture différent de leur parent</h2>

<p>Lorsqu'une boîte imbriquée se voit affecter un mode d'écriture différent de son parent, une boîte en ligne s'affichera comme si elle avait <code>display: inline-block</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}</p>

<p>Une boîte de bloc créera un nouveau contexte de formatage. Ainsi, si son type d'affichage intérieur vaut <code>flow</code>, le type d'affichage calculé sera <code>flow-root</code>. On peut voir ce comportement dans l'exemple qui suit où la boîte affichée avec <code>horizontal-tb</code> contient un élément flottant contenu car son élément parent crée un nouveau contexte de formatage.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}</p>

<h2 id="Les_éléments_remplacés">Les éléments remplacés</h2>

<p>Les éléments remplacés tels que les images ne changeront pas d'oritentation selon la valeur de la propriété <code>writing-mode</code>. Toutefois, les éléments remplacés tels que les éléments de formulaires qui incluent du texte devraient utiliser le mode d'écriture courant.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}</p>

<h2 id="Les_propriétés_et_valeurs_logiques">Les propriétés et valeurs logiques</h2>

<p>Lorsqu'on travaille avec des modes d'écriture autres que <code>horizontal-tb</code>, la plupart des propriétés et des valeurs correspondant aux dimensions physiques de l'écran semblent étranges. Ainsi, si on a une boîte qui fait 100 pixels de large, avec <code>horizontal-tb</code> cette largeur sera selon la direction en ligne. Mais avec le mode <code>vertical-lr</code> cela contrôlera la direction de bloc car elle ne tourne pas avec le texte.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}</p>

<p>C'est pour cela que des propriétés <em>logiques</em> ont fait leur apparition comme {{cssxref("block-size")}} et {{cssxref("inline-size")}}. Si on fournit <code>inline-size: 100px</code> sur un bloc, peu importe qu'on ait un mode d'écriture horizontal ou vertical, <code>inline-size</code> correspondra à la direction en ligne quoi qu'il arrive.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}</p>

<p>Le module de spécification <a href="/en-US/docs/Web/CSS/CSS_Logical_Properties">CSS sur les propriétés et valeurs logiques</a> contient des versions logiques des propriétés contrôlant les marges, le remplissage (<em>padding</em>) et les bordures et d'autres correspondances pour les concepts qu'on manipulait habituellement avec des directions <em>physiques</em>.</p>

<h2 id="Résumé">Résumé</h2>

<p>Dans la plupart des cas, la disposition de flux fonctionne comme on s'y attend lorsqu'on change le mode d'écriture du document ou d'une de ses parties. Les modes d'écritures peuvent être utilisés pour écrire correctement une langue ou pour des aspects créatifs. CSS facilite cette utilisation en introduisant des propriétés et des valeurs logiques qui fonctionnent de façon homogène quel que soit le mode d'écriture. On peut alors créer des composants qui fonctionneront avec différents modes d'écriture.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Writing_Modes">Les modes d'écritures</a></li>
</ul>

<h2 id="Ressources_externes">Ressources externes</h2>

<ul>
 <li><em><a href="https://24ways.org/2016/css-writing-modes/">CSS Writing Modes (en anglais)</a></em> par Jen Simmons sur <em>24 Ways</em></li>
</ul>

<div>{{QuickLinksWithSubpages("/fr/docs/Web/CSS/CSS_Flow_Layout/")}}</div>
