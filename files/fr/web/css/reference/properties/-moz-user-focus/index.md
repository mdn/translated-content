---
title: Propriété CSS `-moz-user-focus`
short-title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

La propriété [CSS](/fr/docs/Web/CSS) **`-moz-user-focus`** est utilisée pour indiquer si l'élément peut recevoir la sélection.

En utilisant la valeur `ignore`, on peut désactiver la prise de sélection sur l'élément (l'utilisateur·ice ne peut pas activer l'élément) et l'élément est sauté lors de la navigation à la tabulation.

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
  - : L'élément n'accepte pas la sélection (au clavier ou au pointeur) et est sauté lors de la navigation à la tabulation.
- `normal`
  - : L'élément peut recevoir la sélection normalement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-user-focus = ignore | normal | none`)}}

## Exemples

### HTML

```html
<input
  class="ignored"
  value="L'utilisateur·ice ne peut pas placer la sélection sur cet élément." />
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
