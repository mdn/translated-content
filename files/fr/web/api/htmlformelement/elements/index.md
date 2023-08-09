---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
---

{{APIRef("HTML DOM")}}

La propriété **`elements`**, rattachée à l'interface [`HTMLFormElement`](/fr/docs/Web/API/HTMLFormElement), renvoie un objet [`HTMLFormControlsCollection`](/fr/docs/Web/API/HTMLFormControlsCollection) qui liste l'ensemble des contrôles de formulaire contenu dans l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form).

Si besoin d'obtenir uniquement le nombre de contrôles du formulaire, on pourra utiliser la propriété [`length`](/fr/docs/Web/API/HTMLFormElement/length).

On peut accéder à un contrôle particulier du formulaire via la collection renvoyée en utilisant l'indice ou l'attribut `name` ou `id` de l'élément.

Avant HTML 5, l'objet renvoyé était un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection), sur lequel `HTMLFormControlsCollection` est désormais basé.

> **Note :** De la même façon, on peut obtenir la liste de tous les formulaires contenus dans un document donné en utilisant la propriété [`forms`](/fr/docs/Web/API/Document/forms).

## Valeur

Un objet [`HTMLFormControlsCollection`](/fr/docs/Web/API/HTMLFormControlsCollection) contenant tous les contrôles du formulaire qui ne sont pas des images. Il s'agit d'une collection dynamique, si des contrôles sont ajoutés ou retirés du formulaire, cette collection sera mise à jour afin de refléter cette modification.

Les contrôles de formulaires de la collection renvoyée sont dans le même ordre que celui selon lequel ils apparaissent dans le formulaire selon un parcours préfixe en profondeur de l'arbre, appelé **ordre de l'arbre**.

Seuls les éléments suivants sont renvoyés&nbsp;:

- [`<button>`](/fr/docs/Web/HTML/Element/Button)
- [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset)
- [`<input>`](/fr/docs/Web/HTML/Element/input) (exception faite des éléments dont l'attribut [`type`](/fr/docs/Web/HTML/Element/input#type) vaut `"image"`, pour des raisons historiques)
- [`<object>`](/fr/docs/Web/HTML/Element/object)
- [`<output>`](/fr/docs/Web/HTML/Element/output)
- [`<select>`](/fr/docs/Web/HTML/Element/select)
- [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea)

## Exemples

### Utilisation basique de la syntaxe

Dans cet exemple, on voit comment obtenir la liste des contrôles d'un formulaire et comment accéder à ses éléments avec un indice, un nom ou un identifiant.

```html
<form id="mon-formulaire">
  <input type="text" name="username" />
  <input type="text" name="full-name" />
  <input type="password" name="password" />
</form>
```

```js
const inputs = document.getElementById("mon-formulaire").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
```

### Accéder aux contrôles du formulaire

Dans cet exemple, on récupère la liste des éléments du formulaire, qu'on parcourt à la recherche d'éléments [`<input>`](/fr/docs/Web/HTML/Element/input) de type [`"text"`](/fr/docs/Web/HTML/Element/Input/text) afin de pouvoir modifier leur valeur.

```js
const inputs = document.getElementById("mon-formulaire").elements;

// On parcourt les contrôles du formulaire
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // On met à jour le champ texte
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### Désactiver des contrôles de formulaire

```js
const inputs = document.getElementById("mon-formulaire").elements;

// On parcourt les contrôles du formulaire
for (let i = 0; i < inputs.length; i++) {
  // On les désactive tous
  inputs[i].setAttribute("disabled", "");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
