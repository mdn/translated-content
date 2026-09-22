---
title: "FormData : méthode has()"
short-title: has()
slug: Web/API/FormData/has
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`has()`** de l'interface {{DOMxRef("FormData")}} retourne un booléen indiquant si un objet `FormData` contient une certaine clé.

## Syntaxe

```js-nolint
has(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant le nom de la clé que vous voulez tester.

### Valeur de retour

`true` si une clé de l'objet `FormData` correspond au `name` défini. Sinon, `false`.

## Exemples

L'extrait suivant montre les résultats des tests effectués pour vérifier l'existence d'un `username` dans un objet `FormData`, avant et après avoir ajouté une valeur `username` avec {{DOMxRef("FormData.append", "append()")}}&nbsp;:

```js
formData.has("username"); // Retourne false
formData.append("username", "Chris");
formData.has("username"); // Retourne true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
