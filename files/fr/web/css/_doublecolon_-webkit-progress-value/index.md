---
title: '::-webkit-progress-value'
slug: Web/CSS/::-webkit-progress-value
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-webkit-progress-value
---
{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-progress-value`** permet de représenter la portion « remplie » de la barre d'un élément {{HTMLElement("progress")}}. C'est un pseudo-élément fils du pseudo-élément {{cssxref("::-webkit-progress-bar")}}.

> **Note :** Afin que `::-webkit-progress-value` ait un effet, il faut que {{cssxref("-webkit-appearance")}} vaille `none` sur l'élément `<progress>`.

## Exemples

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: orange;
}
```

### HTML

```html
<progress value="10" max="50">
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon :

![](progress-value.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-webkit-progress-value")}}

## Voir aussi

- Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("progress")}} :

  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-inner-element")}}

- {{cssxref("::-moz-progress-bar")}}
- {{cssxref("::-ms-fill")}}
