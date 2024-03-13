---
title: Explications quant aux contextes de formatage
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
---

{{CSSRef}}

Dans cet article, nous aborderons le concept des contextes de formatage. Ceux-ci peuvent être de différents types : contextes de formatage de bloc, contextes de formatage en ligne, contextes de formatage flexibles. Nous verrons les bases de leur comportement et comment les utiliser.

Sur une page web, tout s'inscrit dans un **contexte de formatage**, une zone qui a été définie pour être organisée d'une certaine façon. Un **contexte de formatage en bloc** (ou _block formatting context_ (BFC)) organisera ses éléments fils selon une disposition en bloc, un **contexte de formatage flexible** organisera ses éléments fils comme des objets flexibles, etc. Chaque contexte de formatage possède des règles spécifiques qui décrivent le comportement de la disposition pour ce contexte.

## Le contexte de formatage de bloc

L'élément `html` définit le contexte de formatage de bloc initial pour la page. Cela signifie que tous les éléments contenus dans `<html></html>` s'organisent selon le flux normal en suivant les règles de la disposition de bloc et en ligne. Les éléments qui participent à un contexte de formatage de bloc (_Block formatting context_ ou BFC en anglais) utilisent les règles décrites par le modèle de boîte CSS qui définit la façon dont les marges, bordures et zones de remplissage (_padding_) d'un élément interagissent avec les autres blocs du même contexte.

### Créer un nouveau contexte de formatage de bloc

L'élément {{HTMLElement("html")}} n'est pas le seul élément capable de créer un nouveau contexte de formatage de bloc. Des propriétés CSS peuvent également être utilisées afin de créer un contexte de formatage de bloc. Cela peut s'avérer utile car un nouveau contexte se comportera comme notre document : on aura une mini-disposition contenu dans la disposition principale. Un contexte de formatage de bloc contient tout ses éléments fils et ses descendants. Le flottement ({{cssxref("float")}}) ou le dégagement ({{cssxref("clear")}}) ne s'appliqueront qu'aux éléments d'un même contexte de formatage. Les marges ne [fusionneront](/fr/docs/Web/CSS/Modèle_de_boîte_CSS/Fusion_des_marges) que pour des éléments d'un même contexte formatage.

Au delà de l'élément racine du document (ici l'élément `html`), un nouveau contexte de formatage de bloc est créé dans les situations suivantes :

- Pour les éléments flottants ({{cssxref("float")}})
- Pour les éléments positionnés de façon absolue (y compris avec {{cssxref("position", "position: fixed", "#fixed")}} ou {{cssxref("position", "position: sticky", "#sticky")}})
- Pour les éléments avec {{cssxref("display", "display: inline-block", "#inline-block")}}
- Pour les cellules de tableau ou pour les éléments avec `display: table-cell`, y compris pour les cellules de tableau anonymes créées avec les propriétés `display: table-*`
- Les légendes de tableau ou les éléments avec `display: table-caption`
- Les éléments de blocs pour lesquels `overflow` a une valeur différente de `visible`
- `display: flow-root`
- Les éléments avec {{cssxref("contain", "contain: layout", "#layout")}}, `content` ou `strict`
- [Les élément flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Concepts_de_base_flexbox)
- [Les éléments de grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base)
- [Les conteneurs multi-colonnes](/fr/docs/Web/CSS/CSS_Columns/Concepts_base_multi-colonnes)
- Les éléments avec {{cssxref("column-span")}}: `all`

Prenons quelques exemples afin de voir les conséquences de la création d'un nouveau contexte de formatage de bloc.

Dans le prochain exemple, on a un élément flottant à l'intérieur d'un élément `<div>` où une bordure est appliquée. Le contenu de cet élément `div` flotte avec l'élément flottant. Le contenu de l'élément flottant étant plus grand que le contenu environnant, la bordure du `div` passe sous le contenu flottant. Comme expliqué dans [le guide sur les éléments appartenant ou non au flux](/fr/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow), l'élément flottant a été retiré du flux afin que l'arrière-plan et la bordure du `div` ne contiennent que le contenu et pas l'élément flottant.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

