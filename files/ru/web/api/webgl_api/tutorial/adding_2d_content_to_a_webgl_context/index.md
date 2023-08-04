---
title: Добавление двухмерного контента в контекст WebGL
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

После того, как вы успешно [создали контекст WebGL](/ru/docs/Web/WebGL/Getting_started_with_WebGL), вы можете начинать отображать в нем графические объекты. Простейшая вещь, которую вы можете сделать - отрисовать простой квадрат без текстуры. Итак, начнём построение кода для отрисовки квадрата.

## Отрисовка сцены

На данном этапе очень важно понять одну вещь: не смотря на то, что мы в этом примере отрисовываем двухмерный объект, мы по-прежнему отрисовываем его в трёхмерном пространстве. По существу, нам по-прежнему необходимо создать шейдеры, которые будут освещать нашу простую сцену, и отрисовать наш объект. На данном шаге определим как квадрат будет освещаться.

### Инициализация шейдеров

Шейдеры задаются при помощи языка высокого уровня для программирования шейдеров - [OpenGL ES Shading Language](http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf). Для того, чтобы сделать проще процесс поддержки и обновления нашего контента, мы можем фактически написать наш код, загружающий шейдеры и помещающий их в HTML документ, вместо того, чтобы встраивать его весь в JavaScript. Давайте рассмотрим нашу процедуру `initShaders()`, которая выполнит эту задачу:

```js
function initShaders() {
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");

  // создать шейдерную программу

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // Если создать шейдерную программу не удалось, вывести предупреждение

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Unable to initialize the shader program.");
  }

  gl.useProgram(shaderProgram);

  vertexPositionAttribute = gl.getAttribLocation(
    shaderProgram,
    "aVertexPosition",
  );
  gl.enableVertexAttribArray(vertexPositionAttribute);
}
```

Этой процедурой загружаются две шейдерные программы. Первая - фрагментный шейдер, загружается из элемента [`script`](/en/HTML/Element/Script) с ID "shader-fs". Вторая - вершинный шейдер, загружается из элемента [`script`](/en/HTML/Element/Script) с ID "shader-vs". Мы рассмотрим функцию `getShader()` чуть ниже. Эта процедура фактически отвечает за извлечение шейдерных программ из DOM.

Затем мы создаём шейдерную программу, вызывая функцию `createProgram()` объекта WebGL, присоединяя два шейдера к нему, и связывая шейдерную программу. После выполнения этого, проверяется значение параметра `LINK_STATUS` объекта `gl` для того, чтобы убедиться, что программа успешно скомпонована. Если это так, мы активируем новую шейдерную программу.

### Загрузка шейдеров из DOM

Функция `getShader()` получает из DOM шейдерную программу с определённым именем, возвращая скомпилированную шейдерную программу вызывающему, или значение null, если шейдерная программа не может быть загружена или скомпилирована.

```js
function getShader(gl, id) {
  var shaderScript, theSource, currentChild, shader;

  shaderScript = document.getElementById(id);

  if (!shaderScript) {
    return null;
  }

  theSource = "";
  currentChild = shaderScript.firstChild;

  while(currentChild) {
    if (currentChild.nodeType == currentChild.TEXT_NODE) {
      theSource += currentChild.textContent;
    }

    currentChild = currentChild.nextSibling;
  }
```

Как только элемент с указанным ID найден, его текст помещается в переменную `theSource`.

```js
if (shaderScript.type == "x-shader/x-fragment") {
  shader = gl.createShader(gl.FRAGMENT_SHADER);
} else if (shaderScript.type == "x-shader/x-vertex") {
  shader = gl.createShader(gl.VERTEX_SHADER);
} else {
  // неизвестный тип шейдера
  return null;
}
```

После того, как код для шейдера считан, мы проверяем MIME тип шейдерного объекта, чтобы определить является он вершинным (MIME type "x-shader/x-vertex") или фрагментным (MIME type "x-shader/x-fragment") шейдером, а затем создаём соответствующий тип шейдера из полученного исходного кода.

```js
  gl.shaderSource(shader, theSource);

  // скомпилировать шейдерную программу
  gl.compileShader(shader);

  // Проверить успешное завершение компиляции
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
      return null;
  }

  return shader;
}
```

В результате, исходный код, передан в переменную shader и скомпилирован. Если произошли ошибки во время компиляции кода шейдера, мы отображаем окно с предупреждением и возвращаем значение null; Иначе, возвращается новый скомпилированный шейдер.

### Шейдеры

После этого нам необходимо добавить шейдерные программы в HTML описывающий наш документ. Подробная информация о том, как работают шейдеры выходит за рамки этой статьи, как и впрочем описание синтаксиса языка программирования шейдеров.

