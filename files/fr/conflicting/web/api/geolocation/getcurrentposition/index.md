---
title: PositionOptions.enableHighAccuracy
slug: conflicting/Web/API/Geolocation/getCurrentPosition
translation_of: Web/API/PositionOptions/enableHighAccuracy
original_slug: Web/API/PositionOptions/enableHighAccuracy
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

la propriété **`PositionOptions.enableHighAccuracy`** est un {{domxref("Boolean")}} qui indique que l'application souhaite recevoir les meilleurs résultats possibles. Si `true` si l'appareil est capable de fournir une position plus précise, il le fera. Notez que cela peut entraîner des temps de réponse plus lents ou une augmentation de la consommation d'énergie (avec une puce GPS sur un appareil mobile par exemple). D'un autre côté, si `false` (la valeur par défaut), le périphérique peut prendre la liberté d'économiser des ressources en répondant plus rapidement et/ou en utilisant moins d'énergie.

## Syntax

    positionOptions.enableHighAccuracy = booleanValue

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('Geolocation', '#enablehighaccuracy', 'PositionOptions.enableHighAccuracy')}} | {{Spec2('Geolocation')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.PositionOptions.enableHighAccuracy")}}

## Voir aussi

- [Utiliser geolocation](/fr/docs/WebAPI/Using_geolocation)
- L'interface {{domxref("PositionOptions")}} à laquelle il appartient.
