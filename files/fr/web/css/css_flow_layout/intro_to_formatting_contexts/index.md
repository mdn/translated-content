---
title: Explications quant aux contextes de formatage
slug: Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts
original_slug: Web/CSS/CSS_Flow_Layout/Explications_contextes_formatage
---
<div>{{CSSRef}}</div>

<p>Dans cet article, nous aborderons le concept des contextes de formatage. Ceux-ci peuvent être de dfiférents types : contextes de formatage de bloc, contextes de formatage en ligne, contextes de formatage flexibles. Nous verrons les bases de leur comportement et comment les utiliser.</p>

<p>Sur une page web, tout s'inscrit dans un <strong>contexte de formatage</strong>, une zone qui a été définie pour être organisée d'une certaine façon. Un <strong>contexte de formatage en bloc</strong> (ou <em>block formatting context</em> (<abbr title="Block Formatting Context">BFC</abbr>)) organisera ses éléments fils selon une disposition en bloc, un <strong>contexte de formatage flexible</strong> organisera ses éléments fils comme des objets flexibles, etc. Chaque contexte de formatage possède des règles spécifiques qui décrivent le comportement de la disposition pour ce contexte.</p>

<h2 id="Le_contexte_de_formatage_de_bloc">Le contexte de formatage de bloc</h2>

<p>L'élément <code>html</code> définit le contexte de formatage de bloc initial pour la page. Cela signifie que tous les éléments contenus dans <code>&lt;html&gt;&lt;/html&gt;</code> s'organisent selon le flux normal en suivant les règles de la disposition de bloc et en ligne. Les élméents qui participent à un contexte de formatage de bloc (<em>Block formatting context</em> ou BFC en anglais) utilisent les règles décrites par le modèle de boîte CSS qui définit la façon dont les marges, bordures et zones de remplissage (<em>padding</em>) d'un élément interagissent avec les autres blocs du même contexte.</p>

<h3 id="Créer_un_nouveau_contexte_de_formatage_de_bloc">Créer un nouveau contexte de formatage de bloc</h3>

<p>L'élément {{HTMLElement("html")}} n'est pas le seul élément capable de créer un nouveau contexte de formatage de bloc. Des propriétés CSS peuvent également être utilisées afin de créer un contexte de formatage de bloc. Cela peut s'avérer utile car un nouveau contexte se comportera comme notre document : on aura une mini-disposition contenu dans la disposition principale. Un contexte de formatage de bloc contient tout ses éléments fils et ses descendants. Le flottement ({{cssxref("float")}}) ou le dégagement ({{cssxref("clear")}}) ne s'appliqueront qu'aux éléments d'un même contexte de formatage. Les marges ne <a href="/fr/docs/Web/CSS/Modèle_de_boîte_CSS/Fusion_des_marges">fusionneront</a> que pour des éléments d'un même contexte formatage.</p>

<p>Au delà de l'élément racine du document (ici l'élément <code>html</code>), un nouveau contexte de formatage de bloc est créé dans les situations suivantes :</p>

<ul>
 <li>Pour les éléments flottants ({{cssxref("float")}})</li>
 <li>Pour les éléments positionnés de façon absolue (y compris avec {{cssxref("position", "position: fixed", "#fixed")}} ou {{cssxref("position", "position: sticky", "#sticky")}})</li>
 <li>Pour les éléments avec {{cssxref("display", "display: inline-block", "#inline-block")}}</li>
 <li>Pour les cellules de tableau ou pour les éléments avec <code>display: table-cell</code>, y compris pour les cellules de tableau anonymes créées avec les propriétés <code>display: table-*</code></li>
 <li>Les légendes de tableau ou les éléments avec <code>display: table-caption</code></li>
 <li>Les éléments de blocs pour lesquels <code>overflow</code> a une valeur différente de <code>visible</code></li>
 <li><code>display: flow-root</code></li>
 <li>Les éléments avec {{cssxref("contain", "contain: layout", "#layout")}}, <code>content</code> ou <code>strict</code></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Concepts_de_base_flexbox">Les élément flexibles</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base">Les éléments de grille</a></li>
 <li><a href="fr/docs/Web/CSS/CSS_Columns/Concepts_base_multi-colonnes">Les conteneurs multi-colonnes</a></li>
 <li>Les éléments avec {{cssxref("column-span")}}:<code>all</code></li>
</ul>

<p>Prenons quelques exemples afin de voir les conséquences de la création d'un nouveau contexte de formatage de bloc.</p>

