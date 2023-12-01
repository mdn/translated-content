---
title: ":-moz-loading"
slug: Web/CSS/:-moz-loading
---

{{CSSRef}}{{Non-standard_header}}

La pseudo-classe **`:-moz-loading`** correspond aux éléments qui ne peuvent être affichés, car ils n'ont pas été chargés (par exemple les images qui n'ont pas encore été transférées sur le réseau). On notera que les images _en cours de chargement_ (le fichier est arrivé et est en train d'être traité pour affichage par le navigateur) ne sont pas ciblées par cette pseudo-classse.

Cette pseudo-classe est principalement destinée aux développeurs de thèmes.

## Syntaxe

```css
:-moz-loading {
}
```

## Exemples

```css
img:-moz-loading {
  background-color: #aaa;
  background-image: url(loading-animation.gif) center no-repeat;
}
```

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
