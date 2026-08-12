---
title: Propriété CSS `user-modify`
short-title: user-modify
slug: Web/CSS/Reference/Properties/user-modify
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
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

### Valeurs

Cette propriété est définie par l'un des mots-clés suivants&nbsp;:

- `read-only`
  - : La valeur par défaut. Le contenu est en lecture seule.
- `read-write`
  - : L'utilisateur·ice peut lire et éditer le contenu.
- `read-write-plaintext-only`
  - : Identique à `read-write`, mais la mise en forme du texte est perdue.
- `write-only`
  - : L'utilisateur·ice peut éditer le contenu; mais ne peut pas le lire.

## Syntaxe formelle

{{CSSSyntaxRaw(`user-modify = read-only | read-write | read-write-plaintext-only | write-only`)}}

## Exemples

### HTML

```html
<div class="lecture-ecriture">
  L'utilisateur·ice est capable de modifier ce texte.
</div>
```

### CSS

```css
.lecture-ecriture {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

## Spécifications

Ne fait pas partie d'un standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("-moz-user-focus")}}
- La propriété {{CSSxRef("-moz-user-input")}}
- La propriété {{CSSxRef("user-select", "-moz-user-select")}}
