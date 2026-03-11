---
title: "Document : propriété referrer"
short-title: referrer
slug: Web/API/Document/referrer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("DOM")}}

La propriété **`referrer`** de l'interface {{DOMxRef("Document")}} retourne [l'URI <sup>(angl.)</sup>](https://www.w3.org/Addressing/#background) de la page qui a mené à cette page.

## Valeur

La valeur est une chaîne de caractères vide si l'utilisateur·ice a accédé à la page directement (pas par un lien, mais par exemple en utilisant un marque-page). Comme cette propriété retourne uniquement une chaîne de caractères, elle ne donne pas accès au modèle objet de document (DOM) de la page référente.

Dans un {{HTMLElement("iframe")}}, la valeur de `Document.referrer` sera initialement définie sur le {{DOMxRef("HTMLAnchorElement/href", "href")}} du {{DOMxRef("Window/location", "Window.location")}} du parent pour les requêtes de même origine.
Pour les requêtes inter-origine, il s'agit par défaut de {{DOMxRef("HTMLAnchorElement/origin", "origin")}} du `Window.location` du parent.
Pour plus d'informations, voir la documentation sur [Referrer-Policy&nbsp;: strict-origin-when-cross-origin](/fr/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin).

## Exemples

La ligne suivante affiche une chaîne de caractères contenant la valeur de la propriété référente du document.

```js
console.log(document.referrer);
```

Si l'utilisateur·ice a accédé à la page via un lien comme `<a href="https://www.w3.org/">W3</a>`, cela affichera le domaine précédent comme `developer.mozilla.org`. Si l'utilisateur·ice a accédé à la page directement, cela affichera une chaîne vide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
