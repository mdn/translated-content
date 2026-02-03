---
title: corner-top-left-shape
slug: Web/CSS/Reference/Properties/corner-top-left-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-top-left-shape`** définit la forme du coin supérieur gauche d'une boîte, à l'intérieur de sa zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Syntaxe

```css
/* Valeurs par mot-clé */
corner-top-left-shape: notch;
corner-top-left-shape: squircle;

/* Valeurs de la fonction superellipse() */
corner-top-left-shape: superellipse(3);
corner-top-left-shape: superellipse(-1.5);

/* Valeurs globales */
corner-top-left-shape: inherit;
corner-top-left-shape: initial;
corner-top-left-shape: revert;
corner-top-left-shape: revert-layer;
corner-top-left-shape: unset;
```

### Valeurs

La propriété `corner-top-left-shape` se définit avec une valeur {{CSSxRef("&lt;corner-shape-value>")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-top-left-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `25% 100px`, et un `corner-top-left-shape` de `scoop`.

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
  border-radius: 25% 100px;
  corner-top-left-shape: scoop;
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
- Les propriétés {{CSSxRef("corner-top-right-shape")}}, {{CSSxRef("corner-bottom-left-shape")}} et {{CSSxRef("corner-bottom-right-shape")}}
- Les propriétés {{CSSxRef("corner-start-start-shape")}}, {{CSSxRef("corner-start-end-shape")}}, {{CSSxRef("corner-end-start-shape")}} et {{CSSxRef("corner-end-end-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La propriété {{CSSxRef("border-top-left-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
