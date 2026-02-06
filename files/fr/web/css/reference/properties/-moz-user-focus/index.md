---
title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

La propriété [CSS](/fr/docs/Web/CSS) **`-moz-user-focus`** est utilisée pour indiquer si l'élément peut recevoir le focus.

En utilisant la valeur `ignore`, on peut désactiver la prise de focus sur l'élément (l'utilisateur·ice ne pourra pas activer l'élément) et l'élément sera sauté lors de la navigation à la tabulation.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-moz-user-focus: none;
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* Valeurs globales */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

### Valeurs

- `ignore`
  - : L'élément n'accepte pas le focus (au clavier ou au pointeur) et sera sauté lors de la navigation à la tabulation.
- `normal`
  - : L'élément peut recevoir le focus normalement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-user-focus = ignore | normal | none`)}}

## Exemples

### HTML

```html
<input
  class="ignored"
  value="L'utilisateur·ice ne peut pas placer le focus sur cet élément." />
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("-moz-user-input")}}
- La propriété {{CSSxRef("user-modify")}}
- La propriété {{CSSxRef("user-select", "-moz-user-select")}}
