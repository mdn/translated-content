---
title: :-moz-suppressed
slug: Web/CSS/Reference/Selectors/:-moz-suppressed
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-suppressed`** est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui permet de sélectionner les images qui n'ont pas été chargées car le chargement des images depuis ce site a été bloqué.

> [!NOTE]
> Cette pseudo-classe est principalement destinée aux développeur·euse·s de thèmes.

## Syntaxe

```css
:-moz-suppressed {
  /* ... */
}
```

## Exemples

### Éléments de style qui ont été bloqués

```css
:-moz-suppressed {
  background: yellow;
  padding: 8px;
}
```

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Voir aussi

- La pseudo-classe {{CSSxRef(":-moz-broken")}}
- La pseudo-classe {{CSSxRef(":-moz-loading")}}
- La pseudo-classe {{CSSxRef(":-moz-user-disabled")}}
