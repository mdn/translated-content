---
title: Tu primera extensión
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---

{{AddonSidebar}}

> **Nota:** Si estás familiarizado/a con los conceptos básicos de las extensiones de navegador, omite esta sección y ve a [cómo se ponen juntos los archivos](/es/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Entonces, usa la [documentación de referencia](/es/docs/Mozilla/Add-ons/WebExtensions#Reference) para empezar a construir tu extensión. Visita el [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension) para aprender más sobre el flujo de trabajo para probar y publicar extensiones para Firefox.

En este artículo abordaremos la creación de una extensión para Firefox, desde el comienzo hasta el final. La extensión solo agrega un borde rojo a cualquiera de las páginas cargadas desde "mozilla.org" o cualquiera de sus subdominios.

El código fuente de este ejemplo se encuentra en GitHub: <https://github.com/mdn/webextensions-examples/tree/master/borderify>.

Primero, necesitas tener instalado Firefox versión 45 o superior.

## Escribiendo la extensión

Crea una nuevo directorio y navega a él. Por ejemplo, en tu línea de comandos/terminal se hace de esta manera:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Ahora crearemos un archivo nuevo llamado "manifest.json" directamente en la carpeta "borderify". Añádale el siguiente contenido:

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Agrega un borde rojo a todas las páginas web de mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- Los primeros 3 parámetros:[`manifest_version`](/es/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/es/Add-ons/WebExtensions/manifest.json/name), y [`version`](/es/Add-ons/WebExtensions/manifest.json/version), son obligatorios, y contienen metadatos básicos para la extensión.
- [`description`](/es/Add-ons/WebExtensions/manifest.json/description) es opcional, pero se recomienda: Se muestra en el Administrador de Add-ons.
- [`icons`](/es/Add-ons/WebExtensions/manifest.json/icons) es opcional, pero recomendado: permite especificar un ícono para la extensión, se mostrará en el Administrador de Add-ons.

El parámetro más interesante aquí es [`content_scripts`](/es/Add-ons/WebExtensions/manifest.json/content_scripts), el cual le dice a Firefox que cargue el script en las páginas Web, cuyas URL coincidan con un patrón especifico. En este caso, le estamos pidiendo a Firefox que cargue el script llamado "borderify.js" en todas las paginas HTTP o HTTPS cargadas desde "mozilla.org" o cualquiera de sus subdominios.

- [Aprenda más acerca de los scripts contenidos.](/es/Add-ons/WebExtensions/Content_scripts)
- [Aprenda más acerca de los patrones coincidentes](/es/Add-ons/WebExtensions/Match_patterns).

> **Advertencia:** [En algunas situaciones usted necesita especificar un ID para su extensión](/es/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID). Si necesita especificar un ID para el complemento, incluya el parámetro [`applications`](/es/Add-ons/WebExtensions/manifest.json/applications) en el `manifest.json` y configure la propiedad `gecko.id`:
>
> ```json
> "applications": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

La extensión debería tener un ícono. Este se mostrará junto al listado de extensiones en el Administrador de Add-ons. Nuestro manifest.json promete que tendremos un ícono en el directorio "icons/border-48.png".

Crea el directorio "icons" dentro de la carpeta "borderify". Almacena ahí el icono y nómbralo "border-48.png". Puedes utilizar [el de nuestro ejemplo](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png), el cual se obtuvo a partir del Google Material Design iconset, y es utilizado bajo los términos de la licencia [Creative Commons Attribution-ShareAlike](http://creativecommons.org/licenses/by-sa/3.0/).

Si eliges emplear tu propio icono, este debe ser de 48x48 pixeles. También puedes aplicar un icono de 96x96 pixeles, para resoluciones mayores, y si haces esto, se especifica como la propiedad `96` en el objeto icons del manifest.json:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativamente, puedes aplicar un archivo SVG ahí, y este se escalará apropiadamente. (Aunque: si usas SVG y tu icono incluye texto, puedes usar la herramienta "convert to path" del editor SVG para aplanar el texto, de modo que se escalone con un tamaño/posición coherente).

- [Aprender mas acerca de la especificación de iconos.](/es/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Finalmente, crea un archivo de nombre "borderify.js" directamente en el directorio "borderify". Y déjale el siguiente contenido:

```js
document.body.style.border = "5px solid red";
```

Este script se cargara en las páginas que coincidan con el patrón dado en el parámetro `content_scripts` del archivo manifest.json. El script tiene acceso directo al documento, de la misma manera que los scripts cargados por la propia página.

- [Aprender más acerca de los scripts de contenido.](/es/Add-ons/WebExtensions/Content_scripts)

## Probándolo

Primero, verifica que tienes todos los archivos en su lugar:

```
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Instalación

Abre "about:debugging" en Firefox, da click en "Cargar complemento temporal" y selecciona cualquier archivo en el directorio de la extensión:

{{EmbedYouTube("cer9EUKegG4")}}

La extensión se encontrará instalada, y lo estará hasta que reinicies Firefox.

Alternativamente, puede ejecutar la extensión desde la línea de comandos utilizando la herramienta [web-ext](/es/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext).

### Probando

Ahora pruebe visitando una página bajo "mozilla.org", y usted verá el borde rojo alrededor de la página:

{{EmbedYouTube("rxBQl2Z9IBQ")}}

> **Nota:** No lo intentes en addons.mozilla.org! Los scripts de contenido están actualmente bloqueados en ese dominio.

Experimenta un poco. Edita el contenido del script para cambiar el color del borde, o haz algo más en el contenido de la página. Si actualizas el script de contenido, recarga los archivos de la extensión haciendo clic en el botón "Recargar" en about:debugging. Podrás ver los cambios en el momento:

{{EmbedYouTube("NuajE60jfGY")}}

- [Aprende más sobre cómo recargar las extensiones](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

## Empaquetar y publicar

Para que otras personas puedan utilizar tu extensión, necesitas empaquetarlo y enviarlo a Mozilla para que lo firmen. Para que aprendas más sobre eso, mira ["Publicando tu extension"](/es/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension).

## ¿Qué sigue?

Ahora que tienes una idea acerca del proceso de desarrollo de una WebExtension para Firefox, continúa con:

- [escribe una extensión más compleja](/es/Add-ons/WebExtensions/Your_second_WebExtension)
- [leer más acerca de la anatomía de una extensión](/es/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [explora los ejemplos de extensiones](/es/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [encuentra lo que necesitas para desarrollar, probar y publicar tu extensión](/es/docs/Mozilla/Add-ons/WebExtensions/What_next_)
- [leer acerca de las APIs de JavaScript disponibles para las extensiones.](/es/Add-ons/WebExtensions/API)
- [lleva tu aprendizaje más lejos](/es/docs/Mozilla/Add-ons/WebExtensions/What_next_#Continue_your_learning_experience)
