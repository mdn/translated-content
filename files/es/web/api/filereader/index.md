---
title: FileReader
slug: Web/API/FileReader
---

{{ APIRef("File API") }}

## Sumario

El objeto FileReader permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el cliente de forma asíncrona, usando los objetos {{domxref("File")}} o {{domxref("Blob")}} dependiendo de los datos que se pretenden leer.

El objeto File puede ser obtenido desde un objeto {{domxref("FileList")}} devuelto como resultado de la selección de archivos por parte del usuario en un elemento {{HTMLElement("input")}}, desde el objeto [`DataTransfer`](/es/docs/Web/API/DataTransfer) producido por una operación de arrastre (drag and drop) o desde la API mozGetAsFile () en un {{domxref("HTMLCanvasElement")}}.

## Constructor

```
FileReader FileReader();
```

Mira el artículo _[Using files from web applications](/es/docs/Using_files_from_web_applications)_ para más detalles y ejemplos.

## Propiedades

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : Un {{domxref("DOMError")}} que representa el error que ocurrió al momento de leer el archivo.
- {{domxref("FileReader.readyState")}} {{readonlyinline}}

  - : Devuelve un entero que indica el estado de FileReader. Puede ser uno de los siguientes:

    | `EMPTY`   | `0` | No ha sido leido ningún dato aún.         |
    | --------- | --- | ----------------------------------------- |
    | `LOADING` | `1` | La información está siendo leída.         |
    | `DONE`    | `2` | Se ha completado la solicitud de lectura. |

- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : El contenido del fichero. Esta propieda es válida solo cuando la propiedad FileReader.readyState es 2, es decir, cuando la lectura ha finalizado. El formato de la información depende de los métodos usados al iniciar la operación de lectura.

### Controladores de eventos

- {{domxref("FileReader.onabort")}}
  - : Un controlador para el evento [`abort`](/es/docs/Web/Reference/Events/abort). Este evento se activa cada vez que se interrumpe la operación de lectura.
- {{domxref("FileReader.onerror")}}
  - : Un controlador para el evento [`error`](/es/docs/Web/Reference/Events/error). Este evento se activa cada vez que la operación de lectura encuentra un error.
- {{domxref("FileReader.onload")}}
  - : Un controlador para el evento [`load`](/es/docs/Web/Reference/Events/load). Este evento se activa cada vez que la operación de lectura se ha completado satisfactoriamente.
- {{domxref("FileReader.onloadstart")}}
  - : Un controlador para el evento [`loadstart`](/es/docs/Web/Reference/Events/loadstart). Este evento se activa cada vez que comienza la lectura.
- {{domxref("FileReader.onloadend")}}
  - : Un controlador para el evento [`loadend`](/es/docs/Web/Reference/Events/loadend). Este evento se activa cada vez que la operación de lecura se ha completado (ya sea con éxito o fallo).
- {{domxref("FileReader.onprogress")}}
  - : Un controlador para el evento [`progress`](/es/docs/Web/Reference/Events/progress). Este evento se activa mientras se está leyendo el contenido del objeto {{domxref("Blob")}}.

> **Nota:** Nota: Como `FileReader` hereda de {{domxref("EventTarget")}}, todos esos eventos también pueden ser escuchados usando el método {{domxref("EventTarget.addEventListener()","addEventListener")}}.

## Métodos

- {{domxref("FileReader.abort()")}}
  - : Interrumpe la operación de lectura. A su regreso `readyState` será `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }} especificado, una vez terminada, el atributo `result` contiene un {{domxref("ArrayBuffer")}} representando los datos del fichero.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }}, una vez terminada, el atributo `result` contiene los datos binarios en bruto del archivo como una cadena.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }}, una vez terminada, el atributo `result` contiene un `data:` URL que representa los datos del fichero.
- {{domxref("FileReader.readAsText()")}}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }}, una vez terminada, el atributo `result` contiene el contenido del fichero como una cadena de texto.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Usando archivos desde aplicaciónes web](/en/Using_files_from_web_applications)
- {{ domxref("File") }}
- {{ domxref("Blob") }}
