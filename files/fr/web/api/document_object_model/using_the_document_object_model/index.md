---
title: Utiliser le Modèle Objet de Document
slug: Web/API/Document_Object_Model/Using_the_Document_Object_Model
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{DefaultAPISidebar("DOM")}}

Le _Modèle Objet de Document_ (<i lang="en">Document Object Model</i> ou <abbr>DOM</abbr> en anglais) est une API permettant de manipuler les arbres DOM de documents HTML et XML (et d'autres documents arborescents). Cette API est à la base de la description d'une page et sert de fondement au script sur le Web.

## Qu'est-ce qu'un arbre DOM ?

Un **arbre DOM** est une [structure arborescente](https://fr.wikipedia.org/wiki/Arborescence) dont les nœuds représentent le contenu d'un document HTML ou XML. Chaque document HTML ou XML possède une représentation sous forme d'arbre DOM. Par exemple, considérez le document suivant&nbsp;:

```html
<html lang="fr">
  <head>
    <title>Mon document</title>
  </head>
  <body>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </body>
</html>
```

Il possède un arbre DOM qui ressemble à ceci&nbsp;:

![Le DOM comme représentation arborescente d'un document, avec une racine et des nœuds contenant du contenu](using_the_w3c_dom_level_1_core-doctree.jpg)

Bien que l'arbre ci-dessus soit similaire à l'arbre DOM réel du document, ils ne sont pas identiques, car l'arbre DOM réel préserve les [espaces dans le DOM](/fr/docs/Web/CSS/CSS_text/Whitespace).

Lorsqu'un navigateur Web analyse un document HTML, il construit un arbre DOM puis l'utilise pour afficher le document.

## Que permet l'API Document ?

L'API Document, parfois appelée API DOM, permet de modifier un arbre DOM _comme vous le souhaitez_. Elle permet de créer n'importe quel document HTML ou XML à partir de rien, ou de modifier n'importe quel contenu d'un document existant. Les auteur·ice·s de pages Web peuvent modifier le DOM d'un document en utilisant JavaScript pour accéder à la propriété `document` de l'objet global. Cet objet `document` implémente l'interface {{domxref("Document")}}.

## Lire et modifier l'arbre

Supposons que vous souhaitiez modifier l'en-tête du document ci-dessus et écrire deux paragraphes au lieu d'un seul. Le script suivant le permet&nbsp;:

### HTML

```html
<html lang="fr">
  <head>
    <title>Mon document</title>
  </head>
  <body>
    <input type="button" value="Modifier ce document." />
    <h2>Titre</h2>
    <p>Paragraphe</p>
  </body>
</html>
```

### JavaScript

```js
document.querySelector("input").addEventListener("click", () => {
  // document.getElementsByTagName("h2") renvoie un NodeList des éléments <h2> du document, le premier est à l'indice 0 :
  const header = document.getElementsByTagName("h2").item(0);

  // Le firstChild de l'en-tête est un nœud texte :
  header.firstChild.data = "Un document dynamique";
  // Maintenant, l'en-tête est "Un document dynamique".

  // Accéder au premier paragraphe
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "Ceci est le premier paragraphe.";

  // Créer un nouveau nœud texte pour le second paragraphe
  const newText = document.createTextNode("Ceci est le second paragraphe.");

  // Créer un nouvel élément pour le second paragraphe
  const newElement = document.createElement("p");

  // Ajouter le texte dans le paragraphe
  newElement.appendChild(newText);

  // Ajouter le paragraphe à la fin du document (dans le body, parent de para)
  para.parentNode.appendChild(newElement);
});
```

{{ EmbedLiveSample('lire_et_modifier_larbre', 800, 300) }}

## Créer un arbre en JavaScript

Vous pouvez aussi créer l'arbre ci-dessus entièrement en JavaScript&nbsp;:

```js
const racine = document.createElement("html");
racine.lang = "fr";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("Mon document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Titre"));
const paragraphe = document.createElement("p");
paragraphe.appendChild(document.createTextNode("Paragraphe"));
body.appendChild(header);
body.appendChild(paragraphe);

racine.appendChild(head);
racine.appendChild(body);
```

## Pour en apprendre plus

Maintenant que vous êtes familiarisé·e avec les concepts de base du DOM, vous pouvez en apprendre davantage sur les fonctionnalités fondamentales de l'API Document en lisant [comment parcourir un tableau HTML avec JavaScript et les interfaces DOM](/fr/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces).

## Voir aussi

- Le [Modèle Objet de Document (DOM)](/fr/docs/Web/API/Document_Object_Model).
