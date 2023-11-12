---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
---

{{JSRef}}

Los objetos `Error` se lanzan cuando ocurren errores en tiempo de ejecución. También puedes utilizar el objeto `Error` como objeto base para excepciones definidas por el usuario. Ve más adelante los tipos de errores estándar integrados.

## Descripción

Los errores en tiempo de ejecución dan como resultado la creación y lanzamiento de nuevos objetos `Error`.

### Tipos `Error`

Además del constructor genérico `Error`, hay otros siete constructores de errores en el núcleo de JavaScript. Para conocer las excepciones de lado del cliente, consulta {{JSxRef("Guide/Control_de_flujo_y_manejo_de_errores", "Declaraciones para el manejo de excepciones", "#Sentencias_de_manejo_de_excepciones", 1)}}.

- {{JSxRef("EvalError")}}
  - : Crea una instancia que representa un error que ocurre con respecto a la función global {{JSxRef("eval", "eval()")}}.
- {{JSxRef("InternalError")}}
  - : Crea una instancia que representa un error que ocurre cuando se produce un error interno en el motor de JavaScript. Por ejemplo: "demasiada recursividad".
- {{JSxRef("RangeError")}}
  - : Crea una instancia que representa un error que ocurre cuando una variable numérica o parámetro está fuera de su rango válido.
- {{JSxRef("ReferenceError")}}
  - : Crea una instancia que representa un error que ocurre cuando se quita la referencia a una referencia no válida.
- {{JSxRef("SyntaxError")}}
  - : Crea una instancia que representa un error de sintaxis.
- {{JSxRef("TypeError")}}
  - : Crea una instancia que representa un error que ocurre cuando una variable o parámetro no es de un tipo válido.
- {{JSxRef("URIError")}}
  - : Crea una instancia que representa un error que ocurre cuando {{JSxRef("encodeURI", "encodeURI()")}} o {{JSxRef("decodeURI", "decodeURI()")}} pasan parámetros no válidos.

## Constructor

- {{JSxRef("Objetos_globales/Error/Error", "Error()")}}
  - : Crea un nuevo objeto `Error`.

## Métodos estáticos

- {{JSxRef("Error.captureStackTrace()")}}
  - : Una función **V8** no estándar que crea la propiedad {{JSxRef("Error.prototype.stack", "stack")}} en una instancia de `Error`.

## Propiedades de la instancia

- {{jsxref("Error.prototype.message")}}
  - : Mensaje de error.
- {{jsxref("Error.prototype.name")}}
  - : Nombre del error.
- {{jsxref("Error.prototype.description")}}
  - : Una propiedad no estándar de Microsoft para la descripción del error. Similar a {{jsxref("Error.prototype.message", "message")}}.
- {{jsxref("Error.prototype.number")}}
  - : Una propiedad no estándar de Microsoft para un número de error.
- {{jsxref("Error.prototype.fileName")}}
  - : Una propiedad no estándar de Mozilla para la ruta al archivo que generó este error.
- {{JSxRef("Error.prototype.lineNumber")}}
  - : Una propiedad no estándar de Mozilla para el número de línea en el archivo que generó este error.
- {{JSxRef("Error.prototype.columnNumber")}}
  - : Una propiedad no estándar de Mozilla para el número de columna en la línea que generó este error.
- {{JSxRef("Error.prototype.stack")}}
  - : Una propiedad no estándar de Mozilla para un seguimiento de la pila.

## Métodos de instancia

- {{jsxref("Error.prototype.toString()")}}
  - : Devuelve una cadena que representa el objeto especificado. Redefine el método {{JSxRef("Object.prototype.toString()")}}.

## Ejemplos

### Lanzar un error genérico

Normalmente, creas un objeto `Error` con la intención de generarlo utilizando la palabra clave {{JSxRef("Sentencias/throw", "throw")}}. Puedes manejar el error usando la construcción {{JSxRef("Sentencias/try...catch", "try...catch")}}:

```js
try {
  throw new Error("¡Ups!");
} catch (e) {
  console.error(e.name + ": " + e.message);
}
```

### Manejar de un error específico

Puede elegir manejar solo tipos de error específicos probando el tipo de error con la propiedad {{JSxRef("Object.prototype.constructor", "constructor")}} del error o, si estás escribiendo para motores JavaScript modernos, la palabra clave {{JSxRef("Operators/instanceof", "instanceof")}}:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.error(e.name + ": " + e.message);
  }
  // ... etc
}
```

### Tipos `Error` personalizados

Posiblemente desees definir tus propios tipos de error derivados de `Error` para poder lanzarlo con `throw new MyError()` y usar `instanceof MyError` para verificar el tipo de error en el controlador de excepciones. Esto da como resultado un código de manejo de errores más limpio y consistente.

Consulta ["¿Cuál es una buena manera de extender `Error` en JavaScript?"](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) en StackOverflow para una discusión en profundidad.

#### Clase `Error` personalizado en ES6

> **Advertencia:** Las versiones de Babel anteriores a la 7 pueden manejar métodos de clase `CustomError`, pero solo cuando se declaran con {{JSxRef("Objetos_globales/Object/defineProperty", "Object.defineProperty()")}}. De lo contrario, las versiones antiguas de Babel y otros transpiladores no manejarán correctamente el siguiente código sin [configuración adicional](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend).

> **Nota:** Algunos navegadores incluyen el constructor `CustomError` en el seguimiento de la pila cuando se utilizan clases de ES2015.

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pasa los argumentos restantes (incluidos los específicos del proveedor) al constructor padre
    super(...params);

    // Mantiene un seguimiento adecuado de la pila para el lugar donde se lanzó nuestro error (solo disponible en V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Información de depuración personalizada
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stacktrace
}
```

#### Objeto `Error` personalizado ES5

> **Advertencia:** **Todos** los navegadores incluyen el constructor `CustomError` en el seguimiento de la pila cuando se usa una declaración de prototipo.

```js
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = "CustomError";
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Sentencias/throw", "throw")}}
- {{JSxRef("Sentencias/try...catch", "try...catch")}}
