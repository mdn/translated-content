---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Error
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Error
original_slug: Web/JavaScript/Referencia/Objetos_globales/Error
---
<div>{{JSRef}}</div>

<p>Los objetos <code>Error</code> se lanzan cuando ocurren errores en tiempo de ejecución. También puedes utilizar el objeto <code>Error</code> como objeto base para excepciones definidas por el usuario. Ve más adelante los tipos de errores estándar integrados.</p>

<h2 id="Descripción">Descripción</h2>

<p>Los errores en tiempo de ejecución dan como resultado la creación y lanzamiento de nuevos objetos <code>Error</code>.</p>

<h3 id="Tipos_Error">Tipos <code>Error</code></h3>

<p>Además del constructor genérico <code>Error</code>, hay otros siete constructores de errores en el núcleo de JavaScript. Para conocer las excepciones de lado del cliente, consulta {{JSxRef("../Guide/Control_de_flujo_y_manejo_de_errores", "Declaraciones para el manejo de excepciones", "#Sentencias_de_manejo_de_excepciones", 1)}}.</p>

<dl>
 <dt>{{JSxRef("EvalError")}}</dt>
 <dd>Crea una instancia que representa un error que ocurre con respecto a la función global {{JSxRef("eval", "eval()")}}.</dd>
 <dt>{{JSxRef("InternalError")}} </dt>
 <dd>Crea una instancia que representa un error que ocurre cuando se produce un error interno en el motor de JavaScript. Por ejemplo: "demasiada recursividad".</dd>
 <dt>{{JSxRef("RangeError")}}</dt>
 <dd>Crea una instancia que representa un error que ocurre cuando una variable numérica o parámetro está fuera de su rango válido.</dd>
 <dt>{{JSxRef("ReferenceError")}}</dt>
 <dd>Crea una instancia que representa un error que ocurre cuando se quita la referencia a una referencia no válida.</dd>
 <dt>{{JSxRef("SyntaxError")}}</dt>
 <dd>Crea una instancia que representa un error de sintaxis.</dd>
 <dt>{{JSxRef("TypeError")}}</dt>
 <dd>Crea una instancia que representa un error que ocurre cuando una variable o parámetro no es de un tipo válido.</dd>
 <dt>{{JSxRef("URIError")}}</dt>
 <dd>Crea una instancia que representa un error que ocurre cuando {{JSxRef("encodeURI", "encodeURI()")}} o {{JSxRef("decodeURI", "decodeURI()")}} pasan parámetros no válidos.</dd>
</dl>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{JSxRef("Objetos_globales/Error/Error", "Error()")}}</dt>
 <dd>Crea un nuevo objeto <code>Error</code>.</dd>
</dl>

<h2 id="Métodos_estáticos">Métodos estáticos</h2>

<dl>
 <dt>{{JSxRef("Error.captureStackTrace()")}}</dt>
 <dd>Una función <strong>V8</strong> no estándar que crea la propiedad {{JSxRef("Error.prototype.stack", "stack")}} en una instancia de <code>Error</code>.</dd>
</dl>

<h2 id="Propiedades_de_la_instancia">Propiedades de la instancia</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message")}}</dt>
 <dd>Mensaje de error.</dd>
 <dt>{{jsxref("Error.prototype.name")}}</dt>
 <dd>Nombre del error.</dd>
 <dt>{{jsxref("Error.prototype.description")}}</dt>
 <dd>Una propiedad no estándar de Microsoft para la descripción del error. Similar a {{jsxref("Error.prototype.message", "message")}}.</dd>
 <dt>{{jsxref("Error.prototype.number")}}</dt>
 <dd>Una propiedad no estándar de Microsoft para un número de error.</dd>
 <dt>{{jsxref("Error.prototype.fileName")}}</dt>
 <dd>Una propiedad no estándar de Mozilla para la ruta al archivo que generó este error.</dd>
 <dt>{{JSxRef("Error.prototype.lineNumber")}}</dt>
 <dd>Una propiedad no estándar de Mozilla para el número de línea en el archivo que generó este error.</dd>
 <dt>{{JSxRef("Error.prototype.columnNumber")}}</dt>
 <dd>Una propiedad no estándar de Mozilla para el número de columna en la línea que generó este error.</dd>
 <dt>{{JSxRef("Error.prototype.stack")}}</dt>
 <dd>Una propiedad no estándar de Mozilla para un seguimiento de la pila.</dd>
