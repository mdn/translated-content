---
title: :left
slug: Web/CSS/Reference/Selectors/:left
original_slug: Web/CSS/:left
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:left`**, liée à la règle {{cssxref("@page")}}, permet de cibler les pages de gauche lors d'une impression.

```css
/* Sélectionne le contenu des pages gauches */
/* lors de l'impression */
@page :left {
  margin: 2cm 3cm;
}
```

La position de la page soit à gauche ou à droite dépend de la direction d'écriture globale du document. Par exemple, si la première page est selon la direction « gauche à droite » alors elle sera une page {{cssxref(":right")}}, si elle est définie de « droite à gauche » ce sera une page `:left`.

> [!NOTE]
> Cette pseudo-classe peut être utilisée pour modifier uniquement le {{cssxref("margin")}}, {{cssxref("padding")}}, {{cssxref("border")}} et {{cssxref("background")}} de **la boîte correspondant à la page**. Toutes les autres propriétés CSS seront ignorées. Seule la boîte correspondant à la page pourra être affectée, le contenu du document ne pourra pas être modifié.

## Syntaxe

```css
:left {
  /* ... */
}
```

## Exemples

### Définition d'une marge pour les pages de gauche

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
- Les autres pseudo-classes de page&nbsp;:
  - {{cssxref(":first")}}
  - {{cssxref(":right")}}
