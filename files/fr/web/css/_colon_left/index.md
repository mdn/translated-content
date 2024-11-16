---
title: ":left"
slug: Web/CSS/:left
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:left`**, liée à la règle {{cssxref("@page")}}, permet de cibler les pages de gauche lors d'une impression. Ceci permet de mettre en forme spécifiquement les pages de gauche.

```css
/* Sélectionne le contenu des pages gauches */
/* lors de l'impression */
@page :left {
  margin: 2in 3in;
}
```

La position de la page soit à gauche ou à droite dépend de la direction d'écriture globale du document. Par exemple, si la première page est selon la direction « gauche à droite » alors elle sera une page {{cssxref(":right")}}, si elle est définie de « droite à gauche » ce sera une page `:left`.

> [!NOTE]
> Il n'est pas possible de changer toutes les propriétés CSS. Seules les propriétés {{cssxref("margin")}}, {{cssxref("padding")}}, {{cssxref("border")}} et {{cssxref("background")}} de **la boîte correspondant à la page** peuvent être modifiées. Toutes les autres propriétés CSS seront ignorées. Seule la boîte correspondant à la page pourra être affectée, le contenu du document ne pourra pas être modifié.

## Syntaxe

{{csssyntax}}

## Exemples

```css
@page :left {
  margin: 2cm 3cm;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@page")}}
- {{cssxref(":first")}}
- {{cssxref(":right")}}
