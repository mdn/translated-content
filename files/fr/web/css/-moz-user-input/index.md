---
title: '-moz-user-input'
slug: Web/CSS/-moz-user-input
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-user-input
---
{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header(60)}}

Pour les applications Mozilla, la propriété **`-moz-user-input`** détermine si l'utilisateur peut effectuer une saisie sur l'élément (bien que rejetée, cette propriété a contribué à la construction de la propriété standard {{cssxref("user-input")}}.

```css
/* Valeurs avec un mot-clé */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* Valeurs globales */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

Pour les éléments qui acceptent la saisie par défaut (ex. les élémetns {{HTMLElement("textarea")}}), la valeur initiale de `-moz-user-input` sera `enabled`.

## Syntaxe

### Valeurs

- `none`
  - : L'élément ne réagit pas aux saisies de l'utilisateur et il ne prend jamais l'état {{cssxref(":active")}}.
- `enabled`
  - : L'utilisateur peut effectuer une saisie sur cet élément. Pour les boîtes de texte, c'est le comportement par défaut. **Cette valeur n'est plus prise en charge à partir de Firefox 60 (cf. {{bug(1405087)}}).**
- `disabled`
  - : L'utilisateur ne peut pas effectuer de saisie sur cet élément (cela n'est pas équivalent à utiliser l'attribut {{XULAttr("disabled")}} avec la valeur `true` car l'élément est dessiné normalement). **Cette valeur n'est plus prise en charge à partir de Firefox 60 (cf. {{bug(1405087)}}).**

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
input.exemple {
  /* L'utilisateur pourra sélectionner le texte
     mais ne pourra pas le modifier. */
  -moz-user-input: disabled;
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification. Une propriété similaire : `user-focus` a été [proposée pour des brouillons de l'ancienne spécifications CSS3 pour les interfaces utilisateurs](https://www.w3.org/TR/2000/WD-css3-userint-20000216) mais a été rejetée par le groupe de travail.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-moz-user-input")}}

## Voir aussi

- {{cssxref("-moz-user-focus")}}
- {{cssxref("-moz-user-modify")}}
- {{cssxref("-moz-user-select")}}
