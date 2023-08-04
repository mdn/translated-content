---
title: element.dispatchEvent
slug: Web/API/EventTarget/dispatchEvent
---

{{APIRef("DOM Events")}}

Envoie un {{domxref("Event")}} (_évènement_) à la {{domxref("EventTarget")}} (_cible_) spécifiée (synchrone) en appelant les {{domxref("EventListener")}} (_écouteurs_) dans l'ordre approprié. Le processus normal de traitement de l'évènement (y compris les phases de capture et l'éventuelle propagation) s'applique aussi aux évènements diffusés manuellement avec `dispatchEvent()`.

## Syntaxe

```js
cancelled = !target.dispatchEvent(event);
```

### Paramètres

- `event` est un objet {{domxref("Event")}} à envoyer.
- `target` (_cible_) est utilisée pour initialiser la {{domxref("Event", "", "target")}} et déterminer quels écouteurs d'évènements doivent être invoqués.

### Valeur retournée

- La valeur de retour est `false` (_faux_) si l'évènement est annulable et au moins l'un des gestionnaires d'événements qui ont géré cet événement appelé {{domxref ("Event.preventDefault ()")}}. Sinon, elle est `true` (_vrai_).

La méthode `dispatchEvent` lance une exception `UNSPECIFIED_EVENT_TYPE_ERR` si le type de l'évènement n'a pas été spécifié par son initialisation avant l'appel de la méthode ou s'il est `null` ou une chaîne vide. Les exceptions lancées par les gestionnaires d'évènements sont signalées comme exceptions non interceptées ; les gestionnaires d'événements s'exécutent sur une pile d'appels imbriquée : ils bloquent l'appelant jusqu'à ce qu'ils se terminent, mais les exceptions ne se propagent pas à l'appelant.

## Notes

Contrairement aux événements "natifs", qui sont déclenchés par le DOM et invoquent les gestionnaires d'événements de manière asynchrone via la [boucle des événements](/fr/docs/Web/JavaScript/Concurrence_et_boucle_des_événements), `dispatchEvent` appelle les gestionnaires d'événements de manière synchrone. Tous les gestionnaires d'événements applicables s'exécuteront et retourneront avant que le code ne continue après l'appel à `dispatchEvent`.

Comme montré dans l'exemple qui précède, `dispatchEvent` est la dernière étape du processus création-initialisation-envoi, qui est utilisé pour envoyer des évènements dans le modèle de l'implémentation des évènements. Ceux-ci peuvent être créés en utilisant le [constructeur d'évènements](/fr/docs/Web/API/Event/Event).

Voir aussi [Objet Event référence](/fr/docs/Web/API/Event).

## Exemple

Voir [Création et déclenchement d'évènements](/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
