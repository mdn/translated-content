---
title: -moz-user-input
slug: Web/CSS/Reference/Properties/-moz-user-input
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

Dans les applications Mozilla, **`-moz-user-input`** détermine si un élément acceptera une saisie utilisateur.

Depuis Firefox 60, cette propriété ne peut plus permettre à un élément d'accepter une saisie utilisateur s'il ne le fait pas normalement. Elle ne peut être utilisée que pour désactiver la saisie utilisateur.

La propriété `user-input` n'est actuellement pas en cours de normalisation.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-moz-user-input: auto;
-moz-user-input: none;

/* Valeurs globales */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### Valeurs

- `auto`
  - : L'élément réagit à la saisie utilisateur s'il accepte normalement une saisie, comme un {{HTMLElement("textarea")}}.
- `none`
  - : L'élément ne réagit pas à la saisie utilisateur et il ne prend jamais l'état {{CSSxRef(":active")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-user-input = auto | none`)}}

## Exemples

### Désactiver la saisie utilisateur pour un élément

```css
input.exemple {
  /* L'utilisateur·ice pourra sélectionner le texte
     mais ne pourra pas le modifier. */
  -moz-user-input: none;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("-moz-user-focus")}}
- La propriété {{CSSxRef("user-modify", "-moz-user-modify")}}
- La propriété {{CSSxRef("user-select", "-moz-user-select")}}
