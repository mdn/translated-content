---
title: AudioBuffer.copyToChannel()
slug: Web/API/AudioBuffer/copyToChannel
---

{{ APIRef("Web Audio API") }}

La méthode `copyToChannel()` de l'interface [`AudioBuffer`](/fr/docs/Web/API/AudioBuffer) copie les échantillons du tableau source vers le canal de l'`AudioBuffer` spécifié.

## Syntaxe

```js
myArrayBuffer.copyToChannel(source, channelNumber, startInChannel);
```

### Paramètres

- _source_
  - : Le tableau {{jsxref("Float32Array")}} depuis lequel copier les données.
- _channelNumber_
  - : Le numéro du canal de l'{{domxref("AudioBuffer")}} dans lequel copier les données. Si _channelNumber_ est supérieur ou égal à {{domxref("AudioBuffer.numberOfChannels")}}, une exception `INDEX_SIZE_ERR est` levée.
- _startInChannel {{optional_inline}}_
  - : Un offset optionnel à partir duquel copier les données. Si la valeur de _startInChannel_ est supérieure à {{domxref("AudioBuffer.length")}}, une exception `INDEX_SIZE_ERR` est levée.

## Exemple

```js
var tableauDonnees = contextAudio.createBuffer(
  2,
  frameCount,
  contextAudio.sampleRate,
);
var autreTableau = new Float32Array();
// Copy les données depuis le second canal vers le second tableau.
tableauDonnees.copyFromChannel(autreTableau, 1, 0);
// Copie les données depuis le second tableau vers le premier canal du premier tableau. A présent les deux canaux ont des données identiques.
tableauDonnees.copyToChannel(autreTableau, 0, 0);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
