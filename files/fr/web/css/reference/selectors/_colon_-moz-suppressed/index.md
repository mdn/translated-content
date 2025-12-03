---
title: :-moz-suppressed
slug: Web/CSS/Reference/Selectors/:-moz-suppressed
original_slug: Web/CSS/:-moz-suppressed
---

{{Non-standard_header}}

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

- {{cssxref(":-moz-broken")}}
- {{cssxref(":-moz-loading")}}
- {{cssxref(":-moz-user-disabled")}}
