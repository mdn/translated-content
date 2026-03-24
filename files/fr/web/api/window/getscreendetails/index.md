---
title: "Window : méthode getScreenDetails()"
short-title: getScreenDetails()
slug: Web/API/Window/getScreenDetails
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

La méthode **`getScreenDetails()`** de l'interface {{DOMxRef("Window")}} retourne une promesse ({{JSxRef("Promise")}}) qui se résout avec une instance de l'objet {{DOMxRef("ScreenDetails")}} représentant les détails de tous les écrans disponibles sur l'appareil de l'utilisateur·ice.

## Syntaxe

```js-nolint
getScreenDetails()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec une instance de l'objet {{DOMxRef("ScreenDetails")}}.

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) est définie pour bloquer l'utilisation de [l'API Window Management](/fr/docs/Web/API/Window_Management_API), ou si l'utilisateur a explicitement refusé la demande de permission du navigateur pour utiliser l'API.

## Exemples

Lorsque `getScreenDetails()` est invoquée, l'utilisateur·ice sera invité·e à autoriser la gestion des fenêtres sur tous ses écrans (le statut de cette autorisation peut être vérifié en utilisant {{DOMxRef("Permissions.query()")}} pour interroger `window-management`). Si l'autorisation est accordée, l'objet {{DOMxRef("ScreenDetails")}} résultant contient les détails de tous les écrans disponibles sur le système de l'utilisateur·ice.

L'exemple ci-dessous ouvre une fenêtre en plein écran sur chaque écran disponible.

```js
const detailsEcran = await window.getScreenDetails();

// Ouvrir une fenêtre en plein écran sur chaque écran disponible
for (const ecran of detailsEcran.screens) {
  window.open(
    "https://exemple.com",
    "_blank",
    `left=${ecran.availLeft},
    top=${ecran.availTop},
    width=${ecran.availWidth},
    height=${ecran.availHeight}`,
  );
}
```

> [!NOTE]
> Voir [l'environnement d'apprentissage multi-fenêtres <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/window-management-api/) pour un exemple complet (voir également le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Window Management](/fr/docs/Web/API/Window_Management_API)
