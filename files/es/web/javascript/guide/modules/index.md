---
title: Módulos JavaScript
slug: Web/JavaScript/Guide/Modules
---

{{JSSidebar("Guía de JavaScript")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Esta guía te brinda todo lo que necesitas para comenzar con la sintaxis de los módulos JavaScript.

## Un antecedente sobre módulos

Los programas JavaScript comenzaron siendo bastante pequeños — la mayor parte de su uso en los primeros días era para realizar tareas de scripting aisladas, proporcionando un poco de interactividad a tus páginas web donde fuera necesario, por lo que generalmente no se necesitaban grandes scripts. Avancemos unos años y ahora tenemos aplicaciones completas que se ejecutan en navegadores con mucho JavaScript, JavaScript ahora se usa en otros contextos ([Node.js](/es/docs/Glossary/Node.js), por ejemplo).

Por lo tanto, en los últimos años se ha comenzado a pensar en proporcionar mecanismos para dividir programas JavaScript en módulos separados que se puedan importar cuando sea necesario. Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie de bibliotecas y marcos de JavaScript que permiten el uso de módulos (por ejemplo, [CommonJS](https://en.wikipedia.org/wiki/CommonJS) y [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) otros basados en sistemas de módulos como [RequireJS](https://requirejs.org/), y recientemente [Webpack](https://webpack.github.io/) y [Babel](https://babeljs.io/)).

La buena noticia es que los navegadores modernos han comenzado a admitir la funcionalidad de los módulos de forma nativa, y de esto se trata este artículo. Esto solo puede ser algo bueno — los navegadores pueden optimizar la carga de módulos, haciéndolo más eficiente que tener que usar una biblioteca y hacer todo ese procesamiento adicional de lado del cliente, ahorrando viajes de ida y vuelta adicionales.

## Compatibilidad con navegadores

{{Compat}}

## Introducción — un ejemplo

Para demostrar el uso de módulos, hemos creado un [sencillo conjunto de ejemplos](https://github.com/mdn/js-examples/tree/master/module-examples) que puedes encontrar en GitHub. Estos ejemplos demuestran un sencillo conjunto de módulos que crean un elemento [`<canvas>`](/es/docs/Web/HTML/Element/canvas) en una página web, y luego dibujan (y reportan información sobre) diferentes formas en el lienzo.

Estos son bastante triviales, pero se han mantenido deliberadamente simples para demostrar los módulos con claridad.

> **Nota:** Si deseas descargar los ejemplos y ejecutarlos localmente, deberás ejecutarlos a través de un servidor web local.

## Estructura básica de los ejemplos

En nuestro primer ejemplo (ve [basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules)) tenemos la siguiente estructura de archivos:

```
index.html
main.js
modules/
    canvas.js
    square.js
```

> **Nota:** Todos los ejemplos de esta guía básicamente tienen la misma estructura; lo anterior debería empezar a resultarte bastante familiar.

Los dos módulos del directorio `modules` se describen a continuación:

- `canvas.js` — contiene funciones relacionadas con la configuración del lienzo (`canvas`):

  - `create()` — crea un lienzo (`canvas`) con un `width` y `height` especificados dentro de un contenedor [`<div>`](/es/docs/Web/HTML/Element/div) con un ID especificado, que a su vez se añade dentro de un elemento padre especificado. Devuelve un objeto que contiene el contexto 2D del lienzo y el ID del contenedor.
  - `createReportList()` — crea una lista desordenada adjunta dentro de un elemento contenedor específico, que se puede usar para generar datos de informes. Devuelve el ID de la lista.

- `square.js` — contiene:

  - `name` — una constante que contiene la cadena 'square'.
  - `draw()` — dibuja una figura cuadrada en un lienzo específico, con un tamaño, posición y color específicos. Devuelve un objeto que contiene el tamaño, la posición y el color del cuadrado.
  - `reportArea()` — escribe el área de un cuadrado en una lista de informes específica, dada su longitud.
  - `reportPerimeter()` — escribe el perímetro de un cuadrado en una lista de informes específica, dada su longitud.

## Reflexión — `.mjs` versus `.js`

A través de este artículo, usaremos extensiones `.js` para nuestros archivos de módulo, pero en otros recursos, puedes ver que en su lugar se usa la extensión `.mjs`. [La documentación de V8 recomienda esto](https://v8.dev/features/modules#mjs), por ejemplo. Las razones dadas son:

- Es bueno por claridad, es decir, deja claro qué archivos son módulos y cuáles JavaScript.
- Asegura que tus archivos de módulo sean analizados como un módulo por los entornos de ejecución como [Node.js](https://nodejs.org/api/esm.html#esm_enabling) y herramientas de compilación como [Babel](https://babeljs.io/docs/en/options#sourcetype).

Sin embargo, decidimos seguir usando `.js`, al menos por el momento. Para que los módulos funcionen correctamente en un navegador, debes asegurarte de que tu servidor los esté sirviendo con un encabezado `Content-Type` que contenga un tipo MIME de JavaScript como `text/javascript`. Si no lo haces, obtendrás un estricto error de verificación de tipo MIME como "El servidor respondió con un tipo MIME que no es JavaScript" y el navegador no ejecutará tu JavaScript. La mayoría de los servidores ya configuran el tipo correcto para archivos `.js`, pero todavía no para archivos `.mjs`. Los servidores que ya sirven archivos `.mjs` incluyen [GitHub Pages](https://pages.github.com/) y [`http-server`](https://github.com/http-party/http-server#readme) para Node.js.

Esto está bien si ya estás utilizando un entorno de este tipo, o si no, pero sabes lo que estás haciendo y tiene acceso (es decir, puedes configurar tu servidor para establecer el [`Content-Type`](/es/docs/Web/HTTP/Headers/Content-Type) para archivos `.mjs`). Sin embargo, podría causar confusión si no controlas el servidor desde el que estás sirviendo archivos, o si estás publicando archivos para uso público, como lo hacemos aquí.

Por motivos de aprendizaje y portabilidad, decidimos mantenernos en `.js`.

Si realmente valoras la claridad de usar `.mjs` para módulos en lugar de usar `.js` para archivos JavaScript "normales", pero no quieres encontrarte con el problema descrito anteriormente, siempre puedes usar `.mjs` durante el desarrollo y convertirlos a `.js` durante tu paso de compilación.

También vale la pena señalar que:

- Es posible que algunas herramientas nunca admitan `.mjs`, tal como [TypeScript](https://www.typescriptlang.org/).
- El atributo `<script type="module">` se usa para indicar cuándo se está apuntando a un módulo, como verás a continuación.

## Exportar características del módulo

Lo primero que debes hacer para acceder a las funciones del módulo es exportarlas. Esto se hace usando la declaración {{jsxref("Statements/export", "export")}}.

La forma más sencilla de utilizarla es colocarla delante de cualquier elemento que desees exportar fuera del módulo, por ejemplo:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}
```

Puedes exportar funciones, `var`, `let`, `const` y, como veremos más adelante — clases. Deben ser elementos de nivel superior; no puedes usar `export` dentro de una función, por ejemplo.

Una forma más conveniente de exportar todos los elementos que deseas exportar es usar una sola declaración de exportación al final de tu archivo de módulo, seguida de una lista separada por comas de las características que deseas exportar entre llaves. Por ejemplo:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importación de características en tu script

Una vez que hayas declarado las funciones y características que deseas exportar de tu módulo, debes importarlas en tu script para poder usarlas. La forma más sencilla de hacerlo es la siguiente:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Utiliza la declaración {{jsxref("Statements/import", "import")}}, seguida de una lista separada por comas de las características que deseas importar entre llaves, seguida de la palabra clave `from`, seguida de la ruta al archivo del módulo — una ruta relativa a la raíz del sitio, que para nuestro ejemplo de `basic-modules` sería `/js-examples/modules/basic-modules`.

Sin embargo, hemos escrito la ruta de manera un poco diferente — estamos usando la sintaxis de punto (`.`) para significar "la ubicación actual", seguida de la ruta más allá del archivo que estamos tratando de encontrar. Esto es mucho mejor que escribir la ruta relativa completa cada vez, ya que es más corta y hace que la URL sea portátil — el ejemplo seguirá funcionando si lo mueve a una ubicación diferente en la jerarquía del sitio.

Así por ejemplo:

```
/js-examples/modules/basic-modules/modules/square.js
```

se convierte en

```
./modules/square.js
```

Puedes ver estas líneas en acción en [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js).

> **Nota:** En algunos sistemas de módulos, puedes omitir la extensión del archivo y el punto (por ejemplo, `'/modules/square'`). Esto no funciona en módulos de JavaScript nativos.

Una vez que hayas importado las funciones a tu script, las puedes usar tal como se definieron dentro del mismo archivo. Lo siguiente se encuentra en `main.js`, debajo de las líneas `import`:

```js
let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> **Nota:** Aunque las funciones importadas están disponibles en el archivo, son vistas de solo lectura de la función que se exportó. No puedes cambiar la variable que se importó, pero aún puedes modificar propiedades similares a `const`. Además, estas características se importan como enlaces activos, lo cual significa que pueden cambiar de valor incluso si no puedes modificar el enlace a diferencia de `const`.

## Aplicar el módulo a tu HTML

Ahora solo necesitamos aplicar el módulo `main.js` a nuestra página HTML. Esto es muy similar a cómo aplicamos un script normal a una página, con algunas diferencias notables.

En primer lugar, debes incluir `type="module"` en el elemento [`<script>`](/es/docs/Web/HTML/Element/script), para declarar este script como un módulo. Para importar el script `main.js`, usamos esto:

```html
<script type="module" src="main.js"></script>
```

También puedes incrustar el script del módulo directamente en el archivo HTML colocando el código JavaScript dentro del cuerpo del elemento `<script>`:

```js
<script type="module">/* El código del módulo JavaScript va aquí */</script>
```

El script en el que importas las características del módulo básicamente actúa como el módulo de nivel superior. Si lo omite, Firefox, por ejemplo, te da un error de "SyntaxError: Las declaraciones import solo pueden aparecer en el nivel superior de un módulo".

Solo puede usar instrucciones `import` y `export` dentro de los módulos, no en scripts normales.

## Otras diferencias entre módulos y scripts estándar

- Debes prestar atención a las pruebas locales — si intentas cargar el archivo HTML localmente (es decir, con una URL `file:///`), te encontrarás con errores de CORS debido a los requisitos de seguridad del módulo JavaScript. Necesitas hacer tus pruebas a través de un servidor.
- Además, ten en cuenta que puedes obtener un comportamiento diferente de las secciones del script definidas dentro de los módulos en comparación con los scripts estándar. Esto se debe a que los módulos automáticamente usan {{jsxref("Strict_mode", "strict mode", "", 1)}}.
- No es necesario utilizar el atributo `defer` (ve [atributos de `<script>`](/es/docs/Web/HTML/Element/script#Attributes)) al cargar un script de módulo; los módulos se difieren automáticamente.
- Los módulos solo se ejecutan una vez, incluso si se les ha hecho referencia en varias etiquetas `<script>`.
- Por último, pero no menos importante, dejemos esto en claro — las características del módulo se importan al alcance de un solo script — no están disponibles en el alcance global. Por lo tanto, solo podrás acceder a las funciones importadas en el script en el que se importan y no podrás acceder a ellas desde la consola de JavaScript, por ejemplo. Seguirás recibiendo errores de sintaxis en DevTools, pero no podrás utilizar algunas de las técnicas de depuración que esperabas utilizar.

## Exportaciones predeterminadas vs. exportaciones con nombre

La funcionalidad que hemos exportado hasta ahora se compone de **exportaciones con nombre** — cada elemento (ya sea una función, `const`, etc.) se ha denominado por su nombre en `export`, y ese nombre también se ha utilizado para referirse a él en `import`.

También hay un tipo de exportación llamado **exportación predeterminada** — está diseñado para facilitar que un módulo proporcione una función predeterminada, y también ayuda a los módulos JavaScript a interoperar con los sistemas de módulos CommonJS y AMD existentes (como se explica muy bien en [ES6 en profundidad: módulos](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) de Jason Orendorff; busca "Exportaciones predeterminadas").

Veamos un ejemplo mientras explicamos cómo funciona. En nuestros ↑basic-modules↓ `square.js` puedes encontrar una función llamada `randomSquare()` que crea un cuadrado con un color, tamaño y posición aleatorios. Lo queremos exportar como nuestro predeterminado, por lo que en la parte inferior del archivo escribimos esto:

```js
export default randomSquare;
```

Ten en cuenta la falta de llaves.

En su lugar, podríamos anteponer `export default` a la función y definirla como una función anónima, así:

```js
export default function(ctx) {
  ...
}
```

En nuestro archivo `main.js`, importamos la función predeterminada usando esta línea:

```js
import randomSquare from "./modules/square.js";
```

Una vez más, ten en cuenta la falta de llaves. Esto se debe a que solo se permite una exportación predeterminada por módulo, y sabemos que `randomSquare` lo es. La línea anterior es básicamente una abreviatura de:

```js
import { default as randomSquare } from "./modules/square.js";
```

> **Nota:** La sintaxis as para cambiar el nombre de los elementos exportados se explica a continuación en la sección [Renombrar importaciones y exportaciones](#Renombrar_impotaciones_y_exportaciones).

## Evitar conflictos de nombres

Hasta ahora, nuestros módulos de dibujo de formas en el lienzo parecen estar funcionando bien. Pero, ¿qué pasa si intentamos agregar un módulo que se ocupa de dibujar otra forma, como un círculo o un triángulo? Estas formas probablemente también tendrían funciones asociadas como `draw()`, `reportArea()`, etc.; si intentáramos importar diferentes funciones del mismo nombre en el mismo archivo de módulo de nivel superior, terminaríamos con conflictos y errores.

Afortunadamente, hay varias formas de evitar esto. Los veremos en las siguientes secciones.

## Renombrar importaciones y exportaciones

Dentro de las llaves de tu instrucciones `import` y `export`, puedes usar la palabra clave `as` junto con un nuevo nombre de función, para cambiar el nombre de identificación que utilizará una función dentro del módulo de nivel superior.

Entonces, por ejemplo, ambos de los siguientes harían el mismo trabajo, aunque de una manera ligeramente diferente:

```js
// dentro de module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// dentro de main.js
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// dentro de module.js
export { function1, function2 };

// dentro de main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

Veamos un ejemplo real. En nuestro directorio [renaming](https://github.com/mdn/js-examples/tree/master/module-examples/renaming), verás el mismo sistema de módulos que en el ejemplo anterior, excepto que hemos agregado los módulos `circle.js` y `triangle.js` para dibujar e informar sobre círculos y triángulos.

Dentro de cada uno de estos módulos, tenemos características con los mismos nombres que se exportan y, por lo tanto, cada una tiene la misma instrucción `export` en la parte inferior:

```js
export { name, draw, reportArea, reportPerimeter };
```

Al importarlos a `main.js`, si intentamos usar esto:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

El navegador arrojará un error como "SyntaxError: redeclaración de nombre import" (Firefox).

En su lugar, necesitamos cambiar el nombre de las importaciones para que sean únicas:

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

Ten en cuenta que podrías resolver el problema en los archivos del módulo, p. ej.

```js
// en square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// en main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

Y funcionaría igual. El estilo que uses depende de ti, sin embargo, podría decirse que tiene más sentido dejar el código de tu módulo tal cual y realizar los cambios en las importaciones. Esto tiene sentido especialmente cuando estás importando desde módulos de terceros sobre los que no tienes ningún control.

## Crear un objeto `module`

El método anterior funciona bien, pero es un poco complicado y largo. Una solución aún mejor es importar las características de cada módulo dentro de un objeto `module`. La siguiente forma de sintaxis hace eso:

```js
import * as Module from "./modules/module.js";
```

Esto toma todas las exportaciones disponibles dentro de `module.js` y las hace disponibles como miembros de un objeto `Module`, dándole efectivamente su propio espacio de nombres. Así por ejemplo:

```js
Module.function1()
Module.function2()
etc.
```

De nuevo, veamos un ejemplo real. Si vas a nuestro directorio [module-objects](https://github.com/mdn/js-examples/tree/master/module-examples/module-objects), verás el mismo ejemplo nuevamente, pero reescrito para aprovechar esta nueva sintaxis. En los módulos, las exportaciones están todas en la siguiente forma simple:

```js
export { name, draw, reportArea, reportPerimeter };
```

Las importaciones, por otro lado, se ven así:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

En cada caso, ahora puedes acceder a las importaciones del módulo debajo del nombre del objeto especificado, por ejemplo:

```js
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Por lo tanto, ahora puedes escribir el código de la misma manera que antes (siempre que incluyas los nombres de los objetos donde sea necesario), y las importaciones son mucho más ordenadas.

## Módulos y clases

Como dijimos antes, también puedes exportar e importar clases; esta es otra opción para evitar conflictos en tu código, y especialmente es útil si ya tienes el código de tu módulo escrito en un estilo orientado a objetos.

Puedes ver un ejemplo de nuestro módulo de dibujo de formas reescrito con clases ES en nuestro directorio [classes](https://github.com/mdn/js-examples/tree/master/module-examples/classes). Como ejemplo, el archivo [`square.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/modules/square.js) ahora contiene toda su funcionalidad en una sola clase:

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}
```

que luego exportamos:

```js
export { Square };
```

En [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/main.js), lo importamos así:

```js
import { Square } from "./modules/square.js";
```

Y luego usas la clase para dibujar nuestro cuadrado:

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Carga estática de módulos

Habrá ocasiones en las que querrás agregar módulos juntos. Es posible que tengas varios niveles de dependencias, donde desees simplificar las cosas, combinando varios submódulos en un módulo principal. Esto es posible utilizando la sintaxis de exportación de los siguientes formas en el módulo principal:

```js
export * from "x.js";
export { name } from "x.js";
```

Para ver un ejemplo, ve nuestro directorio [module-aggregation](https://github.com/mdn/js-examples/tree/master/module-examples/module-aggregation). En este ejemplo (basado en nuestro ejemplo de clases anterior) tenemos un módulo adicional llamado `shapes.js`, que reúne toda la funcionalidad de `circle.js`, `square.js` y `triangle.js`. También hemos movido nuestros submódulos dentro de un subdirectorio dentro del directorio `modules` llamado `shapes`. Entonces, la estructura del módulo en este ejemplo es:

```
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

En cada uno de los submódulos, la exportación es de la misma forma, p. ej.

```js
export { Square };
```

Luego viene la parte de agregación. Dentro de [`shapes.js`](https://github.com/mdn/js-examples/blob/master/module-examples/module-aggregation/modules/shapes.js), incluimos las siguientes líneas:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Estas toman las exportaciones de los submódulos individuales y las ponen a disposición de manera efectiva desde el módulo `shapes.js`.

> **Nota:** Las exportaciones a las que se hace referencia en `shapes.js` básicamente se redirigen a través del archivo y realmente no existen allí, por lo que no podrás escribir ningún código relacionado útil dentro del mismo archivo.

Entonces, ahora en el archivo `main.js`, podemos obtener acceso a las tres clases de módulos reemplazando

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

con la siguiente única línea:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Carga dinámica de módulos

La parte más nueva de la funcionalidad de los módulos de JavaScript que estará disponible en los navegadores es la carga dinámica de módulos. Esto te permite cargar módulos dinámicamente solo cuando son necesarios, en lugar de tener que cargar todo por adelantado. Esto tiene algunas obvias ventajas de rendimiento; sigue leyendo y veamos cómo funciona.

Esta nueva funcionalidad te permite llamar a {{jsxref("Statements/import", "import()", "#Importaciones_Dinámicas")}} como una función, pasándole la ruta al módulo como parámetro. Devuelve una {{jsxref("Promise")}}, que se cumple con un objeto `module` (consulta [Crear un objeto `module`](#Crear_un_objeto_module)) que te da acceso a las exportaciones de ese objeto, p. ej.

```js
import("./modules/myModule.js").then((module) => {
  // Haz algo con el módulo.
});
```

Veamos un ejemplo. En el directorio [dynamic-module-import](https://github.com/mdn/js-examples/tree/master/module-examples/dynamic-module-imports) tenemos otro ejemplo basado en nuestro ejemplo de clases. Esta vez, sin embargo, no dibujamos nada en el lienzo cuando se carga el ejemplo. En su lugar, incluimos tres botones — "Círculo", "Cuadrado" y "Triángulo" — que, cuando se presionan, cargan dinámicamente el módulo requerido y luego lo usan para dibujar la forma asociada.

En este ejemplo, solo hemos realizado cambios en nuestros archivos [`index.html`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) y [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.mjs) — el módulo `exports` sigue siendo el mismo que antes.

En `main.js` hemos tomado una referencia a cada botón usando una llamada a [`Document.querySelector()`](/es/docs/Web/API/Document/querySelector), por ejemplo:

```js
let squareBtn = document.querySelector(".square");
```

Luego adjuntamos un escucha de eventos a cada botón para que cuando se presione, el módulo relevante se cargue dinámicamente y se use para dibujar la forma:

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    let square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

Ten en cuenta que, debido a que el cumplimiento de la promesa devuelve un objeto `module`, la clase se convierte en una subfunción del objeto, por lo que ahora necesitamos acceder al constructor prefijado con `Module.`, p. ej. `Module.Square(...)`.

## Solución de problemas

Aquí hay algunos consejos que te pueden ayudar si tienes problemas para hacer que tus módulos funcionen. ¡No dude en agregarlos a la lista si descubres más!

- Mencionamos esto antes, pero para reiterar: los archivos `.js` se deben cargar con un tipo MIME de `text/javascript` (u otro tipo MIME compatible con JavaScript, pero se recomienda `text/javascript`), de lo contrario, obtendrás un error de comprobación de tipo MIME estricto como "El servidor respondió con un tipo MIME no JavaScript".
- Si intentas cargar el archivo HTML localmente (es decir, con una URL `file:///`), encontrarás errores CORS debido a los requisitos de seguridad del módulo JavaScript. Necesitas hacer tus pruebas a través de un servidor. Las páginas de GitHub son ideales ya que también sirven archivos `.js` con el tipo MIME correcto.
- Debido a que `.mjs` es una extensión de archivo no estándar, es posible que algunos sistemas operativos no la reconozcan o intenten reemplazarla por otra. Por ejemplo, descubrimos que macOS silenciosamente agregaba `.js` al final de los archivos `.mjs` y luego, automáticamente ocultaba la extensión del archivo. Entonces, todos nuestros archivos salían realmente como `x.mjs.js`. Una vez que desactivamos la acción de ocultar automáticamente las extensiones de archivo y lo entrenamos para aceptar `.mjs`, todo estuvo bien.

## Ve también

- [Uso de módulos JavaScript en la web](https://developers.google.com/web/fundamentals/primers/modules#mjs), por Addy Osmani y Mathias Bynens
- [Módulos ES: un análisis profundo de dibujos animados](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), publicación en el blog Hacks de Lin Clark
- [ES6 en profundidad: Módulos](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), publicación en el blog Hacks de Jason Orendorff
- Libro de Axel Rauschmayer [Explorando JS: Módulos](http://exploringjs.com/es6/ch_modules.html)

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
