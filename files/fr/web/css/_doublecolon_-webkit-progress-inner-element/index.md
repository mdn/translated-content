---
title: '::-webkit-progress-inner-element'
slug: Web/CSS/::-webkit-progress-inner-element
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-webkit-progress-inner-element
---
{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-progress-inner-element`** représente le cadre extérieur de l'élément {{HTMLElement("progress")}}. C'est un pseudo-élément parent du pseudo-élément {{cssxref("::-webkit-progress-bar")}}.

> **Note :** Afin que `::-webkit-progress-value` ait un effet, il faut que {{cssxref("-webkit-appearance")}} vaille `none` sur l'élément `<progress>`.

## Exemples

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-inner-element {
  border: 2px solid black;
}
```

### HTML

```html
<progress value="10" max="50">
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon :

![](https://mdn.mozillademos.org/files/13492/-webkit-progress-inner-element%20example.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-webkit-progress-inner-element")}}

## Voir aussi

- Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("progress")}}

  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
- {{cssxref("::-ms-fill")}}
