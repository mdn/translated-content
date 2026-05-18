---
title: Plantilla de página de módulo CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Comienza el contenido de la página con un párrafo introductorio que nombre el módulo y explique qué hace. Proporciona brevemente una visión general de las características definidas en la especificación y, si es relevante, describe cómo interactúan con características de especificaciones relacionadas. Esta descripción es una visión rápida, NO un tutorial o guía, así que mantenla breve.

## NombreDelModulo en acción

En esta sección, incluye un ejemplo utilizando `\{{EmbedLiveSample}}` (consulta [Ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) para más información) que ayude a demostrar la utilidad y el poder de las diversas propiedades proporcionadas por este módulo.
El propósito de esta sección es demostrar casos de uso y despertar el interés y la curiosidad de los lectores que están aprendiendo sobre este módulo. Mantén el código oculto a menos que sea esencial para comprender los casos de uso (por ejemplo, espacios de nombres o anidamiento).

Si es relevante, proporciona una breve descripción de cómo los lectores pueden interactuar con el ejemplo.

## Referencia

Crea las subsecciones pertinentes para enumerar las propiedades, funciones, tipos de datos relacionados, etc. La sección de referencia debe incluir únicamente las características introducidas en esa especificación concreta. Si una característica está en la especificación pero no está soportada, menciónala en un párrafo bajo el encabezado correspondiente. Las características relacionadas definidas en otras especificaciones van en "conceptos relacionados", y NO en esta sección.

### Propiedades

Una lista de todas las propiedades (abreviadas y completas) proporcionadas por el módulo que estén soportadas en al menos un navegador principal.

Añade un párrafo indicando las propiedades introducidas por el módulo que aún no están soportadas por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna propiedad.

### Reglas-at (@rules)

Una lista de las reglas-at de CSS proporcionadas por el módulo que estén soportadas en al menos un navegador principal.

Añade un párrafo indicando las reglas-at introducidas por el módulo que aún no están soportadas por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna regla-at.

### Funciones

Una lista de las funciones CSS proporcionadas por el módulo que estén soportadas en al menos un navegador principal.

Añade un párrafo indicando las funciones introducidas por el módulo que aún no están soportadas por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna función CSS.

### Tipos de datos

Una lista de los tipos de datos CSS proporcionados por el módulo que estén soportadas en al menos un navegador principal.

Añade un párrafo indicando los tipos de datos introducidos por el módulo que aún no están soportadas por ningún navegador, si las hay.

Omite esta sección si el módulo no define ningún tipo de datos.

### Eventos

Una lista de los eventos de API proporcionados por el módulo que estén soportados en al menos un navegador principal.

Añade un párrafo indicando los eventos introducidos por el módulo que aún no están soportados por ningún navegador, si las hay.

Omite esta sección si el módulo no define ningún evento.

### Interfaces

Una lista de las interfaces de API relacionadas proporcionadas por el módulo que estén soportadas en al menos un navegador principal.

Añade un párrafo indicando las interfaces introducidas por el módulo que aún no están soportadas por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna interfaz de API.

### Términos del glosario y definiciones

Enumera los términos del glosario relacionados y otros términos definidos dentro de las páginas de referencia enumeradas anteriormente. Omite esta sección si no hay nada relevante que incluir.

## Guías

Una lista de definiciones de las guías relacionadas dentro de la estructura del módulo, en orden de complejidad creciente, seguida de guías relacionadas de otros módulos. Solo incluye guías de MDN.

- EnlaceAGuia1
  - : Descripción de una frase de la guía.
- EnlaceAGuia2
  - : Descripción de una frase de la guía.

## Conceptos relacionados

Enumera todas las demás propiedades, tipos de datos, términos del glosario, etc., que estén relacionados con este módulo.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Ver también

Incluye enlaces a cualquier otra página de referencia y otro contenido que sea relevante pero que no encaje en las otras secciones. Si hay guías externas relevantes que valga la pena enlazar, colócalas al final de la lista (no bajo la sección "Guías", que está limitada a guías de MDN). Consulta la sección [Ver también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en nuestra _Guía de estilo de escritura_ para más consejos e instrucciones.

- enlace1
- enlace2
- enlace_externo (año)
