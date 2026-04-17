---
title: "HTMLInputElement : propriété value"
short-title: value
slug: Web/API/HTMLInputElement/value
l10n:
  sourceCommit: 25ef0a8da5e55b74e7500b23ed8864bcfaf6db03
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLInputElement")}} représente la valeur actuelle de l'élément HTML {{HTMLElement("input")}} sous forme de chaîne de caractères.

Cette propriété peut également être définie directement, par exemple pour définir une valeur par défaut en fonction d'une condition.

## Valeur

Une chaîne de caractères définissant la valeur par défaut de l'élément HTML {{HTMLElement("input")}}.

## Exemples

### Récupérer la valeur d'un champ de texte

Dans cet exemple, le journal affiche la valeur actuelle au fur et à mesure que vous saisissez des données dans le champ.

#### HTML

Nous incluons un {{HTMLElement("input")}} et un {{HTMLElement("label")}} associé, avec un conteneur {{HTMLElement("pre")}} pour notre sortie.

```html
<label for="given-name">Votre nom&nbsp;:</label>

<input name="given-name" id="given-name" />

<pre id="log"></pre>
```

#### JavaScript

La propriété {{DOMxRef("HTMLElement.innerText", "innerText")}} de l'élément `<pre>` est mise à jour avec la valeur actuelle du `<input>` à chaque fois qu'un évènement {{DOMxRef("Element/keyup_event", "keyup")}} est déclenché.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("given-name");

inputElement.addEventListener("keyup", () => {
  logElement.innerText = `Nom : ${inputElement.value}`;
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

{{EmbedLiveSample("Récupérer la valeur d'un champ de texte", "", 100)}}

### Récupérer une valeur de couleur

Cet exemple montre l'utilisation de la propriété `value` avec un `<input>` de type `{{HTMLElement("input/color", "color")}}`.

#### HTML

Nous incluons un `<input>` de type `color`&nbsp;:

```html
<label for="color">Choisissez une couleur&nbsp;:</label>

<input name="color" id="color" type="color" />

<pre id="log"></pre>
```

#### JavaScript

La propriété {{DOMxRef("HTMLElement.innerText", "innerText")}} de l'élément `<pre>` est initialisée avec la valeur de couleur par défaut (`#000000`) puis mise à jour à chaque fois qu'un évènement {{DOMxRef("HTMLElement/change_event", "change")}} se produit.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("color");

logElement.innerText = `Couleur : ${inputElement.value}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `Couleur : ${inputElement.value}`;
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

{{EmbedLiveSample("Récupérer une valeur de couleur", "", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.valueAsDate")}}
- La propriété {{DOMxRef("HTMLInputElement.valueAsNumber")}}
