---
title: "PopStateEvent : propriété state"
short-title: state
slug: Web/API/PopStateEvent/state
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("History API")}}

La propriété en lecture seule **`state`** de l'interface {{DOMxRef("PopStateEvent")}} représente l'état stocké lorsque l'évènement a été créé.

En pratique, il s'agit d'une valeur fournie par l'appel à {{DOMxRef("history.pushState()")}} ou {{DOMxRef("history.replaceState()")}}

## Valeur

Un objet, ou `null`.

## Exemples

Le code ci-dessous affiche la valeur de `state` lors de l'utilisation de la méthode {{DOMxRef("History.pushState", "pushState()")}} pour ajouter une valeur à l'historique.

```js
// Affiche l'état de
addEventListener("popstate", (event) => {
  console.log("État reçu : ", event.state);
});

// Pousse maintenant quelque chose sur la pile
history.pushState({ name: "Exemple" }, "exemple pushState", "page1.html");
history.pushState(
  { name: "Un autre exemple" },
  "un autre exemple",
  "page1.html",
);
```

Ça affiche&nbsp;:

```plain
État reçu : { name: "Exemple" }
État reçu : { name: "Un autre exemple" }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le constructeur {{DOMxRef("PopStateEvent()")}}
- La propriété {{DOMxRef("History.state")}}
