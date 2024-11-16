---
title: Primeros pasos con WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

WebGL permite que el contenido web utilice una API basada en [OpenGL ES](http://www.khronos.org/opengles/) 2.0 para llevar a cabo la representación 2D y 3D en un elemento [canvas](/es/docs/Web/API/Canvas_API) HTML en los navegadores que lo soporten sin el uso de plug-ins. WebGL consiste en código de control escrito en JavaScript y código de efectos especiales (código shader) que se ejecuta en la unidad de procesamiento gráfico de una computadora (GPU). Los elementos WebGL se pueden mezclar con otros elementos HTML y componerse con otras partes de la página o el fondo de la misma.

Este artículo le dará a conocer los conceptos básicos de WebGL. Se asume que ya tiene una comprensión de las matemáticas implicadas en gráficos 3D, y este artículo no pretende tratar de enseñar OpenGL en sí.

## Preparando el renderizado en 3D

Lo primero que necesitas para poder usar WebGL para renderizar en 3D es un HTML [canvas](/es/docs/Web/API/Canvas_API). El fragmento HTML a continuación establece un [canvas](/es/docs/Web/API/Canvas_API) y configura un controlador de eventos `onload` que se utilizarán para inicializar nuestro contexto WebGL.

```html
<body onload="start()">
  <canvas id="glcanvas" width="640" height="480">
    Tu navegador parece no soportar el elemento HTML5
    <code>&lt;canvas&gt;</code>.
  </canvas>
</body>
```

### Preparando el contexto de WebGL

La función `start()`, en nuestro código JavaScript, es llamada después de que el documento fue cargado. Su misión es establecer el contexto WebGL y empezar a renderizar contenido.

```js
var gl; // Un variable global para el contexto WebGL

function start() {
  var canvas = document.getElementById("glcanvas");

  gl = initWebGL(canvas); // Inicializar el contexto GL

  // Solo continuar si WebGL esta disponible y trabajando

  if (gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Establecer el color base en negro, totalmente opaco
    gl.enable(gl.DEPTH_TEST); // Habilitar prueba de profundidad
    gl.depthFunc(gl.LEQUAL); // Objetos cercanos opacan objetos lejanos
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Limpiar el buffer de color asi como el de profundidad
  }
}
```

La primer cosa que hacemos aqui es obtener una referencia al [canvas](/es/docs/Web/API/Canvas_API), ocultándolo en una variable llamada `canvas`. Obviamente si no necesitas referenciar repetidamente, deberías evitar guardar este valor globalmente, y solo guardarlo en una variable local o miembro de un objeto.

Una vez tenemos el canvas, llamamos a la función llamada `initWebGL()`; esta es una función que definiremos momentaneamente; su trabajo es inicializar el contexto WebGL.

Si el contexto es exitosamente inicializado, `gl` sera una referencia a este. En este caso, establecemos el color base a negro, después limpiamos el contexto a ese color. Después, el contexto es configurado estableciendo parametros. En este caso, estamos habilitando la prueba de profundidad y especificando que los objetos cercanos opacaran a los objetos lejanos.

Para los propositos de esta introducción al código, eso sera todo lo que haremos. Empezaremos a ver como crear algo después.

### Crear el contexto de WebGL

La función `initWebGL()`se ve como esto:

```js
function initWebGL(canvas) {
  gl = null;

  try {
    // Tratar de tomar el contexto estandar. Si falla, retornar al experimental.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (e) {}

  // Si no tenemos ningun contexto GL, date por vencido ahora
  if (!gl) {
    alert("Imposible inicializar WebGL. Tu navegador puede no soportarlo.");
    gl = null;
  }

  return gl;
}
```

Para obtener el contexto WebGL de un canvas, pedimo el contexto llamado "webgl" del canvas. Si este falla, intentamos con el nombre "experimental-webgl". Si este igualmente, falla, mostramos una alerta permitiendo al usuario conocer que parece no tener soporte WebGL. Eso es todo al respecto. En este punto, `gl` es nulo (no hay ningun contexto WebGL disponible) o es una referencia al contexto WebGL en donde renderizaremos.

> [!NOTE]
> El nombre de contexto "experimental-webgl" es nombre temporal para usar durante el desarrollo de las especificaciones; el nombre "webgl" sera usado una vez se termine el desarrollo.

En este punto, tienes suficiente código para que el contexto WebGL, inicialice exitosamente, y deberias terminar con una gran cuadro negro y vacio, listo y esperando a recibir contenido .

[Prueba este ejemplo](/samples/webgl/sample1/index.html) si estas usando un navegador compatible con WebGL.

### Cambiando el tamaño del contexto WebGL

Un nuevo contexto WebGL establecera el tamaño de su ventana a la altura y anchura del elemento canvas, sin CSS, al instante el contexto fue obtenido. Editando el estilo del elemento canvas cambiara su tamaño mostrado pero no cambiara la resolución de renderizado. Editando los atributos de anchura y altura de un elemento canvas después de crear el contexto tampoco cambiara el numero de pixeles a ser renderizados. Para cambiar la resolución en la cual WebGL renderiza, como cuando el usuario cambia el tamaño de ventana de un canvas de documento completo o quieres proveer ajustes graficos ajustables dentro de la aplicación, necesitaras llamar a la función del contexto WebGL llamada `viewport()` para hacer efectivo el cambio.

Para modificar la resolución renderizada de un contexto WebGL con las variables `gl` y `canvas` como fue usado en el ejemplo de arriba:

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

Un lienzo experimentara escalado cuando es renderizado en una resolución diferente a la establecida en el estilo CSS . Cambiar el tamaño con CSS es muy util para salvar recursos renderizando a una baja resolución y permitiendo que el navegador aumente la escala; bajar la escala es posible, lo que producira un efecto de Super Sample AntiAliasing (SSAA) (con resultados sencillos y un costo alto de rendimiento). Es mejor usar el MSAA (Multi Sample AntiAliasing) e implementar un filtrado de texturas en el navegador del usuario, si es que esta disponible y es apropiado, en lugar de hacerlo por medio de la fuerza bruta, esperando que el algoritmo de reducción de la imagen del navegador produzca un resultado limpio.

## También podría interesarte

- [Una introducción a WebGL -](https://dev.opera.com/articles/introduction-to-webgl-part-1/)Escrito por Luz Caballero, publicado en dev.opera.com. Este articulo cita que es WebGL, explica como funciona WebGL (incluyendo el concepto del proceso de renderizado), e introduce algunas librerias WebGL
- [Una introducción al OpenGL moderno](http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html) - Una serie de articulos escritos por Joe Groff. Joe da una limpia introducción sobre OpenGL desde su historia al importante concepto del proceso de graficos y provee algunos ejemplos sobre como OpenGL trabaja. Si no tienes ninguna idea sobre OpenGL, este es un buen lugar para comenzar.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
