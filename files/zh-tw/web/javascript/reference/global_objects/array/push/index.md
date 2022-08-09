---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - 陣列
translation_of: Web/JavaScript/Reference/Global_Objects/Array/push
---
<div>{{JSRef}}</div>

<p><code><strong>push()</strong></code> 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。</p>

<div>{{EmbedInteractiveExample("pages/js/array-push.html")}}</div>



<h2 id="語法">語法</h2>

<pre class="syntaxbox"><var>arr</var>.push(<var>element1</var>[, ...[, <var>elementN</var>]])</pre>

<h3 id="參數">參數</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>欲添加至陣列末端的元素。</dd>
</dl>

<h3 id="回傳值">回傳值</h3>

<p>呼叫此方法之物件的新 {{jsxref("Array.length", "length")}} 屬性值。</p>

<h2 id="描述">描述</h2>

<p><code>push</code> 方法會將一或多個值加入至一個陣列中。</p>

<p><code>push</code> 方法被刻意設計為具通用性；此方法可以藉由 {{jsxref("Function.call", "call()")}} 或 {{jsxref("Function.apply", "apply()")}} 應用於類似陣列的物件上。<code>push</code> 方法憑借著物件的 <code>length</code> 屬性來判斷從何處開始插入給定的值。如果 <code>length</code> 屬性無法被轉為數字，則索引值會使用 0。這包括了 <code>length</code> 可能不存在的狀況，在這個情況下 <code>length</code> 屬性也將被建立於物件中。</p>

<p>唯一的原生類陣列（array-like）物件為{{jsxref("Global_Objects/String", "字串", "", 1)}}，但他們不適合用於此方法，因為字串是不可變的（immutable）。</p>

<h2 id="範例">範例</h2>

<h3 id="將複數個元素添加至陣列">將複數個元素添加至陣列</h3>

<p>以下的程式碼會建立含有兩個元素的陣列 <code>sports</code>，接著再增加兩個元素至陣列中。新的長度以變數 <code>total</code> 表示。</p>

<pre class="brush: js">var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
</pre>

<h3 id="合併兩個陣列">合併兩個陣列</h3>

<p>這個範例使用 {{jsxref("Function.apply", "apply()")}} 自第二個陣列中增加所有的元素至第一個陣列。</p>

<p>如果第二個陣列（範例中的 <code>moreVegs</code>）非常大，就不要使用這個方法。因為一個函式能取得的參數之最大數量是受到實作限制的。詳細請參閱 {{jsxref("Function.apply", "apply()")}}。</p>

<pre class="brush: js">var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
</pre>

<h3 id="以類陣列（array-like）的方式操作物件">以類陣列（array-like）的方式操作物件</h3>

<p>正如上面所提到的，<code>push</code> 被刻意設計為具通用性，我們可以善用這個優勢來處理物件。<code>Array.prototype.push</code> 可以在物件上運作良好，如本範例所示。請注意，我們不會建立一個陣列來儲存收集到的物件。相反地，我們將物件集合（collection）儲存於物件自己身上，並使用 <code>call</code> 來呼叫<code>Array.prototype.push</code> 使其認為我們正在處理一個陣列，讓方法可以繼續運作。感謝 JavaScript 允許我們使用這個方式去執行上下文。</p>

<pre class="brush: js">var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
</pre>

<p>請注意雖然 <code>obj</code> 不是一個陣列，但 <code>push</code> 方法成功增加了 <code>obj</code> 的 <code>length</code> 屬性，就像我們在處理一個真正的陣列一樣。</p>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器支援度">瀏覽器支援度</h2>

<div>


<p>{{Compat("javascript.builtins.Array.push")}}</p>
</div>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("Array.prototype.pop()")}}</li>
 <li>{{jsxref("Array.prototype.shift()")}}</li>
 <li>{{jsxref("Array.prototype.unshift()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
