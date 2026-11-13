---
title: "Document : méthode createComment()"
short-title: createComment()
slug: Web/API/Document/createComment
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

La méthode **`createComment()`** de l'interface {{DOMxRef("Document")}} crée un nouveau nœud de type commentaire et le retourne.

## Syntaxe

```js-nolint
createComment(data)
```

### Paramètres

- `data`
  - : Une chaîne de caractères contenant les données à ajouter au commentaire.

### Valeur de retour

Un nouvel objet {{DOMxRef("Comment")}}.

## Exemples

```js
const doc = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const comment = doc.createComment(
  "Mon commentaire super secret, pas si bien caché",
);

doc.querySelector("xml").appendChild(comment);

console.log(new XMLSerializer().serializeToString(doc));
// Affiche : <xml><!--Mon commentaire super secret, pas si bien caché--></xml>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
