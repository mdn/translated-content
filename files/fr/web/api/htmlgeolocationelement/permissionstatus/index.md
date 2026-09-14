---
title: "HTMLGeolocationElement : propriété permissionStatus"
short-title: permissionStatus
slug: Web/API/HTMLGeolocationElement/permissionStatus
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété en lecture seule **`permissionStatus`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} retourne une valeur énumérée représentant l'état d'autorisation actuel pour la fonctionnalité `geolocation`.

Si vous souhaitez accéder à l'état initial d'autorisation pour la fonctionnalité `geolocation` tel qu'il était lors du premier chargement de la page, utilisez la propriété {{DOMxRef("HTMLGeolocationElement.initialPermissionStatus", "initialPermissionStatus")}}.

## Valeur

Une valeur énumérée, qui peut être&nbsp;:

- `granted`
  - : L'utilisateur·ice a accordé l'autorisation au navigateur d'utiliser la fonctionnalité `geolocation`, soit par l'élément HTML {{HTMLElement("geolocation")}}, soit par un autre mécanisme. Lors de l'utilisation de l'élément `<geolocation>`, cela signifie que l'utilisateur·ice a appuyé sur le bouton affiché et sélectionné l'option «&nbsp;autoriser&nbsp;», à ce moment le navigateur commence à demander les données de localisation.
- `denied`
  - : L'utilisateur·ice a refusé l'autorisation au navigateur d'utiliser la fonctionnalité `geolocation`, soit par l'élément `<geolocation>`, soit par un autre mécanisme. Lors de l'utilisation de l'élément `<geolocation>`, cela signifie que l'utilisateur·ice a appuyé sur le bouton affiché et sélectionné l'option «&nbsp;ne pas autoriser&nbsp;», à ce moment le navigateur ne demandera pas les données de localisation tant que l'utilisateur·ice n'aura pas appuyé à nouveau sur le bouton affiché et sélectionné l'option «&nbsp;autoriser&nbsp;».
- `prompt`
  - : L'utilisateur·ice n'a pas spécifiquement accordé ni refusé l'autorisation au navigateur d'utiliser la fonctionnalité `geolocation`, ce qui signifie que le navigateur ne demandera pas les données de localisation tant qu'il·elle n'aura pas accordé l'autorisation. Lors de l'utilisation de l'élément `<geolocation>`, cela signifie que l'utilisateur·ice n'a pas encore appuyé sur le bouton affiché. Lorsqu'il·elle le fera, il·elle aura la possibilité d'accorder ou de refuser l'autorisation au navigateur de demander les données de localisation.

L'état d'autorisation persiste entre les chargements de page. Si l'élément `<geolocation>` possède l'attribut [`autolocate`](/fr/docs/Web/HTML/Reference/Elements/geolocation#autolocate) défini sur `true`, et que l'autorisation a déjà été accordée, le navigateur commencera à demander les données de localisation dès que l'élément `<geolocation>` s'affiche, sans que l'utilisateur·ice ait besoin d'appuyer sur le bouton.

## Exemples

### Exemple simple

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.permissionStatus);
// "prompt" si c'est la première fois que l'utilisateur·ice accède à cette page
```

### Utiliser l'état d'autorisation pour informer l'utilisateur·ice

Dans notre [exemple de carte intégrée <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)), nous ajoutons un écouteur d'évènement {{DOMxRef("HTMLGeolocationElement.promptaction_event", "promptaction")}} à l'objet `HTMLGeolocationElement` représentant notre élément `<geolocation>`.

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

Dans la fonction référencée `notifyUserGrantPermission()`, nous utilisons la propriété `permissionStatus` pour vérifier si l'état d'autorisation est `denied` ou `prompt` et, le cas échéant, nous demandons à l'utilisateur·ice d'appuyer à nouveau sur le bouton et d'autoriser la localisation. Il n'est pas nécessaire de demander cela si l'autorisation est accordée.

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
