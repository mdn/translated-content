---
title: :-moz-suppressed
slug: Web/CSS/:-moz-suppressed
---

{{Non-standard_header}}{{CSSRef}}

`:-moz-suppressed` est une pseudo-classe spécifique à Mozilla qui permet de sélectionner les images qui n'ont pas été chargées car le chargement des images depuis ce site a été bloqué.

Ce sélecteur est principalement destiné aux développeurs de thèmes.

## Syntaxe

```css
:-moz-suppressed {
}
```

## Exemple

```css
:-moz-suppressed {
  background: yellow;
  padding: 8px;
}
```

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":-moz-broken")}}
- {{cssxref(":-moz-loading")}}
- {{cssxref(":-moz-user-disabled")}}
