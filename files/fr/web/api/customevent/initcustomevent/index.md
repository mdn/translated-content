---
title: CustomEvent.initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
---

{{APIRef("DOM")}}{{deprecated_header}}

La méthode **`CustomEvent.initCustomEvent()`** initialise un objet `CustomEvent`. Si l'évènement a déjà été distribué, cette méthode ne change rien.

Les évènements initialisés par ce moyen doivent être créés avec la méthode {{domxref("Document.createEvent()")}}. Cette méthode doit être appelée pour définir l'évènement avant son envoi en utilisant {{domxref("EventTarget.dispatchEvent()") }}. Une fois l'évènement envoyé, la méthode ne fait rien.

> **Attention :** N'utilisez plus cette méthode car elle est dépréciée.
>
> À la place, utilisez les constructeurs d'évènements spécifiques comme {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}. La page [Création et déclenchement d'évènements](/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events) donne plus d'informations sur la façon de les utiliser.

## Syntaxe

```js
event.initCustomEvent(type, canBubble, cancelable, detail);
```

### Paramètres

- `type`
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) contenant le nom de l'évènement.
- _`canBubble`_
  - : est un {{jsxref("Boolean")}} (_booléen_) indiquant si l'événement passe à travers le DOM ou non.
- `cancelable`
  - : est un {{jsxref("Boolean")}} indiquant si l'événement est annulable.
- _`detail`_
  - : Les données transmises lors de l'initialisation de l'évènement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("CustomEvent")}}
- Le constructeur à utiliser à la place de cette méthode obsolète : {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
