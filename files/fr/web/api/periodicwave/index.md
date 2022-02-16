---
title: PeriodicWave
slug: Web/API/PeriodicWave
tags:
  - API
  - Interface
  - Media
  - PeriodicWave
  - Reference
  - Web Audio
  - Web Audio API
  - sinusoïdal
  - sinusoïde
translation_of: Web/API/PeriodicWave
---
{{ APIRef("Web Audio API") }}

L'objet **`PeriodicWave`** permet de définir une forme d'onde personnalisée, pouvant être utilisée comme sortie d'un {{domxref("OscillatorNode")}}.

`PeriodicWave` n'a ni entrée ni sortie ; elle doit être créée avec {{domxref("AudioContext.createPeriodicWave()")}} et être assignée à un OscillatorNode avec {{domxref("OscillatorNode.setPeriodicWave()")}}.

## Constructeur

- {{domxref("PeriodicWave.PeriodicWave()")}}
  - : Crée une `PeriodicWave` (onde périodique) avec toutes les valeurs optionelles mises par défaut. Pour établir des valeurs personnalisées, il faut utiliser le constructeur {{domxref("AudioContext.createPeriodicWave()")}}.

## Propriétés

_Aucune; par ailleurs, `PeriodicWave` n'hérite d'aucune propriété._

## Méthodes

_Aucune; par ailleurs, `PeriodicWave` n'hérite d'aucune méthode._

## Exemple

{{page("/fr/docs/Web/API/BaseAudioContext/createPeriodicWave","Exemple")}}

## Spécifications

| Specification                                                                        | Status                               | Comment |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#periodicwave', 'PeriodicWave')}} | {{Spec2('Web Audio API')}} |         |

## Compatibilité des navigateurs

{{Compat("api.PeriodicWave")}}

## Voir aussi

- [Utiliser l'API Web Audio](/en-US/docs/Web_Audio_API/Using_Web_Audio_API)
