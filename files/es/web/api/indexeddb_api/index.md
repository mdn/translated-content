---
title: IndexedDB
slug: Web/API/IndexedDB_API
---

{{ SeeCompatTable() }}

IndexedDB es una API de bajo nivel que ofrece almacenamiento en el cliente de cantidades significativas de datos estructurados, incluyendo archivos y blobs. Para búsquedas de alto rendimiento en esos datos usa índices. Mientras [DOM Storage](/es/docs/DOM/Storage) es útil para el almacenamiento de pequeñas cantidades de datos, no es útil para almacenar grandes cantidades de datos estructurados. IndexedDB proporciona una solución.

Esta página es básicamente el punto de entrada para la descripción técnica de los objetos de la API. Si necesita algo elemental, debería consultar ;[Conceptos básicos acerca de IndexedDB](/es/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB). Para más detalles, vea [Usando IndexedDB](/es/docs/IndexedDB/Using_IndexedDB).

IndexedDB provee APIs separados para un acceso síncrono o asíncrono. El API síncrono está destinado a ser usado únicamente dentro de [Web Workers](/es/docs/DOM/Worker), pero no será implementado aún por cualquier navegador. El API asíncrono trabaja con o sin Web Workers.

## API Asíncrono

Los métodos del API Asíncrono, retornan sin bloquear el hilo de llamada. Para obtener un acceso asíncrono a la base de datos, use [`open`](/es/docs/IndexedDB/IDBFactory#open)() en el atributo [`indexedDB`](/es/docs/IndexedDB/IDBEnvironment#attr_indexedDB) de un objeto [window](/es/docs/DOM/window). Este método retorna un objeto IDBRequest (IDBOpenDBRequest); operaciones asíncronas se comunicarán con la aplicación que llama, disparando eventos en los objetos IDBRequest.

> **Nota:** Nota: El objeto `indexedDB` se prefija en las versiones antiguas de los navegadores (propiedad `mozIndexedDB` para Gecko < 16, `webkitIndexedDB` en Chrome, y `msIndexedDB` en IE 10).

- [`IDBFactory`](/es/docs/IndexedDB/IDBFactory) provee acceso a la base de datos. Esta es la interface implementada por el objeto global `indexedDB` y es el punto de entrada para la API.
- [`IDBCursor`](/es/docs/IndexedDB/IDBCursor) itera sobre los objetos de almacenamiento y de índices.
- [`IDBCursorWithValue`](/es/docs/IndexedDB/IDBCursorWithValue) itera sobre los objetos de almacenamiento y de índices y retorna el valor actual del cursor.
- [`IDBDatabase`](/es/docs/IndexedDB/IDBDatabase) representa una conexión a la base de datos. Es la única manera de realizar una transacción en la base de datos.
- [`IDBEnvironment`](/es/docs/IndexedDB/IDBEnvironment) provee acceso a la base de datos, desde el lado del cliente. Está implementada por el objeto [window](/es/docs/DOM/window).
- [`IDBIndex`](/es/docs/IndexedDB/IDBIndex) provee acceso a la metadata de un índice.
- [`IDBKeyRange`](/es/docs/IndexedDB/IDBKeyRange) define un rango de claves.
- [`IDBObjectStore`](/es/docs/IndexedDB/IDBObjectStore) representa un objeto de almacenamiento.
- [`IDBOpenDBRequest`](/es/docs/IndexedDB/IDBOpenDBRequest) representa un requerimiento para abrir una base de datos.
- [`IDBRequest`](/es/docs/IndexedDB/IDBRequest) provee acceso a los resultados de los requerimientos asíncronos a la base de datos y a los objetos database. Es lo que se obtiene cuando se llama a un método asíncrono.
- [`IDBTransaction`](/es/docs/IndexedDB/IDBTransaction) representa una transacción. Cuando Ud. crea una transacción en la base de datos, especifica el alcance (como a que objetos store desea tener acceso), y determina la clase de acceso (sólo lectura o escritura) que desea tener.
- [`IDBVersionChangeEvent`](/es/docs/IndexedDB/IDBVersionChangeEvent) indica que la versión de la base de datos ha cambiado.

Una versión anterior de la especificación también define estas -ahora removidas- interfaces. Éstas son documentadas todavía, en caso de que necesite actualizar código escrito previamente:

- [`IDBVersionChangeRequest`](/es/docs/IndexedDB/IDBVersionChangeRequest) representa una solicitud para cambiar la versión de una base de datos. La manera de cambiar la versión de la base de datos ahora es diferente (llamando [`IDBFactory.open()`](/es/docs/IndexedDB/IDBFactory#open) sin llamar también a [`IDBDatabase.setVersion()`](</es/docs/IndexedDB/IDBDatabase#setVersion()>), y la interfaz [`IDBOpenDBRequest`](/es/docs/IndexedDB/IDBOpenDBRequest) tiene ahora la funcionalidad de la eliminada `IDBVersionChangeRequest`.
- [`IDBDatabaseException`](/es/docs/IndexedDB/IDBDatabaseException){{deprecated_inline}} representa las condiciones de excepción que se pueden encontrar mientras se ejecutan operaciones en la base de datos.

Hay también una [versión sincrónica de la API](/es/docs/IndexedDB/Syncronous_API). La API síncrona no ha sido implementada en cualquier navegador. Está destinada a ser usada con [WebWorkers](/es/docs/DOM/Using_web_workers).

## Límites de almacenamiento

No existe un límite de tamaño para un elemento simple de la base de datos. Sin embargo, puede haber un límite en el tamaño de cada base de datos IndexedDB. Este límite (y la forma en que la interfaz de usuario la hace valer) puede variar de una navegador a otro:

- Firefox: no hay límite en el tamaño de una base de datos IndexedDB. La interfaz de usuario solicita permiso para almacenar blobs de más de 50MB. Este límite puede ser modificado mediante la preferencia dom.indexedDB.warningQuota (que está definida en <http://mxr.mozilla.org/mozilla-central/source/modules/libpref/src/init/all.js>).
- Google Chrome: vea [https://developers.google.com/chrome...rage#temporary](https://developers.google.com/chrome/whitepapers/storage#temporary)

## Ejemplo

Un claro ejemplo para lo que IndexedDB puede ser utilizado en la web, es el ejemplo de Marco Castelluccio, ganador del DevDerby IndexedDB Mozilla. La demostración ganadora fue [eLibri](/en-US/demos/detail/elibri), una biblioteca y una aplicación de lectura de libros electrónicos.

## Ver también

- [Conceptos básicos acerca de IndexedDB](/es/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB)
- [Usando IndexedDB](/es/docs/IndexedDB/Using_IndexedDB)
- [Almacenando imágenes y archivos en IndexedDB](http://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)
- [Una lista simple de PENDIENTES usando HTML5 IndexedDB](http://www.html5rocks.com/tutorials/indexeddb/todo/). Nota("Este tutorial está basado en una antigua versión de la especificación y no funciona en los navegadores actualizados. por ejemplo, todavía usa el método actualmente eliminado `setVersion()`.")
- [Especificación de la API para Indexed Database](http://www.w3.org/TR/IndexedDB/)
- [IndexedDB — El alamcén en su navegador](http://msdn.microsoft.com/en-us/scriptjunkie/gg679063.aspx)
- [Soporte IndexedDB en navegadores](http://caniuse.com/indexeddb)
- [Ejemplos IndexedDB](http://nparashuram.com/IndexedDB/trialtool/index.html)
- [IndexedDB Polyfill](https://github.com/axemclion/IndexedDBShim) para navegadores que sólo soportan WebSQL (p.e. mobile WebKit)
- [JQuery IndexedDB plugin](http://nparashuram.com/IndexedDBShim/)
