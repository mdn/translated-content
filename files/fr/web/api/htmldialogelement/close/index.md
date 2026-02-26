---
title: "HTMLDialogElement : méthode close()"
short-title: close()
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La méthode **`close()`** de l'interface {{DOMxRef("HTMLDialogElement")}} ferme l'élément {{HTMLElement("dialog")}}.
Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété `returnValue` de la boîte de dialogue.

## Syntaxe

```js-nolint
close()
close(returnValue)
```

### Paramètres

- `returnValue` {{Optional_Inline}}
  - : Chaîne de caractères représentant la nouvelle valeur de {{DOMxRef("HTMLDialogElement.returnValue")}} de la boîte de dialogue.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre un élément {{HTMLElement("dialog")}} contenant un formulaire via la méthode `showModal()`.
Depuis cette boîte de dialogue, vous pouvez cliquer sur le bouton _X_ pour la fermer (via la méthode `HTMLDialogElement.close()`), ou soumettre le formulaire avec le bouton de validation.

```html
<!-- Boîte de dialogue simple contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
    <button type="button" id="close" aria-label="fermer">X</button>
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
const closeButton = document.getElementById("close");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Boîte de dialogue ouverte");
  } else {
    console.log("Boîte de dialogue fermée");
  }
}

// Le bouton de mise à jour ouvre la boîte de dialogue modale
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Le bouton de fermeture du formulaire ferme la boîte de dialogue
closeButton.addEventListener("click", () => {
  dialog.close("animalNonChoisi");
  openCheck(dialog);
});
```

Si le bouton «&nbsp;X&nbsp;» avait été de `type="submit"`, la boîte de dialogue se serait fermée sans nécessiter de JavaScript.
La soumission d'un formulaire ferme la balise `<dialog>` dans laquelle il est imbriqué si {{HTMLElement("form", "la méthode du formulaire est <code>method</code>", "method")}}, donc aucun bouton «&nbsp;close&nbsp;» n'est requis.

### Résultat

{{EmbedLiveSample('Examples', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("dialog")}}
