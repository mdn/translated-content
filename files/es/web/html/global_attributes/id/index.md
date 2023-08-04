---
title: id
slug: Web/HTML/Global_attributes/id
---

{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Global_attributes) **id** define un identificador único (ID) el cual no debe repetirse en todo el documento. Su propósito es identificar el elemento al vincularlo (usando un identificador de fragmento), en scripts u hojas de estilo (con CSS).

El valor de este atributo es una cadena de caracteres opaca: es decir, el autor del sitio no debe usarlo para proporcionar información. De forma particular, en sentido semántico por ejemplo, no debe ser derivado de la misma cadena.

El valor de este atributo no debe contener espacios en blanco. Los navegadores tratan los IDs que contienen espacios en blanco como si los espacios fueran parte del ID. En contraste con el atributo **class**, el cual permite valores separados por espacios, los elementos pueden tener sólo un ID definido mediante el atributo ID. Tenga en cuenta que un elemento puede tener muchos ID, pero los demás deben ser definidos de otra forma, como por medio de un script interactuando con el DOM.

> **Nota:** El uso de caracteres a excepción de letras en ASCII, dígitos, '\_', `'-'` y `'.'` pueden ocasionar problemas de compatibilidad, por no ser permitidos en HTML 4. A pesar de que esta limitación ha sido removida en HTML 5, un ID debe iniciar con una letra para asegurar la compatibilidad.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Todos los [atributos globales](/es/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}} que se asemeja a este atributo.
