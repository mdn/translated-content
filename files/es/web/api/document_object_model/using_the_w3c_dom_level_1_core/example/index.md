---
title: Example
slug: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/Example
tags:
  - DOM
  - Ejemplo
translation_of: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/Example
---
<pre> &lt;html&gt;
 &lt;head&gt;
   &lt;title&gt;Mi Documento&lt;/title&gt;
   &lt;script type="text/javascript"&gt;
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
   &lt;/script&gt;
 &lt;/head&gt;
 &lt;body&gt;
   &lt;input type="button" value="Cambia este documento." onclick="cambio()"&gt;
   &lt;h1&gt;Encabezado&lt;/h1&gt;
   &lt;p&gt;Parrafo&lt;/p&gt;
 &lt;/body&gt;
 &lt;/head&gt;
</pre>
