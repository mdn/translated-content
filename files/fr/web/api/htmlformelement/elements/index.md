---
title: "HTMLFormElement : propriété elements"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La propriété **`elements`** de l'interface {{DOMxRef("HTMLFormElement")}} retourne un objet {{DOMxRef("HTMLFormControlsCollection")}} listant tous les contrôles de formulaire associés à l'élément HTML {{HTMLElement("form")}}.

Vous pouvez accéder à un contrôle particulier dans la collection retournée en utilisant soit un index, soit les attributs `name` ou `id` de l'élément.

Avant HTML5, l'objet retourné était un {{DOMxRef("HTMLCollection")}}, sur lequel s'appuie `HTMLFormControlsCollection`.

De manière indépendante, vous pouvez obtenir uniquement le nombre de contrôles associés en utilisant la propriété {{DOMxRef("HTMLFormElement.length", "length")}}. Vous pouvez obtenir la liste de tous les formulaires contenus dans un document donné en utilisant la propriété {{DOMxRef("Document.forms", "forms")}} du document.

## Valeur

Un {{DOMxRef("HTMLFormControlsCollection")}} contenant tous les contrôles non-image associés au formulaire&nbsp;; si des contrôles sont associés ou dissociés du formulaire, cette collection se mettra à jour pour refléter le changement.

Les contrôles du formulaire dans la collection retournée sont dans le même ordre dans lequel ils apparaissent dans le document en suivant un parcours pré-ordonné, un parcours en profondeur de l'arbre. Cela s'appelle **l'ordre de l'arbre**.

Seuls les contrôles suivants sont retournés&nbsp;:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (à l'exception de ceux dont le [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) est `"image"`, qui sont omis pour des raisons historiques)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [éléments personnalisés associés aux formulaires <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Exemples

### Utilisation basique de la syntaxe

Dans cet exemple, on voit comment obtenir la liste des contrôles du formulaire ainsi que la manière d'accéder à ses membres par indice et par nom ou identifiant.

```html
<form id="my-form">
  <label>
    Nom d'utilisateur&nbsp;:
    <input type="text" name="username" />
  </label>
  <label>
    Nom complet&nbsp;:
    <input type="text" name="full-name" />
  </label>
  <label>
    Mot de passe&nbsp;:
    <input type="password" name="password" />
  </label>
</form>
```

```js
const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
```

### Contrôles de formulaire associés

Cet exemple montre comment l'objet {{DOMxRef("HTMLFormControlsCollection")}} contient les contrôles de formulaire associés au formulaire, plutôt que les contrôles imbriqués physiquement dans le `<form>`.

Le premier formulaire est complet, avec quatre contrôles de formulaire&nbsp;: un {{HTMLElement("fieldset")}} et trois {{HTMLElement("input")}}. Les éléments {{HTMLElement("legend")}} et {{HTMLElement("label")}} ne sont pas des contrôles listés. Le second formulaire est clairsemé, avec un seul contrôle imbriqué&nbsp;: un seul élément {{HTMLElement("object")}}. Tous les contrôles du formulaire complet sont associés au formulaire clairsemé via leur attribut `form`.

```html
<form id="fullForm">
  Ce formulaire semble complet, mais il n'a aucun contrôle de formulaire associé
  <fieldset form="sparseForm">
    <legend>Ceci est une légende</legend>
    <label>Un contrôle de formulaire&nbsp;: <input form="sparseForm" /></label>
    <label
      >Un autre contrôle de formulaire&nbsp;: <input form="sparseForm"
    /></label>
    <label
      >Encore un contrôle de formulaire&nbsp;: <input form="sparseForm"
    /></label>
  </fieldset>
</form>

<form id="sparseForm">
  <object data="lone-form-control.jpg">Contrôle de formulaire isolé</object>
</form>
```

On utilise la propriété `elements` pour obtenir le `HTMLFormControlsCollection` de chaque formulaire.

```js
const sparse = document.getElementById("sparseForm").elements;
const full = document.getElementById("fullForm").elements;
```

La collection inclut les contrôles de formulaire associés à l'élément de formulaire, c'est‑à‑dire tous les {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} et éléments personnalisés associés aux formulaires, même si ces éléments sont imbriqués dans un autre formulaire ou non imbriqués dans un formulaire.

```js
console.log(`formulaire clairsemé : ${sparse.length}`); // formulaire clairsemé : 5
console.log(`formulaire complet : ${full.length}`); // formulaire complet : 0
```

Les contrôles de la collection sont dans le même ordre que lorsqu'ils apparaissent dans le document.

```js
console.log(`premier membre : ${sparse[0].tagName}`); // premier membre : FIELDSET
console.log(`dernier membre : ${sparse[sparse.length - 1].tagName}`); // dernier membre : OBJECT
```

### Accéder aux contrôles du formulaire

Cet exemple obtient la liste des éléments du formulaire, puis parcourt la liste à la recherche d'éléments {{HTMLElement("input")}} de type [`"text"`](/fr/docs/Web/HTML/Reference/Elements/input/text) afin d'effectuer un certain traitement sur eux.

```js
const inputs = document.getElementById("my-form").elements;

// Parcourt les contrôles du formulaire
for (const input of inputs) {
  if (input.nodeName === "INPUT" && input.type === "text") {
    // Met à jour la valeur du champ texte
    input.value = input.value.toLocaleUpperCase();
  }
}
```

### Désactiver des contrôles de formulaire

```js
const inputs = document.getElementById("my-form").elements;

// Parcourt les contrôles du formulaire
for (const input of inputs) {
  // Désactive tous les contrôles du formulaire
  input.setAttribute("disabled", "");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
