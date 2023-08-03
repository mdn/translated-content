---
title: change
slug: Web/API/HTMLElement/change_event
---

{{APIRef}}

L'événement **change** est déclenché pour les éléments {{HTMLElement("input")}} _(entrée)_, {{HTMLElement("select")}} _(sélection)_ et {{HTMLElement("textarea")}} _(zone de texte)_ lorsqu'un changement de leur valeur est réalisé par l'utilisateur. Contrairement à l'événement [`input`](/fr/docs/Web/API/HTMLElement/input_event), **change** n'est pas nécessairement déclenché pour chaque changement de valeur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Propagation</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Gestionnaire d'événements</th>
      <td>
        {{domxref("GlobalEventHandlers/onchange", "onchange")}}
      </td>
    </tr>
  </tbody>
</table>

En fonction du type d'élément de formulaire modifié et de la manière dont l'utilisateur interagit avec cet élément, l'événement **change** se déclenche à un moment différent :

- Quand l'élément est activé (en cliquant ou en utilisant le clavier) pour `<input type="radio">` et `<input type="checkbox">`_(case à cocher_).
- Quand l'utilisateur réalise le changement de manière explicite (par exemple, en sélectionnant une valeur venant d'un {{HTMLElement("select")}} d'un menu déroulant avec le clic d'une souris, en sélectionnant une date d'un "date picker" _(sélecteur de date)_ pour `<input type="date">`, en sélectionnant un fichier d'un "file picker" _(sélecteur de fichier)_ pour `<input type="file">`, etc.).
- Quand l'élément perd le focus après que sa valeur a été changée, mais pas validée (par exemple, après l'édition d'une valeur de {{HTMLElement("textarea")}} ou `<input type="text">`).

Les différents navigateurs ne sont pas toujours d'accord sur le fait que l'événement **change** doit être déclenché pour certains types d'interactions. Par exemple, la navigation avec le clavier dans les éléments {{HTMLElement("select")}} ne déclenche jamais l'événement dans Gecko jusqu'à ce que l'utilisateur appuie sur la touche Entrée ou déplace le focus en dehors du \<select> (voir [bug Firefox 126379](https://bugzil.la/126379)).

[La spécification HTML répertorie les types `<input>` qui doivent déclencher l'événement `change`.](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)

## Exemples

### L'élément \<select>

Le code suivant gère l'évènement **change** sur [`<select>`](/fr/docs/Web/HTML/Element/select) en appelant la fonction `changeEventHandler()` dans l'attribut `onchange`. Il lit la valeur de la cible de l'évènement et la montre dans une alerte.

#### HTML

```html
<label
  >Choose an ice cream flavor:
  <select class="ice-cream" name="ice-cream">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option>
    <option value="sardine">Sardine</option>
    <option value="vanilla">Vanilla</option>
  </select>
</label>

<div class="result"></div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}
```

#### Javascript

```js
const selectElement = document.querySelector(".ice-cream");

selectElement.addEventListener("change", (event) => {
  const result = document.querySelector(".result");
  result.textContent = `You like ${event.target.value}`;
});
```

#### Résultat

{{ EmbedLiveSample('Lélément_select', '100%', '75px') }}

### L'élément d'entrée de texte

Pour certains éléments, notamment `<input type="text">`, l'événement de changement ne se déclenche pas tant que le contrôle ne perd pas le focus. Essayez de saisir quelque chose dans le champ ci-dessous, puis cliquez ailleurs pour déclencher l'événement.

#### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### Résultat

{{ EmbedLiveSample('Lélément_dentrée_de_texte', '100%', '75px') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Cet événement est aussi déclenché dans plusieurs API non-standard:

- {{domxref("NetworkInformation.connection")}} déclenche l'événement **change** lorsque les informations de connexions changent.
- {{domxref("DeviceStorageChangeEvent")}} est déclenché à chaque fois qu'un fichier est créé, modifié, ou supprimé du système de stockage du périphérique.
