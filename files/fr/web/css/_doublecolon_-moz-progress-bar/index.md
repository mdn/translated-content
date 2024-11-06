---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
---

{{Non-standard_header}}{{CSSRef}}

Le pseudo-élément **`::-moz-progress-bar`** s'appliquant à la zone d'élément HTML {{HTMLElement("progress")}} représente la valeur de la progression effectuée jusqu'à présent. Vous pourrez par exemple, modifier la couleur de la barre de progression.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
#redbar::-moz-progress-bar {
  background-color: red;
}
```

### HTML

```html
<progress id="redbar" value="30" max="100">30 %</progress>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{HTMLElement("progress")}}
- {{cssxref("::-ms-fill")}}
- {{cssxref("::-webkit-progress-bar")}}
- {{cssxref("::-webkit-progress-value")}}
- {{cssxref("::-webkit-progress-inner-element")}}
