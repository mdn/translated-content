---
title: "HTMLElement : évènement change"
short-title: change
slug: Web/API/HTMLElement/change_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`change`** de l'interface {{DOMxRef("HTMLElement")}} est déclenché sur les éléments HTML {{HTMLElement("input")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}} lorsque la personne modifie la valeur de l'élément. À la différence de l'évènement {{DOMxRef("Element/input_event", "input")}}, l'évènement `change` n'est pas nécessairement déclenché à chaque modification unitaire de la valeur de l'élément.

Selon le type d'élément modifié et l'interaction avec l'élément, l'évènement `change` pourra se déclencher à un moment différent&nbsp;:

- Quand un élément `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}` est coché ou décoché (au clic ou au clavier)&nbsp;;
- Quand un élément `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}` est sélectionné (mais pas lorsqu'il est désélectionné)&nbsp;;
- Lorsque l'utilisateur·ice applique le changement explicitement (par exemple en sélectionnant une valeur dans une liste déroulante {{HTMLElement("select")}} à l'aide du clic de la souris, en sélectionnant une date dans un sélecteur `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}`, ou en sélectionnant un fichier dans le sélecteur de fichiers `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}`, etc.)&nbsp;;
- Lorsque l'élément perd le focus après que la valeur a été changée pour les éléments où il s'agit de saisir une valeur plutôt que d'en sélectionner une, comme {{HTMLElement("textarea")}} ou les champs de type `{{HTMLElement('input/text', 'text')}}`, `{{HTMLElement('input/search', 'search')}}`, `{{HTMLElement('input/url', 'url')}}`, `{{HTMLElement('input/tel', 'tel')}}`, `{{HTMLElement('input/email', 'email')}}`, ou `{{HTMLElement('input/password', 'password')}}` de l'élément HTML {{HTMLElement('input')}}.

La spécification HTML liste [les types d'éléments `<input>` qui devraient déclencher l'évènement `change`](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply).

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou alors on utilisera une propriété globale de gestion d'évènements telle que `onchange`.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Type d'évènement

Un évènement générique de type {{DOMxRef("Event")}}.

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

{{EmbedLiveSample('Avec un élément `<select>`', '100%', 75)}}

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

{{EmbedLiveSample('Avec un champ texte', '100%', 90)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

Les navigateurs ne sont pas toujours d'accord sur le moment où l'évènement `change` doit être déclenché pour certains types d'interaction. Par exemple, la navigation au clavier dans les éléments HTML {{HTMLElement("select")}} ne déclenchait autrefois jamais d'évènement `change` dans Gecko tant que l'utilisateur·ice n'appuyait pas sur Entrée ou ne déplaçait pas la sélection en dehors du `<select>` (voir le bug [Firefox 126379 <sup>(angl.)</sup>](https://bugzil.la/126379)). Depuis Firefox 63 (Quantum), ce comportement est cependant cohérent entre les principaux navigateurs.
