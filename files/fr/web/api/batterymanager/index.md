---
title: BatteryManager
slug: Web/API/BatteryManager
tags:
  - Mobile
  - batterie
  - gestion
  - niveau
translation_of: Web/API/BatteryManager
---
{{ApiRef()}}

## Sommaire

L'interface `BatteryManager `fournit des moyens pour obtenir des informations sur le niveau de charge de la batterie du système.

La propriété {{domxref ("window.navigator.battery", "navigator.battery")}} retourne une instance de l'interface `BatteryManager `que vous pouvez utiliser pour interagir avec l'API d'état de la batterie.

## Propriétés

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : Un Boolean indiquant si oui ou non la batterie est actuellement en cours de charge.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : Un nombre qui représente le temps restant en secondes jusqu'à ce que la batterie soit complètement chargée, ou 0 si la batterie est complètement chargée.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : Un nombre qui représente le temps restant en secondes jusqu'à ce que la batterie soit complètement déchargée et le système suspendu.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : Un nombre qui représente le niveau de charge de la batterie du système adapté à une valeur comprise entre 0.0 et 1.0.

### Gestionnaires d'Evenements

- {{domxref("BatteryManager.onchargingchange")}}
  - : Un gestionnaire pour le changement de la présence ou non du chargeur.
- {{domxref("BatteryManager.onchargingtimechange")}}
  - : Un gestionnaire pour la mise à jour du temps de charge
- {{domxref("BatteryManager.ondischargingtimechange")}}
  - : Un gestionnaire pour la mise à jour du temps de décharge
- {{domxref("BatteryManager.onlevelchange")}}
  - : Un gestionnaire pour la mise à jour pour les changement du niveau de batterie

## Méthodes

Hérite de {{domxref("EventTarget")}}:

{{page("/en-US/docs/Web/API/EventTarget","Methods")}}

## Spécifications

| Spécification                        | Statut                           | Commentaire            |
| ------------------------------------ | -------------------------------- | ---------------------- |
| {{SpecName('Battery API')}} | {{Spec2('Battery API')}} | Spécification initale. |

## Compatibilité des navigateurs

{{Compat("api.BatteryManager")}}

## Voir aussi

- {{ domxref("navigator.getBattery","navigator.getBattery") }}
- La [Battery Status API](/en-US/docs/WebAPI/Battery_Status)
