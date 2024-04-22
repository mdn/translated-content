---
title: API de almacenamiento web
slug: Web/API/Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

La **API de almacenamiento web** proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave/valor, de una forma mucho más intuitiva que utilizando cookies.

## Almacenamiento web, conceptos y uso

Los dos mecanismos en el almacenamiento web son los siguientes:

- **`sessionStorage`** mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).
- **`localStorage`** hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

Estos mecanismos están disponibles mediante las propiedades [`Window.sessionStorage`](/es/docs/Web/API/Window/sessionStorage) y [`Window.localStorage`](/es/docs/Web/API/Window/localStorage) (dicho con más precisión, en navegadores con soporte, el objeto `Window` implementa los objetos `WindowLocalStorage` y `WindowSessionStorage`, en los cuales se basan las propiedades `localStorage` y `sessionStorage`). Al invocar uno de éstos, se creará una instancia del objeto [`Storage`](/es/docs/Web/API/Storage), a través del cual los datos pueden ser creados, recuperados y eliminados. sessionStorage y localStorage utilizan un objeto de almacenamiento diferente según su origen — funcionan y son controlados por separado.

> **Nota:** Acceder al Almacenamiento web desde IFrames de terceros está prohibido si el usuario tiene [deshabilitadas las cookies de terceros](https://support.mozilla.org/en-US/kb/disable-third-party-cookies) (Firefox implementa este comportamiento a partir de la [versión 43](/es/docs/Mozilla/Firefox/Releases/43)).

> **Nota:** El almacenamiento web no es lo mismo que [mozStorage](/es/docs/Storage) (interfaces Mozilla's XPCOM para SQLite) o la [Session store API](/es/docs/Session_store_API) (una utilidad de almacenamiento [XPCOM](/es/docs/XPCOM) usada por extensiones).

## Interfaces de almacenamiento web

- {{domxref("Storage")}}
  - : Permite crear, recuperar y eliminar datos de un dominio y tipo de almacenamiento (sesión o local) específicos.
- {{domxref("Window")}}
  - : La API de almacenamiento web extiende el objeto {{domxref("Window")}} con dos nuevas propiedades — {{domxref("Window.sessionStorage")}} y {{domxref("Window.localStorage")}} — que proveen acceso a la sesión actual del dominio y a objetos {{domxref("Storage")}} locales, respectivamente. También ofrece un manejador de evento {{domxref("Window.onstorage")}} que se dispara cuando un área de la memoria cambia (por ejemplo, cuando se almacena un nuevo elemento).
- {{domxref("StorageEvent")}}
  - : El evento `storage` se dispara en el objeto `Window` de un documento cuando un área de la memoria cambia.

## Ejemplos

Para ilustrar algunos usos típicos del almacenamiento web, hemos creado un ejemplo simple, llamado [Demo de almacenamiento web](https://github.com/mdn/web-storage-demo). La [página de inicio](http://mdn.github.io/web-storage-demo/) proporciona controles que puedes utilizar para personalizar el color, la tipografía y la imagen decorativa. Cuando seleccionas una opción diferente, la página se actualiza instantáneamente; además, tus opciones se almacenan en `localStorage`, de forma que si abandonas la página y la vuelves a cargar, tus opciones son recordadas.

También creamos una[página de salida del evento](http://mdn.github.io/web-storage-demo/event.html) — si cargas esta página en otra pestaña y luego haces cambios a tus opciones en la página de inicio, verás que se muestra la información almacenada actualizada puesto que se dispara un evento [`StorageEvent`](/es/docs/Web/Reference/Events/StorageEvent).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Navegación privada / Modo incógnito

La mayoría de los navegadores de hoy en día soportan una opción de privacidad llamada 'Modo incógnito', 'Navegación privada', o algo similar, que básicamente se asegura de que la sesión de navegación no deje rastros después de que el navegador se cierra. Esto es fundamentalmente incompatible con el almacenamiento web por obvias razones. Por ello, muchos navegadores están experimentando con diferentes escenarios para lidiar con esta incompatibilidad.

La mayoría de los navegadores han optado por una estrategia donde las API de almacenamiento siguen disponibles y aparentemente completamente funcionales, con la única gran diferencia de que todos los datos almacenados son eliminados después de cerrar el navegador. Para estos navegadores aún hay diferentes interpretaciones sobre qué debería hacerse con los datos almacenados existentes (de una sesión de navegación normal). ¿Deberían de estar disponibles para lectura cuando esté en modo privado? Entonces, hay algunos navegadores, sobre todo Safari, que han optado por una solución donde el almacenamiento está disponible, pero vacío, y tiene un cupo de 0 bytes asignado, por lo que se vuelve imposible usar esta memoria para escribir datos.

Los desarrolladores deberían de estar conscientes de estas diferentes implementaciones y tenerlas en cuenta a la hora de desarrollar aplicaciones web que depende de la API de almacenamiento web. Para más información, échale un vistazo a[esta entrada de blog WHATWG](https://blog.whatwg.org/tag/localstorage) que trata específicamente con este tema.

## Ver también

- [Usando la API de almacenamiento web](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
