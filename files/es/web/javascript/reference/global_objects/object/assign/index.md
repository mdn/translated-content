---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
tags:
  - ECMAScript 2015
  - JavaScript
  - Objeto
  - Referencia
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/assign
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/assign
---
<div>{{JSRef}}</div>

<p>El método <strong><code>Object.assign()</code></strong> copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino. </p>

<div>{{EmbedInteractiveExample("pages/js/object-assign.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Object.assign(<var>objetivo</var>, ...<var>fuentes</var>)</pre>

<h3 id="Parámetros" name="Parámetros">Parámetros</h3>

<dl>
 <dt><code>objetivo</code></dt>
 <dd>El objeto destino.</dd>
 <dt><code>fuentes</code></dt>
 <dd>Los objetos origen.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>El objeto destino.</p>

<h2 id="Descripción">Descripción</h2>

<p>Las propiedades en el objeto destino serán sobrescritas por las propiedades en las fuentes si tienen la misma clave. Propiedades posteriores de las fuentes podrán sobrescribir las anteriores.</p>

<p>El método <code>Object.assign()</code> copia sólo las propiedades <em>enumerables</em> y <em>propias</em> del objeto origen a un objeto destino. Usa <code>[[Get]]</code> en la origen y <code>[[Set]] </code>en el destino, por lo que invocará los métodos de acceso y establecimiento (<em>getters</em> y <em>setters</em>). Por consiguiente <em>asignará</em> propiedades frente a sólo copiar o definir propiedades nuevas. Esto puede hacer que sea inadecuado para fusionar propiedades nuevas en un prototipo si los objetos fuente contienen métodos de acceso (<em>getters</em>). Para copiar definiciones de propiedades en prototipos, incluyendo su enumerabilidad, se deben usar {{jsxref("Object.getOwnPropertyDescriptor()")}} y {{jsxref("Object.defineProperty()")}}.</p>

<p>Tanto las propiedades {{jsxref("String")}} como {{jsxref("Symbol")}} son copiadas.</p>

<p>En caso de un error, por ejemplo si una propiedad es de solo lectura, se lanza un {{jsxref("TypeError")}}, y el objeto destino se mantendrá sin cambios.</p>

<p>Note que <code>Object.assign()</code> no lanza excepciones al encontrar en las fuentes propiedades {{jsxref("null")}} o {{jsxref("undefined")}}.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Clonando_un_objeto">Clonando un objeto</h3>

<pre class="brush: js">var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
</pre>

<h3 id="Advertencia_para_clonado_profundo">Advertencia para clonado profundo</h3>

<p>Para un clonado profundo, necesitamos usar otra alternativa ya que <code>Object.assign()</code> copia valores de propiedades. Si el valor en la fuente es una referencia a un objeto, solo se copia la referencia en sí, como valor de la propiedad.</p>

<pre class="brush: js">function test() {
  'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}

test();</pre>

<h3 id="Fusionando_objetos">Fusionando objetos</h3>

<pre class="brush: js">var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.</pre>

<h3 id="Fusionando_objetos_con_las_mismas_propiedades">Fusionando objetos con las mismas propiedades</h3>

<pre class="brush: js">var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }</pre>

<p>Las propiedades también son sobreescritas por otros objetos que aparecen posteriormente en la lista de parámetros y que tienen propiedades con el mismo nombre.</p>

<h3 id="Copiando_propiedades_de_tipo_símbolo">Copiando propiedades de tipo símbolo</h3>

<pre class="brush: js">var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
</pre>

<h3 id="Las_propiedades_heredadas_y_las_no_enumerables_no_pueden_ser_copiadas">Las propiedades heredadas y las no enumerables no pueden ser copiadas</h3>

<pre class="brush: js">var obj = Object.create({ foo: 1 }, { // foo es una propiedad heredada.
  bar: {
    value: 2  // bar es una propiedad no enumerable.
  },
  baz: {
    value: 3,
    enumerable: true  // baz es una propiedad propia enumerable.
  }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
</pre>

<h3 id="Los_tipos_primitivos_serán_encapsulados_en_objetos">Los tipos primitivos serán encapsulados en objetos</h3>

<pre class="brush: js">var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo')

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Los tipos primitivos son encapsulados en objetos y se ignoran las propiedades con valor null o undefined.
// Nótese que sólo los wrappers de cadenas tienen propiedades enumerables:
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
</pre>

<h3 id="Las_excepciones_interrumpen_la_tarea_de_copiado">Las excepciones interrumpen la tarea de copiado</h3>

<pre class="brush: js">var target = Object.defineProperty({}, 'foo', {
  value: 1,
  writeable: false
}); // target.foo es una propiedad de sólo lectura

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" es de sólo lectura
// La excepción se lanza cuando se intenta asignar un valor a target.foo

console.log(target.bar);  // 2, la primera fuente fue copiada.
console.log(target.foo2); // 3, la primera propiedad del segundo objeto fuente se copió correctamente.
console.log(target.foo);  // 1, se lanza la excepción.
console.log(target.foo3); // undefined, el método assign ha finalizado, no se copiará foo3.
console.log(target.baz);  // undefined, tampoco se copiará el tercer objecto fuente.
</pre>

<h3 id="Copiando_métodos_de_acceso">Copiando métodos de acceso</h3>

<pre class="brush: js">var obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach(source =&gt; {
    let descriptors = Object.keys(source).reduce((descriptors, key) =&gt; {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // by default, Object.assign copies enumerable Symbols too
    Object.getOwnPropertySymbols(source).forEach(sym =&gt; {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
</pre>

<h2 id="Polyfill" name="Polyfill">Polyfill</h2>

<p>Este {{Glossary("Polyfill","polyfill")}} no soporta propiedades símbolo, ya que ES5 no tiene símbolos.</p>

<pre class="brush: js">if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index &lt; arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-object.assign', 'Object.assign')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.assign', 'Object.assign')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<p>{{Compat("javascript.builtins.Object.assign")}}</p>
</div>

<h2 id="Ver_también" name="Ver también">Ver también</h2>

<ul>
 <li>{{jsxref("Object.defineProperties()")}}</li>
 <li><a href="/es/docs/Web/JavaScript/enumeracion_y_propietario_de_propiedades">Enumeración y propietarios de propiedades</a></li>
 <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Sintaxis_Spread#Spread_en_literales_tipo_Objeto">Spread en literales tipo Objeto</a></li>
</ul>
