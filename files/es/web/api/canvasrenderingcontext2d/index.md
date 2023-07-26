---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef}}

La interfaz **`CanvasRenderingContext2D`**, parte de la [API Canvas](/es/docs/Web/API/Canvas_API), proporciona el contexto de renderizado 2D para la superficie de dibujo de un elemento {{HTMLElement("canvas")}}.
Esto se usa para dibujar, formas, texto, imagenes, y otros objetos.

Las propiedades y métodos de la interface son descritos en la sección de referencia de esta página. El [Tutorial de canvas](/es/docs/Web/API/Canvas_API/Tutorial) también tiene mas explicaciones, ejemplos y recursos.

Para [`OffscreenCanvas`](/es/docs/Web/API/OffscreenCanvas), hay una interfaz equivalente que proporciona el contexto del renderizado. El contexto de renderizado del fuera de la pantalla hereda la mayoría de las mismas propiedades y métodos que `CanvasRenderingContext2D` y se describe con mas detalle en la página de referencia {{domxref("OffscreenCanvasRenderingContext2D")}}.

## Ejemplo básico

Para obtener una instancia de `CanvasRenderingContext2D`, primero debe tener un elemento HTML `canvas` con el que trabajar.

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

Para obtener el contexto de renderizado 2D del canvas, llame a {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} sobre el elemento `<canvas>`, proporcionando `'2d'` como el argumento:

```js
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");
```

Con el contexto en la mano, puedes dibujar lo que quieras. Este código dibuja una casa:

```js
// Establecer ando de linea
ctx.lineWidth = 10;

// Muro
ctx.strokeRect(75, 140, 150, 110);

// Puerta
ctx.fillRect(130, 190, 40, 60);

// Techo
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
```

El dibujo resultante se ve así:

{{EmbedLiveSample("Basic_example", 700, 330)}}

## Referencia

### Contexto

- {{domxref("CanvasRenderingContext2D.isContextLost()")}} {{Experimental_Inline}}
  - : Devuelve `true` si se perdió el contexto del renderizado.

### Dibujar rectángulos

Hay tres métodos que inmediatamente dibujan rectángulos en el canvas.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Establece todos los pixeles en el rectángulo definido por el punto de inicio _(x, y)_ y el tamaño _(ancho, alto)_ en negro transparente, borrando cualquier contenido previamente dibujado.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Dibuja un rectángulo rellenado en la posición _(x, y)_ cuyo tamaño esta determinado por _ancho_ y la _altura_.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Pinta un rectángulo que tiene un punto inicial en _(x, y)_ y tiene un ancho _w_ y una altura _h_ en el canvas, utilizando el estilo de trazo actual.

### Dibujar texto

Los siguientes métodos dibujan un texto. Véase tambien el objeto {{domxref("TextMetrics")}} para las propiedades de texto

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Dibuja (rellena) un texto dado en la posición dada (x, y)
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Dibuja (trazos) un texto dado en la posición dada (x, y)
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Devuelve un objeto {{domxref("TextMetrics")}}.

### Estilos de linea

Los siguientes métodos y propiedades controlan cómo se dibujan las líneas.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Ancho de líneas. Por defecto `1.0`.
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Tipo de terminaciones en el final de las líneas. Posibles valores: `butt` (por defecto), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Define el tipo de esquinas donde dos líneas se encuentran. Posibles valores: `round`, `bevel`, `miter` (por defecto).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Relación límite angular. Por defecto `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Devuelve el arreglo actual del patrón de líneas de guiones que contiene un número par de números no negativos.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Establece el patrón de línea de guiones de la linea actual.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Especifica donde inicia el arreglo de guiones en una linea.

### Estilos de texto

Las siguientes propiedades controlan cómo se presenta el texto.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Configuración de fuente. Valor por defecto `"10px sans-serif"`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Configuración de alineación de texto. Posibles valores: `start` (por defecto), `end`, `left`, `right`, `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Configuración de alineación de línea base. Posibles valores: `top`, `hanging`, `middle`, `alphabetic` (por defecto), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Direccionalidad. Posibles valores: `ltr`, `rtl`, `inherit` (por defecto).
- {{domxref("CanvasRenderingContext2D.letterSpacing")}} {{Experimental_Inline}}
  - : Espaciado de letras. Por defecto: `0px`.
