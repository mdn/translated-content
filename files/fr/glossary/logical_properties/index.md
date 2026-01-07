---
title: Propriétés logiques
slug: Glossary/Logical_properties
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les **propriétés logiques** CSS offrent un moyen de disposer le contenu en fonction du mode d'écriture et de la direction du document, plutôt que des dimensions physiques de la zone d'affichage (<i lang="en">viewport</i> en anglais). Cela permet des conceptions plus flexibles et plus faciles à maintenir, en particulier pour les sites prenant en charge plusieurs langues.

Alors que les {{Glossary("physical properties", "propriétés physiques")}}, comme {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("border-bottom-left-radius")}}, définissent des positions et des caractéristiques selon des directions physiques et font référence à des côtés spécifiques d'un élément, les propriétés logiques telles que {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-inline-end")}}, {{CSSxRef("padding-block-end")}} et {{CSSxRef("border-end-end-radius")}} utilisent des mots-clés directionnels logiques relatifs au flux du contenu selon les axes bloc et en ligne.

## Direction bloc

L'**axe bloc** désigne l'axe qui définit l'ordre d'empilement des éléments dans une disposition en bloc. Il s'agit essentiellement de la direction selon laquelle les blocs de contenu — comme les paragraphes ({{HTMLElement("p")}}), les titres et les divs ({{HTMLElement("div")}}) — sont disposés sur une page web. Cela correspond aussi à la **direction bloc**. Dans les langues s'écrivant de gauche à droite, la direction bloc est la direction verticale du flux de contenu, allant du haut vers le bas.

Les directions **block-start** et **block-end** représentent respectivement le _bord de début_ et le _bord de fin_ du contenu le long de l'axe bloc, ou les directions «&nbsp;de&nbsp;» et «&nbsp;vers&nbsp;», `block-start` étant l'équivalent de `top` et `block-end` l'équivalent de `bottom` dans les modes d'écriture horizontaux.

## Direction en ligne

L'**axe en ligne** est perpendiculaire à l'axe bloc. L'axe en ligne représente la direction selon laquelle le contenu en ligne, comme le texte, s'écoule à l'intérieur d'un bloc. Cela correspond aussi à la **direction en ligne**. Dans les modes d'écriture de gauche à droite, comme l'anglais, la direction en ligne est horizontale, de gauche à droite. Dans les langues de droite à gauche, comme l'arabe et l'hébreu, la direction en ligne est horizontale, de droite à gauche.

**inline-start** et **inline-end** représentent respectivement le _bord de début_ et le _bord de fin_ du contenu le long de l'axe en ligne, les valeurs et propriétés `inline-start` et `inline-end` étant équivalentes aux propriétés et valeurs `left` et `right` dans les modes d'écriture horizontaux. L'équivalence avec `right` ou `left` dépend de la direction d'écriture — par exemple, `inline-start` correspond à `left` dans les langues de gauche à droite et à `right` dans les langues de droite à gauche.

## Voir aussi

- Le module [des propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
