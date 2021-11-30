---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
tags:
  - ECMAScript 2015
  - JavaScript
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap
---
<div>{{JSRef}}</div>

<p><strong><code>WeakMap</code></strong> 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。</p>

<p>你可以从这里了解更多关于<code>WeakMap</code>的内容：{{SectionOnPage("/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections", "WeakMap对象")}}.</p>

<h2 id="描述">描述</h2>

<p>WeakMap 的 key 只能是 <code>Object</code> 类型。 {{Glossary("Primitive", "原始数据类型")}} 是不能作为 key 的（比如 {{jsxref("Symbol")}}）。</p>

<h3 id="Why_WeakMap">Why <em>WeakMap</em>?</h3>

<p>在 JavaScript 里，map API 可以通过使其四个 API 方法共用两个数组(一个存放键,一个存放值)来实现。给这种 map 设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。当从该 map 取值的时候，需要遍历所有的键，然后使用索引从存储值的数组中检索出相应的值。</p>

<p>但这样的实现会有两个很大的缺点，首先赋值和搜索操作都是 O(n) 的时间复杂度( n 是键值对的个数)，因为这两个操作都需要遍历全部整个数组来进行匹配。另外一个缺点是可能会导致内存泄漏，因为数组会一直引用着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他任何引用存在了。</p>

<p>相比之下，原生的 WeakMap 持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。原生 WeakMap 的结构是特殊且有效的，其用于映射的 key 只有在其没有被回收时才是有效的。</p>

<p>正由于这样的弱引用，<code>WeakMap</code> 的 key 是不可枚举的 (没有方法能给出所有的 key)。如果key 是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果。因此，如果你想要这种类型对象的 key 值的列表，你应该使用 {{jsxref("Map")}}。</p>

<p>基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。</p>

<h2 id="构造函数">构造函数</h2>

<dl>
  <dt>{{jsxref("WeakMap.prototype.weakMap", "WeakMap()")}}</dt>
  <dd>创建一个新的 <code>WeakMap</code> 对象。</dd>
</dl>

<h2 id="WeakMap_实例">实例方法</h2>

<dl>
  <dt>{{jsxref("WeakMap.prototype.delete", "WeakMap.prototype.delete(key)")}}</dt>
  <dd>删除 WeakMap 中与 <code>key</code> 相关联的值。删除之后，<code>WeakMap.prototype.has(key)</code> 将会返回 <code>false</code>。</dd>
  <dt>{{jsxref("WeakMap.prototype.get", "WeakMap.prototype.get(key)")}}</dt>
  <dd>返回 WeakMap 中与 <code>key</code> 相关联的值，如果 <code>key</code> 不存在则返回 <code>undefined</code>。</dd>
  <dt>{{jsxref("WeakMap.prototype.has", "WeakMap.prototype.has(key)")}}</dt>
  <dd>返回一个布尔值，断言一个值是否已经与 <code>WeakMap</code> 对象中的 <code>key</code> 关联。</dd>
  <dt>{{jsxref("WeakMap.prototype.set", "WeakMap.prototype.set(key, value)")}}</dt>
  <dd>给 <code>WeakMap</code> 中的 <code>key</code> 设置一个 <code>value</code>。该方法返回一个 <code> WeakMap </code> 对象。</dd>
</dl>

<h2 id="示例">示例</h2>

<h3 id="使用_WeakMap">使用 <code>WeakMap</code></h3>

<pre class="brush: js">const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function(){},
      o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value可以是任意值,包括一个对象或一个函数
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个WeakMap对象

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined,wm2中没有o2这个键
wm2.get(o3); // undefined,值就是undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (即使值是undefined)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false
</pre>

<h3 id="实现一_个带有_.clear_方法的类_WeakMap_类">实现一 个带有 .clear() 方法的类 <code>WeakMap</code> 类</h3>

<pre class="brush: js">class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init)
  }
  clear() {
    this._wm = new WeakMap()
  }
  delete(k) {
    return this._wm.delete(k)
  }
  get(k) {
    return this._wm.get(k)
  }
  has(k) {
    return this._wm.has(k)
  }
  set(k, v) {
    this._wm.set(k, v)
    return this
  }
}</pre>

<h2 id="Specifications" name="Specifications">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES6', '#sec-weakmap-objects', 'WeakMap')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-weakmap-objects', 'WeakMap')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>{{Compat("javascript.builtins.WeakMap")}}</div>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li><a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=547941">WeakMap bug at Mozilla</a></li>
 <li><a href="http://fitzgeraldnick.com/weblog/53/">Hiding Implementation Details with ECMAScript 6 WeakMaps</a></li>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
