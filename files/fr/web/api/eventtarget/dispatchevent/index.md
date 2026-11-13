---
title: "EventTarget : méthode dispatchEvent()"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: c615fed2b0c23b4c107d854485ced0d4e1e1e092
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Les évènements déclenchés manuellement avec `dispatchEvent()` suivent les mêmes règles de gestion que les évènements natifs, y compris la phase de capture et, éventuellement, de propagation.

La méthode **`dispatchEvent()`** de l'interface {{DOMxRef("EventTarget")}} envoie un objet {{DOMxRef("Event")}} à la cible, invoquant (de façon synchrone) les écouteurs d'évènements concernés dans l'ordre approprié. Les règles normales de gestion des évènements (y compris la phase de capture et, éventuellement, de propagation) s'appliquent aussi aux évènements déclenchés manuellement avec `dispatchEvent()`.

Appeler `dispatchEvent()` est la dernière étape pour _déclencher un évènement_. L'évènement doit déjà avoir été créé et initialisé à l'aide d'un constructeur {{DOMxRef("Event/Event", "Event()")}}.

> [!NOTE]
> Lors de l'appel à cette méthode, la propriété {{DOMxRef("Event.target")}} est initialisée à la valeur d'un `EventTarget` courant.

Contrairement aux évènements «&nbsp;natifs&nbsp;», qui sont déclenchés par le navigateur en mettant en file d'attente une tâche sur la [boucle d'évènements](/fr/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop), `dispatchEvent()` invoque tous les gestionnaires d'évènements applicables de façon synchrone avant de retourner. La propriété en lecture seule [`isTrusted`](/fr/docs/Web/API/Event/isTrusted) vaut `true` pour les évènements natifs et `false` pour les évènements déclenchés avec `dispatchEvent()`.

## Syntaxe

```js-nolint
dispatchEvent(event)
```

### Paramètres

- `event`
  - : L'objet {{DOMxRef("Event")}} à déclencher. Sa propriété {{DOMxRef("Event.target")}} est définie sur la valeur d'un {{DOMxRef("EventTarget")}} courant.

### Valeur de retour

Retourne `false` si `event` est annulable et qu'au moins un des gestionnaires d'évènements ayant reçu `event` ayant appelé {{DOMxRef("Event.preventDefault()")}}. Sinon, retourne `true`.

### Exceptions

- `InvalidStateError` {{DOMxRef("DomException")}}
  - : Levée si le type de l'évènement n'a pas été défini lors de l'initialisation de l'évènement.

> [!WARNING]
> Les exceptions levées par les gestionnaires d'évènements sont signalées comme des exceptions non interceptées. Les gestionnaires d'évènements s'exécutent sur une pile d'appels imbriquée&nbsp;: ils bloquent l'appelant jusqu'à leur achèvement, mais les exceptions ne sont pas propagées à l'appelant.

## Exemple

Voir [Créer et déclencher des évènements](/fr/docs/Web/API/Document_Object_Model/Events#créer_et_déclencher_des_évènements).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence de l'objet Event](/fr/docs/Web/API/Event)
