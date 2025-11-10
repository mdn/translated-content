---
title: :first
slug: Web/CSS/Reference/Selectors/:first
original_slug: Web/CSS/:first
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:first`**, liée à la règle @ {{cssxref("@page")}} décrit la mise en forme de la première page lors de l'impression d'un document. ( voir {{cssxref(":first-child")}} pour le premier élément d'un noeud )

```css
/* Cible le contenu de la première page */
/* lorsqu'on imprime */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> Vous ne pouvez pas modifier toutes les propriétés CSS avec cette pseudo-classe. Vous pouvez uniquement modifier les marges, {{cssxref("orphans")}}, {{cssxref("widows")}} et les sauts de page du document. De plus, vous ne pouvez utiliser que des unités de [longueur absolues](/fr/docs/Web/CSS/Reference/Values/length#absolute_length_units) pour définir les marges. Toutes les autres propriétés seront ignorées.

## Syntaxe

```css
:first {
  /* ... */
}
```

## Exemples

### Utilisation de `:first` pour les styles d'impression de page

Appuyez sur le bouton «&nbsp;Imprimer !&nbsp;» pour imprimer l'exemple. Les mots sur la première page doivent être quelque part autour du centre, tandis que les autres pages auront leur contenu à la position par défauts&nbsp;:

```html live-sample___colon-first
<p>Première page.</p>
<p>Deuxième page.</p>
<button>Imprimer !</button>
```

```css live-sample___colon-first
@page :first {
  size: 8.5in 11in;
  margin-left: 3in;
  margin-top: 5in;
}

p {
  page-break-after: always;
  font: 1.2em sans-serif;
}
```

```js live-sample___colon-first
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

{{EmbedLiveSample('colon-first', '100%', , , , , , "allow-modals")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@page")}}
- Les autres pseudo-classes liées à la mise en page&nbsp;:
  - {{cssxref(":left")}}
  - {{cssxref(":right")}}
