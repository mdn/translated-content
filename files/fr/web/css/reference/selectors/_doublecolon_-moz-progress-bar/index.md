---
title: ::-moz-progress-bar
slug: Web/CSS/Reference/Selectors/::-moz-progress-bar
original_slug: Web/CSS/::-moz-progress-bar
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-progress-bar`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente la barre de progression à l'intérieur d'un élément {{HTMLElement("progress")}}. (La barre représente la progression accomplie.)

Si vous souhaitez sélectionner la partie non terminée de {{HTMLElement("progress")}} dans Mozilla, veuillez sélectionner directement l'élément {{HTMLElement("progress")}}.

## Syntaxe

```css
::-moz-progress-bar {
  /* ... */
}
```

## Exemples

### HTML

```html
<progress value="30" max="100">30 %</progress>
<progress max="100">Indéterminé</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* Force la barre indéterminée à avoir une largeur de zéro */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
