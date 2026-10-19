---
title: "Navigation : méthode forward()"
short-title: forward()
slug: Web/API/Navigation/forward
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`forward()`** de l'interface {{DOMxRef("Navigation")}} navigue d'une entrée vers l'avant dans l'historique de navigation.

## Syntaxe

```js-nolint
forward(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les propriétés suivantes&nbsp;:
    - `info` {{Optional_Inline}}
      - : L'information définie par le·la développeur·euse à transmettre à l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}}, rendue disponible dans {{DOMxRef("NavigateEvent.info")}}. Cela peut être de n'importe quel type de données. Par exemple, vous pouvez vouloir afficher le contenu nouvellement navigué avec une animation différente selon la manière dont il a été navigué (glisser à gauche, glisser à droite ou aller à l'accueil). Une chaîne de caractères indiquant quelle animation utiliser peut être transmise en tant que `info`.

### Valeur de retour

Un objet avec les propriétés suivantes&nbsp;:

- `committed`
  - : Une promesse ({{JSxRef("Promise")}}) qui est complétée lorsque l'URL visible a changé et qu'une nouvelle {{DOMxRef("NavigationHistoryEntry")}} a été créée.
- `finished`
  - : Une promesse ({{JSxRef("Promise")}}) qui est complétée lorsque toutes les promesses retournées par le gestionnaire {{DOMxRef("NavigateEvent.intercept()")}} sont complétées. Cela équivaut à la complétion de la promesse {{DOMxRef("NavigationTransition.finished")}}, lorsque l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche.

Chacune de ces promesses se rompt si la navigation a échoué pour une raison quelconque.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur {{DOMxRef("NavigationHistoryEntry.index")}} de {{DOMxRef("Navigation.currentEntry")}} est -1 ou {{DOMxRef("Navigation.entries", "navigation.entries().length - 1")}}, c'est-à-dire si le {{DOMxRef("Document")}} actuel n'est pas encore actif, ou si l'entrée d'historique actuelle est la dernière de l'historique, ce qui signifie que la navigation vers l'avant n'est pas possible, ou si le {{DOMxRef("Document")}} actuel est en cours de déchargement.

## Exemples

```js
async function gestionEnArriere() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // HanGère le nettoyage nécessaire après
    // que la navigation est terminée
  } else {
    displayBanner("Vous êtes sur la première page");
  }
}

async function gestionEnAvant() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Gère le nettoyage nécessaire après
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
