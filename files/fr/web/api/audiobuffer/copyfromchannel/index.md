---
title: AudioBuffer.copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
---

{{ APIRef("Web Audio API") }}

La méthode `copyFromChannel()` de l'interface [`AudioBuffer`](/fr/docs/Web/API/AudioBuffer) copie les échantillons de l'un des canaux de l'`AudioBuffer` dans un tableau.

## Syntaxe

```js
tableauDonnees.copyFromChannel(destination, numeroCanal, decalageDebut);
```

### Paramètres

- _destination_
  - : Un tableau {{domxref("Float32Array")}} dans lequel copier les données.
- _channelNumber_
  - : Le numéro du canal de l'AudioBuffer depuis lequel copier les données. Si _channelNumber_ est supérieur ou égal à {{domxref("AudioBuffer.numberOfChannels")}}, une exception `INDEX_SIZE_ERR est` levée.
- _startInChannel_ {{optional_inline}}
  - : Un offset optionnel à partir duquel copier les données. Si la valeur de _startInChannel_ est supérieure à {{domxref("AudioBuffer.length")}}, une exception `INDEX_SIZE_ERR` est levée.

## Exemple

```js
var tableauDonnees = contextAudio.createBuffer(
  2,
  frameCount,
  contextAudio.sampleRate,
);
var autreTableau = new Float32Array(length);
tableauDonnees.copyFromChannel(autreTableau, 1, 0);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
