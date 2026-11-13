---
title: Plantilla de página de clase de JavaScript
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_class_page_template
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
> El front matter que aparece en la parte superior de la página se usa para definir los "metadatos de la página". Debes actualizar los valores según corresponda para la clase en cuestión.
>
> ```md
> ---
> title: Constructor
> slug: Web/JavaScript/Reference/Global_Objects/Constructor
> page-type: javascript-class
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Formatéalo como `Constructor`. Por ejemplo, la clase [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) tiene un _title_ de `Array`.
> - **slug**
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`. Esto se formateará como `Web/JavaScript/Reference/Global_Objects/Constructor`.
> - **page-type**
>   - : La clave `page-type` para las clases de JavaScript es `javascript-class`.
> - **status**
>   - : Marcadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad con navegadores de la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#cómo_se_agregan_o_actualizan_los_estados_de_las_características).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `javascript.builtins.Constructor` con la cadena de consulta de la clase en el [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas utiliza automáticamente esta clave para rellenar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero debas crear o actualizar una entrada para la clase en nuestro [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data), y que la entrada de la API deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Es `jsref` para las páginas de clases de JavaScript.
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

El objeto **`Constructor`** representa algo. Idealmente, esto debería ser una o dos oraciones cortas. En general, no escribas más de un párrafo de unas pocas oraciones: los detalles importantes van en la descripción.

(Si corresponde) `Constructor` es una subclase de \\{{jsxref("BaseConstructor")}}.

Escribe un [ejemplo interactivo](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#ejemplos_interactivos) que muestre los aspectos importantes de la clase. Esto debería ser poco frecuente: lo normal es tener ejemplos interactivos para el constructor y para cada método. Escribe un ejemplo interactivo para la clase solo si muestra la clase en su conjunto, como el flujo completo de crear, leer, actualizar y eliminar (CRUD) con un {{jsxref("Map")}}.

{{InteractiveExample("JavaScript Demo: Constructor")}}

```js interactive-example
const obj = new Constructor();
console.log(obj.something);
// Expected output: 42
```

## Descripción

La descripción de una clase debe incluir lo siguiente:

- Información de contexto sobre por qué la API es útil
- Conceptos fundamentales que las subpáginas podrían enlazar
- Una visión general de las formas de interactuar con esta API
- Advertencias

Usa encabezados H3 según corresponda.

## Constructor

- \\{{jsxref("Constructor/Constructor", "Constructor()")}}
  - : Crea un nuevo objeto `Constructor`.

## Propiedades estáticas

- \\{{jsxref("Constructor.nameOfTheProperty")}}
  - : Contiene algo.

## Métodos estáticos

- \\{{jsxref("Constructor.nameOfTheMethod()")}}
  - : Hace algo.

## Propiedades de instancia

Estas propiedades están definidas en `Constructor.prototype` y las comparten todas las instancias de `Constructor`.

- {{jsxref("Object/constructor", "Constructor.prototype.constructor")}}
  - : La función constructora que creó el objeto de instancia. Para las instancias de `Constructor`, el valor inicial es el constructor \\{{jsxref("Constructor/Constructor", "Constructor")}}.
- \\{{jsxref("Constructor.prototype.nameOfTheProperty")}}
  - : Devuelve algo.
- `Constructor.prototype[Symbol.toStringTag]`
  - : El valor inicial de la propiedad [`Symbol.toStringTag`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) es la cadena `"Constructor"`. Esta propiedad se usa en {{jsxref("Object.prototype.toString()")}}.

Estas propiedades son propiedades propias de cada instancia de `Constructor`.

- \\{{jsxref("Constructor/nameOfTheProperty", "nameOfTheProperty")}}
  - : Contiene algo.

## Métodos de instancia

- \\{{jsxref("Constructor.prototype.nameOfTheMethod()")}}
  - : Devuelve algo.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que lo identifique. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado. El primer ejemplo puede llamarse "Uso de Constructor".

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la clase actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- [Polyfill de `Constructor` en `core-js`](https://core-js.io/docs/)
- [Polyfill de `Constructor` de es-shims](https://www.npmjs.com/package/es-aggregate-error)
- enlace1
- enlace2
- enlace_externo (año)
