---
title: Utilizando macros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 92cbbdaf81325539eace880b5e78152e3cb8ba49
---

{{MDNSidebar}}

La plataforma [Yari](https://github.com/mdn/yari/tree/main/docs/what-yari-does.md) en la que se ejecuta MDN, proporciona un sistema de macros, [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript) que permite automatizar ciertas tareas. Este artículo proporciona información sobre cómo invocar las macros de MDN dentro de los artículos.

La [guía de KumaScript](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md) proporciona una visión en profundidad de cómo utilizar macros en MDN, por lo que esta sección es más bien una breve visión general.

## Cómo se implementan las macros

Las macros en MDN se implementan utilizando código [JavaScript](/es/docs/Web/JavaScript) ejecutado por el servidor e interpretado usando [Node.js](https://nodejs.org/es/). Sobre esto, hemos implementado una serie de bibliotecas que proporcionan servicios y funciones para que las macros interactúen con la plataforma y el contenido.

## Utilizar una macro en el contenido

Para utilizar una macro, encierre la llamada a la macro en un par de llaves dobles incluyendo sus parámetros, si los hay.

```plain
\{{nombredelamacro(lista-de-parámetros)}}
```

Algunos apuntes sobre la llamada a las macros

- Los nombres de las macros son _case-sensitive_ (sensibles a mayúsculas), es decir distinguen entre minúsculas y mayúsculas, pero se intentan corregir los errores comunes de mayúsculas. Puede escribir el nombre completo de una macro en minúsculas incluso si el nombre de la macro utiliza mayúsculas en su interior. Del mismo modo, puede comenzar el nombre de una macro en mayúsculas,incluso cuando éstas generalmente suelen comenzar con una letra minúscula.
- Los parámetros deben ir separados por comas.
- Si no hay parámetros, puede omitir por completo los paréntesis. `\{{nombredelamacro()}}` y `\{{nombredelamacro}}` son idénticos.
- Los parámetros numéricos puede ir entre comillas o no. Depende de ti (sin embargo, si tiene un número de versión con varios decimales, debe ir entre comillas).
- Si obtienes errores, revisa tu código cuidadosamente. Si sigues sin poder averiguar qué está pasando, consulta [Solución de errores de KumaScript](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md) para obtener ayuda.

Las macros son almacenadas en caché de forma considerable. Para cualquier conjunto de valores de entrada (tanto parámetros y valores de entorno como la URL para la que se ejecutó la macro), los resultados se almacenan y se reutilizan. Esto significa que la macro realmente sólo se ejecuta cuando las entradas cambian.

Una macro puede ser algo tan sencillo como insertar un bloque de texto más grande, intercambiar contenidos de otra parte de MDN. Pero también puede ser algo complejo, como crear un índice de contenidos completo para buscar a través de las diferentes secciones del sitio, estilizando el resultado y añadiendo enlaces.

Puede consultar las macros más utilizadas en la página [Macros usadas comúnmente](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros). También puede consultar las [Fuenetes completas para todas las macros](https://github.com/mdn/yari/tree/main/kumascript/macros). La mayoría de las fuentes de macros tienen documentación incorporada en forma de comentarios en la parte superior.
