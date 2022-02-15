---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Map
  - Reference
  - Polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Map
original_slug: Web/JavaScript/Reference/Global_Objects/Map
browser-compat: javascript.builtins.Map
---
<div>
<div>{{JSRef}}</div>
</div>

<p><strong><code>Map</code></strong> 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者{{Glossary("Primitive", "原始值")}}) 都可以作为一个键或一个值。</p>

<dl>
</dl>

<h2 id="描述">描述</h2>

<p>一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  {{jsxref("Statements/for...of", "for...of")}} 循环在每次迭代后会返回一个形式为[key，value]的数组。</p>

<h3 id="键的相等Key_equality">键的相等(Key equality)</h3>

<ul>
 <li>键的比较是基于 <code><a href="/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#零值相等">sameValueZero</a></code> 算法：</li>
 <li>{{jsxref("NaN")}} 是与 <code>NaN</code> 相等的（虽然 <code>NaN !== NaN</code>），剩下所有其它的值是根据 <code>===</code> 运算符的结果判断是否相等。</li>
 <li>在目前的ECMAScript规范中，<code>-0</code>和<code>+0</code>被认为是相等的，尽管这在早期的草案中并不是这样。有关详细信息，请参阅<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#浏览器兼容性">浏览器兼容性</a> 表中的“Value equality for -0 and 0”。</li>
</ul>

<h3 id="Objects_和_maps_的比较">Objects 和 maps 的比较</h3>

<p>{{jsxref("Object", "Objects")}} 和 <code>Maps</code> 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成 <code>Maps</code> 使用。不过 <code>Maps</code> 和 <code>Objects</code> 有一些重要的区别，在下列情况里使用 <code>Map</code> 会是更好的选择：</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row"></th>
   <th scope="col">Map</th>
   <th scope="col">Object</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">意外的键</th>
   <td><code>Map</code> 默认情况不包含任何键。只包含显式插入的键。</td>
   <td>
    <p>一个 <code>Object</code> 有一个原型, 原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。</p>

    <div class="note">
    <p><strong>备注：</strong>虽然 ES5 开始可以用 <code>Object.create(null)</code> 来创建一个没有原型的对象，但是这种用法不太常见。</p>
    </div>
   </td>
  </tr>
  <tr>
   <th scope="row">键的类型</th>
   <td>一个 <code>Map</code>的键可以是<strong>任意值</strong>，包括函数、对象或任意基本类型。</td>
   <td>一个<code>Object</code> 的键必须是一个 {{jsxref("String")}} 或是{{jsxref("Symbol")}}。</td>
  </tr>
  <tr>
   <th scope="row">键的顺序</th>
   <td>
    <p><code>Map</code> 中的 key 是有序的。因此，当迭代的时候，一个 <code>Map</code> 对象以插入的顺序返回键值。</p>
   </td>
   <td>
    <p>一个 <code>Object</code> 的键是无序的</p>

    <div class="note">
    <p><strong>备注：</strong>自ECMAScript 2015规范以来，对象<em>确实</em>保留了字符串和Symbol键的创建顺序； 因此，在只有字符串键的对象上进行迭代将按插入顺序产生键。</p>
    </div>
   </td>
  </tr>
  <tr>
   <th scope="row">Size</th>
   <td> <code>Map</code> 的键值对个数可以轻易地通过{{jsxref("Map.prototype.size", "size")}} 属性获取</td>
   <td><code>Object</code> 的键值对个数只能手动计算</td>
  </tr>
  <tr>
   <th scope="row">迭代</th>
   <td><code>Map</code> 是 <a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable</a> 的，所以可以直接被迭代。</td>
   <td>迭代一个<code>Object</code>需要以某种方式获取它的键然后才能迭代。</td>
  </tr>
  <tr>
   <th scope="row">性能</th>
   <td>
    <p>在频繁增删键值对的场景下表现更好。</p>
   </td>
   <td>
    <p>在频繁添加和删除键值对的场景下未作出优化。</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="构造函数">构造函数</h2>

<dl>
 <dt>{{jsxref("Global_Objects/Map/Map", "Map()")}}</dt>
 <dd>创建 <code>Map</code> 对象</dd>
</dl>

<h2 id="属性">属性</h2>

<dl>
 <dt><code>Map.length</code></dt>
 <dd>属性 length 的值为 0 。<br>
 想要计算一个<code>Map</code> 中的条目数量， 使用 {{jsxref("Map.prototype.size")}}.</dd>
 <dt>{{jsxref("Map.@@species", "get Map[@@species]")}}</dt>
 <dd>本构造函数用于创建派生对象。</dd>
 <dt>{{jsxref("Map.prototype")}}</dt>
 <dd>表示 <code>Map</code> 构造器的原型。 允许添加属性从而应用于所有的 <code>Map</code> 对象。</dd>
