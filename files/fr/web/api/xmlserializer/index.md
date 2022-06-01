---
title: XMLSerializer
slug: Web/API/XMLSerializer
tags:
  - XML
translation_of: Web/API/XMLSerializer
original_slug: XMLSerializer
---
`XMLSerializer` sert à convertir des sous-arborescence DOM ou des documents DOM en texte. `XMLSerializer` est accessible aux scripts sans privilèges.

> **Note :** `XMLSerializer` sert le plus souvent aux applications et extensions basées sur la plateforme Mozilla. Bien qu'il soit utilisable par les pages Web, il ne fait partie d'aucun standard et son niveau de support dans les autres navigateurs est inconnu.

### Méthodes

- serializeToString
  - : Retourne la sous-arborescence sérialisée sous la forme d'une chaîne de caractères
- serializeToStream
  - : La sous-arborescence débutant par l'élément spécifié est sérialisée en un flux d'octets en utilisant l'encodage de caractères indiqué.

### Exemple

     var s = new XMLSerializer();
     var d = document;
     var str = s.serializeToString(d);
     alert(str);

<!---->

     var s = new XMLSerializer();
     var stream = {
       close&nbsp;: function()
       {
         alert("Flux fermé");
       },
       flush&nbsp;: function()
       {
       },
       write&nbsp;: function(string, count)
       {
         alert("'" + string + "'\n nb d'octets&nbsp;: " + count + "");
       }
     };
     s.serializeToStream(document, stream, "UTF-8");

### Voir également

- [Reference (en)](http://www.xulplanet.com/references/objref/XMLSerializer.html) (XULPlanet)
- [Parsing and serializing XML](fr/Parsing_and_serializing_XML)
- [Parsing and serializing XML (en)](http://xulplanet.com/tutorials/mozsdk/xmlparse.php) (XULPlanet)
- [Parsing and serializing XML (en)](http://kb.mozillazine.org/Parsing_and_serializing_XML#Parsing_strings_into_DOM_trees) (MozillaZine)
- [XMLHttpRequest](fr/XMLHttpRequest)
- [DOMParser](fr/DOMParser)
