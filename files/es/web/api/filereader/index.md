---
title: FileReader
slug: Web/API/FileReader
translation_of: Web/API/FileReader
---
{{ APIRef("File API") }}

## Sumario

El objeto FileReader permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el cliente de forma asíncrona, usando los objetos {{domxref("File")}} o {{domxref("Blob")}} dependiendo de los datos que se pretenden leer.

El objeto File puede ser obtenido desde un objeto {{domxref("FileList")}} devuelto como resultado de la selección de archivos por parte del usuario en un elemento {{HTMLElement("input")}}, desde el objeto [`DataTransfer `](/es/docs/Web/API/DataTransfer)`producido por una operación de arrastre (drag and drop) o `desde la API mozGetAsFile () en un {{domxref("HTMLCanvasElement")}}.

## Constructor

    FileReader FileReader();

Mira el artículo _[Using files from web applications](/es/docs/Using_files_from_web_applications)_ para más detalles y ejemplos.

## Propiedades

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : Un {{domxref("DOMError")}} que representa el error que ocurrió al momento de leer el archivo.
- {{domxref("FileReader.readyState")}} {{readonlyinline}}
  - | : Devuelve un entero que indica el estado de FileReader. Puede ser uno de los siguientes: | `EMPTY` | `0`                                       | No ha sido leido ningún dato aún. |
    | ----------------------------------------------------------------------------------------- | ------- | ----------------------------------------- | --------------------------------- |
    | `LOADING`                                                                                 | `1`     | La información está siendo leída.         |
    | `DONE`                                                                                    | `2`     | Se ha completado la solicitud de lectura. |
- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : El contenido del fichero. Esta propieda es válida solo cuando la propiedad FileReader.readyState es 2, es decir, cuando la lectura ha finalizado. El formato de la información depende de los métodos usados al iniciar la operación de lectura.

### Controladores de eventos

- {{domxref("FileReader.onabort")}}
  - : Un controlador para el evento {{event("abort")}}. Este evento se activa cada vez que se interrumpe la operación de lectura.
- {{domxref("FileReader.onerror")}}
  - : Un controlador para el evento {{event("error")}}. Este evento se activa cada vez que la operación de lectura encuentra un error.
- {{domxref("FileReader.onload")}}
  - : Un controlador para el evento {{event("load")}}. Este evento se activa cada vez que la operación de lectura se ha completado satisfactoriamente.
- {{domxref("FileReader.onloadstart")}}
  - : Un controlador para el evento {{event("loadstart")}}. Este evento se activa cada vez que comienza la lectura.
- {{domxref("FileReader.onloadend")}}
  - : Un controlador para el evento {{event("loadend")}}. Este evento se activa cada vez que la operación de lecura se ha completado (ya sea con éxito o fallo).
- {{domxref("FileReader.onprogress")}}
  - : Un controlador para el evento {{event("progress")}}. Este evento se activa mientras se está leyendo el contenido del objeto {{domxref("Blob")}}.

> **Nota:** Como `FileReader` hereda de {{domxref("EventTarget")}}, todos esos eventos también pueden ser escuchados usando el método {{domxref("EventTarget.addEventListener()","addEventListener")}}.

## Métodos

- {{domxref("FileReader.abort()")}}
  - : Interrumpe la operación de lectura. A su regreso `readyState` será `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}} {{ gecko_minversion_inline("7.0") }}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }} especificado, una vez terminada, el atributo `result `contiene un {{domxref("ArrayBuffer")}} representando los datos del fichero.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }}, una vez terminada, el atributo `result` contiene los datos binarios en bruto del archivo como una cadena.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }}, una vez terminada, el atributo `result` contiene un `data:` URL que representa los datos del fichero.
- {{domxref("FileReader.readAsText()")}}
  - : Comienza la lectura del contenido del objeto {{ domxref("Blob") }}, una vez terminada, el atributo `result` contiene el contenido del fichero como una cadena de texto.

## Especificaciones

| Especificación                                                                   | Estado                       | Comentario          |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('File API','#FileReader-interface','FileReader')}} | {{Spec2('File API')}} | Definición inicial. |

## Soporte en los navegadores

{{Compat("api.FileReader")}}

## See also

- [Usando archivos desde aplicaciónes web](/en/Using_files_from_web_applications "en/Using files from web applications")
- {{ domxref("File") }}
- {{ domxref("Blob") }}
