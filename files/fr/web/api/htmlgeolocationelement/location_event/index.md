---
title: "HTMLGeolocationElement : évènement location"
short-title: location
slug: Web/API/HTMLGeolocationElement/location_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

L'évènement **`location`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} est déclenché chaque fois que le navigateur reçoit des données de localisation, ou des informations d'erreur lorsque la demande de données de localisation a échoué.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("location", (event) => { })

onlocation = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}}.

## Exemples

### Utiliser `location` pour réagir aux données de localisation et aux erreurs

Dans notre [démonstration de carte intégrée <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)), nous utilisons un gestionnaire d'évènement `location` pour réagir à la réception des données de localisation et des erreurs&nbsp;:

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `${geo.position.coords.latitude},${geo.position.coords.longitude}`,
    );
    drawMap(geo.position.coords.latitude, geo.position.coords.longitude, geo);
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

Si les données de localisation sont retournées avec succès, nous accédons à la propriété {{DOMxRef("HTMLGeolocationElement.position")}} et récupérons les valeurs de latitude et de longitude. Nous les affichons dans la console, puis les traçons sur une carte en les passant à la fonction `drawMap()` avec une référence à l'objet `HTMLGeolocationElement`. Si la demande de données échoue, nous accédons à l'erreur par la propriété {{DOMxRef("HTMLGeolocationElement.error")}} et affichons le message d'erreur dans la console.

Voir la page principale {{DOMxRef("HTMLGeolocationElement")}} pour une explication complète de cet exemple.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
