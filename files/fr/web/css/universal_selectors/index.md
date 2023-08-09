---
title: Sélecteurs universels
slug: Web/CSS/Universal_selectors
---

{{CSSRef("Selectors")}}

L'astérisque (\*) est le sélecteur universel en CSS. Il correspond à un élément de n'importe quel type.

```css
* {
  color: green;
}
```

En CSS 3, l'astérisque peut être combinée avec les espaces de nom :

- `ns|*` - correspond à tous les éléments de l'espace de noms `ns`
- `*|*` - correspond à tous les éléments
- `|*` - correspond à tous les éléments sans espace de noms déclaré

## Syntaxe

```
* { style properties }
```

L'astérisque est optionnelle lorsqu'elle est utilisée avec des sélecteurs simples. Par exemple, `*.warning` et `.warning` seront équivalents.

## Exemples

### CSS

```css
* [lang^="fr"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="fr">Un span vert</span> dans un paragraphe rouge.
</p>
<p id="maincontent" lang="fr">
  <span class="warning">Un span rouge</span> dans un paragraphe vert.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', 250, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
