---
title: Sélecteurs de type
slug: Web/CSS/Type_selectors
---

{{CSSRef("Selectors")}}

Les sélecteurs de type CSS ciblent des éléments en fonction du nom de leur nœud. Ainsi, lorsqu'un sélecteur de type est utilisé seul, il ciblera tous les éléments de ce type (autrement dit tous les nœuds avec ce nom) contenus dans le document.

```css
/* Cibler tous les éléments <a>. */
a {
  color: red;
}
```

## Syntaxe

```
élément { style propriétés }
```

## Exemples

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Voici un élément <code>span</code> avec du texte.</span>
<p>Et là un élément <code>p</code>.</p>
<span>Enfin, un autre élément <code>span</code>.</span>
```

### Résultat

{{EmbedLiveSample('Exemples', 200, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
