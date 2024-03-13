---
title: Document.referrer
slug: Web/API/Document/referrer
---

{{APIRef}}

## Résumé

Renvoie l'[URI](http://www.w3.org/Addressing/#background) de la page de provenance.

## Syntaxe

```js
string = document.referrer;
```

## Notes

La valeur est une chaîne de caractères vide si l'utilisateur est arrivé directement sur la page (pas grâce à un lien, mais, par exemple, via un marque-page). Étant donné que cette propriété ne retourne qu'une chaîne, elle ne vous donne pas un accès DOM à la page de provenance.

## Spécification

- [DOM Level 2: referrer](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95229140)
