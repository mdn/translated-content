---
title: :left
slug: Web/CSS/Reference/Selectors/:left
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:left`**, liée à la règle {{CSSxRef("@page")}}, permet de cibler les pages de gauche lors d'une impression.

```css
/* Sélectionne le contenu des pages gauches */
/* lors de l'impression */
@page :left {
  margin: 2cm 3cm;
}
```

La position de la page soit à gauche ou à droite dépend de la direction d'écriture globale du document. Par exemple, si la première page est selon la direction « gauche à droite » alors elle sera une page {{CSSxRef(":right")}}, si elle est définie de « droite à gauche » ce sera une page `:left`.

> [!NOTE]
> Cette pseudo-classe peut être utilisée pour modifier uniquement le {{CSSxRef("margin")}}, {{CSSxRef("padding")}}, {{CSSxRef("border")}} et {{CSSxRef("background")}} de **la boîte correspondant à la page**. Toutes les autres propriétés CSS seront ignorées. Seule la boîte correspondant à la page pourra être affectée, le contenu du document ne pourra pas être modifié.

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

- La règle {{CSSxRef("@page")}}
- Les autres pseudo-classes de page&nbsp;:
  - {{CSSxRef(":first")}}
  - {{CSSxRef(":right")}}
