---
title: "HTMLFormElement : événement formdata"
short-title: formdata
slug: Web/API/HTMLFormElement/formdata_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`formdata`** de l'interface {{DOMxRef("HTMLFormElement")}} se déclenche après que la liste des entrées représentant les données du formulaire a été construite. Cela se produit lors de la soumission du formulaire, mais peut aussi être déclenché par l'appel du constructeur {{DOMxRef("FormData.FormData", "FormData()")}}.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou affectez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("formdata", (event) => { })

onformdata = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("FormDataEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("FormDataEvent")}}

## Propriétés de l'évènement

_Hérite des propriétés de son interface parente, {{DOMxRef("Event")}}._

- {{DOMxRef("FormDataEvent.formData")}}
  - : Contient l'objet {{DOMxRef("FormData")}} représentant les données présentes dans le formulaire au moment du déclenchement de l'évènement.

## Exemples

```js
// récupérer la référence du formulaire
const formElem = document.querySelector("form");

// gestionnaire de soumission
formElem.addEventListener("submit", (e) => {
  // lors de la soumission du formulaire, empêcher l'action par défaut
  e.preventDefault();

  console.log(formElem.querySelector('input[name="field1"]')); // TOTO
  console.log(formElem.querySelector('input[name="field2"]')); // TATA

  // construire un objet FormData, ce qui déclenche l'évènement formdata
  const formData = new FormData(formElem);
  // l'objet FormData est modifié par l'évènement formdata
  console.log(formData.get("field1")); // toto
  console.log(formData.get("field2")); // tata
});

// gestionnaire formdata pour récupérer les données
formElem.addEventListener("formdata", (e) => {
  console.log("évènement formdata déclenché");

  // modifie les données du formulaire
  const formData = e.formData;
  // l'objet FormData est modifié par l'évènement formdata
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
});
```

La version `onformdata` ressemble à ceci&nbsp;:

```js
formElem.onformdata = (e) => {
  console.log("évènement formdata déclenché");

  // modifie les données du formulaire
  const formData = e.formData;
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("form")}}
- L'interface {{DOMxRef("FormDataEvent")}}
