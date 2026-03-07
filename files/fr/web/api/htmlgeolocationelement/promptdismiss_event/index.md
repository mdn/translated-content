---
title: "HTMLGeolocationElement : évènement promptdismiss"
short-title: promptdismiss
slug: Web/API/HTMLGeolocationElement/promptdismiss_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

L'évènement **`promptdismiss`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} est déclenché chaque fois que l'utilisateur·ice active l'élément `<geolocation>` et ferme la boîte de dialogue qui s'affiche, en appuyant sur le bouton «&nbsp;fermer&nbsp;» ou la touche <kbd>Échap</kbd>.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("promptdismiss", (event) => { })

onpromptdismiss = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}}.

## Exemples

### Utiliser `promptdismiss` pour réagir à la fermeture de la demande d'autorisation

Dans notre [démonstration de carte intégrée <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)), nous utilisons un gestionnaire d'évènement `promptdismiss` pour réagir à la fermeture de la boîte de dialogue d'autorisation de l'élément `<geolocation>`&nbsp;:

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
```

Dans la fonction `notifyUserRetrySelection()`, nous demandons à l'utilisateur·ice d'appuyer à nouveau sur le bouton et d'autoriser la localisation.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    "Veuillez appuyer à nouveau sur le bouton « Utiliser la localisation » et autoriser la localisation pour ce site.";
}
```

Voir la page principale {{DOMxRef("HTMLGeolocationElement")}} pour une explication complète de cet exemple.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
