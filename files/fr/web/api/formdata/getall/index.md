---
title: "FormData : méthode getAll()"
short-title: getAll()
slug: Web/API/FormData/getAll
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`getAll()`** de l'interface {{DOMxRef("FormData")}} retourne toutes les valeurs associées à une clé donnée à partir d'un objet `FormData`.

## Syntaxe

```js-nolint
getAll(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant le nom de la clé que vous souhaitez retrouver.

### Valeur de retour

Un tableau de valeurs dont la clé correspond au `name` défini. Sinon, une liste vide.

## Exemples

Si nous ajoutons deux valeurs `username` à un {{DOMxRef("FormData")}} en utilisant {{DOMxRef("FormData.append", "append()")}}&nbsp;:

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

La méthode `getAll()` suivante retourner les deux valeurs `username` dans un tableau&nbsp;:

```js
formData.getAll("username"); // Retourne ["Chris", "Bob"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
