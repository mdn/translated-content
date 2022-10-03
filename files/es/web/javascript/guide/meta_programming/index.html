---
title: Metaprogramación
slug: Web/JavaScript/Guide/Meta_programming
tags:
  - ECMAScript 2015
  - Guía
  - JavaScript
  - Proxy
  - Reflejar
  - 'l10n:priority'
translation_of: Web/JavaScript/Guide/Meta_programming
---
<div>{{jsSidebar("Guía de JavaScript")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_Generators", "Web/JavaScript/Guide/Modules")}}</div>

<p class="summary">A partir de ECMAScript 2015, JavaScript gana soporte para los objetos {{jsxref("Proxy")}} y {{jsxref("Reflect")}} lo cual te permite interceptar y definir un comportamiento personalizado para las operaciones fundamentales del lenguaje (por ejemplo, búsqueda de propiedades, asignación, enumeración, invocación de funciones, etc.). Con la ayuda de estos dos objetos, puedes programar en el metanivel de JavaScript.</p>

<h2 id="Proxies">Proxies</h2>

<p>Introducidos en ECMAScript 6, los objetos {{jsxref("Proxy")}} te permiten interceptar ciertas operaciones e implementar comportamientos personalizados.</p>

<p>Por ejemplo, obtener una propiedad sobre un objeto:</p>

<pre class="brush: js notranslate">let <var>handler</var> = {
  get: function(<var>target</var>, name) {
    return name in <var>target</var>? <var>target</var>[name] : 42
  }
}

let p = new Proxy({}, <var>handler</var>)
p.a = 1
console.log(p.a, p.b) // 1, 42
</pre>

<p>El objeto <code>Proxy</code> define un <dfn><code><var>target</var></code></dfn> (un objeto vacío aquí) y un objeto <dfn><code><var>handler</var></code></dfn>, en el que se implementa un <code>get</code> <dfn>trap</dfn>. Aquí, un objeto que es proxy no devolverá <code>undefined</code> cuando obtenga propiedades indefinidas, sino que devolverá el número <code>42</code>.</p>

<p>Hay ejemplos adicionales disponibles en la página de referencia {{jsxref("Proxy")}}.</p>

<h3 id="Terminología">Terminología</h3>

<p>Los siguientes términos se utilizan cuando se habla de la funcionalidad de los proxies.</p>

<dl>
 <dt>{{jsxref("Global_Objects/Proxy/handler","handler","","true")}}</dt>
 <dd>Objeto marcador de posición que contiene trampas.</dd>
 <dt>traps</dt>
 <dd>Los métodos que proporcionan acceso a la propiedad. (Esto es análogo al concepto de <em>trampas</em> en los sistemas operativos).</dd>
 <dt>target</dt>
 <dd>Objeto que virtualiza el proxy. A menudo se utiliza como interfaz de administración de almacenamiento para el proxy. Las invariantes (semántica que permanece sin cambios) con respecto a la no extensibilidad del objeto o las propiedades no configurables se verifican con el <code>target</code>.</dd>
 <dt>invariants</dt>
 <dd>La semántica que permanece sin cambios al implementar operaciones personalizadas se denominan <em>invariants</em>. Si violas las invariantes de un controlador, se lanzará un {{jsxref("TypeError")}}.</dd>
</dl>

<h2 id="Controladores_y_trampas">Controladores y trampas</h2>

<p>La siguiente tabla resume las trampas disponibles para los objetos <code>Proxy</code>. Ve las <a href="/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler">páginas de referencia</a> para explicaciones detalladas y ejemplos.</p>

«Tabla»

<h2 id="Proxy_revocable"><code>Proxy</code> revocable</h2>

<p>El método {{jsxref ("Proxy.revocable()")}} se usa para crear un objeto <code>Proxy</code> revocable. Esto significa que el proxy se puede revocar mediante la función <code>revoke</code> y apagar el proxy.</p>

<p>Posteriormente, cualquier operación en el proxy conduce a un {{jsxref("TypeError")}}.</p>

<pre class="brush: js notranslate">let revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return '[[' + name + ']]'
  }
})
let proxy = revocable.proxy
console.log(proxy.foo) // "[[foo]]"

revocable.revoke()

console.log(proxy.foo)   // Lanza TypeError
proxy.foo = 1            // TypeError nuevamente
delete proxy.foo         // todavía TypeError
typeof proxy             // "object", typeof no activa ninguna trampa
</pre>

<h2 id="Reflexión">Reflexión</h2>

<p>{{jsxref("Reflect")}} es un objeto integrado que proporciona métodos para operaciones JavaScript interceptables. Los métodos son los mismos que los de {{jsxref ("Global_Objects/Proxy/handler", "proxy handlers", "", "true")}}.</p>

<p><code>Reflect</code> no es un objeto función.</p>

<p><code>Reflect</code> ayuda con el reenvío de las operaciones predeterminadas del controlador al <code><var>target</var></code>.</p>

<p>Con {{jsxref("Reflect.has()")}} por ejemplo, obtienes el operador <a href="/es/docs/Web/JavaScript/Reference/Operators/in"><code>in</code></a> como función:</p>

<pre class="brush: js notranslate">Reflect.has(Object, 'assign') // true
</pre>

<h3 id="Una_mejor_función_apply">Una mejor función <code>apply</code></h3>

<p>En ES5, normalmente usas el método {{jsxref("Function.prototype.apply()")}} para llamar a una función con un valor <code>this</code> y <code><var>arguments</var></code> proporcionado como un arreglo (o un <a href="/es/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects">objeto similar a un arreglo</a>).</p>

<pre class="brush: js notranslate">Function.prototype.apply.call(Math.floor, undefined, [1.75])
</pre>

<p>Con {{jsxref("Reflect.apply")}} esto se vuelve menos detallado y más fácil de entender:</p>

<pre class="brush: js notranslate">Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hola"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
</pre>

<h3 id="Comprobando_si_la_definición_de_la_propiedad_ha_sido_exitosa">Comprobando si la definición de la propiedad ha sido exitosa</h3>

<p>Con {{jsxref("Object.defineProperty")}}, que devuelve un objeto si tiene éxito, o arroja un {{jsxref("TypeError")}} de lo contrario, usaría un bloque {{jsxref("Statements/try...catch", "try...catch")}} para detectar cualquier error que haya ocurrido al definir una propiedad. Debido a que {{jsxref("Reflect.defineProperty")}} devuelve un estado de éxito booleano, aquí puedes usar un bloque {{jsxref("Statements/if...else", "if...else")}}:</p>

<pre class="brush: js notranslate">if (Reflect.defineProperty(target, property, attributes)) {
  // éxito
} else {
  // fracaso
}</pre>

<p>{{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}</p>
