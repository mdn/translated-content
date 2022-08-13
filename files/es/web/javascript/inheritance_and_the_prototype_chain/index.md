---
title: Herencia y la cadena de prototipos
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
tags:
  - Herencia
  - Intermedio
  - JavaScript
  - Programación orientada a objetos
translation_of: Web/JavaScript/Inheritance_and_the_prototype_chain
original_slug: Web/JavaScript/Herencia_y_la_cadena_de_protipos
---
<div>{{jsSidebar("Advanced")}}</div>

<p>JavaScript provoca cierta confusión en desarrolladores con experiencia en lenguajes basados en clases (como Java o C++), por ser dinámico y no proporcionar una implementación de clases en sí mismo (la palabra clave <code>class</code> se introdujo en ES2015, pero sólo para endulzar la sintaxis, ya que JavaScript sigue estando basado en prototipos).</p>

<p>En lo que a herencia se refiere, JavaScript sólo tiene una estructura: objetos. Cada objeto tiene una propiedad privada (referida como su [[Prototype]]) que mantiene un enlace a otro objeto llamado su <strong>prototipo</strong>. Ese objeto prototipo tiene su propio prototipo, y así sucesivamente hasta que se alcanza un objeto cuyo prototipo es <code>null</code>. Por definición, <code>null</code> no tiene prototipo, y actúa como el enlace final de esta <strong>cadena de prototipos</strong>.</p>

<p>Casi todos los objetos en JavaScript son instancias de {{jsxref("Object")}} que se sitúa a la cabeza de la cadena de prototipos.</p>

<p>A pesar de que a menudo esto se considera como una de las principales debilidades de JavaScript, el modelo de herencia de prototipos es de hecho más potente que el modelo clásico. Por ejemplo, es bastante simple construir un modelo clásico a partir de un modelo de prototipos.</p>

<h2 id="Herencia_con_la_cadena_de_prototipos">Herencia con la cadena de prototipos</h2>

<h3 id="Heredando_propiedades">Heredando propiedades</h3>

<p>Los objetos en JavaScript son "contenedores" dinámicos de propiedades (referidas como sus <strong>propiedades particulares</strong>).  Los objetos en JavaScript poseen un enlace a un objeto prototipo. Cuando intentamos acceder a una propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.</p>

<div class="note">
<p>Siguiendo el estándar ECMAScript, la notación <code>algunObjeto.[[Prototype]]</code> se usa para designar el prototipo de <code>algunObjeto.</code> A partir de ECMAScript 2015, se accede al <code>[[Prototype]]</code> utilizando los accesores  {{jsxref("Object.getPrototypeOf()")}} y {{jsxref("Object.setPrototypeOf()")}}. Esto es equivalente a la propiedad JavaScript <code>__proto__</code> que no es estándar pero es el de-facto implementado por los navegadores.</p>

<p>No debe confundirse con la propiedad de las funciones <code><em>func.</em>prototype</code>, que en cambio especifican el <code>[[Prototype]]</code> a asignar a todas las instancias de los objetos creados por la función dada cuando se utiliza como un constructor. La propiedad <code><strong>Object.prototype</strong></code> representa el prototipo del objeto {{jsxref("Object")}}.</p>
</div>

<p>Esto es lo que ocurre cuando intentamos acceder a una propiedad:</p>

<pre class="brush: js">// <code>Supongamos que tenemos un objeto</code> o, con propiedades a y b:
// {a: 1, b: 2}
// o.[[Prototype]] tiene propiedades b y c:
// {b: 3, c: 4}
// Finalmente, o.[[Prototype]].[[Prototype]] es null.
// Este es el final de la cadena de prototipos, ya que null,
// por definición, no tiene [[Prototype]].
// Por tanto, la cadena completa de prototipos se vería como:
// {a:1, b:2} ---&gt; {b:3, c:4} ---&gt; null

console.log(o.a); // 1
// ¿Hay una propiedad 'a' en o? Sí, y su valor es 1.

console.log(o.b); // 2
// ¿Hay una propiedad 'b' en o? Sí, y su valor es 2.
// El prototipo también tiene una propiedad 'b', pero no se ha visitado.
// Esto se llama "solapamiento de propiedades"

console.log(o.c); // 4
// ¿Hay una propiedad 'c' en o? No, comprobamos su prototipo.
// ¿Hay una propiedad 'c' en o.[[Prototype]]? Sí, y su valor es 4.