- {{domxref("CanvasRenderingContext2D.fontKerning")}}
  - : Interletraje de fuente. Posibles valores: `auto` (por defecto), `normal`, `none`.
- {{domxref("CanvasRenderingContext2D.fontStretch")}} {{experimental_inline}}
  - : Estiramiento de fuente. Posibles valores: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (por defecto), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- {{domxref("CanvasRenderingContext2D.fontVariantCaps")}} {{experimental_inline}}
  - : Mayúsculas de variante de fuente. Posibles valores: `normal` (por defecto), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- {{domxref("CanvasRenderingContext2D.textRendering")}} {{experimental_inline}}
  - : Renderizado de texto. Posibles valores: `auto` (por defecto), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- {{domxref("CanvasRenderingContext2D.wordSpacing")}} {{experimental_inline}}
  - : Espaciado entre palabras. Valor por defecto: `0px`

## Estilos de relleno y trazo

El estilo de relleno se usa para los colores y estilos dentro de las formas y el estilo de trazo se usa para las líneas alrededor de las formas.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Color o estilo para usar en las formas. Por defecto `#000` (negro).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Utilizado para dar color o estilo al borde de las formas Por defecto `#000` (negro).

## Degradados y patrones

- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
  - : Crea un degradado cónico alrededor de un punto dado por las coordenadas representadas por los parámetros.
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Crea un degradado lineal a lo largo de la línea dada por las coordenadas representadas por los parámetros.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Crea un degradado radial dado por las coordenadas de los dos círculos representados por los parámetros.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Crea un patrón utilizando la imagen especificada. Repite la fuente en las direcciones especificadas por el argumento de repetición. Este método devuelve un {{domxref("CanvasPattern")}}.

### Sombras

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Especifica el efecto de desenfoque. Por defecto: `0`
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Color de la sombra. Por defecto: totalmente transparente negro.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Distancia horizontal del desplazamiento de la sombra. Por defecto: `0`.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Distancia vertical del desplazamiento de la sombra. Por defecto: `0`.

### Rutas

Los siguientes métodos pueden usarse para manipular las rutas de los objetos.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Inicia una nueva ruta al vaciar la lista de sub-rutas. Llame a este método cuando desee crear una nueva ruta.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Hace que la punta del bolígrafo retroceda hasta el inicio de la sub-ruta actual. Intenta dibujar una línea recta desde el punto actual hasta el inicio. Si la forma ya ha sido cerrada o tiene solo un punto, esta función no hace nada.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Mueve el punto de inicio de una nueva sub-ruta a las coordenadas (x, y).
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Conecta el último punto de la ruta secundaria actual a las coordenadas (x, y) especificadas con una línea recta.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Agrega una curva de Bézier cúbica a la ruta actual.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Agrega una curva de Bézier cuadrática a la ruta actual.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Agrega una arco circular a la ruta actual.
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Agrega un arco a la ruta actual con los puntos de control y el radio dados, conectado al punto anterior por una línea recta.
- {{domxref("CanvasRenderingContext2D.ellipse()")}}
  - : Agrega un arco elíptico a la ruta actual.
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Crea una ruta para un rectángulo en la posición (x, y) con un tamaño determinado por el _ancho_ y la _altura_.
- {{domxref("CanvasRenderingContext2D.roundRect()")}}
  - : Crea una ruta para un rectángulo redondeado con una posición, ancho, alto y radios de esquina especificados.

### Dibujar rutas

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Rellena las sub-rutas actuales con el estilo de relleno actual.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Traza las sub-rutas actuales con el estilo de trazo actual.
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : Si se enfoca un elemento dado, este método dibuja un anillo de enfoque alrededor de la ruta actual.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}} {{Experimental_Inline}}
  - : Desplaza la ruta actual o una ruta dada a la vista.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Crea una ruta de recorte a partir de las sub-rutas actuales. Todo lo que se dibuja después de llamar a `clip()` aparece solo dentro de la ruta de recorte. Para una ejemplo, consulte [Trazados de recorte](/es/docs/Web/API/Canvas_API/Tutorial/Compositing) en el tutorial de Canvas.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Informa si el punto especificado está contenido o no en la ruta actual.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Informa si el punto especificado está o no dentro del área contenida por el trazo de una ruta.

