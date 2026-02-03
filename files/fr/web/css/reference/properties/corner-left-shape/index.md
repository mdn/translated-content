---
title: corner-left-shape
slug: Web/CSS/Reference/Properties/corner-left-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-left-shape`** définit la forme des deux coins sur le bord gauche d'une boîte, à l'intérieur de leur zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Propriétés constitutives

La propriété `corner-left-shape` est une forme raccourcie pour les propriétés physiques suivantes&nbsp;:

- {{CSSxRef("corner-top-left-shape")}}
- {{CSSxRef("corner-bottom-left-shape")}}

## Syntaxe

```css
/* Valeur unique par mot-clé pour les deux coins */
corner-left-shape: round;
corner-left-shape: bevel;

/* Valeur unique superellipse() pour les deux coins */
corner-left-shape: superellipse(1.2);
corner-left-shape: superellipse(-2.5);

/* Coin supérieur, coin inférieur */
corner-left-shape: round bevel;
corner-left-shape: bevel superellipse(1.2);

/* Valeurs globales */
corner-left-shape: inherit;
corner-left-shape: initial;
corner-left-shape: revert;
corner-left-shape: revert-layer;
corner-left-shape: unset;
```

### Valeurs

La propriété `corner-left-shape` se définit avec une ou deux valeurs {{CSSxRef("&lt;corner-shape-value&gt;")}}&nbsp;:

- Si **une valeur** est utilisée, elle définit la forme des **deux coins gauches**.
- Si **deux valeurs** sont utilisées, la première définit la forme du **coin supérieur gauche**, et la seconde définit la forme du **coin inférieur gauche**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation basique de `corner-left-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `20px 40px / 60px 80px`, et un `corner-left-shape` de `notch bevel`.

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
  background-color: green;
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
  border-radius: 20px 40px / 60px 80px;
  corner-left-shape: notch bevel;
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
- Les propriétés {{CSSxRef("corner-top-shape")}}, {{CSSxRef("corner-bottom-shape")}} et {{CSSxRef("corner-right-shape")}}
- Les propriétés {{CSSxRef("corner-block-start-shape")}}, {{CSSxRef("corner-block-end-shape")}}, {{CSSxRef("corner-inline-start-shape")}} et {{CSSxRef("corner-inline-end-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- Les propriétés {{CSSxRef("border-top-left-radius")}} et {{CSSxRef("border-bottom-left-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
