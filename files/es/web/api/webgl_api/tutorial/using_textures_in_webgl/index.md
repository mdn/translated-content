---
title: Utilizando texturas en WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Ahora que nuestro programa de prueba tiene un cubo, asignemos una textura en lugar de tener sus caras de un color solido.

## Cargando texturas

La primera cosa que debemos hacer es añadir el codigo para cargar nuestra textura. en nuestro caso, estaremos usando una unica textura, asignada en las seis caras de nuestro cubo rotador, pero la misma tecnica puede ser utilizada para cualquier cantidad de texturas.

> **Nota:** Es importante señalar que la carga de texturas sigue [reglas de dominio-cruzado](/es/docs/Web/HTTP/Access_control_CORS); Es decir, sólo puede cargar texturas de sitios para los que su contenido tiene aprobación de CORS. Vea las texturas entre dominios a continuación para más detalles.

El codigo que carga la textura se ve como esto:

```js
function initTextures() {
  cubeTexture = gl.createTexture();
  cubeImage = new Image();
  cubeImage.onload = function () {
    handleTextureLoaded(cubeImage, cubeTexture);
  };
  cubeImage.src = "cubetexture.png";
}

function handleTextureLoaded(image, texture) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(
    gl.TEXTURE_2D,
    gl.TEXTURE_MIN_FILTER,
    gl.LINEAR_MIPMAP_NEAREST,
  );
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.bindTexture(gl.TEXTURE_2D, null);
}
```

La rutina `initTextures()` comienza por crear el GL texture cubeTexture llamando la rutina GL {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}}. Para cargar la textura desde un archivo de imagen, este luego crea un Objeto Imagen y carga en él el archivo de imagen que deseamos utilizar como nuestra textura. La rutina `handleTextureLoaded()` corre cuando la textura ha terminado de cargar.

Para realmente crear la textura, especificamos que la nueva textura es la textura actual en la que queremos operar vinculándola a gl.TEXTURE_2D. Despues de esto, la imagen cargada es pasada a {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}} para escribir la informacion de la imagen en la textura.

> **Nota:** El alto y hancho de las texturas deben, en la mayoría de las circunstancias, ser una potencia de dos píxeles (es decir, 1, 2, 4, 8, 16, etc.) en cada dimensión. Para la excepción, vea la sección: ["Texturas no potencia de dos"](/es/docs/Web/WebGL/Using_textures_in_WebGL#Non_power-of-two_textures), a continuación.

Las siguientes dos líneas setean el filtrado para la textura; Esto controla cómo se filtra la imagen mientras se escala. En este caso estamos usando linear filtering cuando escala la imagen, y mipmap cuando se hace mas pequeña. Entonces el mipmap es generado llamando {{domxref("WebGLRenderingContext.generateMipMap()", "generateMipMap()")}}, Y terminamos diciéndole a WebGL que hemos terminado de manipular la textura vinculando null a gl.TEXTURE_2D.

### Texturas no potencia-de-dos

Generalmente hablando, Utilizar texturas cuyos lados son una potencia de dos es ideal. Están almacenadas eficientemente en la memoria de video y no están restringidas en cómo podrían ser utilizadas. Las texturas creadas por el artista deben ser escaladas hacia arriba o hacia abajo a una potencia cercana a dos y, realmente, debería haber sido creada en potencia-de-dos para empezar. Cada lado debe ser: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ó 2048 píxeles. Muchos dispositivos, pero no todos, pueden soportar 4096 píxeles; Algunos pueden soportar 8192 e incluso más.

Ocasionalmente, es difícil utilizar texturas en potencia-de-dos dada una circunstancia especifica. Si la fuente es alguna tercera parte, A menudo los mejores resultados vienen de modificar las imágenes usando canvas HTML5 en tamaños de potencia-de-dos antes de que se pasen a WebGL; Las coordenadas UV también pueden requerir ajuste si el estiramiento es notorio.

Pero, Si tiene que tener una textura no-potencia-de-dos (NPOT = no-power-of-two), WebGL incluye un limitado soporte nativo. Las texturas NPOT son en su mayoría útiles si las dimensiones de la textura debe ser la misma resolución que otra cosa, como la resolución de tu monitor, o si no vale la pena molestarse por las sugerencias anteriores. Resumiendo: estas texturas no se pueden usar con mipmapping y no deben repetirse (tile o wrap).

Un ejemplo de una textura es tilear una imagen de unos ladrillos para cubrir una pared de ladrillos.

Mipmapping y "UV tiling" pueden ser desactivados utilizando {{domxref("WebGLRenderingContext.texParameter()", "texParameteri()")}} y cuando creas tu textura utilizando {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}}. Ésto permitirá las texturas NPOT a expensas de mipmapping, UV wrapping, UV tiling, y tu control sobre cómo el dispositivo procederá a manejar tu textura.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Una vez más, con estos parámetros, los dispositivos compatibles con WebGL aceptarán automáticamente cualquier resolución para esa textura (hasta sus dimensiones máximas). Sin realizar la configuración anterior, WebGL requiere que todas las muestras de texturas NPOT fallen al devolver el color "negro sólido": rgba (0,0,0,1).

