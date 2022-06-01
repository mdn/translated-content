---
title: '<dialog> : l''élément de boîte de dialogue'
slug: Web/HTML/Element/dialog
tags:
  - Dialog
  - Element
  - HTML
  - HTML interactive elements
  - Reference
  - Web
  - polyfill
translation_of: Web/HTML/Element/dialog
browser-compat: html.elements.dialog
---
{{HTMLRef}}

L'élément HTML **`<dialog>`** représente une boite de dialogue ou un composant interactif (par exemple un inspecteur ou une fenêtre).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots"
          >racine de sectionnement</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/dialog_role"
          ><code>dialog</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#alertdialog"
          ><code>alertdialog</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLDialogElement"
          ><code>HTMLDialogElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

> **Attention :** L'attribut `tabindex` ne doit pas être utilisé sur l'élément `<dialog>`.

- `open`
  - : Cet attribut indique que la boîte de dialogue est active et peut être utilisée de façon interactive. Si l'attribut n'est pas renseigné, la boîte de dialogue ne doit pas être présentée à l'utilisateur.

## Notes d'utilisation

- Les éléments [`<form>`](/fr/docs/Web/HTML/Element/Form) peuvent fermer un dialogue s'ils possèdent l'attribut `method="dialog"`. Lorsqu'un tel formulaire est soumis, le dialogue se ferme avec sa propriété [`returnValue`](/fr/docs/Web/API/HTMLDialogElement/returnValue) définie sur la `value` (valeur) du bouton qui a été utilisé pour soumettre le formulaire.
- Le pseudo-élément CSS [`::backdrop`](/fr/docs/Web/CSS/::backdrop) peut être utilisé pour créer un style derrière un élément `<dialog>` lorsque le dialogue est affiché avec [`HTMLDialogElement.showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal). Par exemple, pour atténuer le contenu inaccessible derrière la boîte de dialogue modale.

## Exemples

### Exemple simple

```html
<dialog open>
  <p>Salutations, à tous et à toutes !</p>
</dialog>
```

### Exemple avancé

#### HTML

```html
<!-- Boîte de dialogue contextuelle simple contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
    <p><label>Animal préféré :
      <select>
        <option></option>
        <option>Crevette en saumure</option>
        <option>Panda rouge</option>
        <option>Singe-araignée</option>
      </select>
    </label></p>
    <menu>
      <button value="cancel">Annuler</button>
      <button id="confirmBtn" value="default">Confirmer</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Mettre à jour les détails</button>
</menu>

<output aria-live="polite"></output>
```

#### JavaScript

```js
let updateButton = document.getElementById('updateDetails');
let favDialog = document.getElementById('favDialog');
let outputBox = document.querySelector('output');
let selectEl = document.querySelector('select');
let confirmBtn = document.getElementById('confirmBtn');

// Le bouton "Mettre à jour les détails" ouvre le <dialogue> ; modulaire
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    console.error("L'API <dialog> n'est pas prise en charge par ce navigateur.");
  }
});
// L'entrée "Animal favori" définit la valeur du bouton d'envoi.
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// Le bouton "Confirmer" du formulaire déclenche la fermeture
// de la boîte de dialogue en raison de [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " bouton cliqué - " + (new Date()).toString();
});
```

#### Résultat

{{EmbedLiveSample("Exemple_avancé", "", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Prothèse d'émulation (polyfill)

Incluez ce polyfill pour fournir un support aux navigateurs sans élément `<dialog>` : [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill).

## Voir aussi

- L'évènement [close](/fr/docs/Web/Reference/HTMLDialogElement/close_event)
- L'évènement [cancel](/fr/docs/Web/Reference/HTMLDialogElement/cancel_event)
- [Guide sur les formulaires HTML](/fr/docs/Learn/Forms)
- Le pseudo-élément [`::backdrop`](/fr/docs/Web/CSS/::backdrop)
