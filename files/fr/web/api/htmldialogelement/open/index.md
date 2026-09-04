---
title: "HTMLDialogElement : propriété open"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

La propriété **`open`** de l'interface {{DOMxRef("HTMLDialogElement")}} est une valeur booléenne reflétant l'attribut HTML {{HTMLElement("dialog", "<code>open</code>", "open")}}, indiquant si la boîte de dialogue {{HTMLElement("dialog")}} est disponible pour l'interaction.

## Valeur

Une valeur booléenne représentant l'état de l'attribut HTML {{HTMLElement("dialog", "<code>open</code>", "open")}}. Une valeur `true` signifie que la boîte de dialogue est affichée, tandis que `false` signifie qu'elle ne l'est pas.

> [!WARNING]
> Bien que la propriété `open` ne soit techniquement pas en lecture seule et puisse être définie directement, il est fortement déconseillé de le faire selon [la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/interactive-elements.html#note-dialog-remove-open-attribute), car cela peut perturber les interactions normales avec la boîte de dialogue de manière inattendue.
> Par exemple, l'évènement [`close`](/fr/docs/Web/API/HTMLDialogElement/close_event) ne se déclenche pas lorsque la propriété `open` est définie programmatiquement sur `false`, et les appels ultérieurs aux méthodes [`close()`](/fr/docs/Web/API/HTMLDialogElement/close) et [`requestClose()`](/fr/docs/Web/API/HTMLDialogElement/requestClose) n'ont aucun effet.
> Il est préférable d'utiliser des méthodes telles que [`show()`](/fr/docs/Web/API/HTMLDialogElement/show), [`showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal), `close()`, et `requestClose()` pour modifier la valeur de l'attribut `open`.

## Exemples

### Ouvrir une boîte de dialogue

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre une boîte de dialogue {{HTMLElement("dialog")}} contenant un formulaire avec la méthode `showModal()`. Vous pouvez ensuite cliquer sur le bouton _Annuler_ pour fermer la boîte de dialogue (avec la méthode {{DOMxRef("HTMLDialogElement.close()")}}), ou envoyer le formulaire avec le bouton de validation.

Le code enregistre la valeur de `open` lorsque l'état de la boîte de dialogue change.

#### HTML

```html
<!-- Boîte de dialogue simple -->
<dialog id="dialogue">
  <form method="dialog">
    <button type="submit">Fermer</button>
  </form>
</dialog>

<button id="ouvrir">Ouvrir la boîte de dialogue</button>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const elementJournal = document.getElementById("journal");
function log(text) {
  elementJournal.innerText = `${elementJournal.innerText}${text}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const dialogue = document.getElementById("dialogue");
const boutonOuvrir = document.getElementById("ouvrir");

function verifierOuverture(dialogue) {
  log(dialogue.open ? "Boîte : ouverte" : "Boîte : fermée");
}

boutonOuvrir.addEventListener("click", () => {
  dialogue.showModal();
  verifierOuverture(dialogue);
});
```

### Résultat

{{EmbedLiveSample(" Ouvrir une boîte de dialogue", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
