---
title: "HTMLDialogElement : méthode requestClose()"
short-title: requestClose()
slug: Web/API/HTMLDialogElement/requestClose
l10n:
  sourceCommit: 48a1966f4fb3633ab40daa544bcb267a7794afb1
---

{{APIRef("HTML DOM")}}

La méthode **`requestClose()`** de l'interface {{domxref("HTMLDialogElement")}} demande la fermeture de l'élément {{htmlelement("dialog")}}.
Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété `returnValue` de la boîte de dialogue.

Cette méthode diffère de {{domxref("HTMLDialogElement.close()")}} car elle déclenche d'abord un événement {{domxref("HTMLDialogElement.cancel_event", "cancel")}}, puis l'événement {{domxref("HTMLDialogElement.close_event", "close")}}.
Les auteur·ice·s peuvent appeler {{domxref("Event.preventDefault()")}} dans le gestionnaire de l'événement `cancel` pour empêcher la fermeture de la boîte de dialogue.

Cette méthode expose le même comportement que le mécanisme interne de surveillance de fermeture (<i lang="en">close watcher</i> en anglais) du dialogue.

## Syntaxe

```js-nolint
requestClose()
requestClose(returnValue)
```

### Paramètres

- `returnValue` {{optional_inline}}
  - : Chaîne de caractères représentant la nouvelle valeur de {{domxref("HTMLDialogElement.returnValue")}} de la boîte de dialogue.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

## Exemples

### Utilisation de requestClose()

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre un élément {{htmlelement("dialog")}} contenant un formulaire via la méthode `showModal()`. Une fois ouvert, vous pouvez cliquer sur le bouton **X** pour demander la fermeture de la boîte de dialogue (via la méthode `HTMLDialogElement.requestClose()`), ou soumettre le formulaire avec le bouton **Valider**.

#### HTML

```html
<!-- Boîte de dialogue simple contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
    <button type="button" id="close" aria-label="fermer" formnovalidate>
      X
    </button>
    <section>
      <p>
        <label for="favAnimal">Animal préféré&nbsp;:</label>
        <select id="favAnimal" name="favAnimal">
          <option></option>
          <option>Crevette de saumure</option>
          <option>Panda roux</option>
          <option>Singe-araignée</option>
        </select>
      </p>
    </section>
    <menu>
      <button type="reset">Réinitialiser</button>
      <button type="submit">Valider</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Mettre à jour les informations</button>
</menu>
```

#### JavaScript

```js
const updateButton = document.getElementById("updateDetails");
const closeButton = document.getElementById("close");
const dialog = document.getElementById("favDialog");

// Le bouton de mise à jour ouvre la boîte de dialogue modale
updateButton.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton de fermeture du formulaire demande la fermeture de la boîte de dialogue
closeButton.addEventListener("click", () => {
  dialog.requestClose("animalNonChoisi");
});

function dialogShouldNotClose() {
  // Ajouter la logique pour décider si la boîte de dialogue doit se fermer.
  // Fermeture empêchée par défaut
  return true;
}

dialog.addEventListener("cancel", (event) => {
  if (!event.cancelable) return;
  if (dialogShouldNotClose()) {
    console.log("Fermeture empêchée");
    event.preventDefault();
  }
});
```

Si le bouton «&nbsp;X&nbsp;» avait été de `type="submit"`, la boîte de dialogue se serait fermée sans nécessiter de JavaScript.
La soumission d'un formulaire ferme la balise `<dialog>` dans laquelle il est imbriqué si {{HTMLElement("form", "la méthode du formulaire est <code>dialog</code>", "method")}}, donc aucun bouton «&nbsp;close&nbsp;» n'est requis.

#### Résultat

{{ EmbedLiveSample('exemples', '100%', '200px') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface&nbsp;:
  - {{HTMLElement("dialog")}}
