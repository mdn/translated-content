---
title: "HTMLDialogElement : évènement close"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement `close` est déclenché sur un objet `HTMLDialogElement` lorsque l'élément {{HTMLElement("dialog")}} qu'il représente a été fermé.

Cet évènement n'est pas annulable et ne remonte pas dans la chaîne d'évènements (ne se «&nbsp;propage&nbsp;» pas).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou affectez une fonction à la propriété gestionnaire d'évènement.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Type d'évènement

Un évènement {{DOMxRef("Event")}} générique.

## Exemples

### Gérer les évènements `close`

L'exemple suivant montre comment écouter les évènements `close` déclenchés par plusieurs méthodes différentes pour fermer une boîte de dialogue&nbsp;:

- Appel de la méthode {{DOMxRef("HTMLDialogElement.close()", "close()")}}
- Un formulaire avec `method="dialog"`. L'envoi du formulaire ferme le `dialog` et déclenche un évènement {{DOMxRef("HTMLFormElement/submit_event", "submit")}}, sans envoyer de données ni vider le formulaire
- La touche <kbd>Échap</kbd>.
  Voir l'évènement {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}}

#### HTML

```html
<dialog id="dialogue">
  <form method="dialog">
    <button type="submit">Fermer avec method="dialog"</button>
  </form>
  <p><button id="fermer">Fermer avec la méthode .close()</button></p>
  <p>Ou appuyez sur la touche <kbd>Échap</kbd></p>
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

```js hidden
const elementJournal = document.getElementById("journal");
function journaliser(texte, effacer = false) {
  if (effacer) {
    elementJournal.innerText = "";
  }
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

#### JavaScript

```js
const dialogue = document.getElementById("dialogue");
const boutonOuvrir = document.getElementById("ouvrir");
const boutonFermer = document.getElementById("fermer");

boutonOuvrir.addEventListener("click", () => {
  journaliser("bouton ouvrir cliqué", true);
  journaliser("dialogue showModal() appelé");
  dialogue.showModal();
});

boutonFermer.addEventListener("click", () => {
  journaliser("bouton fermer cliqué");
  journaliser("dialogue close() appelé");
  dialogue.close();
});

dialogue.addEventListener("close", (event) => {
  journaliser("évènement close du dialogue déclenché");
});
```

#### Résultat

{{EmbedLiveSample("Gérer les évènements `close`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
