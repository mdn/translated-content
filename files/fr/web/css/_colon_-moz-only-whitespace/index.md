---
title: ':-moz-only-whitespace'
slug: Web/CSS/:-moz-only-whitespace
translation_of: Web/CSS/:-moz-only-whitespace
---
{{CSSRef}}{{SeeCompatTable}}

> **Note :** Dans la spécification {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}}, le sélecteur {{CSSxRef(":empty")}} a été modifié pour se comporter comme `:-moz-only-whitespace` mais aucun navigateur ne prend actuellement en charge cette fonctionnalité.

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:-moz-only-whitespace`** correspond aux éléments qui n'ont aucun nœud enfant, aux nœuds texte vides ou aux nœuds texte ne possédant que des espaces.

## Syntaxe

{{CSSSyntax}}

## Exemples

### HTML

```html
<div> </div>
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

Cette pseudo-classe a été renommée en `:blank` dans {{SpecName("CSS4 Selectors", "#changes-2018-02")}} puis la fonctionnalité a été fusionnée avec {{CSSxRef(":empty")}} et {{CSSxRef(":blank")}} a été redéfinie afin d'indiquer un élément {{HTMLElement("input")}} vide.

## Compatibilité des navigateurs

{{Compat("css.selectors.moz-only-whitespace")}}

## Voir aussi

- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
