---
title: API de Sistema de Archivos
slug: Web/API/File_System_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

La **API de Sistema de Archivos**, con extensiones proporcionadas a través de la [**File System Acces API**](https://wicg.github.io/file-system-acces/) para acceder a los archivos del sistema de archivos del dispositivo, permite funciones de lectura, escritura y gestión de archivos.

Ver [Relationship to other file-related APIs](/es/docs/Web/API/File_API#relationship_to_other_file-related_apis) para una comparación entre esta API, la [File and Directory Entries API](/es/docs/Web/API/File_and_Directory_Entries_API) y la [File API](/es/docs/Web/API/File_API).

## Conceptos y uso

Esta API permite interactuar con archivos en el dispositivo local de un usuario o en un sistema de archivos en red accesible para el usuario. Las funciones principales de esta API incluyen leer archivos, escribir o guardar archivos y acceder a la estructura de directorios.

La mayor parte de la interacción con archivos y directorios se realiza a través de manejadores. Una clase padre {{domxref('FileSystemHandle')}} ayuda a definir dos clases hijas: {{domxref('FileSystemFileHandle')}} y {{domxref('FileSystemDirectoryHandle')}}, para archivos y directorios respectivamente.

Los manejadores representan un archivo o directorio en el sistema del usuario. Primero, puede acceder a ellos mostrando al usuario un selector de archivos o directorios mediante métodos como {{domxref('window.showOpenFilePicker()')}} y {{domxref('window.showDirectoryPicker()')}}. Una vez que se invocan, aparece el selector de archivos y el usuario selecciona un archivo o un directorio. Una vez que esto se ha realizado de forma exitosa, se devuelve un manejador.

También puede acceder a los manejadores de archivos a través de:

- El metodo {{domxref('DataTransferItem.getAsFileSystemHandle()')}} de la {{domxref('HTML Drag and Drop API', '', '', 'nocode')}}.
- La [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Cada manejador proporciona su propia funcionalidad, y existen algunas diferencias dependiendo del que se solicite (véase la sección [interfaces](#interfaces) para obtener detalles específicos). A continuación, se puede acceder a los datos del archivo o a la información (incluidos los hijos) del directorio seleccionado. Esta API abre nuevas posibilidades funcionales que hasta ahora no existían en la web. No obstante, la seguridad ha sido una prioridad a la hora de diseñar la API, y el acceso a los datos de archivos y directorios no está permitido a menos que el usuario lo autorice expresamente (tenga en cuenta que este no es el caso del [sistema de archivos de origen privado](#sistema_de_archivos_de_origen_privado), ya que no es visible para el usuario.)

> [!NOTE]
> Las diferentes excepciones que pueden producirse al utilizar las funciones de esta API se enumeran en las páginas pertinentes, tal y como se define en la especificación. Sin embargo, la situación se complica debido a la interacción entre la API y el sistema operativo subyacente. Se ha propuesto incluir en la especificación una [lista de correspondencias de errores](https://github.com/whatwg/fs/issues/57), que incluye información útil relacionada.

> [!NOTE]
> Los objetos basados en {{domxref("FileSystemHandle")}} se pueden serializar en una instancia de base de datos {{domxref("IndexedDB API", "IndexedDB", "", "nocode")}}, o transferirse mediante {{domxref("window.postMessage", "postMessage()")}}.

### Sistema de archivos de origen privado

El sistema de archivos de origen privado (OPFS por sus siglas en inglés) es un punto final de almacenamiento proporcionado como parte de la API de Sistema de Archivos, que es privado para el origen de la página y no es visible para el usuario como el sistema de archivos clásico. Proporciona acceso a un tipo especial de archivo que está altamente optimizado para el rendimiento y ofrece acceso de escritura in situ a su contenido.

A continuación se presentan algunos posibles casos de uso:

- Aplicaciones con cargador persistente
  - Cuando se selecciona un archivo o directorio para cargar (subir al servidor), puede copiar el archivo en un entorno de pruebas local y cargar (subir al servidor) una fragmento cada vez.
  - La aplicación puede reiniciar las cargas después de una interrupción, como el cierre o bloqueo del navegador, la interrupción de la conectividad o el apagado del ordenador o computadora.

- Videojuegos u otras aplicaciones con gran cantidad de recursos multimedia.
  - La aplicación descarga uno o varios archivos tar de gran tamaño y los descomprime de forma local dentro de una estructura de directorios.
  - La aplicación descarga previamente los recursos en segundo plano, de modo que el usuario puede pasar a la siguiente tarea o nivel del juego sin tener que esperar a que se complete la descarga.

- Editor de audio o de fotos con acceso sin conexión a internet o caché local (ideal para mejorar el rendimiento y la velocidad).
  - La aplicación puede escribir en archivos en su ubicación original (por ejemplo, sobrescribiendo solo las etiquetas ID3/EXIF y no todo el archivo).

- Reproductor de vídeo sin conexión a internet
  - La aplicación puede descargar archivos grandes (>1 GB) para verlos mas tarde.
  - La aplicación puede acceder a archivos descargados parcialmente (para que puedas ver el primer capitulo de tu DVD, incluso si la aplicación aun esta descargando el resto del contenido o si la aplicación no completó la descarga porque tuviste que salir corriendo para coger el tren).

- Cliente de correo web sin conexión a internet
  - El cliente descarga los archivos adjuntos y los almacena de forma local.
  - El cliente almacena en caché los archivos adjuntos para su posterior carga.

Lea nuestro [Origin private file system](/es/docs/Web/API/File_System_API/Origin_private_file_system) Para obtener instrucciones sobre como utilizarlo.

### Guardar archivos

- En el caso de los manejadores asíncronos, utilice la interfaz {{domxref('FileSystemWritableFileStream')}}. Una vez que los datos que desea guardar estén en formato {{domxref('Blob')}}, objeto {{jsxref("String")}}, literal de cadena o {{jsxref('ArrayBuffer', 'buffer')}}, puede abrir un flujo y guardar los datos en un archivo. Este puede ser un archivo existente o uno nuevo.
- En el caso del {{domxref('FileSystemSyncAccessHandle')}} síncrono, los cambios se escriben en un archivo utilizando el método {{domxref('FileSystemSyncAccessHandle.write', 'write()')}}. De manera opcional, también se puede llamar a {{domxref('FileSystemSyncAccessHandle.flush','flush()')}} si se necesita que los cambios se guarden en el disco en un momento específico (de lo contrario, se puede dejar que el sistema operativo subyacente se encargue de ello cuando lo considere oportuno, lo que debería funcionar correctamente en la mayoría de los casos).

## Interfaces

- {{domxref("FileSystemChangeRecord")}} {{experimental_inline}}
  - : Contiene detalles de un único cambio observado por un {{domxref("FileSystemObserver")}}.
- {{domxref("FileSystemHandle")}}
  - : Un objeto que representa una entrada de archivo o directorio. Varios manejadores pueden representar la misma entrada. En la mayoría de los casos, no se trabaja directamente con `FileSystemHandle`, sino con sus interfaces hijas {{domxref('FileSystemFileHandle')}} y {{domxref('FileSystemDirectoryHandle')}}.
- {{domxref("FileSystemFileHandle")}}
  - : Poporciona un manejador para una entrada del sistema de archivos.
- {{domxref("FileSystemDirectoryHandle")}}
  - : Poporciona un manejador para un directorio del sistema de archivos.
- {{domxref("FileSystemObserver")}} {{experimental_inline}}
  - : Proporciona un mecanismo para observar los cambios en los archivos o directorios seleccionados.
- {{domxref("FileSystemSyncAccessHandle")}}
  - : Proporciona un manejador síncrono para una entrada del sistema de archivos, que opera in situ en un único archivo del disco. La naturaleza síncrona de las lecturas y escrituras de archivos permite un mayor rendimiento para métodos críticos en contextos en los que las operaciones asíncronas conllevan una gran sobrecarga, por ejemplo, [WebAssembly](/es/docs/WebAssembly). Solo se puede acceder a esta clase dentro de [Web Workers](/es/docs/Web/API/Web_Workers_API) dedicados para archivos dentro del [Sistema de archivos de origen pivado](#sitema_de_archivos_de_origen_privado).
- {{domxref("FileSystemWritableFileStream")}}
  - : Un objeto {{domxref('WritableStream')}} con métodos adicionales útiles, que opera sobre un único archivo en el disco.

### Extensiones a otras interfaces

- {{domxref("Window.showDirectoryPicker()")}}
  - : Muestra un selector de directorios que permite al usuario seleccionar un directorio.
- {{domxref("Window.showOpenFilePicker()")}}
  - : Muestra un selector de archivos que permite al usuario seleccionar uno o varios archivos.
- {{domxref("Window.showSaveFilePicker()")}}
  - : Muestra un selector de archivos que permite al usuario guardar un archivo.
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}}
  - : Devuelve una {{jsxref('Promise')}} que se resuelve con un {{domxref('FileSystemFileHandle')}} si el elemento arrastrado es un archivo, o con un {{domxref('FileSystemDirectoryHandle')}} si el elemento arrastrado es un directorio.
- {{domxref("StorageManager.getDirectory()")}}
  - : Se utiliza para obtener una referencia a un objeto {{domxref("FileSystemDirectoryHandle")}} que permite acceder a un directorio y a su contenido, almacenado en el [origin private file system](/es/docs/Web/API/File_System_API/Origin_private_file_system). Devuelve una {{jsxref('Promise')}} que se resuelve con un objeto {{domxref("FileSystemDirectoryHandle")}}.

## Ejemplos

### Acceso a archivos

El siguiente código permite al usuario elegir un archivo desde el selector de archivos.

```js
async function getFile() {
  // Abre el selector de archivos y desestructura el resultado del primer manejador
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

La siguiente función asíncrona presenta un selector de archivos y, una vez elegido el archivo, utiliza el método `getFile()` para recuperar el contenido.

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getTheFile() {
  // Abre el selector de archivos y desestructura el resultado del primer manejador.
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // Obtener el contenido del archivo
  const fileData = await fileHandle.getFile();
}
```

### Acceso a directorios

El siguiente ejemplo devuelve un manejador de directorio con el nombre especificado. Si el directorio no existe, este será creado.

```js
const dirName = "directoryToGetName";

// Suponiendo que tenemos un manejador de directorios: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

La siguiente función asíncrona utiliza `resolve()` para encontrar la ruta de un archivo seleccionado, en relación con un manejador de directorios especificado.

```js
async function returnPathDirectories(directoryHandle) {
  // Obten un manejador de archivos mostrando un selector de archivos.
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // El usuario canceló o no pudo abrir un archivo.
    return;
  }

  // Comprueba si el manejador existe dentro de nuestro manejador de directorios.
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // No existe dentro del manejador de directorios.
  } else {
    // relativePaths es un arreglo de nombres que proporciona la ruta relativa.

    for (const name of relativePaths) {
      // Registrar cada entrada
      console.log(name);
    }
  }
}
```

### Escribir en archivos

La siguiente función asíncrona abre el selector de archivos guardados, que devuelve un {{domxref('FileSystemFileHandle')}} una vez seleccionado un archivo. A continuación, se crea un flujo que puede ser escrito, utilizando el método {{domxref('FileSystemFileHandle.createWritable()')}}.

Después, se escribe un {{domxref('Blob')}} definido por el usuario en el flujo, que posteriormente se cierra.

```js
async function saveFile() {
  // Crear un nuevo manejador
  const newHandle = await window.showSaveFilePicker();

  // Crear un FileSystemWritableFileStream para escribir en él
  const writableStream = await newHandle.createWritable();

  // Escribe nuestro archivo
  await writableStream.write(imgBlob);

  // Cierra el archivo y escribe el contenido en el disco.
  await writableStream.close();
}
```

A continuación se muestran diferentes ejemplos de opciones que se pueden pasar al método `write()`.

```js
// Solo pasa los datos (sin opciones)
writableStream.write(data);

// Escribe los datos en el flujo desde la posición determinada.
writableStream.write({ type: "write", position, data });

// Actualiza el desplazamiento del cursor del archivo a la posición especificada.
writableStream.write({ type: "seek", position });

// Cambia el tamaño del archivo para que su longitud esté basada en un determinado número de bytes.
writableStream.write({ type: "truncate", size });
```

### Lectura y escritura síncrona de archivos en OPFS

Este ejemplo lee y escribe de forma síncrona un archivo en el [Sistema de archivos de origen privado](#sistema_de_archivos_de_origen_privado).

La siguiente función, que maneja eventos asíncronos, está contenida dentro de un Web Worker. Al recibir un mensaje del hilo principal, realiza lo siguiente:

- Crea un manejador síncrono de acceso a archivos.
- Obtiene el tamaño del archivo y crea un {{jsxref("ArrayBuffer")}} para contenerlo.
- Lee el contenido del archivo dentro del búfer.
- Codifica el mensaje y lo escribe al final del archivo.
- Persiste (guarda) los cambios en el disco y cierra el manejador de acceso.

```js
onmessage = async (e) => {
  // Recuperar el mensaje enviado al trabajo desde el script principal.
  const message = e.data;

  // Obtener manejador para el archivo boceto (borrador) en OPFS.
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Obtener manejador de acceso sync (síncrono).
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Obtener el tamaño del archivo.
  const fileSize = accessHandle.getSize();
  // Leer el contenido del archivo en un búfer.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Escribe el mensaje al final del archivo.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Persistir los cambios en el disco.
  accessHandle.flush();

  // Cerrar siempre FileSystemSyncAccesHandle cuando haya terminado.
  accessHandle.close();
};
```

> [!NOTE]
> En versiones anteriores de la especificacion, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, y {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} se especificaron de forma poco ergonómica como métodos asíncronos. Esto ya ha sido [modificado](https://github.com/whatwg/fs/issues/7), pero algunos navegadores aun admiten las versiones asíncronas.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [The origin private file system](https://web.dev/articles/origin-private-file-system)
