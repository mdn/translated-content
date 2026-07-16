---
title: "Window : évènement offline"
short-title: offline
slug: Web/API/Window/offline_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement **`offline`** de l'interface {{DOMxRef("Window")}} se déclenche lorsque le navigateur perd l'accès au réseau et que la valeur de {{DOMxRef("Navigator.onLine")}} passe à `false`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("offline", (event) => { })

onoffline = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété de gestionnaire d'évènements `onoffline` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

```js
//version addEventListener
window.addEventListener("offline", (event) => {
  console.log("La Connexion au réseau est perdu.");
});

// onoffline version
window.onoffline = (event) => {
  console.log("La Connexion au réseau a été perdue.");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/online_event", "online")}}
