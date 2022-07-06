---
title: '-moz-user-focus'
slug: Web/CSS/-moz-user-focus
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-user-focus
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-moz-user-focus`** est utilisée pour indiquer si l'élément peut recevoir le focus.

```css
/* Valeurs avec un mot-clé */
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* Valeurs globales */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

En utilisant la valeur `ignore`, on peut désactiver la prise de focus sur l'élément (l'utilisateur ne pourra pas activer l'élément) et l'élément sera sauté lors de la navigation à la tabulation.

> **Note :** Cette propriété ne fonctionne pas pour les éléments XUL {{XULElem("textbox")}} car l'élément `textbox` en tant que tel ne reçoit jamais le focus. À la place, XBL crée un élément HTML {{HTMLElement("input")}} anonyme à l'intérieur du `textbox` et que l'élément reçoit le focus. On peut empêcher le `textbox` de prendre le focus clavier en passant son index de tabulation à `-1`, pour l'empêcher de prendre le focus souris, on pourra utiliser les événements `mousedown`.

## Syntaxe

### Valeurs

- `ignore`
  - : L'élément n'accepte pas le focus (au clavier ou au pointeur) et sera sauté lors de la navigation à la tabulation.
- `normal`
  - : L'élément peut recevoir le focus normalement.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<input class="ignored" value="L'utilisateur ne peut pas placer le focus sur cet élément.">
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification. Une propriété similaire : `user-focus` a été [proposée pour des brouillons de l'ancienne spécifications CSS3 pour les interfaces utilisateurs](https://www.w3.org/TR/2000/WD-css3-userint-20000216) mais a été rejetée par le groupe de travail.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-moz-user-focus")}}

## Voir aussi

- {{cssxref("-moz-user-input")}}
- {{cssxref("-moz-user-modify")}}
- {{cssxref("-moz-user-select")}}
