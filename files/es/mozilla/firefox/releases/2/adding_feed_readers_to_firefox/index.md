---
title: Añadir lectores de canales a Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
---

{{FirefoxSidebar}}

A partir de Firefox 2, Firefox permite seleccionar diferentes lectores de canales RSS o Atom para usarlos cuando se trata de leer un canal. Este artículo proporciona información sobre cómo añadir lectores adicionales no admitidos por defecto.

## Añadir un nuevo lector de canales basado en la web

Para añadir un nuevo lector de canales basado en la web, todo lo que tiene que hacer es añadir tres nuevas preferencias:

- `browser.contentHandlers.types.número.title`
  - : El nombre del lector de canales.
- `browser.contentHandlers.types.número.type`
  - : Para un lector de canales, en este caso sería "application/vnd.mozilla.maybe.feed".
- `browser.contentHandlers.types.número.uri`
  - : La URI del lector de canales. Utilice "%s" donde se deba insertar la URL del canal.

`número` debe ser reemplazado con el siguiente número único más alto que no haya sido usado aún. Por ejemplo, si desea añadir un nuevo lector de canales llamado "Lector Sencillo", y ya están definidos manejadores de contenido con los números 0 al 4, debe sustituir `número` por 5, como sigue:

- `browser.contentHandlers.types.5.title`: Lector Sencillo
- `browser.contentHandlers.types.5.type`: application/vnd.mozilla.maybe.feed
- `browser.contentHandlers.types.5.uri`: `http://www.urllectorsencillo.com?feed=%s`

Puede añadir estas preferencias manualmente, visitando about:config, o puede programarlo, si una extensión desea instalar un nuevo lector de canales.

### Añadir un lector de canales desde una aplicación web

El código JavaScript en la web puede añadir un lector de canales fácilmente, usando la función `navigator.registerContentHandler()`, de esta manera:

```
navigator.registerContentHandler("application/vnd.mozilla.maybe.feed",
                                 "http://www.urllectorsencillo.com?feed=%s",
                                 "Lector Sencillo");
```

## Añadir una nueva aplicación lectora de canales

La manera más sencilla de hacer esto es simplemente usar la interfaz de usuario disponible, usando el panel Canales en la ventana de preferencias (u opciones, dependiendo de su plataforma).

También se puede hacer programáticamente mediante una extensión, lo cual se hace estableciendo el valor de la opción `browser.feeds.handlers.application` a la ruta de la aplicación a usar para leer los canales.
