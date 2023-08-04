---
title: Matemáticas básicas en JavaScript — números y operadores
slug: Learn/JavaScript/First_steps/Math
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

En este punto del curso, hablaremos de matemáticas en JavaScript — cómo podemos usar {{Glossary("Operator","operadores")}} y otras características para manipular con éxito números y conseguir lo que nos hayamos propuesto.

| Prerequisitos: | Conocimientos básicos de ordenadores, comprensión básica de HTML y CSS, comprensión básica de lo que es JavaScript. |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| Objetivo:      | Familiarizarse con las matemáticas básicas de JavaScript.                                                           |

## Todos aman las matemáticas

Vale, tal vez no. A algunos nos gustan, otros las odiamos desde que aprendimos en la escuela las tablas de multipicar y las divisiones complicadas, y algunos estamos a mitad entre ambas posturas. Pero ninguno podemos negar que las matemáticas son una parte fundamental de la vida que nos afecta. Y esto es especialmente cierto cuando aprendemos JavaScript (o cualquier otro lenguaje similar) — en la medida en que ello pasa por procesar números, calcular nuevos valores, etc., no te puede sorprender comprobar que JavaScript dispone de un completo conjunto de funciones matemáticas.

En este artículo se trata solo aquella parte básica que necesitas conocer por ahora.

### Tipos de números

En programación, incluso el simple sistema numérico decimal que todos conocemos tan bien, es más complicado de lo que podrías pensar. Usamos diferentes términos para describir diferentes tipos de números decimales, por ejemplo:

- **Enteros son números sin parte decimal**, e.g. 10, 400 o -5.
- **Números con coma flotante** (floats): tienen punto decimal y parte decimal, por ejemplo,12.5 y 56.7786543.
- **Doubles**: son un tipo específico de números de coma flotante que tienen una mayor precisión que los numeros de coma flotante comunes (lo que significa que son más precisos en cuanto a la cantidad de decimales que poseen).

¡Incluso tenemos distintos tipos de sistemas numéricos! El decimal es base 10 (quiere decir que utiliza 0-9 en cada columna), pero también tenemos cosas como:

