---
title: "::-webkit-progress-bar"
slug: Web/CSS/::-webkit-progress-bar
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-progress-bar`** représente l'ensemble de la barre d'un élément {{HTMLElement("progress")}}. Normalement, celui-ci n'est visible que pour la partie de la barre qui n'est pas remplie car, par défaut, il est affiché sous le pseudo-élément {{cssxref("::-webkit-progress-value")}}. C'est un pseudo-élément fils du pseudo-élément {{cssxref("::-webkit-progress-inner-element")}} et c'est le pseudo-élément parent du pseudo-élément {{cssxref("::-webkit-progress-value")}}.

> **Note :** Afin que `::-webkit-progress-value` ait un effet, il faut que {{cssxref("appearance")}} vaille `none` sur l'élément `<progress>`.

## Exemples

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
  background-color: orange;
}
```

### HTML

```html
<progress value="10" max="50"></progress>
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon :

![](progress-bar.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("progress")}} :

  - {{cssxref("::-webkit-progress-value")}}
  - {{cssxref("::-webkit-progress-inner-element")}}

- {{cssxref("::-moz-progress-bar")}}
- {{cssxref("::-ms-fill")}}
