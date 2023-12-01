---
title: DoubleRange
slug: Web/API/MediaTrackConstraints
---

{{APIRef("Media Capture and Streams")}}

Le dictionnaire **`DoubleRange`** est utilisé pour définir une plage de valeurs à virgule flottante double précision autorisées pour une propriété, avec l'une ou les deux valeurs maximale et minimale spécifiées. Le dictionnaire {{domxref("ConstrainDouble")}} est basé sur cela, en l'augmentant pour prendre également en charge les valeurs exactes et idéales.

## Propriétés

- `max`
  - : Une valeur à virgule flottante spécifiant la plus grande valeur autorisée de la propriété qu'elle décrit.
- `min`
  - : Une valeur à virgule flottante spécifiant la plus petit valeur autorisée de la propriété qu'elle décrit.

Les valeurs `min` et/ou `max` spécifiées sont obligatoires. Si aucune correspondance ne peut être trouvée dans la plage donnée, une erreur se produit.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [API de capture multimédia et de flux](/fr/docs/Web/API/Media_Streams_API)
- [Capacités, contraintes et paramètres](/fr/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("ConstrainDoubleRange")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackCapabilities")}}
- {{domxref("MediaTrackSupportedConstraints")}}
