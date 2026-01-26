---
title: resize
slug: Web/CSS/Reference/Properties/resize
original_slug: Web/CSS/resize
---

{{CSSRef}}

La propriété **`resize`** permet de contrôler le caractère redimensionnable d'un élément et notamment la direction dans laquelle celui-ci peut être redimensionné.

{{InteractiveExample("CSS Demo: resize")}}

```css interactive-example-choice
resize: both;
```

```css interactive-example-choice
resize: horizontal;
```

```css interactive-example-choice
resize: vertical;
```

```css interactive-example-choice
resize: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">Try resizing this element.</div>
</section>
```

```css interactive-example
#example-element {
  background: linear-gradient(135deg, #0ff 0%, #0ff 94%, #fff 95%);
  border: 3px solid #c5c5c5;
  overflow: auto;
  width: 250px;
  height: 250px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Valeurs globales */
resize: inherit;
resize: initial;
resize: unset;
```

La propriété `resize` peut être définie avec l'un des mots-clés suivants.

### Valeurs

- `none`
  - : L'élément n'offre aucune méthode à l'utilisateur pour que celui-ci le redimensionne.
- `both`
  - : L'élément affiche un mécanisme afin que l'utilisateur puisse le redimensionner, horizontalement et verticalement.
- `horizontal`
  - : L'élément affiche un mécanisme afin que l'utilisateur puisse le redimensionner horizontalement (pas de redimensionnement vertical).
- `vertical`
  - : L'élément affiche un mécanisme afin que l'utilisateur puisse le redimensionner verticalement (pas de redimensionnement horizontal).
- `block` {{experimental_inline}}
  - : Selon les valeurs de {{cssxref("writing-mode")}} et {{cssxref("direction")}}, l'élément affiche un mécanisme pour que l'utilisateur puisse le redimensionner, horizontalement ou verticalement, dans la direction du bloc.
- `inline` {{experimental_inline}}
  - : Selon les valeurs de {{cssxref("writing-mode")}} et {{cssxref("direction")}}, l'élément affiche un mécanisme pour que l'utilisateur puisse le redimensionner, horizontalement ou verticalement, dans la direction du flux en ligne.

> [!NOTE]
> `resize` ne s'applique pas aux blocs dont la propriété {{cssxref("overflow")}} vaut `visible`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver le redimensionnement des éléments `textarea`

#### CSS

Par défaut, les éléments {{HTMLElement("textarea")}} peuvent être redimensionnés. Ce comportement peut être modifié grâce à ce fragment CSS :

```css
textarea.exemple {
  resize: none;
}
```

#### HTML

```html
<textarea class="exemple">Saisir du texte ici.</textarea>
```

#### Résultat

{{EmbedLiveSample("Désactiver_le_redimensionnement_des_éléments_textarea","200","100")}}

### Utiliser `resize` sur des éléments quelconques

La propriété `resize` peut être utilisée afin de pouvoir redimensionner n'importe quel élément. Dans l'exemple qui suit, on a une boîte {{HTMLElement("div")}} redimensionnable qui contient un paragraphe (({{HTMLElement("p")}}) lui-même redimensionnable) :

#### CSS

```css
.redimensionnable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### HTML

```html
<div class="redimensionnable">
  <p class="redimensionnable">
    Ce paragraphe peut être redimensionné car la propriété CSS resize vaut
    'both' sur cet élément.
  </p>
</div>
```

#### Résultat

{{EmbedLiveSample("Utiliser_resize_sur_des_éléments_quelconques","450","450")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("textarea")}}
