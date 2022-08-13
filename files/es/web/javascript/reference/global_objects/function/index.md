---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Clase
  - Class
  - Declaración
  - Expresión
  - Function
  - JavaScript
  - función
translation_of: Web/JavaScript/Reference/Global_Objects/Function
original_slug: Web/JavaScript/Referencia/Objetos_globales/Function
---
<div>{{JSRef("Objetos_globales", "Function")}}</div>

<p>Cada función de JavaScript en realidad es un objeto <code>Function</code>. Esto se puede ver con el código <code>(function() {}).constructor === Function</code>, que devuelve <code>true</code>.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Function/Function", "Function()", "", 1)}}</dt>
 <dd>Crea un nuevo objeto <code>Function</code>. Llamar al constructor directamente puede crear funciones dinámicamente, pero tiene problemas de seguridad y de rendimiento similares (pero mucho menos importantes) para {{jsxref("eval")}}. Sin embargo, a diferencia de <code>eval</code>, el constructor <code>Function</code> crea funciones que solo se ejecutan en el ámbito global.</dd>
</dl>

<h2 id="Propiedades_de_la_instancia">Propiedades de la instancia</h2>

<dl>
 <dt>{{jsxref("Function.arguments")}}</dt>
 <dd>Un arreglo que corresponde a los argumentos pasados a una función.<br>
 Esto está obsoleto como propiedad de {{jsxref("Function")}}. En su lugar, utiliza el objeto {{jsxref("Functions/arguments", "arguments", "", 1)}} (disponible dentro de la función).</dd>
 <dt>{{jsxref("Function.caller")}}</dt>
 <dd>Especifica la función que invocó a la función que se está ejecutando actualmente.<br>
 Esta propiedad está obsoleta, y solo es funcional para algunas funciones no estrictas.</dd>
 <dt>{{jsxref("Function.displayName")}}</dt>
 <dd>El nombre a mostrar de la función.</dd>
 <dt>{{jsxref("Function.length")}}</dt>
 <dd>Especifica el número de argumentos que espera la función.</dd>
 <dt>{{jsxref("Function.name")}}</dt>
 <dd>El nombre de la función.</dd>
</dl>

<h2 id="Métodos_de_instancia">Métodos de instancia</h2>

<dl>
 <dt>{{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}</dt>
 <dd>Llama a una función y establece su <code>this</code> en el <code><var>thisArg</var></code> proporcionado. Los argumentos se pueden pasar como un objeto {{jsxref("Array")}}.</dd>
 <dt>{{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}</dt>
 <dd>Crea una nueva función que, cuando se llama, tiene su <code>this</code> configurado en el <code><var>thisArg</var></code>. Opcionalmente, una determinada secuencia de argumentos se antepondrá a los argumentos siempre que se llame a la función recién invocada.</dd>
 <dt>{{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}</dt>
 <dd>Llama a una función y establece su <code>this</code> en el valor proporcionado. Los argumentos se pueden pasar tal cual.</dd>
 <dt>{{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}</dt>
 <dd>Devuelve una cadena que representa el código fuente de la función.<br>
 Redefine el método {{jsxref("Object.prototype.toString()")}}.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Diferencia_entre_el_constructor_Function_y_la_declaración_function">Diferencia entre el constructor Function y la declaración function</h3>

<p>Las funciones creadas con el constructor <code>Function</code> no crean cierres para sus contextos de creación; siempre se crean en el ámbito global. Al ejecutarlos, solo podrán acceder a sus propias variables locales y globales, no a las del ámbito en el que se creó el constructor <code>Function</code>. Esto es diferente de usar {{jsxref("eval")}} con código para una expresión de función.</p>

<pre class="brush: js notranslate">var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // esta |x| se refiere a la |x| global
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // esta |x| se refiere a la |x| local
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
</pre>

<p>Si bien este código funciona en los navegadores web, <code>f1()</code> producirá un <code>ReferenceError</code> en Node.js, ya que no encontrará a <code>x</code>. Esto se debe a que el ámbito de nivel superior en Node no es el ámbito global, y <code>x</code> será local para el módulo.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-objects', 'Function')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>

<div>


<p>{{Compat("javascript.builtins.Function")}}</p>
</div>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{jsxref("Functions", "Funciones y ámbito de la función", "", 1)}}</li>
 <li>Declaración {{jsxref("Statements/function", "function")}}</li>
 <li>Expresión {{jsxref("Operators/function", "function")}}</li>
 <li>Declaración {{jsxref("Statements/function*", "function*")}}</li>
 <li>Expresión {{jsxref("Operators/function*", "function*")}}</li>
 <li>{{jsxref("AsyncFunction", "Función asíncrona", "", 1)}}</li>
 <li>{{jsxref("GeneratorFunction", "Función generadora", "", 1)}}</li>
</ul>
