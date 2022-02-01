---
title: font-synthesis
slug: Web/CSS/font-synthesis
tags:
  - CSS
  - CSS Fonts
  - Fontes CSS
  - Propriété
  - Reference
  - 'recipe: css-property'
translation_of: Web/CSS/font-synthesis
---
{{CSSRef}}

La propriété **`font-synthesis`** indique au navigateur s'il peut synthétiser la graisse ou la mise en italique des polices utilisées si ces variantes sont absentes.

```css
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: weight style;

/* Valeurs globales */
font-synthesis: initial;
font-synthesis: inherit;
font-synthesis: unset;
```

La plupart des polices occidentales incluent les variantes de graisse et d'italique mais certaines polices récentes ou utilisées pour le chinois, le japonais, le coréen ou d'autres scripts ont tendance à ne pas inclure ces éléments. La synthèse automatique du gras ou de l'italique par le navigateur peut réduire la lisibilité du texte et il est alors préférable de désactiver l'émulation du gras et de l'italique du navigateur.

## Syntaxe

Cette propriété peut prendre l'une des formes suivantes :

- le mot-clé `none`
- le mot-clé `weight` ou le mot-clé `style`
- la valeur `weight style`

### Valeurs

- `none`
  - : Ce mot-clé indique que la graisse ou l'italique ne doivent pas être synthétisés.
- `weight`
  - : Ce mot-clé indique qu'une fonte grasse peut être synthétisée si besoin.
- `style`
  - : Ce mot-clé indique qu'une fonte italique peut être synthétisée si besoin.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div class="syn">Ne me synthétisez pas !</div>
```

### CSS

```css
.syn {font-synthesis: none;}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                    | État                             | Commentaires        |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-synthesis', 'font-synthesis')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-synthesis")}}
