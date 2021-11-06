---
title: ':last-child'
slug: Web/CSS/:last-child
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:last-child
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:last-child`** permet de cibler un élément qui est le dernier enfant de son parent.

```css
/* Cible n'importe quel élément <li> tant que    */
/* celui-ci est le dernier enfant de son élément */
/* parent */
li:last-child {
  background-color: lime;
}
```

> **Note :** En CSS3, l'élément ciblé devait avoir un élément parent, cette restriction a été levée en CSS4.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
li:last-child {
  background-color: lime;
}
```

### HTML

```html
<ul>
   <li>Cet élément n'est pas vert !</li>
   <li>Celui-ci est vert.</li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 100)}}

## Spécifications

| Spécification                                                                    | État                                 | Commentaires                                                 |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| {{SpecName('CSS4 Selectors', '#last-child', ':last-child')}} | {{Spec2('CSS4 Selectors')}} | Il n'est plus obligatoire que l'élément ciblé ait un parent. |
| {{SpecName('CSS3 Selectors', '#last-child', ':last-child')}} | {{Spec2('CSS3 Selectors')}} | Définition initiale.                                         |

## Compatibilité des navigateurs

{{Compat("css.selectors.last-child")}}

## Voir aussi

- {{cssxref(":first-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
- {{CSSxRef(":-moz-last-node")}} {{Non-standard_Inline}}
