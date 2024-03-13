---
title: PeriodicWave
slug: Web/API/PeriodicWave
---

{{APIRef("Web Audio API")}}

L'interface **`PeriodicWave`** définit une forme d'onde périodique qui peut être utilisée pour modeler la sortie d'un nœud [`OscillatorNode`](/fr/docs/Web/API/OscillatorNode).

Un objet `PeriodicWave` ne possède ni entrée ni sortie. Il est utilisé pour définir des oscillateurs personnalisés lors d'appels à [`OscillatorNode.setPeriodicWave()`](/fr/docs/Web/API/OscillatorNode/setPeriodicWave). L'objet `PeriodicWave` lui-même est créé/renvoyé par [`BaseAudioContext.createPeriodicWave`](/fr/docs/Web/API/BaseAudioContext/createPeriodicWave).

## Constructeur

- [`PeriodicWave()`](/fr/docs/Web/API/PeriodicWave/PeriodicWave)
  - : Crée un nouvel objet `PeriodicWave` qui utilise les valeurs par défaut pour l'ensemble des propriétés. Si vous souhaitez utiliser des valeurs adaptées, il faudra utiliser la méthode de création [`BaseAudioContext.createPeriodicWave`](/fr/docs/Web/API/BaseAudioContext/createPeriodicWave) à la place.

## Propriétés

_Aucune, et `PeriodicWave` n'hérite d'aucune autre propriété._

## Méthodes

_Aucune, et `PeriodicWave` n'hérite d'aucune autre méthode._

## Exemple

Voir [`BaseAudioContext.createPeriodicWave`](/fr/docs/Web/API/BaseAudioContext/createPeriodicWave) pour un exemple de code simple qui illustre comment créer un objet `PeriodicWave` contenant une onde en sinus.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API <i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
