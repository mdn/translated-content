---
title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
---

{{APIRef("'Web Audio API'")}}{{SeeCompatTable}}

Le constructeur **`AnalyserNode`** crée un nouvel objet {{domxref("AnalyserNode")}}.

## Syntaxe

```js
var analyserNode = new AnalyserNode(context, options);
```

### Paramètres

- _context_
  - : Référence à un {{domxref("AudioContext")}}.
- _options_ {{optional_inline}}

  - : Un objet avec les propriétés suivantes :

    - `fftSize`: taille initiale sde la FFT pour l'analyse du domaine fréquentiel . La valeur par défaut est 2048.
    - `maxDecibels`: valeur maximale de puissance de la plage pour l'analyse FFT, en décibels. La valeur par défaut est -30.
    - `minDecibels`: valeur minimale de puissance de la plage pour l'analyse FFT, en décibels. La valeur par défaut est -100.
    - `smoothingTimeConstant`: valeur de lissage pour l'analyse FFT. La valeur par défaut est 0.8

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
