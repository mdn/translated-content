---
title: API History
slug: Web/API/History_API
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{DefaultAPISidebar("History API")}}

L'API **History** fournit un accès à l'historique de session du navigateur (à ne pas confondre avec [l'historique des WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/API/history)) depuis l'objet global {{DOMxRef("Window.history","history")}}. Elle expose des méthodes et des propriétés utiles qui vous permettent de naviguer en avant et en arrière dans l'historique de l'utilisateur·ice, et de manipuler le contenu de la pile d'historique.

> [!NOTE]
> Cette API n'est disponible que sur le fil d'exécution principal ({{DOMxRef("Window")}}). Elle ne peut pas être accédée dans les contextes {{DOMxRef("Worker")}} ou {{DOMxRef("Worklet")}}.

## Concepts et utilisation

La navigation en avant et en arrière dans l'historique de l'utilisateur·ice se fait à l'aide des méthodes {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}} et {{DOMxRef("History.go","go()")}}.

### Naviguer en avant et en arrière

Pour revenir en arrière dans l'historique&nbsp;:

```js
history.back();
```

Cela agit exactement comme si l'utilisateur·ice clique sur le bouton <kbd><strong>Précédent</strong></kbd> de la barre d'outils de son navigateur.

De même, vous pouvez avancer dans l'historique (comme si l'utilisateur·ice clique sur le bouton <kbd><strong>Suivant</strong></kbd>), comme ceci&nbsp;:

```js
history.forward();
```

### Se déplacer vers un point spécifique dans l'historique

Vous pouvez utiliser la méthode {{DOMxRef("History.go", "go()")}} pour charger une page spécifique à partir de l'historique de session, identifiée par sa position relative par rapport à la page actuelle. (La position relative de la page actuelle est `0`.)

Pour revenir d'une page en arrière (l'équivalent d'appeler {{DOMxRef("History.back", "back()")}})&nbsp;:

```js
history.go(-1);
```

Pour avancer d'une page, comme avec l'appel de {{DOMxRef("History.forward","forward()")}}&nbsp;:

```js
history.go(1);
```

De même, vous pouvez avancer de 2 pages en passant `2`, et ainsi de suite.

Une autre utilisation de la méthode `go()` consiste à actualiser la page actuelle en passant soit `0`, soit en l'invoquant sans argument&nbsp;:

```js
// Les instructions suivantes
// ont tous deux pour effet de
// actualiser la page
history.go(0);
history.go();
```

Vous pouvez déterminer le nombre de pages dans la pile d'historique en regardant la valeur de la propriété `length`&nbsp;:

```js
const nombreEntrees = history.length;
```

## Interfaces

- {{DOMxRef("History")}}
  - : Permet de manipuler _l'historique de session_ du navigateur (c'est‑à‑dire les pages visitées dans l'onglet ou le cadre où la page actuelle est chargée).
- {{DOMxRef("PopStateEvent")}}
  - : L'interface de l'évènement {{DOMxRef("Window.popstate_event", "popstate")}}.

## Exemples

L'exemple suivant ajoute un écouteur pour l'évènement {{DOMxRef("Window.popstate_event", "popstate")}}. Il illustre ensuite certaines des méthodes de l'objet `history` pour ajouter, remplacer et naviguer dans l'historique du navigateur de l'onglet courant.

```js
window.addEventListener("popstate", (event) => {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});

history.pushState({ page: 1 }, "titre 1", "?page=1");
history.pushState({ page: 2 }, "titre 2", "?page=2");
history.replaceState({ page: 3 }, "titre 3", "?page=3");
history.back(); // alertes "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alertes "location: http://example.com/example.html, state: null"
history.go(2); // alertes "location: http://example.com/example.html?page=3, state: {"page":3}"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{DOMxRef("window.history", "history")}}
- L'évènement {{DOMxRef("Window/popstate_event", "popstate")}}
