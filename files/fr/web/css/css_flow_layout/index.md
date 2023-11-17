---
title: CSS Flow Layout
slug: Web/CSS/CSS_flow_layout
---

{{CSSRef}}

Le _flux normal_ ou « disposition en flux » (_Flow Layout_) correspond à la façon dont les éléments de bloc et les éléments en ligne sont disposés avant tout changement apporté à leur disposition. Lorsqu'un élément est retiré du _flux_, il est traité indépendamment.

Avec un flux normal, les **éléments en ligne (_inline elements_)** sont affichés dans la direction « en incise », c'est-à-dire dans le sens dans lequel les mots sont écrits selon [le mode d'écriture](/fr/docs/Web/CSS/CSS_Writing_Modes) du document. Les **éléments de bloc (_block elements_)** sont affichés les uns après les autres, à la façon des paragraphes selon le mode d'écriture du document.

Par exemple, pour un document français, les éléments en ligne sont affichés les uns à la suite des autres de gauche à droite et les éléments de bloc sont affichés les uns en dessous des autres.

## Exemple simple

Dans l'exemple suivant, on peut voir des boîtes de bloc et des boîtes en ligne. Les deux éléments correspondants aux paragraphes avec des bordures vertes sont des éléments de bloc. Ces deux éléments s'affichent l'un en dessous de l'autre.

La première phrase contient également un élément {{HTMLElement("span")}} avec un arrière-plan bleu. C'est un élément en ligne qui s'affiche donc en incise de la phrase.

{{EmbedGHLiveSample("css-examples/layout/normal-flow.html", '100%', 720)}}

## Guides

- [Les dispositions de bloc et en ligne dans le flux normal](/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_de_bloc_en_ligne_avec_flux_normal)
- [La disposition en flux et les dépassements](/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_flux_et_dépassement)
- [La disposition en flux et les modes d'écriture](/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_flux_et_modes_écriture)
- [Explications sur les contextes de formatage](/fr/docs/Web/CSS/CSS_Flow_Layout/Explications_contextes_formatage)
- [Être ou non dans le flux](/fr/docs/Web/CSS/CSS_Flow_Layout/Dans_le_flux_ou_en_dehors)

## Référence

### Termes du glossaire

- [Bloc (CSS)](</fr/docs/Glossary/Block/Block_(CSS)>)
