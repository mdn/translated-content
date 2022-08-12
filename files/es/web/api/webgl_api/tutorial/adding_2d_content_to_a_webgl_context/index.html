---
title: Agregando Contenido 2D en el Contexto WebGL
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
translation_of: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---
<div>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}</div>

<p>Una vez que has logrado <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL">crear el contexto WebGL</a>, estás listo para crear objetos dentro del mismo. Algo sencillo que podemos hacer es pintar un simple cuadrado plano sin texturas, así que vamos a empezar desde ahí, creando el código para dibujar el cuadrado plano.</p>

<h2 id="Dibujando_la_Escena">Dibujando la Escena</h2>

<p>Lo mas importante que tenemos que entender antes de empezar, es que aún cuando dibujaremos un cuadrado plano en este ejemplo, estaremos trabajando en un espacio 3D. Lo que estaremos haciendo es dibujar un cuadrado plano y posicionándolo frente de la camara de forma perpendicular. Necesitaremos definir los Shaders que definirán el color para nuestra escena además de dibujar nuestro objeto. Esto establecerá cómo aparece el cuadrado plano en nuestra pantalla.</p>

<h3 id="Los_Shaders">Los Shaders </h3>

<p>Los shaders usan especificamente <a href="https://www.khronos.org/files/opengles_shading_language.pdf">OpenGL ES Shading Language</a>. Los detalles de la forma de trabajar de los shaders estan fuera del alcance de este articulo, como tambien la sintaxis del lenguaje de los shaders sin embargo la version corta es que hay 2 tipos de shaders (funciones que se ejecutan en la GPU) que necesitas escribir.  shaders de vertices y shaders de fragmentos. Estos son pasados al WebGL como una cadena y compilados para ejecutarse en el GPU.</p>

<h4 id="Shaders_de_Vértices">Shaders de Vértices</h4>

<p>La responsabilidad de los Shaders de Vértices es asignar un valor a una variable especial <code>gl_Position</code> para crear los valores del espacio de trabajo (valores entre  -1 y +1) en toda la zona del canvas. En nuestro Shader de Vértices de abajo estamos recibiendo valores de un atributo que definiremos como <code>aVertexPosition</code>. Estamos entonces multiplicando esa posición por dos matrices 4x4 que definimos como <code>uProjectionMatrix</code> y <code>uModelMatrix</code> e igualando <code>gl_Position</code> al resultado. Para más información sobre proyección y otras matrices <a href="https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html">puedes encontrar útil este artículo</a>.</p>

<pre class="brush: html">  // Vertex shader program

  const vsSource = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;
</pre>

<h4 id="Shaders_de_Fragmentos">Shaders de Fragmentos</h4>

<p>Cada vez que el Shader de Vértices escribe de 1 a 3 valores al <code>gl_Position</code> este también dibujará un punto, una linea o un triángulo. Mientras éste esta dibujando, llamará al Shader de Fragmentos y preguntará: ¿De qué color debería dibujar este pixel? En este caso, simplemente retornaremos blanco cada vez.</p>

<p><code>gl_FragColor</code> es una variable built-in de GL que es usada para el color del fragmento. Al definir su valor se establece el color del pixel, como se ve a continuación:</p>

<pre class="brush: html">  const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
</pre>

<h3 id="Inicializando_los_shaders">Inicializando los shaders</h3>

<p>Ahora que hemos definido los dos shaders, necesitamos pasarlos a WebGL, compilarlos y enlazarlos juntos. El código de abajo crea dos shaders al llamar <code>loadShader</code>, pasando el tipo y la fuente para el shader. Entonces crea un programa, adjunta los shaders y los enlaza juntos. Si la compilación o el enlace fallan, el código muestra una alerta.</p>

<pre class="brush: js">//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
</pre>

<p>Para usar este código lo llamamos así:</p>

<pre class="brush: js">  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
</pre>

<p>Después de haber creado el programa de sombreado necesitaremos buscar las ubicaciones que WebGL asignó a nuestras entradas (inputs). En este caso tenemos un attribute y 2 uniforms. Los attribute reciben valores de los buffers. Cada iteración del Shader de Vértices recibe el siguiente valor desde el buffer asignado al attribute. Los uniforms son similares a variables globales en Javascript, estos mantienen el mismo valor para todas las iteraciones de un shader. Como las ubicaciones attribute y uniform son específicas de un solo programa de sombreado, los almacenamos juntos para que sean fáciles de pasar.</p>

