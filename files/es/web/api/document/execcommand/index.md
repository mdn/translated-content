---
title: Document.execCommand()
slug: Web/API/Document/execCommand
---

{{ApiRef("DOM")}}{{ Deprecated_header() }}

## Resumen

Cuando un documento HTML se ha cambiado a `designMode`, el objeto de documento expone el método `execCommand` lo que permite ejecutar comandos para manipular el contenido de la región editable. La mayoría de los comandos afectan a la selección de documento (negrita, cursiva, etc.), mientras que otros insertar nuevos elementos (añadiendo un enlace) o afectan a toda una línea (sangría). Al usar `contentEditable`, la llamada a `execCommand` afectará el elemento editable activo actual.

## Sintaxis

```js
execCommand(aCommandName, aShowDefaultUI, aValueArgument);
```

### Parámetros

- `aCommandName`
  - : Una {{domxref("DOMString")}} que especifica el nombre del comando a ejecutar. Vea [Comandos](#comandos) para una lista de posibles comandos.
- `aShowDefaultUI`
  - : Un {{jsxref("Boolean")}} que indica si la interfaz de usuario por defecto se debe mostrar. Esto no se ha implementado en Mozilla.
- `aValueArgument`
  - : Una {{domxref("DOMString")}} representando algunos comandos (como `insertImage`) requiere un argumento valor extra (url de la imagen). Pasar un argumento de `null` si no se necesita ningún argumento.

### Comandos

- backColor
  - : Cambia el color de fondo del documento. En el modo styleWithCss, afecta el color de fondo del bloque que contiene. Esto requiere una cadena con el valor del color de fondo que se pasa como un valor de argumento. (Internet Explorer utiliza esta opción para definir el color de fondo del texto.)
- bold
  - : Pone las negritas o las quita para la selección o en el punto de inserción. (Internet Explorer utiliza la etiqueta STRONG en lugar de B.)
- contentReadOnly
  - : Hace que el documento de contenido, ya sea de sólo lectura o editable. Esto requiere un booleano verdadero / falso que se pasa como un valor de argumento. (No es compatible con Internet Explorer.)
- copy
  - : Copia la selección actual en el portapapeles. Capacidad del Portapapeles debe estar habilitado en el archivo de preferencias user.js. Vea
- createLink
  - : Crea un vínculo de anclaje a partir de la selección, sólo si hay una selección. Esto requiere la cadena HREF URI que se pasa como un argumento de valor. El URI debe contener al menos un solo carácter, el cual puede ser un espacio en blanco. (Internet Explorer creará un enlace con un nulo valor URI.)
- cut
  - : Corta la selección y lo copia en el portapapeles actual. Capacidad del Portapapeles debe estar habilitado en el archivo de preferencias user.js. Vea
- decreaseFontSize
  - : Añade una etiqueta SMALL alrededor de la selección o en el punto de inserción. (No es compatible con Internet Explorer.)
- delete
  - : Elimina la selección actual.
- enableInlineTableEditing
  - : Activa o desactiva la fila de la tabla y los controles de inserción y supresión de columna. (No es compatible con Internet Explorer.)
- enableObjectResizing
  - : Activa o desactiva los controladores de tamaño en imágenes y otros objetos de tamaño variable. (No es compatible con Internet Explorer.)
- fontName
  - : Cambia el nombre de la fuente para la selección o en el punto de inserción. Esto requiere una cadena de nombre de la fuente ("Arial", por ejemplo) que se pasa como un valor de argumento.
- fontSize
  - : Cambia el tamaño de fuente para la selección o en el punto de inserción. Esto requiere un tamaño de fuente HTML (1-7) que se pasa como un valor de argumento.
- foreColor
  - : Cambia un color de fuente para la selección o en el punto de inserción. Esto requiere una cadena de valor de color que se pasa como un valor de argumento.
- formatBlock
  - : Añade una etiqueta HTML de estilo bloque alrededor de la línea que contiene la selección actual, reemplazando el elemento de bloque que contiene la línea si existe (en Firefox, BLOCKQUOTE es la excepción - que envolverá cualquier elemento de bloque que contiene). Requiere una cadena de etiqueta-nombre que se pasa como un argumento de valor. Prácticamente todas las etiquetas de estilo bloque se pueden utilizar (por ejemplo. "H1", "P", "DL", "BLOCKQUOTE"). (Internet Explorer sólo admite etiquetas de título H1 - H6, dirección y PRE, que también debe incluir los delimitadores de etiquetas <>, como "\<H1>".)
- forwardDelete
  - : Elimina el character delante de la posición del cursor [cursor](http://en.wikipedia.org/wiki/Cursor_%28computers%29). Es lo mismo que pulsar la tecla suprimir.
- heading
  - : Añade una etiqueta de encabezado en torno a una selección, o la línea en el punto de inserción. Requiere la cadena de nombre de etiqueta que se pasa como un valor de argumento (es decir, "H1", "H6"). (No es compatible con Internet Explorer y Safari.)
- hiliteColor
  - : Cambia el color de fondo para la selección o el punto de inserción. Requiere una cadena de valores de color que se pasa como un valor de argumento. UseCSS debe estar encendido para que esto funcione. (No es compatible con Internet Explorer.)
- increaseFontSize
  - : Añade una etiqueta BIG alrededor de la selección o en el punto de inserción. (No es compatible con Internet Explorer.)
- indent
  - : Indenta la línea que contiene el punto de selección o inserción. En Firefox, si la selección abarca varias líneas en los diferentes niveles de indentación serán indentadas sólo las líneas menos indentadas en la selección.
- insertBrOnReturn
  - : Controla si la tecla Intro inserta una etiqueta br o divide el elemento de bloque actual en dos. (No es compatible con Internet Explorer.)
- insertHorizontalRule
  - : Inserta una regla horizontal en el punto de inserción (borra la selección).
- insertHTML
  - : Inserta una cadena HTML en el punto de inserción (borra la selección). Requiere una cadena HTML válido que se ha pasado como un valor de argumento. (No es compatible con Internet Explorer.)
- insertImage
  - : Inserta una imagen en el punto de inserción (borra la selección). Requiere la cadena de imagen SRC URI que se pasa como un argumento de valor. El URI debe contener al menos un solo carácter, que puede ser un espacio en blanco. (Internet Explorer creará un enlace con un nulo valor URI.)
- insertOrderedList
  - : Crea una lista ordenada con números para la selección o en el punto de inserción.
- insertUnorderedList
  - : Crea una lista desordenada con viñetas para la selección o en el punto de inserción.
- insertParagraph
  - : Inserta un párrafo en torno a la selección o la línea actual. (Internet Explorer inserta un párrafo en el punto de inserción y elimina la selección.)
- insertText
  - : Inserta el texto plano expedido en el punto de inserción (borra la selección).
- italic
  - : Alterna cursiva para la selección o el punto de inserción. (Internet Explorer utiliza la etiqueta de EM en lugar de I.)
- justifyCenter
  - : Centra el punto de selección o inserción.
- justifyFull
  - : Justifica el punto de selección o inserción.
- justifyLeft
  - : Justifica la selección o inserción punto a la izquierda.
- justifyRight
  - : Justifica la selección o el punto de inserción a la derecha.
- outdent
  - : Anula la sangría de la línea que contiene la selección o el punto de inserción.
- paste
  - : Pega el contenido del portapapeles en el punto de inserción (reemplaza la selección actual). Capacidad del Portapapeles debe estar habilitado en el archivo de preferencias user.js. Ver
- redo
  - : Rehace el anterior comando deshecho.
- removeFormat
  - : Quita todo el formato de la selección actual.
- selectAll
  - : Selecciona todo el contenido de la región editable.
- strikeThrough
  - : Alterna tachado para la selección o el punto de inserción.
- subscript
  - : Alterna subíndice para la selección o el punto de inserción.
- superscript
  - : Alterna exponente para la selección o el punto de inserción.
- underline
  - : Alterna subrayado para la selección o el punto de inserción.
- undo
  - : Deshace el último comando ejecutado.
- unlink
  - : Elimina la etiqueta de ancla de un enlace ancla seleccionado.
- useCSS {{ Deprecated_inline() }}
  - : Alterna el uso de etiquetas HTML o CSS para el marcado generado. Requiere un booleano verdadero / falso como valor del argumento. NOTA: Este argumento es lógicamente hacia atrás (es decir, si se usa falso a usar CSS, entonces es verdadero a usar HTML). (No compatible con Internet Explorer.) Esto ha quedado obsoleto; utilice el comando _styleWithCSS_ en su lugar.
- styleWithCSS
  - : Reemplaza el comando _useCSS_; el argumento funciona como se esperaba, es decir, si es verdadero modifica / genera atributos de estilo en el marcado, falso genera elementos de formato.

## Ejemplo

(Este artículo está actualmente incompleto y carece de un ejemplo.)

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Vea también

- {{domxref("document.contentEditable")}}
- {{domxref("document.designMode")}}
- [Edición de texto enriquecido en Mozilla](/es/docs/Rich-Text_Editing_in_Mozilla)
