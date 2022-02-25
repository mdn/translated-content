---
title: DOMImplementation.createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
tags:
  - API
  - DOM
  - DOM Référence(2)
  - DOM implémentation
  - Expérimental(2)
  - Méthode
  - Référence(2)
translation_of: Web/API/DOMImplementation/createHTMLDocument
---
{{ApiRef("DOM")}}{{SeeCompatTable}}

La méthode **`DOMImplementation.createHTMLDocument()`**  crée un nouveau {{domxref("Document")}} HTML.

## Syntaxe

    newDoc = document.implementation.createHTMLDocument(titre);

### Paramètres

- *title*  {{optional_inline}}  (excepté dans IE)
  - : C'est une {{domxref("DOMString")}} qui contient le titre à donner au nouveau document HTML.

## Exemple

Dans cet exemple, on crée un nouveau document HTML que l'on insère dans un {{HTMLElement("iframe")}} dans le document courant.

Ci-dessous, le code HTML pour cet exemple:

```html
<body>
  <p>Cliquez <a href="javascript:makeDocument()">ici</a> pour créer un nouveau document et l'insérer au dessous.</p>
  <iframe id="laFrame" src="about:blank" />
</body>
```

L'implémentation en JavaScript de la méthode `makeDocument()`:

```js
function makeDocument() {
  var frame = document.getElementById("laFrame");

  var doc = document.implementation.createHTMLDocument("Nouveau Document");
  var p = doc.createElement("p");
  p.innerHTML = "Ceci est un nouveau paragraphe.";

  try {
    doc.body.appendChild(p);
  } catch(e) {
    console.log(e);
  }

  // Copie le nouveau document HTML dans la frame

  var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
```

Le code des lignes 4 à 12 permet la création du nouveau document HTML et l'insertion de contenu dans ce dernier. La ligne 4 utilise la méthode `createHTMLDocument()` pour construire le nouveau document HTML et définir son {{ HTMLElement("title") }} comme "Nouveau Document". Dans les lignes 5 et 6, est créé un nouvel élément paragraphe avec un simple contenu, enfin, les lignes 8 à 12 permettent l'insertion de ce nouveau paragraphe dans le nouveau document.

La ligne 16 récupère le `contentDocument` _(contenu du document)_ du cadre ; c'est le document dans lequel nous allons injecter le nouveau contenu. Les deux lignes suivantes permettent d'importer le contenu du nouveau document dans le nouveau contexte du document. Pour finir, la ligne 20 remplace le contenu du cadre par le contenu du nouveau document.

[Voir l'exemple sur une page](/samples/domref/createHTMLDocument.html)

Le document retourné est préconstruit avec le code HTML suivant :

```html
<!doctype html>
<html>
<head>
<title>titre</title>
</head>
<body>
</body>
</html>
```

## Spécifications

| Spécification                                                                                                                                        | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-domimplementation-createhtmldocument', 'DOMImplementation.createHTMLDocument')}} | {{Spec2('DOM WHATWG')}} | Première définition. |

## Compatibilité des navigateurs

{{Compat("api.DOMImplementation.createHTMLDocument")}}

## Voir aussi

- L'interface {{domxref("DOMImplementation")}}.
