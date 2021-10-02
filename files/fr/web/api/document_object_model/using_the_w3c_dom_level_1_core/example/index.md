---
title: Exemple
slug: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/Example
tags:
  - API
  - DOM
  - Débutant
  - Exemples
translation_of: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/Example
original_slug: Web/API/Document_object_model/Utilisation_du_DOM_Level_1_Core_du_W3C/Exemple
---

<pre class="brush: html"> &lt;html&gt;
 &lt;head&gt;
   &lt;title&gt;Mon Document&lt;/title&gt;
   &lt;script type="text/javascript"&gt;
   function change() {
     // document.getElementsByTagName("H1") renvoie une NodeList (<em>liste de noeuds</em>) de h1
     // les éléments dans le document dont le premier a le numéro 0 :
     var header = document.getElementsByTagName("H1").item(0);
     // le firstChild (<em>premier enfant</em>) de l'en-tête est un noeud Texte :
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
     // le BODY (<em>corps</em>) (qui est le parent de para)
     para.parentNode.appendChild(newElement);
   }
   &lt;/script&gt;
 &lt;/head&gt;
 &lt;body&gt;
   &lt;input type="button" value="Modifier ce document." onclick="change()"&gt;
   &lt;h1&gt;Header&lt;/h1&gt;
   &lt;p&gt;Paragraph&lt;/p&gt;
 &lt;/body&gt;
 &lt;/head&gt;
</pre>
