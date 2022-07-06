---
title: AudioBuffer.duration
slug: Web/API/AudioBuffer/duration
translation_of: Web/API/AudioBuffer/duration
---
{{ APIRef("Web Audio API") }}

La propriéré `duration`  de l'interface {{ domxref("AudioBuffer") }} renvoie un nombre flottant à double précision représentant la durée, en secondes, des données PCM stockées dans le buffer.

## Syntaxe

```js
var tableauTampon = audioCtx.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);
tableauTampon.duration;
```

### Valeur

Nombre flottant à double précision.

## Exemple

```js
// Stereo
var nombreCanaux = 2;

// Crée une mémoire tampon vide de 2 secondes
// à la fréquence d'échantillonage du contexte AudioContext
var nombreFrames = contexteAudio.sampleRate * 2.0;
var tableauDonnees = audioCtx.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);

bouton.onclick = function() {
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
  console.log(tableauDonnees.duration);
}
```

## Spécification

| Spécification                                                                                    | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioBuffer-duration', 'duration')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBuffer.duration")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
