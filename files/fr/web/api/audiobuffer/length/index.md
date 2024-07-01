---
title: AudioBuffer.length
slug: Web/API/AudioBuffer/length
---

{{ APIRef("Web Audio API") }}

La propriété `length` de l'interface {{ domxref("AudioBuffer") }} renvoie un entier représentant la longueur, en trames d'échantillonage, des données PCM stockées dans la mémoire-tampon.

## Syntaxe

```js
var tableauMemoireTampon = contexteAudio.createBuffer(
  nombreCanaux,
  nombreFrames,
  contexteAudio.sampleRate,
);
tableauMemoireTampon.length;
```

### Valeur

Un nombre entier.

## Exemple

```js
// Stereo
var nombreCanaux = 2;

// Crée une mémoire tampon vide de 2 secondes
// à la fréquence d'échantillonage du contexte AudioContext
var nombreFrames = contexteAudio.sampleRate * 2.0;
var tableauDonnees = audioCtx.createBuffer(
  nombreCanaux,
  nombreFrames,
  contexteAudio.sampleRate,
);

bouton.onclick = function () {
  // remplit la mémoire tampon avec du bruit blanc
  // valeurs aléatoires entre -1.0 et 1.0
  for (var canal = 0; canal < nombreCanaux; canal++) {
    // génère le tableau contenant les données
    var tampon = tableauDonnees.getChannelData(canal);
    for (var i = 0; i < nombreFrames; i++) {
      // Math.random() donne une valeur comprise entre [0; 1.0]
      // l'audio doit être compris entre [-1.0; 1.0]
      tampon[i] = Math.random() * 2 - 1;
    }
  }
  console.log(tableauDonnees.length);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
