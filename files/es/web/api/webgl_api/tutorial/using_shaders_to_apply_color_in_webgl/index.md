---
title: Utilizar los shaders para aplicar color en WebGL
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

Habiendo creado un cuadrado en la [demostración anterior](/es/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context), el siguiente paso es agregar algo de color. Nosotros podemos hacer esto a través de los shaders.

## Aplicando color a los vértices

En WebGL, los objetos son construidos utilizando conjuntos de vértices, donde cada uno de ellos posee una posición y un color. Por defecto, los colores de los otros pixeles (y todos sus atributos, incluyendo la posición) son procesados utilizando interpolación, creando automáticamente gradientes suaves. Anteriormente, nuestro sombreador de vértices (vertex shader) no aplicaba ningún color específico a los vértices. Entre éste y el fragmento sombreado que asigna el color blanco fijo a cada pixel, todo el cuadrado se renderizó como blanco sólido.

Vamos a suponer que queremos desplegar un gradiente donde cada una de las esquinas tiene diferente color: rojo, azul, verde, y blanco. La primera tarea es establecer estos colores en los cuatro vértices. Para hacer esto, primero necesitamos crear una matriz de colores de vértices, después la guardaremos dentro del buffer WebGL. Podemos realizarlo agregando el siguiente código a nuestra función initBuffers():

```js
  var colors = [
    1.0,  1.0,  1.0,  1.0,    // blanco
    1.0,  0.0,  0.0,  1.0,    // rojo
    0.0,  1.0,  0.0,  1.0,    // verde
    0.0,  0.0,  1.0,  1.0     // azul
  ];

  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
```

El código comienza por crear una matriz JavaScript que contenga cuatro vectores de 4 valores, para cada uno de los colores del vértice. Entonces se reserva un nuevo buffer WebGL para almacenar esos colores y la matriz se convierte en floats (Números de tipo flotante) y se almacena dentro del buffer.

Para designar los colores a utilizar, el vertex shader necesita ser actualizado para extraer el color apropiado del buffer de color:

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

La diferencia principal aquí es que, por cada vértice, vamos a establecer su color usando `varying` en el fragmento de sombreado.

## Coloreando los fragments

Anteriormente utilizábamos el fragment shader como un actualizador:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
</script>
```

Según vayamos tomando el color interpolado para cada pixel, nosotros simplemente necesitamos cambiar esto para obtener el valor de la variable vColor:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  varying lowp vec4 vColor;

   void main(void) {
     gl_FragColor = vColor;
   }
</script>
```

Es un cambio simple; cada fragmento simplemente recibe el color interpolado basado en su posición relativa a los vértices, en lugar que de un valor establecido.

## Dibujando usando los colores

Como siguiente, es necesario agregar código hacia la rutina `initShaders()` esto para inicializar el atributo de color para el shader program:

```js
vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
gl.enableVertexAttribArray(vertexColorAttribute);
```

Then, drawScene() puede ser revisado para que utilice dichos colores cuando dibuje el cuadrado:

gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer); gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);

{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510) }}

[Ver el código completo](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3) | [Abrir demostración en una nueva página](http://mdn.github.io/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
