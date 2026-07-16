---
title: "HTMLDialogElement : évènement cancel"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`cancel`** est déclenché sur un élément {{HTMLElement("dialog")}} lorsque l'utilisateur·ice déclenche une demande de fermeture.

Le gestionnaire d'évènement **`cancel`** peut être utilisé pour remplacer le comportement par défaut lors de la réception d'une demande de fermeture et empêcher la boîte de dialogue de se fermer.
Si le comportement par défaut n'est pas annulé, la boîte de dialogue se ferme et déclenche un évènement {{DOMxRef("HTMLDialogElement/close_event", "close")}}.
Si le comportement par défaut n'est pas annulé, la boîte de dialogue se ferme et déclenche un évènement {{DOMxRef("HTMLDialogElement/close_event", "close")}}.

Les demandes de fermeture peuvent être déclenchées par&nbsp;:

- Appuyer sur la touche <kbd>Échap</kbd> sur les plateformes de bureau
- Appeler la méthode {{DOMxRef("HTMLDialogElement.requestClose()", "requestClose()")}}
- Le bouton retour sur les plateformes mobiles

Cet évènement est annulable mais ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Type d'évènement

Un évènement {{DOMxRef("Event")}} générique.

## Exemples

### Annuler une boîte de dialogue

L'exemple suivant montre un bouton qui, lorsqu'il est cliqué, ouvre un {{HTMLElement("dialog")}} en utilisant la méthode {{DOMxRef("HTMLDialogElement.showModal()", "showModal()")}}.

Vous pouvez déclencher l'évènement `cancel` en cliquant soit sur le bouton _Demander la fermeture_ pour fermer la boîte de dialogue (avec la méthode {{DOMxRef("HTMLDialogElement.requestClose()", "requestClose()")}}) ou en appuyant sur la touche <kbd>Échap</kbd>.

Remarquez que le gestionnaire d'évènement `cancel` enregistre l'évènement puis retourne, permettant à la boîte de dialogue de se fermer (ce qui à son tour déclenche l'évènement `close`).
Vous pouvez supprimer le commentaire de la ligne contenant `event.preventDefault()` pour annuler l'évènement.

#### HTML

```html
<dialog id="dialogue">
  <button type="button" id="demande-fermeture">Demander la fermeture</button>
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
function journaliser(text, clear = false) {
  if (clear) {
    elementJournal.innerText = "";
  }
  elementJournal.innerText = `${elementJournal.innerText}${text}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const dialogue = document.getElementById("dialogue");
const boutonOuvrir = document.getElementById("ouvrir");
const boutonDemandeFermeture = document.getElementById("demande-fermeture");

// Le bouton Ouvrir ouvre une boîte de dialogue bloquante
boutonOuvrir.addEventListener("click", () => {
  journaliser("bouton ouvrir cliqué", true);
  journaliser("showModal() du dialogue appelé");
  dialogue.showModal();
});

// Demande de fermeture
boutonDemandeFermeture.addEventListener("click", () => {
  journaliser("bouton demander la fermeture cliqué");
  journaliser("requestClose() du dialogue appelé");
  // Déclenche l'évènement cancel
  dialogue.requestClose();
});

// Déclenché lorsque requestClose() est appelé
// Empêche la fermeture de la boîte de dialogue en appelant event.preventDefault()
dialogue.addEventListener("cancel", (event) => {
  journaliser("évènement cancel du dialogue déclenché");
  // Supprimez les commentaires des deux lignes suivantes pour empêcher la fermeture du dialogue
  // journaliser("fermeture du dialogue annulée");
  // event.preventDefault();
});

dialogue.addEventListener("close", (event) => {
  journaliser("évènement close du dialogue déclenché");
});
```

#### Résultat

{{EmbedLiveSample("Annuler une boîte de dialogue", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface&nbsp;:
  - {{HTMLElement("dialog")}}
