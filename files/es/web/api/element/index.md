---
title: element
slug: Web/API/Element
---

{{ APIRef }}

Este capítulo proporciona una breve explicación para los métodos generales, las propiedades y los eventos disponibles para los elementos HTML y XML en el DOM de Gecko.

Varias especificaciones aplicadas a los elementos:

- [Especificaciones esenciales del DOM](https://www.w3.org/TR/DOM-Level-2-Core/) —describe las interfaces esenciales compartidas por la mayoría de los objetos DOM en los documentos HTML y XML.
- [Especificaciones HTML del DOM](https://www.w3.org/TR/DOM-Level-2-HTML/) —describe las interfaces para objetos en documentos HTML y XHTML construidos con la especificación base.
- [Especificiones de los eventos DOM](https://www.w3.org/TR/DOM-Level-2-Events/) —describe los eventos compartidos por la mayoría de objetos DOM, construidos con las especificaciones y base DOM [Opiniones](https://www.w3.org/TR/DOM-Level-2-Views/).

Los artículos listados aquí amplían lo antedicho e incluyen enlaces a la especificación apropiada del DOM de W3C.

Mientras que estas interfaces son generalmente compartidas por la mayoría de los elementos HTML y XML, hay muchas más especiales para los objetos particulares listados en la especificación HTML del DOM —por ejemplo las interfaces del [elemento tabla de HTML](/es/docs/Web/API/HTMLTableElement) y [elemento formulario de HTML](/es/docs/Web/API/HTMLFormElement).

## Propiedades

| Nombre                                                      | Descripción                                                                                                         | Tipo                                                                   | Disponibilidad                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| [`attributes`](/es/docs/Web/API/Element/attributes)         | Todos los atributos asociados a un elemento.                                                                        | [`NamedNodeMap`](/es/docs/Web/API/NamedNodeMap)                        | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`childNodes`](/es/docs/Web/API/Node/childNodes)            | Todos los nodos hijos de un elemento.                                                                               | [`Listado de nudo`](/es/docs/Web/API/NodeList)                         | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`className`](/es/docs/Web/API/Element/className)           | La clase del elemento.                                                                                              | [`Secuencia`](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) | para [HTML](/es/docs/Web/HTML), [XUL](/es/XUL)       |
| [`clientHeight`](/es/docs/Web/API/Element/clientHeight)     | El alto interior del elemento.                                                                                      | [`Número`](/es/Core_JavaScript_1.5_Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`clientWidth`](/es/docs/Web/API/Element/clientWidth)       | El ancho interior del elemento.                                                                                     | [`Número`](/es/Core_JavaScript_1.5_Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`dir`](/es/docs/Web/API/HTMLElement/dir)                   | La direccionalidad del elemento.                                                                                    | [`Secuencia`](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) | para [HTML](/es/docs/Web/HTML), [XUL](/es/XUL)       |
| [`firstChild`](/es/docs/Web/API/Node/firstChild)            | El primer hijo directo del elemento, `null` si no hay.                                                              | [`Nudo`](/es/docs/Web/API/Node)                                        | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`id`](/es/docs/Web/API/Element/id)                         | La identificación del elemento.                                                                                     | [`Secuencia`](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) | para [HTML](/es/docs/Web/HTML), [XUL](/es/XUL)       |
| [`innerHTML`](/es/docs/Web/API/Element/innerHTML)           | El contenido y el código que hay dentro del elemento.                                                               | [`Secuencia`](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) | para [HTML](/es/docs/Web/HTML)                       |
| [`lang`](/es/docs/Web/API/HTMLElement/lang)                 | El lenguaje de los atributos, texto y contenidos del elemento.                                                      | [`Secuencia`](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) | para [HTML](/es/docs/Web/HTML)                       |
| [`lastChild`](/es/docs/Web/API/Node/lastChild)              | El último hijo directo del elemento, `null` si no hay.                                                              | [`Node`](/es/docs/Web/API/Node)                                        | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`localName`](/es/docs/Web/API/Element/localName)           | La parte local del nombre cualificado del elemento.                                                                 | [`Secuencia`](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) | para [todos](/es/docs/Web/API/Document_Object_Model) |
| Nombre                                                      | Descripción                                                                                                         | Tipo                                                                   | Disponibilidad                                       |
| [`name`](/es/docs/Web/API)                                  | El nombre del elemento.                                                                                             | [`Secuencia`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) | para [HTML](/es/docs/Web/HTML)                       |
| [`namespaceURI`](/es/docs/Web/API/Element/namespaceURI)     | El URI del espacio de nombre de ese nodo, `null` si no está especificado.                                           | [`Secuencia`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`nextSibling`](/es/docs/Web/API/Node/nextSibling)          | El nodo inmediatamente posterior al primero dado en el árbol, `null` si no hay.                                     | [`Nudo`](/es/docs/Web/API/Node)                                        | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`nodeName`](/es/docs/Web/API/Node/nodeName)                | El nombre del nodo de ese elemento.                                                                                 | [`Secuencia`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`nodeType`](/es/docs/Web/API/Node/nodeType)                | Un número que representa el tipo del nodo. Lo mismo que `1` para los elementos DOM.                                 | [`Número`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)    | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`nodeValue`](/es/docs/Web/API/Node/nodeValue)              | El valor del nodo. Lo mismo que `null` para los elementos DOM.                                                      | [`Secuencia`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`offsetHeight`](/es/docs/Web/API/HTMLElement/offsetHeight) | El alto de un elemento, tal cual está escrito en la composición.                                                    | [`Número`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`offsetLeft`](/es/docs/Web/API/HTMLElement/offsetLeft)     | La distancia que hay desde el borde izquierdo del elemento al de su `offsetParent`.                                 | [`Número`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`offsetParent`](/es/docs/Web/API/HTMLElement/offsetParent) | El elemento del cual todos los cálculos de distancia son actualmente computados.                                    | [`Elemento`](/es/docs/Web/API/Element)                                 | para [HTML](/es/docs/Web/HTML)                       |
| [`offsetTop`](/es/docs/DOM/element.offsetTop)               | La distancia desde el borde superior del elemento hasta el de su `offsetParent`.                                    | [`Número`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`offsetWidth`](/es/docs/Web/API/HTMLElement/offsetWidth)   | El ancho de un elemento, tal cual está escrito en la composición.                                                   | [`Número`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`ownerDocument`](/es/docs/Web/API/Node/ownerDocument)      | El documento en el cual está ese nodo, `null` si no hay.                                                            | [`Documento`](/es/docs/Web/API/Document)                               | para [todos](/es/docs/Web/API/Document_Object_Model) |
| Nombre                                                      | Descripción                                                                                                         | Tipo                                                                   | Disponibilidad                                       |
| [`parentNode`](/es/docs/Web/API/Node/parentNode)            | El elemento original(padre) de ese nodo, `null` si no hay dentro del [documento de DOM](/es/docs/Web/API/Document). | [`Nudo`](/es/docs/Web/API/Node)                                        | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`prefix`](/es/docs/Web/API/Element/prefix)                 | El prefijo del espacio de nombre del nodo, `null` si no está especificado.                                          | [`Secuencia`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`previousSibling`](/es/docs/Web/API/Node/previousSibling)  | El nodo inmediatamente anterior al primero dado en el árbol , `null` si no hay.                                     | [`Nudo`](/es/docs/Web/API/Node)                                        | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`scrollHeight`](/es/docs/DOM/element.scrollHeight)         | Muestra la altura de deslizamiento del elemento.                                                                    | [`Número`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`scrollLeft`](/es/docs/Web/API/Element/scrollLeft)         | Obtiene/establece el offset de scroll izquierdo de un elemento.                                                     | [`Número`](/es/Core_JavaScript_1.5_Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`scrollTop`](/es/docs/Web/API/Element/scrollTop)           | Obtiene/establece el offset de scroll superior de un elemento.                                                      | [`Número`](/es/Core_JavaScript_1.5_Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`scrollWidth`](/es/docs/Web/API/Element/scrollWidth)       | Muestra el ancho de deslizamiento de un elemento.                                                                   | [`Número`](/es/Core_JavaScript_1.5_Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`style`](/es/docs/Web/API/HTMLElement/style)               | Un objeto representando las declaraciones de los atributos de estilo del elemento.                                  | [`Estilo CSS`](/es/docs/Web/API/CSSStyleDeclaration)                   | para [HTML](/es/docs/Web/HTML), [XUL](/es/XUL)       |
| [`tabIndex`](/es/docs/Web/API/HTMLElement/tabIndex)         | Obtiene/establece la posición del elemento en el órden de tabulación.                                               | [`Número`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)    | para [HTML](/es/docs/Web/HTML)                       |
| [`tagName`](/es/docs/Web/API/Element/tagName)               | El nombre de la etiqueta para el elemento dado.                                                                     | [`Secuencia`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) | para [todos](/es/docs/Web/API/Document_Object_Model) |
| [`textContent`](/es/docs/Web/API/Node/textContent)          | Obtiene/establece los contenidos textuales de un elemento y todos sus descendentes.                                 | [`Secuencia`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) | para [todos](/es/docs/Web/API/Document_Object_Model) |

