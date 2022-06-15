---
title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
translation_of: Web/API/AudioBuffer/AudioBuffer
---
{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Le constructeur **`AudioBuffer`** créer un nouvel objet {{domxref("AudioBuffer")}}.

## Syntax

    var audioBuffer = new AudioBuffer([options]);
    var audioBuffer = new AudioBuffer(context[, options]);

### Parameters

- _options_ {{optional_inline}}

  - : Les options sont les suivantes:

    - `length`:  Longueur de l'échantillonnage du tampon.
    - `numberOfChannels`: Nombre de cannaux du buffer. La valeur par défaut est 1.
    - `sampleRate`: Taux d'échantillonnage du buffer en Hz. La valeur par défaut est le taux d'échantillonnage du `context` utilisé dans la construction de cet objet

## Spécifications

| Spécification                                                                | Statut                               | Commentaire         |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Web Audio API','#AudioBuffer','AudioBuffer')}} | {{Spec2('Web Audio API')}} | Définition initiale |

## Compatibilité des Navigateurs

{{Compat("api.AudioBuffer.AudioBuffer")}}
