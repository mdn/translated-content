---
title: Propriété CSS `-moz-user-focus`
short-title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_Header}}

La propriété [CSS](/fr/docs/Web/CSS) **`-moz-user-focus`** est utilisée pour indiquer si l'élément peut recevoir la sélection.

En utilisant la valeur `ignore`, on peut désactiver la prise de sélection sur l'élément (l'utilisateur·ice ne peut pas activer l'élément) et l'élément est sauté lors de la navigation à la tabulation.
La valeur par défaut est `none`, qui désactive la prise de sélection sur l'élément et retire la sélection des autres éléments s'il y a une tentative de sélectionner l'élément.

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

Cette propriété est définie comme l'un des mots-clés suivants&nbsp;:

- `ignore`
  - : L'élément n'accepte pas la sélection (au clavier ou au pointeur) et est sauté lors de la navigation à la tabulation.
- `normal`
  - : L'élément peut recevoir la sélection normalement.
- `none`
  - : L'élément n'accepte pas la sélection au clavier.
    Toute tentative de sélectionner l'élément retire la sélection des autres éléments.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-user-focus = ignore | normal | none`)}}

## Exemples

### HTML

```html
<input
  class="ignore"
  value="L'utilisateur·ice ne peut pas placer la sélection sur cet élément." />
```

### CSS

```css
.ignore {
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
