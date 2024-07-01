---
title: ":last-of-type"
slug: Web/CSS/:last-of-type
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:last-of-type`** cible un élément qui est le dernier enfant d'un type donné dans la liste des enfants de l'élément parent.

```css
/* Cible n'importe quel paragraphe qui est     */
/* le dernier paragraphe de son élément parent */
p:last-of-type {
  color: lime;
}
```

> **Note :** Dans la version initiale de la spécification (CSS3), l'élément ciblé devait avoir un parent, ce n'est plus nécessaire depuis (spécification pour les sélecteurs de CSS4).

## Syntaxe

{{csssyntax}}

## Exemples

Pour cibler le dernier élément {{HTMLElement("em")}} au sein d'un élément {{HTMLElement("p")}}, on pourra utiliser la règle qui suit (illustrée ensuite sur un fragment HTML).

### CSS

```css
p em:last-of-type {
  color: lime;
}
```

### HTML

```html
<p>
  <em>Je ne suis pas vert :(</em>
  <strong>Je ne suis pas vert :(</strong>
  <em>Je suis vert :D</em>
  <strong>Je ne suis pas vert non plus :(</strong>
</p>

<p>
  <em>Je ne suis pas vert :(</em>
  <span>
    <em>Je suis vert !</em>
  </span>
  <strong>Je ne suis pas vert :(</strong>
  <em>Je suis vert :D</em>
  <span>
    <em>Je suis aussi vert !</em>
    <strike>Je ne suis pas vert</strike>
  </span>
  <strong>Je ne suis pas vert non plus :(</strong>
</p>
```

### Résultat

{{EmbedLiveSample('Exemples','100%', '120')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":nth-last-of-type")}}
- {{cssxref(":first-of-type")}}
- {{cssxref(":last-child")}}
