---
title: Plantilla de página de error de JavaScript
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_error_page_template
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
> El front matter que aparece en la parte superior de la página se usa para definir los "metadatos de la página". Debes actualizar los valores según corresponda para el error en cuestión.
>
> ```md
> ---
> title: "TypeOfError: message of error"
> slug: Web/JavaScript/Reference/Errors/Message_of_error
> page-type: javascript-error
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Formatéalo como `TypeOfError: message of error`. Por ejemplo, el error [SyntaxError: await is only valid in async functions, async generators and modules](/es/docs/Web/JavaScript/Reference/Errors/Bad_await). El mensaje de error debe reflejar el mensaje de error de Firefox. Si el mensaje de error contiene un marcador de posición, como un identificador, usa un nombre arbitrario como `x`. No uses `{0}` como en el código fuente de Firefox.
> - **slug**
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`. Debe formatearse como `Web/JavaScript/Reference/Errors/Message_of_error`. Normalmente se puede formar sustituyendo los espacios del título por guiones bajos, pero a veces el mensaje de error es demasiado largo; en ese caso, usa tu criterio y acórtalo. También se acepta adaptar el código de error de Firefox, como `JSMSG_INCOMPATIBLE_PROTO` a `Incompatible_proto`, aunque es menos recomendable.
> - **page-type**
>   - : La clave `page-type` para los errores de JavaScript es `javascript-error`.
> - **sidebar**
>   - : Es `jssidebar` para las páginas de errores de JavaScript.
>     Consulta [Estructuras de página: barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> Ten en cuenta que la información de compatibilidad con navegadores y de especificaciones no es relevante para las páginas de errores.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

> [!NOTE]
> Recuerda el principio más importante para escribir páginas de referencia de JavaScript coherentes: **¡fíjate en lo que ya existe!** Muchas páginas relacionadas tienen estructuras coherentes que van más allá de lo que exige esta plantilla. Por ejemplo, todos los manejadores de proxy, la mayoría de los métodos de array, etc. Empieza por buscar documentación existente de API similares y copia su estructura.

La excepción de JavaScript "message of error" ocurre cuando...

## Mensaje

```plain
TypeOfError: message of error as in V8 (V8-based)
TypeOfError: message of error as in SM (Firefox)
TypeOfError: message of error as in JSC (Safari)
```

Si dos motores comparten el mismo mensaje de error, enuméralos en el siguiente orden:

- La primera línea siempre es lo que muestra V8. Se pueden indicar otros motores entre paréntesis, como "(V8-based & Safari)".
- La segunda línea siempre es lo que muestra Firefox, salvo que ya esté incluido en la primera línea. En ese caso, la segunda línea es lo que muestra Safari.

Si un mensaje de error de Firefox corresponde a varios mensajes de error en otros motores, enumera todos los mensajes de error correspondientes de los otros motores en líneas consecutivas.

```plain
TypeOfError: message of error as in V8 1 (V8-based)
TypeOfError: message of error as in V8 2 (V8-based)
TypeOfError: message of error as in SM (Firefox)
TypeOfError: message of error as in JSC 1 (Safari)
TypeOfError: message of error as in JSC 2 (Safari)
```

Si hay dos mensajes de error muy parecidos en Firefox, también puedes documentar ambos en la misma página de error. En ese caso, pon cada mensaje de error de Firefox en su propio grupo:

```plain
TypeOfError: message of error as in V8 1 (V8-based)
TypeOfError: message of error as in SM 1 (Firefox)
TypeOfError: message of error as in JSC 1 (Safari)

TypeOfError: message of error as in V8 2 (V8-based)
TypeOfError: message of error as in SM 2 (Firefox)
TypeOfError: message of error as in JSC 2 (Safari)
```

En esencia, todas las referencias de errores se organizan según los mensajes de error de Firefox; los mensajes de error de otros motores se incluyen solo a título informativo.

## Tipo de error

\\{{jsxref("TypeOfError")}}.

## ¿Qué salió mal?

Uno o dos párrafos que expliquen qué podrías estar haciendo mal, por qué JavaScript considera que es una mala idea y algunas posibles soluciones.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

A diferencia de otras páginas, en las páginas de errores los encabezados H3 no son estrictamente necesarios. A veces solo hay un escenario en el que puede ocurrir el error; en ese caso, puedes omitir el encabezado H3 y explicar en prosa lo que está pasando. Usa encabezados cuando haya varias causas posibles del error. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

Ten en cuenta que, para los errores, suele ser buena idea usar `example-bad` y `example-good`. Por ejemplo:

Esto es lo que podrías estar haciendo:

```js example-bad
// Tu código incorrecto aquí
```

Considera cambiarlo por:

```js example-good
// Tu código corregido aquí
```

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el error actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- enlace1
- enlace2
- enlace_externo (año)
