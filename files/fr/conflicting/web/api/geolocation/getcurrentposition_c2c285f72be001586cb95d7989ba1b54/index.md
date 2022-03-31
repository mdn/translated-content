---
title: PositionOptions.maximumAge
slug: >-
  conflicting/Web/API/Geolocation/getCurrentPosition_c2c285f72be001586cb95d7989ba1b54
translation_of: Web/API/PositionOptions/maximumAge
original_slug: Web/API/PositionOptions/maximumAge
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

La propriété **`PositionOptions.maximumAge`** est de type `long` positif indiquant l'âge maximal en millisecondes d'une position en cache possible qu'il est acceptable de renvoyer. Si la valeur est `0`, cela signifie que le périphérique ne peut pas utiliser une position mise en cache et doit tenter de récupérer la position actuelle réelle. Si la valeur est [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity) l'appareil doit renvoyer une position mise en cache indépendamment de son âge.

## Syntax

    positionOptions.maximumAge = timeLength

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('Geolocation', '#maximumage', 'PositionOptions.maximumAge')}} | {{Spec2('Geolocation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PositionOptions.maximumAge")}}

## Voir aussi

- [Utiliser geolocation](/fr/docs/WebAPI/Using_geolocation)
- L'interface {{domxref("PositionOptions")}} à laquelle il appartient.
