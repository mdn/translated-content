---
title: Element.classList
slug: Web/API/Element/classList
tags:
  - API
  - DOM
  - Elemento
  - Propiedad
  - Referencia
  - Sólo-Lectura
translation_of: Web/API/Element/classList
---
{{APIRef("DOM")}}

La propiedad de sólo lectura **`Element.classList`** devuelve una colección activa de [`DOMTokenList`](/es/docs/Web/API/DOMTokenList "The DOMTokenList interface represents a set of space-separated tokens. Such a set is returned by Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList or HTMLAreaElement.relList. It is indexed beginning with 0 as with JavaScript Array objects. DOMTokenList is always case-sensitive.") de los atributos de clase del elemento.

Usar `classList` es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de {{domxref("element.className")}}.

## Sintaxis

    var elementClasses = elementNodeReference.classList;

_elementClasses_ es un [DOMTokenList](/es/docs/DOM/DOMTokenList) que representa el atributo clase de _elementNodeReference_. Si el atributo clase no está definido o está vacío, _elementClasses.length_ devuelve 0. `element.classList` por sí mismo es de sólo lectura, aunque puede ser modificado usando los métodos` add()` y `remove()`.

## Métodos

- add( String [, String] )
  - : Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
- remove( String [, String] )
  - : Elimina las clases indicadas.
    **Nota:** Eliminar una clase que no existe NO produce un error.
- **item**( Number )
  - : Devuelve el valor de la clase por índice en la colección.
- **toggle**( String [, force] )
  - : Cuando sólo hay un argumento presente: Alterna el valor de la clase; ej., si la clase existe la **elimina** y devuelve `false`, si no, la **añade** y devuelve `true`.
    Cuando el segundo argumento está presente: Si el segundo argumento se evalúa como `true`, se añade la clase indicada, y si se evalúa como `false`, la elimina.
- contains( String )
  - : Comprueba si la clase indicada existe en el atributo de clase del elemento.
- replace( oldClass, newClass )
  - : Reemplaza una clase existente por una nueva.

## Ejemplos

```js
// div es una referencia de objeto al elemento <div> con class="foo bar"
div.classList.remove("foo");
div.classList.add("anotherclass");

// si visible está presente la elimina, de lo contrario la añade
div.classList.toggle("visible");

// añadir/eliminar visible, dependiendo de la condición, i menor que 10
div.classList.toggle("visible", i < 10 );

alert(div.classList.contains("foo"));

// añadir o eliminar varias clases
div.classList.add("foo", "bar");
div.classList.remove("foo", "bar");

// reemplazar la clase "foo" por "bar"
div.classList.replace("foo", "bar");
```

> **Nota:** Las versiones de Firefox anteriores a la 26 no implementan el uso de múltiples argumentos en los métodos add/remove/toggle. Vea <https://bugzilla.mozilla.org/show_bug.cgi?id=814014>

## Especificaciones

| Especificación                                                                                       | Estado                           | Comentario                                                                                      |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "dom.html#dom-classlist", "Element.classList")}} | {{Spec2("HTML WHATWG")}} | Nota en la especificación de HTML relacionada con el atributo {{htmlattrxref("class")}}. |
| {{SpecName("DOM WHATWG", "#dom-element-classlist", "Element.classList")}}     | {{Spec2("DOM WHATWG")}} | Definición inicial                                                                              |
| {{SpecName("DOM4", "#dom-element-classlist", "Element.classList")}}             | {{Spec2("DOM4")}}         |                                                                                                 |

## Compatibilidad con navegadores

{{Compat("api.Element.classList")}}

## Vea también

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}};
