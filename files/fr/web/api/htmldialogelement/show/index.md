---
title: "HTMLDialogElement : méthode show()"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

La méthode **`show()`** de l'interface {{domxref("HTMLDialogElement")}} affiche la boîte de dialogue de manière non modale, c'est-à-dire en permettant toujours l'interaction avec le contenu en dehors de la boîte de dialogue.

## Syntaxe

```js-nolint
show()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Levée si la boîte de dialogue est déjà ouverte et modale (c'est-à-dire si elle a déjà été ouverte avec {{domxref("HTMLDialogElement.showModal()")}}).

## Exemples

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre un élément {{htmlelement("dialog")}} contenant un formulaire via la méthode `show()`. Vous pouvez ensuite cliquer sur le bouton _Annuler_ pour fermer la boîte de dialogue (via la méthode {{domxref("HTMLDialogElement.close()")}}), ou soumettre le formulaire avec le bouton de validation.

```html
<!-- Boîte de dialogue simple contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
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
      <button id="cancel" type="reset">Annuler</button>
      <button type="submit">Valider</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Mettre à jour les informations</button>
</menu>
```

```js
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Boîte de dialogue ouverte");
  } else {
    console.log("Boîte de dialogue fermée");
  }
}

// Le bouton met à jour et ouvre la boîte de dialogue non modale
updateButton.addEventListener("click", () => {
  dialog.show();
  openCheck(dialog);
});

// Le bouton d'annulation du formulaire ferme la boîte de dialogue
cancelButton.addEventListener("click", () => {
  dialog.close("animalNonChoisi");
  openCheck(dialog);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface&nbsp;:
  - {{HTMLElement("dialog")}}