- **Binario** — El lenguaje de computadora de nivel más bajo; 0s y 1s.
- **Octal** — De base 8, utiliza de 0–7 en cada columna.
- **Hexadecimal** — De base 16, utiliza de 0–9 y luego de a–f en cada columna. Puedes haber encontrado estos números antes, cuando colocabas [colores en CSS](/es/Learn/CSS/Introduction_to_CSS/Values_and_units#Hexadecimal_values).

**Antes de que comiences a preouparte de que tu cerebro se derrita, ¡detente un momento!** Para empezar, sólo vamos a apegarnos a los números decimales durante todo este curso; pocas veces te verás en la necesidad de comenzar a pensar sobre los otros tipos, si es que lo haces.

La segunda parte de las buenas noticias es que, a diferencia de otros lenguajes de programación, JavaScript sólo tiene un tipo de dato para los números, adivinaste, {{jsxref("Number")}}. Esto significa que, sin importar el tipo de número con el que estés lidiando en Javascript, los manejas siempre de la misma manera.

> **Nota:** En realidad, JavaScript tiene un segundo tipo de número, {{Glossary("BigInt")}}, que se utiliza para números enteros muy, muy grandes. Pero para los propósitos de este curso, solo nos preocuparemos por los valores numéricos.

### Para mí, todo son números

Juguemos un poco con algunos números para ponernos al día con la sintaxis básica que necesitamos. Coloca los comandos listados abajo en la [consola JavaScript de tus herramientas para desarrolladores](/es/docs/Learn/Common_questions/What_are_browser_developer_tools), o utiliza la sencilla consola integrada que verás abajo si lo prefieres.

**[Abrir en una ventana nueva](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/)**

1. Primero que todo, declara un par de variables e inicializalas con un entero y un flotante, respectivamente, luego escribe los nombres de esas variables para chequear que todo esté en orden:

   ```js
   var myInt = 5;
   var myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Los valores numéricos están escritos sin comillas - Trata de declarar e inicializar un par de variables más que contengan números antes de continuar.
3. Ahora chequea que nuestras variables originales sean del mismo tipo. Hay un operador llamado {{jsxref("Operators/typeof", "typeof")}} en JavaScript hace esto. Digita las dos lineas siguientes:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Obtendrás `"number"` en ambos casos — esto hace las cosas mucho más fáciles que si diferentes números tuvieran difetentes tipos, y tuvimos que lidiar con ellos de diferentes maneras. Uf !

## Operadores Aritméticos

Los operadores aritméticos son operadores básicos que usamos para hacer sumas:

| Operador | Nombre                            | Propósito                                                                                                | Ejemplo                                                                   |
| -------- | --------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `+`      | Adición                           | Suma dos números juntos.                                                                                 | `6 + 9`                                                                   |
| `-`      | Resta                             | Resta el numero de la derecha del de la izquierda.                                                       | `20 - 15`                                                                 |
| `*`      | Multiplicación                    | Multiplica dos números juntos.                                                                           | `3 * 7`                                                                   |
| `/`      | División                          | Divide el número de la izquierda por el de la derecha.                                                   | `10 / 5`                                                                  |
| `%`      | Sobrante (también llamado módulo) | Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha. | `8 % 3` (retorna 2, como tres está dos veces en 8, quedando 2 restantes.) |

> **Nota:** A veces verás números involucrados en sumas referidas como {{Glossary("Operand", "operands")}}.

Probablemente no necesitemos enseñarte matemáticas básicas, pero nos gustaría probar tu entendimiento de la sintaxis involucrada. Intenta entrar los ejemplos de abajo en tu [consola JavaScript de tus herramientas para desarrolladores](/es/docs/Learn/Common_questions/What_are_browser_developer_tools), o usa la sencilla consola incorporada que se vio anteriormente, si lo prefieres, para familiarizarte con la sintaxis.

1. Primero, trata entrando un ejemplo simple por tu cuenta, como

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Puedes tratar declarando e inicializando algunos números en variables, y probar usándolos en la suma - Las variables se comportarán exactamente como los valores que tienen para los fines de la suma. Por ejemplo:

   ```js
   var num1 = 10;
   var num2 = 50;
   9 * num1;
   num2 / num1;
   ```

3. Por último, trate entrando algunas expresiones complejas, como:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Es posible que parte de este último conjunto de sumas no te dé el resultado que esperabas; La siguiente sección bien podría dar la respuesta del por qué.

### Precedencia de Operadores

Veamos el último ejemplo de arriba, asumiendo que num2 tiene el valor 50 y num1 tiene el valor 10 (como se indicó anteriormente):

```js
num2 + num1 / 8 + 2;
```

Como un ser humano, puedes leer esto como "50 más 10 es igual a 60", luego "8 más 2 es igual a 10", y finalmente "60 dividido por 10 es igual a 6".

Pero el navegador hace "10 dividido por 8 es igual a 1.25", luego "50 más 1.25 más 2 es igual a 53.25".

Esto es debido a la **precedencia de operadores** — algunos operadores son aplicados antes de otros cuando se calcula el resultado de una suma (referida como una expresión, en programación). La precedencia de operadores en JavaScript es la misma que en las matemáticas de la escuela — La multiplicación y la división se resuelven siempre primero, luego la suma y resta (la suma siempre se evalua de izquierda a derecha).

Si quieres alterar la precedencia de operación, puedes colocar paréntesis alrededor de las partes que quieras explícitamente evaluar primero. Para obtener un resultado de 6, podríamos hacer esto:

```js
(num2 + num1) / (8 + 2);
```

Pruébalo y verás.

> **Nota:** Una completa lista de todos los operadores de JavaScript y sus precedencias pueden encontrarse en [Expresiones y operadores](/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operator_precedence).

## Operadores de incremento y decremento

Algunas veces necesitarás repetidamente sumar o restar uno de/a una variable numérica. Esto puede hacerse convenientemente usando los operadores de incremento (`++`) y decremento (`--`). Usamos `++` en nuestro juego "Adivina el número" en nuestro artículo [Un primer acercamiento a JavaScrip](/es/docs/Learn/JavaScript/First_steps/A_first_splash)[t](/es/docs/Learn/JavaScript/Introduction_to_JavaScript_1/A_first_splash), cuando agregamos 1 a nuestra variable `guessCount` para mantener una pista de cuantas respuestas le quedan al usuario por turno.

```js
guessCount++;
```

> **Nota:** Son muy comunmente usadas en [ciclos](/es/docs/Web/JavaScript/Guide/Loops_and_iteration), que aprenderás más adelante en el curso. Por ejemplo, Digamos que quieras recorrer una lista de precios, y agregar impuestos a cada uno. Usaría un ciclo para recorrer cada valor y realizar el cálculo necesario para agregar el impuesto a las ventas en cada caso. El incrementador es usado para mover al próximo valor cuando es necesario. Damos un simple ejemplo En realidad, proporcionamos un ejemplo simple que muestra cómo se hace esto: ¡pruébalo en vivo y mira el código fuente para ver si puedes detectar los incrementadores! Veremos los ciclos en detalle más adelante en el curso..

Trata jugando con eso en tu consola. Para empezar, nota que no puedes aplicar esto directamente a un número, sin operar en él mismo. Lo siguiente retorna un error:

```js
3++;
```

Asì, puedes solo incrementar una variable existente. Prueba esto:

```js
var num1 = 4;
num1++;
```

Ok, la extrañeza número 2! Cuando hagas esto, verás que se devuelve un valor de 4; esto se debe a que el navegador devuelve el valor actual y luego incrementa la variable. Puedes ver que se ha incrementado si devuelves el valor variable nuevamente:

```js
num1;
```

Lo mismo funciona con `--` : intenta lo siguiente:

```js
var num2 = 6;
num2--;
num2;
```

> **Nota:** Puedes hacer que el navegador lo haga al revés: aumentar / disminuir la variable y luego devolver el valor, colocando el operador al comienzo de la variable en lugar del final. Prueba los ejemplos anteriores otra vez, pero esta vez usa `++num1` y`--num2`.

## Operadores de asignación

Los operadores de asignación son operadores que asignan un valor a una variable. Ya usamos el más básico, `=`, muchas veces — simplemente asigna a la variable de la izquierda, el valor de la derecha:

```js
var x = 3; // x contiene el valor 3
var y = 4; // y contiene el valor 4
x = y; // x ahora contiene el mismo valor de y... 4
```

Pero hay algunos tipos más complejos, que proporcionan atajos útiles para mantener tu código más ordenado y más eficiente. Los más comunes se enumeran a continuación.:

| Operador | Nombre                    | Propósito                                                                                               | Ejemplo           | Atajo de             |
| -------- | ------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`     | Adición asignación        | Suma el valor de la derecha al valor de la variable de la izquierda y returna el nuevo valor            | `x = 3; x += 4;`  | `x = 3; x = x + 4;`  |
| `-=`     | Resta asignación          | Resta el valor de la derecha, del valor de la variable de la izquierda y retorna el nuevo valor.        | `x = 6; x -= 3;`  | `x = 6; x = x - 3;`  |
| `*=`     | Multiplicación asignación | Multiplica el valor de la variable en la izquierda por el valor en la derecha y retorna el nuevo valor. | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`     | División asignación       | Divide el valor de la variable en la izquierda por el valor de la derecha y retorna el nuevo valor.     | `x = 10; x /= 5;` | `x = 10; x = x / 5;` |

Intenta digitar algunos de estos ejemplos en tu consola, para darte una idea de cómo funcionan. Mira si puedes preguntar los valores que tenían antes de ingresarlos en la segunda línea, en cada caso.

Ten en cuenta que puedes usar otras variables en el lado derecho de cada expresión, por ejemplo:

```js
var x = 3; // x contiene el valor 3
var y = 4; // y contiene el valor 4
x *= y; // x ahora contiene el valor 12
```

> **Nota:** Hay una cantidad de [otros operadores de asignación disponibles](/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators), pero estos son los básicos que debes aprender por ahora.

## Aprendizaje activo: dimensionando una caja canvas

En este ejercicio vamos a hacer que completes algunos números y operadores para manipular el tamaño de una caja. El cuadro se dibuja utilizando una API de navegador llamada {{domxref("Canvas API", "", "", "true")}}. No hay necesidad de preocuparse por cómo funciona esto, solo concentrarse en las matemáticas por ahora. El ancho y el alto del cuadro (en píxeles) están definidos por las variables x e y, a las que inicialmente se les asigna un valor de 50.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 520)}}

**[Abrir en una nueva ventana](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

En el cuadro de código editable anterior, hay dos líneas marcadas claramente con un comentario que nos gustaría que actualices para hacer que el cuadro crezca/se reduzca a ciertos tamaños, utilizando ciertos operadores y/o valores en cada caso. Intenta lo siguiente:

- Cambia la línea que calcula x, para que el recuadro tenga un ancho de 50px, y que el 50 se calcule utilizando los números 43 y 7, y un operador aritmético.
- Cambia la línea que calcula y, para que la casilla tenga 75px de altura y que el 75 se calcule utilizando los números 25 y 3, y un operador aritmético.
- Cambia la línea que calcula x, para que el recuadro tenga un ancho de 250px, y que el 250 se calcule utilizando dos números y el operador del resto (módulo).
- Cambia la línea que calcula y, para que el cuadro tenga 150px de altura, y que el 150 se calcule utilizando tres números, y los operadores de resta y división.
- Cambia la línea que calcula x, para que el cuadro tenga 200px de ancho y que el 200 se calcule utilizando el número 4 y un operador de asignación.
- Cambia la línea que calcula y, para que el cuadro tenga 200px de altura y que el 200 se calcule utilizando los números 50 y 3, el operador de multiplicación y el operador de asignación de suma.

No te preocupes si arruinas totalmente el código. Siempre puedes presionar el botón Restablecer para que las cosas vuelvan a funcionar. Después de haber respondido correctamente a todas las preguntas anteriores, siéntete libre de jugar con el código un poco más, o establece desafíos para tus amigos/compañeros de clase..

## Operadores de comparación

A veces querremos ejecutar pruebas de verdadero/falso, y luego actuaremos de acuerdo con el resultado de esa prueba. Para ello, utilizamos **operadores de comparación**.

| Operador | Nombre            | Propósito                                                                  | Ejemplo       |
| -------- | ----------------- | -------------------------------------------------------------------------- | ------------- |
| `===`    | Igual estricto    | Comprueba si los valores izquierdo y derecho son idénticos entre sí        | `5 === 2 + 4` |
| `!==`    | Igual no-estricto | Comprueba si los valores izquierdo y derecho **no** son idénticos entre sí | `5 !== 2 + 3` |
| `<`      | Menor que         | Comprueba si el valor izquierdo es menor que el derecho.                   | `10 < 6`      |
| `>`      | Mayor que         | Comprueba si el valor izquierdo es mayor que el derecho.                   | `10 > 20`     |
| <=       | Menor o igual a   | Comprueba si el valor izquierdo es menor o igual que el derecho.           | `3 <= 2`      |
| >=       | Mayor o igual a   | Comprueba si el valor izquierdo es mayor o igual que el derecho..          | `5 >= 4`      |

> **Nota:** Es posible que algunas personas utilicen == y != en sus pruebas de igualdad y no igualdad. Estos son operadores válidos en JavaScript, pero difieren de === /! ==: la prueba anterior indica si los valores son iguales. pero el tipo de datos puede ser diferente, mientras que las últimas versiones estrictas prueban si el valor y el tipo de datos son los mismos. Las versiones estrictas tienden a reducir el número de errores que no se detectan, por lo que te recomendamos que los utilices.

Si intentas ingresar algunos de estos valores en una consola, verás que todos devuelven valores verdaderos/falsos, esos booleanos que mencionamos en el artículo anterior. Son muy útiles ya que nos permiten tomar decisiones en nuestro código; se usan cada vez que queremos hacer una elección de algún tipo, por ejemplo.:

- Mostrar la etiqueta de texto correcta en un botón dependiendo de si una función está activada o desactivada.
- Mostrar un mensaje sobre un juego si ha terminado, o un mensaje de victoria si el juego ha sido ganado.
- Mostrando el saludo estacional correcto dependiendo de la temporada de vacaciones.
- Acercar o alejar un mapa según el nivel de zoom seleccionado.

Veremos cómo codificar dicha lógica cuando veamos declaraciones condicionales en un artículo futuro. Por ahora, veamos un ejemplo rápido:

```html
<button>Iniciar máquina</button>
<p>La máquina se detuvo.</p>
```

```js
var btn = document.querySelector("button");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Iniciar máquina") {
    btn.textContent = "Detener máquina";
    txt.textContent = "La máquina se inició!";
  } else {
    btn.textContent = "Iniciar máquina";
    txt.textContent = "La máquina se detuvo.";
  }
}
```

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[Abrir en una nueva ventana](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Puede ver el operador de igualdad utilizado justo dentro de la función `updateBtn().` En este caso, no estamos probando si dos expresiones matemáticas tienen el mismo valor (estamos comprobando si el contenido de texto de un botón contiene una cadena determinada), pero sigue siendo el mismo principio. Si el botón está actualmente diciendo "Iniciar máquina" cuando se presiona, cambiamos su etiqueta a "Detener máquina" y actualizamos la etiqueta según corresponda. Si el botón está actualmente diciendo "Detener máquina" cuando se presiona, volvemos a cambiar la pantalla.

> **Nota:** Un control de este tipo que intercambia entre dos estados generalmente se conoce como **conmutador**. Conmuta entre un estado y otro — Luces on, luces off, etc.

## Pon a prueba tus habilidades

Llegaste al final de este artículo, pero ¿puédes recordar la información más importante? Puedes encontrar algunas pruebas para verificar que has comprendido esta información antes de seguir avanzando — Ve [¡Pon a prueba tus habilidades!: Matemáticas](/es/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math).

## Resumen

En este artículo hemos cubierto la información fundamental que necesitas saber sobre los números en JavaScript, por ahora. Verás los números usados una y otra vez, a lo largo de tu aprendizaje de JavaScript, por lo que es una buena idea hacer esto ahora. Si eres una de esas personas que no disfruta de las matemáticas, puedes sentirte cómodo por el hecho de que este capítulo fue bastante breve.

En el siguiente artículo, exploraremos el texto y cómo JavaScript nos permite manipularlo.

> **Nota:** Si disfrutas de las matemáticas y quieres leer más sobre cómo se implementa en JavaScript, puedes encontrar muchos más detalles en la sección principal de JavaScript de MDN. Los mejores lugares para iniciar con artículos sobre [Numero y fechas](/es/docs/Web/JavaScript/Guide/Numbers_and_dates) y [Expresiones y operadores](/es/docs/Web/JavaScript/Guide/Expressions_and_Operators).

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
