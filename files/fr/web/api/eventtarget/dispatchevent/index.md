---
title: "EventTarget : méthode dispatchEvent()"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Les événements déclenchés manuellement avec `dispatchEvent()` suivent les mêmes règles de gestion que les événements natifs, y compris la phase de capture et, éventuellement, de propagation.

La méthode **`dispatchEvent()`** de l'interface {{domxref("EventTarget")}} envoie un objet {{domxref("Event")}} à la cible, invoquant (de façon synchrone) les écouteurs d'événements concernés dans l'ordre approprié. Les règles normales de gestion des événements (y compris la phase de capture et, éventuellement, de propagation) s'appliquent aussi aux événements déclenchés manuellement avec `dispatchEvent()`.

Appeler `dispatchEvent()` est la dernière étape pour _déclencher un événement_. L'événement doit déjà avoir été créé et initialisé à l'aide d'un constructeur {{domxref("Event/Event", "Event()")}}.

> [!NOTE]
> Lors de l'appel à cette méthode, la propriété {{domxref("Event.target")}} est initialisée à la valeur de l'`EventTarget` courant.

Contrairement aux événements « natifs », qui sont déclenchés par le navigateur et invoquent les gestionnaires d'événements de façon asynchrone via la [boucle d'événements](/fr/docs/Web/JavaScript/Reference/Execution_model), `dispatchEvent()` invoque les gestionnaires d'événements _de façon synchrone_. Tous les gestionnaires concernés sont appelés et terminent leur exécution avant que `dispatchEvent()` ne retourne.

## Syntaxe

```js-nolint
dispatchEvent(event)
```

### Paramètres

- `event`
  - : L'objet {{domxref("Event")}} à déclencher. Sa propriété {{domxref("Event.target")}} sera définie sur la valeur de l'{{domxref("EventTarget")}} courant.

### Valeur de retour

Retourne `false` si `event` est annulable et qu'au moins un des gestionnaires d'événements ayant reçu `event` ayant appelé {{domxref("Event.preventDefault()")}}. Sinon, retourne `true`.

### Exceptions

- `InvalidStateError` {{domxref("DomException")}}
  - : Levée si le type de l'événement n'a pas été spécifié lors de l'initialisation de l'événement.

> [!WARNING]
> Les exceptions levées par les gestionnaires d'événements sont signalées comme des exceptions non interceptées. Les gestionnaires d'événements s'exécutent sur une pile d'appels imbriquée&nbsp;: ils bloquent l'appelant jusqu'à leur achèvement, mais les exceptions ne sont pas propagées à l'appelant.

## Exemple

Voir [Créer et déclencher des événements](/fr/docs/Web/API/Document_Object_Model/Events#créer_et_déclencher_des_événements).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence de l'objet Event](/fr/docs/Web/API/Event)
