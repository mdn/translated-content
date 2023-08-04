---
title: File
slug: Web/API/File
---

{{APIRef }}

La interfaz **`File`** provee información acerca de los archivos y permite que el código JavaScript en una página web tenga acceso a su contenido.

Los objetos `File` son generalmente recuperados a través de un objeto {{domxref("FileList")}} retornado como resultado de un usuario seleccionado archivos por medio de un elemento {{ HTMLElement("input") }} , desde las operaciones drag y drop de un objeto {{domxref("DataTransfer")}} , o desde la API `mozGetAsFile()` en un {{ domxref("HTMLCanvasElement") }}. En Gecko, desde código con privilegios es posible crear objetos `File` representando cualquier archivo local sin esperar la interacción del usuario (ver [Implementation notes](#implementation_notes) para más información.)

Un objeto `File` es una especie específica de {{DOMxRef("Blob")}}, y puede ser utilizada en cualquier contexto que un Blob puede ser usado. En particular, {{DOMxRef("FileReader")}}, {{DOMxRef("URL.createObjectURL()")}}, {{DOMxRef("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, y {{DOMxRef("XMLHttpRequest", "", "send()")}} aceptan tanto `Blob`s y `File`s.

Ver [Utilizando archivos desde aplicaciones web (Using files from web applications)](/es/docs/Using_files_from_web_applications) para más información y ejemplos.

{{InheritanceDiagram}}

## Constructor

- {{domxref("File.File", "File()")}}
  - : Retorna un nuevo objeto de tipo `File`.

## Propiedades

- {{DOMxRef("File.lastModified")}}{{ReadOnlyInline}}
  - : Retorna el último tiempo que el archivo se modifico, en milisegundos desde la época de UNIX (1 de enero de 1970 a medianoche).
- {{DOMxRef("File.lastModifiedDate")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Retorna la última fecha (en un objeto {{JSxRef("Date")}}[`Date`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date)) de modificación del archivo referenciada por el objeto `File`.
- {{DOMxRef("File.name")}}{{ReadOnlyInline}}
  - : Retorna el nombre del archivo referenciada por el objeto `File`.
- {{DOMxRef("File.webkitRelativePath")}} {{Non-standard_Inline}}{{ReadOnlyInline}}

  - : Retorna la ruta relativa de la URL del {{DOMxRef("File")}}.

    `File` implementa {{DOMxRef("Blob")}}, así que también cuenta con las siguientes propiedades:

- {{DOMxRef("File.size")}}{{ReadOnlyInline}}
  - : Retorna el tamaño del archivo en bytes.
- {{DOMxRef("File.type")}}{{ReadOnlyInline}}
  - : Retorna el tipo [MIME](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types)del archivo.

## Métodos

_La interfaz `File` no define algún método, pero los hereda de la interfaz {{domxref("Blob")}}:_

- {{DOMxRef("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : Retorna un nuevo objeto `Blob` conteniendo la información en el rango especificado de bytes de la fuente `Blob`.
- {{DOMxRef("Blob.stream()")}}
  - : Transforma el archivo `File` en un {{DOMxRef("ReadableStream")}} que puede ser usado para leer el contenido de `File`.
- {{DOMxRef("Blob.text()")}}
  - : Transforma el archivo `File` en una corriente (_stream_) para leerse hasta completarse. Retorna una promesa que se resuelve con un {{DOMxRef("USVString")}} (texto).
- {{DOMxRef("Blob.arrayBuffer()")}}
  - : Transforma el archivo `File` en una corriente y leerlo hasta completarse. Devuelve una promesa que resuelve con un {{DOMxRef("ArrayBuffer")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando archivos desde aplicaciones web](/es/docs/Using_files_from_web_applications)
- [Usando la API DOM File en código chrome](/es/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
- {{domxref("FileReader")}}
