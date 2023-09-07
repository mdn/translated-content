---
title: Adicionando conteúdo 2D a um contexto WebGL
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Uma vez que você tenha [criado um contexto WebGL](/pt-BR/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL) com sucesso, você pode iniciar a renderizar nele. O mais simples que podemos fazer é desenhar um objeto 2D não texturizado. Então vamos começar por aí, construindo o código necessário para se desenhar um quadrado.

## Desenhando a cena

A coisa mais importante para se entender antes de começarmos é que, mesmo que estejamos só renderizando um objeto bidimensional nesse exemplo, nós ainda estamos desenhamos em um espaço 3d. Portanto, ainda precisamos estabelecer os shaders que irão criar a cor para a nossa cena simples, assim como desenhar o objeto. Eles irão estabelecer como o quadrado irá aparecer na tela.

### Inicializando os shaders

Shaders são especificados ao usar a [Linguagem de Shading OpenGL ES](http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf). Com o intuito de tornar mais fácil para manter e atualizar nosso conteúdo, nós podemos escrever nosso código que carrega os shaders para buscá-los no documento HTML, ao invés de termos de criar tudo em JavaScript. Vamos dar uma olhada na nossa rotina `initShaders()`, que cuida dessa tarefa:

```js
function initShaders() {
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");

  // Cria o progrma shader

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // Se falhar ao criar o progrma shader, alerta

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Não foi possível inicializar o programa shader.");
  }

  gl.useProgram(shaderProgram);

  vertexPositionAttribute = gl.getAttribLocation(
    shaderProgram,
    "aVertexPosition",
  );
  gl.enableVertexAttribArray(vertexPositionAttribute);
}
```

Dois programas estão sendo inicializados por essa rotina; o primeiro, fragment shader, é carregado a partir do elemento HTML com o id "shader-fs". O segundo, vertex shader, é carregado pelo elemento HTML com o id "shader-vs". Nós vamos analisar a função getShader() no próximo tutorial; Essa rotina, na verdade, lida com a parte de puxar os programas shader da DOM.

Então nós criamos o programa shader chamando do objeto WebGL a função createProgram(), anexamos dois shaders nele e fazemos o link com o programa shader. Depois de fazer isso, o parametro LINK_STATUS do objeto g1 é checado para ter certeza de que o link foi criado com sucesso; Se sim, nós ativamos o novo programa shader.

### Carregando os shaders da DOM

`A rotina getShader()` busca um programa shader com o nome específico do DOM, retornando o programa shader compilado para o requisitante, ou null se ele não pode ser carregado ou compilado.

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

Uma vez que o elemento com o ID específico é encontrado, seu texto é lido na variável theSource.

```js
if (shaderScript.type == "x-shader/x-fragment") {
  shader = gl.createShader(gl.FRAGMENT_SHADER);
} else if (shaderScript.type == "x-shader/x-vertex") {
  shader = gl.createShader(gl.VERTEX_SHADER);
} else {
  // Tipo de shader desconhecido
  return null;
}
```

Uma vez que o código para o shader tenha sido lido, nós observamos o tipo MIME do objeto shader para determinar se é um sombreamento de vértice (MIME type "x-shader/x-vertex") ou um fragmento de shader (MIME type "x-shader/x-fragment"), em seguinda crie um tipo de shader apropriado para a partir do código fonte recuperado.

```js
  gl.shaderSource(shader, theSource);

  // Compile o programa shader
  gl.compileShader(shader);

  // Veja se ele compila com sucesso
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert("Um erro ocorreu ao compilar os shaders: " + gl.getShaderInfoLog(shader));
      return null;
  }

  return shader;
}
```

Finalmente, a fonte é passada para o shader e compilada. Se um erro ocorrer enquanto o shader estiver compilando, nós mostraremos um alerta e retornaremos null; Caso contrário, o shader recém compilado é retornado para o requisitante.

### Os shaders

Agora, nós precisamos adicionar os programas shaders ao HTML para descrever nosso documento. Os detalhes sobre como os shaders trabalham estão além do escopo deste artigo, assim como a sintaxe da linguagem do shader.

#### Fragmentos shader

Cada pixel é um poligono chamado de fragmento (fragment) na linguagem GL. O trabalho do fragmento de shader é estabelecer a cor de cada pixel. Ness caso, nós estamos apenas definindo a cor branca para cada pixel.

g1_FragColor é um construtor de variável GL que é utilizado para a cor do fragmento. Altere seu valor para definir a cor do pixel, como mostrado abaixo.

```html
<script id="shader-fs" type="x-shader/x-fragment">
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
</script>
```

#### Vértice do shader

A vértice (vertex) do shader define a posição e a forma de cada vértice.

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

## Criando um objeto

Before we can render our square, we need to create the buffer that contains its vertices. We'll do that using a function we call `initBuffers()`; as we explore more advanced WebGL concepts, this routine will be augmented to create more — and more complex — 3D objects.

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

This routine is pretty simplistic given the basic nature of the scene in this example. It starts by calling the `gl` object's `createBuffer()` method to obtain a buffer into which we'll store the vertices. This is then bound to the context by calling the `bindBuffer()` method.

Once that's done, we create a JavaScript array containing the coordinates for each vertex of the square. This is then converted into an array of WebGL floats and passed into the `gl` object's `bufferData()` method to establish the vertices for the object.

## Desenhando a cena

Once the shaders are established and the object constructed, we can actually render the scene. Since we're not animating anything in this example, our `drawScene()` function is very simple. It uses a few utility routines we'll cover shortly.

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

The first step is to clear the context to our background color; then we establish the camera's perspective. We set a field of view of 45°, with a width to height ratio of 640/480 (the dimensions of our canvas). We also specify that we only want objects between 0.1 and 100 units from the camera to be rendered.

Then we establish the position of the square by loading the identity position and translating away from the camera by 6 units. After that, we bind the square's vertex buffer to the context, configure it, and draw the object by calling the `drawArrays()` method.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample2) | [Open this demo on a new page](http://mdn.github.io/webgl-examples/tutorial/sample2/)

## Operações úteis da Matrix

Matrix operations are complicated enough. Nobody really wants to write all the code needed to handle them on their own. Fortunately, there's [Sylvester](http://sylvester.jcoglan.com/), a very handy library for handling vector and matrix operations from JavaScript.

The `glUtils.js` file used by this demo is used by a number of WebGL demos floating around on the Web. Nobody seems entirely clear on where it came from, but it does simplify the use of Sylvester even further by adding methods for building special types of matrices, as well as outputting HTML for displaying them.

In addition, this demo defines a few helpful routines to interface with these libraries for specific tasks. What exactly they do is beyond the scope of this demo, but there are plenty of good references on matrices available online; see the [See also](#see_also) section for a list of a few.

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

## Ver Também

- [Matrices](http://mathworld.wolfram.com/Matrix.html) on Wolfram MathWorld
- [Matriz](<http://en.wikipedia.org/wiki/Matrix_(mathematics)>) na Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
