---
title: Example
slug: Web/API/Document_object_model/Using_the_Document_Object_Model/Example
---

```
 <html>
 <head>
   <title>Mi Documento</title>
   <script type="text/javascript">
   function cambio() {
     // document.getElementsByTagName("H1") retorna un NodeList de elementos
     // h1 en el documento, y el primero es numero 0:
     var header = document.getElementsByTagName("H1").item(0);
     // El firstChild del encabezado es un nodo Text:
     header.firstChild.data = "Un documento dinamico";
     // Ahora el encabezado es "Un documento dinamico".
     var para = document.getElementsByTagName("P").item(0);
     para.firstChild.data = "Este es el primer parrafo.";
     // Crea un nuevo nodo Text para el segundo parrafo
     var newText = document.createTextNode("Este es el segundo parrafo.");
     // Crea un nuevo Element para que sea el segundo parrafo
     var newElement = document.createElement("P");
     // Agrega el texto en el parrafo
     newElement.appendChild(newText);
     // Y agrega el parrafo al final del documento dentro del
     // BODY (el cuál es el padre de "para")
     para.parentNode.appendChild(newElement);
   }
   </script>
 </head>
 <body>
   <input type="button" value="Cambia este documento." onclick="cambio()">
   <h1>Encabezado</h1>
   <p>Parrafo</p>
 </body>
 </head>
```
