---
title: "HTMLFieldSetElement : propriété elements"
short-title: elements
slug: Web/API/HTMLFieldSetElement/elements
l10n:
  sourceCommit: 457e4946f5a5d15f08fc265bcf95f31609e4b22b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`elements`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} retourne un objet {{DOMxRef("HTMLCollection")}} contenant tous les éléments de contrôle de formulaire ({{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}) qui sont descendants de ce jeu de champs.

Vous pouvez accéder à un contrôle de formulaire particulier dans la collection retournée en utilisant soit un index, soit les attributs `name` ou `id` de l'élément. Si plusieurs contrôles partagent le même nom, comme c'est courant pour un groupe de boutons radio, l'utilisation du nom partagé retourne le premier élément ayant cette valeur.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}}.

## Exemples

```html
<form id="my-form">
  <fieldset id="my-fieldset">
    <legend>Mon ensemble de champs</legend>
    <p>
      <label for="username">Nom d'utilisateur&nbsp;:</label>
      <input type="text" id="username" name="username" />
    </p>
    <p>
      <label for="password">Mot de passe&nbsp;:</label>
      <input type="password" id="password" name="password" />
    </p>
    <p>
      <input type="checkbox" id="remember-me" name="remember-me" />
      <label for="remember-me">Se souvenir de moi</label>
    </p>
  </fieldset>
</form>
```

```js
const fieldset = document.getElementById("my-fieldset");
console.log(fieldset.elements.length); // 3
console.log(fieldset.elements["remember-me"].value); // "on"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("HTMLFieldSetElement")}}
- {{DOMxRef("HTMLFormElement.elements")}}
- {{HTMLElement("fieldset")}}
