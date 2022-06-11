---
title: resize
slug: Web/CSS/resize
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/resize
---
{{CSSRef}}

La propriété **`resize`** permet de contrôler le caractère redimensionnable d'un élément et notamment la direction dans laquelle celui-ci peut être redimensionné.

{{EmbedInteractiveExample("pages/css/resize.html")}}

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

> **Note :** `resize` ne s'applique pas aux blocs dont la propriété {{cssxref("overflow")}} vaut `visible`.

### Syntaxe formelle

{{csssyntax}}

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
    Ce paragraphe peut être redimensionné car la propriété
    CSS resize vaut 'both' sur cet élément.
  </p>
</div>
```

#### Résultat

{{EmbedLiveSample("Utiliser_resize_sur_des_éléments_quelconques","450","450")}}

## Spécifications

| Spécification                                                                    | Statut                                           | Commentaires                           |
| -------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------- |
| {{SpecName('CSS Logical Properties', '#resize', 'resize')}} | {{Spec2('CSS Logical Properties')}} | Ajout des valeurs `block` et `inline`. |
| {{SpecName('CSS3 Basic UI', '#resize', 'resize')}}             | {{Spec2('CSS3 Basic UI')}}             | Définition initiale.                   |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.resize")}}

## Voir aussi

- {{HTMLElement("textarea")}}
