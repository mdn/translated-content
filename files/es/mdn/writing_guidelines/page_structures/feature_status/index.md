---
title: Estado de una característica
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

El estado de una característica indica, en términos generales, el estado de implementación y estandarización entre navegadores de una característica particular de la plataforma web, como un método de API web o una propiedad CSS.

Es uno de los siguientes:

- [`deprecated`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> No actualices manualmente los estados de las características en el repositorio `mdn/content`.
> La documentación se [actualiza automáticamente](#how_feature_statuses_are_added_or_updated) a partir de la información del repositorio `mdn/browser-compat-data` en GitHub.

Si no se aplica ninguno de los estados anteriores, la característica se considera _estable y estándar_.
Para más información sobre estos términos, consulta la página ["Experimental, obsoleta y en desuso"](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Para obtener información sobre cómo se determina el estado de una característica, consulta la sección [choosing status properties](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#choosing-status-properties) en el repositorio `@mdn/browser-compat-data` (BCD).

## ¿Cómo se agregan o actualizan los estados de las características?

Los estados de todas las características documentadas en MDN se rastrean en su repositorio adjunto [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD). Una automatización _actualiza automáticamente_ los estados en el repositorio `mdn/content` cada vez que se publica una nueva [versión de BCD](https://github.com/mdn/browser-compat-data/releases).

La automatización utiliza la clave [`browser-compat`](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) en el front-matter. Esta clave almacena la consulta de BCD necesaria para localizar la característica en los datos de compatibilidad. Si la clave `browser-compat` tiene varios valores, la automatización usa únicamente el primero para renderizar las macros de estado.

> [!NOTE]
> Para actualizar el estado de una característica en el contenido de MDN, tienes que [enviar una pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) en el repositorio de BCD. Una vez que tus cambios sean aprobados y fusionados en BCD, se incluirán en una versión de lanzamiento semanal, y una pull request automatizada actualizará los estados en el repositorio `mdn/content` para cada versión de lanzamiento.

## ¿Cómo se especifican los estados de las características en el contenido?

Las siguientes secciones documentan los mecanismos que se utilizan para insertar y renderizar información sobre el estado de las características en los documentos de MDN. Como se mencionó, estos deben considerarse de solo lectura, ya que su inclusión en el contenido es automática.

### Iconos de estado en las barras laterales

La propiedad `status` del front-matter de la página se utiliza para generar iconos de estado para las características cuando se muestran en las barras laterales.

```yaml
---
title: Feature name
status:
  - deprecated
  - experimental
  - non-standard
browser-compat: api.feature
---
```

### Banners de estado en las páginas

Las siguientes macros se utilizan para renderizar los banners de estado en los encabezados de las páginas:

- `\{{Deprecated_Header}}`
  - : Para el estado `deprecated`. Genera un banner de **Estado obsoleto**:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`
  - : Para el estado `experimental`. Genera un banner de **Estado experimental**:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : Para el estado `non-standard`. Genera un banner de **Estado no estándar**:
    {{Non-standard_Header}}

### Iconos de estado en las listas de definiciones

Las siguientes macros se utilizan para mostrar iconos de estado en línea junto a los elementos de la lista de definiciones:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icono: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icono: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icono: {{Deprecated_Inline}}

Si una página de característica web tiene banners de estado, entonces las macros en línea de los mismos estados se utilizan explícitamente para cada miembro o valor de la característica en la lista de definiciones.
Por ejemplo, si una página está marcada como experimental usando `\{{SeeCompatTable}}`, entonces cada miembro o valor de la característica se marca explícitamente como experimental usando la macro `\{{Experimental_Inline}}` en la lista de definiciones.

## Véase también

- [Macros de la barra lateral](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de enlace](/es/docs/MDN/Writing_guidelines/Page_structures/Links)
