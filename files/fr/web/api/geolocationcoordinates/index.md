---
title: Coordinates
slug: Web/API/GeolocationCoordinates
---

{{securecontext_header}}{{APIRef("Geolocation API")}}L'interface **`Coordinates`** représente la position et l'altitude du périphérique sur Terre, ainsi que la précision avec lesquels ces propriétés sont calculées.

## Propriétés

_L'interface `Coordinates` n'hérite d'aucune propriété._

- {{domxref("Coordinates.latitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un `double` représentant la latitude en degrés décimaux.
- {{domxref("Coordinates.longitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un `double` représentant la longitude en degrés décimaux.
- {{domxref("Coordinates.altitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un `double` représentant l'altitude en mètres, relatif au niveau de la mer. Cette valeur peut être `null` si l'implémentation ne peut pas fournir de données.
- {{domxref("Coordinates.accuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un `double` représentant la précision des propriétés `latitude` et `longitude` , exprimé en mètres.
- {{domxref("Coordinates.altitudeAccuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un `double` représentant la précision de l'`altitude` . Cette valeur peut être `null`.
- {{domxref("Coordinates.heading")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un `double` représentant la direction dans laquelle le périphérique se déplace. Cette valeur, spécifiée en degrés, indique la distance à laquelle le périphérique se trouve par rapport au Vrai Nord. `0` degrés représente le Vrai Nord, la direction est déterminé suivant le sens horaire des aiguilles d'une montre (ce qui veut dire que l'Est se trouve à `90` degrés et l'Ouest à `270` degrés). Si `speed` est à `0`, `heading` est alors [`NaN`](/fr/docs/JavaScript/Reference/Global_Objects/NaN). Si le périphérique est incapable de fournir des informations relatives à l'endroit où il se déplace (`heading`), cette valeur est alors `null`.
- {{domxref("Coordinates.speed")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un `double` représentant la vélocité du périphérique en mètres par seconde. Cette valeur peut être `null`.

## Méthodes

**_L'interface_ `Coordinates` _n'implémente et n'hérite d'aucune méthode._**

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Using geolocation](/fr/docs/WebAPI/Using_geolocation)
- The {{domxref("Geolocation")}} interface that uses it.
