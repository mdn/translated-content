---
title: Héritage
slug: Web/CSS/inheritance
tags:
  - CSS
  - Guide
  - Reference
translation_of: Web/CSS/inheritance
original_slug: Web/CSS/Héritage
---
{{CSSRef}}

Pour [chaque propriété CSS](fr/R%c3%a9f%c3%a9rence_CSS), la spécification indique si, par défaut, cette propriété est héritée ou non. Cela permet de définir le comportement qu'on observera lorsqu'aucune valeur n'est spécifiée pour une propriété pour un élément donné.

## Propriétés héritées

Lorsqu'aucune valeur n'est spécifiée pour une _propriété héritée_ sur un élément, l'élément récupère la [valeur calculée](/fr/docs/Web/CSS/Valeur_calculée) de cette propriété appliquée à son élément parent. Seul l'élément racine du document possède [la valeur initiale](/fr/docs/Web/CSS/Valeur_initiale) donnée via la spécification.

Un exemple caractéristique d'une propriété héritée est la propriété {{cssxref("color")}}. En définissant la règle de style :

```css
 p { color: green; }
```

Sur le fragment HTML suivant :

```html
 <p>Ce paragraphe contient du <em>texte mis en emphase text</em>.</p>
```

On obtient le résultat suivant :

{{EmbedLiveSample("Propriétés_héritées")}}

Les mots « texte mis en emphase » apparaîtront en vert, car l'élément `em` a hérité de la valeur de la propriété {{cssxref("color")}} de l'élément `p`. Il n'obtient pas la valeur initiale de la propriété (qui est la couleur utilisée par l'élément racine lorsque la page ne spécifie aucune couleur).

## Propriétés non héritées

Lorsqu'aucune valeur n'est définie pour un élément, pour une _propriété non héritée_, l'élément prendra [la valeur initiale](/fr/docs/Web/CSS/Valeur_initiale) de cette propriété (telle qu'indiquée par la spécification).

Un exemple caractéristique de propriété non héritée est la propriété {{cssxref("border")}}. En définissant la règle de style :

```css
 p { border: medium solid; }
```

Sur le fragment de code HTML :

```html
 <p>Ce paragraphe contient du <em>texte mis en emphase text</em>.</p>
```

On obtient le résultat suivant :

{{EmbedLiveSample("Propriétés_non_héritées")}}

Les mots « texte mis en emphase » n'auront pas de bordure (car la valeur initiale de la propriété {{cssxref("border-style") }} est `none`).

## Notes

Le mot-clé {{cssxref("inherit") }} permet aux auteurs de pages web de définir l'héritage de façon explicite. Il fonctionne aussi bien pour les propriétés héritées que pour celles qui ne sont pas héritées.

Il est possible de contrôler l'héritage de toutes les propriétés grâce à la propriété raccourcie {{cssxref("all")}} afin d'appliquer la valeur indiquée sur toutes les propriétés.

Ainsi :

```css
font: {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

permettra d'annuler la mise en forme de l'agent utilisateur pour l'ensemble des propriétés sauf si celles-ci sont fournies via une feuille de styles de l'utilisateur (qui sont alors utilisées). Ensuite, la taille du texte est doublée et celui-ci est mis en gras.

## Voir aussi

- {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("unset")}} et {{cssxref("revert")}}
- [La notion de valeur calculée](/fr/docs/Web/CSS/Valeur_calculée)
- [La notion de valeur initiale](/fr/docs/Web/CSS/Valeur_initiale)
