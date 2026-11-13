---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File API")}}{{AvailableInWorkers}}

La interfaz **`FileReader`** permite a las aplicaciones web leer de forma asíncrona el contenido de archivos (o búferes de datos sin procesar) almacenados en el equipo del usuario, usando objetos {{domxref("File")}} o {{domxref("Blob")}} para indicar el archivo o los datos que se van a leer.

Los objetos File se pueden obtener de un objeto {{domxref("FileList")}}, que se devuelve cuando el usuario selecciona archivos con el elemento `<input type="file">`, o del objeto {{domxref("DataTransfer")}} de una operación de arrastrar y soltar. `FileReader` solo puede acceder al contenido de los archivos que el usuario ha seleccionado de forma explícita; no se puede usar para leer un archivo a partir de su ruta en el sistema de archivos del usuario. Para leer archivos del sistema de archivos del cliente a partir de su ruta, usa la [File System Access API](/es/docs/Web/API/File_System_API). Para leer archivos del lado del servidor, usa {{domxref("Window/fetch", "fetch()")}}, con permisos [CORS](/es/docs/Web/HTTP/Guides/CORS) si la lectura es entre orígenes distintos.

{{InheritanceDiagram}}

## Constructor

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : Devuelve un nuevo objeto `FileReader`.

Para ver detalles y ejemplos, consulta [Uso de archivos desde aplicaciones web](/es/docs/Web/API/File_API/Using_files_from_web_applications).

## Propiedades de instancia

- {{domxref("FileReader.error")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("DOMException")}} que representa el error que se produjo al leer el archivo.
- {{domxref("FileReader.readyState")}} {{ReadOnlyInline}}
  - : Un número que indica el estado del `FileReader`. Su valor es uno de los siguientes:

    | Nombre    | Valor | Descripción                                    |
    | --------- | ----- | ---------------------------------------------- |
    | `EMPTY`   | `0`   | Todavía no se han cargado datos.               |
    | `LOADING` | `1`   | Los datos se están cargando en este momento.   |
    | `DONE`    | `2`   | Se ha completado toda la solicitud de lectura. |

- {{domxref("FileReader.result")}} {{ReadOnlyInline}}
  - : El contenido del archivo. Esta propiedad solo es válida una vez que la operación de lectura ha terminado, y el formato de los datos depende del método que se haya usado para iniciar la operación de lectura.

## Métodos de instancia

- {{domxref("FileReader.abort()")}}
  - : Cancela la operación de lectura. Al finalizar, el estado `readyState` será `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Inicia la lectura del contenido del objeto {{domxref("Blob")}} especificado; una vez finalizada, el atributo `result` contiene un {{jsxref("ArrayBuffer")}} que representa los datos del archivo.
- {{domxref("FileReader.readAsBinaryString()")}} {{deprecated_inline}}
  - : Inicia la lectura del contenido del objeto {{domxref("Blob")}} especificado; una vez finalizada, el atributo `result` contiene los datos binarios sin procesar del archivo como una cadena de texto.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Inicia la lectura del contenido del objeto {{domxref("Blob")}} especificado; una vez finalizada, el atributo `result` contiene una URL `data:` que representa los datos del archivo.
- {{domxref("FileReader.readAsText()")}}
  - : Inicia la lectura del contenido del objeto {{domxref("Blob")}} especificado; una vez finalizada, el atributo `result` contiene el contenido del archivo como una cadena de texto. Se puede especificar opcionalmente un nombre de codificación.

## Eventos

Para detectar estos eventos, usa {{domxref("EventTarget/addEventListener", "addEventListener()")}} o asigna un detector de eventos a la propiedad `oneventname` de esta interfaz. Cuando `FileReader` ya no se utilice, elimina los detectores de eventos con {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} para evitar fugas de memoria.

- {{domxref("FileReader/abort_event", "abort")}}
  - : Se dispara cuando se ha abortado una lectura, por ejemplo, porque el programa llamó a {{domxref("FileReader.abort()")}}.
- {{domxref("FileReader/error_event", "error")}}
  - : Se dispara cuando la lectura falla debido a un error.
- {{domxref("FileReader/load_event", "load")}}
  - : Se dispara cuando una lectura se ha completado con éxito.
- {{domxref("FileReader/loadend_event", "loadend")}}
  - : Se dispara cuando una lectura ha finalizado, ya sea con éxito o no.
- {{domxref("FileReader/loadstart_event", "loadstart")}}
  - : Se dispara cuando ha comenzado una lectura.
- {{domxref("FileReader/progress_event", "progress")}}
  - : Se dispara periódicamente a medida que se leen los datos.

## Ejemplos

### Uso de FileReader

Este ejemplo lee y muestra el contenido de un archivo de texto directamente en el navegador.

#### HTML

```html
<h1>Lector de archivos</h1>
<input type="file" id="file-input" />
<div id="message"></div>
<pre id="file-content"></pre>
```

#### JavaScript

```js
const fileInput = document.getElementById("file-input");
const fileContentDisplay = document.getElementById("file-content");
const messageDisplay = document.getElementById("message");

fileInput.addEventListener("change", handleFileSelection);

function handleFileSelection(event) {
  const file = event.target.files[0];
  fileContentDisplay.textContent = ""; // Borra el contenido del archivo anterior
  messageDisplay.textContent = ""; // Borra los mensajes anteriores

  // Valida la existencia y el tipo de archivo
  if (!file) {
    showMessage("No se ha seleccionado ningún archivo. Elige uno.", "error");
    return;
  }

  if (!file.type.startsWith("text")) {
    showMessage(
      "Tipo de archivo no compatible. Por favor, selecciona un archivo de texto.",
      "error",
    );
    return;
  }

  // Lee el archivo
  const reader = new FileReader();
  reader.onload = () => {
    fileContentDisplay.textContent = reader.result;
  };
  reader.onerror = () => {
    showMessage(
      "Error al leer el archivo. Por favor, inténtalo de nuevo.",
      "error",
    );
  };
  reader.readAsText(file);
}

// Muestra un mensaje al usuario
function showMessage(message, type) {
  messageDisplay.textContent = message;
  messageDisplay.style.color = type === "error" ? "red" : "green";
}
```

### Resultado

{{EmbedLiveSample("Uso de FileReader", 640, 300)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de archivos desde aplicaciones web](/es/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
- {{domxref("FileReaderSync")}}
