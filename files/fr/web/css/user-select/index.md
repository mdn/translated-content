---
title: user-select
slug: Web/CSS/user-select
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/user-select
---
{{CSSRef}}

La propriété **`user-select`** permet de contrôler l'opération de [sélection](/fr/docs/Web/API/Selection). Cela n'a aucun effet sur le contenu qui est chargé dans les éléments de l'interface ({{Glossary("Chrome", "chrome")}}), sauf pour les boîtes de texte.

```css
/* Valeurs avec un mot-clé */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* Valeurs globales */
user-select: inherit;
user-select: initial;
user-select: unset;

/* Valeurs spécifiques à Mozilla */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* Valeurs spécifiques à WebKit */
-webkit-user-select: none;
-webkit-user-select: text;
-webkit-user-select: all; /* Ne fonctionne pas pour Safari */

/* Valeurs spécifiques à Microsoft */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
```

## Syntaxe

- `none`
  - : On ne pourra pas sélectionner le texte de l'élément et celui de ses descendants. Toutefois, l'objet {{domxref("Selection")}} pourra contenir ces éléments. À partir de Firefox 21, `none` se comporte comme `-moz-none` et la sélection peut donc être réactivée sur les éléments fils avec `-moz-user-select:text`.
- `auto`

  - : Le texte sera sélectionné avec les propriétés par défaut appliquées par l'agent utilisateur. La valeur calculée est déterminée de la façon suivante :

    - Pour les pseudo-éléments `::before` et `::after`, la valeur calculée sera `none`
    - Si l'élément est un élément éditable, la valeur calculée est `contain`
    - Sinon, si la valeur calculée de  `user-select` pour l'élément parent est `all`, la valeur calculée sera `all`
    - Sinon, si la valeur calculée de  `user-select` pour l'élément parent est `all`, la valeur calculée sera `none`
    - Sinon, la valeur calculée est `text`

- `text`
  - : Le texte peut être sélectionné par l'utilisateur`.`
- `all`
  - : Dans un éditeur HTML, si un double clic ou si un clic contextuel se produit sur les éléments fils, c'est la valeur de l'ancêtre le plus haut qui sera sélectionnée.
- `contain`

  `element` {{non-standard_inline}} (alias spécifique à IE)

  - : Uniquement supporté par Internet Explorer. Cela permet d'activer la sélection au sein de l'élément, celle-ci ne pourra pas « sortir » de cet élément.

> **Note :** CSS UI 4 [a renommé `user-select: element` en `contain`](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
```

### HTML

```html
<p>Vous devriez pouvoir sélectionner ce texte.</p>
<p class="unselectable">Hop, vous ne pouvez pas sélectionner ce texte !</p>
<p class="all">Cliquer une fois permettra de sélectionner l'ensemble du texte.</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                        | État                         | Commentaires                                                                                           |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS4 UI', '#propdef-user-select', 'user-select')}} | {{Spec2('CSS4 UI')}} | Définition initiale. `-webkit-user-select` est indiqué comme étant un alias déprécié de `user-select`. |

## Compatibilité des navigateurs

{{Compat("css.properties.user-select")}}

## Voir aussi

- {{cssxref("::selection")}}
- L'objet JavaScript {{domxref("Selection")}}.
- [`user-select`](https://www.w3.org/TR/css-ui-4/#propdef-user-select) dans [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/css-ui-4/).
