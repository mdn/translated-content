---
title: CSS Flow Layout
slug: Web/CSS/Guides/Display/Flow_layout
original_slug: Web/CSS/CSS_display/Flow_layout
---

{{CSSRef}}

Le _flux normal_ ou « disposition en flux » (_Flow Layout_) correspond à la façon dont les éléments de bloc et les éléments en ligne sont disposés avant tout changement apporté à leur disposition. Lorsqu'un élément est retiré du _flux_, il est traité indépendamment.

Avec un flux normal, les **éléments en ligne (_inline elements_)** sont affichés dans la direction « en incise », c'est-à-dire dans le sens dans lequel les mots sont écrits selon [le mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes) du document. Les **éléments de bloc (_block elements_)** sont affichés les uns après les autres, à la façon des paragraphes selon le mode d'écriture du document.

Par exemple, pour un document français, les éléments en ligne sont affichés les uns à la suite des autres de gauche à droite et les éléments de bloc sont affichés les uns en dessous des autres.

## Exemple simple

Dans l'exemple suivant, on peut voir des boîtes de bloc et des boîtes en ligne. Les deux éléments correspondants aux paragraphes avec des bordures vertes sont des éléments de bloc. Ces deux éléments s'affichent l'un en dessous de l'autre.

La première phrase contient également un élément {{HTMLElement("span")}} avec un arrière-plan bleu. C'est un élément en ligne qui s'affiche donc en incise de la phrase.

{{EmbedGHLiveSample("css-examples/layout/normal-flow.html", '100%', 720)}}

## Guides

- [Les dispositions de bloc et en ligne dans le flux normal](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [La disposition en flux et les dépassements](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [La disposition en flux et les modes d'écriture](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Explications sur les contextes de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Être ou non dans le flux](/fr/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

## Référence

### Termes du glossaire

- [Bloc (CSS)](/fr/docs/Glossary/Block/CSS)
