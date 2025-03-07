---
title: Adicionando conteúdo 2D a um contexto WebGL
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Uma vez que você tenha [criado um contexto WebGL](/pt-BR/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL) com sucesso, você pode iniciar a renderizar nele. O mais simples que podemos fazer é desenhar um objeto 2D não texturizado. Então vamos começar por aí, construindo o código necessário para se desenhar um quadrado.

## Desenhando a cena

A coisa mais importante para se entender antes de começarmos é que, mesmo que estejamos só renderizando um objeto bidimensional nesse exemplo, nós ainda estamos desenhamos em um espaço 3d. Portanto, ainda precisamos estabelecer os shaders que irão criar a cor para a nossa cena simples, assim como desenhar o objeto. Eles irão estabelecer como o quadrado irá aparecer na tela.

### Inicializando os shaders

Shaders são especificados ao usar a [Linguagem de Shading OpenGL ES](https://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf). Com o intuito de tornar mais fácil para manter e atualizar nosso conteúdo, nós podemos escrever nosso código que carrega os shaders para buscá-los no documento HTML, ao invés de termos de criar tudo em JavaScript. Vamos dar uma olhada na nossa rotina `initShaders()`, que cuida dessa tarefa:

```js
function initShaders() {
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");

  // Cria o programa shader

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // Se falhar ao criar o programa shader, alerta

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

Antes de podermos renderizar nosso quadrado, precisamos criar o buffer que contém seus vértices. Nós faremos isso usando uma função que chamaremos de `initBuffers()`; à medida que exploramos conceitos da WebGL mais avançados, esta rotina será aumentada para criar mais — e mais complexos — objetos 3D.

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

Esta rotina é bem simples dada a natureza básica da cena nesse exemplo. Ela começa chamando o método `createBuffer()` do objeto `gl` para obter um buffer no qual armazenaremos os vértices. Isso é então vinculado ao contexto chamando o método `bindBuffer()`.

Uma vez que isso foi feito, nós criamos um array Javascript contendo as coordenadas para cada vértice do quadrado. Isso é então convertido em um array de floats WebGL e passado no método `bufferData()` do objeto `gl` para estabelecer as vértices para o objeto.

## Renderizando a cena

Uma vez que os shaders estão estabelecidos e o objeto construído, nós podemos realmente renderizar a cena. Já que não estamos animando nada neste exemplo, nossa função `drawScene()` é bem simples. Ele usa algumas rotinas de utilidade que abordaremos curtamente.

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

O primeiro passo é para limpar o contexto para nossa cor de fundo; então estabelecemos a perspectiva da câmera. Nós definimos um campo de visão de 45°, com uma proporção de largura pra altura de 640/480 (as dimensões do nosso canvas). Nós também especificamos que apenas queremos objetos entre 0.1 e 100 unidades da câmera para serem renderizadas.

Então estabelecemos a posição do quadrado carregando a identidade de posição e transladando para longe da câmera por 6 unidades. Depois disso, nós vinculamos o buffer do vértice do quadrado para o contexto, configura ele, e desenha o objeto chamando o método `drawArrays()`.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[Veja o código completo](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2) | [Abra essa demo em uma nova página](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)

## Operações úteis da Matrix

Opetações da Matriz são complicadas demais. Ninguém realmente quer escrever todo o código necessário para cuidar delas por conta própria. Felizmente, há [Sylvester](http://sylvester.jcoglan.com/), uma biblioteca bem útil para lidar com operações de vetores e matrix do JavaScript.

O arquivo `glUtils.js` usado por essa demo é usado por um número de demos do WebGL flutuando pela Web. Ninguém parece totalmente claro de onde ele veio, mas ele simplifica o uso do Sylvester mais ainda adicionando métodos para construir tipos especiais de matrizes, assim como gerar HTML para exibir elas.

Além disso, essa demo define algumas rotinas úteis para interagir com essas bibliotecas para tarefas específicas. O que exatamente elas fazem está além do escopo dessa demo, mas há muitas boas referências sobre matrizes disponíveis online; veja a seção [See also](#see_also) para uma lista de algumas.

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

- [Matrizes](https://mathworld.wolfram.com/Matrix.html) on Wolfram MathWorld
- [Matriz](<http://en.wikipedia.org/wiki/Matrix_(mathematics)>) na Wikipedia

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
