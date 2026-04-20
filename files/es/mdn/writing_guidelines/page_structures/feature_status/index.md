---
title: Estado de características
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

El estado de una característica indica ampliamente el estado de implementación y estandarización entre navegadores de una característica particular de la plataforma web, como un método de API web o una propiedad CSS.

Es uno de los siguientes:

- [`deprecated`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated)
- [`experimental`](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental)
- [`non-standard`](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> No actualice manualmente los estados de las características en el repositorio `mdn/content`.
> La fuente de documentación se [actualiza automáticamente](#cómo_se_agregan_o_actualizan_los_estados_de_las_características) desde la información en el repositorio de GitHub `mdn/browser-compat-data`.

Si no se aplica ninguno de los estados anteriores, la característica se considera _característica estable y estándar_.
Para obtener más información sobre estos términos, consulte la página ["Experimental, deprecated y obsolete"](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Para obtener información sobre cómo se determina el estado de una característica, consulte la sección [elección de propiedades de estado](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#choosing-status-properties) en el repositorio `@mdn/browser-compat-data` (BCD).

## ¿Cómo se agregan o actualizan los estados de las características?

Los estados de las características de todas las características documentadas en MDN se rastrean en su repositorio acompañante [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (BCD). Una automatización _actualiza automáticamente_ los estados en el repositorio `mdn/content` cada vez que se lanza una [nueva versión de BCD](https://github.com/mdn/browser-compat-data/releases).

La automatización usa la clave [`browser-compat`](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#using_bcd_data_in_mdn_pages) en el front matter. La clave almacena la consulta BCD necesaria para localizar la característica en los datos de compatibilidad. Si la clave `browser-compat` tiene múltiples valores, la automatización usa solo el primer valor para representar las macros de estado.

> [!NOTE]
> Para actualizar el estado de una característica en el contenido de MDN, necesita [enviar una solicitud de extracción](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) en el repositorio BCD. Después de que sus cambios sean aprobados y fusionados en BCD, pasan a un lanzamiento semanal, y una solicitud de extracción automatizada actualiza los estados en el repositorio `mdn/content` para cada lanzamiento.

## ¿Cómo se especifican los estados de las características en el contenido?

Las siguientes secciones documentan los mecanismos que se usan para insertar y representar la información del estado de las características en los documentos de MDN. Como se mencionó, estos deben considerarse de solo lectura, ya que su inclusión en el contenido está automatizada.

### Iconos de estado de características en barras laterales

La propiedad `status` en el front matter de la página se usa para generar iconos de estado para las características cuando se muestran en las barras laterales.

```yaml
---
title: Nombre de la característica
status:
  - deprecated
  - experimental
  - non-standard
browser-compat: api.feature
---
```

### Banners de página de estado de características

Las siguientes macros se usan para representar los banners de estado en los encabezados de página:

- `\{{Deprecated_Header}}`
  - : Para el estado `deprecated`. Genera un banner **Estado obsoleto**:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`
  - : Para el estado `experimental`. Genera un banner **Estado experimental**:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : Para el estado `non-standard`. Genera un banner **Estado no estándar**:
    {{Non-standard_Header}}

### Iconos de estado de características en listas de definición

Las siguientes macros se usan para representar iconos de estado en línea junto a los elementos de la lista de definición:

- [`\{{Experimental_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icono: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icono: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icono: {{Deprecated_Inline}}

Si una página de característica web tiene banners de estado, entonces las macros en línea de los mismos estados se usan explícitamente para cada miembro/valor de la característica en la lista de definición.
Por ejemplo, si una página está marcada como experimental usando `\{{SeeCompatTable}}`, entonces cada miembro/valor de la característica se marca explícitamente como experimental usando la macro `\{{Experimental_Inline}}` en la lista de definición.

## Véase también

- [Macros de barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de enlaces](/es/docs/MDN/Writing_guidelines/Page_structures/Links)
