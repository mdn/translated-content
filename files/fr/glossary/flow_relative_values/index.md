---
title: Valeurs relatives au flux
slug: Glossary/Flow_relative_values
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En CSS, les **valeurs relatives au flux** sont des mots-clés directionnels relatifs aux axes de bloc et en ligne d'un élément. Ces valeurs incluent `block-start`, `block-end`, `inline-start`, `inline-end`, `start` et `end`.

En CSS, les {{Glossary("physical properties", "propriétés physiques")}} définissent des positions basées sur des directions physiques et font référence à des côtés spécifiques d'un élément.

Les {{Glossary("logical properties", "propriétés logiques")}} CSS, quant à elles, définissent la mise en forme en fonction du mode d'écriture et de la direction du document plutôt que des dimensions physiques de la zone d'affichage (<i lang="en">viewport</i> en anglais). Les propriétés logiques sont relatives au flux du contenu et utilisent des mots-clés directionnels relatifs aux axes de bloc et en ligne.

## Direction de bloc

L'**axe de bloc** désigne l'axe qui définit l'ordre d'empilement des éléments dans une présentation en bloc. Il s'agit essentiellement de la direction le long de laquelle les blocs de contenu — comme les paragraphes ({{HTMLElement("p")}}), les titres et les divs ({{HTMLElement("div")}}) — sont disposés sur une page web. Cela correspond aussi à la **direction de bloc**. Dans les langues écrites de gauche à droite et de droite à gauche, la direction de bloc est la direction verticale du flux de contenu, allant de haut en bas.

Les directions **block-start** et **block-end** représentent respectivement le _bord de début_ et le _bord de fin_ du contenu le long de l'axe de bloc, ou les directions «&nbsp;de&nbsp;» et «&nbsp;vers&nbsp;», `block-start` étant l'équivalent de `top` et `block-end` l'équivalent de `bottom` dans les modes d'écriture horizontaux.

## Direction en ligne

L'**axe en ligne** est perpendiculaire à l'axe de bloc. L'axe en ligne représente la direction le long de laquelle le contenu en ligne comme le texte s'écoule à l'intérieur d'un bloc. Cela correspond aussi à la **direction en ligne**. Dans les modes d'écriture de gauche à droite, comme l'anglais, la direction en ligne est horizontale, de gauche à droite. Dans les langues de droite à gauche, comme l'arabe et l'hébreu, la direction en ligne est horizontale, de droite à gauche.

**Inline-start** et **inline-end** représentent respectivement le _bord de début_ et le _bord de fin_ du contenu le long de l'axe en ligne, les valeurs et propriétés `inline-start` et `inline-end` étant l'équivalent des propriétés et valeurs `left` et `right` dans les modes d'écriture horizontaux. Leur équivalence à `right` ou `left` dépend de la direction d'écriture. Par exemple, `inline-start` est équivalent à `left` dans les langues de gauche à droite et à `right` dans les langues de droite à gauche.

## Début et fin

Les effets d'une propriété CSS peuvent être unidimensionnels ou bidimensionnels. Par exemple, {{CSSxRef("text-align")}} concerne uniquement la direction d'inline du texte, donc est unidimensionnelle. Lorsqu'elles sont limitées contextuellement à une seule dimension, les valeurs relatives au flux sont abrégées en `start` ou `end`.

## Voir aussi

- [Module CSS propriétés et valeurs logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Concepts de base des propriétés et valeurs logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts)
