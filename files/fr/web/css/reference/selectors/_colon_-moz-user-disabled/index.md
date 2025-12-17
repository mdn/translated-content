---
title: :-moz-user-disabled
slug: Web/CSS/Reference/Selectors/:-moz-user-disabled
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) `:-moz-user-disabled` est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui correspond aux éléments représentant des images qui n'ont pas été chargées car elles ont été entièrement désactivées dans les préférences de l'utilisateur·ice.

> [!NOTE]
> Cette pseudo-classe est principalement destinée aux développeur·euse·s de thèmes.

## Syntaxe

```css
:-moz-user-disabled {
  /* ... */
}
```

## Exemples

### Mettre en forme les éléments désactivés par l'utilisateur

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Voir aussi

- La pseudo-classe {{CSSxRef(":-moz-broken")}}
- La pseudo-classe {{CSSxRef(":-moz-loading")}}
- La pseudo-classe {{CSSxRef(":-moz-suppressed")}}
