---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

AudioProcessingEvent représente l'évènement qui est passé lorsqu'un tampon {{domxref ("ScriptProcessorNode")}} est prêt à être traité.

> **Note :** Cette fonctionnalité est dépréciée à partir de la version du 29 Août 2014 de la spécification Web Audio API, elle sera remplacée par les [Audio Workers](/fr/docs/Web/API/Web_Audio_API#Audio_Workers).

## Propriétés

_La liste ci-dessous inclut les propriétés héritées de son parent, {{domxref("Event")}}._

| Propriété                         | Type                       | Description                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{ReadOnlyInline}}       | {{domxref("EventTarget")}} | La cible de l'évènement (la plus haute dans le DOM).                                                                                                                                                                                                                                                                   |
| `type` {{ReadOnlyInline}}         | {{domxref("DOMString")}}   | Le type d'évènement.                                                                                                                                                                                                                                                                                                   |
| `bubbles` {{ReadOnlyInline}}      | `boolean`                  | Indique si l'évènement se propage normalement.                                                                                                                                                                                                                                                                         |
| `cancelable` {{ReadOnlyInline}}   | `boolean`                  | Indique s'il est possible d'annuler l'évènement.                                                                                                                                                                                                                                                                       |
| `playbackTime` {{ReadOnlyInline}} | `double`                   | Moment auquel le son sera joué, tel que défini par {{domxref("AudioContext.currentTime")}}                                                                                                                                                                                                                             |
| `inputBuffer` {{ReadOnlyInline}}  | {{domxref("AudioBuffer")}} | Tampon contenant les données audio à traiter en entrée. Le nombre de canaux est défini comme paramètre, `numberOfInputChannels`, de la méthode constructeur {{domxref("AudioContext.createScriptProcessor()")}}. L'`AudioBuffer` renvoyé est valide uniquement dans la portée de la fonction `onaudioprocess`.         |
| `outputBuffer` {{ReadOnlyInline}} | {{domxref("AudioBuffer")}} | Tampon dans lequel les données doivent être écrites en sortie. Le nombre de canaux est défini comme paramètre, `numberOfOutputChannels`, de la méthode constructeur {{domxref("AudioContext.createScriptProcessor()")}}. L'`AudioBuffer` renvoyé est valide uniquement dans la portée de la fonction `onaudioprocess`. |

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
