---
title: PositionOptions.timeout
slug: >-
  conflicting/Web/API/Geolocation/getCurrentPosition_058087067b28ad25fff974fd59827fb6
translation_of: Web/API/PositionOptions/timeout
original_slug: Web/API/PositionOptions/timeout
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

La propriété **`PositionOptions.timeout`** est de type `long` positif représentant la durée maximale (en millisecondes) que le périphérique est autorisé à prendre pour renvoyer une position. La valeur par défaut est [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity), ce qui signifie que `getCurrentPosition()` ne retournera rien tant que la position n'est pas disponible.

## Syntaxe

    positionOptions.timeout = timeLength

## Spécifications

| Spécification                                                                                                        | Status                           | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('Geolocation', '#dom-positionoptions-timeout', 'PositionOptions.timeout')}} | {{Spec2('Geolocation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PositionOptions.timeout")}}

## Voir aussi

- [Utiliser la géolocalisation](/fr/docs/WebAPI/Using_geolocation)
- L'interface {{domxref("PositionOptions")}} auquel il appartient.
