---
title: Cómo reemplazar las macros obsoletas de KumaScript
slug: MDN/Writing_guidelines/Page_structures/Macros/Deprecated_macros
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

La siguiente es una lista de [macros de KumaScript](https://github.com/mdn/yari/tree/main/kumascript/macros) que han quedado en desuso y ya no se deben usar. Este documento también brinda orientación sobre cómo reemplazar estas macros si las encuentras en el contenido.

## La macro `\{{Link}}`

La macro `Link` [ahora está obsoleta](https://github.com/mdn/yari/pull/6865) y
ya no se debe usar. Cualquier ocurrencia que aún exista en el contenido en mantenimiento/activo
se debe reemplazar con un enlace de estilo Markdown simple.

### Cómo reemplazar la macro

Un uso común de la macro es el siguiente:

```plain
La página \{{Link("/es/docs/Web/JavaScript/Guide/Numbers_and_dates")}} en MDN
```

Esto se puede reemplazar con el siguiente Markdown:

```markdown
La página [Números y fechas](/es/docs/Web/JavaScript/Guide/Numbers_and_dates) en MDN
```

Al reemplazar las macros `Link`:

- El **texto del enlace** debe coincidir con el título de la página a la que se enlaza.
- Los enlaces internos son **relativos a la raíz**, por lo que debes omitir `https://developer.mozilla.org` al comienzo de la URL.
