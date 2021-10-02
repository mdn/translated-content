---
title: compositionend
slug: Web/API/Element/compositionend_event
translation_of: Web/API/Element/compositionend_event
original_slug: Web/Events/compositionend
---
L'événement **`compositionend`** est déclenché lorsque la composition d'un texte via {{glossary("input method editor", "méthode de saisie")}} est terminée ou annulée (démarre avec des caractères spéciaux qui requièrent une séquence de touches et d'autres entrées telles que la reconnaissance vocale ou la suggestion de mot sur mobile).

Par exemple, cette événement pourrait être déclanché quand un utilisateur saisie un caractère chinois en utilisant la méthode de saisie [Pinyin](https://en.wikipedia.org/wiki/Pinyin).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Se propage/remonte dans le DOM</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("CompositionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété pour la gestion d'évènement</th>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

## Exemple

### Html

```html
<div class="control">
  <label for="name">Sur macOS, cliquez sur la boîte de texte,<br> puis appuyez sur <kbd>option</kbd> + <kbd>`</kbd>, puis <kbd>a</kbd>:</label>
  <input type="text" id="example" name="example">
</div>

<div class="event-log">
  <label>Log d'événement:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="25"></textarea>
  <button class="clear-log">Effacer</button>
</div>
```

```css hidden
body {
  padding: .2rem;
  display: grid;
  grid-template-areas: "control  log";
}

.control {
  grid-area: control;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

input[type="text"] {
  margin: .5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

### JS

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector('.event-log-contents');
const clearLog = document.querySelector('.clear-log');

clearLog.addEventListener('click', () => {
    log.textContent = '';
});

function handleEvent(event) {
    log.textContent = log.textContent + `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener('compositionstart', handleEvent);
inputElement.addEventListener('compositionupdate', handleEvent);
inputElement.addEventListener('compositionend', handleEvent);
```

### Resultat

{{ EmbedLiveSample('Exemple', '100%', '180px') }}

## Spécifications

| Spécification                                                            | Status                       |
| ------------------------------------------------------------------------ | ---------------------------- |
| {{SpecName('UI Events', '#event-type-compositionend')}} | {{Spec2('UI Events')}} |

## Compatibilités navigateurs

{{Compat("api.Element.compositionend_event")}}

## Evénements liés

- {{Event("compositionstart")}}
- {{Event("compositionupdate")}}
