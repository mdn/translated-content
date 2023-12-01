---
title: FormData()
slug: Web/API/FormData/FormData
---

{{APIRef("XMLHttpRequest")}}

Le constructeur **`FormData()`** crée un nouvel objet {{domxref("FormData")}}.

> **Note :** Cette fonctionnalité est disponible dans [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
var formData = new FormData(form);
```

### Paramètres

- `form` {{optional_inline}}
  - : Un element HTML {{HTMLElement("form")}} — quand il est spécifié, l'objet {{domxref("FormData")}} sera rempli avec les clés/valeurs du formulaire en utilisant les noms de propriétés de chaque élément pour clé et les valeurs soumises. Cela encodera aussi le contenu des fichiers.

## Exemples

La ligne suivante crée un objet `FormData` vide:

```js
var formData = new FormData(); // Formulaire vide à cet instant
```

Vous pouvez ajouter un couple clé/valeur en utilisant {{domxref("FormData.append")}} :

```js
formData.append("username", "Chris");
```

Ou vous pouvez spécifier l'argument optionnel `form` à la création de l'objet `FormData` pour le pré-remplir avec les valeurs issues du formulaire spécifié :

```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username" />
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc" />
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile" />
  </div>
  <input type="submit" value="Submit!" />
</form>
```

> **Note :** Seuls les champs de formulaires valides sont inclus dans un objet FormData, c'est-à-dire ceux qui portent un nom (attribut `name`), qui ne sont pas désactivés et qui sont cochés (boutons radio et cases à cocher) ou sélectionnés (une ou plusieurs options dans une sélection).

```js
var myForm = document.getElementById("myForm");
formData = new FormData(myForm);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Manipuler `XMLHttpRequest`](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Utiliser les objets `FormData`](/fr/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
