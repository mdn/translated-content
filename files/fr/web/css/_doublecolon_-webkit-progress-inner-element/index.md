---
title: "::-webkit-progress-inner-element"
slug: Web/CSS/::-webkit-progress-inner-element
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-progress-inner-element`** représente le cadre extérieur de l'élément [`<progress>`](/fr/docs/Web/HTML/Element/Progress). C'est un pseudo-élément parent du pseudo-élément [`::-webkit-progress-bar`](/fr/docs/Web/CSS/::-webkit-progress-bar).

> **Note :** Afin que `::-webkit-progress-value` ait un effet, il faut que [`-webkit-appearance`](/fr/docs/Web/CSS/-webkit-appearance) vaille `none` sur l'élément `<progress>`.

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
<progress value="10" max="50"></progress>
```

### Résultat

{{EmbedLiveSample("", 200, 50)}}

Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon&nbsp;:

![](-webkit-progress-inner-element_example.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments [`<progress>`](/fr/docs/Web/HTML/Element/Progress)

  - [`::-webkit-progress-bar`](/fr/docs/Web/CSS/::-webkit-progress-bar)
  - [`::-webkit-progress-value`](/fr/docs/Web/CSS/::-webkit-progress-value)

- [`::-moz-progress-bar`](/fr/docs/Web/CSS/::-moz-progress-bar)
- [`::-ms-fill`](/fr/docs/Web/CSS/::-ms-fill)
