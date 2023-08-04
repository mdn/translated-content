---
title: Использование шейдеров для задания цвета в WebGL
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

В [предыдущей статье](/ru/docs/Web/WebGL/Adding_2D_content_to_a_WebGL_context) мы создали квадрат, следующим шагом будет добавление ему цвета. Мы можем сделать это, используя шейдеры.

## Задание цвета вершинам

В GL, объекты строятся с использованием наборов вершин, для каждой из которых задаётся положение в пространстве и цвет. По умолчанию, цвета всех остальных пикселей (и все их другие атрибуты, включая положение в пространстве) вычисляются с использованием линейной интерполяции, автоматически создавая плавный градиент. В прошлый раз наш вершинный шейдер не задавал определённых цветов вершинам, а фрагментный шейдер назначил фиксированный белый цвет каждому пикселю, поэтому квадрат целиком был отрисован белым цветом.

Предположим, что мы хотим отрисовать градиент, в котором каждый угол квадрата разного цвета: красного, синего, зелёного и белый. Первое, что необходимо сделать - назначить эти цвета четырём вершинам. Чтобы сделать это, нам сначала необходимо создать массив цветов вершин, а затем сохранить его в WebGL буфер. Мы сделаем это, добавив следующий код в нашу функцию `initBuffers()`:

```js
  var colors = [
    1.0,  1.0,  1.0,  1.0,    // белый
    1.0,  0.0,  0.0,  1.0,    // красный
    0.0,  1.0,  0.0,  1.0,    // зелёный
    0.0,  0.0,  1.0,  1.0     // синий
  ];

  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
```

Этот код начинается с создания JavaScript массива, содержащего четыре вектора, содержащих по четыре значения каждый - по одному вектору для задания цвета каждой вершине. Затем новый WebGL буфер выделяет место в памяти для хранения этих цветов и массив приводится к вещественному формату WebGL и сохраняется в буфер.

Чтобы теперь использовать эти цвета, вершинному шейдеру необходимо обновиться, поместив соответствующий цвет из буфера цвета:

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying lowp vec4 vColor;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vColor = aVertexColor;
  }
</script>
```

Ключевым отличием здесь является то, что для каждой вершины, мы задаём цвет на соответствующее значение из массива цвета.

## Окраска фрагментов

Чтобы напомнить, как фрагментный шейдер выглядел ранее, ниже приведён его код:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
</script>
```

Для того, чтобы подобрать интерполируемый цвет каждому пикселю, нам просто необходимо изменить его, получив значение из переменной `vColor`:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  varying lowp vec4 vColor;

  void main(void) {
    gl_FragColor = vColor;
  }
</script>
```

Это простое изменение, но с помощью него каждый фрагмент вместо фиксированного значения получает значение интерполируемого цвета на основе его расположения относительно вершин.

## Отрисовка с использованием цветов

Далее, необходимо добавить код в процедуру `initShaders()` для задания значений атрибута цвета для шейдерной программы:

```js
vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
gl.enableVertexAttribArray(vertexColorAttribute);
```

Затем, drawScene() может быть исправлен на фактическое использование этих цветов при отрисовке квадрата:

```js
gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
```

На этом этапе, вы можете посмотреть [результат работы написанного кода](/samples/webgl/sample3/index.html), если используете браузер, поддерживающий WebGL. Вы увидите нечто похожее на следующий рисунок (расположенный по центру в большом чёрном поле):

![screenshot.png](/@api/deki/files/4081/=screenshot.png)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
