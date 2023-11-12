---
title: Web App Manifest
slug: Web/Manifest
---

El manifiesto de aplicaciones web proporciona información sobre una aplicación (como nombre, autor, icono y descripción) en un documento simplificado. Su principal propósito es crear [progressive web apps](/es/docs/Web/Apps/Progressive): aplicaciones web que se pueden instalar desde la pantalla principal de un dispositivo sin necesidad de hacerlo a traves de una app store (y otras ventajas como disponibilidad offline y enviar notificaciones push cuando cambia el contenido de la aplicación.)

## Manifiesto de ejemplo

```json
{
  "name": "Google I/O 2015",
  "short_name": "I/O 2015",
  "start_url": "./?utm_source=web_app_manifest",
  "display": "standalone",
  "icons": [
    {
      "src": "images/touch/homescreen48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.google.samples.apps.iosched"
    }
  ]
}
```

## Propiedades

### `background_color`

Define el color de fondo deseado para la aplicación. Este valor repite lo definido en la hoja de estilos de la aplicación, pero puede ser utilizado por los navegadores para pintar el color de fondo de una app si el manifiesto está disponible antes de que la hoja de estilos se haya cargado. Esto suaviza la transición entre lanzar una aplicación y cargar el contenido de la misma.

```json
"background_color": "red"
```

> **Nota:** El `background_color` únicamente está destinado a mejorar la experiencia de usuario mientras se carga la aplicación y no se debe usar como color de fondo cuando la hoja de estilos de la aplicación esté disponible.

### `description`

Proporciona una descripción general sobre qué hace la aplicación.

```json
"description": "The app that helps you find the best food in town!"
```

### `dir`

Especifica la dirección del texto para `name`, `short_name`, y `description`. Junto con `lang`, ayuda a representar correctamente los idiomas que se escriben de derecha a izquierda (right-to-left).

```json
"dir": "rtl",
"lang": "ar",
"short_name": "أنا من التطبيق!"
```

Puede tener uno de los siguentes valores:

- `ltr` (izquierda a derecha)
- `rtl` (derecha a izquierda)
- `auto` (indica al navegador que use el algoritmo Unicode bidirectional para hacer una estimación apropiada sobre la dirección del texto.)

> **Nota:** Cuando se omite este valor, por defecto es `auto`.

### `display`

Define el modo de visualización preferido para la aplicación web.

```json
"display": "standalone"
```

Los valores aceptados son:

| Display Mode | Description                                                                                                                                                                                                                                                                                                           | Fallback Display Mode |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `fullscreen` | Se utiliza toda la pantalla disponible no se muestran elementos del user agent {{Glossary("chrome")}}.                                                                                                                                                                                                                | `standalone`          |
| `standalone` | La aplicación se mostrará como una app independiente. Así la aplicación puede tener su propia ventana, su propio icono en el lanzador de aplicaciones, etc. En este modo, the user agent excluirá los elementos de interfaz para controlar la navegación, pero puede incluir otros elementos como la barra de estado. | `minimal-ui`          |
| `minimal-ui` | La aplicación se mostrará como una app independiente, pero tendrá un mínimo de elementos de interfaz para controlar la navegación. Estos elementos podrán variar según navegador.                                                                                                                                     | `browser`             |
| `browser`    | La aplicación se abrirá en una pestaña nueva del navegador o una ventana nueva, dependiendo del navegador y plataforma. Esto es por defecto.                                                                                                                                                                          | (None)                |

> **Nota:** Puedes aplicar selectivamente CSS a tu app basandote en el modo de visualización, usando la característica [display-mode](/docs/Web/CSS/@media/display-mode). Se puede utilizar para proporcionar una experiencia de usuario consistente al lanzar un site desde una URL y lanzarlo desde un icono de escritorio.

### `icons`

Especifica un _array_ de imágenes que pueden servir como iconos de aplicación en diferentes contextos. Por ejemplo, se pueden utilizar para representar la aplicación entre un listado de aplicaciones, o para integrar la aplicación web con un gestor de tareas del sistema operativo y/o las preferencias del sistema.

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon/hd_hi.svg",
    "sizes": "72x72"
  }
]
```

Los objetos de imagen pueden contener los siguientes valores:

| Member  | Description                                                                                                                                               |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sizes` | Una cadena que contiene separados por espacios las dimensiones de la imagen.                                                                              |
| `src`   | La ruta de acceso al archivo de imagen.                                                                                                                   |
| `type`  | A hint as to the media type of the image.The purpose of this member is to allow a user agent to quickly ignore images of media types it does not support. |

### `lang`

Especifica el idioma principal para in the `name` and `short_name` members. This value is a string containing a single language tag.

```json
"lang": "en-US"
```

### `name`

Provides a human-readable name for the application as it is intended to be displayed to the user, for example among a list of other applications or as a label for an icon.

```json
"name": "Google I/O 2015"
```

### `orientation`

Define la orientación por defecto for all the web application's top level {{Glossary("Browsing context", "browsing contexts")}}.

```json
"orientation": "portrait-primary"
```

Orientation puede ser alguno de los siguentes valores:

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

### `prefer_related_applications`

Especifica un valor booleano que sugiere que el agente de usuario le indique al usuario que las aplicaciones específicas relacionadas (ver abajo) están disponibles, y recomendadas sobre la aplicación web. Esto solamente debería ser usado si la aplicación nativa relacionada realmente ofrece algo que la aplicación web no puede hacer.

```json
"prefer_related_applications": false
```

> **Nota:** Si se omite, el valor por defecto es `false`.

### `related_applications`

Specifies an array of "application objects" representing native applications that are installable by, or accessible to, the underlying platform — for example a native Android application obtainable through the Google Play Store. Such applications are intended to be alternatives to the web application that provide similar or equivalent functionality — like the native app version of the web app.

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }]
```

Los objetos Application pueden contener los siguientes valores:

| Member     | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `platform` | The platform on which the application can be found.                 |
| `url`      | The URL at which the application can be found.                      |
| `id`       | The ID used to represent the application on the specified platform. |

### `scope`

Define el ámbito de navegación en el contexto de la aplicación web. Esto basicamente restringe qué paginas se pueden ver cuando se aplica el manifiesto. Si el usuario navega fuera del ámbito de la aplicación, continúa como en una web normal.

```json
"scope": "/myapp/"
```

### `short_name`

Proporciona un nombre corto para la aplicación. Está destinado para su uso cuando hay poco espacio para mostrar el nombre completo de la aplicación.

```json
"short_name": "I/O 2015"
```

### `start_url`

Especifica la URL que se carga cuando el usuario lanza la aplicación desde un dispositivo.

```json
"start_url": "./?utm_source=web_app_manifest"
```

### `theme_color`

Define el color por defecto para la aplicación. Esto en ocasiones afecta a como se muestra por el OS (e.g., en el lanzador de aplicaciones de Android, el color envuelve la aplicación).

```json
"theme_color": "aliceblue"
```

## Splash screens

En Chrome 47 y posteriores, se muestra una pantalla de bienvenida para las aplicaciones web que se inician desde la pantalla de inicio. Esta pantalla de bienvenida se genera de automáticamente mediante las propiedades del manifiesto de la aplicación web, especificamente: `name`, `background_color`, y el icono de la lista `icons` que sea el más cercano a los 128dpi para el dispositivo.

## Tipo Mime

Los manifiestos web se deben servir con el tipo MIME `application/manifest+json`. Sin embargo, esto es opcional.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
