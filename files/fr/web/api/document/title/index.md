---
title: "Document : propriété title"
short-title: title
slug: Web/API/Document/title
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La propriété **`title`** de l'interface {{DOMxRef("Document")}} permet d'obtenir ou de définir le titre actuel du document.
Lorsqu'elle est présente, elle prend par défaut la valeur de la balise HTML {{HTMLElement("title")}}.

## Valeur

Une chaîne de caractères contenant le titre du document. Si le titre a été remplacé en définissant `document.title`, il contient cette valeur. Sinon, il contient le titre défini dans l'élément HTML {{HTMLElement("title")}}.

```js
document.title = newTitle;
```

`newTitle` est le nouveau titre du document. L'affectation modifie la valeur de retour de `document.title`, le titre affiché pour le document (par exemple, dans la barre de titre de la fenêtre ou de l'onglet), et elle affecte également le DOM du document (par exemple, le contenu de l'élément `<title>` dans un document HTML).

## Exemples

En supposant que le `<head>` du document ressemble à ceci&nbsp;:

```html
<head>
  <meta charset="UTF-8" />
  <title>Bonjour le monde !</title>
</head>
```

```js
console.log(document.title); // "Bonjour le monde !"
document.title = "Au revoir le monde !"; // Titre de la page modifié
console.log(document.title); // "Au revoir le monde !"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
