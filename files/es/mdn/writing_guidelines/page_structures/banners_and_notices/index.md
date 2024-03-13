---
title: Banners y avisos
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{MDNSidebar}}

Se agregan banners a algunas páginas, en particular a la referencia de la API, para resaltar factores importantes que afectarán la forma en que se usa el contenido descrito.
Por ejemplo, los banners se usan para resaltar cuándo una interfaz, un método o una propiedad en particular están obsoletos y no deben usarse en el código de producción.

Este artículo describe los banners más importantes y cómo se agregan.

## Cómo agregar un banner

Los banners se agregan usando macros.
Las macros de banners deben insertarse debajo de los metadatos de la página, junto con la macro del menú lateral (_sidebar_) de la página.
Por ejemplo, la macro `\{{SeeCompatTable}}` se agrega a continuación para indicar que la [API Ink](/es/docs/Web/API/Ink_API) es [Experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).

```md
---
title: API Ink
slug: Web/API/Ink_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Ink
---

\{{DefaultAPISidebar("Ink API")}}\{{SeeCompatTable}}
```

Una página que tiene un banner generalmente también tendrá metadatos de página "complementarios".
Por ejemplo, una página que tiene `\{{SeeCompatTable}}` generalmente también debe tener el estado `experimental` agregado (como se muestra arriba) para garantizar que tenga los íconos apropiados en el menú lateral.

> **Nota:** Las macros de banner no _dependen_ de los metadatos, pero sí lo hacen algunos otros contenidos insertados con macros.
> Por ejemplo, la macro `\{{Compat}}` depende del valor de metadatos `browser-compat`.

## Qué banners pueden/deben agregarse

Las [Plantillas de tipo de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types#templates) incluyen las macros más importantes.
En resumen:

- `\{{SeeCompatTable}}`: Genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
  También agregue `status` de `experimental` en los metadatos de la página.
- `\{{Deprecated_Header}}`: Genera un banner de **Obsoleto** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
  También agregue `status` de `deprecated` en los metadatos de la página.
- `\{{Non-standard_Header}}`: Genera un banner de **No estándar** que indica que el uso de la tecnología no forma parte de una especificación formal, incluso si se implementa en varios navegadores.
  También agregue `status` de `non-standard` en los metadatos de la página.
- `\{{SecureContext_Header}}`: Esto genera un banner de **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Secure_Contexts).

> **Nota:** Los metadatos `page-type`, `status` y `browser-compat` solo son utilizados en el contenido en Inglés.
