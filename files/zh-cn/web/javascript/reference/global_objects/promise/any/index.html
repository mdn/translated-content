---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
tags:
  - Experimental
  - JavaScript
  - Method
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/any
---
<p>{{JSRef}}</p>

<p><code>Promise.any()</code> 接收一个由 {{JSxRef("Promise")}} 所组成的可迭代对象，该方法会返回一个新的 <code>promise</code>，一旦可迭代对象内的任意一个 <code>promise</code> 变成了兑现状态，那么由该方法所返回的 <code>promise</code> 就会变成兑现状态，并且它的兑现值就是可迭代对象内的首先兑现的 <code>promise</code> 的兑现值。如果可迭代对象内的 <code>promise</code> 最终都没有兑现（即所有 <code>promise</code> 都被拒绝了），那么该方法所返回的 <code>promise</code> 就会变成拒绝状态，并且它的拒因会是一个 {{JSxRef("Global_Objects/AggregateError", "AggregateError")}} 实例，这是 {{JSxRef("Error")}} 的子类，用于把单一的错误集合在一起。

<div class="warning">
<p><strong>警告：</strong><code>Promise.any()</code> 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 <a href="https://github.com/tc39/proposal-promise-any">TC39 第四阶段草案（Stage 4）</a></p>
</div>

<h2 id="语法">语法</h2>

<pre>Promise.any(<var>iterable</var>);</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>iterable</code></dt>
 <dd>一个<a href="/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">可迭代</a>的对象，例如 <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<ul>
 <li>如果传入了一个空的可迭代对象，那么就会返回一个已经被拒的 <code>promise</code></li>
 <li>如果传入了一个不含有 <code>promise</code> 的可迭代对象，那么就会返回一个异步兑现的 <code>promise</code></li>
 <li>其余情况下都会返回一个处于等待状态的 <code>promise</code>。如果可迭代对象中的任意一个 <code>promise</code> 兑现了，那么这个处于等待状态的 <code>promise</code> 就会异步地（调用栈为空时）切换至兑现状态。如果可迭代对象中的所有 <code>promise</code> 都被拒绝了，那么这个处于等待状态的 <code>promise</code> 就会异步地切换至被拒状态。</li>
</ul>

<h2 id="说明">说明</h2>

<p>该方法用于获取首个兑现的 <code>promise</code> 的值。只要有一个 <code>promise</code> 兑现了，那么此方法就会提前结束，而不会继续等待其他的 <code>promise</code> 全部敲定。</p>

<p>不像 {{JSxRef("Promise.all()")}} 会返回一组兑现值那样，我们只能得到一个兑现值（假设至少有一个 <code>promise</code> 兑现）。当我们只需要一个 <code>promise</code> 兑现，而不关心是哪一个兑现时此方法很有用的。</p>

<p>同时，也不像 {{JSxRef("Promise.race()")}} 总是返回第一个敲定值（兑现或拒绝）那样，这个方法返回的是第一个<em>兑现的</em>值。这个方法将会忽略掉所有的被拒绝的 <code>promise</code>，直到第一个 <code>promise</code> 兑现。</p>

<h3 id="兑现（fulfillment）">兑现（Fulfillment）</h3>

<p>该方法所返回的 <code>promise</code> 会以可迭代对象内首个兑现的 <code>promise</code> 的兑现值来作为它自己的兑现值，或者会以可迭代对象内首个非 <code>promise</code> 值来作为它自己的兑现值，该方法不会关心其他的 <code>promise</code> 是兑现了还是被拒了。</p>

<ul>
 <li>如果传入的可迭代对象是非空的，那么当可迭代对象内的任意一个 <code>promise</code> 兑现后，或者当可迭代对象内存在非 <code>promise</code> 值时，该方法所返回的 <code>promise</code> 都会异步的变成兑现状态。</li>
</ul>

<h3 id="拒绝（rejection）">拒绝（Rejection）</h3>

<p>如果可迭代对象内所有的 <code>promises</code> 都被拒绝了，那么该方法所返回的 <code>promise</code> 就会异步的切换至被拒状态，并用一个 {{JSxRef("AggregateError")}}（继承自  {{JSxRef("Error")}}）实例来作为它的拒因。它包含一个 <code>errors</code> 属性，该属性是一个用于存储拒因的数组。

<ul>
  <li>如果传入了一个空的可迭代数组，那么该方法就会返回一个已经被拒 <code>promise</code>，其拒因是一个 <code>AggregateError</code> 实例，该实例的 <code>errors</code> 属性会是一个空数组。</li>
</ul>

<h2 id="示例">示例</h2>

<h3 id="First_to_fulfil">First to fulfil</h3>

<p>如果可迭代数组内的任意一个 <code>promise</code> 兑现了，那么该方法所返回的 <code>promise</code> 也会切换至兑现状态，哪怕首个敲定的 <code>promise</code> 是被拒的。不同的是，{{jsxref("Promise.race()")}} 所返回的 <code>promise</code> 的状态会跟随首个敲定的 <code>promise</code> 的状态。</p>

<pre class="brush: js">const pErr = new Promise((resolve, reject) =&gt; {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 100, "很快完成");
});

Promise.any([pErr, pSlow, pFast]).then((value) =&gt; {
  console.log(value);
  // pFast fulfils first
})
// 期望输出: "很快完成"
</pre>

<h3 id="Rejections_with_AggregateError">Rejections with AggregateError</h3>

<p>如果没有 <code>promise</code> 被兑现，那么 <code>Promise.any()</code> 所返回的 <code>promise</code> 就会切换至被拒状态，并以 {{jsxref("AggregateError")}} 实例来作为拒因。</p>

<pre class="brush: js">const pErr = new Promise((resolve, reject) =&gt; {
  reject('总是失败');
});

Promise.any([pErr]).catch((err) =&gt; {
  console.log(err);
})
// 期望输出: "AggregateError: No Promise in Promise.any was resolved"
</pre>

<h3 id="显示第一张已加载的图片">显示第一张已加载的图片</h3>

<p>在这个例子，我们有一个获取图片并返回 blob 的函数，我们使用 <code>Promise.any()</code> 来获取一些图片并显示第一张有效的图片（即最先 resolved 的那个 promise）。</p>

<pre class="brush: js">function fetchAndDecode(url) {
  return fetch(url).then(response =&gt; {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
}

let coffee = fetchAndDecode('coffee.jpg');
let tea = fetchAndDecode('tea.jpg');

Promise.any([coffee, tea]).then(value =&gt; {
  let objectURL = URL.createObjectURL(value);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e =&gt; {
  console.log(e.message);
});</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{JSxRef("Promise")}}</li>
 <li>{{JSxRef("Promise.all()")}}</li>
 <li>{{JSxRef("Promise.race()")}}</li>
</ul>
