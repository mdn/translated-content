---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
translation_of: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
---
<div>{{JSRef}}</div>

<p>Типизированный массив<strong><code> Uint8ClampedArray </code></strong>—  это массив,  служащий для хранения 8-битных беззнаковых чисел, обрезаемых до диапазона от 0 до 255. Если значение меньше 0, то оно будет приведено к 0 , и к 255, если оно больше 255. Числа с плавающей точкой округляются с помощью математического округления. Массив инициализируется нулями. После того как значение установлено, вы можете ссылаться на него с помощью методов объекта или через стандартный синтаксис массивов (то есть, брать значения с помощью квадратных скобок). </p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">new Uint8ClampedArray(length);
new Uint8ClampedArray(typedArray);
new Uint8ClampedArray(object);
new Uint8ClampedArray(buffer [, byteOffset [, length]]);</pre>

<p>Для более подробной информации, смотрите <em><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax">TypedArray</a></em>.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}</dt>
 <dd>Возвращает размер элемента в байтах. Для Uint8ClampedArray оно равно 1.</dd>
 <dt>Uint8ClampedArray.length</dt>
 <dd>Static length property whose value is 3. For the actual length (number of elements), see {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}.</dd>
 <dt>{{jsxref("TypedArray.name", "Uint8ClampedArray.name")}}</dt>
 <dd>Returns the string value of the constructor name. In the case of the <code>Uint8ClampedArray</code> type: "Uint8ClampedArray".</dd>
 <dt>{{jsxref("TypedArray.prototype", "Uint8ClampedArray.prototype")}}</dt>
 <dd>Prototype for the <em>TypedArray</em> objects.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{jsxref("TypedArray.from", "Uint8ClampedArray.from()")}}</dt>
 <dd>Creates a new <code>Uint8ClampedArray</code> from an array-like or iterable object. See also {{jsxref("Array.from()")}}.</dd>
 <dt>{{jsxref("TypedArray.of", "Uint8ClampedArray.of()")}}</dt>
 <dd>Creates a new <code>Uint8ClampedArray</code> with a variable number of arguments. See also {{jsxref("Array.of()")}}.</dd>
</dl>

<h2 id="Uint8ClampedArray_prototype"><code>Uint8ClampedArray</code> prototype</h2>

<p>All <code>Uint8ClampedArray</code> objects inherit from {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.</p>

<h3 id="Properties_2">Properties</h3>

<dl>
 <dt><code>Uint8ClampedArray.prototype.constructor</code></dt>
 <dd>Returns the function that created an instance's prototype. This is the <code>Uint8ClampedArray</code> constructor by default.</dd>
 <dt>{{jsxref("TypedArray.prototype.buffer", "Uint8ClampedArray.prototype.buffer")}} {{readonlyInline}}</dt>
 <dd>Returns the {{jsxref("ArrayBuffer")}} referenced by the <code>Uint8ClampedArray</code> Fixed at construction time and thus <strong>read only</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteLength", "Uint8ClampedArray.prototype.byteLength")}} {{readonlyInline}}</dt>
 <dd>Returns the length (in bytes) of the <code>Uint8ClampedArray</code> from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("TypedArray.prototype.byteOffset", "Uint8ClampedArray.prototype.byteOffset")}} {{readonlyInline}}</dt>
 <dd>Returns the offset (in bytes) of the <code>Uint8ClampedArray</code> from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}} {{readonlyInline}}</dt>
 <dd>Returns the number of elements hold in the <code>UintClamped8Array</code>. Fixed at construction time and thus <strong>read only.</strong></dd>
</dl>

<h3 id="Methods_2">Methods</h3>