</dl>

<h2 id="Métodos_de_instancia">Métodos de instancia</h2>

<dl>
 <dt>{{jsxref("Error.prototype.toString()")}}</dt>
 <dd>Devuelve una cadena que representa el objeto especificado. Redefine el método {{JSxRef("Object.prototype.toString()")}}.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Lanzar_un_error_genérico">Lanzar un error genérico</h3>

<p>Normalmente, creas un objeto <code>Error</code> con la intención de generarlo utilizando la palabra clave {{JSxRef("Sentencias/throw", "throw")}}. Puedes manejar el error usando la construcción {{JSxRef("Sentencias/try...catch", "try...catch")}}:</p>

<pre class="brush: js; notranslate">try {
  throw new Error('¡Ups!')
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
</pre>

<h3 id="Manejar_de_un_error_específico">Manejar de un error específico</h3>

<p>Puede elegir manejar solo tipos de error específicos probando el tipo de error con la propiedad {{JSxRef("Object.prototype.constructor", "constructor")}} del error o, si estás escribiendo para motores JavaScript modernos, la palabra clave {{JSxRef("Operators/instanceof", "instanceof")}}:</p>

<pre class="brush: js; notranslate">try {
  foo.bar()
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
  }
  // ... etc
}
</pre>

<h3 id="Tipos_Error_personalizados">Tipos <code>Error</code> personalizados</h3>

<p>Posiblemente desees definir tus propios tipos de error derivados de <code>Error</code> para poder lanzarlo con <code>throw new MyError()</code> y usar <code>instanceof MyError</code> para verificar el tipo de error en el controlador de excepciones.  Esto da como resultado un código de manejo de errores más limpio y consistente. </p>

<p>Consulta <a href="http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript">"¿Cuál es una buena manera de extender <code>Error</code> en JavaScript?"</a> en StackOverflow para una discusión en profundidad.</p>

<h4 id="Clase_Error_personalizado_en_ES6">Clase <code>Error</code> personalizado en ES6</h4>

<div class="blockIndicator warning">
<p>Las versiones de Babel anteriores a la 7 pueden manejar métodos de clase <code>CustomError</code>, pero solo cuando se declaran con {{JSxRef("Objetos_globales/Object/defineProperty", "Object.defineProperty()")}}. De lo contrario, las versiones antiguas de Babel y otros transpiladores no manejarán correctamente el siguiente código sin <a href="https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend">configuración adicional</a>.</p>
</div>

<div class="blockIndicator note">
<p>Algunos navegadores incluyen el constructor <code>CustomError</code> en el seguimiento de la pila cuando se utilizan clases de ES2015.</p>
</div>

<pre class="brush: js notranslate">class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pasa los argumentos restantes (incluidos los específicos del proveedor) al constructor padre
    super(...params)

    // Mantiene un seguimiento adecuado de la pila para el lugar donde se lanzó nuestro error (solo disponible en V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError'
    // Información de depuración personalizada
    this.foo = foo
    this.date = new Date()
  }
}

try {
  throw new CustomError('baz', 'bazMessage')
} catch(e) {
  console.error(e.name)    // CustomError
  console.error(e.foo)     // baz
  console.error(e.message) // bazMessage
  console.error(e.stack)   // stacktrace
}</pre>

<h4 id="Objeto_Error_personalizado_ES5">Objeto <code>Error</code> personalizado ES5</h4>

<div class="warning">
<p><strong>Todos</strong> los navegadores incluyen el constructor <code>CustomError</code> en el seguimiento de la pila cuando se usa una declaración de prototipo.</p>
</div>

<pre class="brush: js notranslate">function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = 'CustomError';
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
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
}</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-error-objects', 'Error')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>

<div>


<p>{{Compat("javascript.builtins.Error")}}</p>
</div>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{JSxRef("Sentencias/throw", "throw")}}</li>
 <li>{{JSxRef("Sentencias/try...catch", "try...catch")}}</li>
</ul>
