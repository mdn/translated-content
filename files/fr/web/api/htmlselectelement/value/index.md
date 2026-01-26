---
title: "HTMLSelectElement : propriété value"
short-title: value
slug: Web/API/HTMLSelectElement/value
l10n:
  sourceCommit: 7f38ec3d1324a031bc25e70b3c103ca78c2cf04d
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLSelectElement")}} contient la valeur du premier élément HTML {{HTMLElement("option")}} sélectionné associé à cet élément HTML {{HTMLElement("select")}}.

Cette propriété peut également être définie directement, par exemple pour définir une valeur par défaut selon une condition.

## Valeur

Une chaîne de caractères contenant la valeur du premier élément {{HTMLElement("option")}} sélectionné dans cet élément {{HTMLElement("select")}}, ou une chaîne vide si aucune option n'est sélectionnée.

## Exemples

### Récupérer la valeur sélectionnée

```html
<label for="bird-select">Choisissez un oiseau&nbsp;:</label>

<select name="birds" id="bird-select">
  <option value="">--Veuillez choisir une option--</option>
  <option value="Scarlet ibis">Ibis écarlate</option>
  <option value="Marabou stork">Marabout d'Afrique</option>
  <option value="Roseate spoonbill">Spatule rosée</option>
</select>

<pre id="log"></pre>
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const select = document.querySelector("#bird-select");
select.addEventListener("change", () => {
  log(`Sélection : ${select.value}`);
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

{{EmbedLiveSample("Retrieving the selected value")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}, qui implémente cette interface.
