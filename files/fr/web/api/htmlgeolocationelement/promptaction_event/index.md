---
title: "HTMLGeolocationElement : évènement promptaction"
short-title: promptaction
slug: Web/API/HTMLGeolocationElement/promptaction_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

L'évènement **`promptaction`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} est déclenché chaque fois que l'utilisateur·ice active l'élément `<geolocation>` et sélectionne une option dans la boîte de dialogue qui s'affiche, soit pour accorder, soit pour refuser l'autorisation `geolocation`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("promptaction", (event) => { })

onpromptaction = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}}.

## Exemples

### Utiliser `promptaction` pour réagir aux choix d'autorisation de l'utilisateur·ice

Dans notre [démonstration de carte intégrée <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)), nous utilisons un gestionnaire d'évènement `promptaction` pour réagir au choix effectué par l'utilisateur·ice dans la boîte de dialogue d'autorisation de l'élément `<geolocation>`&nbsp;:

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

Dans la fonction `notifyUserGrantPermission()`, nous utilisons la propriété {{DOMxRef("HTMLGeolocationElement.permissionStatus")}} pour vérifier si l'état d'autorisation est `denied` ou `prompt` et, le cas échéant, nous demandons à l'utilisateur·ice d'appuyer à nouveau sur le bouton et d'autoriser la localisation. Il n'est pas nécessaire de demander cela si l'autorisation est déjà accordée.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      "Veuillez appuyer à nouveau sur le bouton « Utiliser la localisation » et autoriser la localisation pour ce site.";
  }
}
```

Voir la page principale {{DOMxRef("HTMLGeolocationElement")}} pour une explication complète de cet exemple.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