console.log(o.d); // undefined
// ¿Hay una propiedad 'd' en o? No, comprobamos su prototipo.
//  ¿Hay una propiedad 'd' en o.[[Prototype]]? No, comprobamos su prototipo.
// o.[[Prototype]].[[Prototype]] es null, paramos de buscar.
// No se encontró la propiedad, se devuelve undefined
</pre>

<p>Dar valor a una propiedad de un objeto crea una propiedad. La única excepción a las reglas de funcionamiento de obtener y dar valores ocurre cuando hay una propiedad heredada con un <a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters" title="Defining Getters and Setters">getter o un setter</a>.</p>

<h3 id="Heredando_métodos">Heredando "métodos"</h3>

<p>JavaScript no tiene "métodos" en la forma que los lenguajes basados en clases los define. En JavaScript, cualquier función puede añadirse a un objeto como una propiedad. Una función heredada se comporta como cualquier otra propiedad, viéndose afectada por el solapamiento de propiedades como se muestra anteriormente (siendo, en este caso, una especie de <em>redefinición de métodos</em>).</p>

<p>Cuando una función heredada se ejecuta, el valor de <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this" title="this"><code>this</code></a> apunta al objeto que hereda, no al prototipo en el que la función es una propiedad.</p>

<pre class="brush: js">var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// Cuando en este caso se llama a o.m, 'this' se refiere a o

var p = Object.create(o);
// p es un objeto que hereda de o

p.a = 12; // crea una propiedad 'a' en p
console.log(p.m()); // 13
// cuando se llama a p.m, 'this' se refiere a p.
// De esta manera, cuando p hereda la función m de o,
// 'this.a' significa p.a, la propiedad 'a' de p
</pre>

<h2 id="Usando_prototipos_en_JavaScript">Usando prototipos en JavaScript</h2>

<p>Veamos lo que sucede detrás de escena detalladamente.</p>

<p>En JavaScript, como se mencionó anteriormente, las funciones pueden tener propiedades. Todas las funciones tienen una propiedad especial llamada <code>prototype</code>. Por favor ten en cuenta que el siguiente código es autónomo (es seguro asumir que no hay otro JavaScript en la página web mas que el siguiente). Para la mejor experiencia de aprendizaje, es altamente recomendable que abras una consola (la cual, en Chrome y Firefox, se puede abrir presionando Ctrl+Shift+I), navegando hasta la pestaña "console", copiando y pegando el siguiente código JavaScript, y ejecutándolo presionando la tecla Enter/Return.</p>

<pre class="brush: js line-numbers  language-js">function hacerAlgo(){}
console.log( hacerAlgo.prototype );
// No importa cómo declares la función, una
// función en JavaScript siempre tendrá una
// propiedad prototype predeterminada.
var hacerAlgo = function(){};
console.log( hacerAlgo.prototype );</pre>

<p>Como acabamos de ver, <code>hacerAlgo()</code> tiene una propiedad <code>prototype</code> predeterminada, como lo demuestra la consola. Después de ejecutar este código, la consola debería haber mostrado un parecido a esto.</p>

