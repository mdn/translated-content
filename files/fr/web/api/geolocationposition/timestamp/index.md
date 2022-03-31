---
title: GeolocationPosition.timestamp
slug: Web/API/GeolocationPosition/timestamp
translation_of: Web/API/GeolocationPosition/timestamp
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

La propriété en lecture seule **`GeolocationPosition.timestamp`** retourne un objet {{domxref("DOMTimeStamp")}} représentant la date et l'heure de la création de l'objet {{domxref("GeolocationPosition")}} auquel il appartient. La précision est de l'ordre de la milliseconde.

## Syntaxe

    var timestamp = geolocationPositionInstance.timestamp

### Valeur

Un objet {{domxref("DOMTimeStamp")}}.

## Spécification

| Spécification                                                                                                                        | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('Geolocation', '#dom-geolocationposition-timestamp', 'GeolocationPosition.timestamp')}} | {{Spec2('Geolocation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.GeolocationPosition.timestamp")}}

## Voir aussi

- [Utiliser l'API de Geolocation](/fr/docs/Web/API/Geolocation_API/Using)
- {{domxref("GeolocationPosition")}}
