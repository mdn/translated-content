---
title: Создание 3D объектов с помощью WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Давайте поместим наш квадрат в трёхмерное пространство, добавив ещё 5 граней, чтобы получить куб. Чтобы сделать это наиболее продуктивно, вместо рисования вершин непосредственным вызовом метода {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} , мы будем использовать массив вершин в виде таблицы и ссылаться на каждую вершину в этой таблице, чтобы определить положение каждой вершины грани, вызывая {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}.

Заметим: чтобы определить каждую грань необходимо четыре вершины, но каждая вершина принадлежит трём граням. Мы можем передавать намного меньше данных, построив список всех 24-х вершин, затем ссылаться на каждую из них в этом списке по её индексу, вместо того чтобы передавать все множество вершин. Если вы удивлены, почему нам нужны 24 вершины, а не только 8, так это потому, что каждое ребро принадлежит трём граням разных цветов, и каждая отдельная вершина должна иметь конкретный отдельный цвет - поэтому мы создадим 3 копии каждой вершины трёх разных цветов, по одной для каждой грани.

## Определение позиций вершин куба

Во первых, давайте построим буфер позиций вершин куба, обновив код в `initBuffers()`. Это в значительной степени то же самое как это было для квадрата, но несколько длиннее, так как здесь 24 вершины (4 с каждой стороны):

```js
var vertices = [
  // Передняя грань
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // Задняя грань
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // Верхняя грань
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // Нижняя грань
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // Правая грань
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // Левая грань
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];
```

## Определение цветов вершин

Нам также нужно построить массив цветов для каждой из 24-х вершин. Этот код начинается с определения цветов для каждой грани, затем используется цикл для составления массива все всех цветов для каждой из вершин.

```js
var colors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
];

var generatedColors = [];

for (j = 0; j < 6; j++) {
  var c = colors[j];

  for (var i = 0; i < 4; i++) {
    generatedColors = generatedColors.concat(c);
  }
}

cubeVerticesColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesColorBuffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array(generatedColors),
  gl.STATIC_DRAW,
);
```

## Определение массива элементов

Как только массив вершин сгенерирован, нам нужно построить массив элементов.

```js
cubeVerticesIndexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);

// Этот массив определяет каждую грань как два треугольника,
// используя индексы в массиве вершин, чтобы определить позицию
// каждого треугольника.

var cubeVertexIndices = [
  0,
  1,
  2,
  0,
  2,
  3, // front
  4,
  5,
  6,
  4,
  6,
  7, // back
  8,
  9,
  10,
  8,
  10,
  11, // top
  12,
  13,
  14,
  12,
  14,
  15, // bottom
  16,
  17,
  18,
  16,
  18,
  19, // right
  20,
  21,
  22,
  20,
  22,
  23, // left
];

// Теперь отправим массив элементов в GL

gl.bufferData(
  gl.ELEMENT_ARRAY_BUFFER,
  new Uint16Array(cubeVertexIndices),
  gl.STATIC_DRAW,
);
```

Массив `cubeVertexIndices` определяет каждую грань как пару треугольников, сопоставляя каждой вершине треугольника индекс в массиве вершин куба. Таким образом куб можно представить как набор из 12 треугольников.

## Рисование куба

Далее нам нужно обновить код нашей функции `drawScene()` , чтобы рисовать, используя буфер индексов куба, добавив новые вызовы {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} и {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}:

```js
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
setMatrixUniforms();
gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
```

Поскольку каждая грань нашего куба состоит из двух треугольников, где 6 вершин на каждой грани, или всего 36 вершин во всем кубе, даже если многие из них дублируются. Однако, поскольку наш массив индексов состоит из целых чисел, это не чрезмерное количество данных, посылаемых для каждого кадра анимации.

В данный момент у нас есть анимированный куб с гранями 6 разных цветов, который прыгает и вращается.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
