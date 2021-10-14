---
title: background-origin
slug: Web/CSS/background-origin
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-origin
---
{{CSSRef}}

La propriété **`background-origin`** détermine l'origine de l'arrière-plan {{cssxref("background-image")}} à partir de la bordure, à l'intérieur de la bordure ou à l'intérieur de la zone de remplissage (_padding_).

{{EmbedInteractiveExample("pages/css/background-origin.html")}}

Attention, `background-origin` est ignorée lorsque {{cssxref("background-attachment")}} vaut `fixed`.

> **Note :** Cette propriété est rattachée à la propriété raccourcie {{cssxref("background")}}. Aussi, si on a une déclaration `background-origin` avant la propriété raccourcie et que cette dernière ne définit pas la valeur de l'origine, ce sera la valeur initiale par défaut qui sera prise en compte pour `background-origin`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* Valeurs globales */
background-origin: inherit;
background-origin: initial;
background-origin: unset;
```

### Valeurs

- `border-box`
  - : L'arrière-plan est positionné relativement à la boîte de bordure.
- `padding-box`
  - : L'arrière-plan est positionné relativement à la boîte de remplissage (_padding_).
- `content-box`
  - : L'arrière-plan est positionné relativement à la boîte de contenu.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  width: 200px;
  height: 100px;
}

.exemple {
  border: 10px double;
  padding: 10px;
  background-image: url(https://mdn.mozillademos.org/files/12988/p_201.jpg);
  background-color: palegreen;
  background-position: 0px 40px;
  background-origin: content-box;
  background-repeat: no-repeat;
}
```

### HTML

```html
<div class="exemple"></div>
```

### Résultat

{{EmbedLiveSample("Exemples","300","200")}}

## Spécifications

| Spécification                                                                                            | État                                     | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-origin', 'background-origin')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.background-origin")}}

## Voir aussi

- {{cssxref("background-clip")}}
