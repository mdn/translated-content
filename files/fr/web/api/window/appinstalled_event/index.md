---
title: "Window : évènement appinstalled"
short-title: appinstalled
slug: Web/API/Window/appinstalled_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement **`appinstalled`** de [l'API Web Manifest](/fr/docs/Web/Progressive_web_apps/Manifest) est déclenché lorsque le navigateur a installé avec succès une page en tant qu'application.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("appinstalled", (event) => { })

onappinstalled = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Vous pouvez utiliser l'évènement `appinstalled` dans une méthode {{DOMxRef("EventTarget.addEventListener", "addEventListener")}} :

```js
window.addEventListener("appinstalled", () => {
  console.log("Merci d'avoir installé notre application !");
});
```

Ou utilisez la propriété de gestionnaire d'évènements `onappinstalled` :

```js
window.onappinstalled = () => {
  console.log("Merci d'avoir installé notre application !");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
