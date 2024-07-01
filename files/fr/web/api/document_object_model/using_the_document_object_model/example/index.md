---
title: Exemple
slug: Web/API/Document_object_model/Using_the_Document_Object_Model/Example
---

```html
 <html>
 <head>
   <title>Mon Document</title>
   <script type="text/javascript">
   function change() {
     // document.getElementsByTagName("H1") renvoie une NodeList (liste de noeuds) de h1
     // les éléments dans le document dont le premier a le numéro 0 :
     var header = document.getElementsByTagName("H1").item(0);
     // le firstChild (premier enfant) de l'en-tête est un noeud Texte :
     header.firstChild.data = "Un document dynamique";
     // maintenant l'en-tête est "Un document dynamique".
     var para = document.getElementsByTagName("P").item(0);
     para.firstChild.data = "C'est le premier paragraphe.";
     // créer un nouveau noeud Texte pour le second paragraphe
     var newText = document.createTextNode("Ceci est le second paragraphe.");
     // créer un nouvel Element devant être le second paragraphe
     var newElement = document.createElement("P");
     // placer le texte dans le paragraphe
     newElement.appendChild(newText);
     // et placer le paragraphe à la fin du document par son ajout
     // le BODY (corps) (qui est le parent de para)
     para.parentNode.appendChild(newElement);
   }
   </script>
 </head>
 <body>
   <input type="button" value="Modifier ce document." onclick="change()">
   <h1>Header</h1>
   <p>Paragraph</p>
 </body>
 </head>
```
