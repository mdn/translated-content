---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

L'interface **`GeolocationPosition`** représente la position de l'appareil concerné à un instant donné. La position, représentée par un objet {{domxref("GeolocationCoordinates")}}, comprend la position 2D de l'appareil, sur un sphéroïde représentant la Terre, mais aussi son altitude et sa vitesse.

## Propriétés

_L'interface `GeolocationPosition` n'hérite d'aucune propriété._

- {{domxref("GeolocationPosition.coords")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un objet {{domxref("GeolocationCoordinates")}} définissant l'emplacement actuel.
- {{domxref("GeolocationPosition.timestamp")}} {{readonlyInline}} {{securecontext_inline}}
  - : Renvoie un {{domxref("DOMTimeStamp")}} représentant l'heure à laquelle l'emplacement a été récupéré.

## Méthodes

**L'interface* `GeolocationPosition` *n'implémente ni n'hérite d'aucune méthode.**

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API de Géolocalisation](/fr/docs/Web/API/Geolocation_API/Using)
- {{domxref("Geolocation")}}
