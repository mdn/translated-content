---
title: MimeType
slug: Web/API/MimeType
---

{{SeeCompatTable}}{{APIRef("HTML DOM")}}

La interfaz **`MimeType`** provee información acerca de un tipo MIME asociado con un plugin en particular. {{domxref("NavigatorPlugins.mimeTypes")}} retorna un arreglo de estos objetos.

## Propiedades

- {{domxref("MimeType.type")}}
  - : Retorna el tipo MIME del plugin asociado.
- {{domxref("MimeType.description")}}
  - : Retorna la descripción del plugin asociado o un string vacío en caso de no haberla.
- {{domxref("MimeType.suffixes")}}
  - : Un string que contiene las extensiones de archivo válidas para los datos mostrados por el plugin, o un string vacío si una extensión de archivo no es válida para el módulo en particular. Por ejemplo, un módulo de decriptación de contenido del navegador podría aparecer en la lista de plugins, pero soportar más extensiones de archivo de las que se pueden anticipar. Por lo tanto, podría retornar un string vacío.
- {{domxref("MimeType.enabledPlugin")}}
  - : Retorna una instancia de {{domxref("Plugin")}} que contiene la información acerca del plugin en sí mismo.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
