---
title: Constructor RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
---

{{JSRef}}

El constructor **`RegExp`** crea un objeto de expresión regular para hacer coincidir el texto con un patrón.

Para ver la introducción a las expresiones regulares, lee el {{JSxRef("../Guide/Regular_Expressions", "capítulo sobre expresiones regulares")}} en la {{JSxRef("../Guide", "Guía de JavaScript")}}.

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Sintaxis

Son posibles las notaciones literal, constructor y de fábrica:

```
/patrón/banderas
new RegExp(patrón[, banderas])
RegExp(patrón[, banderas])
```

### Parámetros

- `patrón`

  - : El texto de la expresión regular.

    A partir de ES5, también puede ser otro objeto o `RegExp` literal (solo para las dos notaciones del constructor RegExp). Los patrones pueden incluir {{JSxRef("../Guide/Regular_Expressions", "caracteres especiales", "#Usar_caracteres_especiales")}} para que coincidan con un rango de valores más amplio que el de una cadena literal.

- `banderas`

  - : Si se especifica, `banderas` es una cadena que contiene las banderas para agregar.

    Alternativamente, si se proporciona un objeto para el patrón, la cadena `banderas` reemplazará cualquiera de las banderas de ese objeto (y `lastIndex` se restablecerá a `0`) (a partir de ES2015).

    Si no se especifica `banderas` y se proporciona un objeto de expresiones regulares, las banderas de ese objeto (y el valor de `lastIndex`) se copiarán.

    `banderas` puede contener cualquier combinación de los siguientes caracteres:

    - `g` (coincidencia global)
      - : Encuentra todas las coincidencias en lugar de detenerse después de la primera.
    - `i` (ignorar mayúsculas y minúsculas)
      - : Si el indicador `u` también está habilitado, utiliza el plegado de mayúsculas y minúsculas Unicode.
    - `m` (multilínea)
      - : Trata los caracteres iniciales y finales (`^` y `$`) como si estuvieran trabajando en varias líneas. En otras palabras, hace coincidir el principio o el final de _cada_ línea (delimitada por `\n` o `\r`), no solo al principio o final de toda la cadena de entrada.
    - `s` («_dotAll_» o punto para todo)
      - : Permite que el punto (`.` coincida con nuevas líneas o no.
    - `u` (unicode)
      - : Trata el `patrón` como una secuencia de puntos de código Unicode. (Consulta también [Cadenas binarias](/es/docs/Web/API/DOMString/Binary)).
    - `y` (sticky)
      - : Coincide solo con el índice indicado por la propiedad `lastIndex` de esta expresión regular en la cadena destino. No intenta coincidir con índices posteriores.

## Ejemplos

### Notación literal y constructor

Hay dos formas de crear un objeto `RegExp`: una _notación literal_ y un _constructor_.

- Los parámetros de **la notación literal** se encierran entre barras y no utilizan comillas.
- Los parámetros de **la función constructora** no se encierran entre barras, pero utilizan comillas.

Las siguientes tres expresiones crean la misma expresión regular:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // notación literal
new RegExp("ab+c", "i"); // constructor
```

La notación literal da como resultado la compilación de la expresión regular cuando se evalúa la expresión. Utiliza la notación literal cuando la expresión regular permanecerá constante. Por ejemplo, si usas notación literal para construir una expresión regular usada en un bucle, la expresión regular no se volverá a compilar en cada iteración.

El constructor del objeto de expresión regular, por ejemplo, `new RegExp('ab+c')`, da como resultado la compilación en tiempo de ejecución de la expresión regular. Usa la función constructora cuando sepas que el patrón de la expresión regular cambiará, o no conoces el patrón y lo obtienes de otra fuente, como la entrada del usuario.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- El capítulo de {{JSxRef("../Guide/Regular_Expressions", "Expresiones regulares")}} en la {{JSxRef("../Guide", "Guía de JavaScript")}}
- {{JSxRef("String.prototype.match()")}}
- {{JSxRef("String.prototype.replace()")}}
