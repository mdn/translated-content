---
title: "HTMLDialogElement : événement close"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'événement `close` est déclenché sur un objet `HTMLDialogElement` lorsque l'élément {{HTMLElement("dialog")}} qu'il représente a été fermé.

Cet événement n'est pas annulable et ne remonte pas dans la chaîne d'événements (ne se «&nbsp;propage&nbsp;» pas).

## Syntaxe

Utilisez le nom de l'événement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou affectez une fonction à la propriété gestionnaire d'événement.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Type d'événement

Un événement {{DOMxRef("Event")}} générique.

## Exemples

### Exemple interactif

#### HTML

```html
<dialog class="example-dialog">
  <form method="dialog">
    <button>Fermer via method="dialog"</button>
  </form>
  <button class="close">Fermer via la méthode .close()</button>
  <p>Ou appuyez sur la touche <kbd>Échap</kbd></p>
</dialog>

<button class="open-dialog">Open dialog</button>

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
dialog.addEventListener("close", (event) => {
  result.textContent = "La boîte de dialogue a été fermée";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  dialog.showModal();
  result.textContent = "";
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Résultat

{{EmbedLiveSample('Exemple interactif', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- L'interface {{DOMxRef("Event")}}
