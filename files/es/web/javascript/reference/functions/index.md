---
title: Funciones
slug: Web/JavaScript/Reference/Functions
---

{{jsSidebar("Functions")}}

En términos generales, una función es un "subprograma" que puede ser _llamado_ por código externo (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, que conforman el llamado _cuerpo de la función_. Se pueden pasar valores a una función, y la función puede _devolver_ un valor.

En JavaScript, las funciones son objetos de primera clase, es decir, son objetos y se pueden manipular y transmitir al igual que cualquier otro objeto. Concretamente son objetos {{jsxref("Function")}}.

## General

Toda función en JavaScript es un objeto Function. Ver {{jsxref("Function")}} para obtener información sobre las propiedades y métodos de los objetos `Function`.

Las funciones no son lo mismo que los procedimientos. Una función siempre devuelve un valor, pero un procedimiento, puede o no puede devolver un valor.

Para devolver un valor especifico distinto del predeterminado, una función debe tener una sentencia {{jsxref("Sentencias/return", "return")}}, que especifique el valor a devolver. Una función sin una instrucción return devolverá el valor predeterminado. En el caso de un {{jsxref("Object.prototype.constructor", "constructor")}} llamado con la palabra clave {{jsxref("new")}}, el valor predeterminado es el valor de su parametro. Para el resto de funciones, el valor predeterminado es undefined.

Los parámetros en la llamada a una función son los argumentos de la función. Los argumentos se pasan a las funciones _por valor_. Si la función cambia el valor de un argumento, este cambio no se refleja globalmente ni en la llamada de la función. Sin embargo, las referencias a objetos también son valores, y son especiales: si la función cambia las propiedades del objeto referenciado, ese cambio es visible fuera de la función, tal y como se muestra en el siguiente ejemplo:

```js
/* Declarando la función 'myFunc' */
function myFunc(elobjeto) {
  elobjeto.marca = "Toyota";
}

/*
 * Declarando la variable 'mycar';
 * Se crea e inicializa el nuevo objeto;
 * para hacer referencia a él mediante 'mycar'
 */
var mycar = {
  marca: "Honda",
  modelo: "Accord",
  año: 1998,
};

/* Mostrando 'Honda' */
window.alert(mycar.marca);

/* Paso por referencia del objeto 'mycar' a la función 'myFunc'*/
myFunc(mycar);

/*
 * Muestra 'Toyota' como valor de la propiedad 'marca'
 * del objeto, que ha sido cambiado por la función.
 */
window.alert(mycar.marca);
```

La palabra clave [`this`](/es/docs/Web/JavaScript/Referencia/Operadores/this) no hace referencia a la función que está ejecutandose actualmente, por lo que debes referirte a los objetos Function por nombre, incluso dentro del cuerpo de la función. Como alternativa, puedes utilizar la propiedad [arguments.callee](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/callee) (que no se recomienda).

## Definiendo funciones

Hay varias formas de definir funciones:

### Declaración de una función (La instrucción `function`)

Hay una sintaxis especial para declarar funciones (ver la instrucción {{jsxref("Sentencias/function","function")}} para más detalles):

```js-nolint
function nombre([param[, param[, ...param]]]) {
   instrucciones
}
```

- `nombre`
  - : El nombre de la función.

<!---->

- `param`
  - : El nombre de un argumento que se pasará a la función. Una función puede tener hasta 255 argumentos.

<!---->

- `instrucciones`
  - : Las instruciones que forman el cuerpo de la función.

### Expresión de una función (El operador `function`)

Una expresión function es similar y tiene la misma sintaxis que una declaración de función (ver operador {{jsxref("Operadores/function", "function")}} para más detalles):

```js-nolint
function [nombre]([param[, param[, ...param]]]) {
   instrucciones
}
```

- `nombre`
  - : El nombre de la función, se puede omitir, en ese caso la función se conoce como función anónima.

<!---->

- `param`
  - : El nombre de los argumentos que se pasarán a la función. Una función puede tener hasta 255 argumentos.

<!---->

- `instrucciones`
  - : Las instrucciones que forman el cuerpo de la función.

### La expresión de función flecha (=>)

> **Nota:** Las expresiones de función Flecha son una tecnología experimental, parte de la proposición Harmony (EcmaScript 6) y no son ampliamente implementadas por los navegadores.

Una expresión de función flecha tiene una sintaxis más corta y su léxico se une a este valor (ver {{jsxref("Funciones/Arrow_functions", "arrow functions", "", 1)}} para más detalles):

```js-nolint
([param] [, param]) => { instrucciones }
param => expresión
```

- `param`
  - : El nombre de un argumento. Si no hay argumentos se tiene que indicar con `()`. Para un único argumento no son necesarios los parentesis. (como `foo => 1`)
- `instrucciones o expresión`
  - : Multiples instrucciones deben ser encerradas entre llaves. Una única expresión no necesita llaves. La expresión es, así mismo, el valor de retorno implícito de esa función.

### El constructor `Function`

Como todos los demás objetos, los objetos {{jsxref("Function")}} se pueden crear mediante el operador new:

```html
new Function (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : Ningún o varios argumentos son pasados para ser utilizados por la función como nombres de argumentos formales. Cada uno debe ser una cadena que se ajuste a las reglas de identificadores válidos en JavaScript, o a una lista de este tipo de cadenas separadas por comas; por ejemplo "x", "theValue", o "a,b".

<!---->

- `Cuerpo de la función`
  - : Una cadena conteniendo las instrucciones JavaScript que comprenden la definición de la función.

Llamar al contructor Function como una función, sin el operador new, tiene el mismo efecto que llamarlo como un constructor.

> **Nota:** Utilizar el constructor Function no se recomienda, ya que necesita el cuerpo de la función como una cadena, lo cual puede ocasionar que no se optimize correctamente por el motor JS, y puede también causar otros problemas.

## El objeto `arguments`

Puedes referirte a los argumentos de una función dentro de la misma, utilizando el objeto arguments. Ver {{jsxref("Functiones/argument", "Function")}}.

## Ámbito de ejecución y pila de funciones

some section about scope and functions calling other functions

### Repaso

Una función puede referirse y llamarse a sí misma. Hay tres maneras en la que una función puede referirse a sí misma.

1. El nombre de la función
2. {{jsxref("arguments.callee")}}
3. una función dentro del ambito de ejecución que refiere a la función

Por ejemplo, considere la siguiente definición de función:

```js
var foo = function bar() {
  // el cuerpo va aqui
};
```

Dentro del cuerpo de la función, todo lo siguientes son lo mismo:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Una función que se llama a sí misma es llamada una _función recursiva._ En algunas ocaciones, la recursión es análoga a un bucle. Ambos ejecutan el mismo código múltiples veces, y ambas requieren una condición (para evitar un bucle infinito, o en su lugar, recursión infinita en este caso). Por ejemplo, el siguiente bucle:

```js
var x = 0;
while (x < 10) {
  // "x < 10" es la condición
  // haz algo
  x++;
}
```

puede ser convertida en una función recursiva y una llamada a esa función:

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
    return;
  // haz algo
  loop(x + 1); // la llamada recursiva
}
loop(0);
```

Sin embargo, algunos algoritmos no pueden ser bucles iterativos simples. Por ejemplo, obtener todos los nodos de una estructura de arbol (e.g. el [DOM](/es/docs/DOM)) es realizado de manera más fácil usando recursión:

```js
function recorrerArbol(nodo) {
  if (nodo == null)
    //
    return;
  // haz algo con el nodo
  for (var i = 0; i < nodo.nodosHijos.length; i++) {
    recorrerArbol(nodo.nodosHijos[i]);
  }
}
```

En comparación con el bucle de la función `loop`, cada llamada recursiva hace muchas llamadas recursivas aquí.

Es posible convertir cualquier algoritmo recursivo en uno no recursivo, pero a menudo la lógica es mucho más compleja y hacerlo requiere el uso de una pila. De hecho, la recursión utiliza una pila: la pila de funciones.

El comportamiento similar a la pila se puede ver en el ejemplo siguiente:

```js
function foo(i) {
  if (i < 0) return;
  document.writeln("inicio:" + i);
  foo(i - 1);
  document.writeln("fin:" + i);
}
foo(3);
```

que produce:

```plain
inicio:3
inicio:2
inicio:1
inicio:0
fin:0
fin:1
fin:2
fin:3
```

## Funciones anidadas y cierres

- Puede anidar una función dentro de una función. La función anidada (inner) es privada a la función que la contiene (outer). También con la forma: aclosure.
  - : Un cierre es una expresión (normalmente una función) que puede tener variables libres junto con un entorno que enlaza esas variables (que "cierra" la expresión).
    Dado que una función anidada es un cierre, esto significa que una función anidada puede "heredar" los argumentos y las variables de su función contenedora. En otras palabras, la función interna contiene el ámbito de la función externa.[](http://jibbering.com/faq/faq_notes/closures.html)

Desde que la función anidada es un cierre (closure), esto significa que una función anidada puede "heredar" los argumentos y variables de su función contenedora. En otras palabras, la función interna contiene un scope (alcance) de la función externa.

Para resumir:

- La función interna se puede acceder sólo a partir de sentencias en la función externa.

<!---->

- La función interna forma un cierre: la función interna puede utilizar los argumentos y las variables de la función externa, mientras que la función externa no puede utilizar los argumentos y las variables de la función interna.

El ejemplo siguiente muestra funciones anidadas:

```js
function addCuadrado(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
a = addCuadrado(2, 3); // retorna 13
b = addCuadrado(3, 4); // retorna 25
c = addCuadrado(4, 5); // retorna 41
```

Dado que la función interna forma un cierre, puede llamar a la función externa y especificar argumentos para la función externa e interna

```js
function fuerade(x) {
  function dentro(y) {
    return x + y;
  }
  return dentro;
}
resultado = fuerade(3)(5); // retorna 8
```

### Consideraciones sobre la eficiencia

Observe cómo se conserva `x` cuando se devuelve dentro. Un cierre conserva los argumentos y las variables en todos los ámbitos que contiene. Puesto que cada llamada proporciona argumentos potencialmente diferentes, debe crearse un cierre para cada llamada a la función externa. En otras palabras, cada llamada a `fuerade` crea un cierre. Por esta razón, los cierres pueden usar una gran cantidad de memoria. La memoria se puede liberar sólo cuando el `dentro` devuelto ya no es accesible. En este caso, el cierre del `dentro` se almacena en `resultado`. Como el `resultado` está en el ámbito global, el cierre permanecerá hasta que se descargue el script (en un navegador, esto sucedería cuando la página que contiene el script esté cerrada).

Debido a esta ineficiencia, evite cierres siempre que sea posible, es decir, evite las funciones de anidamiento siempre que sea posible. Por ejemplo, considere el siguiente ejemplo:

```js
function assignOnclick(elemento) {
  element.onclick = function () {
    this.style.backgroundColor = "blue";
  };
}
```

Esto se puede volver a escribir para evitar el cierre. Sin embargo, la función interna anónima necesitaría ser nombrada y ya no sería privada para `assignOnclick`:

```js
function assignOnclick(elemento) {
  elemento.onclick = elemento_onclick;
}

function elemento_onclick() {
  this.style.backgroundColor = "blue";
}
```

#### Multiples funciones anidadas

Las funciones pueden ser anidadas contigua de la otra, es decir, una función (A) que contiene una función (B) que contiene una función (C), etc. Ambas funciones B y C forman cierres aquí, por lo que B puede acceder a A y C pueden acceder a B. Además, como C puede acceder a B, que puede acceder a A, C también puede acceder a A. Por lo tanto, los cierres pueden contener múltiples ámbitos; contienen recursivamente el alcance de las funciones que lo contienen. Esto es llamado encadenamiento de objetos(_scope chaining_). (Por qué se llama "_chaining_"("encadenamiento") se explicará más adelante.)

Considere el siguiente ejemplo:

```js
function A(x) {
  function B(y) {
    function C(z) {
      alert(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // alerts 6 (1 + 2 + 3)
```

En este ejemplo, `C` accede a las `B` que hayan en `y` y `A` en `x`. Esto se puede hacer porque:

1. `B` forma un cierre que incluye a `A`, es decir, `B` puede acceder a los argumentos y variables de `A`.
2. `C` forma un cierre que incluye a `B`.
3. Como el cierre de `B` incluye a `A`, el cierre de `C` incluye a `A`, `C` puede acceder a los argumentos y variables de la Banda `A`. En otras palabras, codifica los ámbitos de `B` y A en ese orden.

Lo contrario, sin embargo, no es cierto. `A` no puede acceder a `C`, porque `A` no puede acceder a ningún argumento o variable de `B`, que `C` es una variable de. Así, `C` permanece privado de sólo `B`.

### Conflictos de nombre

Cuando dos argumentos o variables en los ámbitos de un cierre tienen el mismo nombre, existe un conflicto de nombres("_name conflict_"). Más alcances internos tienen prioridad, por lo que el alcance más interno tiene la más alta precedencia, mientras que el alcance más externo toma el más bajo. Esta es la cadena de alcance. El primero en la cadena es el alcance más interno, y el último es el alcance más exterior. Considera lo siguiente:

```js
function fuerade() {
  var x = 10;
  function dentro(x) {
    return x;
  }
  return dentro;
}
resultado = fuerade()(20); // retorna 20 en lugar de 10
```

El conflicto de nombres ocurre en la sentencia `return x` y está entre el parámetro `x` de la función `dentro` y la variable `x` de la función `fuerade`. La cadena de alcance aquí es {`dentro`, `fuerade`, global object}. Por lo tanto, la `x` de `dentro` tiene precedentes sobre la `x` de `fuerade`, y 20 (`dentro` de `x`) se devuelve en lugar de 10 (`fuerade` de `x`).

## Constructor vs declaración vs expresión

Diferencias entre la función constructora `Function`, la de declaración y la de expresión.

Compare lo siguiente:

1. Una función definida con el constructor `Function` asignado a la variable `multiply`

   ```js
   var multiply = new Function("x", "y", "return x * y;");
   ```

2. Una declaración de una función denominada `multiply`

   ```js
   function multiply(x, y) {
     return x * y;
   }
   ```

3. Una expresión de función anónima asignada a la variable `multiply`

   ```js
   var multiply = function (x, y) {
     return x * y;
   };
   ```

4. Una declaración de una función denominada `func_name` asignada a la variable `multiply`

   ```js
   var multiply = function func_name(x, y) {
     return x * y;
   };
   ```

Todos hacen aproximadamente la misma cosa, con algunas diferencias sutiles:

- Existe una distinción entre el nombre de la función y la variable a la que se asigna la función:

  - El nombre de la función no se puede cambiar, mientras que la variable a la que se asigna la función puede ser reasignada.
  - El nombre de la función sólo se puede utilizar en el cuerpo de la función. Intentar utilizarlo fuera del cuerpo de la función da como resultado un error (o `undefined` si el nombre de la función se declaró previamente mediante una instrucción `var`). Por ejemplo:

    ```js
    var y = function x() {};
    alert(x); // arroja un error
    ```

    El nombre de la función también aparece cuando la función se serializa vía el método de la `Function` 'toString'.

    Por otro lado, la variable a la que se asigna la función está limitada sólo por su ámbito, que está garantizado para incluir el ámbito en el que se declara la función.

  - Como muestra el ejemplo 4, el nombre de la función puede ser diferente de la variable a la que se asigna la función. No tienen relación entre sí.

- Una declaración de función también crea una variable con el mismo nombre que el nombre de la función. Por lo tanto, a diferencia de las definidas por las expresiones de función, las funciones definidas por las declaraciones de función se puede acceder por su nombre en el ámbito que se definieron en:

  ```js
  function x() {}
  alert(x); // salida x serializado en un string
  ```

  El siguiente ejemplo muestra cómo los nombres de las funciones no están relacionados con las variables a las que están asignadas las funciones. Si una "variable de función" se asigna a otro valor, seguirá teniendo el mismo nombre de función:

  ```js
  function foo() {}
  alert(foo); // el string alterado contiene el nombre
  // de la función "foo"
  var bar = foo;
  alert(bar); // el string todavía contiene el nombre
  // de la función "foo"
  ```

- Una función definida por un `Function` no tiene un nombre de función. Sin embargo, en el [SpiderMonkey](/es/docs/Mozilla/Projetos/SpiderMonkey) en el motor de JavaScript, la forma serializada de la función muestra como si tuviera el nombre "anónimo"("anonymous"). Por ejemplo, `alert(new Function())` salida:

  ```js
  function anonymous() {}
  ```

  Dado que la función en realidad no tiene un nombre, `anonymous` no es una variable que se puede acceder dentro de la función. Por ejemplo, lo siguiente resultaría en un error:

  ```js
  var foo = new Function("alert(anonymous);");
  foo();
  ```

- A diferencia de las funciones definidas por expresiones de función o constructores `Function` se puede utilizar una función definida por una declaración de función antes de la propia declaración de la función. Por ejemplo:

  ```js
  foo(); // alerts FOO!
  function foo() {
    alert("FOO!");
  }
  ```

- Una función definida por una expresión de función hereda el ámbito actual. Es decir, la función forma un cierre. Por otro lado, una función definida por un constructor de `Function` no hereda ningún ámbito que no sea el ámbito global (que todas las funciones heredan).
- Las funciones definidas por expresiones de función y declaraciones de función son analizadas una sola vez, mientras que las definidas por el constructor de `Function` no lo son. Es decir, la cadena de cuerpo de función pasada al constructor de `Function` debe ser analizada cada vez que se evalúa. Aunque una expresión de función crea un cierre cada vez, el cuerpo de la función no es reparsed, por lo que las expresiones de función son aún más rápido que "`new Function(...)`". Por lo tanto, el constructor de la `Function` debe evitarse siempre que sea posible.

Una declaración de función es muy fácilmente (ya menudo involuntariamente) convertida en una expresión de función. Una declaración de función deja de ser una cuando:

- Se convierte en parte de una expresión
- Ya no es un "elemento fuente" de una función o el propio script. Un "elemento de origen" es una sentencia no anidada en el script o un cuerpo de función:

  ```js
  var x = 0; // elemento fuente
  if (x == 0) {
    // elemento fuente
    x = 10; // no es un elemento fuente
    function boo() {} // no es un elemento fuente
  }
  function foo() {
    // elemento fuente
    var y = 20; // elemento fuente
    function bar() {} // elemento fuente
    while (y == 10) {
      // elemento fuente
      function blah() {} // no es un elemento fuente
      y++; // no es un elemento fuente
    }
  }
  ```

Ejemplos:

- ```js
  // function declaración
  function foo() {}

  // expresión de una función
  (function bar() {});

  // expresión de una función
  x = function hello() {};
  ```

- ```js
  if (x) {
    // expresión de la función
    function world() {}
  }
  ```

- ```js
  // instrucción de la función
  function a() {
    // instrucción de la función
    function b() {}
    if (0) {
      // expresión de la función
      function c() {}
    }
  }
  ```

### Definición condicional de una función

Las funciones se pueden definir de forma condicional utilizando expresiones de función o el constructor `Function`.

En la siguiente secuencia de comandos, la función `zero` nunca se define y no se puede invocar, porque '`if (0)`' se evalúa como false:

```js
if (0)
  function zero() {
    document.writeln("Esto es zero.");
  }
```

Si se cambia el script para que la condición se convierta en '`if (1)`', se define la función `zero`.

> **Nota:** Aunque esto parece una declaración de función, ésta es en realidad una expresión de función ya que está anidada dentro de otra instrucción. Ver [las diferencias entre las funciones de declaración y de expresión](#constructor_versus_declaration_versus_expression).

> **Nota:** Algunos motores JavaScript, sin incluir [SpiderMonkey](/es/docs/Mozilla/Projetos/SpiderMonkey), tratan incorrectamente cualquier expresión de función con un nombre como una declaración de función. Esto llevaría a que se definiera `zero` incluso con el siempre-falso("_always-false_") condicional. Una manera más segura de definir funciones condicionalmente es definir la función anónimamente y asignarla a una variable:

```js
if (0)
  var zero = function () {
    document.writeln("Esto es zero.");
  };
```

## Funciones como manejadores de eventos

En JavaScript, los controladores de eventos [DOM](/es/DOM) son funciones (en oposición a los objetos que contienen un método `handleEvent` en otros enlaces de idioma DOM). Las funciones se pasan un objeto de [evento](/es/DOM/event) como el primer y único parámetro. Como cualquier otro parámetro, si el objeto de evento no necesita ser utilizado, puede omitirse en la lista de parámetros formales.

Los posibles objetivos de eventos en un documento [HTML](/es/HTML) incluyen: `window` (`Window` objects("objeto de ventana"), including frames("marcos")), `document` (`HTMLDocument` objects("objetos HTMLDocument")), y elementos (`Element` objects("objetos Elemento")). En el [HTML DOM](http://www.w3.org/TR/DOM-Level-2-HTML/), los destinos de evento tienen propiedades de controlador de eventos. Estas propiedades son nombres de eventos en minúsculas con prefijo "on", e.g. `onfocus`. Los eventos [DOM Level 2 Events](http://www.w3.org/TR/DOM-Level-2-Events/) proporcionan una forma alternativa y más sólida de agregar oyentes de eventos.

> **Nota:** Los eventos son parte del DOM, no de JavaScript. (JavaScript simplemente proporciona un enlace al DOM.)

El ejemplo siguiente asigna una función a un manejador de eventos de "foco"("focus") de ventana.

```js
window.onfocus = function () {
  document.body.style.backgroundColor = "white";
};
```

Si se asigna una función a una variable, puede asignar la variable a un controlador de eventos. El siguiente código asigna una función a la variable `setBGColor`.

```js
var setBGColor = new Function("document.body.style.backgroundColor = 'white';");
```

Puede utilizar esta variable para asignar una función a un controlador de eventos de varias maneras. Aquí hay dos formas:

1. Escritura con propiedades de evento DOM HTML

   ```js
   document.form1.colorButton.onclick = setBGColor;
   ```

2. Atributo de evento HTML

   ```html
   <input
     name="colorBoton"
     type="button"
     value="Cambia color de fondo"
     onclick="setBGColor();" />
   ```

   Un manejador de eventos establecido de esta manera es en realidad una función, denominada después del atributo, envuelta alrededor del código especificado. Esta es la razón por la que los paréntesis en "`setBGColor()`" son necesarios aquí (en lugar de sólo "`setBGColor`").

Es equivalente a:

```js
document.form1.colorButton.onclick = function onclick(event) {
  setBGColor();
};
```

Observe cómo se pasa el objeto de evento a esta función anónima como `event` de parámetro. Esto permite que el código especificado utilice el objeto Evento("Event object)":

```html
<input ... onclick="alert(event.target.tagName);" />
```

Al igual que cualquier otra propiedad que se refiere a una función, el controlador de eventos puede actuar como un método, y `this` se refiere al elemento que contiene el controlador de eventos. En el ejemplo siguiente, se llama a la función referida por `onfocus` con `this` igual a `window`.

```js
window.onfocus();
```

Un error común de principiante de JavaScript es el añadir paréntesis y / o parámetros al final de la variable, es decir, llamar al manejador de eventos cuando lo asigna. La adición de estos paréntesis asignará el _valor devuelto al llamar al manejador de eventos_, que a menudo es `undefined` (si la función no devuelve nada), en lugar del controlador de eventos en sí:

```js
document.form1.button1.onclick = setBGColor();
```

Para pasar parámetros a un manejador de eventos, el manejador debe ser envuelto en otra función de la siguiente manera:

```js
document.form1.button1.onclick = function () {
  setBGColor("Algun valor");
};
```

### Compatibilidad con versiones anteriores

#### JavaScript 1.1 y anteriores

No puede anidar una sentencia de función en otra instrucción o en sí misma.

### Variables locales dentro de las funciones

[arguments](/es/Referencia_de_JavaScript_1.5/Funciones/arguments): Objeto similar a una matriz que contiene los argumentos pasados a la función en ejecución.

[arguments.callee](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/callee): Especifica la función en ejecución.

[arguments.caller](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/caller): Especifica la función que invocó la función en ejecución.

[arguments.length](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/length): Especifica el número de argumentos pasados a la función.

### Ejemplos

#### 1) Devolver un número con formato

La siguiente función devuelve una cadena que contiene la representación formateada de un número rellenado con ceros a la izquierda.

```js
// Esta función devuelve una cadena rellenada con ceros a la izquierda

function padZeros(num, totalLen) {
  let numStr = num.toString(); // Inicializa un valor de retorno como cadena
  let numZeros = totalLen - numStr.length; // Calcula el no. de ceros
  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}
```

Las siguientes sentencias llaman a la función padZeros.

```js
var resultado;
resultado = padZeros(42, 4); // retorna "0042"
resultado = padZeros(42, 2); // retorna "42"
resultado = padZeros(5, 4); // retorna "0005"
```

#### 2) Determinar si existe una función

Puede determinar si existe una función utilizando el operador `typeof`. En el ejemplo siguiente, se realiza una prueba para determinar si el objeto `window` tiene una propiedad llamada `noFunc` que es una función. Si es así, se utiliza; de lo contrario, se tomarán otras medidas.

```js
if ("function" == typeof window.noFunc) {
  // utiliza noFunc()
} else {
  // hacer algo mas
}
```

> **Nota:** Tenga en cuenta que en la prueba `if`, e utiliza una referencia a `noFunc` aquí no hay paréntesis "()" después del nombre de la función para que la función real no se llame.

### Ver también

[Function](/es/Referencia_de_JavaScript_1.5/Objetos_globales/Function), [sentencia function](/es/Referencia_de_JavaScript_1.5/Sentencias/function), [operador function](/es/Referencia_de_JavaScript_1.5/Operadores/Operadores_globales/function)
