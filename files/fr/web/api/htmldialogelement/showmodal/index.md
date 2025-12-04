---
title: "HTMLDialogElement : méthode showModal()"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

La méthode **`showModal()`** de l'interface {{DOMxRef("HTMLDialogElement")}} affiche la boîte de dialogue en mode modal, au-dessus de toute autre boîte de dialogue présente. Elle s'affiche dans la {{Glossary("top layer", "couche supérieure")}}, accompagnée d'un pseudo-élément {{CSSxRef('::backdrop')}}. Les éléments du même document que la boîte de dialogue, à l'exception de celle-ci et de ses descendants, deviennent _inertes_ (comme si l'attribut [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert) était spécifié). Seul le document contenant est bloqué&nbsp;: si la boîte de dialogue est affichée dans une iframe, le reste de la page reste interactif.

## Syntaxe

```js-nolint
showModal()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la boîte de dialogue est déjà ouverte et non modale (c'est-à-dire si elle a déjà été ouverte avec {{DOMxRef("HTMLDialogElement.show()")}}).

## Exemples

### Ouvrir une boîte de dialogue modale

L'exemple suivant montre un bouton qui, lorsqu'il est cliqué, ouvre une boîte de dialogue modale {{HTMLElement("dialog")}} contenant un formulaire via la fonction `HTMLDialogElement.showModal()`. Lorsque la boîte de dialogue est ouverte, tout le reste du contenu du document devient inerte. Vous pouvez alors cliquer sur le bouton _Annuler_ pour fermer la boîte de dialogue (via la fonction {{DOMxRef("HTMLDialogElement.close()")}}), ou soumettre le formulaire avec le bouton de validation. Sélectionner le bouton d'annulation ferme la boîte de dialogue et déclenche un événement {{DOMxRef("HTMLDialogElement/close_event", "close")}}, mais pas un événement {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}}.

#### HTML

```html
<!-- boîte de dialogue contextuelle contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Animal préféré&nbsp;:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Crevette de saumure</option>
        <option>Panda roux</option>
        <option>Singes-araignées</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Annuler</button>
      <button type="submit">Valider</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Mettre à jour les informations</button>
</div>
```

#### JavaScript

```js
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Le bouton met à jour ouvre la boîte de dialogue modale
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Le bouton annuler du formulaire ferme la boîte de dialogue
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

#### Résultat

{{EmbedLiveSample("Ouvrir une boîte de dialogue modale")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("dialog")}}
