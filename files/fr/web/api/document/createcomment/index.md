---
title: document.createComment
slug: Web/API/Document/createComment
---

{{APIRef("DOM")}}

`createComment()` crée et retourne un nouveau noeud de type commentaire.

## Syntaxe

```js
CommentNode = document.createComment(data);
```

### Paramètres

- `data`
  - : Une chaîne de caractères représentant le contenu du commentaire.

## Exemple

```js
var docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
var comment = docu.createComment("Voici un commentaire pas très bien caché");

docu.getElementsByTagName("xml")[0].appendChild(comment);

alert(new XMLSerializer().serializeToString(docu));
// Affiche: <xml><!--Voici un commentaire pas très bien caché--></xml>
```

## Spécification

- [createComment](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createComment)
