---
title: corner-end-end-shape
slug: Web/CSS/Reference/Properties/corner-end-end-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-end-end-shape`** définit la forme du coin inférieur et droit d'une boîte, à l'intérieur de sa zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Syntaxe

```css
/* Valeurs par mot-clé */
corner-end-end-shape: scoop;
corner-end-end-shape: notch;

/* Valeurs de la fonction superellipse() */
corner-end-end-shape: superellipse(4);
corner-end-end-shape: superellipse(-0.5);

/* Valeurs globales */
corner-end-end-shape: inherit;
corner-end-end-shape: initial;
corner-end-end-shape: revert;
corner-end-end-shape: revert-layer;
corner-end-end-shape: unset;
```

### Valeurs

La propriété `corner-end-end-shape` se définit avec une valeur {{CSSxRef("&lt;corner-shape-value&gt;")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-end-end-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de 60 pixels, et un `corner-end-end-shape` de `squircle`.

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
  border-radius: 60px;
  corner-end-end-shape: squircle;
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
- Les propriétés {{CSSxRef("corner-start-start-shape")}}, {{CSSxRef("corner-start-end-shape")}} et {{CSSxRef("corner-end-start-shape")}}
- Les propriétés {{CSSxRef("corner-top-left-shape")}}, {{CSSxRef("corner-top-right-shape")}}, {{CSSxRef("corner-bottom-left-shape")}} et {{CSSxRef("corner-bottom-right-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La propriété {{CSSxRef("border-end-end-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
