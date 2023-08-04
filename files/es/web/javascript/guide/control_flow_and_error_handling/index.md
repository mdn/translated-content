---
title: Control de flujo y manejo de errores
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript admite un compacto conjunto de declaraciones, específicamente declaraciones de control de flujo, que puedes utilizar para incorporar una gran cantidad de interactividad en tu aplicación. Este capítulo proporciona una descripción de estas declaraciones.

La {{JSxRef("Sentencias", "referencia de JavaScript")}} contiene detalles exhaustivos sobre las declaraciones de este capítulo. El carácter de punto y coma (`;`) se utiliza para separar declaraciones en código JavaScript.

Todas las expresiones e instrucciones de JavaScript también son una declaración. Consulta {{JSxRef("Guide/Expressions_and_Operators", "Expresiones y operadores")}} para obtener información completa sobre las expresiones.

## Declaración de bloque

La declaración más básica es una _declaración de bloque_, que se utiliza para agrupar instrucciones. El bloque está delimitado por un par de llaves:

```
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```

### Ejemplo

Las declaraciones de bloque se utilizan comúnmente con declaraciones de control de flujo (`if`, `for`, `while`).

```js
while (x < 10) {
  x++;
}
```

Aquí, `{ x++; }` es la declaración de bloque.

> **Nota:** JavaScript anterior a ECMAScript2015 (6a edición) **no** tiene ámbito de bloque. En JavaScript más antiguo, las variables introducidas dentro de un bloque tienen como ámbito la función o script que las contiene, y los efectos de establecerlas persisten más allá del bloque en sí mismo. En otras palabras, las _declaraciones de bloque no definen un ámbito_.
>
> Los bloques "independientes" en JavaScript pueden producir resultados completamente diferentes de los que producirían en C o Java. Por ejemplo:
>
> ```js
> js var x = 1; {
>   var x = 2;
> }
> console.log(x); // muestra 2
> ```
>
> Esto muestra `2` porque la instrucción `var x` dentro del bloque está en el mismo ámbito que la instrucción `var x` anterior del bloque. (En C o Java, el código equivalente habría generado `1`).
>
> **A partir de ECMAScript2015**, las declaraciones de variables `let` y `const` tienen un ámbito de bloque. Consulta las páginas de referencia de {{JSxRef("Sentencias/let", "let")}} y {{JSxRef("Sentencias/const", "const")}} para obtener más información.

## Expresiones condicionales

Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera. JavaScript admite dos expresiones condicionales: `if...else` y `switch`.

### Expresión `if...else`

Utiliza la expresión `if` para ejecutar una instrucción si una condición lógica es `true`. Utiliza la cláusula opcional `else` para ejecutar una instrucción si la condición es `false`.

Una declaración `if` se ve así:

```
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

Aquí, la `condition` puede ser cualquier expresión que se evalúe como `true` o `false`. (Consulta {{JSxRef("Objetos_globales/Boolean", "Boolean", "#Description")}} para obtener una explicación de lo que se evalúa como `true` y `false`).

Si `condition` se evalúa como `true`, se ejecuta `statement_1`. De lo contrario, se ejecuta `statement_2`. `statement_1` y `statement_2` pueden ser cualquier declaración, incluidas otras declaraciones `if` anidadas.

También puedes componer las declaraciones usando `else if` para que se prueben varias condiciones en secuencia, de la siguiente manera:

```
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como `true`. Para ejecutar múltiples declaraciones, agrúpalas dentro de una declaración de bloque (`{ … }`).

#### Mejores prácticas

En general, es una buena práctica usar siempre declaraciones de bloque, _especialmente_ al anidar declaraciones `if`:

```
if (condition) {
  statement_1_runs_if_condition_is_true;
  statement_2_runs_if_condition_is_true;
} else {
  statement_3_runs_if_condition_is_false;
  statement_4_runs_if_condition_is_false;
}
```

No es aconsejable utilizar asignaciones simples en una expresión condicional, porque la asignación se puede confundir con la igualdad al mirar el código.

Por ejemplo, _no_ escribas un código como este:

