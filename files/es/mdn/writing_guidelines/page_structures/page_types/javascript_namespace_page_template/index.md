---
title: Plantilla de página de espacio de nombres de JavaScript
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_namespace_page_template
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
> El front matter que aparece en la parte superior de la página se usa para definir los "metadatos de la página". Debes actualizar los valores según corresponda para el espacio de nombres en cuestión.
>
> ```md
> ---
> title: Namespace
> slug: Web/JavaScript/Reference/Global_Objects/Namespace
> page-type: javascript-namespace
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Namespace
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Formatéalo como `Namespace`. Por ejemplo, el espacio de nombres [`Math`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math) tiene un _title_ de `Math`.
> - **slug**
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`. Esto se formateará como `Web/JavaScript/Reference/Global_Objects/Namespace`.
> - **page-type**
>   - : La clave `page-type` para los espacios de nombres de JavaScript es `javascript-namespace`.
> - **status**
>   - : Marcadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad con navegadores de la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#cómo_se_agregan_o_actualizan_los_estados_de_las_características).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `javascript.builtins.Namespace` con la cadena de consulta del espacio de nombres en el [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas utiliza automáticamente esta clave para rellenar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero debas crear o actualizar una entrada para el espacio de nombres en nuestro [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data), y que la entrada de la API deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Es `jsref` para las páginas de espacios de nombres de JavaScript.
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

El objeto de espacio de nombres **`Namespace`** contiene propiedades y métodos estáticos para hacer algo. Idealmente, esto debería ser una o dos oraciones cortas. En general, no escribas más de un párrafo de unas pocas oraciones: los detalles importantes van en la descripción.

Escribe un [ejemplo interactivo](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#ejemplos_interactivos) que muestre los aspectos importantes del espacio de nombres. Esto debería ser poco frecuente: lo normal es tener ejemplos interactivos para cada método y propiedad. Escribe un ejemplo interactivo para el espacio de nombres solo si muestra el espacio de nombres en su conjunto, como un ciclo completo de análisis y serialización con {{jsxref("JSON")}}.

{{InteractiveExample("JavaScript Demo: Namespace")}}

```js interactive-example
const data = Namespace.doSomething(1);
const result = Namespace.doSomethingElse(data);
console.log(result);
// Expected output: 42
```

## Descripción

Empieza siempre con el siguiente párrafo:

A diferencia de la mayoría de los objetos globales, `Namespace` no es un constructor. No puedes usarlo con el [operador `new`](/es/docs/Web/JavaScript/Reference/Operators/new) ni invocar el objeto `Namespace` como una función. Todas las propiedades y métodos de `Namespace` son estáticos (igual que los del objeto {{jsxref("Math")}}).

La descripción de un espacio de nombres debe incluir lo siguiente:

- Información de contexto sobre por qué la API es útil
- Conceptos fundamentales que las subpáginas podrían enlazar
- Una visión general de las formas de interactuar con esta API
- Advertencias

Usa encabezados H3 según corresponda.

## Propiedades estáticas

- \\{{jsxref("Namespace.nameOfTheProperty")}}
  - : Contiene algo.
- `Namespace[Symbol.toStringTag]`
  - : El valor inicial de la propiedad [`Symbol.toStringTag`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) es la cadena `"Namespace"`. Esta propiedad se usa en {{jsxref("Object.prototype.toString()")}}.

## Métodos estáticos

- \\{{jsxref("Namespace.nameOfTheMethod()")}}
  - : Hace algo.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que lo identifique. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado. El primer ejemplo puede llamarse "Uso de Namespace".

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el espacio de nombres actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- [Polyfill de `Namespace` en `core-js`](https://core-js.io/docs/)
- [Polyfill de `Namespace` de es-shims](https://www.npmjs.com/package/es-aggregate-error)
- enlace1
- enlace2
- enlace_externo (año)
