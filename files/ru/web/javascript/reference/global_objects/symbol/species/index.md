---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
tags:
  - ECMAScript6
  - Experimental
  - JavaScript
  - Свойство
  - Символы
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/species
---
<div>{{JSRef}}</div>

<p><code><strong>Symbol.species</strong></code><strong> —</strong> известный символ, позволяющий определить конструктор, использующийся для создания порождённых объектов.</p>

<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Описание">Описание</h2>

<p>Свойство <code><strong>Symbol.species</strong></code>, содержащее аксессор (геттер), позволяет подклассам переопределить конструктор, используемый по умолчанию для создания новых объектов.</p>

<h2 id="Примеры">Примеры</h2>

<p>Вам может понадобиться возвращать объекты типа {{jsxref("Array")}} в методах вашего производного класса <code>MyArray</code>. Например, при использовании метода вроде {{jsxref("Array.map", "map()")}}, использующего конструктор по умолчанию, вам может потребоваться возвращать объект родительского типа <code>Array</code>, вместо <code>MyArray</code>. Символ <code><strong>species</strong></code> позволит вам это сделать:</p>

<pre class="brush: js">class MyArray extends Array {
  // Перегружаем species для использования родительского конструктора Array
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x =&gt; x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-symbol.species', 'Symbol.species')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Изначальное определение.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-symbol.species', 'Symbol.species')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Map.@@species", "Map[@@species]")}}</li>
 <li>{{jsxref("Set.@@species", "Set[@@species]")}}</li>
</ul>
