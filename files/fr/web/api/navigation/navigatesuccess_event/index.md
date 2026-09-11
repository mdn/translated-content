---
title: "Navigation : évènement navigatesuccess"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

L'évènement **`navigatesuccess`** de l'interface {{DOMxRef("Navigation")}} est déclenché lorsqu'une navigation réussie est terminée.

Dans le cas d'une navigation interceptée, cela se produit après que toutes les promesses retournées par votre gestionnaire {{DOMxRef("NavigateEvent.intercept", "intercept()")}} soient complétées. La promesse {{DOMxRef("NavigationTransition.finished")}} est également complétée en même temps.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("navigatesuccess", (event) => { })

onnavigatesuccess = (event) => { }
```

## Type d'évènement

Un objet générique {{DOMxRef("Event")}}.

## Exemples

Vous pouvez gérer une navigation réussie en masquant un indicateur de progression précédemment affiché, comme ceci&nbsp;:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Ou vous pouvez afficher un message d'erreur en cas d'échec&nbsp;:

```js
navigation.addEventListener("navigateerror", (event) => {
  loadingIndicator.hidden = true; // masque également l'indicateur
  showMessage(`Failed to load page: ${event.message}`);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