## Métodos

| Nombre y Descripción                                                                                                                                                                                                                                                                                                                                                            | Devuelve                                                            | Disponible                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| [`addEventListener`](/es/docs/Web/API/EventTarget/addEventListener) ( [type](/es/docs/Web/JavaScript/Reference/Global_Objects/String), [handler](/es/docs/Web/JavaScript/Reference/Global_Objects/Function), [bubble](/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean)) <br>Registra un controlador de evento para un tipo de evento específico en un elemento.        | -                                                                   | [Todos](/es/docs/Web/API/Event)                      |
| [`appendChild`](/es/docs/Web/API/Node/appendChild)( [appendedNode](/es/docs/Web/API/Node) ) <br>Inserta un nodo así como el último nodo hijo de este elemento.                                                                                                                                                                                                                  | [Node](/es/docs/Web/API/Node)                                       | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`blur`](/es/docs/Web/API/HTMLElement/blur)() <br>Quita el foco del teclado del elemento actual.                                                                                                                                                                                                                                                                                | -                                                                   | para [HTML](/es/docs/Web/HTML), [XUL](/es/XUL)       |
| [`click`](/es/docs/Web/API/HTMLElement/click)() <br>Simula un clic sobre el elemento actual.                                                                                                                                                                                                                                                                                    | -                                                                   | para [HTML](/es/docs/Web/HTML), [XUL](/es/XUL)       |
| [`cloneNode`](/es/docs/Web/API/Node/cloneNode)( [deep](/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean)) <br>Hace copia de un nudo, y opcionalmente, de todo sus contenidos                                                                                                                                                                                            | [Node](/es/docs/Web/API/Node)                                       | para [Todos](/es/docs/Web/API/Document_Object_Model) |
| [`dispatchEvent`](/es/docs/Web/API/EventTarget/dispatchEvent)( [event](/es/docs/Web/API/Event) ) <br>Envía un evento a este nodo en el DOM.                                                                                                                                                                                                                                     | [Boolean](/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean) | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`getAttribute`](/es/docs/Web/API/Element/getAttribute)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Devuelve el valor de un atributo nombrado desde el nodo actual.                                                                                                                                                                                  | [Object](/es/Core_JavaScript_1.5_Reference/Global_Objects/Object)   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`getAttributeNS`](/es/docs/Web/API/Element/getAttributeNS)( [namespace](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Devuelve el valor del atributo con el nombre especificado, desde el nodo actual.                                                                                       | [Object](/es/Core_JavaScript_1.5_Reference/Global_Objects/Object)   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`getAttributeNode`](/es/docs/Web/API/Element/getAttributeNode)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Devuelve la representación del nodo del atributo nombrado desde el nodo actual.                                                                                                                                                          | [Attr](/es/docs/Web/API/Attr)                                       | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`getAttributeNodeNS`](/es/docs/Web/API/Element/getAttributeNodeNS)( [namespace](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Devuelve la representación del nodo del atributo con el nombre especificado, desde el nodo actual.                                                             | [Attr](/es/docs/Web/API/Attr)                                       | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| Nombre y Descripción                                                                                                                                                                                                                                                                                                                                                            | Devuelve                                                            | Disponibilidad                                       |
| [`getElementsByTagName`](/es/docs/Web/API/Element/getElementsByTagName)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Devuelve un conjunto de todos los elementos descendentes, de un nombre de etiqueta particular, desde el elemento actual.                                                                                                         | [NodeSet](/es/docs/DOM/NodeSet)                                     | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`getElementsByTagNameNS`](/es/docs/Web/API/Element/getElementsByTagNameNS)( [namespace](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Devuelve un conjunto de todos los elementos descendentes, de un nombre de etiqueta y espacio particular, desde el elemento actual.                     | [NodeSet](/es/docs/DOM/NodeSet)                                     | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`hasAttribute`](/es/docs/Web/API/Element/hasAttribute)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Verifica si el elemento tiene el atributo especificado o no.                                                                                                                                                                                     | [Boolean](/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean) | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`hasAttributeNS`](/es/docs/Web/API/Element/hasAttributeNS)( [namespace](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Verifica si el elemento tiene el atributo especificado, en el nombre de espacio especificado o no.                                                                     | [Boolean](/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean) | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`hasAttributes`](/es/docs/Web/API/Element/hasAttributes)() <br>Verifica si el elemento tiene o no algún atributo.                                                                                                                                                                                                                                                              | [Boolean](/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean) | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`hasChildNodes`](/es/docs/Web/API/Node/hasChildNodes)() <br>Verifica si el elemento tiene nodos hijos o no.                                                                                                                                                                                                                                                                    | [Boolean](/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean) | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`insertBefore`](/es/docs/Web/API/Node/insertBefore)( [insertedNode](/es/docs/Web/API/Node), [adjacentNode](/es/docs/Web/API/Node) ) <br>Inserta el primer nodo antes que el segundo, Nodo hijo en el DOM.                                                                                                                                                                      | [Node](/es/docs/Web/API/Node)                                       | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`normalize`](/es/docs/Web/API/Node/normalize)() <br>Limpia todos los nodos de texto debajo de este elemento (une lo adyacente, quita lo vacío).                                                                                                                                                                                                                                | -                                                                   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`removeAttribute`](/es/docs/Web/API/Element/removeAttribute)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Quita el atributo nombrado desde el nodo actual.                                                                                                                                                                                           | -                                                                   | [All](/es/docs/Web/API/Document_Object_Model)        |
| [`removeAttributeNS`](/es/docs/Web/API/Element/removeAttributeNS)( [namespace](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Quita el atributo con el nombre y nombre de espacio especificado desde el nodo actual.                                                                           | -                                                                   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| Nombre y Descripción                                                                                                                                                                                                                                                                                                                                                            | Devuelve                                                            | Disponibilidad                                       |
| [`removeAttributeNode`](/es/docs/Web/API/Element/removeAttributeNode)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String) ) <br>Quita la representación del nodo del atributo nombrado desde el nodo actual.                                                                                                                                                       | -                                                                   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`removeChild`](/es/docs/Web/API/Node/removeChild)( [removedNode](/es/docs/Web/API/Node) ) <br>Quita el nodo hijo desde el elemento actual.                                                                                                                                                                                                                                     | [Node](/es/docs/Web/API/Node)                                       | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`removeEventListener`](/es/docs/Web/API/Element/removeEventListener)( [type](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [handler](/es/Core_JavaScript_1.5_Reference/Global_Objects/Function) ) <br>Quita un oyente de evento desde el elemento.                                                                                                                 | -                                                                   | [Todos](/es/docs/Web/API/Event)                      |
| [`replaceChild`](/es/docs/Web/API/Node/replaceChild)( [insertedNode](/es/docs/Web/API/Node), [replacedNode](/es/docs/Web/API/Node) ) <br>Reemplaza un nodo hijo en el elemento actual con otro.                                                                                                                                                                                 | [Node](/es/docs/Web/API/Node)                                       | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`scrollIntoView`](/es/docs/Web/API/Element/scrollIntoView)( [alignWithTop](/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean) ) <br>Recorre la página hasta que el elemento se obtiene en la vista.                                                                                                                                                                     | -                                                                   | [HTML](/es/docs/Web/HTML)                            |
| [`setAttribute`](/es/docs/Web/API/Element/setAttribute)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [value](/es/Core_JavaScript_1.5_Reference/Global_Objects/Object) ) <br>Establece el valor de un atributo nombrado desde el nodo actual.                                                                                                               | -                                                                   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`setAttributeNS`](/es/docs/Web/API/Element/setAttributeNS)( [namespace](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [value](/es/Core_JavaScript_1.5_Reference/Global_Objects/Object) ) <br>Establece el valor del atributo con el nombre y nombre de espacio especificado desde el nodo actual. | -                                                                   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`setAttributeNode`](/es/docs/Web/API/Element/setAttributeNode)( [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [attrNode](/es/docs/Web/API/Attr) ) <br>Establece la representación del nodo del atributo nombrado desde el nodo actual.                                                                                                                      | -                                                                   | [Todos](/es/docs/Web/API/Document_Object_Model)      |
| [`setAttributeNodeNS`](/es/docs/Web/API/Element/setAttributeNodeNS)( [namespace](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [name](/es/Core_JavaScript_1.5_Reference/Global_Objects/String), [attrNode](/es/docs/Web/API/Attr) ) <br>Establece la representación del nodo del atributo con el nombre y nombre de espacio especificado desde el nodo actual.      | -                                                                   | [Todos](/es/docs/Web/API/Document_Object_Model)      |

## Eventos

Son propiedades correspondientes a los atributos del evento "on" en HTML.

A diferencia de los atributos correspondientes, los valores de esas propiedades son funciones (o cualquier otro objeto trabajando con la interfaz [EventListener](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener)) más bien que una cadena de carácteres. En efecto, asignar un atributo de evento en HTML crea una función envolvente alrededor del código especificado. Por ejemplo, el siguiente HTML:

```
<div onclick="foo();">clic aquí!</div>
```

Si `element` es una referencia a esta `div`, el valor de `element.onclick` será:

```
function onclick(event) {
   foo();
}
```

El objeto [event](/es/docs/Web/API/Event) es pasado al parámetro `event` de esta función envolvente.

- [onblur](/es/docs/Web/API/Window/blur_event) - (al quitar el foco)
  - : Devuelve el código de manejo de evento para el evento `blur`.

<!---->

- [onchange](/es/docs/Web/API/HTMLElement/change_event) - (al modificar)
  - : Devuelve el código de manejo de evento para el evento `change`.

<!---->

- [onclick](/es/docs/Web/API/Element/click_event) - (al hacer clic)
  - : Devuelve el código de manejo de evento para el evento `onclick`.

<!---->

- [ondblclick](/es/docs/Web/API/Element/dblclick_event) - (al hacer doble clic)
  - : Devuelve el código de manejo de evento para el evento `ondblclick`.

<!---->

- [onfocus](/es/docs/Web/API/Window/focus_event) - (al poner el foco)
  - : Devuelve el código de manejo de evento para el evento `onfocus`.

<!---->

- [onkeydown](/es/docs/Web/API/Element/keydown_event) - (al tener una tecla apretada)
  - : Devuelve el código de manejo de evento para el evento `onkeydown`.

<!---->

- [onkeypress](/es/docs/Web/API/Element/keypress_event) - (al apretar una tecla)
  - : Devuelve el código de manejo de evento para el evento `onkeypress`.

<!---->

- [onkeyup](/es/docs/Web/API/Element/keyup_event) - (al soltar una tecla)
  - : Devuelve el código de manejo de evento para el evento `onkeyup`.

<!---->

- [onmousedown](/es/docs/Web/API/Element/mousedown_event) - (al tener el botón del ratón apretado)
  - : Devuelve el código de manejo de evento para el evento `onmousedown`.

<!---->

- [onmousemove](/es/docs/Web/API/Element/mousemove_event) - (al mover el ratón)
  - : Devuelve el código de manejo de evento para el evento `onmousemove`.

<!---->

- [onmouseout](/es/docs/Web/API/Element/mouseout_event) - (al quitar el puntero del ratón)
  - : Devuelve el código de manejo de evento para el evento `onmouseout`.

<!---->

- [onmouseover](/es/docs/DOM/element.onmouseover) - (al pasar el ratón encima)
  - : Devuelve el código de manejo de evento para el evento `onmouseover`.

<!---->

- [onmouseup](/es/docs/Web/API/Element/mouseup_event) - (al soltar el botón del ratón)
  - : Devuelve el código de manejo de evento para el evento `onmouseup`.

<!---->

- [onresize](/es/docs/Web/API/Window/resize_event) - (al re-dimensionar la pantalla)
  - : Devuelve el código de manejo de evento para el evento `onresize`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
