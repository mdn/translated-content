---
title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
original_slug: Web/CSS/-moz-user-focus
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}{{non-standard_header}}

La propriété **`-moz-user-focus`** est utilisée pour indiquer si l'élément peut recevoir le focus.

En utilisant la valeur `ignore`, on peut désactiver la prise de focus sur l'élément (l'utilisateur·ice ne pourra pas activer l'élément) et l'élément sera sauté lors de la navigation à la tabulation.

{{CSSInfo}}

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

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
