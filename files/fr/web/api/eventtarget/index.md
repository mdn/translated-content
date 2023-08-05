---
title: EventTarget
slug: Web/API/EventTarget
---

{{ApiRef("DOM Events")}}

`EventTarget` est une interface DOM implémentée par des objets qui peuvent recevoir des événements et peuvent avoir des écouteurs pour eux.

{{domxref ("Element")}}, {{domxref ("Document")}} et {{domxref ("Window")}} sont les cibles d'événements les plus fréquentes, mais d'autres objets peuvent également être des cibles d'événements. Par exemple {{domxref ("XMLHttpRequest")}}, {{domxref ("AudioNode")}}, {{domxref ("AudioContext")}} et autres.

De nombreuses cibles d'événements (y compris des éléments, des documents et des fenêtres) supporte également la définition de [gestionnaires d'événements](/fr/docs/Web/Guide/DOM/Events/Event_handlers) via les propriétés et attributs `onevent`.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("EventTarget.EventTarget()", "EventTarget()")}}
  - : Crée une nouvelle instance d'objet `EventTarget`.

## Méthodes

- {{domxref("EventTarget.addEventListener()", "<var>EventTarget</var>.addEventListener()")}}
  - : Enregistre un gestionnaire d'événements d'un type d'événement spécifique sur `EventTarget`.
- {{domxref("EventTarget.removeEventListener()", "<var>EventTarget</var>.removeEventListener()")}}
  - : Supprime un écouteur d'événement de `EventTarget`.
- {{domxref("EventTarget.dispatchEvent()", "<var>EventTarget</var>.dispatchEvent()")}}
  - : Envoie un événement à cet `EventTarget`.

### Méthodes supplémentaires dans la base de code Chrome de Mozilla

Mozilla inclut quelques extensions à utiliser par les cibles d'événements implémentées par JS pour implémenter les propriétés `onevent`.

Voir aussi [liaisons WebIDL](/fr/docs/Mozilla/WebIDL_bindings).

- `void setEventHandler(DOMString type, EventHandler handler)` {{non-standard_inline}}
- `EventHandler getEventHandler(DOMString type)` {{non-standard_inline}}

## Exemple

### Implémentation simple d'EventTarget

```js
const EventTarget = function () {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  const stack = this.listeners[type];
  for (let i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback) {
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function (event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  const stack = this.listeners[event.type].slice();

  for (let i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};
```

## Spécifications

{{Specifications}}

## Compatiblité des navigateurs

{{Compat}}

## Voir aussi

- [Référence d'événement](/fr/docs/Web/Reference/Events) - les événements disponibles sur la plateforme.
- [Guide du développeur d'événements](/fr/docs/Web/Guide/DOM/Events)
- {{domxref("Event")}} interface
