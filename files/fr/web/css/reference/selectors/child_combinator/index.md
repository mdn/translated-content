---
title: Combinateur enfant
slug: Web/CSS/Reference/Selectors/Child_combinator
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Le **combinateur enfant** (`>`) est placé entre deux sélecteurs CSS. Il cible uniquement les éléments correspondant au second sélecteur qui sont des enfants directs des éléments correspondant au premier.

```css
/* Les éléments <li> qui sont des enfants d'une liste "mon-truc" */
ul.mon-truc > li {
  margin: 2em;
}
```

Les éléments correspondant au second sélecteur doivent être les enfants immédiats des éléments correspondant au premier sélecteur. C'est plus strict que le [combinateur de descendant](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator), qui cible tous les éléments correspondant au second sélecteur pour lesquels il existe un élément ancêtre correspondant au premier sélecteur, peu importe le nombre de «&nbsp;sauts&nbsp;» dans le DOM.

## Syntaxe

```css-nolint
/* L'espace autour du combinateur > est optionnel mais recommandé. */
selector1 > selector2 { /* propriétés de style */ }
```

## Exemples

### CSS

```css
span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}
```

### HTML

```html
<div>
  <span
    >Premier span du div.
    <span>Deuxième span, dans un span dans un div.</span>
  </span>
</div>
<span>Troisième span, en dehors de tout div.</span>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le combinateur de descendant](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
