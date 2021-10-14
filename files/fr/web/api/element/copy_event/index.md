---
title: copy
slug: Web/API/Element/copy_event
translation_of: Web/API/Element/copy_event
original_slug: Web/Events/copy
---
L'événement **copy** est déclenché lorsque l'utilisateur initie une copie par le biais de l'interface du navigateur (par exemple, Ctrl/Cmd+C ou "copier" du menu contextuel) et en réponse d'un appel de {{domxref("Document.execCommand", "document.execCommand('copy')")}} autorisé.

## Informations générales

- Spécification
  - : [Clipboard](https://www.w3.org/TR/clipboard-apis/#the-copy-action)
- Interface
  - : {{domxref("ClipboardEvent")}}
- Propagation
  - : Oui
- Annulable
  - : Oui
- Cible
  - : {{domxref("Element")}}: L'élément ayant le focus (pour les éléments {{domxref("HTMLElement.contentEditable", "contentEditable")}} - l'élément contenant le début de la sélection), ou l'élément {{HTMLElement("body")}}
- Action par défaut
  - : Voir ce-dessous

Un gestionnaire de cet événement peut modifier l'objet {{domxref("ClipboardEvent.clipboardData")}} en appellant {{domxref("DataTransfer.setData", "setData(format, data)")}}:

```js
document.addEventListener('copy', function(e){
    e.clipboardData.setData('text/plain', 'Hello, world!');
    e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
    e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
});
```

Un gestionnaire de cet événement ne peut pas lire les données du presse-papiers en utilisant {{domxref("DataTransfer.getData", "clipboardData.getData()")}}.

L'action par défaut de l'événement dépend de la source de celui-ci et du comportement du gestionnaire:

- Un événement de copie [synthétique](/fr/docs/Web/Guide/Events/Creating_and_triggering_events) n'a pas d'action par défaut;
- Si l'événement n'a pas été annulé: Copie de la sélection (s'il y a) dans le presse-papiers;
- Si le gestionnaire a annulé l'événement et appelé setData(): Copie le contenu de _clipboardData_ de {{domxref("ClipboardEvent")}};
- Si le gestionnaire a annulé l'événement sans appelé setData(): Aucune action.

## Propriétés

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Spécifications

| Spécification                                                            | Statut                               |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-copy')}} | {{Spec2('Clipboard API')}} |

## Compatibilités navigateur

{{Compat("api.Element.copy_event")}}

## Voir aussi

- Événements relatifs : {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- Cet événement sur {{domxref("Document")}} cible : {{domxref("Document/copy_event", "copy")}}
- Cet événement sur {{domxref("Window")}} cible : {{domxref("Window/copy_event", "copy")}}
