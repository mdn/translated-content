---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - 原型
  - 參見
  - 填充工具
  - 方法
translation_of: Web/JavaScript/Reference/Global_Objects/Array/filter
---
<div>{{JSRef}}</div>

<p><code><strong>filter()</strong></code> 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。</p>

<div>{{EmbedInteractiveExample("pages/js/array-filter.html")}}</div>



<h3 id="ES6_版本">ES6 版本</h3>

<pre class="brush: js">const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word =&gt; word.length &gt; 6);

// Filtered array longWords is ["exuberant", "destruction", "present"]
</pre>

<h2 id="語法">語法</h2>

<pre><var>var newArray = arr</var>.filter(<var>callback(element[, index[, array]])</var>[, <var>thisArg</var>])</pre>

<h3 id="參數">參數</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>此函式為一個斷言，用於測試陣列中的每個元素。回傳值為 <code>true</code> 時將當前的元素保留至新陣列中，若為 <code>false</code> 則不保留。可傳入三個參數：
  <dl>
    <dt><code>element</code></dt>
    <dd>原陣列目前所迭代處理中的元素。</dd>
    <dt><code>index</code>{{optional_inline}}</dt>
    <dd>原陣列目前所迭代處理中的元素之索引。</dd>
    <dt><code>array</code>{{optional_inline}}</dt>
    <dd>呼叫 <code>filter</code> 方法的陣列。</dd>
  </dl>
 </dd>
 <dt><code>thisArg</code> {{optional_inline}}</dt>
 <dd>可選的。執行 <code>callback</code> 回呼函式的 <code>this</code> 值。</dd>
</dl>

<h3 id="回傳值">回傳值</h3>

<p>一個元素為通過回呼函式檢驗的新陣列。</p>

<h2 id="描述">描述</h2>

<p><code>filter()</code> 會將所有陣列中的元素分別傳入一次至 <code>callback</code> 函式當中，並將所有傳入此回呼函式並得到回傳值為 <a href="/zh-TW/docs/Glossary/Truthy">Truthy</a> 的元素建構成一個新的陣列。<code>callback</code> 函式只會於陣列目前迭代之索引有指派值時被呼叫，回呼函式不會在該陣列索引已被刪除或從未被賦值時被調用。原始陣列中沒有通過 <code>callback</code> 檢驗的元素會被簡單的跳過，且不會被包含在新建立的陣列中。</p>

<p><code>callback</code> 函式於被調用時會傳入三個參數：</p>

<ol>
 <li>元素值</li>
 <li>元素之索引</li>
 <li>被迭代的陣列物件</li>
</ol>

<p>若有提供 <code>thisArg</code> 參數予 <code>filter</code> 方法，<code>thisArg</code> 將會被當作回呼函式的 <code>this</code> 值，否則 <code>this</code> 會是 <code>undefined</code>。<code>callback</code> 的最終 <code>this</code> 值是依據<a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/this">函式的 <code>this</code> 規則</a>來決定。</p>

<p><code>filter()</code> 不會修改呼叫它的原始陣列。</p>

<p>由 <code>filter()</code> 方法所回傳之新陣列的範圍，於 <code>callback</code> 函式第一次被調用之前就已經被設定。而在呼叫 <code>filter()</code> 之後才加至原始陣列中的元素，將不會傳入 <code>callback</code> 當中。假如原始陣列中元素的值改變或被刪除了，則 <code>callback</code> 得到此元素的值將會是 <code>filter()</code> 傳入元素當下的值。而被刪除的原始陣列元素並不會被迭代到。</p>

<h2 id="範例">範例</h2>

<h3 id="過濾所有的小數字">過濾所有的小數字</h3>

<p>以下範例會用 <code>filter()</code> 建立一個把所有小於 10 的元素都移掉的陣列。</p>

<pre class="brush: js">function isBigEnough(value) {
  return value &gt;= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
</pre>

<h3 id="從_JSON_過濾無效的項目">從 JSON 過濾無效的項目</h3>

<p>以下範例會用 <code>filter()</code> 建立一個把非零 numeric <code>id</code> 的元素都過濾掉的的 JSON。</p>

<pre class="brush: js">var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj!== undefined &amp;&amp; typeof(obj) === 'number' &amp;&amp; !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id)) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

<code>console.log('過濾好的陣列\n', arrByID);
// 過濾好的陣列
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('無效的元素數量 = ', invalidEntries);
// 無效的元素數量 = 4</code></pre>

<h3 id="在陣列中搜尋">在陣列中搜尋</h3>

<p>下面範例使用 <code>filter()</code> 去過濾符合搜尋條件的陣列內容。</p>

<pre class="brush: js">var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * 陣列透過搜尋條件（查詢）過濾物件
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) &gt; -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']</pre>

<h3 id="ES2015_實作方式">ES2015 實作方式</h3>

<pre class="brush: js">const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * 陣列透過搜尋條件（查詢）過濾物件
 */
const filterItems = (query) =&gt; {
  return fruits.filter((el) =&gt;
    el.toLowerCase().indexOf(query.toLowerCase()) &gt; -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

</pre>

<h2 id="Polyfill">Polyfill</h2>

<p><code>filter()</code> 在 ECMA-262 第五版時被納入標準；它也許不會出現在該標準的所有實作引擎之中。你可以在你的腳本最前面加入下面的程式碼作為替代方案，讓不支援 <code>filter()</code> 的 ECMA-262 實作引擎能夠使用它。假設 <code>fn.call</code> 是採用 {{jsxref("Function.prototype.bind()")}} 的原始值，這個演算法完全和 ECMA-262 第五版定義的規格相同。</p>

<pre class="brush: js">if (!Array.prototype.filter)
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function') &amp;&amp; this) )
        throw new TypeError();

    var len = this.length &gt;&gt;&gt; 0,
        res = new Array(len), // 預先配置陣列
        c = 0, i = -1;
    if (thisArg === undefined)
      while (++i !== len)
        // 確認物件的鍵值i是否有被設置
        if (i in this)
          if (func(t[i], i, t))
            res[c++] = t[i];
    else
      while (++i !== len)
        // 確認物件的鍵值i是否有被設置
        if (i in this)
          if (func.call(thisArg, t[i], i, t))
            res[c++] = t[i];

    res.length = c; // 將陣列縮至適當大小
    return res;
  };
</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<div>


<p>{{Compat("javascript.builtins.Array.filter")}}</p>
</div>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
