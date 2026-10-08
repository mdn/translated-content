---
title: "History : propriété state"
short-title: state
slug: Web/API/History/state
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

La propriété en lecture seule **`state`** de l'interface {{DOMxRef("History")}} retourne une valeur représentant l'état au sommet de la pile d'historique. C'est un moyen de consulter l'état sans avoir à attendre un évènement {{DOMxRef("Window/popstate_event", "popstate")}}.

## Valeur

L'état au sommet de la pile d'historique. La valeur est {{JSxRef("null")}} jusqu'à ce que la méthode {{DOMxRef("History.pushState","pushState()")}} ou {{DOMxRef("History.replaceState","replaceState()")}} soit utilisée.

## Exemples

Le code ci-dessous consigne la valeur de `history.state` avant d'utiliser la méthode {{DOMxRef("History.pushState", "pushState()")}} pour pousser une valeur dans l'historique. La ligne suivante consigne à nouveau la valeur dans la console, montrant que `history.state` a maintenant une valeur.

```js
// Doit être null, car nous n'avons pas encore modifié la pile d'historique.
console.log("History.state avant pushState : ", history.state);

// Maintenant, poussez quelque chose sur la pile
history.pushState({ name: "Exemple" }, "exemple pushState", "page3.html");

// Maintenant, l'état a une valeur.
console.log("History.state après pushState : ", history.state);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Travailler avec l'API History](/fr/docs/Web/API/History_API/Working_with_the_History_API)
- La méthode {{DOMxRef("History.pushState()")}}
- La méthode {{DOMxRef("History.replaceState()")}}
- La propriété {{DOMxRef("PopStateEvent.state")}}
