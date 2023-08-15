---
title: document.body
slug: Web/API/Document/body
---

{{ApiRef}}

Retourne l'élément `<body>` ou `<frameset>` du document courant.

## Syntaxe

```js
var objRef = document.body;
document.body = objRef;
```

## Exemple

```js
// dans le HTML: <body id="ancienElementBody"></body>
alert(document.body.id); // "ancienElementBody"

var unNouvelElementBody = document.createElement("body");

unNouvelElementBody.id = "nouvelElementBody";
document.body = unNouvelElementBody;
alert(document.body.id); // "nouvelElementBody"
```

## Notes

`document.body` est l'élément dans lequel le contenu du document est situé. Dans les documents avec un élément `<body>` celui-ci est retourné, et dans les documents de type frameset l'élément `<frameset>` le plus extérieur est retourné.

Même si body est modifiable, lui affecter une nouvelle valeur retire tous les éléments enfants du `<body>` existant.

## Spécification

- [DOM Level 2 HTML: HTMLDocument.body](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-56360201)
