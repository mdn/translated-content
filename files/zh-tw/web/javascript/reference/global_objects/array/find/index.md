---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
translation_of: Web/JavaScript/Reference/Global_Objects/Array/find
---
<div>{{JSRef}}</div>

<p><code><strong>find()</strong></code> 方法會回傳第一個滿足所提供之測試函式的元素<strong>值</strong>。否則回傳 {{jsxref("undefined")}}。</p>

<div>{{EmbedInteractiveExample("pages/js/array-find.html")}}</div>



<p>也可以參考 {{jsxref("Array.findIndex", "findIndex()")}} 方法，它回傳被找到的元素在陣列中的<strong>索引</strong>，而不是它的值。</p>

<p>If you need to find the position of an element or whether an element exists in an array, use {{jsxref("Array.prototype.indexOf()")}} or {{jsxref("Array.prototype.includes()")}}.</p>

<h2 id="語法">語法</h2>

<pre class="syntaxbox"><var>arr</var>.find(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="參數">參數</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>會處理陣列中每個元素的函數，它使用三個參數：
 <dl>
  <dt><code>element</code></dt>
  <dd>在陣列中正被處理的元素。</dd>
  <dt><code>index</code>{{optional_inline}}</dt>
  <dd>在陣列中正被處理的元素的索引。</dd>
  <dt><code>array</code>{{optional_inline}}</dt>
  <dd>呼叫 <code>find</code> 的陣列。</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code> <code>{{Optional_inline}}</code></dt>
 <dd>執行 <code>callback</code> 函式時被當作 <code>this</code> 的物件。</dd>
</dl>

<h3 id="回傳值">回傳值</h3>

<p>若元素通過測試則為其值；否則為 {{jsxref("undefined")}}。</p>

<h2 id="描述">描述</h2>

<p><code>find</code> 方法會對每個元素執行一次 <code>callback</code> 函式，直到找到一個讓 <code>callback</code> 函式回傳 true 的元素。當元素被找到的時候，<code>find</code> 會立刻回傳該元素，否則 <code>find</code> 會回傳 {{jsxref("undefined")}}。<code>callback</code> 會被使用於陣列索引自 <code>0</code> 至 <code>length - 1</code>，並會被用於每一個的陣列索引，而不僅是那些有賦值的索引。這代表此方法在稀疏陣列（sparse arrays）上的效能可能較其他只存取已賦值索引的方法來的差。</p>

<p><code>callback</code> 函式被呼叫時會傳入三個參數：元素的值、元素索引，以及正被迭代的陣列物件。</p>

<p>如果提供 <code>thisArg</code> 參數予 <code>find</code>，其將會被當作 <code>callback</code> 每次被呼叫的 <code>this</code>。若是沒提供，則會使用 {{jsxref("undefined")}}。</p>

<p><code>find</code> 並不會改變呼叫該方法的陣列。</p>

<p>The range of elements processed by <code>find</code> is set before the first invocation of <code>callback</code>. Elements that are appended to the array after the call to <code>find</code> begins will not be visited by <code>callback</code>. If an existing, unvisited element of the array is changed by <code>callback</code>, its value passed to the visiting <code>callback</code> will be the value at the time that <code>find</code> visits that element's index; elements that are deleted are still visited.</p>

<h2 id="範例">範例</h2>

<h3 id="Find_an_object_in_an_array_by_one_of_its_properties">Find an object in an array by one of its properties</h3>

<pre class="brush: js">var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }</pre>

<h3 id="在陣列中找質數">在陣列中找質數</h3>

<p>以下範例在陣列中找出一個屬於質數的元素，如果裡面不含質數則回傳 {{jsxref("undefined")}}。</p>

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
</pre>

<p>The following examples show that non-existent and deleted elements are visited and that the value passed to the callback is their value when visited.</p>

<pre class="brush: js">// Declare array with no element at index 2, 3 and 4
var a = [0,1,,,,5,6];

// Shows all indexes, not just those that have been assigned values
a.find(function(value, index) {
  console.log('Visited index ' + index + ' with value ' + value);
});

// Shows all indexes, including deleted
a.find(function(value, index) {

  // Delete element 5 on first iteration
  if (index == 0) {
    console.log('Deleting a[5] with value ' + a[5]);
    delete a[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ' + index + ' with value ' + value);
});

</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>這個方法在 ECMAScript 2015 中首次被規範，可能尚未在所有 JavaScript 應用中被實作。你可以使用以下程式片段來 polyfill <code>Array.prototype.find</code>：</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}
</pre>

<p>If you need to support truly obsolete JavaScript engines that don't support <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>, it's best not to polyfill <code>Array.prototype</code> methods at all, as you can't make them non-enumerable.</p>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<div>


<p>{{Compat("javascript.builtins.Array.find")}}</p>
</div>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("Array.prototype.findIndex()")}} – find and return an index</li>
 <li>{{jsxref("Array.prototype.includes()")}} – test whether a value exists in the array</li>
 <li>{{jsxref("Array.prototype.filter()")}} – find all matching elements</li>
 <li>{{jsxref("Array.prototype.every()")}} – test all elements together</li>
</ul>
