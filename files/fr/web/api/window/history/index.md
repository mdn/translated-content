---
title: "Window : propriété history"
short-title: history
slug: Web/API/Window/history
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

La propriété en lecture seule `history` de l'interface {{DOMxRef("Window")}} retourne une référence à l'objet {{DOMxRef("History")}}, qui fournit une interface pour manipuler _l'historique de session_ du navigateur (pages visitées dans l'onglet ou le cadre dans lequel la page courante est chargée).

Voir [Manipuler l'historique du navigateur](/fr/docs/Web/API/History_API) pour des exemples et des détails. En particulier, cet article explique les aspects de sécurité des méthodes {{DOMxRef("History.pushState", "pushState()")}} et {{DOMxRef("History.replaceState", "replaceState()")}} dont il faut tenir compte avant de les utiliser.

## Valeur

Une référence à l'objet {{DOMxRef("History")}}.

## Exemples

```js
history.back(); // similaire au bouton de retour
history.go(-1); // similaire à history.back();
```

## Notes

Pour les pages de niveau supérieur, vous pouvez voir la liste des pages dans l'historique de session, accessible avec l'objet `History`, dans les menus déroulants du navigateur à côté des boutons précédent et suivant.

Pour des raisons de sécurité, l'objet `History` n'autorise pas le code non privilégié à accéder aux {{Glossary("URL")}} des autres pages présentes dans l'historique de session, mais il permet de naviguer dans l'historique de session.

Il n'existe aucun moyen d'effacer l'historique de session ou de désactiver la navigation arrière/avant depuis du code non privilégié. La solution la plus proche disponible est la méthode {{DOMxRef("Location.replace", "location.replace()")}}, qui remplace l'élément actuel de l'historique de session par l'URL fournie.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
