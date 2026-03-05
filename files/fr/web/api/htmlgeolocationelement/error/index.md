---
title: "HTMLGeolocationElement : propriété error"
short-title: error
slug: Web/API/HTMLGeolocationElement/error
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété en lecture seule **`error`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} retourne un objet {{DOMxRef("GeolocationPositionError")}} représentant les informations d'erreur, en cas d'échec de récupération des données de localisation.

Si la récupération des données de localisation réussit, les données sont disponibles dans la propriété {{DOMxRef("HTMLGeolocationElement.position")}}.

## Valeur

Un objet {{DOMxRef("GeolocationPositionError")}}, ou `null` si les données de localisation ont été récupérées avec succès.

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

Voir notre [guide de l'exemple de carte intégrée](/fr/docs/Web/API/HTMLGeolocationElement#exemple_de_carte_intégrée) pour un exemple réel incluant `error`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
