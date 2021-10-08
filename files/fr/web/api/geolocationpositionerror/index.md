---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
translation_of: Web/API/GeolocationPositionError
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

L'interface **`GeolocationPositionError`** représente la raison de l'erreur apparue lorsque l'on utilise la géolocalisation de l'appareil.

## Propriétés

_L'interface `GeolocationPositionError` n'hérite d'aucune propriété._

- {{domxref("GeolocationPositionError.code")}} {{readonlyInline}} {{securecontext_inline}}

  - : Retourne un `unsigned short` représentant un code d'erreur. Les valeurs possibles sont:

    | Valeur | Constante associée     | Description                                                                                                                                              |
    | ------ | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1`    | `PERMISSION_DENIED`    | L’acquisition de la position échoue car la page n'a pas l'autorisation de le faire.                                                                      |
    | `2`    | `POSITION_UNAVAILABLE` | L’acquisition de la localisation échoue car au moins une source donnant la position a retourné une erreur interne.                                       |
    | `3`    | `TIMEOUT`              | Le temps alloué pour obtenir la position défini par {{domxref("PositionOptions.timeout")}} est écoulé avant que l'information soit obtenu. |

- {{domxref("GeolocationPositionError.message")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retourne une {{domxref("DOMString")}} compréhensible par un humain décrivant les détails de l'erreur. Les spécifications indiquent que cela sert au débogage et ne doit pas être directement affiché à l'utilisateur.

## Méthodes

**L'interface* `GeolocationPositionError` *n'implémente et n'hérite d'aucune méthode.**

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('Geolocation', '#position_error_interface', 'GeolocationPositionError')}} | {{Spec2('Geolocation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.GeolocationPositionError")}}

## Voir aussi

- [Utiliser l'API de géolocalisation](/fr/docs/Web/API/Geolocation_API/Using)
- {{domxref("Geolocation")}}
