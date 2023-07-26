---
title: Metaprogramación
slug: Web/JavaScript/Guide/Meta_programming
---

{{jsSidebar("Guía de JavaScript")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_Generators", "Web/JavaScript/Guide/Modules")}}

A partir de ECMAScript 2015, JavaScript gana soporte para los objetos {{jsxref("Proxy")}} y {{jsxref("Reflect")}} lo cual te permite interceptar y definir un comportamiento personalizado para las operaciones fundamentales del lenguaje (por ejemplo, búsqueda de propiedades, asignación, enumeración, invocación de funciones, etc.). Con la ayuda de estos dos objetos, puedes programar en el metanivel de JavaScript.

## Proxies

Introducidos en ECMAScript 6, los objetos {{jsxref("Proxy")}} te permiten interceptar ciertas operaciones e implementar comportamientos personalizados.

Por ejemplo, obtener una propiedad sobre un objeto:

```js
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};

let p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

El objeto `Proxy` define un `target` (un objeto vacío aquí) y un objeto `handler`, en el que se implementa un `get` _trap_. Aquí, un objeto que es proxy no devolverá `undefined` cuando obtenga propiedades indefinidas, sino que devolverá el número `42`.

Hay ejemplos adicionales disponibles en la página de referencia {{jsxref("Proxy")}}.

### Terminología

Los siguientes términos se utilizan cuando se habla de la funcionalidad de los proxies.

- {{jsxref("Global_Objects/Proxy/handler","handler","","true")}}
  - : Objeto marcador de posición que contiene trampas.
- traps
  - : Los métodos que proporcionan acceso a la propiedad. (Esto es análogo al concepto de _trampas_ en los sistemas operativos).
- target
  - : Objeto que virtualiza el proxy. A menudo se utiliza como interfaz de administración de almacenamiento para el proxy. Las invariantes (semántica que permanece sin cambios) con respecto a la no extensibilidad del objeto o las propiedades no configurables se verifican con el `target`.
- invariants
  - : La semántica que permanece sin cambios al implementar operaciones personalizadas se denominan _invariants_. Si violas las invariantes de un controlador, se lanzará un {{jsxref("TypeError")}}.

## Controladores y trampas

La siguiente tabla resume las trampas disponibles para los objetos `Proxy`. Ve las [páginas de referencia](/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) para explicaciones detalladas y ejemplos.

<table class="standard-table">
    <thead>
     <tr>
      <th>Controlador/Trampa</th>
      <th>Intercepciones</th>
      <th>Invariantes</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}</td>
      <td>{{jsxref("Object.getPrototypeOf()")}}<br>
       {{jsxref("Reflect.getPrototypeOf()")}}<br>
       {{jsxref("Object/proto", "__proto__")}}<br>
       {{jsxref("Object.prototype.isPrototypeOf()")}}<br>
       {{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td>
       <ul>
        <li>El método <code>getPrototypeOf</code> regresa un objeto o <code>null</code>.</li>
        <li>Si <code><var>target</var></code> no es extensible, el método <code>Object.getPrototypeOf(<var>proxy</var>)</code> debe devolver el mismo valor que <code>Object.getPrototypeOf(<var>target</var>)</code>.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}</td>
      <td>{{jsxref("Object.setPrototypeOf()")}}<br>
       {{jsxref("Reflect.setPrototypeOf()")}}</td>
      <td>Si <code><var>target</var></code> no es extensible, el parámetro <code>prototype</code> debe tener el mismo valor que <code>Object.getPrototypeOf(<var>target</var>)</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/is Extensible", "handler.isExtensible()")}}</td>
      <td>{{jsxref("Object.isExtensible()")}}<br>
       {{jsxref("Reflect.isExtensible()")}}</td>
      <td><code>Object.isExtensible(<var>proxy</var>)</code> debe devolver el mismo valor que <code>Object.isExtensible(<var>target</var>)</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}</td>
      <td>{{jsxref("Object.preventExtensions()")}}<br>
       {{jsxref("Reflect.preventExtensions()")}}</td>
      <td><code>Object.preventExtensions(<var>proxy</var>)</code> solo devuelve <code>true</code> si <code>Object.isExtensible(<var>proxy</var>)</code> es <code>false</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}</td>
      <td>{{jsxref("Object.getOwnPropertyDescriptor()")}}<br>
       {{jsxref("Reflect.getOwnPropertyDescriptor()")}}</td>
      <td>
       <ul>
        <li><code>getOwnPropertyDescriptor</code> debe devolver un objeto o <code>undefined</code>.</li>
        <li>Una propiedad no se puede reportar como inexistente si existe como una propiedad propia no configurable de <code><var>target</var></code>.</li>
        <li>Una propiedad no se puede reportar como inexistente si existe como propiedad propia de <code><var>target</var></code> y <code><var>target</var></code> no es extensible.</li>
        <li>Una propiedad no se puede reportar como existente si no existe como una propiedad propia de <code><var>target</var></code> y <code><var>target</var></code> no es extensible.</li>
        <li>No se puede reportar una propiedad como no configurable si no existe como propiedad propia de <code><var>target</var></code> o si existe como propiedad propia configurable de <code><var>target</var></code>.</li>
        <li>El resultado de <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code> se puede aplicar a <code><var>target</var></code> usando <code>Object.defineProperty</code> y no lanzará una excepción.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}</td>
      <td>{{jsxref("Object.defineProperty()")}}<br>
       {{jsxref("Reflect.defineProperty()")}}</td>
      <td>
       <ul>
        <li>No se puede agregar una propiedad si <code><var>target</var></code> no es extensible.</li>
        <li>Una propiedad no se puede agregar como (o modificar para ser) no configurable si no existe como una propiedad propia no configurable de <code><var>target</var></code>.</li>
        <li>Una propiedad no puede ser no configurable si existe una propiedad configurable correspondiente de <code><var>target</var></code>.</li>
        <li>Si una propiedad tiene una propiedad de objeto <code>target</code> correspondiente, entonces <code>Object.defineProperty(<var>target</var>, <var>prop</var>, <var>descriptor</var>)</code> no lanzará una excepción.</li>
        <li>En modo estricto, un valor <code>false</code> devuelto por el controlador <code>defineProperty</code> lanzará una excepción {{jsxref("TypeError")}}.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}</td>
      <td>
       <dl>
        <dt>Consulta de propiedad</dt>
        <dd><code>foo in proxy</code></dd>
        <dt>Consulta de propiedad heredada</dt>
        <dd><code>foo in Object.create(<var>proxy</var>)</code><br>
        {{jsxref("Reflect.has()")}}</dd>
       </dl>
      </td>
      <td>
       <ul>
        <li>Una propiedad no se puede reportar como inexistente, si existe como una propiedad propia no configurable de <code><var>target</var></code>.</li>
        <li>Una propiedad no se puede reportar como inexistente si existe como propiedad propia de <code><var>target</var></code> y <code><var>target</var></code> no es extensible.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}</td>
      <td>
       <dl>
        <dt>Acceso a la propiedad</dt>
        <dd><code><var>proxy</var>[foo]</code><br>
        <code><var>proxy</var>.bar</code></dd>
        <dt>Acceso a propiedad heredada</dt>
        <dd><code>Object.create[<var>proxy</var>](foo)</code><br>
        {{jsxref("Reflect.get()")}}</dd>
       </dl>
      </td>
      <td>
       <ul>
        <li>El valor reportado para una propiedad debe ser el mismo que el valor de la propiedad <code><var>target</var></code> correspondiente si la propiedad de <code><var>target</var></code> es una propiedad de datos de solo lectura y no es configurable.</li>
        <li>El valor reportado para una propiedad debe ser <code>undefined</code> si la propiedad <code><var>target</var></code> correspondiente es una propiedad de acceso no configurable que tiene <code>undefined</code> como su atributo <code>[[Get]]</code>.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}</td>
      <td>
       <dl>
        <dt>Asignación de propiedad</dt>
        <dd><code><var>proxy</var>[foo] = bar</code><br>
        <code><var>proxy</var>.foo = bar</code></dd>
        <dt>Asignación de propiedad heredada</dt>
        <dd><code>Object.create[<var>proxy</var>](foo) = bar</code><br>
        {jsxref("Reflect.set()")}}</dd>
       </dl>
      </td>
      <td>
       <ul>
        <li>No se puede cambiar el valor de una propiedad para que sea diferente del valor de la propiedad <code><var>target</var></code> correspondiente si la propiedad <code><var>target</var></code> correspondiente es una propiedad de datos de solo lectura y no es configurable.</li>
        <li>No se puede establecer el valor de una propiedad si la propiedad <code><var>target</var></code> correspondiente es una propiedad de acceso no configurable que tiene <code>undefined</code> como su atributo <code>[[Get]]</code>.</li>
        <li>En modo estricto, un valor de retorno <code>false</code> del controlador <code>set</code> arrojará una excepción {{jsxref("TypeError")}}.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}</td>
      <td>
       <dl>
        <dt>Eliminación de propiedad</dt>
        <dd><code>delete <var>proxy</var>[foo]</code><br>
        <code>delete <var>proxy</var>.foo</code><br>
        {{jsxref("Reflect.deleteProperty()")}}</dd>
       </dl>
      </td>
      <td>Una propiedad no se puede eliminar si existe como una propiedad propia no configurable de <code><var>target</var></code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}</td>
      <td>
       <dl>
        <dt>Enumeración de propiedad/<code>for...in</code>:</dt>
        <dd><code>for (let name in <var>proxy</var>) {...}</code><br>
        {{jsxref("Reflect.enumerate()")}}</dd>
       </dl>
      </td>
      <td>El método <code>enumerate</code> debe devolver un objeto.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}</td>
      <td>{{jsxref("Object.getOwnPropertyNames()")}}<br>
       {{jsxref("Object.getOwnPropertySymbols()")}}<br>
       {{jsxref("Object.keys()")}}<br>
       {{jsxref("Reflect.ownKeys()")}}</td>
      <td>
       <ul>
        <li>El resultado de <code>ownKeys</code> es una lista.</li>
        <li>El Tipo de cada elemento de la Lista de resultados es {{jsxref("String")}} o {{jsxref("Symbol")}}.</li>
        <li>La Lista de resultados debe contener las claves de todas las propiedades propias no configurables de <code><var>target</var></code>.</li>
        <li>Si el objeto <code><var>target</var></code> no es extensible, entonces la Lista de resultados debe contener todas las claves de las propiedades propias de <code><var>target</var></code> y ningún otro valor.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}</td>
      <td><code>proxy(..args)</code><br>
       {{jsxref("Function.prototype.apply()")}} y {{jsxref("Function.prototype.call()")}}<br>
       {{jsxref("Reflect.apply()")}}</td>
      <td>No hay invariantes para el método <code><var>handler</var>.apply</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}</td>
      <td><code>new proxy(...args)</code><br>
       {{jsxref("Reflect.construct()")}}</td>
      <td>El resultado debe ser un <code>Objeto</code>.</td>
     </tr>
    </tbody>
   </table>

## `Proxy` revocable

El método {{jsxref ("Proxy.revocable()")}} se usa para crear un objeto `Proxy` revocable. Esto significa que el proxy se puede revocar mediante la función `revoke` y apagar el proxy.

Posteriormente, cualquier operación en el proxy conduce a un {{jsxref("TypeError")}}.

```js
let revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return "[[" + name + "]]";
    },
  },
);
let proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // Lanza TypeError
proxy.foo = 1; // TypeError nuevamente
delete proxy.foo; // todavía TypeError
typeof proxy; // "object", typeof no activa ninguna trampa
```

## Reflexión

{{jsxref("Reflect")}} es un objeto integrado que proporciona métodos para operaciones JavaScript interceptables. Los métodos son los mismos que los de {{jsxref ("Global_Objects/Proxy/handler", "proxy handlers", "", "true")}}.

`Reflect` no es un objeto función.

`Reflect` ayuda con el reenvío de las operaciones predeterminadas del controlador al `target`.

Con {{jsxref("Reflect.has()")}} por ejemplo, obtienes el operador [`in`](/es/docs/Web/JavaScript/Reference/Operators/in) como función:

```js
Reflect.has(Object, "assign"); // true
```

### Una mejor función `apply`

En ES5, normalmente usas el método {{jsxref("Function.prototype.apply()")}} para llamar a una función con un valor `this` y `arguments` proporcionado como un arreglo (o un [objeto similar a un arreglo](/es/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Con {{jsxref("Reflect.apply")}} esto se vuelve menos detallado y más fácil de entender:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hola"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### Comprobando si la definición de la propiedad ha sido exitosa

Con {{jsxref("Object.defineProperty")}}, que devuelve un objeto si tiene éxito, o arroja un {{jsxref("TypeError")}} de lo contrario, usaría un bloque {{jsxref("Statements/try...catch", "try...catch")}} para detectar cualquier error que haya ocurrido al definir una propiedad. Debido a que {{jsxref("Reflect.defineProperty")}} devuelve un estado de éxito booleano, aquí puedes usar un bloque {{jsxref("Statements/if...else", "if...else")}}:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // éxito
} else {
  // fracaso
}
```

{{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}
