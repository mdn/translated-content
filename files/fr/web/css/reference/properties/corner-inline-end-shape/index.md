---
title: corner-inline-end-shape
slug: Web/CSS/Reference/Properties/corner-inline-end-shape
l10n:
  sourceCommit: 133c1628ead5b32660a0096ea7b3881637dc355c
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-inline-end-shape`** définit la forme des deux coins sur le bord inférieur d'une boîte, à l'intérieur de leur zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Propriétés constitutives

La propriété `corner-inline-end-shape` est une forme raccourcie pour les propriétés logiques suivantes&nbsp;:

- {{CSSxRef("corner-start-end-shape")}}
- {{CSSxRef("corner-end-end-shape")}}

## Syntaxe

```css
/* Valeur unique par mot-clé pour les deux coins */
corner-inline-end-shape: squircle;
corner-inline-end-shape: scoop;

/* Valeur unique superellipse() pour les deux coins */
corner-inline-end-shape: superellipse(1.5);
corner-inline-end-shape: superellipse(-0.8);

/* Coin supérieur/droite, coin inférieur/droite */
corner-inline-end-shape: squircle scoop;
corner-inline-end-shape: squircle superellipse(-0.8);

/* Valeurs globales */
corner-inline-end-shape: inherit;
corner-inline-end-shape: initial;
corner-inline-end-shape: revert;
corner-inline-end-shape: revert-layer;
corner-inline-end-shape: unset;
```

### Valeurs

La propriété `corner-inline-end-shape` se définit avec une ou deux valeurs {{CSSxRef("&lt;corner-shape-value&gt;")}}&nbsp;:

- Si **une valeur** est utilisée, elle définit la forme des **deux coins inline-end**.
- Si **deux valeurs** sont utilisées, la première définit la forme du **coin supérieur/droite**, et la seconde définit la forme du **coin inférieur/droite**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-inline-end-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `15% 30%`, et un `corner-inline-end-shape` de `bevel squircle`.

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
  border-radius: 15% 30%;
  corner-inline-end-shape: bevel squircle;
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
- Les propriétés {{CSSxRef("corner-block-start-shape")}}, {{CSSxRef("corner-block-end-shape")}} et {{CSSxRef("corner-inline-start-shape")}}
- Les propriétés {{CSSxRef("corner-top-shape")}}, {{CSSxRef("corner-bottom-shape")}}, {{CSSxRef("corner-left-shape")}} et {{CSSxRef("corner-right-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- Les propriétés {{CSSxRef("border-start-end-radius")}} et {{CSSxRef("border-end-end-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
