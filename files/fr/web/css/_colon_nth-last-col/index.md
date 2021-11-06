---
title: ':nth-last-col'
slug: Web/CSS/:nth-last-col
translation_of: Web/CSS/:nth-last-col
browser-compat: css.selectors.nth-last-col
---
{{CSSRef}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-last-col()`** est conçue pour les tableaux et les grilles. Elle accepte les notations de type `An+B` telles qu'utilisées avec le sélecteur {{Cssxref(":nth-child")}}, ce qui permet de cibler plusieurs colonnes en comptant à partir de la fin du jeu de colonnes. Les valeurs _odd_ et _even_ sont aussi valides.

```css
/* Sélectionne toutes les valeurs impaires du tableau */
:nth-last-col(odd) {
  background-color: pink;
}
```

## Syntaxe

La pseudo-classe `nth-last-col` est spécifiée avec un argument unique qui représente le motif utilisé pour faire la correspondance des éléments.

Voir {{Cssxref(":nth-child")}} pour une explication plus détaillée de cette syntaxe.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple basique

#### HTML

```html
<table>
  <tr>
    <td>un</td>
    <td>deux</td>
    <td>trois</td>
    <td>quatre</td>
  </tr>
  <tr>
    <td>un</td>
    <td>deux</td>
    <td>trois</td>
    <td>quatre</td>
  </tr>
</table>
```

#### CSS

```css
td {
  border: 1px solid #ccc;
  padding: .2em;
}

/* Colonnes impaires, en commençant par la colonne finale du tableau */
:nth-last-col(2n+1) {
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_basique', 250, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
