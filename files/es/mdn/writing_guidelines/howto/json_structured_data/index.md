---
title: Cómo usar datos estructurados
short-title: Usar datos estructurados
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

MDN almacena los datos en estructuras bien definidas cuando es posible. Esta información se centraliza y puede actualizarse una vez, mientras se utiliza en múltiples lugares.

Existen varios de estos archivos, y este documento describe su propósito, estructura y proceso de mantenimiento.

## GroupData: agrupación lógica de las API

`GroupData` es un archivo JSON que recopila información sobre las API web. La agrupación de las API es algo difusa: cualquier interfaz, método o propiedad puede formar parte de varias API. El conjunto de API agrupadas bajo un nombre es una convención utilizada para comunicar información sobre una funcionalidad, sin ninguna aplicación técnica.

Sin embargo, MDN necesita esta información para crear barras laterales coherentes de Web-API (como con la macro `\{{APIRef}}`) con las páginas de referencia, guías y artículos de descripción general adecuados.

GroupData hace exactamente eso: para cada API, enumera las interfaces, propiedades, métodos, guías y páginas de descripción general. Anteriormente, también enumeraba diccionarios y callbacks. Pero ese uso, aunque todavía es compatible, está obsoleto y se eliminará en el futuro.

### Estructura de GroupData

> [!WARNING]
> Las páginas inexistentes enumeradas en este archivo se ignoran (en en-US).

Una entrada en `GroupData.json` tiene la siguiente estructura:

```json
{
  "Nombre_de_la_API": {
    "overview": ["nombre_de_la_página_de_descripción_general"],
    "guides": [
      "nombre_de_guía_1"
      // …
    ],
    "interfaces": [
      "nombre_de_interfaz_1"
      // …
    ],
    "methods": [
      "nombre_de_método_adicional_1"
      // …
    ],
    "properties": [
      "nombre_de_propiedad_adicional_1"
      // …
    ],
    "events": [
      "nombre_de_evento_adicional_1"
      // …
    ]
  }
}
```

…donde:

- `"Nombre_de_la_API"`
  - : Esta clave es tanto un ID utilizado por macros de barra lateral como `\{{APIRef("Nombre_de_la_API")}}` como el nombre que se muestra en la propia barra lateral. Elígelo con cuidado.
    > [!WARNING]
    > Si deseas cambiar el nombre que se muestra en la barra lateral, debes editar todas las páginas que lo muestran.
- `"overview"`
  - : Esta es una lista que contiene una página: la página de descripción general, utilizada como enlace para el texto `"Nombre_de_la_API"`. El valor es el _título de la página_, y la página debe estar en el directorio `web/api/`.
- `"guides"`
  - : Esta es una lista de guías para mostrar en la barra lateral, en el orden indicado. Los valores son _rutas a la página_, comenzando con `/docs/`.
- `"interfaces"`
  - : Enumera las interfaces que forman parte de la API.
- `"methods"`
  - : Enumera los métodos que forman parte de la API.
    > [!NOTE]
    > Los métodos de las interfaces enumeradas en `"interfaces"` **no deben** incluirse allí. Se añaden automáticamente a la barra lateral si la clave `page-type` de esa página es `web-api-static-method` o `web-api-instance-method`.
- `"properties"`
  - : Enumera las propiedades en otras interfaces que forman parte de la API, como `navigator.xr` (una propiedad que la API de WebXR añade al objeto `navigator`)
    > [!NOTE]
    > Las propiedades de las interfaces enumeradas en `"interfaces"` **no deben** incluirse allí. Se añaden automáticamente a la barra lateral si la clave `page-type` de esa página es `web-api-static-property` o `web-api-instance-property`.
- `"events"`
  - : Enumera los eventos de otras interfaces que forman parte de la API. Los valores son el _título de las páginas_.
    > [!NOTE]
    > Los eventos dirigidos a las interfaces enumeradas en `"interfaces"` **no deben** incluirse allí. Se añaden automáticamente a la barra lateral si la clave `page-type` de esa página es `web-api-event`.

Hay otras dos claves, `"dictionaries"` y `"callbacks"`, que funcionan bajo el mismo principio. Como ya no documentamos estas entidades en sus propias páginas, su uso está obsoleto y no se debe añadir ninguna entrada nueva (y las vamos eliminando poco a poco).

> [!NOTE]
> Además, ninguna de las claves es obligatoria; es una buena práctica (y la haremos cumplir) agregar las que no están obsoletas con una lista vacía en lugar de omitirlas. Muestra que la ausencia de valor es una elección consciente.

### Proceso de actualización para GroupData

Este archivo, ubicado en [`files/jsondata/GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json), debe actualizarse en el mismo PR donde se producen los cambios que afectan a la barra lateral. Así, la barra lateral estará siempre actualizada. Los revisores no deben fusionar los PR que no adopten esta práctica.

Para probar tus cambios, verifica que la barra lateral en los archivos de tu PR muestre todas las entradas correctamente.

## InterfaceData: registro de la herencia de interfaces

> [!NOTE]
> Esperamos generar este archivo automáticamente a partir de los datos disponibles a través de w3c/webref en el futuro.

`InterfaceData` describe la jerarquía de las interfaces. Enumera la herencia. Anteriormente, también enumeraba los mixins implementados por cada interfaz; pero ese uso está obsoleto, y eliminamos los mixins de este archivo al mismo ritmo que se actualiza MDN.

Estos datos de herencia se utilizan al crear barras laterales de API y por el `\{{InheritanceDiagram}}` en las páginas de la interfaz.

### Estructura de InterfaceData

Una entrada en `InterfaceData.json` tiene la siguiente estructura:

```json
{
  "Nombre_de_la_interfaz": {
    "inh": "Nombre_de_la_interfaz_padre",
    "impl": []
  }
}
```

> [!NOTE]
> Como los mixins están obsoletos, `"impl"` debe ser una lista vacía para todas las interfaces nuevas.

El valor de `"Nombre_de_la_interfaz_padre"` no es una lista sino una sola entrada, obligatoria; no debemos incluir ninguna interfaz que no herede de otra.

### Proceso de actualización para InterfaceData

El mismo PR que añade una nueva interfaz que hereda de otra debe actualizar este archivo, ubicado en [`files/jsondata/InterfaceData.json`](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json). Los revisores no deben fusionar los PR que no lo hagan.

Para probar los cambios, verifica que las barras laterales de cada interfaz que editaste en tu PR muestren la herencia correctamente.

## SpecData: información de especificación

> [!WARNING]
> El archivo [`SpecData.json`](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) ya no recibe mantenimiento.
> La información de especificación canónica se almacena en [w3c/browser-specs](https://github.com/w3c/browser-specs) y en la clave `spec_url` de las características definidas en [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data).

No aceptamos más contribuciones al archivo `SpecData.json`; en su lugar, inserta una tabla de especificaciones usando la macro `\{{Specifications}}`, o enlaza a la especificación en el texto.
Ten en cuenta que, la mayoría de las veces, mencionar o enlazar a una especificación fuera de la sección _Especificaciones_ es un indicio de algo que no está debidamente documentado en MDN.
