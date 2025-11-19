---
title: ::-moz-meter-bar
slug: Web/CSS/Reference/Selectors/::-moz-meter-bar
original_slug: Web/CSS/::-moz-meter-bar
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-meter-bar`** représente la jauge de mesure dans un élément {{HTMLElement("meter")}}. Il est utilisé pour sélectionner et appliquer des styles à la jauge à l'intérieur d'un élément de mesure.

## Syntaxe

```css
::-moz-meter-bar {
  /* ... */
}
```

## Exemples

### HTML

```html
Normal&nbsp;: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Mis en forme&nbsp;:
<meter class="styled" min="0" max="10" value="6">Score 6/10</meter>
```

### CSS

```css
meter {
  height: 20px;
  width: 200px;
  vertical-align: -0.4rem;
}

.styled::-moz-meter-bar {
  background: lime;
  box-shadow: 0 2px 3px grey inset;
  border-radius: 5px;
}
```

### Résultat

{{ EmbedLiveSample('Exemples') }}

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Voir aussi

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
