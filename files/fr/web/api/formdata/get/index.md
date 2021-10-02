---
title: FormData.get()
slug: Web/API/FormData/get
translation_of: Web/API/FormData/get
browser-compat: api.FormData.get
---
{{APIRef("XMLHttpRequest")}}

La méthode **`get()`** de l'interface [`FormData`](/fr/docs/Web/API/FormData) renvoie la première valeur associée à une clé donnée dans un objet `FormData`. Si vous souhaitez manipuler plusieurs valeurs et les récupérer intégralement, utilisez plutôt la méthode [`getAll()`](/fr/docs/Web/API/FormData/getAll).

> **Note :** Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
formData.get(name);
```

### Paramètres

- `name`
  - : Une chaîne de caractères [`USVString`](/fr/docs/Web/API/USVString) représentant le nom de la clé que vous souhaitez retrouver.

### Valeur de retour

Un objet [`FormDataEntryValue`](/fr/docs/Web/API/FormDataEntryValue) contenant la valeur. Si la clé n'existe pas, la méthode renvoie `null`.

## Exemple

La ligne suivante crée un objet `FormData` vide :

```js
var formData = new FormData();
```

Si nous ajoutons deux valeurs `username` en utilisant [`FormData.append`](/fr/docs/Web/API/FormData/append) :

```js
formData.append('username', 'Chris');
formData.append('username', 'Bob');
```

L'appel suivant à `get()` renverra uniquement la première valeur `username` indexée :

```js
formData.get('username'); // Renvoie "Chris"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`XMLHTTPRequest`](/fr/docs/Web/API/XMLHttpRequest)
- [Utiliser XMLHttpRequest](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Utiliser les objets `FormData`](/fr/docs/Web/API/FormData/Using_FormData_Objects)
- [`<form>`](/fr/docs/Web/HTML/Element/Form)
