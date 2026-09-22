---
title: "Navigation : méthode reload()"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: d761f12b87a1cc18e37ed9b889ee1aecdb64c255
---

{{APIRef("Navigation API")}}

La méthode **`reload()`** de l'interface {{DOMxRef("Navigation")}} recharge l'URL actuelle, en mettant à jour tout état fourni dans la liste des entrées de l'historique.

Notez que `reload()` ne déclenche pas [l'évènement `popstate`](/fr/docs/Web/API/Window/popstate_event), car celui-ci n'est déclenché que pour les navigations «&nbsp;douces&nbsp;» qui provoquent un «&nbsp;parcours&nbsp;» des entrées de l'historique.

## Syntaxe

```js-nolint
reload()
reload(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet options contenant les propriétés suivantes&nbsp;:
    - `state` {{Optional_Inline}}
      - : L'information définie par le·la développeur·euse à stocker dans l'entrée d'historique associée {{DOMxRef("NavigationHistoryEntry")}} une fois la navigation terminée, récupérable avec {{DOMxRef("NavigationHistoryEntry.getState", "getState()")}}.
        Ça peut être de n'importe quel type de données. Vous pouvez, par exemple, stocker un compteur de visites de page à des fins d'analyse, ou stocker les détails de l'état de l'interface utilisateur afin que la vue puisse être affichée exactement comme l'utilisateur·ice l'a laissée.
        Toutes les données stockées dans `state` doivent être [structurées et clonables](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
    - `info` {{Optional_Inline}}
      - : L'information définie par le·la développeur·euse à transmettre à l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}}, rendue disponible dans {{DOMxRef("NavigateEvent.info")}}.
        Ça peut être de n'importe quel type de données. Vous pouvez, par exemple, souhaiter afficher le contenu nouvellement navigué avec une animation différente selon la manière dont il a été navigué (glisser vers la gauche, glisser vers la droite ou aller à l'accueil).
        Une chaîne de caractères indiquant quelle animation utiliser peut être passée dans `info`.

### Valeur de retour

Un objet avec les propriétés suivantes&nbsp;:

- `committed`
  - : Une promesse ({{JSxRef("Promise")}}) qui est complétée lorsque l'URL visible a changé et qu'une nouvelle {{DOMxRef("NavigationHistoryEntry")}} a été créée.
- `finished`
  - : Une promesse ({{JSxRef("Promise")}}) qui est complétée lorsque toutes les promesses retournées par le gestionnaire `intercept()` sont complétées. Cela équivaut à la promesse {{DOMxRef("NavigationTransition.finished")}} qui est complétée lorsque l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche.

Chacune de ces promesses est rompue si la navigation a échoué pour une raison quelconque.

### Exceptions

- `DataCloneError` {{DOMxRef("DOMException")}}
  - : Levée si le paramètre `state` contient des valeurs qui ne sont pas clonables selon l'algorithme de clonage structuré.

## Exemples

### Utiliser l'information et l'état

```js
async function gererRechargement() {
  await navigation.reload({
    info: { animation: "fade-in" },
    state: { infoPaneOpen: true },
  }).finished;

  // Met à jour l'état de l'application
  // …
}
```

Recharger la page et ajouter un nouvel élément d'état&nbsp;:

```js
async function gererRechargement() {
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  }).finished;

  // Met à jour l'état de l'application
  // …
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
