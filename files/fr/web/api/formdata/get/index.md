---
title: "FormData : méthode get()"
short-title: get()
slug: Web/API/FormData/get
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`get()`** de l'interface {{DOMxRef("FormData")}} retourne la première valeur associée à une clé donnée dans un objet `FormData`. Si vous vous attendez à plusieurs valeurs et souhaitez toutes les récupérer, utilisez plutôt la méthode {{DOMxRef("FormData.getAll()","getAll()")}}.

## Syntaxe

```js-nolint
get(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant le nom de la clé que vous souhaitez retrouver.

### Valeur de retour

Une valeur dont la clé correspond au `name` défini. Sinon, {{JSxRef("null")}}.

## Exemples

Si nous ajoutons deux valeurs `username` à un {{DOMxRef("FormData")}} en utilisant {{DOMxRef("FormData.append", "append()")}}&nbsp;:

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

La méthode `get()` suivante ne retourne que la première valeur `username`&nbsp;:

```js
formData.get("username"); // Retourne "Chris"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
