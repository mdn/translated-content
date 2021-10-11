---
title: PositionOptions
slug: >-
  conflicting/Web/API/Geolocation/getCurrentPosition_5852407122355d2ab39863042583c266
translation_of: Web/API/PositionOptions
original_slug: Web/API/PositionOptions
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

L'interface **`PositionOptions`** décrit un objet, contenant des propriétés, à passer en paramétre de {{domxref("Geolocation.getCurrentPosition()")}} et {{domxref("Geolocation.watchPosition()")}}.

## Properties

_L'interface `PositionOptions` n'hérite d'aucune propriété_.

- {{domxref("PositionOptions.enableHighAccuracy")}} {{securecontext_inline}}
  - : C'est un {{domxref("Boolean")}} qui indique que l'application souhaite recevoir les meilleurs résultats possibles. Si la valeur est `true` et si l'appareil peut fournir une position plus précise, il le fera. Notez que cela peut entraîner des temps de réponse plus lents ou une augmentation de la consommation d'énergie (avec une puce GPS sur un appareil mobile par exemple). D'un autre côté, si la valeur est `false`, l'appareil peut prendre la liberté d'économiser des ressources en répondant plus rapidement et/ou en utilisant moins d'énergie. Valeur par défaut: `false`.
- {{domxref("PositionOptions.timeout")}} {{securecontext_inline}}
  - : C'est une valeur positive de type `long` représentant la durée maximale (en millisecondes) que le périphérique est autorisé à prendre pour renvoyer une position. La valeur par défaut est [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity), ce qui signifie que `getCurrentPosition()` ne retournera pas tant que la position n'est pas disponible.
- {{domxref("PositionOptions.maximumAge")}} {{securecontext_inline}}
  - : C'est une valeur positive de type `long` l'âge maximal en millisecondes d'une position en cache possible qu'il est acceptable de retourner. Si initialisé à `0`,  cela signifie que le périphérique ne peut pas utiliser une position mise en cache et doit tenter de récupérer la position actuelle réelle. Si initialisé à [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity) l'appareil doit retourner une position mise en cache indépendamment de son âge. Valeur par défaut: 0.

## Methods

L'interface `PositionOptions` n'implémente ni n'hérite d'aucune méthode.

## Specifications

| Specification                                                                            | Status                           | Comment                |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---------------------- |
| {{SpecName('Geolocation', '#positionoptions', 'PositionOptions')}} | {{Spec2('Geolocation')}} | Specification initiale |

## Browser compatibility

{{Compat("api.PositionOptions")}}

## See also

- [Using geolocation](/fr/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- The {{domxref("Geolocation")}} interface that uses it.
