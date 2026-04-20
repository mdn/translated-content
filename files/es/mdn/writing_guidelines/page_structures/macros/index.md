---
title: Uso de macros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

{{MDNSidebar}}

El backend [rari](https://github.com/mdn/rari) es el sistema de compilación de MDN y proporciona una sintaxis de macros para tareas comunes.

## Uso de una macro en el contenido

Para usar una macro, encierra el nombre de la macro en un par de llaves dobles (`{{ }}`) junto con sus parámetros, si los hay:

```plain
\{{nombredemacro(lista-de-parámetros)}}
```

Algunas notas sobre las llamadas a macros:

- Los nombres de las macros son sensibles a mayúsculas y minúsculas, pero se hace algún intento de corregir errores comunes de mayúsculas; puedes usar todo en minúsculas incluso si el nombre de la macro usa mayúsculas dentro de él, y puedes poner en mayúscula una macro cuyo nombre normalmente comienza con una letra minúscula.
- Los parámetros están separados por comas.
- Si no hay parámetros, puedes omitir completamente los paréntesis. Por ejemplo, las macros `\{{APIRef()}}` y `\{{APIRef}}` son idénticas.
- Los parámetros numéricos pueden escribirse con o sin comillas. Sin embargo, los números de versión con múltiples decimales deben estar entre comillas.

Las macros pueden ser tan simples como solo insertar un bloque de texto más grande o intercambiar contenido de otra parte de MDN, o tan complejas como construir un índice completo de contenido buscando en partes del sitio, aplicando estilo a la salida y agregando enlaces.

## Consulte también

- [Macros usadas comúnmente](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Macros de enlaces](/es/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de estado de características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Otras macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (macros poco usadas o obsoletas)