```js example-bad
// Propenso a ser mal interpretado como "x == y"
if ((x = y)) {
  /* expresiones aquí */
}
```

Si necesitas usar una tarea en una expresión condicional, una práctica común es poner paréntesis adicionales alrededor de la asignación, así:

```js example-good
if ((x = y)) {
  /* expresiones aquí */
}
```

#### Valores falsos

Los siguientes valores se evalúan como `false` (también conocidos como valores {{Glossary("Falsy")}}:

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- la cadena vacía (`""`)

Todos los demás valores, incluidos todos los objetos, se evalúan como `true` cuando se pasan a una declaración condicional.

> **Nota:** ¡No confundas los valores booleanos primitivos `true` y `false` con los valores `true` y `false` del objeto {{JSxRef("Boolean")}}!.Por ejemplo:```js
> var b = new Boolean(false);
> if (b) // esta condición se evalúa como verdadera
> if (b == true) // esta condición se evalúa como false
>
> ```
>
> ```

#### Ejemplo

En el siguiente ejemplo, la función `checkData` devuelve `true` si el número de caracteres en un objeto `Text` es tres. De lo contrario, muestra una alerta y devuelve `false`.

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "Introduce exactamente tres caracteres. " +
        `${document.form1.threeChar.value} no es válido.`,
    );
    return false;
  }
}
```

### Declaración `switch`

Una instrucción `switch` permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta `case`. Si la encuentra, el programa ejecuta la declaración asociada.

Una instrucción `switch` se ve así:

```
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
```

JavaScript evalúa la instrucción `switch` anterior de la siguiente manera:

- El programa primero busca una cláusula `case` con una etiqueta que coincida con el valor de expresión y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.
- Si no se encuentra una etiqueta coincidente, el programa busca la cláusula opcional `default`:

  - Si se encuentra una cláusula `default`, el programa transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.
  - Si no se encuentra una cláusula `default`, el programa reanuda la ejecución en la declaración que sigue al final de `switch`.
  - (Por convención, la cláusula `default` está escrita como la última cláusula, pero no es necesario que sea así).

#### Declaraciones `break`

La declaración opcional `break` asociada con cada cláusula `case` asegura que el programa salga de `switch` una vez que se ejecuta la instrucción coincidente, y luego continúa la ejecución en la declaración que sigue a `switch`. Si se omite `break`, el programa continúa la ejecución dentro de la instrucción `switch` (y evaluará el siguiente `case`, y así sucesivamente).

##### Ejemplo

En el siguiente ejemplo, si `fruittype` se evalúa como '`Bananas`', el programa hace coincidir el valor con el caso '`Bananas`' y ejecuta la declaración asociada. Cuando se encuentra `break`, el programa sale del `switch` y continúa la ejecución de la instrucción que sigue a `switch`. Si se omitiera `break`, también se ejecutará la instrucción para `case 'Cherries'`.

```js
switch (fruittype) {
  case "Oranges":
    console.log("Las naranjas cuestan $0.59 la libra.");
    break;
  case "Apples":
    console.log("Las manzanas cuestan $0.32 la libra.");
    break;
  case "Bananas":
    console.log("Los plátanos cuestan $0.48 la libra.");
    break;
  case "Cherries":
    console.log("Las cerezas cuestan $3.00 la libra.");
    break;
  case "Mangoes":
    console.log("Los mangos cuestan $0.56 la libra.");
    break;
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $2.79 la libra.");
    break;
  default:
    console.log(`Lo sentimos, no tenemos ${fruittype}.`);
}
console.log("¿Hay algo más que quieras?");
```

## Expresiones de manejo de excepciones

Puedes lanzar excepciones usando la instrucción `throw` y manejarlas usando las declaraciones `try...catch`.

- [Expresión throw](#expresion_throw)
- [Declaración try...catch](#declaracion_try...catch)

### Tipos de excepciones

Casi cualquier objeto se puede lanzar en JavaScript. Sin embargo, no todos los objetos lanzados son iguales. Si bien es común lanzar números o cadenas como errores, con frecuencia es más efectivo usar uno de los tipos de excepción creados específicamente para este propósito:

- {{JSxRef("Objetos_globales/Error", "excepciones ECMAScript", "#Tipos_Error")}}
- La interfaz [DOMException](/es/docs/Web/API/DOMException) representa un evento anormal (llamado excepción) que ocurre como resultado de llamar a un método o acceder a una propiedad de una API web y la interfaz [DOMError](/es/docs/Web/API/DOMError) describe un objeto de error que contiene un nombre de error.

### Expresión `throw`

Utiliza la expresión `throw` para lanzar una excepción. Una expresión `throw` especifica el valor que se lanzará:

```
throw expression;
```

Puedes lanzar cualquier expresión, no solo expresiones de un tipo específico. El siguiente código arroja varias excepciones de distintos tipos:

```js
throw "Error2"; // tipo String
throw 42; // tipo Number
throw true; // tipo Boolean
throw {
  toString: function () {
    return "¡Soy un objeto!";
  },
};
```

> **Nota:** Puedes especificar un objeto cuando lanzas una excepción. A continuación, puedes hacer referencia a las propiedades del objeto en el bloque `catch`.

```js
// Crea un objeto tipo de UserException
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// Hacer que la excepción se convierta en una bonita cadena cuando se usa como cadena
// (por ejemplo, por la consola de errores)
UserException.prototype.toString = function () {
  return `${this.name}: "${this.message}"`;
};

// Crea una instancia del tipo de objeto y tírala
throw new UserException("Valor muy alto");
```

### Declaración `try...catch`

La declaración `try...catch` marca un bloque de expresiones para probar y especifica una o más respuestas en caso de que se produzca una excepción. Si se lanza una excepción, la declaración `try...catch` la detecta.

La declaración `try...catch` consta de un bloque `try`, que contiene una o más declaraciones, y un bloque `catch`, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque `try`.

En otras palabras, deseas que el bloque `try` tenga éxito, pero si no es así, deseas que el control pase al bloque `catch`. Si alguna instrucción dentro del bloque `try` (o en una función llamada desde dentro del bloque `try`) arroja una excepción, el control _inmediatamente_ cambia al bloque `catch`. Si no se lanza ninguna excepción en el bloque `try`, se omite el bloque `catch`. El bloque `finalmente` se ejecuta después de que se ejecutan los bloques `try` y `catch`, pero antes de las declaraciones que siguen a la declaración `try...catch`.

El siguiente ejemplo usa una instrucción `try...catch`. El ejemplo llama a una función que recupera el nombre de un mes de un arreglo en función del valor pasado a la función. Si el valor no corresponde a un número de mes (`1`-`12`), se lanza una excepción con el valor "`InvalidMonthNo`" y las declaraciones en el bloque `catch` establezca la variable `monthName` en '`unknown`'.

```js
function getMonthName(mo) {
  mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
  let months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; // aquí se usa la palabra clave throw
  }
}

try {
  // declaraciones para try
  monthName = getMonthName(myMonth); // la función podría lanzar una excepción
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
}
```

#### El bloque `catch`

Puedes usar un bloque `catch` para manejar todas las excepciones que se puedan generar en el bloque `try`.

```
catch (catchID) {
  instrucciones
}
```

El bloque `catch` especifica un identificador (`catchID` en la sintaxis anterior) que contiene el valor especificado por la expresión `throw`. Puedes usar este identificador para obtener información sobre la excepción que se lanzó.

JavaScript crea este identificador cuando se ingresa al bloque `catch`. El identificador dura solo la duración del bloque `catch`. Una vez que el bloque `catch` termina de ejecutarse, el identificador ya no existe.

Por ejemplo, el siguiente código lanza una excepción. Cuando ocurre la excepción, el control se transfiere al bloque `catch`.

```js
try {
  throw "myException"; // genera una excepción
} catch (err) {
  // declaraciones para manejar cualquier excepción
  logMyErrors(err); // pasa el objeto exception al controlador de errores
}
```

> **Nota:** Cuando se registran errores en la consola dentro de un bloque `catch`, se usa `console.error()` en lugar de `console.log()` aconsejado para la depuración. Formatea el mensaje como un error y lo agrega a la lista de mensajes de error generados por la página.

#### El bloque `finally`

El bloque `finally` contiene instrucciones que se ejecutarán _después_ que se ejecuten los bloques `try` y `catch`. Además, el bloque `finally` ejecuta _antes_ el código que sigue a la declaración `try...catch...finally`.

También es importante notar que el bloque `finally` se ejecutará _independientemente de que_ se produzca una excepción. Sin embargo, si se lanza una excepción, las declaraciones en el bloque `finally` se ejecutan incluso si ningún bloque `catch` maneje la excepción que se lanzó.

Puedes usar el bloque `finally` para hacer que tu script falle correctamente cuando ocurra una excepción. Por ejemplo, es posible que debas liberar un recurso que tu script haya inmovilizado.

El siguiente ejemplo abre un archivo y luego ejecuta declaraciones que usan el archivo. (JavaScript de lado del servidor te permite acceder a los archivos). Si se lanza una excepción mientras el archivo está abierto, el bloque `finally` cierra el archivo antes de que falle el script. Usar `finally` aquí _asegura_ que el archivo nunca se deje abierto, incluso si ocurre un error.

```js
openMyFile();
try {
  writeMyFile(theData); // Esto puede arrojar un error
} catch (e) {
  handleError(e); // Si ocurrió un error, manéjalo
} finally {
  closeMyFile(); // Siempre cierra el recurso
}
```

Si el bloque `finally` devuelve un valor, este valor se convierte en el valor de retorno de toda la producción de `try…catch…finally`, independientemente de las declaraciones `return` en los bloques `try` y `catch`:

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; // esta declaración de retorno está suspendida
    // hasta que el bloque finally se haya completado
    console.log(2); // no alcanzable
  } finally {
    console.log(3);
    return false; // sobrescribe el "return" anterior
    console.log(4); // no alcanzable
  }
  // "return false" se ejecuta ahora
  console.log(5); // inalcanzable
}
console.log(f()); // 0, 1, 3, false
```

La sobrescritura de los valores devueltos por el bloque `finally` también se aplica a las excepciones lanzadas o relanzadas dentro del bloque `catch`:

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('captura "falso" interno');
    throw e; // esta instrucción throw se suspende hasta
    // que el bloque finally se haya completado
  } finally {
    return false; // sobrescribe el "throw" anterior
  }
  // "return false" se ejecuta ahora
}

try {
  console.log(f());
} catch (e) {
  // ¡esto nunca se alcanza!
  // mientras se ejecuta f(), el bloque `finally` devuelve false,
  // que sobrescribe el `throw` dentro del `catch` anterior
  console.log('"falso" externo capturado');
}

// Produce
// "falso" interno capturado
// false
```

#### Declaraciones `try...catch` anidadas

Puedes anidar una o más declaraciones `try...catch`.

Si un bloque `try` interno _no_ tiene un bloque `catch` correspondiente:

1. _debe_ contener un bloque `finally`, y
2. el bloque `catch` adjunto de la declaración `try...catch` se comprueba para una coincidencia.

Para obtener más información, consulta {{JSxRef("Sentencias/try...catch", "bloques try anidados", "#Nested_try-blocks")}} en la una página de referencia {{JSxRef("Sentencias/try...catch", "try...catch")}}.

### Utilizar objetos `Error`

Dependiendo del tipo de error, es posible que puedas utilizar las propiedades `name` y `message` para obtener un mensaje más refinado.

La propiedad `name` proporciona la clase general de `Error` (tal como `DOMException` o `Error`), mientras que `message` generalmente proporciona un mensaje más conciso que el que se obtendría al convertir el objeto error en una cadena.

Si estás lanzando tus propias excepciones, para aprovechar estas propiedades (por ejemplo, si tu bloque `catch` no discrimina entre tus propias excepciones y las del sistema), puedes usar el constructor `Error`.

Por ejemplo:

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('El mensaje'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // AHORA, en realidad usamos `console.error()`
  console.error(e.name);    // registra 'Error'
  console.error(e.message); // registra 'The message' o un mensaje de error de JavaScript
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
