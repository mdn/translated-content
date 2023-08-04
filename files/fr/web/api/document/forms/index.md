---
title: Document.forms
slug: Web/API/Document/forms
---

{{APIRef("DOM")}}

La propriété `forms` de {{domxref("Document")}} retourne une collection ({{domxref("HTMLCollection")}}) des éléments {{HTMLElement("form")}} présents dans le document actuel.

> **Note :** De même, vous pouvez accéder à une liste des éléments d'entrée utilisateur d'un formulaire à l'aide de la propriété {{domxref ("HTMLFormElement.elements")}}.

## Syntaxe

```js
collection = document.forms;
```

### Valeur

Un objet {{domxref("HTMLCollection")}} listant tous les formulaires du document. Chaque élément de la collection est un {{domxref("HTMLFormElement")}} représentant un seul élément `<form>`.

## Exemples

### Récupérer les informations d'un formulaire

```html
<!doctype html>
<html lang="en">
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form id="robby">
      <input
        type="button"
        onclick="alert(document.forms[0].id);"
        value="robby's form" />
    </form>

    <form id="dave">
      <input
        type="button"
        onclick="alert(document.forms[1].id);"
        value="dave's form" />
    </form>

    <form id="paul">
      <input
        type="button"
        onclick="alert(document.forms[2].id);"
        value="paul's form" />
    </form>
  </body>
</html>
```

### Accéder à un élément contenu dans un formulaire

```js
var selectForm = document.forms[index];
var selectFormElement = document.forms[index].elements[index];
```

### Accéder aux formulaires nommés

```html
<!doctype html>
<html lang="en">
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form name="login">
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Log in</button>
    </form>

    <script>
      var loginForm = document.forms.login; // Ou document.forms['login']
      loginForm.elements.email.placeholder = "test@example.com";
      loginForm.elements.password.placeholder = "password";
    </script>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("form")}} et l'interface {{domxref("HTMLFormElement")}}
