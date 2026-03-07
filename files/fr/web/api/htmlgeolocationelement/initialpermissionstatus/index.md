---
title: "HTMLGeolocationElement : propriété initialPermissionStatus"
short-title: initialPermissionStatus
slug: Web/API/HTMLGeolocationElement/initialPermissionStatus
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété en lecture seule **`initialPermissionStatus`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} retourne une valeur énumérée représentant l'état d'autorisation pour la fonctionnalité `geolocation` lors du premier chargement de la page.

Si vous souhaitez accéder à l'état d'autorisation actuel pour la fonctionnalité `geolocation`, utilisez la propriété {{DOMxRef("HTMLGeolocationElement.permissionStatus")}}.

## Valeur

Une valeur énumérée, qui peut être&nbsp;:

- `granted`
  - : L'utilisateur·ice a déjà accordé l'autorisation au navigateur d'utiliser la fonctionnalité `geolocation`, soit via l'élément {{HTMLElement("geolocation")}}, soit par un autre mécanisme. Lors de l'utilisation de l'élément `<geolocation>`, cela signifie que l'utilisateur·ice a déjà appuyé sur le bouton affiché et sélectionné l'option «&nbsp;autoriser&nbsp;».

    Si l'élément `<geolocation>` possède l'attribut [`autolocate`](/fr/docs/Web/HTML/Reference/Elements/geolocation#autolocate) défini sur `true`, et que l'autorisation a déjà été accordée, le navigateur commencera à demander les données de localisation dès le chargement de la page, sans que l'utilisateur·ice ait besoin d'appuyer sur le bouton.

- `denied`
  - : L'utilisateur·ice a déjà refusé l'autorisation au navigateur d'utiliser la fonctionnalité `geolocation`, soit via l'élément `<geolocation>`, soit par un autre mécanisme. Lors de l'utilisation de l'élément `<geolocation>`, cela signifie que l'utilisateur·ice a déjà appuyé sur le bouton affiché et sélectionné l'option «&nbsp;ne pas autoriser&nbsp;».
- `prompt`
  - : L'utilisateur·ice n'a pas encore accordé ni refusé l'autorisation au navigateur d'utiliser la fonctionnalité `geolocation`. Lors de l'utilisation de l'élément `<geolocation>`, cela signifie que l'utilisateur·ice n'a pas encore appuyé sur le bouton affiché.

## Examples

### Exemple simple

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.initialPermissionStatus);
// « granted » si l'utilisateur·ice a déjà accordé la permission avant de recharger la page
```

### Utiliser l'état initial d'autorisation pour informer l'utilisateur·ice au chargement de la page

Dans cet exemple, nous utilisons l'état initial d'autorisation pour afficher un message approprié à l'écran, informant l'utilisateur·ice de l'action que le bouton {{HTMLElement("geolocation")}} va effectuer.

#### HTML

Nous incluons un élément `<geolocation>` et deux éléments HTML {{HTMLElement("p")}}, l'un pour afficher les messages d'état d'autorisation, l'autre pour afficher les données de localisation.

```html
<geolocation>
  Votre navigateur ne prend pas en charge l'élément
  <code>&lt;geolocation&gt;</code>.
</geolocation>
<p id="status"></p>
<p id="output"></p>
```

#### JavaScript

Dans notre JavaScript, nous commençons par récupérer les références vers nos trois éléments HTML&nbsp;:

```js
const statusElem = document.querySelector("#status");
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
```

Ensuite, nous incluons une structure `if...else if` qui vérifie la valeur de `initialPermissionStatus` et affiche un message d'état à l'écran pour informer l'utilisateur·ice du statut, de ce qu'il·elle doit faire pour utiliser l'application, et de ce que le bouton fera lorsqu'il sera pressé.

```js
if (geo.initialPermissionStatus === "prompt") {
  statusElem.textContent =
    "Veuillez appuyer sur le bouton pour autoriser l'accès à vos données de localisation et commencer à les demander.";
} else if (geo.initialPermissionStatus === "denied") {
  statusElem.textContent =
    "Autorisation précédemment refusée. Veuillez appuyer sur le bouton pour autoriser l'accès à vos données de localisation et commencer à les demander.";
} else if (geo.initialPermissionStatus === "granted") {
  statusElem.textContent =
    "Autorisation précédemment accordée. Veuillez appuyer sur le bouton pour commencer à demander les données de localisation.";
}
```

Enfin, nous ajoutons un écouteur d'évènement {{DOMxRef("HTMLGeolocationElement.location_event", "location")}} à l'objet `HTMLGeolocationElement`, pour détecter quand la demande de localisation est retournée. Si les données sont retournées avec succès, nous y accédons via la propriété {{DOMxRef("HTMLGeolocationElement.position")}} et affichons les valeurs de latitude et longitude dans le paragraphe de sortie. Si la demande échoue, nous accédons à l'erreur via la propriété {{DOMxRef("HTMLGeolocationElement.error")}} et l'affichons dans le paragraphe de sortie.

```js
geo.addEventListener("location", () => {
  statusElem.textContent = "Données demandées";
  if (geo.position) {
    outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
  } else if (geo.error) {
    outputElem.textContent += `${geo.error.message}, `;
  }
});
```

#### Résultat

Voir [l'exemple en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/initial-permission-status/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/initial-permission-status)). Essayez de sélectionner le bouton `<geolocation>` plusieurs fois, de choisir une option différente dans la boîte de dialogue qui s'affiche à chaque fois et de recharger la page, pour voir comment le message affiché change selon la situation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
