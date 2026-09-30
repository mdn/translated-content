---
title: "Navigation : méthode back()"
short-title: back()
slug: Web/API/Navigation/back
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`back()`** de l'interface {{DOMxRef("Navigation")}} navigue en arrière d'une entrée dans l'historique de navigation.

## Syntaxe

```js-nolint
back(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les propriétés suivantes&nbsp;:
    - `info` {{Optional_Inline}}
      - : L'information définie par le·la développeur·euse à passer à l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}} et rendue disponible dans {{DOMxRef("NavigateEvent.info")}}. Cela peut être de n'importe quel type de données. Par exemple, vous pouvez souhaiter afficher le contenu nouvellement navigué avec une animation différente selon la manière dont il a été navigué (glisser à gauche, glisser à droite ou aller à l'accueil). Une chaîne de caractères indiquant quelle animation utiliser peut être passée en tant que `info`.

### Valeur de retour

Un objet avec les propriétés suivantes&nbsp;:

- `committed`
  - : Une promesse ({{JSxRef("Promise")}}) qui se complète lorsque l'URL visible a changé et qu'une nouvelle {{DOMxRef("NavigationHistoryEntry")}} a été créée.
- `finished`
  - : Une promesse ({{JSxRef("Promise")}}) qui se complète lorsque toutes les promesses retournées par le gestionnaire `intercept()` sont complétées. Cela équivaut à la promesse {{DOMxRef("NavigationTransition.finished")}} se complétant, lorsque l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche.

Chaque promesse se rompt si la navigation a échoué pour une raison quelconque.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de {{DOMxRef("Navigation.currentEntry")}}'s {{DOMxRef("NavigationHistoryEntry.index")}} est -1 ou 0, c'est-à-dire soit que le {{DOMxRef("Document")}} actuel n'est pas encore actif, soit que l'entrée d'historique actuelle est la première de l'historique, ce qui signifie que la navigation en arrière n'est pas possible, ou si le {{DOMxRef("Document")}} actuel est en cours de déchargement.

## Exemples

```js
async function gestionEnArriere() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Gère tout nettoyage nécessaire après
    // que la navigation est terminée
  } else {
    displayBanner("Vous êtes sur la première page");
  }
}

async function gestionEnAvant() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Gère tout nettoyage nécessaire après
    // que la navigation est terminée
  } else {
    displayBanner("Vous êtes sur la dernière page");
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
