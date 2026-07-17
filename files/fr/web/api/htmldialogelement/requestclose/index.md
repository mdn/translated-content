---
title: "HTMLDialogElement : méthode requestClose()"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La méthode **`requestClose()`** de l'interface {{DOMxRef("HTMLDialogElement")}} demande la fermeture de l'élément HTML {{HTMLElement("dialog")}}.
Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}} de la boîte de dialogue.

Cette méthode diffère de {{DOMxRef("HTMLDialogElement.close()", "close()")}}, car elle déclenche d'abord un évènement {{DOMxRef("HTMLDialogElement.cancel_event", "cancel")}}, puis l'évènement {{DOMxRef("HTMLDialogElement.close_event", "close")}}.
Les auteur·ice·s peuvent appeler {{DOMxRef("Event.preventDefault()")}} dans le gestionnaire de l'évènement {{DOMxRef("HTMLDialogElement.cancel_event", "cancel")}} pour empêcher la fermeture de la boîte de dialogue.

Cette méthode expose le même comportement que le mécanisme interne de surveillance de fermeture (<i lang="en">close watcher</i> en anglais) du dialogue.

## Syntaxe

```js-nolint
requestClose()
requestClose(returnValue)
```

### Paramètres

- `returnValue` {{Optional_Inline}}
  - : Chaîne de caractères représentant la nouvelle valeur de {{DOMxRef("HTMLDialogElement.returnValue")}} de la boîte de dialogue.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Utiliser `requestClose()`

L'exemple suivant montre un bouton qui, lorsqu'il est cliqué, ouvre un {{HTMLElement("dialog")}} en utilisant la méthode {{DOMxRef("HTMLDialogElement.showModal()", "showModal()")}}.
Vous pouvez ensuite cliquer sur le bouton _Fermer_ pour appeler la méthode `requestClose()` et fermer la boîte de dialogue.

Le bouton _Fermer_ ferme la boîte de dialogue sans {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}}, tandis que le bouton _Fermer avec valeur de retour_ ferme la boîte de dialogue avec une {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}}.

L'empêchement de la fermeture de la boîte de dialogue est démontré avec une case à cocher.

#### HTML

```html
<dialog id="dialogue">
  <div>
    <label
      ><input type="checkbox" id="empecher-fermeture" /> Annuler la
      fermeture</label
    >
  </div>
  <button type="button" id="fermer">Fermer</button>
  <button type="button" id="fermer-avec-valeur">
    Fermer avec valeur de retour
  </button>
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
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const dialogue = document.getElementById("dialogue");
const boutonOuvrir = document.getElementById("ouvrir");
const boutonFermer = document.getElementById("fermer");
const boutonFermerAvecValeur = document.getElementById("fermer-avec-valeur");
const caseEmpecherFermeture = document.getElementById("empecher-fermeture");

// Le bouton Ouvrir ouvre une boîte de dialogue modale
boutonOuvrir.addEventListener("click", () => {
  // Réinitialiser la valeur de retour
  dialogue.returnValue = "";
  // Afficher la boîte de dialogue
  dialogue.showModal();
});

// Le bouton Fermer ferme la boîte de dialogue
boutonFermer.addEventListener("click", () => {
  dialogue.requestClose();
});

// Le bouton Fermer avec valeur de retour ferme la boîte de dialogue avec une valeur de retour
boutonFermerAvecValeur.addEventListener("click", () => {
  dialogue.requestClose("des valeurs de retour");
});

// Déclenché lorsque requestClose() est appelé
// Empêcher la fermeture de la boîte de dialogue en appelant event.preventDefault()
dialogue.addEventListener("cancel", (event) => {
  if (caseEmpecherFermeture.checked) {
    journaliser("Fermeture de la boîte de dialogue annulée");
    event.preventDefault();
  }
});

// l'évènement "cancel" n'est pas empêché, la boîte de dialogue se ferme
dialogue.addEventListener("close", () => {
  journaliser(
    `Boîte de dialogue fermée. Valeur de retour : "${dialogue.returnValue}"`,
  );
});
```

#### Résultat

{{EmbedLiveSample("Utiliser `requestClose()`", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- L'évènement {{DOMxRef("HTMLDialogElement.cancel_event", "cancel")}}
