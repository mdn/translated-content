---
title: Pseudo-classe CSS `:heading()`
short-title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:heading()`** représente tous les [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) qui correspondent à une valeur calculée à l'aide de la notation `An+B`. Cela vous permet de mettre en forme des éléments à des niveaux de titre spécifiques en même temps, plutôt que de les correspondre et de les mettre en forme individuellement.

> [!NOTE]
> La fonction `:heading()` a la même [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity#détermination_de_la_spécificité) qu'un sélecteur de classe, c'est-à-dire `0-1-0`. Ainsi, `:heading()` aurait une spécificité de `0-1-0`, et `section:heading()` aurait une spécificité de `0-1-1`.

## Syntaxe

```css-nolint
:heading( <integer># ) {
  /* ... */
}
```

### Paramètres

La fonction de pseudo-classe `:heading()` prend une liste séparée par des virgules d'entiers ({{CSSxRef("&lt;integer&gt;")}}) qui représentent les niveaux de titre à mettre en forme.

## Notes d'utilisation

La pseudo-classe fonctionnelle `:heading()` ne correspond qu'aux éléments qui sont sémantiquement reconnus comme des titres. Elle ne correspond pas aux éléments qui utilisent les attributs [`role="heading"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) ou ['aria-level'](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level).

Le niveau de titre utilisé par `:heading()` peut être différent du [sélecteur de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) d'un élément dans les cas où le navigateur calcule un niveau de titre exposé différent. Par exemple, `h1:heading(3)` correspondra à tout élément `<h1>` exposé comme un titre de niveau 3.

## Exemples

### Sélectionner un titre spécifique

Dans cet exemple, une liste de valeurs séparées par des virgules est utilisée pour cibler les titres de niveaux impairs (`<h1>` et `<h3>`) et de niveaux pairs (`<h2>` et `<h4>`).

```html
<h1>Entête 1</h1>
<h2>Entête 2</h2>
<h3>Entête 3</h3>
<h4>Entête 4</h4>
```

```css
:heading(1, 3) {
  color: tomato;
}
:heading(2, 4) {
  color: slateblue;
}
```

{{EmbedLiveSample("Sélectionner un titre spécifique", "", 215)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":heading")}}
