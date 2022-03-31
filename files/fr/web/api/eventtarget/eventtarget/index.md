---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
tags:
  - API
  - Cible
  - Constructeur
  - DOM
  - évènements
translation_of: Web/API/EventTarget/EventTarget
---
{{APIRef("DOM Events")}}

Le constructeur **`EventTarget()`** crée une nouvelle instance d'objet {{domxref("EventTarget")}}.

## Syntaxe

    var myEventTarget = new EventTarget();

### Paramètres

Aucun.

### Valeur retournée

Une instance d'objet {{domxref("EventTarget")}}.

## Exemples

```js
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
```

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', '#dom-eventtarget-eventtarget', 'EventTarget() constructor')}} | {{Spec2('DOM WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.EventTarget.EventTarget")}}

## Voir aussi

- {{domxref("EventTarget")}}
