---
title: window.onpopstate
slug: conflicting/Web/API/Window/popstate_event
translation_of: Web/API/WindowEventHandlers/onpopstate
original_slug: Web/API/WindowEventHandlers/onpopstate
---
{{ ApiRef() }}

### Résumé

Un gestionnaire d'évènement pour l'évènement `popstate` de la fenêtre.

L'évènement `popstate` est envoyé à la fenêtre à chaque fois que l'entrée actuelle de l'historique change avec 2 autres entrées du même document. Si l'entrée actuelle a été créée en appelant `history.pushState()` ou a été modifiée en appelant `history.replaceState()`, la propriété state de l'évènement `popstate` contient une copie de l'objet d'entrée de l'historique.

Sachez qu'appeler `history.pushState()` ou `history.replaceState()` ne déclenchera pas l'évènement `popstate`. Cet évènement n'est déclenché que par une action utilisateur telle que cliquer sur le bouton Retour (ou appeler `history.back()`, en JavaScript). L'évènement n'est déclenché que pour la navigation entre deux entrées du même document.

### Syntaxe

    window.onpopstate = funcRef;

- `funcRef` est une référence à une fonction.

### L'évènement popstate

Par exemple, une page à l'adresse <http://example.com/example.html> exécutant le code suivant générera les alertes suivantes:

```js
window.onpopstate = function(event) {
  alert("adresse: " + document.location + ", état: " + JSON.stringify(event.state));
};
history.pushState({page: 1}, "titre 1", "?page=1");
history.pushState({page: 2}, "titre 2", "?page=2");
history.replaceState({page: 3}, "titre 3", "?page=3");
history.back(); // affiche "adresse: http://example.com/example.html?page=1, état: {"page":1}"
history.back(); // affiche "adresse: http://example.com/example.html, état: null
history.go(2);  // affiche "adresse: http://example.com/example.html?page=3, état: {"page":3}
```

Même si l'entrée originelle (de <http://example.com/example.html>) n'a aucun objet d'état associé, l'évènement `popstate` est toujours déclenché lorsque l'entrée est activée après un deuxième appel à `history.back()`.

### Spécification

- [HTML5 popstate event](http://www.whatwg.org/specs/web-apps/current-work/#handler-window-onpopstate)

### Lire également

- {{ domxref("window.history") }}
- [Manipuler l'historique du navigateur](/fr/docs/DOM/manipuler_lhistorique_du_navigateur)
- [Exemple de navigation en Ajax](/fr/docs/DOM/Manipulating_the_browser_history/Example)
