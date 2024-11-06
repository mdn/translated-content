---
title: Window.history
slug: Web/API/Window/history
---

{{APIRef}}

La propriété en lecture seule **`Window.history`** renvoie une référence à l'objet {{domxref("History")}}, qui offre la possibilité de manipuler l'historique de session du navigateur (pages visitées dans l'onglet ou le cadre dans lesquels la page courante est chargée).

L'objet `History` obtenu a les méthodes suivantes : voir [la manipulation de l'historique du navigateur](/fr/docs/DOM/Manipulating_the_browser_history) pour avoir plus de détails ainsi que des exemples.
En particulier, cet article explique les caractéristiques des méthodes `pushState()` et `replaceState()` qu'il est utile de connaître avant de les utiliser.

## Exemple

```js
history.back(); // similaire au bouton de retour
history.go(-1); // similaire à history.back();
```

## Notes

Pour les pages de niveau supérieur, vous pourrez voir la liste des pages dans l'historique des sessions, accessibles grâce à l'objet `History`, situé dans le menu déroulant près des boutons précédent et suivant.

Pour des raisons de sécurité, l'objet `History` n'autorise pas l'accès au URL d'autres pages présentes dans l'historique de la session mais autorise d'y naviguer.

Il n'y a pas de possibilité de nettoyer l'historique de la session ou de désactiver les boutons précédent et suivant. La solution éventuelle la plus proche serait la méthode [location.replace()](/fr/docs/DOM/window.location#replace), permettant de remplacer l'élément actuel de l'historique de la session par l'URL fournie.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
