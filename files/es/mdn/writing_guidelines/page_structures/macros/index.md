---
title: Uso de macros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

El backend [rari](https://github.com/mdn/rari) es el sistema de compilación de MDN y proporciona una sintaxis de macros para tareas comunes.

## Uso de una macro en el contenido

Para usar una macro, encierra su nombre entre llaves dobles (`{{ }}`) junto con sus parámetros, si los hay:

```plain
\{{macroname(parameter-list)}}
```

Algunas notas sobre las llamadas a macros:

- Los nombres de las macros distinguen entre mayúsculas y minúsculas, pero se intenta corregir los errores comunes de mayúsculas; puedes usar solo minúsculas incluso si el nombre de la macro incluye mayúsculas, y puedes escribir con mayúscula una macro cuyo nombre normalmente comience con una letra minúscula.
- Los parámetros están separados por comas.
- Si no hay parámetros, puedes omitir los paréntesis por completo. Por ejemplo, las macros `\{{APIRef()}}` y `\{{APIRef}}` son equivalentes.
- Los parámetros numéricos pueden escribirse con o sin comillas. Sin embargo, los números de versión con varios decimales deben ir entre comillas.

Las macros pueden ser tan simples como insertar un bloque de texto extenso o sustituir contenido de otra parte de MDN, o tan complejas como construir un índice completo de contenido explorando secciones del sitio, aplicando estilos al resultado y añadiendo enlaces.

## Véase también

- [Macros de uso común](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Macros de enlace](/es/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de barra lateral](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de estado de características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Otras macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (macros poco usadas u obsoletas)
