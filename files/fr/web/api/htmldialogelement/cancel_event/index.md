---
title: "HTMLDialogElement : événement cancel"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'événement **`cancel`** est déclenché sur un élément {{HTMLElement("dialog")}} lorsque l'utilisateur·ice indique au navigateur qu'il·elle souhaite fermer la boîte de dialogue actuellement ouverte. Le navigateur déclenche cet événement lorsque l'utilisateur·ice appuie sur la touche <kbd>Échap</kbd>.

Cet événement est annulable mais ne se propage («&nbsp;<i lang="en">bubbles</i>&nbsp;» en anglais) pas.

Lorsque la boîte de dialogue `<dialog>` est fermée avec la touche <kbd>Échap</kbd>, les événements `cancel` et {{DOMxRef("HTMLDialogElement/close_event", "close")}} sont tous deux déclenchés.

## Syntaxe

Utilisez le nom de l'événement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'événement.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Type d'événement

Un événement {{DOMxRef("Event")}} générique.

## Exemples

### Annuler une boîte de dialogue

#### HTML

```html
<dialog class="example-dialog">
  <button class="close">Fermer</button>
</dialog>

<button class="open-dialog">Ouvrir la boîte de dialogue</button>

<div class="result"></div>
```

```css hidden
button,
div {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const result = document.querySelector(".result");

const dialog = document.querySelector(".example-dialog");

dialog.addEventListener("cancel", (event) => {
  result.textContent = "La boîte de dialogue a été annulée";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    result.textContent = "";
  } else {
    result.textContent =
      "L'API dialog n'est pas prise en charge par ce navigateur";
  }
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Résultat

{{EmbedLiveSample('Annuler une boîte de dialogue', '100%', 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface&nbsp;:
  - {{HTMLElement("dialog")}}
