---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
---

{{HTMLSidebar("Global_attributes")}}

> **Nota:** El valor máximo para tabindex no debe de exceder 32767 ([sección 17.11.1 del W3C](https://www.w3.org/TR/html401/interact/forms.html#h-17.11.1)). Si no se especifica, el valor asignado por defecto es -1.

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **tabindex** indica si su elemento puede ser enfocado, y si participa en la navegación secuencial del teclado (usualmente con la tecla _Tab_, de ahí el nombre). Acepta un entero como valor, con diferentes resultados que dependen de dicho valor:

- un _valor negativo_ (usualmente tabindex="-1") significa que el elemento debe ser enfocado, pero no debe de ser accesible a través de la navegación secuencial del teclado. Es útil para crear widgets accesibles con JavaScript.
- tabindex="0" significa que el elemento debe ser enfocado y ser accesible a través de la navegación secuencial del teclado, pero su orden relativo es definido por convención de la plataforma.
- un _valor positivo_ significa que debe poder recoger el foco y alcanzable a través de la navegación secuencial del teclado; su orden relativo es definido por el valor del atributo: la secuencia sigue el aumento del número de **tabindex**. Si varios elementos comparten el mismo tabindex, su orden relativo sigue la posición relativa en el documento.
- Un elemento con valor 0, un valor inválido o sin valor de **tabindex**, debe de ser posicionado después de elementos con un **tabindex** postivo en el orden de navegación secuencial del teclado.

Puede consultar [este artículo](/en/Focus_management_in_HTML) para ver una explicación compresiva de la administración de la recepción de foco.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