<dl>
 <dt>{{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}</dt>
 <dd>Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.entries", "Uint8ClampedArray.prototype.entries()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.</dd>
 <dt>{{jsxref("TypedArray.every", "Uint8ClampedArray.prototype.every()")}}</dt>
 <dd>Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.</dd>
 <dt>{{jsxref("TypedArray.fill", "Uint8ClampedArray.prototype.fill()")}}</dt>
 <dd>Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.</dd>
 <dt>{{jsxref("TypedArray.filter", "Uint8ClampedArray.prototype.filter()")}}</dt>
 <dd>Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also {{jsxref("Array.prototype.filter()")}}.</dd>
 <dt>{{jsxref("TypedArray.find", "Uint8ClampedArray.prototype.find()")}}</dt>
 <dd>Returns the found value in the array, if an element in the array satisfies the provided testing function or <code>undefined</code> if not found. See also {{jsxref("Array.prototype.find()")}}.</dd>
 <dt>{{jsxref("TypedArray.findIndex", "Uint8ClampedArray.prototype.findIndex()")}}</dt>
 <dd>Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also {{jsxref("Array.prototype.findIndex()")}}.</dd>
 <dt>{{jsxref("TypedArray.forEach", "Uint8ClampedArray.prototype.forEach()")}}</dt>
 <dd>Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.</dd>
 <dt>{{jsxref("TypedArray.includes", "Uint8ClampedArray.prototype.includes()")}} {{experimental_inline}}</dt>
 <dd>Determines whether a typed array includes a certain element, returning <code>true</code> or <code>false</code> as appropriate. See also {{jsxref("Array.prototype.includes()")}}.</dd>
 <dt>{{jsxref("TypedArray.indexOf", "Uint8ClampedArray.prototype.indexOf()")}}</dt>
 <dd>Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.join", "Uint8ClampedArray.prototype.join()")}}</dt>
 <dd>Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.</dd>
 <dt>{{jsxref("TypedArray.keys", "Uint8ClampedArray.prototype.keys()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.</dd>
 <dt>{{jsxref("TypedArray.lastIndexOf", "Uint8ClampedArray.prototype.lastIndexOf()")}}</dt>
 <dd>Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.map", "Uint8ClampedArray.prototype.map()")}}</dt>
 <dd>Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.</dd>
 <dt>{{jsxref("TypedArray.move", "Uint8ClampedArray.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}</dt>
 <dd>Former non-standard version of {{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduce", "Uint8ClampedArray.prototype.reduce()")}}</dt>
 <dd>Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduceRight", "Uint8ClampedArray.prototype.reduceRight()")}}</dt>
 <dd>Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.</dd>
 <dt>{{jsxref("TypedArray.reverse", "Uint8ClampedArray.prototype.reverse()")}}</dt>
 <dd>Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.</dd>
 <dt>{{jsxref("TypedArray.set", "Uint8ClampedArray.prototype.set()")}}</dt>
 <dd>Stores multiple values in the typed array, reading input values from a specified array.</dd>
 <dt>{{jsxref("TypedArray.slice", "Uint8ClampedArray.prototype.slice()")}}</dt>
 <dd>Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.</dd>
 <dt>{{jsxref("TypedArray.some", "Uint8ClampedArray.prototype.some()")}}</dt>
 <dd>Returns true if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.</dd>
 <dt>{{jsxref("TypedArray.sort", "Uint8ClampedArray.prototype.sort()")}}</dt>
 <dd>Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.</dd>
 <dt>{{jsxref("TypedArray.subarray", "Uint8ClampedArray.prototype.subarray()")}}</dt>
 <dd>Returns a new <code>Uint8ClampedArray</code> from the given start and end element index.</dd>
 <dt>{{jsxref("TypedArray.values", "Uint8ClampedArray.prototype.values()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.</dd>
 <dt>{{jsxref("TypedArray.toLocaleString", "Uint8ClampedArray.prototype.toLocaleString()")}}</dt>
 <dd>Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.</dd>
 <dt>{{jsxref("TypedArray.toString", "Uint8ClampedArray.prototype.toString()")}}</dt>
 <dd>Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.</dd>
 <dt>{{jsxref("TypedArray.@@iterator", "Uint8ClampedArray.prototype[@@iterator]()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> object that contains the values for each index in the array.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// From a length
var uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Uint8ClampedArray([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint8ClampedArray([21, 31]);
var y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8ClampedArray(buffer, 1, 4);
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Superseded by ECMAScript 6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#table-49', 'TypedArray constructors')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Initial definition in an ECMA standard. Specified that <code>new</code> is required.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Compatibility_notes">Compatibility notes</h2>

<p>Starting with ECMAScript 2015 (ES6), <code>Uint8ClampedArray</code> constructors require to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a <code>Uint8ClampedArray</code> constructor as a function without <code>new</code>, will throw a {{jsxref("TypeError")}} from now on.</p>

<pre class="brush: js example-bad">var dv = Uint8ClampedArray([1, 2, 3]);
// TypeError: calling a builtin Uint8ClampedArray constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Uint8ClampedArray([1, 2, 3]);</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("DataView")}}</li>
</ul>