#### Фрагментный шейдер

Каждый пиксель в полигоне называется **фрагментом** в языке GL. Фрагментные шейдеры необходимы для назначения цвета для каждого пикселя. В данном случае, мы просто назначаем белый цвет каждому пикселю.

`gl_FragColor` - встроенная переменная GL, используемая для управления цветом фрагментов. Устанавливая её значение назначаем цвет пикселям. Ниже приведён пример этого.

```html
<script id="shader-fs" type="x-shader/x-fragment">
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
</script>
```

#### Вершинный шейдер

Вершинный шейдер определяет положение и форму каждой вершины.

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  }
</script>
```

## Создание объекта

Перед тем, как мы отрисуем наш квадрат, нам необходимо создать буфер, который содержит его вершины. Мы сделаем это, вызвав функцию `initBuffers().` По мере ознакомления с другими концепциями WebGL, эта функция будет усложняться при создании более сложных трёхмерных объектов.

```js
var horizAspect = 480.0 / 640.0;

function initBuffers() {
  squareVerticesBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  var vertices = [
    1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
}
```

В этом примере эта функция упрощена и даёт оценить основную суть сцены. Она начинает работу с вызова метода `createBuffer()` объекта `gl` для получения буфера, в котором мы будем хранить вершины. Затем он привязывается к контексту, вызовом метода `bindBuffer()`.

После того, как мы это сделали, мы создаём JavaScript массив, содержащий координаты для каждой вершины квадрата. Затем этот массив преобразуется в массив вещественных чисел WebGL и передаётся в метод `bufferData()` объекта `gl` для назначения вершин объекту.

## Отрисовка сцены

Как только шейдеры установлены и объект создан, мы можем действительно отрисовать сцену. Поскольку в этом примере нет какой-либо анимации, наша функция `drawScene()` имеет очень простой вид. Она использует несколько утилитарных процедур, которые мы кратко рассмотрим ниже.

```js
function drawScene() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  perspectiveMatrix = makePerspective(45, 640.0 / 480.0, 0.1, 100.0);

  loadIdentity();
  mvTranslate([-0.0, 0.0, -6.0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
  setMatrixUniforms();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
```

Первый шаг - очистка цветом фона сцены контекста. Затем мы устанавливаем перспективу камеры. Мы устанавливаем угол обзора в 45°, с соотношением ширины к высоте равным 640/480 (размеры нашего объекта canvas). Мы также определяем, что мы хотим видеть отрисованными объекты на расстоянии от 0.1 до 100 единиц от камеры.

Затем мы устанавливаем позицию квадрата, загружая определённую позицию и размещая её от камеры на 6 единиц. После этого, мы привязываем буфер, содержащий вершины квадрата к контексту, настраиваем его, и отрисовываем объект, вызывая метод `drawArrays()`.

Вы можете [посмотреть как это работает щёлкнув по этой ссылке](/samples/webgl/sample2). Но это только в том случае, если используемый браузер осуществляет поддержку WebGL.

## Операции над матрицами

Операции над матрицами достаточно сложны. Никому бы не хотелось самому писать весь код для работы с ними. К счастью, есть [Sylvester](http://sylvester.jcoglan.com/) - очень удобная библиотека для выполнения операций над векторами и матрицами, написанная на JavaScript.

Файл `glUtils.js`, используемый в этом примере, используется большинством примеров на WebGL, размещённых в сети интернет. Никто не знает точно откуда он появился. Он просто используется Sylvester и он даже пополняется методами для построения специальных типов матриц, а также вывода HTML для их отображения.

Также, этот пример определяет несколько полезных процедур взаимодействия с этими библиотеками для выполнения определённых задач. Пояснения относительно того, что делает каждая из приведённых функций, выходят за рамки этого примера, но в сети есть много хороших материалов об операциях над матрицами. Чуть [ниже](#ниже) есть список некоторых из них.

```js
function loadIdentity() {
  mvMatrix = Matrix.I(4);
}

function multMatrix(m) {
  mvMatrix = mvMatrix.x(m);
}

function mvTranslate(v) {
  multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4());
}

function setMatrixUniforms() {
  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  gl.uniformMatrix4fv(
    pUniform,
    false,
    new Float32Array(perspectiveMatrix.flatten()),
  );

  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));
}
```

## Смотрите также

- [Матрицы](http://mathworld.wolfram.com/Matrix.html) на Wolfram MathWorld
- [Матрица](<http://en.wikipedia.org/wiki/Matrix_(mathematics)>) (Wikipedia)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