## Mapeando la textura en las caras

A este punto, la textura esta cargada y lista para usar. pero antes de utilizarla, Necesitamos asignar el mapeo de las coordenadas de textura a los vértices de las caras de nuestro cubo. Esto reemplaza todo el código previamente existente para configurar colores para cada una de las caras del cubo en initBuffers().

```js
cubeVerticesTextureCoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);

var textureCoordinates = [
  // Front
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Back
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Top
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Bottom
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Right
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Left
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
];

gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array(textureCoordinates),
  gl.STATIC_DRAW,
);
```

Primeramente, este codigo crea un GL buffer en el cual almacenaremos las coordenadas de la textura para cada cara, luego enlazamos ese buffer como el array en el cual escribiremos.

El array textureCoordinates define las coordenadas de textura correspondientes a cada vértice de cada cara. Tenga en cuenta que las coordenadas de textura van de 0,0 a 1,0; Las dimensiones de las texturas se normalizan a un rango de 0,0 a 1,0 independientemente de su tamaño real, con el propósito de mapeo de textura.

Una vez que hemos seteado la matriz de mapeo de textura, pasamos la matriz al búfer, de modo que GL tiene esos datos listos para su uso.

## Actualizando los shaders

El shader — y el código que inicializa los shaders — también necesita ser actualizado para utilizar la textura en vez de un color solido.

Primero, echemos un vistazo a un cambio muy sencillo que se necesita en initShaders():

```js
textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
gl.enableVertexAttribArray(textureCoordAttribute);
gl.vertexAttribPointer(texCoordAttribute, 2, gl.FLOAT, false, 0, 0);
```

Esto reemplaza el código que setea el atributo "vertex color" (color del vertice) con uno que contiene la coordenada de textura para cada vértice.

### El vertex shader

A continuación, necesitamos reemplazar el "vertex shader" de modo que en lugar de buscar datos de color, busque los datos de coordenadas de textura.

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying highp vec2 vTextureCoord;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
</script>
```

El cambio clave aquí es que en lugar de buscar el color del vértice (vertex color), estamos estableciendo las coordenadas de textura; Esto indicará la ubicación dentro de la textura correspondiente al vértice.

### El fragment shader

El fragment shader también debe actualizarse:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  varying highp vec2 vTextureCoord;

  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
  }
</script>
```

En lugar de asignar un valor de color al fragment color, el fragment color se calcula recolectando el texel (es decir, el píxel dentro de la textura) que el muestreador dice que se corresponde mejor con la posición del fragment.

## Dibujando el cubo texturado

El cambio a la función drawScene() es simple (excepto que por razones de claridad, he eliminado el código que hace que el cubo se traslade a través del espacio mientras se anima, en vez de eso, solo gira).

El código para mapear colores a la textura se ha ido, sustituido por esto:

```js
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);
```

GL proporciona 32 registros de textura; La primera de ellas es gl.TEXTURE0. Vincularemos nuestra textura previamente cargada a ese registro, a continuación, establecremos el shader sampler uSampler (especificado en el shader) para utilizar esa textura.

En este punto, el cubo giratorio debe estar listo.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Ver el código completo](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample6) | [Abrir esta demo en una nueva pestaña](http://mdn.github.io/webgl-examples/tutorial/sample6/)

## Texturas entre dominios

La carga de texturas WebGL esta sujeta a controles de acceso entre dominios. Para que su contenido cargue una textura de otro dominio, La aprobacion CORS debe ser obtenida. Ver [control de acceso HTTP](/es/docs/Web/HTTP/Access_control_CORS) para mas detalles sobre CORS.

Ver este articulo [hacks.mozilla.org](http://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) para una explicacion de como usar imágenes CORS-approved como texturas WebGL , con un [ejemplo auto-contenido](http://people.mozilla.org/~bjacob/webgltexture-cors-js.html).

> **Nota:** El soporte CORS para texturas WebGL y el atributo crossOrigin para elementos de imagen se implementan en Gecko 8.0.

Canvas 2D contaminados (Solo lectura) no pueden ser utilizados como texturas WebGL. una 2D {{ HTMLElement("canvas") }} se convierte en contaminada, por ejemplo, cuando una imagen de dominio cruzado (cross-domain) es dibujada en el.

> **Nota:** El soporte de CORS para Canvas 2D drawImage se implementa en Gecko 9.0. Esto significa que el uso de una imagen de dominio cruzado con aprobación de CORS ya no pinta el lienzo 2D, por lo que el lienzo 2D sigue siendo utilizable como fuente de una textura WebGL.

> **Nota:** El soporte de CORS para videos de dominio cruzado y el atributo de crossorigin para elementos {{HTMLElement("video")}} se implementa en Gecko 12.0.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
