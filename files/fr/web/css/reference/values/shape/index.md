---
title: <shape>
slug: Web/CSS/Reference/Values/shape
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{Deprecated_Header}}

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<shape>`** définit la forme précise d'une région. La région représente la partie d'un élément à laquelle s'applique la propriété {{CSSxRef("clip")}}.

> [!NOTE]
> `<shape>` et `rect()` fonctionnent en conjonction avec {{CSSxRef("clip")}}, qui est obsolète au profit de {{CSSxRef("clip-path")}}. Si possible, utilisez `clip-path` et le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}} à la place.

## Syntaxe

Les valeurs de type `<shape>` sont construites grâce à la notation fonctionnelle `rect()` qui permet de créer une zone en forme de rectangle.

`rect()`

```css
rect(top, right, bottom, left)
```

### Valeurs

![Un schéma montrant top, right, bottom et left, comme décrit ci‑dessous. Ces valeurs définissent la forme du rectangle. Le coin supérieur gauche est défini par les valeurs top et left. Le coin inférieur droit est défini par les valeurs bottom et right.](rect.png)

- _top_
  - : Une longueur ({{CSSxRef("length")}}) qui représente le décalage pour le côté haut du rectangle par rapport au bord supérieur de la boîte de l'élément.
- _right_
  - : Une longueur ({{CSSxRef("length")}}) qui représente le décalage pour le côté droit du rectangle par rapport au bord gauche de la boîte de l'élément.
- _bottom_
  - : Une longueur ({{CSSxRef("length")}}) qui représente le décalage pour le côté bas du rectangle par rapport au bord supérieur de la boîte de l'élément.
- _left_
  - : Une longueur ({{CSSxRef("length")}}) qui représente le décalage pour le côté gauche du rectangle par rapport au bord gauche de la boîte de l'élément.

## Interpolation

Les valeurs de type `<shape>` sont des rectangles qui peuvent être interpolées lors des animations. Pour ces valeurs, l'interpolation s'effectue en interpolant chacune des valeurs `top`, `right`, `bottom` et `left` comme des nombres réels (à virgule flottante). La vitesse de l'interpolation est définie grâce à [la fonction de temporisation](/fr/docs/Web/CSS/Reference/Values/easing-function) associée à l'animation.

## Exemples

### Exemple illustrant un usage correct de la fonction rect()

```css
img.clip04 {
  clip: rect(10px, 20px, 20px, 10px);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("clip")}}
