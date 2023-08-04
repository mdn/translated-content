---
title: ":right"
slug: Web/CSS/:right
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:right`**, liée à la règle {{cssxref("@page")}}, correspond aux pages de droite pour un média paginé. Ceci permet de mettre en forme les pages de droite.

```css
/* Sélectionne le contenu des pages droites */
/* lorsqu'on imprime le document */
@page :right {
  margin: 2in 3in;
}
```

La position de la page (à gauche ou à droite) dépend de la direction d'écriture appliquée au document. Si la première page est écrite de la gauche vers la droite, alors ce sera une page droite, sinon ce sera une page gauche (qui pourra alors être ciblée avec {{cssxref(":left")}}).

> **Note :** Il n'est pas possible de modifier toutes les propriétés CSS. Seules les propriétés {{cssxref("margin")}}, {{cssxref("padding")}}, {{cssxref("border")}}, and {{cssxref("background")}} **de la boîte correspondant à la page** peuvent être modifiées. Toutes les autres propriétés CSS seront ignorées, et seulement la boîte correspondant à la page, et en aucun cas le contenu du document pourront être affectés.

## Syntaxe

{{csssyntax}}

## Exemples

```css
@page :right {
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
- {{cssxref(":left")}}
