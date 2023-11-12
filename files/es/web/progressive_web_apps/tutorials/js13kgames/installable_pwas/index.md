---
title: Cómo hacer PWAs instalables
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
---

{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}

En el último artículo, leímos cómo la aplicación de ejemplo, [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/), funciona sin conexión gracias a su [servicio worker](/es/docs/Web/API/Service_Worker_API), pero podemos ir aún más lejos y permitir que los usuarios instalen la aplicación web en los navegadores móviles y de escritorio que lo admitan. Los usuarios pueden iniciar la aplicación web instalada como si fuera una aplicación nativa. Este artículo explica cómo lograr esto usando el manifiesto de la aplicación web.

Estas tecnologías permiten que la aplicación se inicie directamente desde la pantalla de inicio del dispositivo, en lugar de que el usuario tenga que abrir el navegador y luego navegar al sitio utilizando un marcador o escribiendo la URL. Tu aplicación web se puede sentar junto a aplicaciones nativas como ciudadanos de primera clase. Esto facilita el acceso a la aplicación web; Además, puedes especificar que la aplicación se inicie en modo de pantalla completa o independiente, eliminando así la interfaz de usuario predeterminada del navegador que de otro modo estaría presente, creando una sensación aún más fluida y similar a la nativa.

## Requisitos

Para que el sitio web sea instalable, necesitas lo siguiente:

