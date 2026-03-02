---
title: ::-moz-progress-bar
slug: Web/CSS/Reference/Selectors/::-moz-progress-bar
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}{{SeeCompatTable}}

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

- L'élément HTML {{HTMLElement("progress")}}
- Le pseudo-élément {{CSSxRef("::-webkit-progress-bar")}}
- Le pseudo-élément {{CSSxRef("::-webkit-progress-value")}}
- Le pseudo-élément {{CSSxRef("::-webkit-progress-inner-element")}}
