---
title: StorageManager
slug: Web/API/StorageManager
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{securecontext_header}}{{APIRef("Storage")}}

La interfaz **`StorageManager`** de la [API de almacenamiento](/es/docs/Web/API/Storage_API) proporciona una interfaz para administrar los permisos de persistencia y estimar el almacenamiento disponible. Puede obtener una referencia a esta interfaz mediante {{domxref("navigator.storage")}} o {{domxref("WorkerNavigator.storage")}}.

## Métodos de instancia

- {{domxref("StorageManager.estimate()")}} {{securecontext_inline}}
  - : Devuelve una {{jsxref('Promise','Promesa')}} que se resuelve en un objeto que contiene números de uso y cuota para su origen.
- {{domxref("StorageManager.getDirectory()")}} {{securecontext_inline}}
  - : Se utiliza para obtener una referencia a un objeto {{domxref("FileSystemDirectoryHandle")}} que permite el acceso a un directorio y su contenido, almacenado en el [sistema de archivos privado de origen](/es/docs/Web/API/File_System_API#origin_private_file_system). Devuelve una {{jsxref('Promise','Promesa')}} que cumple con un objeto {{domxref("FileSystemDirectoryHandle")}}.
- {{domxref("StorageManager.persist()")}} {{securecontext_inline}}
  - : Devuelve una {{jsxref('Promise','Promesa')}} que se resuelve en `true` si el agente de usuario puede conservar el almacenamiento de su sitio.
- {{domxref("StorageManager.persisted()")}} {{securecontext_inline}}
  - : Devuelve una {{jsxref('Promise','Promesa')}} que se resuelve en `true` si ya se ha otorgado persistencia para el almacenamiento de su sitio.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
