---
title: Utilizar los shaders para aplicar color en WebGL
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
translation_of: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</p>

<p>Habiendo creado un cuadrado en la <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context">demostración anterior</a>, el siguiente paso es agregar algo de color. Nosotros podemos hacer esto a través de los shaders.</p>

<h2 id="Aplicando_color_a_los_vértices">Aplicando color a los vértices</h2>

<p>En WebGL, los objetos son construidos  utilizando conjuntos de vértices, donde cada uno de ellos posee una posición y un color. Por defecto, los colores de los otros pixeles (y todos sus atributos, incluyendo la posición) son procesados utilizando interpolación, creando automáticamente gradientes suaves. Anteriormente, nuestro sombreador de vértices (vertex shader) no aplicaba ningún color específico a los vértices. Entre éste y el fragmento sombreado que asigna el color blanco fijo a cada pixel, todo el cuadrado se renderizó como blanco sólido.</p>

<p>Vamos a suponer que queremos desplegar un gradiente donde cada una de las esquinas tiene diferente color: rojo, azul, verde, y blanco. La primera tarea es establecer estos colores en los cuatro vértices. Para hacer esto, primero necesitamos crear una matriz de colores de vértices, después la guardaremos dentro del buffer WebGL. Podemos realizarlo agregando el siguiente código a nuestra función initBuffers(): </p>

<pre class="brush: js">  var colors = [
    1.0,  1.0,  1.0,  1.0,    // blanco
    1.0,  0.0,  0.0,  1.0,    // rojo
    0.0,  1.0,  0.0,  1.0,    // verde
    0.0,  0.0,  1.0,  1.0     // azul
  ];

  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
</pre>

<p>El código comienza por crear una matriz JavaScript que contenga cuatro vectores de 4 valores, para cada uno de los colores del vértice. Entonces se reserva un nuevo buffer WebGL para almacenar esos colores y la matriz se convierte en floats (Números de tipo flotante) y se almacena dentro del buffer.</p>

<p>Para designar los colores a utilizar, el vertex shader necesita ser actualizado para extraer el color apropiado del buffer de color:</p>

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

<p>La diferencia principal aquí es que, por cada vértice, vamos a establecer su color usando <code>varying</code> en el fragmento de sombreado.</p>

<h2 id="Coloreando_los_fragments">Coloreando los fragments</h2>

<p>Anteriormente utilizábamos el fragment shader como un actualizador:</p>

<pre class="brush: html">    &lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
      void main(void) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    &lt;/script&gt;
</pre>

<p>Según vayamos tomando el color interpolado para cada pixel, nosotros simplemente necesitamos cambiar esto para obtener el valor de la variable vColor:</p>

<pre class="brush: html">    &lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
    	varying lowp vec4 vColor;

      void main(void) {
        gl_FragColor = vColor;
      }
    &lt;/script&gt;
</pre>

<p>Es un cambio simple; cada fragmento simplemente recibe el color interpolado basado en su posición relativa a los vértices, en lugar que de un valor establecido.</p>

<h2 id="Dibujando_usando_los_colores">Dibujando usando los colores</h2>

<p>Como siguiente, es necesario agregar código hacia la rutina <code>initShaders() esto para inicializar el atributo de color para el shader program:</code></p>

<pre class="brush: js">  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);
</pre>

<p>Then, drawScene() puede ser revisado para que utilice dichos colores cuando dibuje el cuadrado:</p>

<p>gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer); gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3">Ver el código completo</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample3/">Abrir demostración en una nueva página</a></p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</p>
