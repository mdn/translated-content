---
title: 'BroadcastChannel: message event'
slug: Web/API/BroadcastChannel/message_event
page-type: web-api-event
tags:
  - Event
  - Reference
browser-compat: api.BroadcastChannel.message_event
---
{{APIRef}}

L'événement `message` est déclenché sur un objet {{domxref('BroadcastChannel')}} lorsqu'un message arrive sur le canal.

## Syntaxe

Utiliser le nom de l'événement dans les méthodes telles que {{domxref("EventTarget.addEventListener", "addEventListener()")}}, ou définissez un gestionnaire d'événement.

```js
addEventListener('message', event => { })
onmessage = event => { }
```

## Type de l'événement

Un {{domxref("MessageEvent")}}. Hérite d'{{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Propriété de l'événement

_En plus des propriétés listées ci-dessous, celles provenant de l'interface parent {{domxref("Event")}} sont disponibles._

- {{domxref("MessageEvent.data", "data")}} {{readonlyInline}}
  - : Les données envoyées par l'émetteur du message.
- {{domxref("MessageEvent.origin", "origin")}} {{readonlyInline}}
  - : Une chaîne représentant l'origine de l'émetteur du message.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{readonlyInline}}
  - : Une chaîne représentant un ID unique pour l'événement.
- {{domxref("MessageEvent.source", "source")}} {{readonlyInline}}
  - : Un _message event source_, qui peut être soit un  {{glossary("WindowProxy")}}, un {{domxref("MessagePort")}}, ou un objet {{domxref("ServiceWorker")}} représentant l'émetteur du message.
- {{domxref("MessageEvent.ports", "ports")}} {{readonlyInline}}
  - : Un tableau d'objets {{domxref("MessagePort")}} représentant les connecteurs associés au canal par lequel le message est envoyé (lorsque c'est approprié, par exemple, dans le canal de communication ou lorsqu'un message est envoyé à un _shared worker_).

## Exemples

Dans cet exemple, il y a un [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) "émetteur" qui diffuse le contenu du [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) lorsque l'utilisateur clique sur le bouton. Il y a deux iframes "récepteurs" qui écoutent le message diffusé et écrivent le résultat dans un élément [`<div>`](/fr/docs/Web/HTML/Element/div).

### Émetteur

```html hidden
<h1>Émetteur</h1>
<label for="message">Saisissez un message à diffuser:</label><br/>
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Diffusez le message</button>
```

```css hidden
body {
     border: 1px solid black;
     padding: .5rem;
     height: 150px;
     font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}

textarea {
    padding: .2rem;
}

label, br {
    margin: .5rem 0;
}

button {
    vertical-align: top;
    height: 1.5rem;
}
```

```js
const canal = new BroadcastChannel('canal_exemple');
const commandeMessage = document.querySelector('#message');
const boutonDeDiffusion = document.querySelector('#broadcast-message');

boutonDeDiffusion.addEventListener('click', () => {
    canal.postMessage(commandeMessage.value);
})
```

### Récepteur 1

```html hidden
<h1>Récepteur 1</h1>
<div id="recu"></div>
```

```css hidden
body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans",
    sans-serif; margin-bottom: 1rem;
}
```

```js
const canal = new BroadcastChannel('canal_exemple');
canal.addEventListener('message', event => {
  recu.textContent = event.data;
});
```

### Récepteur 2

```html hidden
<h1>Récepteur 2</h1>
<div id="recu"></div>
```

```css hidden
body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}
```

```js
const canal = new BroadcastChannel('canal_exemple');
canal.addEventListener('message', event => {
  recu.textContent = event.data;
});
```

### Résultat

{{ EmbedLiveSample('Émetteur', '100%', 220) }}

{{ EmbedLiveSample('Récepteur_1', '100%', 160) }}

{{ EmbedLiveSample('Récepteur 2', '100%', 160) }}

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- Événements liés: [`messageerror`](/fr/docs/Web/API/BroadcastChannel/messageerror_event).
