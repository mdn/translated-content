---
title: user-modify
slug: Web/CSS/Reference/Properties/user-modify
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

La propriété [CSS](/fr/docs/Web/CSS) **`user-modify`** n'a aucun effet. Elle était initialement conçue pour déterminer si le contenu d'un élément peut être édité ou non par l'utilisateur·ice.

> [!WARNING]
> Cette propriété a été remplacée par l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
user-modify: read-only;
user-modify: read-write;
user-modify: write-only;

/* Valeurs globales */
user-modify: inherit;
user-modify: initial;
user-modify: revert;
user-modify: unset;
```

La propriété `-moz-user-modify` est définie grâce à un mot-clé parmi ceux de la liste ci-après.

### Valeurs

- `read-only` {{Non-standard_Inline}}{{Deprecated_Inline}}
  - : La valeur par défaut. Le contenu est en lecture seule.
- `read-write` {{Non-standard_Inline}}{{Deprecated_Inline}}
  - : L'utilisateur·ice peut lire et éditer le contenu.
- `read-write-plaintext-only` {{Non-standard_Inline}}{{Deprecated_Inline}}
  - : Identique à `read-write`, mais la mise en forme du texte sera perdue.
- `write-only` {{Non-standard_Inline}}{{Deprecated_Inline}}
  - : L'utilisateur·ice peut éditer le contenu; mais ne peut pas le lire.

## Syntaxe formelle

{{CSSSyntaxRaw(`user-modify = read-only | read-write | read-write-plaintext-only | write-only`)}}

## Exemples

### HTML

```html
<div class="readwrite">L'utilisateur·ice est capable d'éditer ce texte.</div>
```

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

## Spécifications

Ne fait pas partie d'un standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("-moz-user-focus")}} {{Non-standard_Inline}}{{Deprecated_Inline}}
- La propriété {{CSSxRef("-moz-user-input")}} {{Non-standard_Inline}}{{Deprecated_Inline}}
- La propriété {{CSSxRef("user-select", "-moz-user-select")}}
