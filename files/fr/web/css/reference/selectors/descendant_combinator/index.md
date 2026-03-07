---
title: Combinateur de descendant
slug: Web/CSS/Reference/Selectors/Descendant_combinator
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Le **combinateur de descendant** — généralement représenté par un seul caractère espace («&nbsp;») — combine deux sélecteurs de sorte que les éléments correspondant au second sélecteur sont sélectionnés s'ils ont un ancêtre (parent, parent du parent, parent du parent du parent, etc.) qui correspond au premier sélecteur. Les sélecteurs qui utilisent un combinateur de descendant sont appelés _sélecteurs de descendant_.

```css
/* Les éléments <li> qui sont des descendants d'une liste "mon-truc" */
ul.mon-truc li {
  margin: 2em;
}
```

Techniquement, le combinateur de descendant est constitué d'un ou plusieurs caractères d'espacement {{Glossary("CSS")}} — le caractère espace et/ou l'un des quatre caractères de contrôle&nbsp;: retour chariot, saut de page, saut de ligne et tabulation — placés entre deux sélecteurs en l'absence d'un autre combinateur. De plus, les caractères d'espacement qui composent le combinateur peuvent contenir n'importe quel nombre de commentaires CSS.

## Syntaxe

```css
selector1 selector2 {
  /* propriétés de style */
}
```

## Exemples

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Élément 1</div>
    <ul>
      <li>Sous-élément A</li>
      <li>Sous-élément B</li>
    </ul>
  </li>
  <li>
    <div>Élément 2</div>
    <ul>
      <li>Sous-élément A</li>
      <li>Sous-élément B</li>
    </ul>
  </li>
</ul>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélecteur d'enfant](/fr/docs/Web/CSS/Reference/Selectors/Child_combinator)
