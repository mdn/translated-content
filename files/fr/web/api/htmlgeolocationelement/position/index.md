---
title: "HTMLGeolocationElement : propriété position"
short-title: position
slug: Web/API/HTMLGeolocationElement/position
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété en lecture seule **`position`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} retourne un objet {{DOMxRef("GeolocationPosition")}} représentant la position de l'utilisateur·ice, en cas de récupération réussie des données de localisation.

La position récupérée peut être ou non à jour. La position de l'utilisateur·ice ne sera récupérée qu'une seule fois lorsque le bouton de contrôle de l'élément `<geolocation>` est pressé, sauf si vous définissez l'attribut [`watch`](/fr/docs/Web/HTML/Reference/Elements/geolocation#watch) sur `true`, auquel cas une nouvelle position sera récupérée chaque fois que l'appareil de l'utilisateur·ice se déplace. Pour lire la position actuelle de l'utilisateur·ice, vous devez lire la propriété `position` en réponse au déclenchement de l'évènement {{DOMxRef("HTMLGeolocationElement.location_event", "location")}}.

Si la récupération des données de localisation échoue, les informations d'erreur associées seront disponibles dans la propriété {{DOMxRef("HTMLGeolocationElement.error")}}.

## Valeur

Un objet {{DOMxRef("GeolocationPosition")}}, ou `null` si la récupération des données de localisation a échoué ou si les données n'ont pas encore été récupérées.

## Exemples

### Exemple simple

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `(${geo.position.coords.latitude},${geo.position.coords.longitude})`,
    );
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

Voir notre [exemple détaillé de carte intégrée](/fr/docs/Web/API/HTMLGeolocationElement#exemple_de_carte_intégrée) pour un exemple réel incluant `position`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
