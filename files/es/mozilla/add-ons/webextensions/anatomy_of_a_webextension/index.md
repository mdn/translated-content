---
title: Anatomía de una extension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---

{{AddonSidebar}}

Una extensión se compone de una colección de archivos, empaquetados para su distribución e instalación. En este artículo vamos a repasar rápidamente los archivos que deben estar presentes en una extensión.

Toda extensión debe contener un archivo llamado ["manifest.json"](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension#manifest.json). Este puede tener enlaces a otros tipos de archivos:

- [Páginas en segundo plano](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension#Scripts_en_segundo_plano): Implementan la lógica de larga ejecución.
- [Scripts de contenido](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension#Scripts_de_contenido): Interactúan con las páginas web (note que esto no es lo mismo que JavaScript en un elemento {{HTMLElement("script")}} dentro de una página).
- [Archivos de acción del navegador](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension#Acciones_del_navegador_2): Implementan los botones de la barra de herramientas.
- [Archivos de acción de la página:](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension#Acciones_de_las_páginas)Implementan botones en la barra de direcciones.
- [Páginas de opciones](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension#Opciones_de_las_páginas): Definen una IU para que los usuarios vean y cambien las configuraciones de la extensión.
- [archivos de la barra lateral](/es/Add-ons/WebExtensions/user_interface/Sidebars): Agregue una barra lateral al navegador.
- [Recursos Web accesibles](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension#Recursos_web_accesibles): Hace posible que el contenido empaquetado acceda a páginas web y scripts.

![](webextension-anatomy.png)

## manifest.json

Este es el único archivo que debe estar presente en toda WebExtension. Este contiene los metadatos básicos acerca de la extensión, como su nombre, versión, y los permisos que esta requiere. También provee los enlaces a otros archivos de la extensión.

Mira la página de referencia [manifest.json](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json) para ver todos los detalles.

## Scripts en segundo plano

Las extensiones a menudo necesitan mantener estados de larga duración, o ejecutar operaciones a largo plazo, independientemente del tiempo de vida de una página web en particular o las ventanas del navegador. Para eso son los scripts en segundo plano.

Los scripts en segundo plano son cargados cuando la extensión es cargada y se mantienen cargados hasta que la extensión es deshabilitada o desinstalada. Tu puedes usar cualquier [API de WebExtensions](/es/Add-ons/WebExtensions/API) en el script, siempre y cuando hayas solicitado el [permiso](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) necesario.

### Especificando los scripts en segundo plano

Puedes incluir un script en segundo plano usando la propiedad `background` en "manifest.json":

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

Puedes especificar múltiples scripts en segundo plano: Si lo haces, ellos se ejecutarán en el mismo contexto, justo como son cargados múltiples scripts en una página web.

### Entorno del script en segundo plano

#### APIs del DOM

Los scripts en segundo plano se ejecuta en el contexto de páginas especiales llamadas páginas en segundo plano. Esto le da un variable global [`window`](/es/docs/Web/API/Window), junto con todas las APIs estándar del DOM que proporciona.

No necesitas proveer tu propia página en segundo plano. Si incluyes un script en segundo plano, una página en segundo plano vacía se creará para ti.

Sin embargo, puedes escoger y proveer tu página en segundo plano como un archivo HTML separado:

```json
// manifest.json

"background": {
  "page": "background-page.html"
}
```

#### APIs de WebExtension

Los scripts en segundo plano pueden usar cualquier [API de WebExtension](/es/Add-ons/WebExtensions/API) en el script, siempre que tu extensión tenga los [permisos](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) necesarios.

#### Acceso de origen cruzado

Los scripts en segundo plano pueden hacer peticiones XHR a cualquier host para los cuales tienen [permisos del host](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

#### Acciones del navegador

Si tu extensión define una acción del navegador, y esa acción del navegador no tiene ventanas emergentes, entonces puedes escuchar los eventos "clic" del botón en el navegador empleando el objeto [`onClicked`](/es/Add-ons/WebExtensions/API/browserAction#onClicked) de las acciones del navegador:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

#### Contenido web

Los scripts en segundo plano no tienen acceso directo a las páginas web. Sin embargo, pueden cargar [scripts de contenido](/es/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) en páginas web, y [comunicarse con esos scripts empleando la API de paso de mensajes](/es/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts).

#### Políticas de seguridad para el contenido

Los scripts de segundo plano están restringidos de algunas operaciones dañinas, como el uso de [`eval()`](/es/docs/Web/JavaScript/Reference/Global_Objects/eval), a través de la Política de Seguridad del Contenido. Vea la [Política de Seguridad del Contenido](/es/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)para más detalles sobre esto.

## Scripts de contenido

Usa los scripts de contenido para acceder y manipular páginas web. Los scripts de contenido son cargados dentro de las páginas web y ejecutados en el contexto particular de esa página.

Los scripts de contenido son scripts provistos por la extensión los cuales se ejecutan en el contexto de la página web; estos difieren de los scripts que son cargados por la página misma, incluye aquellos que son proporcionados en los elementos {{HTMLElement("script")}} dentro de la página.

Los scripts de contenido pueden ver y manipular el DOM de las páginas, igual que los scripts cargados normalmente por la página.

A diferencia de los scripts normales, ellos pueden:

- Realizar peticiones XHR de dominio cruzado
- Usar un pequeño subconjunto de las [APIs de WebExtension](/es/docs/Mozilla/Add-ons/WebExtensions/API)
- Intercambiar mensajes con sus scripts en segundo plano, y por esta vía, tener acceso indirecto a todas las APIs de WebExtension.

Los scripts de contenido no pueden acceder directamente a los scripts normales de una página web, pero pueden intercambiar mensajes con ellos usando la API estándar [`window.postMessage()`](/es/docs/Web/API/Window/postMessage).

Generalmente, cuando hablamos acerca de scripts de contenido, nos referimos a JavaScript, pero tu puedes inyectar CSS dentro de las páginas web empleando el mismo mecanismo.

Mira el artículo [scripts de contenido](/es/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) para aprender más.

## Recursos web accesibles

Los recursos web accesibles son recursos como imágenes, HTML, CSS y JavaScript que tu puedes incluir en la extensión y los quieres hacer accesible a los scripts en segundo plano y los scripts de las páginas. Los recursos que son hechos accesibles desde la web pueden ser referenciados desde scripts de páginas web y scripts de contenido mediante un esquema especial de URI.

Por ejemplo, si un script de contenido quiere insertar algunas imágenes dentro de páginas web, tu puedes incluirlos en la extensión y hacerlos accesibles desde la web. El script de contenido creará y añadirá las etiquetas [`img`](/es/docs/Web/HTML/Element/img) que referencia a las imágenes mediante el atributo `src`.

Para aprender más, vea la documentación para la el parámetro [web_accessible_resource](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) del manifest.json.
