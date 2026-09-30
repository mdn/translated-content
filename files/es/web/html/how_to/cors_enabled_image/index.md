---
title: Usar imágenes de origen cruzado en un canvas
short-title: Usar imágenes de origen cruzado
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

HTML ofrece un atributo [`crossorigin`](/es/docs/Web/HTML/Reference/Elements/img#crossorigin) para las imágenes que, combinado con una cabecera {{Glossary("CORS")}} adecuada, permite que las imágenes definidas con el elemento {{ HTMLElement("img") }} y cargadas desde orígenes externos se usen en un {{HTMLElement("canvas")}} como si se hubieran cargado desde el origen actual.

Consulta [Atributos de configuración CORS](/es/docs/Web/HTML/Reference/Attributes/crossorigin) para más información sobre cómo se usa el atributo `crossorigin`.

## Seguridad y canvas contaminados

Dado que los píxeles del mapa de bits de un canvas pueden provenir de fuentes muy diversas, incluidas imágenes o videos obtenidos de otros servidores, es inevitable que surjan problemas de seguridad.

En cuanto dibujes en un canvas cualquier dato cargado desde otro origen sin la aprobación de CORS, el canvas queda **contaminado**. Un canvas contaminado ya no se considera seguro, y cualquier intento de recuperar datos de imagen desde él generará una excepción.

Si el origen del contenido externo es un elemento HTML {{HTMLElement("img")}} o SVG {{SVGElement("svg")}}, no se permite intentar recuperar el contenido del canvas.

Si el contenido externo proviene de una imagen obtenida mediante {{domxref("HTMLCanvasElement")}} o {{domxref("ImageBitMap")}}, y el origen de la imagen no cumple las reglas del mismo origen, los intentos de leer el contenido del canvas quedan bloqueados.

Llamar a cualquiera de los siguientes métodos en un canvas contaminado producirá un error:

- Llamar a {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} en el contexto del canvas
- Llamar a {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}}, {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} o {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} en el propio elemento {{HTMLElement("canvas")}}

Intentar cualquiera de estas acciones cuando el canvas está contaminado hará que se lance un `SecurityError`. Esto protege a los usuarios de la exposición de datos privados mediante el uso de imágenes para extraer información de sitios web remotos sin permiso.

## Almacenar una imagen desde un origen externo

En este ejemplo, queremos permitir que las imágenes de un origen externo sean recuperadas y guardadas en el almacenamiento local. Implementar esto requiere configurar el servidor, así como escribir código para el propio sitio web.

### Configuración del servidor web

Lo primero que necesitamos es un servidor configurado para alojar imágenes con la cabecera {{HTTPHeader("Access-Control-Allow-Origin")}} configurada para permitir el acceso de origen cruzado a los archivos de imagen.

Supongamos que el sitio se sirve con [Apache](https://httpd.apache.org/). Fíjate en el [archivo de configuración del servidor Apache para imágenes CORS](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf) de HTML5 Boilerplate, mostrado a continuación:

```apacheconf
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(avifs?|bmp|cur|gif|ico|jpe?g|jxl|a?png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

En resumen, esta configuración permite acceder a los archivos gráficos (los que tienen las extensiones ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" y ".webp") de origen cruzado desde cualquier parte de internet.

### Implementar la función de guardado

Ahora que el servidor está configurado para permitir la recuperación de las imágenes de origen cruzado, podemos escribir el código que permite guardarlas en el [almacenamiento local](/es/docs/Web/API/Web_Storage_API), como si fueran servidas desde el mismo dominio en el que se ejecuta el código.

La clave es usar el atributo [`crossorigin`](/es/docs/Web/HTML/Reference/Elements/img#crossorigin) configurando {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}} en el {{domxref("HTMLImageElement")}} en el que se cargará la imagen. Esto indica al navegador que solicite acceso de origen cruzado al descargar los datos de la imagen.

#### Iniciar la descarga

El código que inicia la descarga (por ejemplo, cuando se hace clic en un botón "Descargar") es el siguiente:

```js
function startDownload() {
  let imageURL = "https://mdn.github.io/shared-assets/images/examples/mdn.svg";
  let imageDescription = "Logotipo de un dinosaurio frente a un mapa";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  downloadedImg.addEventListener("load", imageReceived);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

Aquí usamos una URL escrita directamente en el código (`imageURL`) y un texto descriptivo asociado (`imageDescription`), pero esto podría provenir fácilmente de cualquier lugar. Para iniciar la descarga de la imagen, creamos un nuevo objeto {{domxref("HTMLImageElement")}} utilizando el constructor {{domxref("HTMLImageElement.Image", "Image()")}}. Luego, la imagen se configura para permitir la descarga de origen cruzado estableciendo su atributo `crossOrigin` en `"anonymous"` (es decir, permitir la descarga de la imagen de origen cruzado sin autenticación). Se añade un detector de eventos para el evento {{domxref("Window/load_event", "load")}} que se dispara en el elemento de imagen, lo que indica que ya se recibieron los datos de la imagen. También se añade un texto alternativo a la imagen; aunque `<canvas>` no admite el atributo `alt`, ese valor puede usarse para definir un `aria-label` o el contenido interno del canvas.

Por último, el atributo {{domxref("HTMLImageElement.src", "src")}} de la imagen se establece con la URL de la imagen que se va a descargar; esto hace que la descarga comience.

#### Recibir y guardar la imagen

El código que gestiona la imagen recién descargada se encuentra en el método `imageReceived()`:

```js
function imageReceived() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;
  canvas.innerText = downloadedImg.alt;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
```

`imageReceived()` se llama para manejar el evento `"load"` del `HTMLImageElement` que recibe la imagen descargada. Este evento se dispara una vez que todos los datos descargados están disponibles. Comienza creando un nuevo elemento {{HTMLElement("canvas")}} que usaremos para convertir la imagen en una URL de datos, y obteniendo acceso al contexto de dibujo 2D del canvas ({{domxref("CanvasRenderingContext2D")}}) en la variable `context`.

El tamaño del canvas se ajusta para que coincida con la imagen recibida, el texto interno se establece con la descripción de la imagen, y luego la imagen se dibuja en el canvas usando {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}. Luego, el canvas se inserta en el documento para que la imagen quede visible.

Ahora es el momento de guardar la imagen localmente. Para eso, usamos el mecanismo de almacenamiento local de la Web Storage API, al que se accede mediante la propiedad global {{domxref("Window.localStorage", "localStorage")}}. El método {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} del canvas se usa para convertir la imagen en una URL data:// que representa una imagen PNG, que luego se guarda en el almacenamiento local mediante {{domxref("Storage.setItem", "setItem()")}}.

## Véase también

- [Using Cross-domain images in WebGL and Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML Specification - the `crossorigin` attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/es/docs/Web/API/Web_Storage_API)
