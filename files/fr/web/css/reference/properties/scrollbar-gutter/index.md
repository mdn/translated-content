---
title: scrollbar-gutter
slug: Web/CSS/Reference/Properties/scrollbar-gutter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`scrollbar-gutter`** permet aux auteur·ice·s de réserver de l'espace pour la barre de défilement, évitant ainsi les changements de mise en page indésirables lorsque le contenu augmente, tout en évitant les éléments visuels inutiles lorsque le défilement n'est pas nécessaire.

_L'espace de la barre de défilement_ d'un élément est l'espace entre le bord intérieur de la bordure et le bord extérieur du padding, où le navigateur peut afficher une barre de défilement. Si aucune barre de défilement n'est présente, l'espace réservé sera peint comme une extension du padding.

Le navigateur détermine si des barres de défilement _classiques_ ou _superposées_ sont utilisées&nbsp;:

- Les barres de défilement classiques sont toujours placées dans un espace réservé, consommant de l'espace lorsqu'elles sont présentes.
- Les barres de défilement superposées sont placées au-dessus du contenu, pas dans un espace réservé, et sont généralement partiellement transparentes.

## Syntaxe

```css
/* Valeur initiale */
scrollbar-gutter: auto;

/* Mot-clé "stable", avec modificateur optionnel */
scrollbar-gutter: stable;
scrollbar-gutter: stable both-edges;

/* Valeurs globales */
scrollbar-gutter: inherit;
scrollbar-gutter: initial;
scrollbar-gutter: revert;
scrollbar-gutter: revert-layer;
scrollbar-gutter: unset;
```

### Valeurs

- `auto`
  - : La valeur initiale. Les barres de défilement classiques créent un espace réservé lorsque `overflow` est `scroll`, ou lorsque `overflow` est `auto` et que la boîte déborde. Les barres de défilement superposées ne consomment pas d'espace.
- `stable`
  - : Lors de l'utilisation de barres de défilement classiques, l'espace réservé sera présent si `overflow` est `auto`, `scroll` ou `hidden`, même si la boîte ne déborde pas. Lors de l'utilisation de barres de défilement superposées, l'espace réservé ne sera pas présent.
- `both-edges`
  - : Si un espace réservé serait présent sur l'un des bords de début/fin en ligne de la boîte, un autre sera également présent sur le bord opposé.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Les exemples ci-dessous montrent comment les différentes valeurs de la propriété `scrollbar-gutter` affecteraient un élément `div` défilable (`.container`) contenant un ou plusieurs paragraphes.

> [!NOTE]
> Dans les images des exemples, les paramètres système de l'utilisateur·ice sont définis sur des barres de défilement classiques (toujours affichées).

### Exemple 1

Pour éviter les changements de mise en page inutiles lorsque le contenu augmente ou diminue et que la barre de défilement apparaît ou disparaît, un espace est réservé pour celle-ci.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Un contenant un élément div avec un paragraphe de texte à l'intérieur et un espace à droite où se trouve la barre de défilement](stable-no-scroll.png)

### Exemple 2

Ajoutez un espacement symétrique des deux côtés de la boîte afin que le contenu soit centré&nbsp;:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Un contenant un élément div avec un paragraphe de texte à l'intérieur, un espace à droite où se trouve la barre de défilement et un espace vide correspondant à gauche](stable-both-edges.png)

### Exemple 3

Alignez le contenu d'un élément non défilable et d'un élément défilable adjacent&nbsp;:
Cet exemple montre deux divs côte à côte. Celui de gauche n'a pas de défilement, mais celui de droite en a. Les deux ont `scrollbar-gutter` appliqué, ce qui réserve également de l'espace pour le div de gauche qui n'a pas de contenu défilable. C'est une bonne technique à utiliser pour maintenir la largeur du contenu cohérente.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Deux divs adjacents contenant du texte, tous deux avec un espace pour une barre de défilement](side-by-side.png)

### Barres de défilement superposées

À titre de référence, cette image montre le même div que ci-dessus, mais avec les paramètres système de l'utilisateur·ice définis sur des barres de défilement superposées. Notez ici que la barre de défilement ne s'affichera que lorsque l'utilisateur·ice fait défiler et au-dessus du contenu, donc aucun espace n'est réservé pour elle et la propriété `scrollbar-gutter` n'a aucun effet.

![Un div avec du texte, pas de barre de défilement visible](for-ref-no-scroll.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [de mise en forme des barres de défilement CSS](/fr/docs/Web/CSS/Guides/Scrollbars_styling)
- La propriété {{CSSxRef("overflow")}}
- La propriété {{CSSxRef("scrollbar-width")}}
- La propriété {{CSSxRef("scrollbar-color")}}
