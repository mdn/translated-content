---
title: "Document : propriété forms"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: b756b8ef42bfd3b9e2f3d46fb44d41e2d3f15e25
---

{{APIRef("DOM")}}

La propriété en lecture seule **`forms`** de l'interface {{DOMxRef("Document")}} retourne une collection ({{DOMxRef("HTMLCollection")}}) listant tous les éléments HTML {{HTMLElement("form")}} contenus dans le document.

> [!NOTE]
> De même, vous pouvez accéder à une liste des éléments d'entrée utilisateur·ice d'un formulaire à l'aide de la propriété {{DOMxRef("HTMLFormElement.elements")}}.

Vous pouvez également accéder aux éléments `<form>` nommés en tant que propriétés de l'objet `document`.
Par exemple, `document["login-form"]` et `document.forms["login-form"]` peuvent tous deux être utilisés pour accéder au formulaire nommé `login-form`.

> [!WARNING]
> S'appuyer sur le modèle `document["form-name"]` est dangereux et déconseillé car cela peut entraîner des conflits inattendus avec les API existantes ou futures du navigateur.
> Par exemple, si un navigateur introduit une propriété intégrée `document["login-form"]` à l'avenir, votre code pourrait ne plus être en mesure d'accéder à l'élément de formulaire.
> Pour éviter de tels conflits, utilisez toujours `document.forms` pour accéder aux formulaires nommés.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}} listant tous les formulaires du document.
Chaque élément de la collection est un {{DOMxRef("HTMLFormElement")}} représentant un seul élément `<form>`.

Si le document ne contient aucun formulaire, la collection retournée est vide, avec une longueur de zéro.

## Exemples

### Récupérer les informations d'un formulaire

```html
<form id="robby">
  <input type="button" value="formulaire de robby" />
</form>

<form id="dave">
  <input type="button" value="formulaire de dave" />
</form>

<form id="paul">
  <input type="button" value="formulaire de paul" />
</form>
```

```js
document.querySelectorAll("input[type=button]").forEach((button, i) => {
  button.addEventListener("click", (event) => {
    console.log(document.forms[i].id);
  });
});
```

### Accéder à un élément contenu dans un formulaire

```js
const selectForm = document.forms[index];
const selectFormElement = document.forms[index].elements[index];
```

### Accéder aux formulaires nommés

```html
<form name="login">
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">Se connecter</button>
</form>
```

```js
const loginForm = document.forms.login; // Ou document.forms['login']
loginForm.elements.email.placeholder = "test@exemple.com";
loginForm.elements.password.placeholder = "mot de passe";
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément HTML {{HTMLElement("form")}} et l'interface {{DOMxRef("HTMLFormElement")}}