<pre class="brush: js">  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };
</pre>

<h2 id="Creando_el_cuadrado_plano">Creando el cuadrado plano</h2>

<p>Antes de que podamos renderizar nuestro cuadrado plano, necesitamos crear el buffer que contenga sus posiciones de vértice y poner las posiciones de vértice en él. Lo haremos usando una función que llamaremos <code>initBuffers()</code>. Mientras vayamos explorando conceptos WebGL más avanzados, esta rutina crecerá para crear objetos 3D más y más complejos.</p>

<pre class="brush: js">function initBuffers(gl) {

  // Create a buffer for the square's positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.

  const positions = [
     1.0,  1.0,
    -1.0,  1.0,
     1.0, -1.0,
    -1.0, -1.0,
  ];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER,
                new Float32Array(positions),
                gl.STATIC_DRAW);

  return {
    position: positionBuffer,
  };
}
</pre>

<p>Esta rutina es muy sencilla dada la naturaleza de la escena en este ejemplo. Empieza llamando el método {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}} del objeto <code>gl</code> para obtener un buffer dentro del cual almacenaremos las posiciones del vértice. Este es ligado al contexto al llamar el método {{domxref("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}}.</p>

<p>Una vez terminado, creamos un array de Javascript almacenando la posición de cada vértice en el cuadrado plano. Este es convertido entonces en un array de flotantes y es pasado al método {{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}} del objeto <code>gl</code> para establecer las posiciones de vértice para el objeto.</p>

<h2 id="Renderizando_la_escena">Renderizando la escena</h2>

<p>Una vez que los shaders estan establecidos, se buscan las ubicaciones, y las posiciones de vértice del cuadrado plano puestas en un buffer, podemos renderizar la escena. Como no estamos animando nada en este ejemplo, nuestra función <code>drawScene()</code> es muy simple. Esta usa unas rutinas de utilidad que cubriremos en breve.</p>

<pre class="brush: js">function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [-0.0, 0.0, -6.0]);  // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
    const numComponents = 2;  // pull out 2 values per iteration
    const type = gl.FLOAT;    // the data in the buffer is 32bit floats
    const normalize = false;  // don't normalize
    const stride = 0;         // how many bytes to get from one set of values to the next
                              // 0 = use type and numComponents above
    const offset = 0;         // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

</pre>

<p>El primer paso es limpiar el canvas de nuestro color de fondo; establecemos la perspectiva de la cámara. Configuramos un campo de 45º, con una relación ancho/alto que coincide con las dimensiones de nuestro canvas. También especificamos que queremos objetos entre 0.1 y 100 unidades de la cámara para ser renderizados.</p>

<p>Entonces establecemos la posición del cuadrado plano al cargar la posición de identidad y alejando la cámara en 6 unidades. Déspues de eso, enlazamos el buffer del vértice del cuadrado al atributo que el shader estaba usando para <code>aVertexPosition</code> y le decimos a WebGL como jalar los datos fuera de este. Finalmente dibujamos el objeto al llamar el método {{domxref("WebGLRenderingContext.drawArrays()", "drawArrays()")}}.</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample2/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample2">Ver código completo</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample2/">Abrir esta demostración en una nueva página</a></p>

<h2 id="Utilidades_para_operaciones_de_Matrices">Utilidades para operaciones de Matrices</h2>

<p>Las operaciones de matrices pueden parecer complicadas pero <a href="https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html">en realidad son muy fáciles si las tomas un paso a la vez</a>. Generalmente la gente usa una librería de matrices antes que escribir la suya. En nuestro caso estamos usando la popular <a href="http://glmatrix.net/">librería glMatrix</a>.</p>

<p>Ver también</p>

<ul>
 <li><a href="https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html">Matrices</a> en WebGLFundamentals</li>
 <li><a class="external" href="http://mathworld.wolfram.com/Matrix.html">Matrices</a> en Wolfram MathWorld</li>
 <li><a class="external" href="http://en.wikipedia.org/wiki/Matrix_(mathematics)">Matriz</a> en Wikipedia</li>
</ul>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}</p>
