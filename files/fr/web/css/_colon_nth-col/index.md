---
title: ':nth-col'
slug: Web/CSS/:nth-col
translation_of: Web/CSS/:nth-col
browser-compat: css.selectors.nth-col
---
{{CSSRef}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-col()`** est conçue pour les tableaux et les grilles. Elle accepte les notations de type `An+B` telles qu'utilisées avec le sélecteur {{Cssxref(":nth-child")}}, ce qui permet de cibler un jeu de colonnes. Les valeurs _odd_ et _even_ sont aussi valides.

```css
/* Sélectionne toutes les valeurs impaires du tableau */
:nth-col(odd) {
  background-color: pink;
}
```

## Syntaxe

La pseudo-classe `nth-col` est spécifiée avec un argument unique qui représente le motif utilisé pour faire la correspondance des éléments.

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

/* Colonnes impaires */
:nth-col(2n+1) {
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample('Exemples', 250, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
