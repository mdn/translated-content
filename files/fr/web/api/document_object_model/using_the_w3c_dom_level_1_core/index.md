---
title: Utilisation du DOM Level 1 Core du W3C
slug: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
translation_of: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
original_slug: Web/API/Document_object_model/Utilisation_du_DOM_Level_1_Core_du_W3C
---
Le DOM Level 1 Core du W3C est un modèle objet puissant permettant de modifier l'arbre de contenu de documents. Il est géré dans Mozilla (sur lequel Firefox et Netscape sont basés) et (pour la plus grande partie) dans Internet Explorer 5 pour Windows. Il s'agit d'une base essentielle du scripting sur le Web dans l'avenir.

## Définition d'un arbre de contenu

Beaucoup d'auteurs HTML peuvent penser qu'HTML est quelque chose de plat — un gros amas de texte avec quelques balises au milieu. Cependant, c'est aussi beaucoup plus que ça. Tout document HTML (ou, par ailleurs, tout document SGML ou XML) forme une structure arborescente. Par exemple, le document et la structure arborescente qui suivent sont similaires (bien que non identiques — consultez les notes sur [les espaces dans le DOM](/fr/docs/Gestion_des_espaces_dans_le_DOM))&nbsp;:

    <html>
    <head>
      <title>Mon document</title>
    </head>
    <body>
      <h1>Titre</h1>
      <p>Paragraphe</p>
    </body>
    </html>

![](using_the_w3c_dom_level_1_core-doctree.jpg)

Lorsque Mozilla examine un document, un arbre de contenu est construit et ensuite utilisé pour l'affichage.

Les termes utilisés pour décrire des arbres apparaissent souvent dans le DOM Level 1 Core. Chacune des boîtes dessinées dans l'arbre ci-dessus est un nœud dans l'arbre. La ligne au dessus d'un nœud représente une relation parent-enfant&nbsp;: le nœud supérieur est le parent, et le nœud inférieur est l'enfant. Deux enfants du même parent sont par conséquent des frères du même niveau. De même, on peut se référer à des ancêtres et des descendants. (Parler de cousins devient un peu compliqué par contre.)

## Ce que permet le DOM Level 1 Core

Le DOM Level 1 permet de modifier l'arbre du contenu*selon vos désirs*. Il est suffisamment puissant pour construire n'importe quel document HTML depuis rien. Il permet aux auteurs de modifier quoi que ce soit dans le document, depuis un script, à n'importe quel moment. La manière la plus simple pour les auteurs de pages Web de modifier le DOM dynamiquement est d'utiliser JavaScript. En JavaScript, le document est accessible de la même manière qu'il l'était dans les navigateurs plus anciens&nbsp;: depuis la propriété `document` de l'objet global. Cet objet `document` implémente l'[interface Document](http://xmlfr.org/w3c/TR/REC-DOM-Level-1/level-one-core.html#i-Document) de la spécification DOM Level 1 du W3C.

## Un exemple simple

Supposons que l'auteur désire prendre le document présenté plus haut et changer le contenu du titre, ainsi qu'écrire deux paragraphes plutôt qu'un seul. Le script suivant le permettrait :

### Contenu HTML

```html
<body>
<input type="button" value="Change this document." onclick="change()">
<h2>Header</h2>
<p>Paragraph</p>
</body>
```

### Contenu JavaScript

```js
  function change() {
    // document.getElementsByTagName ("H2") renvoie un NodeList du <h2>
    // éléments dans le document, et le premier est le nombre 0:

    var header = document.getElementsByTagName("H2").item(0);
    // le firstChild de l'en-tête est un noeud texte::
    header.firstChild.data = "A dynamic document";
    // maintenant l'en-tête est "Un document dynamique".

    var para = document.getElementsByTagName("P").item(0);
    para.firstChild.data = "This is the first paragraph.";

    // crée un nouveau noeud texte pour le second paragraphe
    var newText = document.createTextNode("This is the second paragraph.");
    // crée un nouvel Element pour le second paragraphe
    var newElement = document.createElement("P");
    // pose le texte dans le paragraphe
    newElement.appendChild(newText);
    // et pose le paragraphe à la fin du document en l'ajoutant
    // au BODY (qui est le parent de para)
    para.parentNode.appendChild(newElement);
  }
```

{{ EmbedLiveSample('Un_exemple_simple', 800, 300) }}

Vous pouvez voir ce script dans [un exemple complet](http://www.mozilla.org/docs/dom/technote/intro/example.html).

### Pour en apprendre plus

Maintenant que vous êtes familiarisé avec les concepts basiques du DOM, il existe un document expliquant [les méthodes fondamentales de DOM Level 1](/fr/docs/Explorer_un_tableau_HTML_avec_des_interfaces_DOM_et_JavaScript). C'est la suite de ce document.

Consultez également la [spécification DOM Level 1 Core](http://xmlfr.org/w3c/TR/REC-DOM-Level-1/level-one-core.html) du W3C (traduction en français non normative). C'est une spécification relativement claire, même si elle est un peu formelle. Ce qui est surtout intéressant pour les auteurs, c'est la description des différents objets DOM et de toutes leurs propriétés et méthodes. Voyez encore notre [documentation complète sur le DOM](/fr/docs/Web/API/Document_Object_Model).
