---
title: Plantilla de página de método estático de JavaScript
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar_
>
> ---
>
> **Front matter de la página:**
>
> El front matter que aparece en la parte superior de la página se usa para definir los "metadatos de la página". Debes actualizar los valores según corresponda para el método en cuestión.
>
> ```md
> ---
> title: Constructor.nameOfTheMethod()
> short-title: nameOfTheMethod()
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod
> page-type: javascript-static-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor.nameOfTheMethod
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Formatéalo como `Constructor.nameOfTheMethod()`. Por ejemplo, el método [`from()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from) de la clase [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) tiene un _title_ de `Array.from()`.
> - **short-title**
>   - : Un título corto que se usa en las rutas de navegación y en las barras laterales. Formatéalo como `nameOfTheMethod()`. Por ejemplo, el método [`from()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from) tiene un _short-title_ de `from()`.
> - **slug**
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`. Esto se formateará como `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod`. Ten en cuenta que el nombre del método en el slug omite los paréntesis (termina en `nameOfTheMethod` y no en `nameOfTheMethod()`).
> - **page-type**
>   - : La clave `page-type` para los métodos estáticos de JavaScript es `javascript-static-method`.
> - **status**
>   - : Marcadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad con navegadores de la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#cómo_se_agregan_o_actualizan_los_estados_de_las_características).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `javascript.builtins.Constructor.nameOfTheMethod` con la cadena de consulta del método en el [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas utiliza automáticamente esta clave para rellenar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero debas crear o actualizar una entrada para el método en nuestro [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data), y que la entrada de la API deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Es `jsref` para las páginas de métodos estáticos de JavaScript.
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
> No proporciones las macros de encabezado de estado manualmente. Consulta la sección [Cómo se agregan o actualizan los estados de las características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#cómo_se_agregan_o_actualizan_los_estados_de_las_características) para añadir estos estados a la página.
>
> A continuación de este bloque de notas se muestran ejemplos de los banners **Experimental** y **No estándar**.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

> [!NOTE]
> Recuerda el principio más importante para escribir páginas de referencia de JavaScript coherentes: **¡fíjate en lo que ya existe!** Muchas páginas relacionadas tienen estructuras coherentes que van más allá de lo que exige esta plantilla. Por ejemplo, todos los manejadores de proxy, la mayoría de los métodos de array, etc. Empieza por buscar documentación existente de API similares y copia su estructura.

{{SeeCompatTable}}{{Non-standard_Header}}

El método estático **`Constructor.nameOfTheMethod()`** hace algo. Idealmente, esto debería ser una o dos oraciones cortas. Mantén este texto sincronizado con la página principal del constructor; por ejemplo, la página principal debería contener líneas como estas:

```md
- \{{jsxref("Constructor.nameOfTheMethod()")}}
  - : Hace algo.
```

## Sintaxis

Completa un cuadro de sintaxis siguiendo las indicaciones de nuestro artículo sobre [secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```js-nolint
Constructor.nameOfTheMethod(parameter1)
Constructor.nameOfTheMethod(parameter1, parameter2)
```

### Parámetros

- `parameter1`
  - : Incluye aquí una breve descripción del parámetro y de lo que hace. Incluye un término y una definición para cada parámetro. Si el parámetro no es opcional, elimina la llamada a la macro \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : etc.

> [!NOTE]
> Esta sección es obligatoria. Si no hay parámetros, escribe "Ninguno." en lugar de la lista de definiciones.

### Valor de retorno

Incluye una descripción del valor de retorno del método, con su tipo de dato y lo que representa. Por ejemplo: "Un {{jsxref("Number")}} que representa algo."

Si el método no devuelve nada, simplemente escribe "Ninguno ({{jsxref('undefined')}}).".

Si el método devuelve una promesa, indica si ya está cumplida o si se cumple de forma asíncrona, y cuál es el valor de cumplimiento. Las promesas rechazadas van en la sección "Excepciones".

### Excepciones

- {{jsxref("TypeError")}}
  - : Se lanza en uno de los siguientes casos:
    - Condición 1.
    - Condición 2.
    - etc.
- {{jsxref("RangeError")}}
  - : Se lanza si...

Sé lo más exhaustivo posible. En general, no enumeres las excepciones que pueden lanzarse al invocar código del usuario, como ejecutar getters o hacer conversiones de tipo. No enumeres las excepciones por tipos incompatibles, como pasar un símbolo a un parámetro que espera una cadena o pasar algo que no es una función como callback.

## Descripción

La mayor parte de la descripción del método debe ir aquí. Sé lo más exhaustivo posible. Si hay muchas páginas que comparten la misma descripción, considera añadir una sección nueva a la página principal de la clase y enlazarla desde aquí. Por ejemplo, [Métodos de array y ranuras vacías](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) se enlaza desde todas las páginas de métodos de array.

Quien lea debe poder entender la API por completo con esta sección, sin leer la sección de ejemplos de abajo. Los ejemplos que se presenten en esta sección, si hacen falta, deben ser concisos y no tienen que ser casos del mundo real.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que lo identifique. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado. El primer ejemplo puede llamarse "Uso de nameOfTheMethod()".

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el método actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- [Polyfill de `Constructor.nameOfTheMethod` en `core-js`](https://core-js.io/docs/)
- [Polyfill de `Constructor.nameOfTheMethod` de es-shims](https://www.npmjs.com/package/es-aggregate-error)
- enlace1
- enlace2
- enlace_externo (año)
