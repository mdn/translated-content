---
title: super
slug: Web/JavaScript/Reference/Operators/super
tags:
  - Clases
  - ECMAScript 2015
  - JavaScript
  - Operador
translation_of: Web/JavaScript/Reference/Operators/super
original_slug: Web/JavaScript/Referencia/Operadores/super
---
<div>{{jsSidebar("Operators")}}</div>

<p>La palabra clave <strong>super</strong> es usada para acceder y llamar funciones del padre de un objeto.</p>

<p>Las expresiones <code>super.prop</code> y <code>super[expr]</code> son válidas en cualquier <a href="/es/docs/Web/JavaScript/Reference/Functions/Method_definitions">definición de método</a> tanto para <a href="/es/docs/Web/JavaScript/Reference/Classes">clases</a> como para <a href="/es/docs/Web/JavaScript/Reference/Operators/Object_initializer">objetos literales</a>.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">// llama al método constructor del objeto padre.
super([arguments]);

// llama cualquier otro método del objeto padre.
super.functionOnParent([arguments]);
</pre>

<h2 id="Descripción">Descripción</h2>

<p>Cuando es usado en un constructor, la palabra clave <code>super</code> aparece  sola lo cual invoca el constructor del objeto padre. En este caso debe usarse antes de que la palabra clave <code>this</code> sea usada. La palabra clave <code>super</code> también puede utilizarse para llamar otras funciones del objeto padre.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="Usando_super_en_clases">Usando <code>super</code> en clases</h3>

<p>Este fragmento de código se toma del <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">ejemplo de clases</a> (<a href="https://googlechrome.github.io/samples/classes-es6/index.html">demo en vivo</a>). Aquí se llama a <code>super()</code> para evitar la duplicación de las partes del constructor que son comunes entre <code>Rectangle</code> y <code>Square</code>.</p>

<pre class="brush: js">class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super necesita ser llamado primero!

    // Aquí, llama al constructor de la clase padre con las longitudes
    // previstas para el ancho y la altura de Rectangle
    super(length, length);

    // Nota: En las clases derivadas, se debe llamar a super() antes de
    // poder usar 'this'. Salir de esto provocará un error de referencia.
    this.name = 'Square';
  }
}</pre>

<h3 id="Super-llamando_a_métodos_estáticos">Super-llamando a métodos estáticos</h3>

<p>También puede llamar a super en métodos estáticos.</p>

<pre class="brush: js">class Rectangle {
  constructor() {}
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); // 'Tengo 4 lados que son todos iguales'
</pre>

<h3 id="Eliminar_propiedades_super_generará_un_error">Eliminar propiedades <code>super</code> generará un error</h3>

<p>No puede usar el <a href="/es/docs/Web/JavaScript/Reference/Operators/delete">operador de eliminación</a> y <code>super.prop</code> o <code>super[expr]</code> para eliminar la propiedad de una clase principal, lanzará {{jsxref("ReferenceError")}}.</p>

<pre class="brush: js">class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // esto es malo
  }
}

new Derived().delete(); // ReferenceError: eliminación no válida que implica 'super'. </pre>

<h3 id="super.prop_no_puede_sobrescribir_las_propiedades_no_modificables"><code>super.prop</code> no puede sobrescribir las propiedades no modificables</h3>

<p>Al definir propiedades que no se pueden escribir, p. Ej. {{jsxref("Object.defineProperty")}}, <code>super</code> no puede sobrescribir el valor de la propiedad.</p>

<pre class="brush: js">class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
  f() {
    super.prop = 2;
  }
}

var x = new X();
x.f(); // TypeError: "prop" es de solo lectura
console.log(x.prop); // 1
</pre>

<h3 id="Usando_super.prop_en_objetos_literales">Usando <code>super.prop</code> en objetos literales</h3>

<p>Super también se puede usar en el <a href="/es/docs/Web/JavaScript/Reference/Operators/Object_initializer">inicializador de objetos / notación literal</a>. En este ejemplo, dos objetos definen un método. En el segundo objeto, <code>super</code> llama al primer método del objeto. Esto funciona con la ayuda de {{jsxref("Object.setPrototypeOf()")}} con el que podemos establecer el prototipo de <code>obj2</code> en <code>obj1</code>, de modo que <code>super</code> pueda encontrar el <code>method1</code> en <code>obj1</code>.</p>

<pre class="brush: js">var obj1 = {
  method1() {
    console.log('method 1');
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
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
   <td>{{SpecName('ES2015', '#sec-super-keyword', 'super')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-super-keyword', 'super')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("javascript.operators.super")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/es/docs/Web/JavaScript/Reference/Classes">Clases</a></li>
</ul>
