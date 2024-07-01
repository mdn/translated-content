---
title: Disposition de bloc et en ligne avec le flux normal
slug: Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
---

{{CSSRef}}

Dans ce guide, nous verrons le comportement des éléments de bloc et des éléments en ligne lorsqu'ils sont placés dans le flux normal.

Le flux normal est défini par [la spécification CSS 2.1](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) qui explique comment les boîtes du flux normal s'inscrivent dans le contexte de formatage. Les boîtes peuvent être de bloc (_block_) ou en ligne (_inline_) mais pas les deux à la fois. Les boîtes de bloc contribuent au contexte de formatage des blocs et les boîtes en ligne contribuent au contexte de formatage en ligne.

Le comportement des éléments qui ont un contexte de formatage de bloc ou en ligne est également défini dans cette spécification. Pour les éléments avec un contexte de formatage de bloc, voici ce qui est indiqué dans la spécification :

> « Dans un contexte de formatage de bloc, les boîtes sont disposées l'une après l'autre, verticalement, en démarrant en haut du bloc englobant. La distance verticale entre deux boîtes voisines est déterminée par les propriétés relatives aux marges. Les marges verticales fusionnent pour deux boîtes de bloc voisines au sein d'un contexte de formatage de bloc.
>
> Dans un contexte de formatage de bloc, chaque bord gauche de chaque boîte touche le bord gauche du bloc englobant (pour les documents écrits de droite à gauche, ce sont les bords droits qui coïncident). » - 9.4.1

Quant aux éléments du contexte de formatage en ligne :

> « Dans un contexte de formatage en ligne, les boîtes sont disposées horizontalement les unes après les autres, en démarrant en haut du bloc englobant. Les marges, bordures, espaces de remplissage (_padding_) entre ces boîtes sont respectées. L'alignement vertical des boîtes peut varier (alignement du bas et du haut ou alignement des lignes de base du texte). La zone rectangulaire contenant les boîtes qui forment une ligne est appelée une "boîte de ligne". » - 9.4.2

On notera que la spécification CSS 2.1 décrit des documents dont le mode d'écriture est horizontal, allant de haut en bas. C'est notamment le cas avec la description de la distance verticale entre les boîtes de bloc. Le comportement des éléments de bloc et en ligne est donc le même lorsqu'on a un mode d'écriture vertical. Nous verrons cela dans un article suivant.

## Les éléments qui participent à un contexte de formatage de bloc

Les éléments de bloc organisés avec un mode d'écriture horizontal (un document en français par exemple) sont disposés verticalement les uns au dessus des autres.

![](mdn-horizontal.png)

Avec un mode d'écriture vertical, les boîtes seraient organisées horizontalement.

![](mdn-vertical.png)

Dans la suite de ce guide, nous prendrons l'hypothèse d'un mode d'écriture horizontal. Toutefois, tout ce qui est décrit fonctionne de la même façon pour un mode d'écriture vertical.

Comme indiqué dans la spécification, les marges entre deux boîtes de bloc permettent de créer une séparation entre les éléments. On peut voir ceci dans un exemple simple avec deux paragraphes auxquels on ajoute une bordure. La feuille de style par défaut du navigateur ajoute un espace entre les paragraphes en ajoutant une marge en haut et en bas.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow.html", '100%', 700)}}

Si on définit explicitement des marges nulles sur les paragraphes, les bordures se toucheront.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-margin-zero.html", '100%', 700)}}

Par défaut, les éléments de bloc consomment tout l'espace disponible sur l'axe en ligne. Ainsi, les paragraphes « s'étalent » horizontalement autant qu'ils le peuvent au sein du bloc englobant. Si on fixait leur longueur afin que deux paragraphes puissent tenir horizontalement, ils seraient tout de même l'un au dessus de l'autre. Chaque boîte de bloc commencera au début de l'axe de bloc du bloc englobant.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-width.html", '100%', 700)}}

### La fusion des marges

La spécification indique que les marges verticales entre chaque éléments de bloc _fusionnent_. Cela signifie que si un élément avec une marge en haut suit directement un élément avec une marge en bas, plutôt que la marge résultante soit la somme des deux marges, on aura une fusion des marges et ce sera uniquement la plus grande des marges qui sera appliquée.

Dans l'exemple suivant, les paragraphes ont une marge en haut qui mesure 20 pixels et une marge en bas qui mesure 40 pixels. La taille de la marge entre les deux paragraphes est donc de `40px` car la plus petite est « fusionnée » avec la plus grande.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-collapsing.html", '100%', 500)}}

Pour en savoir plus à propos de la fusion des marges, vous pouvez lire [l'article dédié à la fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

> **Note :** Si vous n'êtes pas certain⋅e que la fusion des marges a lieu, vous pouvez utiliser les outils de développement de votre navigateur afin de voir la valeur réellement utilisée pour les marges.
>
> ![](box-model.png)

## Les éléments qui participent à un contexte de formatage en ligne

Les éléments en ligne sont affichés les uns à la suite des autres selon la direction avec laquelle les phrases sont écrites pour ce mode d'écriture. Ces boîtes en ligne se suivent les unes après les autres. S'il n'y a pas suffisamment d'espace dans la boîte englobante, une boîte en ligne pourra être scindée pour passer à la ligne. Les lignes ainsi créées sont appelées des boîtes de ligne. Comme la plupart des objets en CSS, les éléments en ligne disposent bien d'une boîte (qu'on oublie parfois).

