---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
tags:
  - API
  - CSSOM View
  - Method
  - Refrence
  - 方法
translation_of: Web/API/Element/getBoundingClientRect
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Element.getBoundingClientRect()</strong></code> 方法返回元素的大小及其相对于视口的位置。</p>

<p>如果是标准盒子模型，元素的尺寸等于<code>width/height</code> + <code>padding</code> + <code>border-width</code>的总和。如果<code>box-sizing: border-box</code>，元素的的尺寸等于 <code>width/height</code>。</p>

## 语法

```js
domRect = element.getBoundingClientRect();
```

### 值

<p>返回值是一个 {{domxref("DOMRect")}} 对象，这个对象是由该元素的 {{domxref("Element.getClientRects", "getClientRects()")}} 方法返回的一组矩形的集合，就是该元素的 CSS 边框大小。返回的结果是包含完整元素的最小矩形，并且拥有<code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>x</code>, <code>y</code>, <code>width</code>, 和 <code>height</code>这几个以像素为单位的只读属性用于描述整个边框。除了<code>width</code> 和 <code>height</code> 以外的属性是相对于视图窗口的左上角来计算的。</p>

<p><img alt="DOMRect 示例图" src="https://mdn.mozillademos.org/files/15087/rect.png" style="float: right; height: 300px; width: 300px;"><span>空边框盒（译者注：没有内容的边框）会被忽略。如果所有的元素边框都是空边框，那么这个矩形给该元素返回的 </span><code>width</code><span>、</span><code>height</code><span> 值为 0，</span><code>left</code><span>、</span><code>top</code><span> 值为第一个 CSS 盒子（按内容顺序）的 top-left 值。</span></p>

<p>当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，也就是说，当滚动位置发生了改变，top和left属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给top、left属性值加上当前的滚动位置（通过 window.scrollX 和 window.scrollY），这样就可以获取与当前的滚动位置无关的值。</p>

<h3 id="跨浏览器兼容">跨浏览器兼容</h3>

<p>如果需要更好的跨浏览器兼容性，请使用 {{domxref("window.pageXOffset")}} 和 {{domxref("window.pageYOffset")}} 代替 <code>window.scrollX</code> 和 <code>window.scrollY</code>。不能访问这些属性的脚本可以使用下面的代码：</p>

<pre class="brush: js notranslate">// For scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft
// For scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.scrollTop == 'number' ? t : document.body).scrollTop</pre>

## 示例

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
for (var key in rect) {
  if(typeof rect[key] !== 'function') {
    let para = document.createElement('p');
    para.textContent  = `${ key } : ${ rect[key] }`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample('Basic', '100%', 640)}}

<h2 id="规范">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSSOM View", "#dom-element-getboundingclientrect", "Element.getBoundingClientRect()")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h3 id="备注">备注</h3>

<p>该API返回的 <code>DOMRect</code> 对象在现代浏览器中可以被修改。而对于返回值为 <code>DOMRectReadOnly</code> 的旧版本，返回值并不能被修改。在IE和Edge浏览器中，无法向他们返回的 <a href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx"><code>ClientRect</code></a> 对象添加缺失的属性，对象可以防止 <code>x</code> 和 <code>y</code> 的回填。</p>

<p>由于兼容性问题（见下文），尽量仅使用 <code>left</code>, <code>top</code>, <code>right</code>, 和 <code>bottom</code>.属性是最安全的。</p>

<p>返回的 <code>DOMRect</code>对象中的属性不是自己的属性。 当使用<code>in</code> 和 <code>for...in</code> 运算符时能成功查找到返回的属性，但使用其他API（例如Object.keys（））查找时将失败。 而且，ES2015和更高版本的功能（如Object.assign（）和对象rest/spread）将无法复制返回的属性。</p>

<pre class="brush: js notranslate">rect = elt.getBoundingClientRect()
// The result in emptyObj is {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{width, ...emptyObj} = rect
</pre>

<p><code>DOMRect</code> 中的 <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code> 属性是使用对象的其他属性的值来计算获得的。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<div>{{Compat("api.Element.getBoundingClientRect")}}</div>

<h2 id="参考资料">参考资料</h2>

<ul>
 <li>{{domxref("Element.getClientRects", "getClientRects()")}}</li>
 <li><a href="https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx">MSDN: <code>getBoundingClientRect</code></a></li>
 <li><a href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx">MSDN: <code>ClientRect</code></a>, 更早版本的 <code>DOMRect</code></li>
</ul>
