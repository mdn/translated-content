---
title: CustomEvent
slug: Web/API/CustomEvent
tags:
  - API
  - DOM
  - Interface
  - Reference
  - évènements
translation_of: Web/API/CustomEvent
---
{{APIRef("DOM")}}

Les interfaces `CustomEvent` DOM sont des évènements initialisés par une application pour n'importe quel usage.

{{AvailableInWorkers}}

## Constructeur

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : Crée un `CustomEvent.`

## Propriétés

- {{domxref("CustomEvent.detail")}} {{readonlyinline}}
  - : Toute donnée transmise lors de l'initialisation de l'événement.

Cette interface hérite des propriétés de son parent {{domxref("Event")}}:

{{Page("/fr/docs/Web/API/Event", "Propriétés")}}

## Méthodes

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : Initialise un objet CustomEvent. Si l'événement a déjà été distribué, cette méthode ne fait rien.

Cette interface hérite les méthodes de son parent {{domxref("Event")}}:

{{Page("/fr/docs/Web/API/Event", "Méthodes")}}

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire        |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('DOM WHATWG','#interface-customevent','CustomEvent')}} | {{Spec2('DOM WHATWG')}} | Définition initial |

## Compatibilité des navigateurs

{{Compat("api.CustomEvent")}}

## Déclenchement à partir de code privilégié vers du code non-privilégié

Lors du déclenchement d'un CustomEvent depuis du code privilégié (une extension, par exemple) vers du code non-privilégié (une page web par exemple), vous devez prendre en considération la sécurité. Firefox et les autres applications Gecko empêchent qu'un objet créé dans un contexte soit utilisé dans un autre, ce qui empêchera généralement les failles de sécurité, mais ces restrictions peuvent aussi empêcher votre code de s'executer comme prévu.

Lors de la création d'un objet CustomEvent, vous devez créer l'objet à partir de la même [fenêtre](/fr/docs/Mozilla/Tech/XUL/window) que celle où vous déclencherez l'évenement.

```js
// doc est une référence au contenu du document
function dispatchCustomEvent(doc) {
  var eventDetail = Components.utils.cloneInto({foo: 'bar'}, doc.defaultView);
  var myEvent = doc.defaultView.CustomEvent("mytype", eventDetail);
  doc.dispatchEvent(myEvent);
}
```

Notez qu'exposer une fonction permettra au script de l'exécuter avec les privilèges qu'accorde Chrome ce qui peut ouvrir une faille de sécurité.

## Voir aussi

- [Interaction entre pages privilégiées et non-privilégiées](/fr/docs/Extraits_de_code/Interaction_entre_des_pages_%C3%A0_privil%C3%A8ges_et_sans_privil%C3%A8ges)
- [Window.postMessage](/fr/docs/Web/API/Window/postMessage)
- [Création et déclenchement d'événements](/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events)
