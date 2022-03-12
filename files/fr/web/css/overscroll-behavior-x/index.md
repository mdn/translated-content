---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/overscroll-behavior-x
---
{{CSSRef}}

La propriété CSS **`overscroll-behavior-x`** définit le comportement de l'agent utilisateur lorsqu'on atteint la limite de la zone de défilement sur l'axe horizontal.

> **Note :** Voir {{cssxref("overscroll-behavior")}} pour plus de détails.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-x: auto;
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Valeurs globales */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: unset;
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

Dans l'exemple [`overscroll-behavior-x`](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (cf. [le code source](https://github.com/mdn/css-examples/blob/master/overscroll-behavior/overscroll-behavior-x.html) associé), on dispose de deux boîtes de bloc, l'une contenue à l'intérieure de l'autre. La boîte englobante possède une grande largeur avec {{cssxref("width")}} afin que la page puisse défiler horizontalement. La boîte intérieure a une petite largeur (et une petite hauteur, définie avec {{cssxref("height")}}) afin de pouvoir être facilement contenue dans la zone d'affichage mais son contenu possède une grande largeur afin de défiler horizontalement.

Par défaut, lorsqu'on fait défiler la boîte intérieure et qu'on atteint une limite de défilement, c'est toute la page qui commence à défiler. Si ce n'est pas le comportement souhaité, on peut empêcher ça en utilisant `overscroll-behavior-x: contain` sur la boîte intérieure :

```css
main > div {
  height: 300px;
  width: 500px;
  overflow: auto;
  position: relative;
  top: 100px;
  left: 100px;
  overscroll-behavior-x: contain;
}
```

## Spécifications

| Spécification                                                                                                                | État                                         | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------ |
| {{SpecName('Overscroll Behavior', '#propdef-overscroll-behavior-x', 'overscroll-behavior-x')}} | {{Spec2('Overscroll Behavior')}} |              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.overscroll-behavior-x")}}

## Voir aussi

- [Take control of your scroll: customizing pull-to-refresh and overflow effects (en anglais)](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