Dans l'exemple suivant on a trois boîtes en ligne créées par un paragraphe avec un élément {{HTMLElement("strong")}} à l'intérieur.

{{EmbedGHLiveSample("css-examples/flow/block-inline/inline.html", '100%', 500)}}

Les boîtes autour des mots, avant et après l'élément {{HTMLElement("strong")}} sont qualifiées de boîtes _anonymes_. Ce sont des boîtes qui permettent que tout soit contenu dans une boîte mais on ne peut pas cibler ces boîtes spécifiquement.

La taille de la boîte de la ligne sur l'axe orthogonal à l'axe de lecture est définie avec la taille de la plus grande boîte qu'elle contient. Dans l'exemple suivant, on a un élément {{HTMLElement("strong")}} qui a une taille de 300% et c'est donc son contenu qui détermine la hauteur de la boîte de ligne pour cette ligne.

{{EmbedGHLiveSample("css-examples/flow/block-inline/line-box.html", '100%', 500)}}

Pour en savoir plus sur le comportement des boîtes en ligne et des boîtes de bloc, vous pouvez consulter [le guide sur le modèle de formatage visuel](/fr/docs/Web/CSS/Visual_formatting_model).

## La propriété `display` et la disposition de flux

En plus des règles existantes en CSS 2.1, les spécifications CSS ultérieures décrivent plus en détail le comportement des boîtes en ligne et des boîtes en bloc. La propriété `display` définit la façon dont une boîte, et celles qu'elle contient, se comporte. Avec la spécification _CSS Display Model Level 3_, on en apprend plus sur la façon dont la propriété `display` modifie comportement des boîtes et des boîtes qu'elles génèrent.

Le type d'affichage d'un élément définit deux choses :

- le type d'affichage extérieur, qui décrit comment la boîte s'affiche au sein des éléments du même contexte de formatage
- le type d'affichage intérieur comment les boîtes situées à l'intérieur de cet élément doivent se comporter

Dans l'exemple suivant, on a un élément {{HTMLElement("div")}} sur lequel on a appliqué `display: flex`. Le conteneur flexible se comporte comme un élément de bloc : il s'affiche sur une nouvelle ligne et occupe tout l'espace du bloc englobant dans l'axe en ligne. Aussi, le type d'affichage extérieur vaut `block`.

Les objets flexibles, à l'intérieur, contribuent à un contexte de formatage flexible car leur élément parent a `display: flex`. Aussi, le type d'affichage intérieur vaut `flex` et un nouveau contexte de formatage flexible est mis en place pour les éléments enfants.

{{EmbedGHLiveSample("css-examples/flow/block-inline/flex.html", '100%', 500)}}

On peut envisager chaque boîte CSS sous cet angle. La boîte possède un type d'affichage extérieur et sait ainsi comment se comporter avec les boîtes qui l'entourent. Ensuite, la boîte possède un type d'affichage intérieur qui permet d'organiser les éléments qu'elle contient. Ces éléments, à leur tour, disposent d'un type d'affichage extérieur et d'un type d'affichage intérieur. Dans l'exemple précédent, les objets flexibles ont des boîtes flexibles. Le type d'affichage extérieur est dicté par le contexte de formatage flexible. En revanche, leur type d'affichage intérieur est `flow` et leurs éléments enfants participeront à un flux normal. Les éléments enfants s'organiseront comme des éléments en ligne ou de bloc sauf si leur type d'affichage est explicitement modifié.

Le concept de type d'affichage extérieur et intérieur est important car il nous indique qu'un conteneur utilisant Flexbox (`display: flex`) ou les grilles CSS (`display: grid`) continue de participer à une disposition bloc/en ligne du fait du type d'affichage extérieur qui est `block`.

### Modifier le contexte de formatage auquel un élément participe

Les navigateurs affichent les éléments en bloc ou ligne selon ce qui est pertinent pour chaque élément. Ainsi, l'élément {{HTMLElement("strong")}}, utilisé pour mettre en avant un mot (souvent alors affiché en gras), ne crée pas de nouvelle ligne pour afficher son contenu : ce n'est pas un élément de bloc mais un élément en ligne.

Si on souhaitait afficher tous les éléments {{HTMLElement("strong")}} comme des éléments de bloc, il suffirait d'ajouter la règle `display: block` en ciblant les éléments `<strong>`. Cela signifie qu'on peut toujours écrire un code HTML qui soit le plus sémantique possible pour le contenu puis modifier la façon dont le document est affiché grâce à CSS.

{{EmbedGHLiveSample("css-examples/flow/block-inline/change-formatting.html", '100%', 500)}}

## Résumé

Dans ce guide, nous avons vu comment les éléments étaient affichés dans le flux normal, comme éléments de bloc ou comme éléments en ligne. Les éléments HTML s'afficheront par défaut de façon lisible sans CSS. En comprenant comment fonctionne le flux normal, vous comprendrez comment apporter les modifications nécessaires pour parvenir à la disposition désirée.

## Voir aussi

- [Le module de spécification _CSS Basic Box Model_ qui définit les propriétés de base pour le modèle de boîte](/fr/docs/Web/CSS/CSS_Box_Model)
- [Apprendre - le fonctionnement du flux normal](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Les éléments HTML en ligne](/fr/docs/Web/HTML/Inline_elements)
- [Les éléments HTML de bloc](/fr/docs/Web/HTML/Block-level_elements)