- Un manifiesto web, con los [campos correctos completados](/es/Apps/Progressive/Add_to_home_screen#Manifest)
- Que sitio web se sirva desde un dominio seguro (HTTPS)
- Un icono para representar la aplicación en el dispositivo.
- Un [servicio worker](/es/docs/Web/API/Service_Worker_API) registrado para permitir que la aplicación funcione sin conexión (actualmente, esto solo lo requiere Chrome para Android)

> **Nota:** Actualmente, solo los navegadores basados en Chromium tal como Chrome, Edge y Samsung Internet requieren el servicio _worker_. Si desarrollas tu aplicación con Firefox, ten en cuenta que necesitarás un servicio _worker_ para que sea compatible con los navegadores basados en Chromium.

### El archivo de manifiesto

El elemento clave es un archivo de manifiesto web, que enumera toda la información sobre el sitio web en formato JSON.

Suele residir en el directorio raíz de una aplicación web. Contiene información útil, como el título de la aplicación, rutas a iconos de diferentes tamaños que se pueden usar para representar la aplicación en un sistema operativo (como un icono en la pantalla de inicio, una entrada en el menú Inicio o un icono en el escritorio) y un color de fondo para usar en las pantallas de carga o de presentación. Esta información es necesaria para que el navegador presente la aplicación web correctamente durante el proceso de instalación, así como dentro de la interfaz de inicio de la aplicación del dispositivo, como la pantalla de inicio de un dispositivo móvil.

El archivo `js13kpwa.webmanifest` de la aplicación web [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) se incluye en el bloque {{HTMLElement("head")}} del archivo `index.html` de la aplicación web usando la siguiente línea de código:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> **Nota:** Hay algunos tipos comunes de archivos de manifiesto que se han utilizado en el pasado: `manifest.webapp` era popular en los manifiestos de aplicaciones de Firefox OS, y muchos usan `manifest.json` para manifestar aplicaciones web ya que el contenido está organizado en una estructura JSON. Sin embargo, el formato de archivo `.webmanifest` se menciona explícitamente en la [especificación del manifiesto W3C](https://w3c.github.io/manifest/), por lo tanto ese es el que usaremos aquí.

El contenido del archivo se ve así:

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Aplicación web progresiva que enumera los juegos enviados a la categoría del marco A en la competencia js13kGames del 2017.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

La mayoría de los campos se explican por sí mismos, pero para estar seguros de que estamos en la misma página:

- `name`: El nombre completo de tu aplicación web.
- `short_name`: Nombre corto que se mostrará en la pantalla de inicio.
- `description`: Una o dos frases que explican lo que hace tu aplicación.
- `icons`: Gran cantidad de información de íconos — URLs de origen, tamaños y tipos. Asegúrate de incluir al menos algunos, de modo que se elija el que mejor se adapte al dispositivo del usuario.
- `start_url`: El documento `index` que se iniciará al arrancar la aplicación.
- `display`: Cómo se muestra la aplicación; puede ser `fullscreen` (pantalla completa), `standalone` (independiente), `minimal-ui` (interfaz de usuario mínima) o `browser` (navegador).
- `theme_color`: Un color primario para la interfaz de usuario, utilizado por el sistema operativo.
- `background_color`: Un color que se utiliza como fondo predeterminado de la aplicación, usado durante la instalación y en la pantalla de bienvenida.

Un manifiesto web mínimo debe tener al menos un `name` y un campo `icons` con al menos un icono definido; ese icono debe tener al menos los subcampos `src`, `sizes` y `type` también. Más allá de eso, todo es opcional, aunque se recomiendan los campos `description`, `short_name` y `start_url`. Incluso, hay más campos que puedes usar de los que se enumeran anteriormente; asegúrate de consultar la [referencia del manifiesto de la aplicación web](/es/docs/Web/Manifest) para obtener más detalles.

## Agregar a la pantalla inicial

"Agregar a la pantalla de inicio" (o _aapi_ para abreviar) es una función implementada por los navegadores móviles que toma la información que se encuentra en el manifiesto de una aplicación web y la usa para representar la aplicación en la pantalla de inicio del dispositivo con un icono y un nombre. Esto solo funciona si la aplicación cumple con todos los requisitos necesarios, como se describió anteriormente.

Cuando el usuario visita la PWA con un navegador móvil compatible, debe mostrar una notificación (como un pasquín o un cuadro de diálogo) que indique que es posible instalar la aplicación como una PWA.

![Agregar a la ventana emergente de la pantalla de inicio de js13kPWA.](js13kpwa-icon.png)

Una vez que el usuario indica que desea continuar con la instalación, se muestra el pasquín de instalación. Ese pasquín es creado automáticamente por el navegador, basado en la información del archivo de manifiesto. Por ejemplo, el mensaje incluye el nombre y el icono de la aplicación.

![Pancarta de instalación de js13kPWA.](js13kpwa-banner.png)

Si el usuario hace clic en el botón, hay un paso final que muestra cómo se verá la aplicación y permite que el usuario elija si definitivamente desea agregar la aplicación.

![Agregar a la ventana emergente de la pantalla de inicio de js13kPWA.](js13kpwa-add.png)

Cuando se confirme, la aplicación se instalará en la pantalla de inicio.

![Pantalla de inicio](js13kpwa-installed.png)

Ahora el usuario puede iniciar y utilizar la aplicación web como cualquier otra aplicación en su dispositivo. Dependiendo del dispositivo y el sistema operativo, el icono de la aplicación web puede tener una insignia con un pequeño icono que indica que se trata de una aplicación web. En la captura de pantalla anterior, por ejemplo, la aplicación tiene un pequeño icono de Firefox, lo cual indica que es una aplicación web que usa el entorno de ejecución de Firefox.

### Pantalla de bienvenida

En algunos navegadores, también se genera una pantalla de bienvenida a partir de la información del manifiesto, que se muestra cuando se inicia la PWA y mientras se carga.

![Pantalla de bienvenida](js13kpwa-splash.png)

El icono y los colores del tema y fondo se utilizan para crear esta pantalla.

## Resumen

En este artículo, aprendimos cómo podemos hacer que las PWAs se puedan instalar con un manifiesto web correctamente configurado, y cómo el usuario puede luego instalar la PWA con la función "agregar a la pantalla de inicio" de su navegador.

Para obtener más información sobre _aapi_, asegúrate de leer nuestra [guía para agregar a la pantalla de inicio](/es/docs/Web/Apps/Progressive/Add_to_home_screen). La compatibilidad con el navegador se limita actualmente a Firefox para Android 58+, Mobile Chrome y Android Webview 31+, y Opera para Android 32+, pero esto debería mejorar en un próximo futuro.

Ahora pasemos a la última pieza del rompecabezas de PWA: usar notificaciones automáticas para compartir anuncios con el usuario y ayudarlo a volver a interactuar con tu aplicación.

{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}

{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}
