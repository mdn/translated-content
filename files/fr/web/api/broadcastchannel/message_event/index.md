---
title: "BroadcastChannel : évènement message"
slug: Web/API/BroadcastChannel/message_event
l10n:
  sourceCommit: c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{APIRef}}

L'évènement `message` est déclenché sur un objet [`BroadcastChannel`](/fr/docs/Web/API/BroadcastChannel) lorsqu'un message arrive sur le canal.

## Syntaxe

Utilisez le nom de l'évènement dans les méthodes telles que [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), ou définissez un gestionnaire d'évènements.

```js
addEventListener("message", (event) => {});
onmessage = (event) => {};
```

## Type de l'évènement

Un [`MessageEvent`](/fr/docs/Web/API/MessageEvent). Hérite de l'interface [`Event`](/fr/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Propriété de l'évènement

_En plus des propriétés listées ci-dessous, celles provenant de l'interface parente [`Event`](/fr/docs/Web/API/Event) sont disponibles._

- [`data`](/fr/docs/Web/API/MessageEvent/data) {{readonlyInline}}
  - : Les données envoyées par l'émetteur du message.
- [`origin`](/fr/docs/Web/API/MessageEvent/origin) {{readonlyInline}}
- [`lastEventId`](/fr/docs/Web/API/MessageEvent/lastEventId) {{readonlyInline}}
  - : Une chaîne représentant l'identifiant unique pour l'évènement.
- [`source`](/fr/docs/Web/API/MessageEvent/source) {{readonlyInline}}
  - : Un `MessageEventSource`, qui peut être soit un [`WindowProxy`](/fr/docs/Glossary/WindowProxy), un [`MessagePort`](/fr/docs/Web/API/MessagePort), ou un objet [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker) représentant l'émetteur du message.
- [`ports`](/fr/docs/Web/API/MessageEvent/ports) {{readonlyInline}}
  - : Un tableau d'objets [`MessagePort`](/fr/docs/Web/API/MessagePort) représentant les ports associés au canal par lequel le message est envoyé (lorsque c'est approprié, par exemple, dans le canal de communication ou lorsqu'un message est envoyé à un <i lang="en">worker</i> partagé).

## Exemples

Dans cet exemple, il y a un [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) «&nbsp;émetteur&nbsp;» qui diffuse le contenu du [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) lorsque l'utilisatrice ou l'utilisateur clique sur le bouton. Il y a deux `iframe`s «&nbsp;récepteurs&nbsp;» qui écoutent le message diffusé et écrivent le résultat dans un élément [`<div>`](/fr/docs/Web/HTML/Element/div).

### Émetteur

```html hidden
<h1>Émetteur</h1>
<label for="message">Saisissez un message à diffuser :</label><br />
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Diffusez le message</button>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 150px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}

textarea {
  padding: 0.2rem;
}

label,
br {
  margin: 0.5rem 0;
}

button {
  vertical-align: top;
  height: 1.5rem;
}
```

```js
const canal = new BroadcastChannel("canal_exemple");
const commandeMessage = document.querySelector("#message");
const boutonDeDiffusion = document.querySelector("#broadcast-message");

boutonDeDiffusion.addEventListener("click", () => {
  canal.postMessage(commandeMessage.value);
});
```

### Récepteur 1

```html hidden
<h1>Récepteur 1</h1>
<div id="recu"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const canal = new BroadcastChannel("canal_exemple");
canal.addEventListener("message", (event) => {
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
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const canal = new BroadcastChannel("canal_exemple");
canal.addEventListener("message", (event) => {
  recu.textContent = event.data;
});
```

### Résultat

{{ EmbedLiveSample('Émetteur', '100%', 220) }}

{{ EmbedLiveSample('Récepteur_1', '100%', 160) }}

{{ EmbedLiveSample('Récepteur 2', '100%', 160) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements liés&nbsp;: [`messageerror`](/fr/docs/Web/API/BroadcastChannel/messageerror_event).
