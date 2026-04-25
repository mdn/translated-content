---
title: "HTMLInputElement : propriété valueAsNumber"
short-title: valueAsNumber
slug: Web/API/HTMLInputElement/valueAsNumber
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{APIRef("HTML DOM")}}

La propriété **`valueAsNumber`** de l'interface {{DOMxRef("HTMLInputElement")}} représente la valeur actuelle de l'élément HTML {{HTMLElement("input")}} sous forme de nombre ou `NaN` si la conversion en valeur numérique est impossible.

Cette propriété peut également être définie directement, par exemple pour définir une valeur numérique par défaut en fonction d'une condition.

## Valeur

Un nombre qui représente la valeur de l'élément ou `NaN` si la conversion en valeur numérique est impossible.

## Exemples

### Récupérer une valeur numérique

Dans cet exemple, le journal affiche la valeur actuelle de l'entrée `{{HTMLElement("input/number", "number")}}` lorsqu'elle est modifiée.

#### HTML

Nous incluons un {{HTMLElement("input")}} de type `number` et un {{HTMLElement("label")}} associé, avec un conteneur {{HTMLElement("pre")}} pour notre sortie.

```html
<label for="number">Choisissez un nombre entre 1 et 10&nbsp;:</label>

<input name="number" id="number" min="1" max="10" type="number" />

<pre id="log"></pre>
```

#### JavaScript

Le contenu de l'élément `<pre>` est mis à jour avec la valeur actuelle de l'élément `<input>` à chaque fois qu'un évènement {{DOMxRef("HTMLElement/change_event", "change")}} est déclenché.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("number");

inputElement.addEventListener("change", () => {
  logElement.innerText = `Nombre : ${inputElement.valueAsNumber}`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Résultats

{{EmbedLiveSample("Récupérer une valeur numérique", "", 100)}}

Si vous supprimez le nombre dans le composant, le résultat est `NaN`.

### Récupérer une valeur de date en tant que nombre

Cet exemple montre la propriété `valueAsNumber` d'un `<input>` de type `{{HTMLElement("input/datetime-local", "datetime-local")}}`.

#### HTML

Nous incluons un `<input>` de type `datetime-local`&nbsp;:

```html
<label for="date">Choisissez une date et une heure&nbsp;:</label>

<input name="date" id="date" type="datetime-local" />

<pre id="log"></pre>
```

#### JavaScript

Lorsqu'aucune date ni heure n'est sélectionnée, la chaîne de caractères vide est convertie en `NaN`. À chaque sélection, un évènement {{DOMxRef("HTMLElement/change_event", "change")}} est déclenché, mettant à jour le contenu du `<pre>` qui affiche la {{DOMxRef("HTMLInputElement.value")}} du contrôle de formulaire comparée à cette valeur en tant que nombre.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `Valeur initiale : ${inputElement.valueAsNumber}`;

inputElement.addEventListener("change", () => {
  const d = new Date(inputElement.valueAsNumber);
  logElement.innerText = `${inputElement.value} se résout en ${inputElement.valueAsNumber}, \nce qui correspond à ${d.toDateString()} à ${d.toTimeString()}`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Résultats

{{EmbedLiveSample("Récupérer une valeur de date en tant que nombre", "", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.valueAsDate")}}
