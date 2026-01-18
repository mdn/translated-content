---
title: "HTMLSelectElement : propriété selectedOptions"
short-title: selectedOptions
slug: Web/API/HTMLSelectElement/selectedOptions
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

La propriété **en lecture seule** {{DOMxRef("HTMLSelectElement")}} **`selectedOptions`** contient une liste des éléments HTML {{HTMLElement("option")}} contenus dans l'élément HTML {{HTMLElement("select")}} qui sont actuellement sélectionnés. La liste des options sélectionnées est un objet {{DOMxRef("HTMLCollection")}} avec une entrée pour chaque option actuellement sélectionnée.

Une option est considérée comme sélectionnée si elle possède l'attribut {{DOMxRef("HTMLOptionElement.selected")}}.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}} qui liste chaque {{DOMxRef("HTMLOptionElement")}} actuellement sélectionné, qu'il soit enfant de {{DOMxRef("HTMLSelectElement")}} ou d'un {{DOMxRef("HTMLOptGroupElement")}} à l'intérieur de l'élément `<select>`.

En d'autres termes, toute option contenue dans l'élément `<select>` peut faire partie des résultats, mais les groupes d'options ne sont pas inclus dans la liste.

Si aucune option n'est actuellement sélectionnée, la collection est vide et retourne une {{DOMxRef("HTMLCollection.length", "length")}} de 0.

## Exemples

Dans cet exemple, un élément {{HTMLElement("select")}} avec plusieurs options permet à l'utilisateur·ice de commander différents aliments.

### HTML

Le code HTML qui crée la boîte de sélection et les éléments {{HTMLElement("option")}} représentant chaque choix alimentaire ressemble à ceci&nbsp;:

```html
<label for="foods">Que voulez-vous manger&nbsp;?</label><br />
<select id="foods" name="foods" size="7" multiple>
  <option value="1">Burrito</option>
  <option value="2">Cheeseburger</option>
  <option value="3">Double bacon burger suprême</option>
  <option value="4">Pizza au pepperoni</option>
  <option value="5">Taco</option>
</select>
<br />
<button name="order" id="order">Commander</button>
<p id="output"></p>
```

L'élément `<select>` permet de sélectionner plusieurs éléments et a une hauteur de 7 lignes. Notez aussi le {{HTMLElement("button")}}, dont le rôle est de déclencher la récupération de la collection {{DOMxRef("HTMLCollection")}} des éléments sélectionnés via la propriété `selected`.

### JavaScript

Le code JavaScript qui établit le gestionnaire d'évènement pour le bouton, ainsi que le gestionnaire lui-même, ressemble à ceci&nbsp;:

```js
let orderButton = document.getElementById("order");
let itemList = document.getElementById("foods");
let outputBox = document.getElementById("output");

orderButton.addEventListener("click", () => {
  let collection = itemList.selectedOptions;
  let output = "";

  for (let i = 0; i < collection.length; i++) {
    if (output === "") {
      output = "Votre commande pour les éléments suivants a été passée : ";
    }
    output += collection[i].label;

    if (i === collection.length - 2 && collection.length < 3) {
      output += " et ";
    } else if (i < collection.length - 2) {
      output += ", ";
    } else if (i === collection.length - 2) {
      output += ", et ";
    }
  }

  if (output === "") {
    output = "Vous n'avez rien commandé !";
  }

  outputBox.textContent = output;
});
```

Ce script ajoute un écouteur d'évènement {{DOMxRef("Element/click_event", "click")}} sur le bouton «&nbsp;Commander&nbsp;». Lors d'un clic, le gestionnaire récupère la liste des options sélectionnées via `selectedOptions`, puis parcourt les options de la liste. Une chaîne de caractères est construite pour lister les éléments commandés, avec une logique pour formater la liste selon la grammaire française.

### Résultat

Le résultat ressemble à ceci en action&nbsp;:

{{EmbedLiveSample("Exemples", 600, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Contrôles déroulants](/fr/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls)
