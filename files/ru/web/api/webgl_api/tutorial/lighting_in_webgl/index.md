---
title: Lighting in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

Вам уже должно быть понятно,что у WebGL нет много "встроенного знания". Он просто выполняет две функции, которые вы написали - вершинный шейдер и фрагментный шейдер, а функции, которые рисуют сцену должны написать вы сами. Другими словами, если вы хотите добавить освещение, то вы должны рассчитать его самостоятельно. К счастью, сделать это не сложно. В этой статье мы опишем некоторые основы.

## Симуляция освещения и затенения в 3D

Хотя детали теории, лежащей в основе симуляции освещения в 3D-графике лежат далеко за пределами этой статьи, будет полезным немного узнать о том, как это работает. Посмотрите статью [Затенение по Фонгу](http://en.wikipedia.org/wiki/Phong_shading) в Википедии, чтобы получить хороший обзор наиболее часто используемых моделей освещения. А [в этой статье](https://webglfundamentals.org/webgl/lessons/webgl-3d-lighting-point.html) вы можете посмотреть объяснение, основанное на WebGL.

Существует три основных типа источников света:

**Окружающий свет** освещает всю сцену. Он не направленный и освещает все грани всех объектов одинаково, не зависимо от ориентации граней.

**Направленный свет** исходит из определённого направления. Этот свет приходит от настолько удалённого источника, что все фотоны летят параллельно друг другу. К примеру, солнечный свет можно считать.

**Точечный свет** исходит из одной точки во всех направлениях. В реальном мире многие источники освещения являются точечными, например электрическая лампочка.

В этой статье мы упростим модель освещения и будем использовать только простой направленный и окружающий свет. Мы не будем создавать блики на поверхности объектов и точечные источники света. Вместо этого мы добавим окружающий свет и направленный свет в сцену с вращающимся кубом из [предыдущего примера](/ru/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

Если оставить в стороне блики и точечные источники света, то останутся два пункта, которые нужно изучить по порядку:

1. Мы должны привязать **нормаль поверхности** к каждой вершине. Это вектор, который направлен перпендикулярно грани в данной вершине.
2. Нам нужно знать направление, в котором распространяется свет. Оно определяется **вектором направления**.

Затем мы обновим вершинный шейдер, чтобы скорректировать цвет каждой вершины в зависимости от окружающего и направленного освещения с учётом угла падения на грань. Мы увидим, как это делается, когда посмотрим на код шейдера.

## Построение нормали для вершин

Сначала нам нужно создать массив нормалей для всех вершин, из которых состоит наш куб. Это будет просто, потому что куб очень простой объект. Очевидно, что для более сложных объектов расчёт нормалей будет более затратным.

```js
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const vertexNormals = [
    // Front
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,
     0.0,  0.0,  1.0,

    // Back
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,
     0.0,  0.0, -1.0,

    // Top
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,
     0.0,  1.0,  0.0,

    // Bottom
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,
     0.0, -1.0,  0.0,

    // Right
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,
     1.0,  0.0,  0.0,

    // Left
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0,
    -1.0,  0.0,  0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
                gl.STATIC_DRAW);

...

  return {
    position: positionBuffer,
    normal: normalBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
```

Код уже должен выглядеть узнаваемо. Мы создаём новый буфер, связываем его с рабочим буфером и записываем в него массив нормалей к вершинам при помощи `bufferData()`.

Затем добавим в `drawScene()` код, который свяжет массив нормалей с атрибутом шейдера. Таким образом шейдер сможет получить к нему доступ:

```js
// Указываем WebGL как извлекать нормали из
// буфера нормалей в атрибут vertexNormal.
{
  const numComponents = 3;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexNormal,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
}
```

В конце нужно обновить код, который строит матрицы для uniform-переменных, чтобы создать и передать в шейдер **матрицу нормалей**, которая используется для трансформации нормалей при расчёте ориентации куба относительно направления на источник света:

```js
  const normalMatrix = mat4.create();
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

...

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.normalMatrix,
      false,
      normalMatrix);
```

## Обновление шейдеров

Теперь у нас есть все данные для шейдеров. Пора обновить код самих шейдеров.

### Вершинный шейдер

Сначала обновим вершинный шейдер, чтобы он рассчитывал значение освещения для каждой вершины на основе окружающего и направленного света. Посмотрим на код:

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      // Применяем эффект освещения

      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
      highp vec3 directionalLightColor = vec3(1, 1, 1);
      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;
```

После расчёта позиции вершины мы передаём координаты текселя ({{Glossary("texel")}}), соответствующего вершине, во фрагментный шейдер, и начинаем расчёт освещения вершины.

Сначала нужно преобразовать нормаль, основываясь на текущей ориентации куба - умножив нормаль вершины на матрицу нормалей. Затем мы можем рассчитать количество света от направленного источника, которое приходит в вершину, посчитав скалярное произведение преобразованной нормали и вектора направления (направления, с которого приходит свет). Если скалярное произведение меньше нуля, то мы принимаем его за ноль, потому что количество света не может быть меньше 0.

После расчёта количества падающего направленного света мы можем посчитать финальное освещение, сложив окружающий свет и произведение количества направленного света на его цвет. В результате получается значение RGB, которое используется фрагментным шейдером для изменения цвета каждого пикселя.

### Фрагментный шейдер

Фрагментный шейдер должен быть обновлён таким образом, чтобы он учитывал в значение освещения, рассчитанное в вершинном шейдере:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
    }
  `;
```

Здесь мы получаем цвет текселя, как и в предыдущем примере, но перед тем, как установить цвет фрагмента, мы умножаем цвет текселя на значение освещения, чтобы учесть влияние источников света.

Осталось только посмотреть на определение атрибута `aVertexNormal` и uniform-переменной `uNormalMatrix`.

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

И это всё!

{{EmbedGHLiveSample('webgl-examples/tutorial/sample7/index.html', 670, 510) }}

[Посмотреть код примера полностью](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample7) | [Открыть демо в новом окне](http://mdn.github.io/webgl-examples/tutorial/sample7/)

## Самостоятельные упражнения

Очевидно, что это простой пример, показывающий базовое вершинное освещение. В более продвинутой графике вам наверняка захочется сделать попиксельное освещение.

Также вы можете поэкспериментировать с направлением на источник света, цветами окружающего и направленного света, и т. д.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
