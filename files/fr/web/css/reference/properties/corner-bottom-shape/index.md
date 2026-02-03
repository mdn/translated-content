---
title: corner-bottom-shape
slug: Web/CSS/Reference/Properties/corner-bottom-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-bottom-shape`** définit la forme des deux coins sur le bord inférieur d'une boîte, à l'intérieur de leur zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Propriétés constitutives

La propriété `corner-bottom-shape` est une forme raccourcie pour les propriétés physiques suivantes&nbsp;:

- {{CSSxRef("corner-bottom-left-shape")}}
- {{CSSxRef("corner-bottom-right-shape")}}

## Syntaxe

```css
/* Valeur unique avec un mot-clé pour les deux coins */
corner-bottom-shape: scoop;
corner-bottom-shape: square;

/* Valeur unique de superellipse() pour les deux coins */
corner-bottom-shape: superellipse(0.7);
corner-bottom-shape: superellipse(-2.8);

/* Coin inférieur gauche, coin inférieur droit */
corner-bottom-shape: scoop square;
corner-bottom-shape: scoop superellipse(0.7);

/* Valeurs globales */
corner-bottom-shape: inherit;
corner-bottom-shape: initial;
corner-bottom-shape: revert;
corner-bottom-shape: revert-layer;
corner-bottom-shape: unset;
```

### Valeurs

La propriété `corner-bottom-shape` se définit avec une ou deux valeurs {{CSSxRef("&lt;corner-shape-value&gt;")}}&nbsp;:

- Si **une valeur** est utilisée, elle définit la forme des **deux coins inférieurs**.
- Si **deux valeurs** sont utilisées, la première définit la forme du **coin inférieur gauche**, et la seconde définit la forme du **coin inférieur droit**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-bottom-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `60px 30px 20% 40%`, et un `corner-bottom-shape` de `square squircle`.

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
  background-color: orange;
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
  border-radius: 60px 30px 20% 40%;
  corner-bottom-shape: square squircle;
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
- Les propriétés {{CSSxRef("corner-top-shape")}}, {{CSSxRef("corner-left-shape")}} et {{CSSxRef("corner-right-shape")}}
- Les propriétés {{CSSxRef("corner-block-start-shape")}}, {{CSSxRef("corner-block-end-shape")}}, {{CSSxRef("corner-inline-start-shape")}} et {{CSSxRef("corner-inline-end-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- Les propriétés {{CSSxRef("border-bottom-left-radius")}} et {{CSSxRef("border-bottom-right-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
