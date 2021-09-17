---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/overscroll-behavior-y
---
{{CSSRef}}

La propriété CSS **`overscroll-behavior-y`** permet de contrôler le comportement de l'agent utilisateur lorsqu'on atteint la limite de la zone de défilement sur l'axe vertical.

> **Note :** Voir {{cssxref("overscroll-behavior")}} pour plus de détails.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-y: auto;
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Valeurs globales */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: unset;
```

La propriété `overscroll-behavior-x` est définie avec un des mots-clés définis ci-après.

### Valeurs

- `auto`
  - : Le dépassement de la zone de défilement se déroule normalement.
- `contain`
  - : Le comportement normal est utilisé à l'intérieur de l'élément pour lequel s'applique cette valeur (on a donc un effet de rebondissement) mais aucun effet associé n'a lieu sur les zones de défilement environnantes. Autrement dit, les éléments sous-jacents ne défilent pas.
- `none`
  - : Il n'y a pas d'effet associé sur les zones de défilement environnantes et on empêche le comportement normal de se produire sur l'élément lorsqu'on dépasse de la zone de défilement.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Voir {{cssxref("overscroll-behavior")}}  pour un exemple complet et plus de détails.

## Spécifications

| Spécification                                                                                                                | État                                         | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------ |
| {{SpecName('Overscroll Behavior', '#propdef-overscroll-behavior-y', 'overscroll-behavior-y')}} | {{Spec2('Overscroll Behavior')}} |              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.overscroll-behavior-y")}}

## Voir aussi

- [Take control of your scroll: customizing pull-to-refresh and overflow effects (en anglais)](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
