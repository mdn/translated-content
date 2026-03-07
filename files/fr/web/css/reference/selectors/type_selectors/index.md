---
title: Sélecteurs de type
slug: Web/CSS/Reference/Selectors/Type_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le **sélecteur de type** CSS cible les éléments par nom de nœud. En d'autres termes, il sélectionne tous les éléments du type donné dans un document.

```css
/* Cibler tous les éléments <a>. */
a {
  color: red;
}
```

Les sélecteurs de type peuvent être associés à un espace de noms lors de l'utilisation de {{CSSxRef("@namespace")}}. Cela est utile lorsque vous travaillez avec des documents contenant plusieurs espaces de noms, comme HTML avec SVG ou MathML intégré, ou XML qui mélange plusieurs vocabulaires.

- `ns|h1` - cible les éléments `<h1>` dans l'espace de noms _ns_
- `*|h1` - cible tous les éléments `<h1>`
- `|h1` - cible tous les éléments `<h1>` sans espace de noms déclaré

## Syntaxe

```css
element {
  /* propriétés de style */
}
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

{{EmbedLiveSample("Exemples", 200, 150)}}

### Espaces de noms

Dans cet exemple, le sélecteur ne correspondra qu'aux éléments `<h1>` dans l'espace de noms example.

```css
@namespace example url("http://www.exemple.com/");
example|h1 {
  color: blue;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Apprendre CSS&nbsp;: Sélecteurs de base](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