</dl>

<h2 id="Map_实例"><code>Map</code> 实例</h2>

<p>所有的 <code>Map</code> 对象实例都会继承 {{jsxref("Map.prototype")}}。</p>

<h3 id="属性_2">属性</h3>

<p>{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/Map/prototype','属性')}}</p>

<h3 id="方法">方法</h3>

<p>{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/Map/prototype','方法')}}</p>

<h2 id="示例">示例</h2>

<h3 id="使用_Map_对象">使用 <code>Map</code> 对象</h3>

<pre class="brush: js">let myMap = new Map();

let keyObj = {};
let keyFunc = function() {};
let keyString = 'a string';

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键keyObj关联的值"
myMap.get(keyFunc);      // "和键keyFunc关联的值"

myMap.get('a string');   // "和键'a string'关联的值"
                         // 因为keyString === 'a string'
myMap.get({});           // undefined, 因为keyObj !== {}
myMap.get(function() {}); // undefined, 因为keyFunc !== function () {}</pre>

<h3 id="将_NaN_作为_Map_的键">将 <code>NaN</code> 作为 <code>Map</code> 的键</h3>

<p><code>NaN</code> 也可以作为<code>Map</code>对象的键。虽然 <code>NaN</code> 和任何值甚至和自己都不相等(<code>NaN !== NaN</code> 返回true)，但下面的例子表明，<code>NaN</code>作为Map的键来说是没有区别的:</p>

<pre class="brush: js">let myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

let otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"
</pre>

<h3 id="使用_for..of_方法迭代_Map">使用 <code>for..of</code> 方法迭代 <code>Map</code></h3>

<p><code>Map</code>可以使用<code>for..of</code>循环来实现迭代：</p>

<pre class="brush: js">let myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (let [key, value] of myMap) {
  console.log(key + " = " + value);
}
// 将会显示两个log。一个是"0 = zero"另一个是"1 = one"

for (let key of myMap.keys()) {
  console.log(key);
}
// 将会显示两个log。 一个是 "0" 另一个是 "1"

for (let value of myMap.values()) {
  console.log(value);
}
// 将会显示两个log。 一个是 "zero" 另一个是 "one"

for (let [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// 将会显示两个log。 一个是 "0 = zero" 另一个是 "1 = one"</pre>

<h3 id="使用_forEach_方法迭代_Map">使用 <code>forEach()</code> 方法迭代 <code>Map</code></h3>

<p><code>Map</code>也可以通过<code>forEach()</code>方法迭代：</p>

<pre class="brush: js">myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
})
// 将会显示两个logs。 一个是 "0 = zero" 另一个是 "1 = one"
</pre>

<h3 id="Map_与数组的关系"><code>Map</code> 与数组的关系</h3>

<pre class="brush: js">let kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]
</pre>

<h3 id="复制或合并_Maps">复制或合并 <code>Maps</code></h3>

<p>Map 能像数组一样被复制：</p>

<pre class="brush: js">let original = new Map([
  [1, 'one']
]);

let clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用
</pre>

<div class="note">
  <p><strong>备注：</strong>请记住，<em>数据本身</em>未被克隆。</p>
</div>

<p>Map对象间可以进行合并，但是会保持键的唯一性。</p>

<pre class="brush: js">let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three</pre>

<p>Map对象也能与数组合并：</p>

<pre class="brush: js">let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
let merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three</pre>

<h2 id="使用说明">使用说明</h2>

<p>请注意！为Map设置对象属性也是可以的，但是可能引起大量的混乱。</p>

<p>所以，你还是<em>可以这样做.</em>..</p>

<pre class="brush: js example-bad">let wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
</pre>

<p>...但是，这样做的话，它的行为会不符合预期:</p>

<pre class="brush: js example-bad">wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }</pre>

<p>无论如何，和正确用法比较起来，几乎没有什么不同: </p>

<pre class="brush: js example-good">let myMap = new Map()
myMap.set('bla','blaa')
myMap.set('bla2','blaa2')
console.log(myMap)  // Map { 'bla' =&gt; 'blaa', 'bla2' =&gt; 'blaa2' }

myMap.has('bla')    // true
myMap.delete('bla') // true
console.log(myMap)  // Map { 'bla2' =&gt; 'blaa2' }</pre>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-map-objects', 'Map')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("javascript.builtins.Map")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
