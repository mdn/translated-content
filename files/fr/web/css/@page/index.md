---
title: "@page"
slug: Web/CSS/@page
---

{{CSSRef}}

La règle @ **`@page`** est utilisée afin de modifier certaines propriétés CSS lorsqu'on imprime un document. La règle `@page` ne permet pas de modifier toutes les propriétés mais uniquement celles qui portent sur les marges, les lignes orphelines et veuves ainsi que les sauts de page du document. Si on utilise cette règle @ pour modifier une autre propriété, ce changement sera ignoré.

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

La règle @ `@page` peut être manipulée via le CSSOM, notamment avec l'interface {{domxref("CSSPageRule")}}.

> [!NOTE]
> Le W3C est en train de discuter de la gestion des unités de longueur ({{cssxref("&lt;length&gt;")}}) relative à la zone d'affichage (_viewport_) : `vh`, `vw`, `vmin` et `vmax`. En attendant, il est conseillé de ne pas les utiliser au sein d'une règle `@page`.

## Syntaxe

### Descripteurs

- [`size`](/fr/docs/Web/CSS/@page/size)
  - : Définit la taille et l'orientation du bloc englobant la boîte de la page. En général, lorsqu'une boîte correspondant à une page est rendu sur une feuille, cela indique la taille de la page utilisée.

<!---->

- [`marks`](/fr/docs/orphaned/Web/CSS/@page/marks)
  - : Ajoute des marques pour la découpe ou l'alignement des pages du document.

<!---->

- [`bleed`](/fr/docs/orphaned/Web/CSS/@page/bleed)
  - : Définit la limite au-delà de la boîte de la page au-delà de laquelle le contenu affiché est rogné.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@page :first {
  margin: 2cm 3cm;
}
```

Pour d'autres exemples, voir les pages qui concernent les pseudo-classes liées à `@page` :

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}
- {{cssxref(":recto")}} {{experimental_inline}}
- {{cssxref(":verso")}} {{experimental_inline}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le bug de suivi Mozilla pour l'ensemble des fonctionnalités associées aux médias paginés.](https://bugzilla.mozilla.org/show_bug.cgi?id=286443)