En créant un nouveau contexte, l'élément flottant serait contenu dans ce contexte. Par le passé, une méthode classique consistait à appliquer `overflow: auto` ou à utiliser d'autres valeurs que `overflow: visible`.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}

En utilisant `overflow: auto`, on crée un nouveau contexte de formatage de bloc qui contient l'élément flottant. Notre élément `div` devient en quelque sorte responsable de sa disposition interne et chaque élément enfant sera intégré dans cette disposition.

Toutefois, utiliser `overflow` pour créer un nouveau contexte de formatage peut poser problème car la propriété `overflow` est avant tout conçue pour indiquer au navigateur comment on souhaite gérer le contenu qui dépasse. On peut obtenir des situations où on obtient des barres de défilement indésirables ou des ombres rognées lorsqu'on utilise principalement cette propriété pour créer un nouveau contexte. De plus, cette méthode peut ne pas être évidente et lisible pour un autre développeur et complexifier la maintenance du code associé. Si vous devez utiliser cette méthode, mieux vaudra commenter le code pour l'expliquer.

### Créer un contexte de formatage de bloc explicite : utiliser `display: flow-root`

Une valeur plus récente de `display` permet de créer un nouveau contexte de formatage de bloc sans autre effet de bord indésirable. En utilisant `display: flow-root` sur le bloc englobant, on créera un nouveau contexte de formatage de bloc.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}

Ainsi, en utilisant `display: flow-root;` sur l'élément {{HTMLElement("div")}} tout son contenu contribue au contexte de formatage de bloc et l'élément flottant n'est plus éjecté en bas de l'élément.

Le nom de cette valeur, `flow-root`, prend son sens lorsqu'on voit que l'élément agit comme une racine (`root`) pour le nouveau contexte qui est créé.

## Un contexte de formatage en ligne

Les contextes de formatage en ligne existent au sein des autres contextes de formatage et peuvent être vus comme le contexte d'un paragraphe. Un paragraphe crée un contexte de formatage en ligne au sein duquel les éléments {{HTMLElement("strong")}}, {{HTMLElement("a")}} ou {{HTMLElement("span")}} entre autres, sont utilisés sur du texte.

Le modèle de boîte ne s'applique pas complètement aux objets qui s'inscrivent dans un contexte de formatage en ligne. Pour une ligne écrite avec un mode d'écriture horizontal, les remplissages (_padding_), bordures et marges seront appliqués à l'élément et écarteront le texte environnant à droite et ou à gauche. Le remplissage et bordures verticaux seront appliqués mais peuvent chevaucher le contenu au dessus et en dessous. Pour un contexte de formatage en ligne, les boîtes de ligne ne seront pas décalées par les bordures ou par le remplissage.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}

## Les autres contexte de formatage

Ce guide porte sur la disposition de flux et n'aborde pas tous les contextes de formatage possibles en dehors de ce type de disposition. Il est important de comprendre que n'importe quel contexte de formatage modifiera la façon dont ses éléments et son contenu sont organisés. Le comportement des autres contextes de formatage est décrit dans les modules de spécification respectifs et sur MDN.

## Résumé

Dans ce guide, nous avons approfondi les notions relatives aux contextes de formatage en ligne et de bloc. Dans le prochain guide, nous verrons [les interactions entre le flux normal et les différents modes d'écriture](/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_flux_et_modes_écriture).

## Voir aussi

- [Contexte de formatage de bloc (ou _Block Formatting Context_ (BFC) en anglais)](/fr/docs/Web/CSS/Block_formatting_context)
- [Modèle de formatage visuel](/fr/docs/Web/CSS/Modèle_de_mise_en_forme_visuelle)
- [Modèle de boîte CSS](/fr/docs/Web/CSS/Modèle_de_boîte_CSS)

{{QuickLinksWithSubpages("/fr/docs/Web/CSS/CSS_Flow_Layout/")}}
