---
title: '@page'
slug: Web/CSS/@page
tags:
  - CSS
  - Reference
  - Règle @
translation_of: Web/CSS/@page
---
{{CSSRef}}

La règle @ **`@page`** est utilisée afin de modifier certaines propriétés CSS lorsqu'on imprime un document. La règle `@page` ne permet par de modifier toutes les propriétés mais uniquement celles qui portent sur les marges, les lignes orphelines et veuves ainsi que les sauts de page du document. Si on utilise cette règle @ pour modifier une autre propriété, ce changement sera ignoré.

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

La règle @ `@page` peut être manipulée via le CSSOM, notamment avec l'interface {{domxref("CSSPageRule")}}.

> **Note :** Le W3C est en train de discuter de la gestion des unités de longueur ({{cssxref("&lt;length&gt;")}}) relative à la zone d'affichage (_viewport_) : `vh`, `vw`, `vmin` et `vmax`. En attendant, il est conseillé de ne pas les utiliser au sein d'une règle `@page`.

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

| Spécification                                                                                        | État                                             | Commentaires                                                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#logical-page', ':recto and :verso')}} | {{Spec2('CSS Logical Properties')}} | Ajout des sélecteurs de page `:recto` et `:verso`.                                                                                    |
| {{SpecName('CSS3 Paged Media', '#at-page-rule', '@page')}}                         | {{Spec2('CSS3 Paged Media')}}         | Aucun changement depuis  {{SpecName('CSS2.1')}}, bien que plus de règles @ puissent être utilisées au sein d'une règle `@page`. |
| {{SpecName('CSS2.1', 'page.html#page-selectors', '@page')}}                     | {{Spec2('CSS2.1')}}                         | Définition initiale.                                                                                                                  |

## Compatibilité des navigateurs

{{Compat("css.at-rules.page")}}

## Voir aussi

- [Le bug de suivi Mozilla pour l'ensemble des fonctionnalités associées aux médias paginés.](https://bugzilla.mozilla.org/show_bug.cgi?id=286443)
