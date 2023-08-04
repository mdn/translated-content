---
title: ":-moz-only-whitespace"
slug: Web/CSS/:-moz-only-whitespace
---

{{CSSRef}}{{SeeCompatTable}}

> **Note :** Dans la spécification CSS4 Selectors, le sélecteur {{CSSxRef(":empty")}} a été modifié pour se comporter comme `:-moz-only-whitespace` mais aucun navigateur ne prend actuellement en charge cette fonctionnalité.

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:-moz-only-whitespace`** correspond aux éléments qui n'ont aucun nœud enfant, aux nœuds texte vides ou aux nœuds texte ne possédant que des espaces.

## Syntaxe

{{CSSSyntax}}

## Exemples

### HTML

```html
<div></div>
```

### CSS

```css hidden
:root {
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
}

div {
  background-color: #ccc;
  box-sizing: border-box;
  height: 100vh;
  min-height: 16px;
  min-height: 1rem;
}
```

```css
div {
  border: 4px solid red;
}

:-moz-only-whitespace {
  border-color: lime;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "50")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
