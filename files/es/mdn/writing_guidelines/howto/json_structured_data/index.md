---
title: Cómo usar datos estructurados
short-title: Usar datos estructurados
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

MDN almacena datos en estructuras bien definidas cuando es posible. Esta información se centraliza y se puede actualizar una vez, mientras se usa en numerosos lugares.

Hay varios de estos archivos, y este documento describe su propósito, estructura y proceso de mantenimiento.

## GroupData: agrupación lógica de API

`GroupData` es un archivo JSON que recopila información sobre las API web. La agrupación de API es algo difusa: cualquier interfaz, método o propiedad puede ser parte de varias API. El conjunto de API agrupadas bajo un nombre es una convención usada para comunicar sobre una característica, sin ningún cumplimiento técnico.

Sin embargo, MDN necesita esta información para crear barras laterales coherentes de Web-API (como con la macro `\{{APIRef}}`) con las páginas de referencia, guías y artículos de descripción general apropiados.
GroupData hace exactamente eso: para cada API, enumera las interfaces, propiedades, métodos, guías y páginas de descripción general. En el pasado, también enumeraba diccionarios y devoluciones de llamada. Pero ese uso, aunque todavía es compatible, está obsoleto y se eliminará en el futuro.

### Estructura de GroupData

> [!WARNING]
> Las páginas inexistentes listadas en este archivo se ignoran (en en-US).

Una entrada en `GroupData.json` tiene la siguiente estructura:

```json
{
  "Name_of_the_API": {
    "overview": ["name_of_the_overview_page"],
    "guides": [
      "name_of_guide_1"
      // …
    ],
    "interfaces": [
      "name_of_interface_1"
      // …
    ],
    "methods": [
      "name_of_additional_method_1"
      // …
    ],
    "properties": [
      "name_of_additional_property_1"
      // …
    ],
    "events": [
      "name_of_additional_property_1"
      // …
    ]
  }
}
```

…donde:

- `"Name_of_the_API"`
  - : Esta clave es tanto un ID usado por macros de barra lateral como `\{{APIRef("Name_of_the_API")}}` como el nombre que se muestra en la barra lateral misma. Elija sabiamente.
    > [!WARNING]
    > Si desea cambiar el nombre que se muestra en la barra lateral, debe editar todas las páginas que lo muestran.
- `"overview"`
  - : Esta es una lista que contiene una página: la página de descripción general, usada como el enlace para el texto `"Name_of_the_API"`. El valor es el _título de la página_, y la página debe estar en el directorio `web/api/`.
- `"guides"`
  - : Esta es una lista de guías para mostrar en la barra lateral, en el orden dado. Los valores son _rutas a la página_, comenzando con `/docs`.
- `"interfaces"`
  - : Esta enumera las interfaces que son parte de la API.
- `"methods"`
  - : Esto enumera los métodos que son parte de la API.
    > [!NOTE]
    > Los métodos de las interfaces listadas en `"interfaces"` **no** deben listarse allí. Se agregan automáticamente a la barra lateral si la clave `page-type` para esa página es `web-api-static-method` o `web-api-instance-method`.
- `"properties"`
  - : Esto enumera las propiedades en otras interfaces que son parte de la API, como `navigator.xr` (una propiedad que la API WebXR agrega al objeto `navigator`)
    > [!NOTE]
    > Las propiedades de las interfaces listadas en `"interfaces"` **no** deben listarse allí. Se agregan automáticamente a la barra lateral si la clave `page-type` para esa página es `web-api-static-property` o `web-api-instance-property`.
- `"events"`
  - : Esto enumera eventos de otras interfaces que son parte de la API. Los valores son el _título de las páginas_.
    > [!NOTE]
    > Los eventos dirigidos a las interfaces listadas en `"interfaces"` **no** deben listarse allí. Se agregan automáticamente a la barra lateral si la clave `page-type` para esa página es `web-api-event`.

Hay dos otras claves, `"dictionaries"` y `"callbacks"`, que operan con el mismo principio. Como ya no documentamos estas entidades en sus propias páginas, su uso está obsoleto y no se debe agregar ninguna entrada nueva (y las eliminamos poco a poco).

> [!NOTE]
> Además, ninguna de las claves es obligatoria; es una buena práctica (y haremos cumplir esto) agregar las no obsoletas con una lista vacía en lugar de omitirlas. Muestra que la ausencia de valor es una elección consciente.

### Proceso de actualización para GroupData

Este archivo, ubicado en [`files/jsondata/GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json), debe actualizarse en el mismo PR donde ocurren los cambios que afectan la barra lateral. De esa manera, la barra lateral siempre está actualizada. Las revisoras no deben fusionar PRs que no lo adopten.

Para probar sus cambios, verifique que la barra lateral en los archivos en su PR muestre todas las entradas correctamente.

## InterfaceData: registrar herencia de interfaz

> [!NOTE]
> Esperamos generar este archivo automáticamente desde los datos disponibles a través de w3c/webref en el futuro.

`InterfaceData` describe la jerarquía de las interfaces. Enumera herencia. En el pasado, también enumeraba mixins implementados por cada interfaz; pero ese uso está obsoleto, y eliminamos los mixins de este archivo al mismo ritmo que MDN se actualiza.

Estos datos de herencia se usan al crear barras laterales de API y por la `\{{InheritanceDiagram}}` en las páginas de interfaz.

### Estructura de InterfaceData

Una entrada en `InterfaceData.json` tiene la siguiente estructura:

```json
{
  "Name_of_the_interface": {
    "inh": "Name_of_the_parent_interface",
    "impl": []
  }
}
```

> [!NOTE]
> Como los mixins están obsoletos, `"impl"` debe ser una lista vacía para todas las interfaces nuevas.

El valor de `"Name_of_the_parent_interface"` no es una lista sino una sola entrada, obligatoria; no debemos listar ninguna interfaz que no herede de otra.

### Proceso de actualización para InterfaceData

El mismo PR que agrega una nueva interfaz que hereda de otra debe actualizar este archivo, ubicado en [`files/jsondata/InterfaceData.json`](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json). Las revisoras no deben fusionar PRs que no lo hagan.

Para probar sus cambios, verifique que las barras laterales de cada interfaz que editó en su PR muestren la herencia correctamente.

## SpecData: Información de especificaciones

> [!WARNING]
> El archivo [`SpecData.json`](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) ya no se mantiene.
> La información de especificaciones canónica se almacena en [w3c/browser-specs](https://github.com/w3c/browser-specs) y en la clave `spec_url` de las características definidas en [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data).

No aceptamos más contribuciones al archivo `SpecData.json`; en su lugar, inserte una tabla de especificaciones usando la macro `\{{Specifications}}`, o vincule a la especificación en prosa.
Note que la mayoría de las veces, mencionar o vincular a una especificación fuera de la sección _Especificaciones_ es un signo de algo no documentado apropiadamente en MDN.
