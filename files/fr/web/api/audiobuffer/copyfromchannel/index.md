---
title: AudioBuffer.copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
tags:
  - API
  - Méthode
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBuffer/copyFromChannel
---
{{ APIRef("Web Audio API") }}

La méthode `copyFromChannel()` de l'interface [`AudioBuffer`](/fr/docs/Web/API/AudioBuffer) copie les échantillons de l'un des canaux de l'`AudioBuffer` dans un tableau.

## Syntaxe

    tableauDonnees.copyFromChannel(destination,numeroCanal,decalageDebut);

### Paramètres

- _destination_
  - : Un tableau {{domxref("Float32Array")}} dans lequel copier les données.
- _channelNumber_
  - : Le numéro du canal de l'AudioBuffer depuis lequel copier les données. Si *channelNumber* est supérieur ou égal à {{domxref("AudioBuffer.numberOfChannels")}}, une exception `INDEX_SIZE_ERR est` levée.
- _startInChannel_ {{optional_inline}}
  - : Un offset optionnel à partir duquel copier les données. Si la valeur de *startInChannel* est supérieure à {{domxref("AudioBuffer.length")}}, une exception `INDEX_SIZE_ERR` est levée.

## Exemple

```js
var tableauDonnees = contextAudio.createBuffer(2, frameCount, contextAudio.sampleRate);
var autreTableau = new Float32Array(length);
tableauDonnees.copyFromChannel(autreTableau,1,0);
```

## Spécification

| Spécification                                                                                                                                                                                                            | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioBuffer-copyFromChannel-void-Float32Array-destination-long-channelNumber-unsigned-long-startInChannel', 'copyFromChannel')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBuffer.copyFromChannel")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
