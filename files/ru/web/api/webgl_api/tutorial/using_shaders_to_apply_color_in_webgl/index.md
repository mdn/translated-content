---
title: Использование шейдеров для задания цвета в WebGL
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
tags:
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</p>

<p>В <a href="/ru/docs/Web/WebGL/Adding_2D_content_to_a_WebGL_context" title="en/WebGL/Adding 2D content to a WebGL context">предыдущей статье</a> мы создали квадрат, следующим шагом будет добавление ему цвета. Мы можем сделать это, используя шейдеры.</p>

<h2 id="Задание_цвета_вершинам">Задание цвета вершинам</h2>

<p>В GL, объекты строятся с использованием наборов вершин, для каждой из которых задаётся положение в пространстве и цвет. По умолчанию, цвета всех остальных пикселей (и все их другие атрибуты, включая положение в пространстве) вычисляются с использованием линейной интерполяции, автоматически создавая плавный градиент. В прошлый раз наш вершинный шейдер не задавал определённых цветов вершинам, а фрагментный шейдер назначил фиксированный белый цвет каждому пикселю, поэтому квадрат целиком был отрисован белым цветом.</p>

<p>Предположим, что мы хотим отрисовать градиент, в котором каждый угол квадрата разного цвета: красного, синего, зелёного и белый. Первое, что необходимо сделать - назначить эти цвета четырём вершинам. Чтобы сделать это, нам сначала необходимо создать массив цветов вершин, а затем сохранить его в WebGL буфер. Мы сделаем это, добавив следующий код в нашу функцию <code>initBuffers()</code>:</p>

<pre class="brush: js">  var colors = [
    1.0,  1.0,  1.0,  1.0,    // белый
    1.0,  0.0,  0.0,  1.0,    // красный
    0.0,  1.0,  0.0,  1.0,    // зелёный
    0.0,  0.0,  1.0,  1.0     // синий
  ];

  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
</pre>

<p>Этот код начинается с создания JavaScript массива, содержащего четыре вектора, содержащих по четыре значения каждый - по одному вектору для задания цвета каждой вершине. Затем новый WebGL буфер выделяет место в памяти для хранения этих цветов и массив приводится к вещественному формату WebGL и сохраняется в буфер.</p>

<p>Чтобы теперь использовать эти цвета, вершинному шейдеру необходимо обновиться, поместив соответствующий цвет из буфера цвета:</p>

<pre class="brush: html">    &lt;script id="shader-vs" type="x-shader/x-vertex"&gt;
      attribute vec3 aVertexPosition;
      attribute vec4 aVertexColor;

      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;

      varying lowp vec4 vColor;

      void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor;
      }
    &lt;/script&gt;
</pre>

<p>Ключевым отличием здесь является то, что для каждой вершины, мы задаём цвет на соответствующее значение из массива цвета.</p>

<h2 id="Окраска_фрагментов">Окраска фрагментов</h2>

<p>Чтобы напомнить, как фрагментный шейдер выглядел ранее, ниже приведён его код:</p>

<pre class="brush: html">    &lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
      void main(void) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    &lt;/script&gt;
</pre>

<p>Для того, чтобы подобрать интерполируемый цвет каждому пикселю, нам просто необходимо изменить его, получив значение из переменной <code>vColor</code>:</p>

<pre class="brush: html">    &lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
    	varying lowp vec4 vColor;

      void main(void) {
        gl_FragColor = vColor;
      }
    &lt;/script&gt;
</pre>

<p>Это простое изменение, но с помощью него каждый фрагмент вместо фиксированного значения получает значение интерполируемого цвета на основе его расположения относительно вершин.</p>

<h2 id="Отрисовка_с_использованием_цветов">Отрисовка с использованием цветов</h2>

<p>Далее, необходимо добавить код в процедуру <code>initShaders()</code> для задания значений атрибута цвета для шейдерной программы:</p>

<pre class="brush: js">  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);
</pre>

<p>Затем, drawScene() может быть исправлен на фактическое использование этих цветов при отрисовке квадрата:</p>

<pre class="brush: js">  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
</pre>

<p>На этом этапе, вы можете посмотреть <a href="/samples/webgl/sample3/index.html" title="https://developer.mozilla.org/samples/webgl/sample3/index.html">результат работы написанного кода</a>, если используете браузер, поддерживающий WebGL. Вы увидите нечто похожее на следующий рисунок (расположенный по центру в большом чёрном поле):</p>

<p><img alt="screenshot.png" class="default internal" src="/@api/deki/files/4081/=screenshot.png"></p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</p>
