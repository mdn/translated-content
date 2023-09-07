---
title: ":nth-of-type"
slug: Web/CSS/:nth-of-type
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:nth-of-type()`** correspond à des éléments d'un type donné, en fonction de leur position au sein d'un groupe de frères et sœurs.

```css
/* Sélectionne chaque élément de type <p> dont
la position parmi l'ensemble des éléments de type <p>
descendants directement du même élément parent,
est un multiple de 4. */
p:nth-of-type(4n) {
  color: lime;
}
```

## Syntaxe

La pseudo-classe `nth-of-type` ne prend qu'un argument qui représente le motif de répétition pour les éléments ciblés.

Pour une explication plus détaillée de sa syntaxe voir {{Cssxref(":nth-child")}}

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans cet exemple nous allons colorer un paragrapher sur deux avec des couleurs différentes et mettre le premier paragraphe en gras

### HTML

```html
<div>
  <div>Cet élément n'est pas compté.</div>
  <p>1er paragraphe.</p>
  <p>2e paragraphe.</p>
  <div>Cet élément n'est pas compté.</div>
  <p>3e paragraphe.</p>
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
```

### Résultat

{{EmbedLiveSample('Exemples','250','200')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":nth-child")}}
- {{cssxref(":nth-last-of-type")}}
