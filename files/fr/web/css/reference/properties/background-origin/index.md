---
title: background-origin
slug: Web/CSS/Reference/Properties/background-origin
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-origin`** définit l'origine de l'arrière-plan&nbsp;: depuis le début de la bordure, à l'intérieur de la bordure ou à l'intérieur de la zone de remplissage.

Attention, `background-origin` est ignorée lorsque {{CSSxRef("background-attachment")}} vaut `fixed`.

{{InteractiveExample("Démonstration CSS&nbsp;: background-origin")}}

```css interactive-example-choice
background-origin: border-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: padding-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: content-box;
background-repeat: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Ceci est le contenu de l'élément.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333333;
  font-size: 2em;
  font-weight: bold;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* Valeurs globales */
background-origin: inherit;
background-origin: initial;
background-origin: revert;
background-origin: revert-layer;
background-origin: unset;
```

La propriété `background-origin` se définit à l'aide de l'une des valeurs par mot-clé listées ci-dessous.

### Valeurs

- `border-box`
  - : L'arrière-plan est positionné relativement à la boîte de bordure.
- `padding-box`
  - : L'arrière-plan est positionné relativement à la boîte de remplissage (<i lang="en">padding</i> en anglais).
- `content-box`
  - : L'arrière-plan est positionné relativement à la boîte de contenu.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir différentes origines

```css
.example {
  border: 10px double;
  padding: 10px;
  background: url("image.jpg");
  background-position: center left;
  background-origin: content-box;
}
```

```css
#example2 {
  border: 4px solid black;
  padding: 10px;
  background: url("image.gif");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image:
    url("logo.jpg"), url("mainback.png"); /* Applique deux images en arrière-plan */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

### Utiliser deux dégradés

Dans cet exemple, la boîte possède une bordure épaisse en pointillés. Le premier dégradé utilise `padding-box` pour `background-origin` et l'arrière-plan s'inscrit donc à l'intérieur de la bordure. Le second dégradé utilise `content-box` et apparaît donc uniquement derrière le contenu.

```css
.box {
  margin: 10px 0;
  color: white;
  background:
    linear-gradient(
      90deg,
      rgb(131 58 180 / 100%) 0%,
      rgb(253 29 29 / 60%) 60%,
      rgb(252 176 69 / 100%) 100%
    ),
    radial-gradient(circle, white 0%, black 28%);
  border: 20px dashed black;
  padding: 20px;
  width: 400px;
  background-origin: padding-box, content-box;
  background-repeat: no-repeat;
}
```

```html
<div class="box">Coucou&nbsp;!</div>
```

{{EmbedLiveSample("Utiliser deux dégradés", 300, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-clip")}}
