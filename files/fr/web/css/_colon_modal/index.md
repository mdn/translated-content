---
title: ":modal"
slug: Web/CSS/:modal
l10n:
  sourceCommit: 96f68b50c1eac0af56f185d82c17c9ccaf212b67
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:modal`** cible un élément qui est dans un état interdisant toute interaction avec les autres éléments situés en dehors jusqu'à ce que l'interaction soit terminée. Plusieurs éléments peuvent être ciblés par la pseudo-classe `:modal` à un même instant donné, mais un seul de ces éléments sera actif et permettra de recevoir une saisie.

## Syntaxe

```
:modal
```

## Notes d'utilisation

Voici des exemples d'éléments qui peuvent empêcher une interaction avec le reste de la page et qui pourront être ciblés par la pseudo-classe&nbsp;:

- L'élément [`<dialog>`](/fr/docs/Web/HTML/Element/dialog) lorsqu'il est ouvert avec la méthode du DOM `showModal()`.
- Un élément ciblé par la pseudo-classe [`:fullscreen`](/fr/docs/Web/CSS/:fullscreen) lorsqu'il est ouvert avec la méthode du DOM `requestFullscreen()`.

## Exemples

### Mettre en forme une boîte de dialogue

Dans cet exemple, on met en forme une boîte de dialogue modale qui s'ouvre lorsqu'on active le bouton «&nbsp;Mettre à jour les détails&nbsp;». Cet exemple est construit à partir de [l'exemple présent sur la page de l'élément `<dialog>`](/fr/docs/Web/HTML/Element/dialog#exemple_avancé).

```html hidden
<!-- Boîte de dialogue contextuelle simple contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label
        >Animal préféré :
        <select>
          <option></option>
          <option>Crevette en saumure</option>
          <option>Panda rouge</option>
          <option>Singe-araignée</option>
        </select>
      </label>
    </p>
    <menu>
      <button value="cancel">Annuler</button>
      <button id="confirmBtn" value="default">Confirmer</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Mettre à jour les détails</button>
</menu>

<output></output>
```

#### CSS

```css
:modal {
  border: 5px solid red;
  background-color: yellow;
  box-shadow: 3px 3px 10px rgba(0 0 0 / 0.5);
}
```

```js hidden
const updateButton = document.getElementById("updateDetails");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// Si un navigaeur ne prend pas en charge, on masque le contenu
// de la boîte de dialogue par défaut.
if (typeof favDialog.showModal !== "function") {
  favDialog.hidden = true;
  /* un script alternatif pour les navigateurs historiques.
   */
}
// Le bouton "Mettre à jour les détails" ouvre <dialog> en modal
updateButton.addEventListener("click", () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value =
      "Désolé, l'API <dialog> n'est pas prise en charge par ce navigateur.";
  }
});
// Le champ "Animal préféré" définit la valeur du bouton d'envoi
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});
// Le bouton "Confirmer" du formulaire déclenche la fermeture de la boîte avec [method="dialog"]
favDialog.addEventListener("close", () => {
  outputBox.value = `Bouton ${
    favDialog.returnValue
  } cliqué - ${new Date().toString()}`;
});
```

### Résultat

{{EmbedLiveSample("", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML [`<dialog>`](/fr/docs/Web/HTML/Element/dialog)
- Les autres pseudo-classes relatives à l'état d'affichage&nbsp;:
  - [`:fullscreen`](/fr/docs/Web/CSS/:fullscreen)
  - [`:picture-in-picture`](/fr/docs/Web/CSS/:picture-in-picture)
- La liste complète des [pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes)
