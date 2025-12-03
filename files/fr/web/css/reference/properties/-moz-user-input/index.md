---
title: -moz-user-input
slug: Web/CSS/Reference/Properties/-moz-user-input
original_slug: Web/CSS/-moz-user-input
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}{{Deprecated_Header}}

Pour les applications Mozilla, la propriété **`-moz-user-input`** détermine si l'utilisateur·ice peut effectuer une saisie sur l'élément.

Pour les éléments qui acceptent la saisie par défaut (ex. les élémetns {{HTMLElement("textarea")}}), la valeur initiale de `-moz-user-input` sera `enabled`.

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

- `none`
  - : L'élément ne réagit pas aux saisies de l'utilisateur·ice et il ne prend jamais l'état {{cssxref(":active")}}.
- `enabled`
  - : L'utilisateur·ice peut effectuer une saisie sur cet élément. Pour les boîtes de texte, c'est le comportement par défaut. **Cette valeur n'est plus prise en charge à partir de Firefox 60 (cf. [bug Firefox 1405087 <sup>(angl.)</sup>](https://bugzil.la/1405087)).**
- `disabled`
  - : L'utilisateur·ice ne peut pas effectuer de saisie sur cet élément (cela n'est pas équivalent à utiliser l'attribut `disabled` avec la valeur `true` car l'élément est dessiné normalement). **Cette valeur n'est plus prise en charge à partir de Firefox 60 (cf. [bug Firefox 1405087 <sup>(angl.)</sup>](https://bugzil.la/1405087)).**

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-user-input = auto | none`)}}

## Exemples

```css
input.exemple {
  /* L'utilisateur·ice pourra sélectionner le texte
     mais ne pourra pas le modifier. */
  -moz-user-input: disabled;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("user-modify", "-moz-user-modify")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