<p>Dans le prochain exemple, on a un élément flottant à l'intérieur d'un élément <code>&lt;div&gt;</code> où une bordure est appliquée. Le contenu de cet élément <code>div</code> flotte avec l'élément flottant. Le contenu de l'élément flottant étant plus grand que le contenu environnant, la bordure du <code>div</code> passe sur le contenu flottant. Comme expliqué dans <a href="/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow">le guide sur les éléments appartenant ou non au flux</a>, l'élément flottant a été retiré du flux afin que l'arrière-plan et la bordure du <code>div</code> ne contienne que le contenu et pas l'élément flottant.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}</p>

<p>En créant un nouveau contexte, l'élément flottant serait contenu dans ce contexte. Par le passé, une méthode classique consistait à appliquer <code>overflow: auto</code> ou à utiliser d'autres valeurs que <code>overflow: visible</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}</p>

<p>En utilisant <code>overflow: auto</code>, on crée un nouveau contexte de formatage de bloc qui contient l'élément flottant. Notre élément <code>div</code> devient en quelque sorte responsable de sa disposition interne et chaque élément enfant sera intégré dans cette disposition.</p>

<p>Toutefois, utiliser <code>overflow</code> pour créer un nouveau contexte de formatage peut poser problème car la propriété <code>overflow</code> est avant tout conçue pour indiquer au navigateur comment on souhaite gérer le contenu qui dépasse. On peut obtenir des situations où on obtient des barres de défilement indésirables ou des ombres rognées lorsqu'on utilise principalement cette propriété pour créer un nouveau contexte. De plus, cette méthode peut ne pas être évidente et lisible pour un autre développeur et complexifier la maintenance du code associé. Si vous devez utiliser cette méthode, mieux vaudra commenter le code pour l'expliquer.</p>

<h3 id="Créer_un_contexte_de_formatage_de_bloc_explicite_utiliser_display_flow-root">Créer un contexte de formatage de bloc explicite : utiliser <code>display: flow-root</code></h3>

<p>Une valeur plus récente de <code>display</code> permet de créer un nouveau contexte de formatage de bloc sans autre effet de bord indésirable. En utilisant <code>display: flow-root</code> sur le bloc englobant, on créera un nouveau contexte de formatage de bloc.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}</p>

<p>Ainsi, en utilisant <code>display: flow-root;</code> sur l'élément {{HTMLElement("div")}} tout son contenu contribue au contexte de formatage de bloc et l'élément flottant n'est plus éjecté en bas de l'élément.</p>

<p>Le nom de cette valeur, <code>flow-root</code>, prend son sens lorsqu'on voit que l'élément agit comme une racine (<code>root</code>) pour le nouveau contexte qui est créé.</p>

<h2 id="Un_contexte_de_formatage_en_ligne">Un contexte de formatage en ligne</h2>

<p>Les contextes de formatage en ligne existent au sein des autres contextes de formatage et peuvent être vus comme le contexte d'un paragraphe. Un paragraphe crée un contexte de formatage en ligne au sein duquel les éléments {{HTMLElement("strong")}}, {{HTMLElement("a")}} ou {{HTMLElement("span")}} entre autres, sont utilisés sur du texte.</p>

<p>Le modèle de boîte ne s'applique pas complètement aux objets qui s'inscrivent dans un contexte de formatage en ligne. Pour une ligne écrite avec un mode d'écriture horizontal, les remplissages (<em>padding</em>), bordures et marges seront appliqués à l'élément et écarteront le texte environnant à droite et ou à gauche. Le remplissage et bordures verticaux seront appliqués mais peuvent chevaucher le contenu au dessus et en dessous. Pour un contexte de formatage en ligne, les boîtes de ligne ne seront pas décalées par les bordures ou par le remplissage.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}</p>

<h2 id="Les_autres_contexte_de_formatage">Les autres contexte de formatage</h2>

<p>Ce guide porte sur la disposition de flux et n'aborde pas tous les contextes de formatage possibles en dehors de ce type de disposition. Il est important de comprendre que n'importe quel contexte de formatage modifiera la façon dont ses éléments et son contenu sont organisés. Le comportement des autres contextes de formatage est décrit dans les modules de spécification respectifs et sur MDN.</p>

<h2 id="Résumé">Résumé</h2>

<p>Dans ce guide, nous avons approfondi les notions relatives aux contextes de formatage en ligne et de bloc. Dans le prochain guide, nous verrons <a href="/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_flux_et_modes_écriture">les interactions entre le flux normal et les différents modes d'écriture</a>.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Block_formatting_context">Contexte de formatage de bloc (ou <em>Block Formatting Context</em> (BFC) en anglais)</a></li>
 <li><a href="/fr/docs/Web/CSS/Modèle_de_mise_en_forme_visuelle">Modèle de formatage visuel</a></li>
 <li><a href="/fr/docs/Web/CSS/Modèle_de_boîte_CSS">Modèle de boîte CSS</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/fr/docs/Web/CSS/CSS_Flow_Layout/")}}</div>
