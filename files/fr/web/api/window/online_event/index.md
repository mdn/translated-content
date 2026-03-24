---
title: "Window : évènement online"
short-title: online
slug: Web/API/Window/online_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement **`online`** de l'interface {{DOMxRef("Window")}} se déclenche lorsque le navigateur obtient l'accès au réseau et que la valeur de {{DOMxRef("Navigator.onLine")}} passe à `true`.

> [!NOTE]
> Cet évènement ne doit pas être utilisé pour déterminer la disponibilité d'un site Web particulier. Des problèmes de réseau ou des pare-feu peuvent encore empêcher l'accès au site Web.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("online", (event) => { })

ononline = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété de gestionnaire d'évènements `ononline` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

```js
// addEventListener version
window.addEventListener("online", (event) => {
  console.log("Vous êtes maintenant connecté au réseau.");
});

// ononline version
window.ononline = (event) => {
  console.log("Vous êtes maintenant connecté au réseau.");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/offline_event", "offline")}}
