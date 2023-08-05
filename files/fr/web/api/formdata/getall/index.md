---
title: FormData.getAll()
slug: Web/API/FormData/getAll
---

{{APIRef("XMLHttpRequest")}}

La méthode **`getAll()`** de l'interface {{domxref("FormData")}} renvoie toutes les valeurs associées à une clé donnée à partir d'un objet `FormData`.

> **Note :** Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
formData.getAll(name);
```

### Paramètres

- `name`
  - : Un {{domxref("USVString")}} représentant le nom de la clé que vous voulez récupérer.

### Retours

Un tableau de {{domxref("FormDataEntryValue")}} dont la clé correspond à la valeur passée dans le paramètre `name`. Si la clé n'existe pas, la méthode renvoie une liste vide.

## Exemple

La ligne suivante crée un objet `FormData` vide :

```js
var formData = new FormData();
```

Si nous ajoutons deux valeurs `username` en utilisant {{domxref("FormData.append")}} :

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

La fonction `getAll()` suivante va retourner chaque valeurs de `username` dans un tableau :

```js
formData.getAll("username"); // Returns ["Chris", "Bob"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData)
- {{HTMLElement("Form")}}
