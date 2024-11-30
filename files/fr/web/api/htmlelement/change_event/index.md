---
title: "HTMLElement : évènement change"
slug: Web/API/HTMLElement/change_event
l10n:
  sourceCommit: 8d83c05362120cbba32c165a6b1f76e73ccc9674
---

{{APIRef}}

L'évènement **`change`** est déclenché sur les éléments [`<input>`](/fr/docs/Web/HTML/Element/input), [`<select>`](/fr/docs/Web/HTML/Element/select) et [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) lorsque la personne modifie la valeur de l'élément. À la différence de [l'évènement `input`](/fr/docs/Web/API/Element/input_event), l'évènement `change` n'est pas nécessairement déclenché à chaque modification unitaire de la valeur de l'élément.

Selon le type d'élément modifié et l'interaction avec l'élément, l'évènement `change` pourra se déclencher à un moment différent&nbsp;:

- Quand un élément [`<input type="checkbox">`](/fr/docs/Web/HTML/Element/input/checkbox) est coché ou décoché (au clic ou au clavier)&nbsp;;
- Quand un élément [`<input type="radio">`](/fr/docs/Web/HTML/Element/input/radio) est sélectionné (mais pas lorsqu'il est désélectionné)&nbsp;;
- Lorsque l'utilisatrice ou l'utilisateur applique le changement explicitement (par exemple en sélectionnant une valeur dans une liste déroulante [`<select>`](/fr/docs/Web/HTML/Element/select) à l'aide du clic de la souris, en sélectionnant une date dans un sélecteur [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date), ou en sélectionnant un fichier dans le sélecteur de fichiers [`<input type="file">`](/fr/docs/Web/HTML/Element/input/file), etc.)&nbsp;;
- Lorsque l'élément perd le focus après que la valeur a été changée pour les éléments où il s'agit de saisir une valeur plutôt que d'en sélectionner une, comme [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) ou les champs tels que [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text), [`<input type="search">`](/fr/docs/Web/HTML/Element/input/search), [`<input type="url">`](/fr/docs/Web/HTML/Element/input/url), [`<input type="tel">`](/fr/docs/Web/HTML/Element/input/tel), [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email), ou [`<input type="password">`](/fr/docs/Web/HTML/Element/input/password).

La spécification HTML liste [les types d'éléments `<input>` qui devraient déclencher l'évènement `change`](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply).

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou alors on utilisera une propriété globale de gestion d'évènements telle que `onchange`.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Type d'évènement

Un évènement générique de type [`Event`](/fr/docs/Web/API/Event).

## Exemples

### Avec un élément `<select>`

#### HTML

```html
<label>
  Choisissez un parfum de glace :
  <select class="ice-cream" name="ice-cream">
    <option value="">Choisir parmi…</option>
    <option value="chocolat">chocolat</option>
    <option value="sardine">sardine</option>
    <option value="vanille">vanille</option>
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

#### JavaScript

```js
const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  result.textContent = `Vous avez choisi ${event.target.value}`;
});
```

#### Résultat

{{EmbedLiveSample('Avec_un_élément_select', '100%', '75px')}}

### Avec un champ texte

Pour certains éléments, dont `<input type="text">`, l'évènement `change` ne se déclenche pas tant que le contrôle n'a pas perdu le focus. Essayez de saisir quelque chose dans le champ ci-après, puis cliquez autre part afin de déclencher l'évènement.

#### HTML

```html
<input placeholder="Veuillez saisir un texte" name="name" />
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

{{EmbedLiveSample('Avec_un_champ_texte', '100%', '90px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
