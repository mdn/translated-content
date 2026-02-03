---
title: corner-block-end-shape
slug: Web/CSS/Reference/Properties/corner-block-end-shape
l10n:
  sourceCommit: 133c1628ead5b32660a0096ea7b3881637dc355c
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-block-end-shape`** définit la forme des deux coins sur le bord inférieur d'une boîte, à l'intérieur de leur zone de {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Propriétés constitutives

La propriété `corner-block-end-shape` est une forme raccourcie pour les propriétés logiques suivantes&nbsp;:

- {{CSSxRef("corner-end-start-shape")}}
- {{CSSxRef("corner-end-end-shape")}}

## Syntaxe

```css
/* Valeur unique avec un mot-clé pour les deux coins */
corner-block-end-shape: square;
corner-block-end-shape: scoop;

/* Valeur unique de superellipse() pour les deux coins */
corner-block-end-shape: superellipse(3.5);
corner-block-end-shape: superellipse(-1.9);

/* Coin côté inférieur/côté gauche, coin côté inférieur/côté droit */
corner-block-end-shape: square scoop;
corner-block-end-shape: square superellipse(-1.9);

/* Valeurs globales */
corner-block-end-shape: inherit;
corner-block-end-shape: initial;
corner-block-end-shape: revert;
corner-block-end-shape: revert-layer;
corner-block-end-shape: unset;
```

### Valeurs

La propriété `corner-block-end-shape` se définit avec une ou deux valeurs {{CSSxRef("&lt;corner-shape-value&gt;")}}&nbsp;:

- Si **une valeur** est utilisée, elle définit la forme des **deux coins côté inférieur**.
- Si **deux valeurs** sont utilisées, la première définit la forme du **coin côté inférieur/côté gauche**, et la seconde définit la forme du **coin côté inférieur/côté droit**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-block-end-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `80px / 40px`, et un `corner-block-end-shape` de `notch square`.

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 80px / 40px;
  corner-block-end-shape: notch square;
}
```

#### Résultat

Le résultat affiché ressemble à ceci&nbsp;:

{{EmbedLiveSample("basic-usage", "100%", 240)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("corner-shape")}}
- Les propriétés {{CSSxRef("corner-block-start-shape")}}, {{CSSxRef("corner-inline-start-shape")}} et {{CSSxRef("corner-inline-end-shape")}}
- Les propriétés {{CSSxRef("corner-top-shape")}}, {{CSSxRef("corner-bottom-shape")}}, {{CSSxRef("corner-left-shape")}} et {{CSSxRef("corner-right-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- Les propriétés {{CSSxRef("border-end-start-radius")}} et {{CSSxRef("border-end-end-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
