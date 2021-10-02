---
title: Comment()
slug: Web/API/Comment/Comment
tags:
  - API
  - Commentaires
  - DOM
translation_of: Web/API/Comment/Comment
---
{{ApiRef("DOM")}}{{seeCompatTable}}

Le constructeur **`Comment()`** renvoie un objet {{domxref("Comment")}} _(Commentaire)_ nouvellement créé avec le {{domxref ("DOMString")}} donné en paramètre comme contenu textuel.

## Syntaxe

    comment1 = new Comment(); // Create an empty comment
    comment2 = new Comment("This is a comment");

## Exemple

```js
var comment = new Comment("Test");
```

## Spécifications

| Spécification                                                                    | Statut                           | Commentaire          |
| -------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#comment', 'Comment.Comment()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Comment.Comment")}}

## Voir aussi

- [The DOM interfaces index](/fr/docs/Web/API/Document_Object_Model)
