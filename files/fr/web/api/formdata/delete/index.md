---
title: "FormData : méthode delete()"
short-title: delete()
slug: Web/API/FormData/delete
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`delete()`** de l'interface {{DOMxRef("FormData")}} supprime une clé et sa (ses) valeur(s) d'un objet `FormData`.

## Syntaxe

```js-nolint
delete(name)
```

### Paramètres

- `name`
  - : Le nom de la clé que vous voulez supprimer.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Vous pouvez supprimer une clé et ses valeurs en utilisant `delete()`&nbsp;:

```js
formData.delete("username");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
