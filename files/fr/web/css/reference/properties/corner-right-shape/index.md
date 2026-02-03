---
title: corner-right-shape
slug: Web/CSS/Reference/Properties/corner-right-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-right-shape`** définit la forme des deux coins sur le bord droit d'une boîte, à l'intérieur de leur zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Propriétés constitutives

La propriété `corner-right-shape` est une forme raccourcie pour les propriétés physiques suivantes&nbsp;:

- {{CSSxRef("corner-top-right-shape")}}
- {{CSSxRef("corner-bottom-right-shape")}}

## Syntaxe

```css
/* Valeur unique par mot-clé pour les deux coins */
corner-right-shape: bevel;
corner-right-shape: notch;

/* Valeur unique superellipse() pour les deux coins */
corner-right-shape: superellipse(4);
corner-right-shape: superellipse(-0.9);

/* Coin supérieur, coin inférieur */
corner-right-shape: bevel notch;
corner-right-shape: notch superellipse(-0.9);

/* Valeurs globales */
corner-right-shape: inherit;
corner-right-shape: initial;
corner-right-shape: revert;
corner-right-shape: revert-layer;
corner-right-shape: unset;
```

### Valeurs

La propriété `corner-right-shape` se définit avec une ou deux valeurs {{CSSxRef("&lt;corner-shape-value>")}}&nbsp;:

- Si **une valeur** est utilisée, elle définit la forme des **deux coins droits**.
- Si **deux valeurs** sont utilisées, la première définit la forme du **coin supérieur droit**, et la seconde définit la forme du **coin inférieur droit**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-right-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `20% 30% / 50% 40%`, et un `corner-right-shape` de `square scoop`.

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
  border-radius: 20% 30% / 50% 40%;
  corner-right-shape: square scoop;
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
- Les propriétés {{CSSxRef("corner-top-shape")}}, {{CSSxRef("corner-bottom-shape")}} et {{CSSxRef("corner-left-shape")}}
- Les propriétés {{CSSxRef("corner-block-start-shape")}}, {{CSSxRef("corner-block-end-shape")}}, {{CSSxRef("corner-inline-start-shape")}} et {{CSSxRef("corner-inline-end-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- Les propriétés {{CSSxRef("border-top-right-radius")}} et {{CSSxRef("border-bottom-right-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
