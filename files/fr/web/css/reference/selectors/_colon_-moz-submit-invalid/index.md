---
title: :-moz-submit-invalid
slug: Web/CSS/Reference/Selectors/:-moz-submit-invalid
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-submit-invalid`** est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente tout bouton {{HTMLElement("input")}} de type `submit` présent sur un formulaire dont le contenu n'est pas valide compte-tenu de ses [contraintes de validation](/fr/docs/Learn_web_development/Extensions/Forms#constraint_validation).

Par défaut, aucun style n'est appliqué. Vous pouvez utiliser cette pseudo-classe afin de personnaliser l'apparence du bouton `submit` lorsqu'il y a des champs de formulaire invalides.

## Syntaxe

```css
:-moz-submit-invalid {
  /* ... */
}
```

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":valid")}}
- La pseudo-classe {{CSSxRef(":invalid")}}
- La pseudo-classe {{CSSxRef(":required")}}
- La pseudo-classe {{CSSxRef(":optional")}}
