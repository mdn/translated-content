---
title: "HTMLGeolocationElement : propriété watch"
short-title: watch
slug: Web/API/HTMLGeolocationElement/watch
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété **`watch`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} permet d'obtenir et de définir une valeur booléenne indiquant si le navigateur doit mettre à jour en continu les données de localisation de l'utilisateur·ice à chaque changement de position de son appareil, ou ne les récupérer qu'une seule fois.

Elle reflète la valeur de l'attribut [`watch`](/fr/docs/Web/HTML/Reference/Elements/geolocation#watch) de l'élément `<geolocation>`.

## Valeur

Une valeur booléenne&nbsp;:

- Si `true`, les données de localisation sont demandées en continu, comme si la méthode {{DOMxRef("Geolocation.watchPosition()")}} était appelée.
- Si `false`, les données de localisation ne sont demandées qu'une seule fois, comme si la méthode {{DOMxRef("Geolocation.getCurrentPosition()")}} était appelée.

La valeur par défaut est `false`.

## Exemples

### Exemple simple

```html
<geolocation watch></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.watch); // true
```

### Récupérer les données de localisation en continu

Dans cet exemple, nous récupérons les données de localisation en continu et les affichons sur la page.

#### HTML

Nous incluons un élément HTML {{HTMLElement("geolocation")}} avec l'attribut `watch` activé. Lorsque l'utilisateur·ice clique sur le bouton affiché et accorde l'autorisation d'utiliser la fonctionnalité `geolocation`, le navigateur commence à demander les données de localisation en continu, à chaque changement de position de l'appareil de l'utilisateur·ice. Nous incluons également un élément HTML {{HTMLElement("p")}} pour afficher les données de localisation et les erreurs.

```html
<geolocation watch></geolocation>
<p id="output"></p>
```

#### JavaScript

Dans notre JavaScript, nous commençons par récupérer les références vers le paragraphe de sortie et l'élément `<geolocation>`, puis nous testons la valeur de `watch` en accédant à la propriété `watch`.

```js
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
console.log(geo.watch); // true
```

Ensuite, nous ajoutons un écouteur d'évènement {{DOMxRef("HTMLGeolocationElement.location_event", "location")}} à l'objet `HTMLGeolocationElement` obtenu, pour détecter le retour de la demande de données de localisation. Si les données sont retournées avec succès, nous y accédons par la propriété {{DOMxRef("HTMLGeolocationElement.position")}} et affichons les valeurs de latitude et de longitude dans le paragraphe de sortie. Si la demande échoue, nous accédons à l'erreur par la propriété {{DOMxRef("HTMLGeolocationElement.error")}} et affichons le message d'erreur dans le paragraphe de sortie.

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
  } else if (geo.error) {
    outputElem.textContent += `${geo.error.message}, `;
  }
});
```

#### Résultat

Voir ce code [en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)). Le code complet inclut également une solution de repli pour les navigateurs qui ne prennent pas en charge l'élément `<geolocation>`.

Essayez d'afficher la démonstration dans un navigateur compatible et un navigateur non compatible si possible, et notez la différence dans le déroulement de la boîte de dialogue d'autorisation lorsque vous choisissez d'autoriser ou de refuser l'utilisation de `geolocation`.

Notez également que, puisque l'attribut `watch` de `<geolocation>` est défini sur `true`, les données de localisation seront demandées et l'évènement `location` sera déclenché en continu, à chaque changement de position de l'utilisateur·ice.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
