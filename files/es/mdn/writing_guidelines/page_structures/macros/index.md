---
title: Usar macros
slug: MDN/Writing_guidelines/Page_structures/Macros
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

La plataforma [Yari](/es/docs/MDN/Yari) en la que se ejecuta MDN proporciona un sistema de macros, [KumaScript](/es/docs/MDN/Tools/KumaScript), que permite automatizar ciertas tareas. Este artículo proporciona información sobre cómo invocar las macros de MDN dentro de los artículos.

La [guía de KumaScript](/es/docs/MDN/Tools/KumaScript) brinda una descripción detallada de cómo usar macros en MDN, por lo que esta sección es más una breve descripción general.

## Cómo se implementan las macros

Las macros en MDN se implementan usando código [JavaScript](/es/docs/Web/JavaScript) ejecutado por el servidor, interpretado usando [Node.js](https://nodejs.org/es/). Además de eso, tenemos una serie de bibliotecas que hemos implementado que brindan servicios y características para permitir que las macros interactúen con la plataforma y su contenido.

## Usar una macro en el contenido

Para usar una macro, encierra la llamada a la macro entre un par de llaves dobles junto con sus parámetros, si los hay:

```plain
\{{nombre-macro(lista-de-parámetros)}}
```

Algunas notas sobre llamadas a macros:

- Los nombres de las macros distinguen entre mayúsculas y minúsculas, pero se intenta corregir los errores comunes de uso de mayúsculas; puedes usar todo en minúsculas incluso si el nombre de la macro usa mayúsculas, y puedes escribir en mayúscula una macro cuyo nombre normalmente comienza con una letra minúscula.
- Los parámetros están separados por comas.
- Si no hay parámetros, puedes omitir los paréntesis por completo; `\{{macroname()}}` y `\{{macroname}}` son idénticos.
- Los parámetros numéricos pueden estar entre comillas o no. De ti depende (sin embargo, si tienes un número de versión con varios decimales, debe estar entre comillas).
- Si obtiene errores, revisa tu código cuidadosamente. Si aún no puedes averiguar qué está pasando, consulta [Solución de errores de KumaScript](/es/docs/MDN/Tools/KumaScript/Troubleshooting) para obtener ayuda.

Las macros están almacenadas en caché; para cualquier conjunto de valores de entrada (tanto parámetros como valores de entorno, como la URL para la que se ejecutó la macro), los resultados se almacenan y reutilizan. Esto significa que la macro solo se ejecuta realmente cuando cambian las entradas.

Las macros pueden ser tan simples como simplemente insertar un bloque de texto más grande o intercambiar contenido de otra parte de MDN, o tan complejas como crear un índice completo de contenido buscando en partes del sitio, diseñando el resultado y agregando enlaces.

Puedes leer sobre nuestras macros más utilizadas en la página [Macros de uso común](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros); Además, puedes navegar a través de las [fuentes completas para todas las macros](https://github.com/mdn/yari/tree/main/kumascript/macros). La mayoría de las fuentes de macros tienen documentación incorporada, como comentarios en la parte superior.

Para obtener una lista de macros obsoletas y documentación sobre cómo reemplazar estas macros, consulta nuestra [documentación de macros obsoletas](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Deprecated_macros).
