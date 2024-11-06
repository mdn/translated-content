---
title: Cómo usar datos estructurados
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{MDNSidebar}}

MDN almacena los datos en estructuras bien definidas cuando es posible. Esta información se centraliza y se puede actualizar una vez, mientras se utiliza en numerosos lugares.

Existen varios de estos archivos, y este documento describe su propósito, estructura y proceso de mantenimiento.

## GroupData: agrupación lógica de API

`GroupData` es un archivo JSON que recopila información sobre las API web. La agrupación de APIs es algo difusa: cualquier interfaz, método o propiedad puede formar parte de varias APIs. El conjunto de API agrupadas bajo un nombre es una convención utilizada para comunicar sobre una característica, sin ninguna aplicación técnica.

Sin embargo, MDN necesita esta información para crear menus laterales coherentes de Web-API (como con la macro `\{{APIRef}}`) con las páginas de referencia, guías y artículos generales adecuados.

GroupData hace exactamente eso: para cada API, enumera las interfaces, propiedades, métodos, guías y páginas de descripción general. En el pasado, también enumeraba diccionarios y devoluciones de llamada. Pero ese uso, aunque todavía es compatible, está obsoleto y se eliminará en el futuro.

### Estructura de GroupData

> [!WARNING]
> Las páginas inexistentes enumeradas en este archivo se ignoran.

Una entrada en `GroupData.json` tiene la siguiente estructura:

```json
"Nombre_de_API": {
  "overview": ["nombre de la página de descripción general"],
  "guides": [
    "nombre_de_guia_1",
    (…)
  ],
  "interfaces": [
    "nombre_de_interfaz_1",
    (…)
  ],
  "methods": [
    "nombre_de_metodo_adicional_1",
    (…)
  ],
  "properties": [
    "nombre_de_propiedad_adicional_1",
    (…)
  ],
  "events": [
    "nombre_de_propiedad_adicional_1",
    (…)
  ]
}
```

…donde:

- `"Nombre_de_API"`
  - : Esta clave es un ID utilizado por macros de menu lateral como `\{{APIRef("Nombre_de_API")}}` y el nombre que se muestra en el menu lateral. Elígelo sabiamente.
    > [!WARNING]
    > Si desea cambiar el nombre que se muestra en el menu lateral, debe editar todas las páginas que lo muestran.
- `"overview"`
  - : Esta es una lista que contiene una página: la página de resumen, utilizada como enlace para el texto `"Nombre_de_API"`. El valor es el _titulo de la página_, y la página debe estar en el directorio `web/api/`.
- `"guides"`
  - : Esta es una lista de guías para mostrar en el menu lateral, en el orden dado. Los valores son _rutas a la página_, comenzando con `/docs/`.
- `"interfaces"`
  - : Enumera las interfaces que forman parte de la API.
- `"methods"`
  - : Enumera los métodos que forman parte de la API.
    > [!NOTE]
    > Los métodos de las interfaces enumeradas en `"interfaces"` **no deben** estar enumerados allí. Se añaden automáticamente al menu lateral si la etiqueta `Method` está en el encabezado YAML de esa página.
- `"properties"`
  - : Enumera los métodos en otras interfaces que forman parte de la API, como `navigator.xr` (una propiedad que la API de WebXR agrega al objeto `navigator`)
    > [!NOTE]
    > Las propiedades de las interfaces enumeradas en `"interfaces"` **no deben** estar enumeradas allí. Se añaden automáticamente a la barra lateral si la etiqueta `Property` está en el encabezado YAML de esa página.
- `"events"`
  - : Enumera los eventos de otras interfaces que forman parte de la API. Los valores son el _título de las páginas_ (que debe residir en `Web/Events`)
    > [!NOTE]
    > Los eventos dirigidos a las interfaces enumeradas en `"interfaces"` **no deben** estar enumerados allí. Se añaden automáticamente al menu lateral si la etiqueta `Event` (¡singular!) está en el encabezado YAML de esa página.

Hay otras dos claves, `"dictionaries"` y `"callbacks"`, que funcionan con el mismo principio. Como ya no documentamos estas entidades en sus propias páginas, su uso está obsoleto y no se les debe añadir ninguna entrada nueva (y las eliminamos poco a poco).

> [!NOTE]
> Además, ninguna de las claves es obligatoria; es una buena práctica (y lo haremos cumplir) agregar las no obsoletas con una lista vacía en lugar de omitirlas. Muestra que la ausencia de valor es una elección consciente.

### Proceso de actualización para GroupData

Este archivo debe actualizarse en el mismo PR donde se producen los cambios que afectan al menu lateral. De esta forma, el menu lateral estará siempre actualizado. Los revisores no deben fusionar las solicitudes de incorporacion que no las adopten.

Para probar sus cambios, verifique que el menu lateral en los archivos de su PR muestre todas las entradas correctamente.

El archivo `GroupData.json` se encuentra [aquí](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) en GitHub.

## InterfaceData: herencia de la interfaz de grabación

> [!NOTE]
> Esperamos generar este archivo automáticamente a partir de los datos disponibles a través de w3c/webref en el futuro.

`InterfaceData` describe la jerarquía de las interfaces. Enumera la herencia. En el pasado, también enumeraba los mixins implementados por cada interfaz; pero ese uso está obsoleto, y eliminamos los mixins de este archivo al mismo ritmo que se actualiza MDN.

Estos datos de herencia se utilizan al crear menus laterales de API y por el `\{{InheritanceDiagram}}` en las páginas de la interfaz.

### Estructura de InterfaceData

Una entrada en `InterfaceData.json` tiene la siguiente estructura:

```json
"Nombre_de_la_interfaz": {
  "inh": "Nombre_de_la_interfaz_padre",
  "impl": []
}
```

> [!NOTE]
> Como los mixins están obsoletos, `"impl"` debe ser una lista vacía para todas las interfaces nuevas.

El valor de `"Nombre_de_la_interfaz_padre"` no es una lista sino una sola entrada, obligatoria; no debemos enumerar ninguna interfaz que no herede de otra.

### Proceso de actualización para InterfaceData

El mismo PR que añade una nueva interfaz que hereda de otra debe actualizar este archivo. Los revisores no deben fusionar las solicitudes de incorporacion que no lo hacen.

Para probar sus cambios, verifique que los menus laterales de cada interfaz que editó en su PR muestren la herencia correctamente.

El archivo `InterfaceData.json` se encuentra [aquí](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) en GitHub.

## SpecData: Información de especificación

> [!WARNING]
> El archivo `SpecData.json` ya no se mantiene. La información de especificación canónica se almacena en w3c/browser-spec y en la clave `spec_url` de características en mdn/browser-compat-data.

Las macros `\{{SpecName}}` y `\{{Spec2}}` que estamos eliminando utilizan el archivo `SpecData.json`. No aceptamos más contribuciones al archivo `SpecData.json`; en su lugar, intente insertar una tabla de especificaciones, utilizando la macro `\{{Specifications}}`, o intente codificar el enlace (bueno) a la especificación. Tenga en cuenta que la mayoría de las veces, mencionar o vincular a una especificación fuera de la sección _Especificaciones_ es un signo de algo que no está debidamente documentado en MDN.

El archivo `SpecData.json` se encuentra [aquí](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) en GitHub.
