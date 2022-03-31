---
title: popstate
slug: Web/API/Window/popstate_event
translation_of: Web/API/Window/popstate_event
---
L'événement `popstate` est exécuté lorsque l'entrée active de l'historique change. Si l'entrée active de l'historique en cours d'activation a été créé par un appel à `history.pushState()` ou a été affectée par un appel à `history.replaceState()`, la propriété `state` de l'événement `popstate` contient une copie de l'objet `state` de l'entrée d'historique.

Notez qu'un appel à `history.pushState()` ou `history.replaceState()` n'exécutera pas l'événement `popstate`. L'événement `popstate` est uniquement exécuté en réalisant une action dans le navigateur telle que cliquer sur le bouton de retour (ou appeler `history.back()` en JavaScript).

Les navigateurs ont tendance à gérer l'événement `popstate` différemment lors du chargement de la page. Chrome (avant la v34) et Safari émettent toujours un événement `popstate` lors du chargement de la page, contrairement à Firefox.

## Informations générales

- Specification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-popstate)
- Interface
  - : PopStateEvent
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : defaultView
- Action par défaut
  - : None

## Propriétés

| Property                              | Type                                 | Description                                        |
| ------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The browsing context (`window`).                   |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                 |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.         |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.           |
| `state` {{readonlyInline}}      | _any_                                | The current history entry's state object (if any). |

## Exemple

Une page `http://example.com/example.html` exécutant le code suivant génèrera un journal comme spécifié :

```js
window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null
history.go(2);  // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
```

Notez que même si l'entrée d'historique originelle (pour `http://example.com/example.html`) n'a pas d'objet state associé, un événement `popstate` est tout de même exécuté lorsque nous activons cette entrée au second appel à `history.back()`.

## Spécifications

| Spécification                                                                                | Statut                           |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'indices.html#event-popstate', 'popstate')}} | {{Spec2('HTML WHATWG')}} |

## Compatibilité des navigateurs

{{Compat("api.Window.popstate_event")}}

## Voir aussi

- [Manipulation de l'historique du navigateur (l'API History)](/fr/docs/Web/API/History_API)
- [Window : événement `hashchange`](/fr/docs/Web/API/Window/hashchange_event)
