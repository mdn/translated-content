---
title: BaseAudioContext.createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
---

{{ APIRef("Web Audio API") }}

La méthode `createPeriodicWave()` de l'interface {{ domxref("BaseAudioContext") }} est utilisée pour créer une {{domxref("PeriodicWave")}} (onde périodique), qui sert à définir une onde sinusoïdale périodique qui peut être utilisée pour modeler la sortie d'un {{ domxref("OscillatorNode") }}.

## Syntaxe

```js
var onde = AudioContext.createPeriodicWave(réel, imag[, constraints]);
```

### Retour

Un {{domxref("PeriodicWave")}}.

### Paramètres

- `réel`
  - : Un tableau de termes cosinus (traditionnellement les termes A).
- `imag`
  - : Un tableau de termes sinus (traditionnellement les termes B).
- `contraintes` {{optional_inline}}

  - : Un objet dictionnaire spécifiant si la normalisation doit être désactivée (si non spécifié, la normalisation est activée par défaut). Il accepte une propriété :

    - `disableNormalization`: si réglé à `true`, la normalisation est désactivée pour l'onde périodique. Sa valeur par défaut est `false`.

> **Note :** Si normalisée, l'onde résultante aura une valeur absolue de sommet égale à 1.

## Exemple

L'exemple suivant illustre un usage simple de `createPeriodicWave()`, pour créer un objet {{domxref("PeriodicWave")}} contenant une simple courbe de sinus.

```js
var réel = new Float32Array(2);
var imag = new Float32Array(2);
var contexteAudio = new AudioContext();
var oscillateur = contexteAudio.createOscillator();

réel[0] = 0;
imag[0] = 0;
réel[1] = 1;
imag[1] = 0;

var onde = contexteAudio.createPeriodicWave(réel, imag, {
  disableNormalization: true,
});

oscillateur.setPeriodicWave(wave);

oscillateur.connect(contexteAudio.destination);

oscillateur.start();
oscillateur.stop(2);
```

Cela fonctionne car un son n'ayant qu'un unique harmonique est par définition une onde sinusoïdale.

Ici, nous créons une `PeriodicWave` avec deux valeurs. La première est le décalage DC, qui est la valeur à la quelle l'ocillateur démarre. 0 est une bonne valeur de départ ici car nous voulons commencer la courbe au milieu de l'intervalle \[-1.0; 1.0].

La seconde valeur et les suivantes sont les composantes de sinus et de cosinus. Vous pouvez les voir comme le résultat d'une transformation de Fourier, où l'on obtient les valeurs du domaine de fréquence à partir de la valeur du domaine de temps. Ici, avec `createPeriodicWave()`, vous spécifiez les fréquences, et le navigateur calcule une transformation inverse de Fourier pour obtenir un tampon de domaine de temps pour la fréquence de l'oscillateur. Ici, nous définissons seulement un composant au volume maximal (1.0) sur l'harmonique fondamentale, ainsi on obtient une courbe sinusoïdale.

Les coefficients de la transformation de Fourier doivent être données dans un ordre _croissant_ (c'est-à-dire <math><semantics><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>i</mi></mrow></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>3</mn><mi>i</mi></mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} , \left(f+gi\right)e^{3i}</annotation></semantics></math> etc) et peuvent être positifs ou négatifs. Une méthode simple pour obtenir manuellement de tels coefficients (bien qu'elle ne soit la meilleure) est d'utiliser une calculateur graphique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API Web Audio](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
