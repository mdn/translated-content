---
title: corner-bottom-right-shape
slug: Web/CSS/Reference/Properties/corner-bottom-right-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`corner-bottom-right-shape`** définit la forme du coin inférieur droit d'une boîte, à l'intérieur de sa zone {{CSSxRef("border-radius")}}.

Pour une description complète du comportement des formes de coins et plusieurs exemples, consultez la page de la propriété raccourcie {{CSSxRef("corner-shape")}}.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
corner-bottom-right-shape: notch;
corner-bottom-right-shape: scoop;

/* Valeurs de la fonction superellipse() */
corner-bottom-right-shape: superellipse(1.7);
corner-bottom-right-shape: superellipse(-3);

/* Valeurs globales */
corner-bottom-right-shape: inherit;
corner-bottom-right-shape: initial;
corner-bottom-right-shape: revert;
corner-bottom-right-shape: revert-layer;
corner-bottom-right-shape: unset;
```

### Valeurs

La propriété `corner-bottom-right-shape` se définit avec une valeur {{CSSxRef("&lt;corner-shape-value>")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples liés sur la page de référence {{CSSxRef("corner-shape")}}.

### Utilisation simple de `corner-bottom-right-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `30% / 20%`, et un `corner-bottom-right-shape` de `notch`.

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
  border-radius: 30% / 20%;
  corner-bottom-right-shape: notch;
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
- Les propriétés {{CSSxRef("corner-top-left-shape")}}, {{CSSxRef("corner-top-right-shape")}} et {{CSSxRef("corner-bottom-left-shape")}}
- Les propriétés {{CSSxRef("corner-start-start-shape")}}, {{CSSxRef("corner-start-end-shape")}}, {{CSSxRef("corner-end-start-shape")}} et {{CSSxRef("corner-end-end-shape")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La propriété {{CSSxRef("border-bottom-right-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
