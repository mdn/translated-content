---
title: Imagen con CORS habilitado
slug: Web/HTML/CORS_enabled_image
---

La especificación HTML introduce un atributo [`crossorigin`](/es/docs/Web/HTML/Element/img#crossorigin) para imágenes que, en conjunto con el encabezado {{Glossary("CORS")}} apropiado, permite definir imágenes con el elemento {{ HTMLElement("img") }} que se carguen de orígenes externos dentro de un lienzo (_canvas_) como si estas fuesen cargadas del origen actual.

Vea el artículo ["Atributos de configuración CORS"](/en/HTML/CORS_settings_attributes) para mas detalles de como el atributo "crossorigin" es usado.

## ¿Qué es un "tainted" canvas?

Aunque puedes usar imágenes sin la aprobación del CORS en el elemento canvas, hacerlo puede "manchar" el canvas. Por ejemplo, no puedes usar los métodos canvas `toBlob()`, `toDataURL()`, or `getImageData(). Si los usas se lanzará un mensaje de seguridad.`

Esto protegerá a los usuarios de tener información privada usada por medio de imágenes que cogen información desde otras web sin permiso.

## Ejemplo: Almacenando una imagen desde un origen externo

Debes de tener un servidor de hosting de imágenes con el apropiado `Access-Control-Allow-Origin` header. Añadiendo el atributo crossOrigin crea un request header.

Puedes utilizar este fragemto de la configuración del servidor Apache del Boilerplate HTML5 para responder apropiadamente con este encabezado de respuesta.

```xml
<IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
        <FilesMatch "\.(cur|gif|ico|jpe?g|png|svgz?|webp)$">
            SetEnvIf Origin ":" IS_CORS
            Header set Access-Control-Allow-Origin "*" env=IS_CORS
        </FilesMatch>
    </IfModule>
</IfModule>
```

Dado que está todo ordenado, serás capás de guardar esas imagenes en el almacenamiento del DOM, así como si fueran solicitados de tu dominio.

```js
var img = new Image(),
  canvas = document.createElement("canvas"),
  ctx = canvas.getContext("2d"),
  src = "http://example.com/image"; // insert image url here

img.crossOrigin = "Anonymous";

img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  localStorage.setItem("savedImageData", canvas.toDataURL("image/png"));
};
img.src = src;
// make sure the load event fires for cached images too
if (img.complete || img.complete === undefined) {
  img.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  img.src = src;
}
```

## También puede ver

- [Using Cross-domain images in WebGL and Chrome 13](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML Specification - the `crossorigin` attribute](http://whatwg.org/html#attr-img-crossorigin)
