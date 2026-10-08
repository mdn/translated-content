---
title: "Navigation : méthode traverseTo()"
short-title: traverseTo()
slug: Web/API/Navigation/traverseTo
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`traverseTo()`** de l'interface {{DOMxRef("Navigation")}} navigue vers un {{DOMxRef("NavigationHistoryEntry")}} identifié par la clé {{DOMxRef("NavigationHistoryEntry.key", "key")}} fournie.

## Syntaxe

```js-nolint
traverseTo(key)
traverseTo(key, options)
```

### Paramètres

- `key`
  - : La clé (`key`) d'un {{DOMxRef("NavigationHistoryEntry")}} vers lequel naviguer.
- `options` {{Optional_Inline}}
  - : Un objet options contenant les propriétés suivantes&nbsp;:
    - `info` {{Optional_Inline}}
      - : L'information définie par le·la développeur·euse à transmettre à l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}}, rendue disponible dans {{DOMxRef("NavigateEvent.info")}}. Ça peut être de n'importe quel type de données. Vous pouvez, par exemple, souhaiter afficher le contenu nouvellement navigué avec une animation différente selon la manière dont il a été navigué (glisser vers la gauche, glisser vers la droite ou aller à l'accueil). Une chaîne de caractères indiquant quelle animation utiliser peut être passée dans `info`.

### Valeur de retour

Un objet avec les propriétés suivantes&nbsp;:

- `committed`
  - : Une promesse ({{JSxRef("Promise")}}) qui est complétée lorsque l'URL visible a changé et qu'une nouvelle {{DOMxRef("NavigationHistoryEntry")}} a été créée.
- `finished`
  - : Une promesse ({{JSxRef("Promise")}}) qui est complétée lorsque toutes les promesses retournées par le gestionnaire `intercept()` sont complétées. Cela équivaut à la promesse {{DOMxRef("NavigationTransition.finished")}} qui est complétée lorsque l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche.

Chacune de ces promesses est rompue si la navigation a échoué pour une raison quelconque.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur {{DOMxRef("NavigationHistoryEntry.index")}} de {{DOMxRef("Navigation.currentEntry")}} est -1, ce qui signifie que le {{DOMxRef("Document")}} actuel n'est pas encore actif, ou si la liste de l'historique de navigation ne contient pas de {{DOMxRef("NavigationHistoryEntry")}} avec la clé définie, ou si le {{DOMxRef("Document")}} actuel est en cours de déchargement.

## Exemples

### Configurer le bouton d'accueil

```js
function initBoutonAccueil() {
  // Obtient la clé de la première entrée chargée
  // afin que l'utilisateur·ice puisse toujours revenir à cette vue.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercepte les évènements de navigation, tels que les clics sur les
// liens, et les remplace par des navigations sur une seule page
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigue vers une vue différente,
      // mais le bouton « accueil » fonctionne toujours.
    },
  });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
