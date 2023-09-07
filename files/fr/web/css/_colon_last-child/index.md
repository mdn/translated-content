---
title: ":last-child"
slug: Web/CSS/:last-child
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":first-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
- {{CSSxRef(":-moz-last-node")}} {{Non-standard_Inline}}
