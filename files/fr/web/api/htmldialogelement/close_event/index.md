---
title: 'HTMLDialogElement: close event'
slug: Web/API/HTMLDialogElement/close_event
tags:
  - API
  - DOM HTML
  - Evènement
  - HTMLDialogElement
  - Reference
  - close
  - fermeture
translation_of: Web/API/HTMLDialogElement/close_event
---
{{ APIRef() }}

L'événement **`close`** est déclenché sur un objet {{domxref ("HTMLDialogElement")}} lorsque la boîte de dialogue qu'il représente a été fermée.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bouillonnant</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété du gestionnaire d'événements</th>
      <td>
        {{domxref ("GlobalEventHandlers/onclose", "onclose")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Exemple concret

#### HTML

```html
<dialog class="example-dialog">
  <button class="close" type="reset">Close</button>
</dialog>

<button class="open-dialog">Open dialog</button>

<div class="result"></div>
```

```css hidden
button, div {
  margin: .5rem;
}
```

#### JS

```js
const result = document.querySelector('.result')

const dialog = document.querySelector('.example-dialog')
dialog.addEventListener('close', (event) => {
  result.textContent = 'dialog was closed'
})

const openDialog = document.querySelector('.open-dialog')
openDialog.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') {
    dialog.showModal()
    result.textContent = ''
  } else {
    result.textContent = 'The dialog API is not supported by this browser'
  }
})

const closeButton = document.querySelector('.close')
closeButton.addEventListener('click', () => {
  dialog.close()
})
```

#### Résultat

{{ EmbedLiveSample('Exemple_concret', '100%', '100px') }}

## Spécifications

| Spécification                                                                            | État                             |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| {{ SpecName('HTML WHATWG', 'indices.html#event-close', 'close') }} | {{Spec2('HTML WHATWG')}} |

## Compatibilité des navigateurs

{{Compat("api.HTMLDialogElement.close_event")}}

## Voir également

- Élément HTML [`<dialog>`](/en-US/docs/Web/HTML/Element/dialog)
