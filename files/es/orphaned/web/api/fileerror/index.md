---
title: FileError
slug: orphaned/Web/API/FileError
translation_of: Web/API/FileError
original_slug: Web/API/FileError
browser-compat: api.FileError
---
{{APIRef("File System API")}}{{obsolete_header()}}

Se ha presentado un error al utilizar la interfaz {{ domxref("FileReader") }}.

> **Nota:** Esta interfaz es obsoleta de acuerdo a la última especificación. Use la nueva DOM4 {{ domxref("DOMError") }} en su lugar.

La [File System API](/en/DOM/File_API/File_System_API), a `FileError Representa un error que puede surgir al acceder al sistema de archivos utilizando la API asíncrona. Se extiende la interfaz FileERror descrita en la escritura del archivo y añadiendo así códigos de error nuevos.`

FileError Objects son pasados una vez se haya lanzado un error. Los objetos tiene un código que muestra el tipo de error que haya ocurrido.

## Mejores prácticas

La mayoría de la gente no lee la página de errores y excepciones a menos que estén perpletos. Así que los siguientes tips, son algúnos consejos que podrían ayudar a evitar algunos problemas.

### Errores de retrollamada.

Aunque las devoluciones de llamada de error son opcionales, usted debe incluirlos en los argumentos de los métodos. Una aplicación web puede fallar por diversas razones, por lo que no requiere pasar el resto de su día adivinando lo que está pasando y/o realizando el sistema.

### No haga funcionar su aplicación desde ruta:// (file://)

Por razones de seguridad, los navegadores no le permiten ejecutar su aplicación desde file://. De hecho, muchas de las API de almacenamiento de gran alcance(como sistema de archivos, BlobBuilder y FileReader) lanzan errores si ejecuta la aplicación a nivel local de file://. Cuando estás haciendo una prueba de su aplicación y no deseas configurar un servidor web, puede pasarse por alto la restricción de seguridad en Chrome. Simplemente comienza a Chrome con la restricción de seguridad en Chrome con la bandera --allow-file- access-from-files Utilice la bandera sólo para propósitos de prueba.

**_Tradución a español en proceso..._**

Hasta el momento se ha traducido hasta este punto, las tablas que verás a continuación contienen pequeñas descripciones báscicas de la implementación y el análisis del tema que se está observando.

## Atributo

| Attribute | Type             | Description                                                                                             |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| `code`    | `unsigned short` | The most appropriate error code for the condition. See [Error codes](#error_codes) for possible values. |

## Error codes

> **Nota:** Do not rely on the numeric values of the constants, which might change as the specifications continue to change. Use the constant names instead.

- [`ENCODING_ERR`](): 5
  - : The URL is malformed. Make sure that the URL is complete and valid.
- [`INVALID_MODIFICATION_ERR`](): 9
  - : The modification requested is not allowed. For example, the app might be trying to move a directory into its own child or moving a file into its parent directory without changing its name.
- [`INVALID_STATE_ERR`](): 7
  - : The operation cannot be performed on the current state of the interface object. For example, the state that was cached in an interface object has changed since it was last read from disk.
- [`NO_MODIFICATION_ALLOWED_ERR`](): 6
  - : The state of the underlying file system prevents any writing to a file or a directory.
- [`NOT_FOUND_ERR`](): 1
  - : A required file or directory could not be found at the time an operation was processed. For example, a file did not exist but was being opened.
- [`NOT_READABLE_ERR`](): 4
  - : The file or directory cannot be read, typically due to permission problems that occur after a reference to a file has been acquired (for example, the file or directory is concurrently locked by another application).
- [`PATH_EXISTS_ERR`](): 12
  - : The file or directory with the same path already exists.
- [`QUOTA_EXCEEDED_ERR`](): 10
  - : Either there's not enough remaining storage space or the storage quota was reached and the user declined to give more space to the database. To ask for more storage, see [Managing HTML5 Offline Storage](http://code.google.com/chrome/whitepapers/storage.html).
- [`SECURITY_ERR`](): 2

  - : Access to the files were denied for one of the following reasons:

    - The files might be unsafe for access within a Web application.
    - Too many calls are being made on file resources.
    - Other unspecified security error code or situations.

- [`TYPE_MISMATCH_ERR`](): 11
  - : The app looked up an entry, but the entry found is of the wrong type. For example, the app is asking for a directory, when the entry is really a file.

## Especificaciones

{{Specifications}}

## Compatibilidad de Navegadores

{{Compat}}

## See also

- [Basic Concepts About the File System API](/en/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)
- {{ domxref("FileReader") }}
- {{ domxref("File") }}
- {{ domxref("Blob") }}
- {{ spec("http://www.w3.org/TR/file-system-api/#errors-and-exceptions", "Specification: FileAPI Errors and exceptions", "WD") }}
