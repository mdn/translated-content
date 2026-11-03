---
title: Plantilla de página de operador de JavaScript
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_operator_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar_
>
> ---
>
> **Front matter de la página:**
>
> El front matter que aparece en la parte superior de la página se usa para definir los "metadatos de la página". Debes actualizar los valores según corresponda para el operador en cuestión.
>
> ```md
> ---
> title: Operator (symbol)
> slug: Web/JavaScript/Reference/Operators/Operator
> page-type: javascript-operator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.operators.operator
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Formatéalo como `Operator (symbol)`. Por ejemplo, el operador [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition) tiene un _title_ de `Adición (+)`.
> - **slug**
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`. Debe formatearse como `Web/JavaScript/Reference/Operators/Operator`.
> - **page-type**
>   - : La clave `page-type` para los operadores de JavaScript es `javascript-operator`.
> - **status**
>   - : Marcadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad con navegadores de la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `javascript.operators.operator` con la cadena de consulta del operador en el [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas utiliza automáticamente esta clave para rellenar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero debas crear o actualizar una entrada para el operador en nuestro [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data), y que la entrada de la API deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Es `jssidebar` para las páginas de operadores de JavaScript.
>     Consulta [Estructuras de página: barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> **Macros al inicio de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (justo debajo del front matter de la página).
>
> Estas macros las añade automáticamente la cadena de herramientas (no es necesario añadirlas ni eliminarlas):
>
> - `\{{SeeCompatTable}}` — esto genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental y la tecnología está oculta tras una preferencia en Firefox, también debes completar una entrada para ella en la página [Funciones experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Non-standard_Header}}` — esto genera un banner de **No estándar** que indica que la característica no forma parte de ninguna especificación.
>
> No proporciones las macros de encabezado de estado manualmente. Consulta la sección [Cómo se agregan o actualizan los estados de las características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características) para añadir estos estados a la página.
>
> A continuación de este bloque de notas se muestran ejemplos de los banners **Experimental** y **No estándar**.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

> [!NOTE]
> Recuerda el principio más importante para escribir páginas de referencia de JavaScript coherentes: **¡fíjate en lo que ya existe!** Muchas páginas relacionadas tienen estructuras coherentes que van más allá de lo que exige esta plantilla. Por ejemplo, todos los manejadores de proxy, la mayoría de los métodos de array, etc. Empieza por buscar documentación existente de API similares y copia su estructura.

{{SeeCompatTable}}{{Non-standard_Header}}

El operador **operador (`símbolo`)** hace algo. Idealmente, esto debería ser una o dos oraciones cortas. En general, no escribas más de un párrafo de unas pocas oraciones: los detalles importantes van en la descripción.

Escribe un [ejemplo interactivo](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#ejemplos_interactivos) que muestre los aspectos importantes del operador.

{{InteractiveExample("JavaScript Demo: Operator (symbol) operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4
```

## Sintaxis

Completa un cuadro de sintaxis siguiendo las indicaciones de nuestro artículo sobre [secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```js-nolint
x operator y
```

- `x`
  - : Describe el operando izquierdo como una expresión, incluidos los tipos a los que puede evaluarse.
- `y`
  - : Describe el operando derecho como una expresión, incluidos los tipos a los que puede evaluarse.

## Descripción

La mayor parte de la descripción del operador debe ir aquí. Describe a qué se evalúa la expresión, cualquier coerción de tipos y las condiciones en las que lanza una excepción. Sé lo más exhaustivo posible. Quien lea debe poder entender la API por completo con esta sección, sin leer la sección de ejemplos de abajo. Los ejemplos que se presenten en esta sección, si hacen falta, deben ser concisos y no tienen que ser casos del mundo real.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que lo identifique. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado. El primer ejemplo puede llamarse "Uso del operador [nombre del operador]".

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el operador actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- enlace1
- enlace2
- enlace_externo (año)
