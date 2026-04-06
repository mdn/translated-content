---
title: text-size-adjust
slug: Web/CSS/Reference/Properties/text-size-adjust
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/API/CSS) **`text-size-adjust`** contrôle l'algorithme d'agrandissement du texte utilisé sur certains smartphones et tablettes. Les autres navigateurs ignorent cette propriété.

Comme de nombreux sites n'ont pas été développés en pensant aux petits appareils, les navigateurs mobiles diffèrent des navigateurs de bureau dans la manière dont ils rendent les pages web. Au lieu de disposer les pages à la largeur de l'écran de l'appareil, ils les disposent en utilisant une {{Glossary("viewport", "zone d'affichage")}} beaucoup plus large, généralement 800 ou 1000 pixels. Pour ramener cette disposition très large à la taille réelle de l'appareil, ils affichent soit une partie du rendu, soit réduisent la zone d'affichage pour l'adapter.

Comme le texte réduit pour s'adapter à un écran mobile peut devenir très petit, de nombreux navigateurs mobiles appliquent un algorithme d'agrandissement du texte pour le rendre plus lisible. Lorsque un élément contenant du texte utilise 100% de la largeur de l'écran, l'algorithme augmente la taille du texte sans modifier la mise en page. La propriété `text-size-adjust` permet aux auteur·ice·s web de désactiver ou de modifier ce comportement, les pages conçues pour les petits écrans n'en ayant pas besoin.

## Syntaxe

```css
/* Valeur avec un mot-clé */
text-size-adjust: none;
text-size-adjust: auto;

/* Valeurs de type <percentage> */
text-size-adjust: 80%;

/* Valeurs globales */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: revert;
text-size-adjust: revert-layer;
text-size-adjust: unset;
```

La propriété `text-size-adjust` est définie comme `none`, `auto` ou un `<percentage>`.

### Valeurs

- `none`
  - : Désactive l'algorithme d'agrandissement du texte du navigateur.
- `auto`
  - : Active l'algorithme d'agrandissement du texte du navigateur. Cette valeur est utilisée pour annuler une valeur `none` précédemment définie avec CSS.
- `<percentage>`
  - : Active l'algorithme d'agrandissement du texte du navigateur, en spécifiant un pourcentage avec lequel augmenter la taille de la police.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de la désactivation

Comme indiqué ci-dessus, sur un site correctement conçu pour être réactif, le comportement `text-size-adjust` n'est pas nécessaire, les développeurs peuvent donc choisir de le désactiver en spécifiant une valeur de none&nbsp;:

```css
p {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La documentation d'Apple <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16) (2016)
- [Description du comportement de Google Chrome <sup>(angl.)</sup>](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit) (2014)
- [Description du comportement de Gecko <sup>(angl.)</sup>](https://dbaron.org/log/20111126-font-inflation) par L. David Baron (2011)