<pre class="brush: js line-numbers  language-js">{
    constructor: ƒ hacerAlgo(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}</pre>

<p>Podemos añadir propiedades al prototipo de <code>hacerAlgo()</code>, como se muestra a continuación.</p>

<pre class="brush: js line-numbers  language-js">function hacerAlgo(){}
hacerAlgo.prototype.foo = "bar";
console.log( hacerAlgo.prototype );</pre>

<p>El resultado:</p>

<pre>{
    foo: "bar",
    constructor: ƒ hacerAlgo(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}</pre>

<p>Ahora podemos usar el operador <code>new</code> para crear una instancia de <code>hacerAlgo()</code> basado en este prototipo. Para usar el operador <code>new</code>, llama la función normalmente pero añadiendo el prefijo <code>new</code>. Llamar a la función con el operador <code>new</code> devuelve un objeto que es una instancia de la función. Entonces las propiedades pueden ser añadidas a este objeto.</p>

<p>Intenta el siguiente código:</p>

<pre class="brush: js line-numbers  language-js">function hacerAlgo(){}
hacerAlgo.prototype.foo = "bar"; // añadir una propiedad al prototipo
var hacerUnaInstancia = new hacerAlgo();
hacerUnaInstancia.prop = "un valor"; // añadir una propiedad al objeto
console.log( hacerUnaInstancia );</pre>

<p>El resultado es similar a lo siguiente:</p>

<pre class="brush: js line-numbers  language-js">{
    prop: "un valor",
    __proto__: {
        foo: "bar",
        constructor: ƒ hacerAlgo(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}</pre>

<p>Como acabamos de ver, el <code>__proto__</code> de <code>hacerUnaInstancia</code> es <code>hacerAlgo.prototype</code>. Pero, ¿qué hace esto? Cuando accedes a la propiedad de <code>hacerUnaInstancia</code>, el navegador primero revisa si <code>hacerUnaInstancia</code> tiene esa propiedad.</p>

<p>Si <code>hacerUnaInstancia</code> no tiene la propiedad, entonces el navegador busca por la propiedad en el <code>__proto__</code> de <code>hacerUnaInstancia</code> (también conocido como <code>hacerAlgo.prototype</code>). Si el <code>__proto__</code> de <code>hacerUnaInstancia</code> tiene la propiedad buscada, entonces la propiedad en el <code>__proto__</code> de <code>hacerUnaInstancia</code> es usada.</p>

<p>De otra manera, si el <code>__proto__</code> de <code>hacerUnaInstancia</code> no tiene la propiedad, entonces el <code>__proto__</code> de <code>__proto__</code> de <code>hacerUnaInstancia</code> es revisado para la propiedad. Por defecto, el <code>__proto__</code> de la propieda <code>prototype</code> de cualquier función es  <code>window.Object.prototype</code>. Entonces, el <code>__proto__</code> de el <code>__proto__</code> de <code>hacerUnaInstancia</code> (conocido como el <code>__proto__</code> de <code>hacerAlgo.prototype</code> (conocido como <code>Object.prototype</code>)) es entonces revisado por la propiedad que se está buscando.</p>

<p>Si la propiedad no es encontrada en el <code>__proto__</code> de el <code>__proto__</code> de <code>hacerUnaInstancia</code>, entonces el <code>__proto__</code> de el <code>__proto__</code> de el <code>__proto__</code> de <code>hacerUnaInstancia</code> es revisado. Sin embargo, hay un problema: el <code>__proto__</code> de el <code>__proto__</code> de el <code>__proto__</code> de el <code>__proto__</code> de <code>hacerUnaInstancia</code> no existe. Entonces y sólo entonces, despues de que toda la cadena de prototipos de <code>__proto__</code>'s es revisada, y no haya mas <code>__proto__</code>s el navegador afirma que la propiedad no existe y concluye que el valor de la propiedad es <code>undefined</code>.</p>

<p>Vamos a intentar introduciendo más código en la consola:</p>

<pre class="brush: js line-numbers  language-js">function hacerAlgo(){}
hacerAlgo.prototype.foo = "bar";
var hacerUnaInstancia = new hacerAlgo();
hacerUnaInstancia.prop = "un valor";
console.log("hacerUnaInstancia.prop:      " + hacerUnaInstancia.prop);
console.log("hacerUnaInstancia.foo:       " + hacerUnaInstancia.foo);
console.log("hacerAlgo.prop:           " + hacerAlgo.prop);
console.log("hacerAlgo.foo:            " + hacerAlgo.foo);
console.log("hacerAlgo.prototype.prop: " + hacerAlgo.prototype.prop);
console.log("hacerAlgo.prototype.foo:  " + hacerAlgo.prototype.foo);</pre>

<p>El resultado es el siguiente:</p>

<pre class="brush: js line-numbers  language-js">hacerUnaInstancia.prop:      un valor
hacerUnaInstancia.foo:       bar
hacerAlgo.prop:              undefined
hacerAlgo.foo:               undefined
hacerAlgo.prototype.prop:    undefined
hacerAlgo.prototype.foo:     bar</pre>

<h2 id="Maneras_diferentes_de_crear_objetos_y_la_cadena_de_prototipos_resultante">Maneras diferentes de crear objetos y la cadena de prototipos resultante</h2>

<h3 id="Objetos_creados_mediante_estructuras_sintácticas">Objetos creados mediante estructuras sintácticas</h3>

<pre class="brush: js">var o = {a: 1};

// El objeto recién creado o tiene Object.prototype como su [[Prototype]]
// o no tiene ninguna propiedad llamada 'hasOwnProperty'
// hasOwnProperty es una propiedad propia de Object.prototype.
// Entonces o hereda hasOwnProperty de Object.prototype
// Object.prototype es null como su prototype.
// o ---&gt; Object.prototype ---&gt; null

var a = ["yo", "whadup", "?"];

// Arrays hereda de Array.prototype
// (que tiene métodos como indexOf, forEach, etc.)
// La cadena de prototipados sería:
// a ---&gt; Array.prototype ---&gt; Object.prototype ---&gt; null

function f(){
  return 2;
}

// Las funciones heredan de Function.prototype
// (que tiene métodos como call, bind, etc.)
// f ---&gt; Function.prototype ---&gt; Object.prototype ---&gt; null
</pre>

<h3 id="Con_un_constructor">Con un constructor</h3>

<p>Un "constructor" en JavaScript es "solo" una función que pasa a ser llamada con el <a href="/en-US/docs/Web/JavaScript/Reference/Operators/new" title="new">operador new</a>.</p>

<pre class="brush: js">function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g es un objeto con las propiedades 'vértices' y 'edges'.
// g.[[Prototype]] es el valor de Graph.prototype cuando new Graph() es ejecutado.
</pre>

<h3 id="Con_Object.create">Con <code>Object.create</code></h3>

<p>ECMAScript 5 Introdujo un nuevo método: {{jsxref("Object.create()")}}. Llamando este método creas un nuevo objeto. El prototype de este objeto es el primer argumento de la función:</p>

<pre class="brush: js">var a = {a: 1};
// a ---&gt; Object.prototype ---&gt; null

var b = Object.create(a);
// b ---&gt; a ---&gt; Object.prototype ---&gt; null
console.log(b.a); // 1 (heredado)

var c = Object.create(b);
// c ---&gt; b ---&gt; a ---&gt; Object.prototype ---&gt; null

var d = Object.create(null);
// d ---&gt; null
console.log(d.hasOwnProperty);
// undefined, por que d no hereda de Object.prototype
</pre>

<div>
<h3 id="Con_la_palabra_reservada_class">Con la palabra reservada <code>class</code></h3>

<p>ECMAScript 2015 introduce un nuevo set de palabras reservadas que implementan <a href="/en-US/docs/Web/JavaScript/Reference/Classes">clases</a>. Aunque estos constructores lucen más familiares para los desarrolladores de lenguajes basados en clases, aun así no son clases. JavaScript sigue estando basado en prototipos. Los nuevos keywords incluyen {{jsxref("Statements/class", "class")}}, {{jsxref("Classes/constructor", "constructor")}}, {{jsxref("Classes/static", "static")}}, {{jsxref("Classes/extends", "extends")}}, and {{jsxref("Operators/super", "super")}}.</p>

<pre class="brush: js">"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
</pre>

<h3 id="Rendimiento">Rendimiento</h3>

<p>El tiempo de búsqueda para las propiedades que están en lo alto de la cadena de prototipo puede tener un impacto negativo en el rendimiento, y esto puede ser significativo en el código donde el rendimiento es crítico. Además, tratar de acceder a las propiedades inexistentes siempre atravesara la cadena de prototipos completamente.</p>

<p>También, cuando iteramos sobre las propiedades de un objeto, cada propiedad enumerable que se encuentra en la cadena de prototipo será enumerada.</p>

<p>Para comprobar si un objeto tiene una propiedad definida en sí mismo y no en alguna parte de su cadena de prototipo, Es necesario usar para esto el método  <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"><code>hasOwnProperty</code></a> que todos los objetos heredan de<code> Object.prototype</code>.</p>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"><code>hasOwnProperty</code></a> es la única cosa en JavaScript que se ocupa de las propiedades y no atraviesa la cadena de prototipos.</p>

<p>Nota: Esto <strong>no</strong> es suficiente para chequear si una propiedad esta <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>. la propiedad podría existir, pero el valor justamente sucede que esta seteado como <code>undefined</code>.</p>
</div>

<h3 id="Malas_practicas_Extensión_de_prototipos_nativos">Malas practicas: Extensión de prototipos nativos</h3>

<p>Una mala característica que a menudo se usa, es extender <code>Object.prototype</code> o uno de los otros pre-incorporados prototypes.</p>

<p>Esta técnica se llama <em>monkey patching</em> y rompe la <em>encapsulación</em>. Si bien, es utilizado por librerías como <em>Prototype.js</em>, no hay una buena razón para saturar los tipos pre-incorporados con funcionalidades adicionales <em>no estándar</em>.</p>

<p>La <strong>única</strong> buena razón para extender los pre-incorporados prototipos es modificar las funcionalidades nuevas de los motores de JavaScript; por ejemplo:</p>

<p><code>Array.forEach</code>, etc.</p>

<h2 id="Example" name="Example">Ejemplo</h2>

<p><code>B</code> heredará de <code>A</code>:</p>

<pre class="brush: js">function A(a){
  this.varA = a;
}

// Cual es el propósito de incluir varA en el prototipo si A.prototype.varA <em>siempre</em> va a ser la sombra de
// this.varA, dada la definición de la función A arriba?
A.prototype = {
  varA : null,  // No deberíamos atacar varA desde el prototipo como haciendo nada?
      // Tal vez intentando una optimización al asignar espacios ocultos en las clases?
      // https://developers.google.com/speed/articles/optimizing-javascript#Initializing instanciar variables
      // podría ser válido si varA no fuera inicializado únicamente por cada instancia.
  doSomething : function(){
    // ...
  }
}

function B(a, b){
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB : {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true
  },
  doSomething : {
    value: function(){ // override
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
</pre>

<p>Las partes importantes son:</p>

<ul>
 <li>Los tipos son definidos en <code>.prototype</code></li>
 <li>Usar <code>Object.create()</code> para heredar</li>
</ul>

<h2 id="prototype_y_Object.getPrototypeOf"><code>prototype</code> y <code>Object.getPrototypeOf</code></h2>

<p>JavaScript es un poco confuso para desarrolladores que vienen de lenguajes como Java o C++, ya que todo es dinámico, en todo momento de la ejecución, y no tiene clases en lo absoluto. Todo es solamente instancias (objetos). Incluso las "clases" que creamos, son solo funciones (objetos).</p>

<p>Probablemente notaste que nuestra <code>función A</code> tiene una propiedad especial llamada <code>prototype</code>. Esta propiedad especial funciona con el operador de JavaScript <code>new</code>. La referencia al prototipo objeto es copiada al interno <code>[[Prototype]]</code> propiedad de la instancia <em>new</em>. Por ejemplo, cuando creas una variable <code>var a1 = new A()</code>, JavaScript (después de haber creado el objeto en memoria y antes de correr function <code>A()</code> con <code>this</code> definido a él) setea <code>a1.[[Prototype]] = A.prototype</code>. Cuando a continuación accedes a las propiedades de la instancia, JavaScript primero chequea si existen en el objeto directamente, y si no, mira en el <code>[[Prototype]]</code>. Esto significa que todo lo que definas en el <code>prototipo</code> es efectivamente compartido a todas las instancias, e incluso después puedes cambiar partes del <code>prototipo</code> y que todos los cambios se hagan en todas las instancias.</p>

<p>Si, en el ejemplo de arriba, pones <code>var a1 = new A(); var a2 = new A();</code> entonces <code>a1.doSomething</code> se referiría a <code>Object.getPrototypeOf(a1).doSomething</code>, que seria lo mismo que <code>A.prototype.doSomething</code> que definiste, i.e. <code>Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething</code>.</p>

<p>resumiendo, <code>prototype</code> es para tipos, mientras que <code>Object.getPrototypeOf()</code> es lo mismo para instancias.</p>

<p><code>[[Prototype]]</code> es visto como <em>recursivo</em>, i.e. <code>a1.doSomething</code>, <code>Object.getPrototypeOf(a1).doSomething</code>, <code>Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething</code> etc., hasta que se encuentra o <code>Object.getPrototypeOf </code>retornará null.</p>

<p>Entonces, cuando llamas</p>

<pre class="brush: js">var o = new Foo();</pre>

<p>JavaScript en realidad hace</p>

<pre class="brush: js">var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);</pre>

<p>(o algo similar) y cuando después haces</p>

<pre class="brush: js">o.someProp;</pre>

<p>chequea si <code>o</code> tiene una propiedad <code>someProp</code>. Si no, busca en <code>Object.getPrototypeOf(o).someProp</code> y si ahí no existe, busca en <code>Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp</code> y así sucesivamente.</p>

<div>
<h2 id="En_conclusión">En conclusión</h2>

<p>Es <strong>esencial</strong> entender el modelo de prototipado por instancias antes de escribir código complejo que hace uso de esto. También, sé consciente del largo de la cadena de prototipado en tu código y romperlo si es necesario para evitar posibles problemas de rendimiento. Adicionalmente, el prototipo nativo <strong>nunca</strong> debería ser extendido a menos que esto sea por motivo de compatibilidad con nuevas versiones de JavaScript.</p>
</div>
