---
title: Creación de objetos 3D utilizando WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Vamos a llevar nuestro cuadrado hacia la tercera dimensión agregando cinco caras más para crear el cubo. Para hacer esto de manera eficiente, vamos a cambiar el dibujado por medio de vertices utilizando el método {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} por el uso de un arreglo de vértices como tabla, esto por medio del llamado hacia {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}.

Considerar: cada cara cuatro vértices para su definición, pero cada vértice es compartido por 3 caras. Realizando una lista con los 24 vértices es como nosotros haremos un menor intercambio de datos, después haremos referencia hacia cada vértic por medio se su índice en la lista en lugar de pasar el juego entero de coordenadas. Si te preguntas por qué necesitamos 24 vértices, y no solo 8, es porque cada esquina pertenece a tres caras de diferente color, y un solo vértice necesita tener un solo color específico, por lo tanto crearemos 3 copias de cada vértice en tres colores diferentes, uno por cada cara.

## Definir la posición de los vértices del cubo

Primero, construiremos el buffer para la posición de los vértices actualizando el código en `initBuffers()`. Esto es muy parecido a lo como si fuera para el cuadraro, pero más lardo debido a que ahora son 24 vértices (4 por lado):

```js
var vertices = [
  // Cara delantera
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // Cara trasera
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // Top face
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // Bottom face
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // Right face
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // Left face
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];
```

## Definir los colores de los vértices

Necesitamos construir un arreglo de colores por cada uno de los 24 vertices. Este código comienza por definir un color para cada cara, después utiliza un ciclo para ensamblar el arreglo de colores por cada uno de los vértices.

```js
var colors = [
  [1.0, 1.0, 1.0, 1.0], // Cara delantera: blanco
  [1.0, 0.0, 0.0, 1.0], // Cara trasera: rojo
  [0.0, 1.0, 0.0, 1.0], // Cara superior: verde
  [0.0, 0.0, 1.0, 1.0], // Cara inferior: azul
  [1.0, 1.0, 0.0, 1.0], // Cara derecha: amarillo
  [1.0, 0.0, 1.0, 1.0], // Cara izquierda: morado
];

var generatedColors = [];

for (j = 0; j < 6; j++) {
  var c = colors[j];

  for (var i = 0; i < 4; i++) {
    generatedColors = generatedColors.concat(c);
  }
}

var cubeVerticesColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesColorBuffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array(generatedColors),
  gl.STATIC_DRAW,
);
```

## Definir el elemento arreglo

Una ves que el vértice es generado, nosotros necesitamos contruir el elemento arreglo.

```js
var cubeVerticesIndexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);

// Este arrelgo define cada cara como 2 triángulos utilizando
// los índices dentro de cada arreglo de vértices
// para especificar cada posición en los tríangulos.

var cubeVertexIndices = [
  0,
  1,
  2,
  0,
  2,
  3, // enfrente
  4,
  5,
  6,
  4,
  6,
  7, // atrás
  8,
  9,
  10,
  8,
  10,
  11, // arriba
  12,
  13,
  14,
  12,
  14,
  15, // fondo
  16,
  17,
  18,
  16,
  18,
  19, // derecha
  20,
  21,
  22,
  20,
  22,
  23, // izquierda
];

// Ahora enviamos el elemento arreglo a  GL

gl.bufferData(
  gl.ELEMENT_ARRAY_BUFFER,
  new Uint16Array(cubeVertexIndices),
  gl.STATIC_DRAW,
);
```

El arreglo `cubeVertexIndices` define cada cara como un par de triángulos, especificando cada vértice del triángulo como un índice dentro del arreglo de vértices en el cubo. Así el cubo es descrito como una colección de 12 triángulos.

## Dibujando el cubo

Para continuar necesitaremos agregar el código a nuestra función `drawScene()` esto para poder dibujar utilizando el buffer índice del cubo, agregaremos un nuevo llamado a {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} y {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}como se muestra a continuación:

```js
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
setMatrixUniforms();
gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
```

Desde que cada cara de nuestro cubo está compuesto de dos triángulos, tenemos 6 vértices en el cubo, se podría pensar que algunos de ellos son duplicados. Sin embargo, desde que nuestro arreglo índice se encuentra compuesto de enteros simples, esto no es una cantidad excesiva de intercambio de datos para pasar por cada cuadro de la animación.

En este punto ahora tenemos un cubo animado rebotando y rotando, cuenta con seis caras coloreadas vívidamente.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Ver el Código completo](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Abrir esta demostración en una página nueva](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
