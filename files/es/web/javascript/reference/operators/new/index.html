---
title: Operador new
slug: Web/JavaScript/Reference/Operators/new
tags:
  - Expresiones del lado izquierdo
  - JavaScript
  - Left-hand-side expressions
  - Operador
  - Operator
  - Referencia
translation_of: Web/JavaScript/Reference/Operators/new
original_slug: Web/JavaScript/Referencia/Operadores/new
---
<div>{{jsSidebar("Operators", "Operadores")}}</div>

<p><span class="seoSummary">El <strong>operador <code>new</code></strong> permite a los desarrolladores crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados que tiene un función constructora.</span></p>

<div>{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox notranslate">new <var>constructor</var>[([<var>arguments</var>])]</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code><var>constructor</var></code></dt>
 <dd>Una clase o función que especifica el tipo de instancia del objeto.</dd>
</dl>

<dl>
 <dt><code><var>arguments</var></code></dt>
 <dd>Una lista de valores con los que se llamará al <code><var>constructor</var></code>.</dd>
</dl>

<h2 id="Descripción">Descripción</h2>

<p>La palabra clave <strong><code>new</code></strong> hace lo siguiente:</p>

<ol>
 <li>Crea un objeto JavaScript simple y en blanco;</li>
 <li>Vincula (establece el constructor de) este objeto a otro objeto;</li>
 <li>Pasa el objeto recién creado del <em>Paso 1</em> como el contexto <code>this</code>;</li>
 <li>Devuelve <code>this</code> si la función no devuelve un objeto.</li>
</ol>

<p>La creación de un objeto definido por el usuario requiere dos pasos:</p>

<ol>
 <li>Defina el tipo de objeto escribiendo una función.</li>
 <li>Crea una instancia del objeto con <code>new</code>.</li>
</ol>

<p>Para definir un tipo de objeto, crea una función para el tipo de objeto que especifique su nombre y propiedades. Un objeto puede tener una propiedad que en sí misma es otro objeto. Ve los siguientes ejemplos.</p>

<p>Cuando se ejecuta el código <code>new <em>Foo</em>(...)</code>, sucede lo siguiente:</p>

<ol>
 <li>Se crea un nuevo objeto, heredado de <code><em>Foo</em>.prototype</code>.</li>
 <li>La función constructora <code><em>Foo</em></code> se llama con los argumentos especificados y con {{JSxRef("Operators/this", "this")}} vinculado al objeto recién creado. <code>new <em>Foo</em></code> es equivalente a <code>new <em>Foo</em>()</code>, es decir, si no se especifica una lista de argumentos, <code><em>Foo</em></code> se llama sin argumentos.</li>
 <li>El objeto (no nulo, <code>false</code>, 3.1415 u otros tipos primitivos) devuelto por la función constructora se convierte en el resultado de toda la expresión <code>new</code>. Si la función constructora no devuelve explícitamente un objeto, en su lugar se utiliza el objeto creado en el paso 1. (Normalmente, los constructores no devuelven un valor, pero pueden elegir hacerlo si quieren redefinir el proceso normal de creación de objetos).</li>
</ol>

<p>Siempre puedes agregar una propiedad a un objeto definido previamente. Por ejemplo, la instrucción <code>car1.color = "black"</code> agrega una propiedad <code>color</code> a <code>car1</code> y le asigna un valor de "<code>black</code>". Sin embargo, esto no afecta a ningún otro objeto. Para agregar la nueva propiedad a todos los objetos del mismo tipo, debes agregar la propiedad a la definición del tipo de objeto <code>Car</code>.</p>

<p>Puedes agregar una propiedad compartida a un tipo de objeto definido previamente mediante la propiedad {{JSxRef("Global_Objects/Function/prototype", "Function.prototype")}}. Esto define una propiedad que comparten todos los objetos creados con esa función, en lugar de solo una instancia del tipo de objeto. El siguiente código agrega una propiedad de color con el valor <code>"color original"</code> a todos los objetos de tipo <code>Car</code>, y luego redefine ese valor con la cadena "<code>black</code>" solo en la instancia <code>car1</code> del objeto. Para obtener más información, consulta {{JSxRef("Global_Objects/Function/prototype", "prototype")}}.</p>

<pre class="brush: js notranslate">function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = 'color original';
console.log(car1.color);    // 'color original'

car1.color = 'black';
console.log(car1.color);    // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'color original'
console.log(Object.getPrototypeOf(car2).color); // 'color original'
console.log(car1.color);   // 'black'
console.log(car2.color);   // 'color original'
</pre>

<div class="note">
<p>Si no escribiste el operador <code>new</code>, <strong>la función <code>constructor</code> se invocará como cualquier función normal</strong>, <em>sin crear un objeto.</em> En este caso, el valor de <code>this</code> también es diferente.</p>
</div>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Tipo_de_objeto_e_instancia_de_objeto">Tipo de objeto e instancia de objeto</h3>

<p>Supongamos que deseas crear un tipo de objeto para <code>cars</code>. Quieres que este tipo de objeto se llame <code>Car</code>, y quieres que tenga propiedades para marca, modelo y año (<code>make</code>, <code>model</code> y <code>year</code> en inglés respectivamente). Para ello, podrías escribir la siguiente función:</p>

<pre class="brush: js notranslate">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>Ahora puedes crear un objeto llamado <code>myCar</code> de la siguiente manera:</p>

<pre class="brush: js notranslate">var myCar = new Car('Eagle', 'Talon TSi', 1993);
</pre>

<p>Esta declaración crea <code>myCar</code> y le asigna los valores especificados para sus propiedades. Entonces el valor de <code>myCar.make</code> es la cadena "Eagle", <code>myCar.year</code> es el entero 1993, y así sucesivamente.</p>

<p>Puedes crear cualquier número de objetos <code>car</code> mediante llamadas a <code>new</code>. Por ejemplo:</p>

<pre class="brush: js notranslate">var kensCar = new Car('Nissan', '300ZX', 1992);
</pre>

<h3 id="Propiedad_del_objeto_que_en_sí_mismo_es_otro_objeto">Propiedad del objeto que en sí mismo es otro objeto</h3>

<p>Supongamos que defines un objeto llamado <code>Person</code> de la siguiente manera:</p>

<pre class="brush: js notranslate">function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
</pre>

<p>Y luego creas una instancia de dos nuevos objetos <code>Person</code> de la siguiente manera:</p>

<pre class="brush: js notranslate">var rand = new Person('Rand McNally', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
</pre>

<p>Luego, puedes reescribir la definición de <code>Car</code> para incluir una propiedad para <code>owner</code> (propietario en español) que tome un objeto <code>Person</code>, de la siguiente manera:</p>

<pre class="brush: js notranslate">function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
</pre>

<p>Para crear instancias de los nuevos objetos, utiliza lo siguiente:</p>

<pre class="brush: js notranslate">var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
</pre>

<p>En lugar de pasar una cadena literal o un valor entero al crear los nuevos objetos, las declaraciones anteriores pasan los objetos <code>rand</code> y <code>ken</code> como parámetros para los propietarios. Para conocer el nombre del propietario de <code>car2</code>, puedes acceder a la siguiente propiedad:</p>

<pre class="brush: js notranslate">car2.owner.name
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-new-operator', 'El operador new')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>



<p>{{Compat("javascript.operators.new")}}</p>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{JSxRef("Function", "Funciones")}}</li>
 <li>{{jsxref("Reflect.construct()")}}</li>
 <li>{{jsxref("Object.prototype")}}</li>
</ul>
