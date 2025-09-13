---
title: ::-webkit-inner-spin-button
slug: Web/CSS/::-webkit-inner-spin-button
l10n:
  sourceCommit: 13d979ec8bc1daf315fc6a17e38cb855cf2e4ef1
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément CSS **`::-webkit-inner-spin-button`** permet de mettre en forme la partie intérieure de la roulette qui permet de choisir la valeur d'un élément [`<input type="number">`](/fr/docs/Web/HTML/Reference/Elements/input/number).

## Syntaxr

```css
::-webkit-inner-spin-button {
  /* … */
}
```

## Exemples

Ces exemples fonctionnent uniquement pour les navigateurs basés sur WebKit et Blink.

### CSS

```css
input[type="number"]::-webkit-inner-spin-button {
  cursor: pointer;
}
```

### HTML

```html
<input type="number" />
```

### Résultat

{{EmbedLiveSample('', 200, 30)}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Mettre en forme les contrôles de formulaires - WebKit (en anglais)](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
