---
title: :nth-of-type
slug: Web/CSS/:nth-of-type
l10n:
  sourceCommit: f22e72998f4e8f48b18ef358521bfc9ad1ae9446
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-of-type()`** permet de cibler les éléments selon leur position parmi les voisins du même type (les mêmes noms de balise).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-of-type.html", "tabbed-shorter")}}

## Syntaxe

La pseudo-classe `nth-of-type` ne prend qu'un argument qui représente le motif de répétition pour les éléments ciblés.

Voir [`:nth-child`](/fr/docs/Web/CSS/:nth-child) pour une explication plus détaillée de sa syntaxe.

```css-nolint
:nth-of-type(<an-plus-b> | even | odd) {
  /* ... */
}
```

## Exemples

### Exemple simple

Dans cet exemple nous allons colorer un paragraphe sur deux avec des couleurs différentes et mettre le premier paragraphe en gras.

#### HTML

```html
<div>
  <div>Cet élément n'est pas compté.</div>
  <p>1er paragraphe.</p>
  <p class="fancy">2e paragraphe.</p>
  <div>Cet élément n'est pas compté.</div>
  <p class="fancy">3e paragraphe.</p>
  <p>4e paragraphe.</p>
</div>
```

### CSS

```css
/* Paragraphes impairs */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Paragraphes pairs */
p:nth-of-type(2n) {
  color: blue;
}

/* Premier paragraphe */
p:nth-of-type(1) {
  font-weight: bold;
}

/* Cela ciblera le 3e paragraphe, car on cible les éléments impairs (2n+1) et qui ont la classe fancy.
Le deuxième paragraphe a bien la classe fancy, mais n'est pas ciblé, car pair (et non :nth-of-type(2n+1)) */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

### Résultat

{{EmbedLiveSample('','250','250')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:nth-child`](/fr/docs/Web/CSS/:nth-child)
- [`:nth-last-of-type`](/fr/docs/Web/CSS/:nth-last-of-type)