### Transformaciones

Los objetos en el contexto de renderizado `CanvasRenderingContext2D` tienen una matriz de transformación actual y métodos para manipularla. La matriz de transformación se aplica al crear la ruta por defecto actual, pintar texto, formas y objetos {{domxref("Path2D")}}. Los métodos enumerados a continuación permanecen por razones históricas y de compatibilidad, ya que los objetos {{domxref("DOMMatrix")}} se usan en la mayoría de las partes de la API hoy en día y se usarán en el futuro.

- {{domxref("CanvasRenderingContext2D.getTransform()")}}
  - : Recupera la matriz de transformación actual que se está aplicando al contexto.
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Añade una rotación a la matriz de transformación. El argumento del ángulo representa un ángulo de rotación en el sentido de las agujas del reloj y se expresa en radianes.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Agrega una transformación de escala a las unidades del canvas por _x_ horizontalmente y por _y_ verticalmente.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Agrega una transformación de traslación moviendo el canvas y su origen _x_ horizontalmente y _y_ verticalmente en la cuadricula.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multiplica la matriz de transformación actual con la matriz descrito por sus argumentos.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Reestablece la transformación actual a la matriz de identidad, y luego invoca el método `transform()` con los mismos argumentos.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}}
  - : Reestablece la transformación actual por la matriz de identidad.

### Composición

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Valor alfa que se aplica a formas e imágenes antes de que se compongan en el canvas. Por defecto `1.0` (opaco).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : Con `globalAlpha` aplicado esto establece cómo se dibujan las formas y las imágenes en el mapa de bits existente.

### Dibujar imagenes

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Dibuja la imagen especificada. Este método esta disponible en multiples formatos, proporcionando una gran flexibilidad en su uso.

### Manipulación de pixeles

Véase también el objeto {{domxref("ImageData")}}.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Crea un nuevo objeto {{domxref("ImageData")}} con las dimensiones especificadas. Todos los pixeles del nuevo objeto son de color negro transparente.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Devuelve un objeto {{domxref("ImageData")}} que representa los datos de píxeles subyacentes para el área del canvas indicada por el rectángulo que comienza en _(sx, sy)_ y tiene un ancho _sw_ y un alto _sh_.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Pinta los datos del objeto {{domxref("ImageData")}} proporcionado en el mapa de bits. Si se proporciona un rectángulo sucio, solo se pintan los píxeles de ese rectángulo.

### Suavizado de imagen

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : Modo de imagen suavizado; si esta desactivado, las imágenes no se suavizarán si se escalan.
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
  - : Permite establecer la calidad del suavizado de imagen.

### El estado del canvas

El contexto de renderizado `CanvasRenderingContext2D` contiene una variedad de estados de estilo de dibujo (atributos para estilos de línea, estilos de relleno, estilos de sombra, estilos de texto). Los siguientes métodos lo ayudan a trabajar con ese estado:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Guarda el estado del estilo de dibujo actual usando una pila para que pueda revertir cualquier cambio que le haga usando `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Restaura el estado del estilo de dibujo al último elemento en la 'pila de estado' guardada por `save()`.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : Una referencia inversa de solo lectura a {{domxref("HTMLCanvasElement")}}. Puede ser [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) si no esta asociado a un elemento {{HTMLElement("canvas")}}.
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
  - : Devuelve un objeto que contiene los atributos del contexto actual. Los atributos de contexto se pueden solicitar con {{domxref("HTMLCanvasElement.getContext()")}}.
- {{domxref("CanvasRenderingContext2D.reset()")}} {{Experimental_Inline}}
  - : Restablece el contexto de renderizado, incluido el búfer de respaldo, la pila de estado del dibujo, la ruta y los estilos
- {{domxref("CanvasRenderingContext2D.isContextLost()")}} {{Experimental_Inline}}
  - : Devuelve `true` si se perdió el contexto de renderizado.

### Filtros

- {{domxref("CanvasRenderingContext2D.filter")}}
  - : Aplica un filtro CSS ó SVG, por ejemplo, para cambiar su brillo o desenfoque.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
- {{domxref("OffscreenCanvas")}}
