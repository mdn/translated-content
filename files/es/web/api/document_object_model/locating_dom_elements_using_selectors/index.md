---
title: Localizando elementos DOM usando selectores
slug: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
---

Los selectores api proveen metodos que hacen mas facil y rapido devolver elementos del nodo {{domxref("Element")}} del DOM mediante emparejamiento de un conjunto de selectores. Esto es mucho mas rapido que las tecnicas anteriores, donde fuera necesario, por ejemplo usar un loop en un codigo JavaScript para localizar el item especifico que quisieras encontrar.

## Interfaz de NodeSelector

Esta especificación añade dos nuevos metodos a cualquier objeto implementando el {{domxref("Document")}}, {{domxref("DocumentFragment")}}, o {{domxref("Element")}} interfaces:

- {{domxref("Element.querySelector", "querySelector()")}}
  - : Devuelve la primera coincidencia del (elemento) {{domxref("Element")}} nodo dentro de las subramas del nodo. Sino se encuentra un nodo coincidente, se devuelve `null` .
- {{domxref("Element.querySelectorAll", "querySelectorAll()")}}
  - : devuelve un listado de nodos {{domxref("NodeList")}} conteniendo todos los elementos del nodo coincidentes( `Element`) dentro de las subramas del nodo, o Devuelve un Listado de Nodos vacio `NodeList` sino se encuentran coincidencias.

> **Nota:** El {{domxref("NodeList")}} devuelto por {{domxref("Element.querySelectorAll()", "querySelectorAll()")}} no es dinamico, Es decir que cualquier cambio realizado en el DOM no se vera reflejado en la coleccion. Esto es diferente de otros metodos de querying del dom que si devuelven listados de nodos dinamicos.

Encontraras ejemplos y detalles leyendo el documento de metodos {{domxref("Element.querySelector()")}} y {{domxref("Element.querySelectorAll()")}}, Tambien en el articulo [Code snippets for querySelector](/es/docs/Code_snippets/QuerySelector).

## Selectors

El metodo de selectores acepta uno o mas selectores seperados por comas entre cada selector para determinar que elemento o elementos deben ser devueltos. por ejemplo para seleccionar todos los elementos (p) del parrafo en un documento donde la clase CSS sea tanto `warning` or `note`, podes hacer lo siguiente:

```
var special = document.querySelectorAll( "p.warning, p.note" );
```

tambien por usar query para etiquetas id. Por ejemplo:

```
var el = document.querySelector( "#main, #basic, #exclamation" );
```

luego de ejecutar el codigo de arriba, la variable `el` contiene el primer elemento del documento, su ID puede ser uno de los siguentes `main`, `basic`, or `exclamation`.

Podes usar cualquier selector CSS con los metodos `querySelector()` y `querySelectorAll()`_._

## Ver tambien

- [Selectors API](http://www.w3.org/TR/selectors-api/)
- {{domxref("Element.querySelector()")}}
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- [Code snippets for querySelector](/es/docs/Code_snippets/QuerySelector)
