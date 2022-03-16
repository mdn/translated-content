---
title: AudioBufferSourceNode.start()
slug: Web/API/AudioBufferSourceNode/start
translation_of: Web/API/AudioBufferSourceNode/start
---
{{ APIRef("Web Audio API") }}

La méthode `start()` de l'interface {{ domxref("AudioBufferSourceNode") }} permet de planifier la lecture du buffer audio.

## Syntaxe

    AudioBufferSourceNode.start([when][, offset][, duration]);

### Paramètres

- when {{optional_inline}}
  - : Le paramètre `when` indique _à quel moment_ la lecture doit commencer. Si `when` représente une date passée, la lecture commence immédiatement. Si la méthode est invoquée plus d'une fois, ou après un appel à `AudioBufferSourceNode.stop()`, une exception est levée.
    Le temps, en secondes, auquel la lecture doit commencer, spécifié dans le même systèmes de coordonnées temporalles utilisé par {{domxref("AudioContext")}}. Si `when` est inférieur à ({{domxref("AudioContext.currentTime")}}, ou égal à 0, la lecture commence immédiatement. **La valeur par défaut est 0.**
- offset {{optional_inline}}
  - : Décalage, en secondes, indiquant où la lecture doit commencer. Par example, pour lancer la lecture au milieu d'un son durant 10 secondes, l'`offset` doit être 5. La valeur par défaut, 0, démarre la lecture au début du buffer. Les valeurs supérieures à la fin du son sont silencieusement ajustées à la valeur maximum possible (basée sur les propriétés {{domxref("AudioBuffer.duration", "duration")}} et/ou {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}}). Le calcul du décalage se fait en utilisant le taux d'échantillonnage original, donc même lorsqu'un son est lu au double de sa vitesse, le milieu d'un buffer de 10 secondes est toujours 5.
- duration {{optional_inline}}
  - : Le paramètre `duration`, dont la valeur par défaut est la longueur du contenu moins le décalage (offset) du début de lecture, indique la longueur du contenu audio qui doit être lue.
    Durée du son qui doit être lue, en secondes. Si ce paramètre n'est pas spécifié ou a pour valeur 0 (valeur par défaut), le son est lu jusqu'à la fin, s'il n'est pas arrêté par la méthode {{domxref("AudioScheduledSourceNode.stop", "stop()")}}. L'utilisation de ce paramètre est fonctionellement équivalente à l'appel de la méthode `start(when, offset)` suivi de la méthode `stop(when+duration)`.

### Valeur de retour

{{jsxref("undefined")}}.

### Exceptions

- `TypeError`
  - : Une valeur négative a été spécifiée pour au moins l'un des trois paramètres de temps. N'essayez pas de trafiquer les lois de la physique.
- `InvalidStateError`
  - : `start()` a déjà été appelé. Cette fonction ne peut être appelée qu'une seule fois pour chaque `AudioBufferSourceNode`.

## Exemples

L'exemple le plus simple lance la lecture du buffer audio depuis le début - inutile de spécifier des paramètres dans ce cas:

```js
source.start();
```

L'exemple suivant, plus complexe, jouera, après une seconde de pause, un tronçon d'une durée de 10 secondes à partir de la 3ème seconde des données en mémoire.

```js
source.start(contexteAudio.currentTime + 1,3,10);
```

> **Note :** Pour un exemple plus complexe montrant la méthode `start()` en action, consulter l'exemple [`AudioContext.decodeAudioData`](/fr/docs/Web/API/BaseAudioContext/decodeAudioData). Voir aussi l'exemple complet [en direct](https://mdn.github.io/webaudio-examples/decode-audio-data/) et [son code source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

## Spécification

| Spécification                                                                                                                                                        | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-start-void-double-when-double-offset-double-duration', 'start()')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBufferSourceNode.start")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
