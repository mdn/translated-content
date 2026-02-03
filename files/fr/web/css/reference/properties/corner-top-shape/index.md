---
title: corner-top-shape
slug: Web/CSS/Reference/Properties/corner-top-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-top-shape`** définit la forme des deux coins sur le bord supérieur d'une boîte, à l'intérieur de leur zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Propriétés constitutives

La propriété `corner-top-shape` est une forme raccourcie pour les propriétés physiques suivantes&nbsp;:

- {{CSSxRef("corner-top-left-shape")}}
- {{CSSxRef("corner-top-right-shape")}}

## Syntaxe

```css
/* Valeur unique par mot-clé pour les deux coins */
corner-top-shape: notch;
corner-top-shape: squircle;

/* Valeur unique superellipse() pour les deux coins */
corner-top-shape: superellipse(3);
corner-top-shape: superellipse(-1.5);

/* Coin gauche, coin droit */
corner-top-shape: notch squircle;
corner-top-shape: notch superellipse(-1.5);

/* Valeurs globales */
corner-top-shape: inherit;
corner-top-shape: initial;
corner-top-shape: revert;
corner-top-shape: revert-layer;
corner-top-shape: unset;
```

### Valeurs

La propriété `corner-top-shape` se définit avec une ou deux valeurs {{CSSxRef("&lt;corner-shape-value>")}}&nbsp;:

- Si **une valeur** est utilisée, elle définit la forme des **deux coins supérieurs**.
- Si **deux valeurs** sont utilisées, la première définit la forme du **coin supérieur gauche**, et la seconde définit la forme du **coin supérieur droit**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-top-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de 60 pixels, et un `corner-top-shape` de `scoop notch`.

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
  background-color: goldenrod;
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
  border-radius: 60px;
  corner-top-shape: scoop notch;
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
- Les propriétés {{CSSxRef("corner-bottom-shape")}}, {{CSSxRef("corner-left-shape")}} et {{CSSxRef("corner-right-shape")}}
- Les propriétés {{CSSxRef("corner-block-start-shape")}}, {{CSSxRef("corner-block-end-shape")}}, {{CSSxRef("corner-inline-start-shape")}} et {{CSSxRef("corner-inline-end-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- Les propriétés {{CSSxRef("border-top-left-radius")}} et {{CSSxRef("border-top-right-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
