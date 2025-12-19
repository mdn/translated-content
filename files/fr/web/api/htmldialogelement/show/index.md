---
title: "HTMLDialogElement : méthode show()"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: e1a895da256b94f28be74b6f92ed18b5c2bec366
---

{{APIRef("HTML DOM")}}

La méthode **`show()`** de l'interface {{DOMxRef("HTMLDialogElement")}} affiche la boîte de dialogue de manière non modale, c'est-à-dire en permettant toujours l'interaction avec le contenu en dehors de la boîte de dialogue.

## Syntaxe

```js-nolint
show()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la boîte de dialogue est déjà ouverte et modale (c'est-à-dire si elle a déjà été ouverte avec {{DOMxRef("HTMLDialogElement.showModal()")}}).

## Exemples

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre un élément {{HTMLElement("dialog")}} contenant un formulaire via la méthode `show()`. Vous pouvez ensuite cliquer sur le bouton _Annuler_ pour fermer la boîte de dialogue (via la méthode {{DOMxRef("HTMLDialogElement.close()")}}), ou soumettre le formulaire avec le bouton de validation.

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
      <li>
        <button type="reset">Réinitialiser</button>
      </li>
      <li>
        <button type="submit">Valider</button>
      </li>
    </menu>
  </form>
</dialog>

<button id="updateDetails">Mettre à jour les informations</button>
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

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("dialog")}}
