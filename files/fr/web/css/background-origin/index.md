---
title: background-origin
slug: Web/CSS/background-origin
---

{{CSSRef}}

La propriété **`background-origin`** détermine l'origine de l'arrière-plan [`background-image`](/fr/docs/Web/CSS/background-image) à partir de la bordure, à l'intérieur de la bordure ou à l'intérieur de la zone de remplissage (<i lang="en">padding</i>).

{{EmbedInteractiveExample("pages/css/background-origin.html")}}

Attention, `background-origin` est ignorée lorsque [`background-attachment`](/fr/docs/Web/CSS/background-attachment) vaut `fixed`.

> **Note :** Cette propriété est rattachée à la propriété raccourcie [`background`](/fr/docs/Web/CSS/background). Aussi, si on a une déclaration `background-origin` avant la propriété raccourcie et que cette dernière ne définit pas la valeur de l'origine, ce sera la valeur initiale par défaut qui sera prise en compte pour `background-origin`.

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
background-origin: unset;
```

### Valeurs

- `border-box`
  - : L'arrière-plan est positionné relativement à la boîte de bordure.
- `padding-box`
  - : L'arrière-plan est positionné relativement à la boîte de remplissage (<i lang="en">padding</i>).
- `content-box`
  - : L'arrière-plan est positionné relativement à la boîte de contenu.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

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
  background-image: url("logo.jpg"), url("mainback.png"); /* Applique deux images en arrière-plan */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

### Utiliser deux dégradés

Dans cet exemple, la boîte possède une bordure épaisse en pointillés. Le premier dégradé utilise `padding-box` pour `background-origin` et l'arrière-plan s'inscrit donc à l'intérieur de la bordure. Le second dégradé utilise `content-box` et apparaît donc uniquement derrière le contenu.

#### HTML

```html
<div class="box">Coucou !</div>
```

#### CSS

```css
.box {
  margin: 10px 0;
  color: #fff;
  background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 0.6) 60%,
      rgba(252, 176, 69, 1) 100%
    ), radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 28%);
  border: 20px dashed black;
  padding: 20px;
  width: 400px;
  background-origin: padding-box, content-box;
  background-repeat: no-repeat;
}
```

#### Résultat

{{EmbedLiveSample("","300","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`background-clip`](/fr/docs/Web/CSS/background-clip)
