---
title: :first
slug: Web/CSS/Reference/Selectors/:first
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:first`**, liée à la règle @ {{CSSxRef("@page")}} décrit la mise en forme de la première page lors de l'impression d'un document. ( voir {{CSSxRef(":first-child")}} pour le premier élément d'un noeud )

```css
/* Cible le contenu de la première page */
/* lorsqu'on imprime */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> Vous ne pouvez pas modifier toutes les propriétés CSS avec cette pseudo-classe. Vous pouvez uniquement modifier les marges, {{CSSxRef("orphans")}}, {{CSSxRef("widows")}} et les sauts de page du document. De plus, vous ne pouvez utiliser que des unités de [longueur absolues](/fr/docs/Web/CSS/Reference/Values/length#absolute_length_units) pour définir les marges. Toutes les autres propriétés seront ignorées.

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

- La règle {{CSSxRef("@page")}}
- Les autres pseudo-classes liées à la mise en page&nbsp;:
  - {{CSSxRef(":left")}}
  - {{CSSxRef(":right")}}
