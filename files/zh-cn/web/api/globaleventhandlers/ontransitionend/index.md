---
title: GlobalEventHandlers.ontransitionend
slug: Web/API/GlobalEventHandlers/ontransitionend
translation_of: Web/API/GlobalEventHandlers/ontransitionend
---
<div>{{APIRef("CSS3 Transitions")}}</div>

<p>{{event("transitionend")}} 事件的事件处理函数，在某个 <a href="/en-US/docs/Web/CSS/CSS_Transitions">CSS transition</a> 完成时触发。</p>

<div class="note">
<p>如果在 transition 完成前，该 transition 已从目标节点上移除，那么 {{event("transitionend")}} 将不会被触发。一种可能的情况是修改了目标节点的 {{cssxref("transition-property")}} 属性，另一种可能的情况是 {{cssxref("display")}} 属性被设为 <code>"none"</code>。</p>
</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <em>transitionEndHandler</em> = <em>target</em>.ontransitionend;

<em>target</em>.ontransitionend = <em>{{jsxref("Function")}}</em>
</pre>

<h3 id="值">值</h3>

<p>一个 {{jsxref("Function")}}，该函数会在 {{event("transitionend")}} 事件发生时被触发，表示目标节点的 CSS transition 已经完成。目标节点可能是一个 HTML 元素 ({{domxref("HTMLElement")}})，document ({{domxref("Document")}})，或者 window ({{domxref("Window")}})。该函数接受一个参数：一个描述该事件的 {{domxref("TransitionEvent")}} 对象；其 {{domxref("TransitionEvent.elapsedTime")}} 属性值与 {{cssxref("transition-duration")}} 的值一致。</p>

<div class="note">
<p><code>elapsedTime</code> 并不包括 transition 效果开始前的时间，也就是说，{{cssxref("transition-delay")}} 属性并不会影响 <code>elapsedTime</code>的值，其在延迟结束、动画开始之时，值为零。</p>
</div>

<h2 id="示例">示例</h2>

<p>本例中，我们使用了 {{event("transitionrun")}} 和 {{event("transitionend")}} 事件来监测 transition 的开始和结束，从而在 transition 的过程中更新文本。这也可以被用来触发动画或者其它效果来实现连锁反应。</p>

<h3 id="HTML_内容">HTML 内容</h3>

<p>这里简单地创建了一个 {{HTMLElement("div")}}，我们将使用 CSS 来改变其大小和颜色。</p>

<pre class="brush: html;">&lt;div class="box"&gt;&lt;/div&gt;
</pre>

<h3 id="CSS_内容">CSS 内容</h3>

<p>以下为 CSS 样式，并添加了 transition 属性。当鼠标悬浮时，盒子大小和颜色会发生变化，而且还会转动。</p>

<pre class="brush: css; highlight:[13,14]">.box {
  margin-left: 70px;
  margin-top: 30px;
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000FF;
  color: #FFFFFF;
  padding: 20px;
  font: bold 1.6em "Helvetica", "Arial", sans-serif;
  -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s, color 2s;
  transition: width 2s, height 2s, background-color 2s, transform 2s, color 2s;
}

.box:hover {
  background-color: #FFCCCC;
  color: #000000;
  width: 200px;
  height: 200px;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</pre>

<h3 id="JavaScript_内容">JavaScript 内容</h3>

<p>接下来，我们需要事件处理函数以在 transition 发生和结束时修改文本内容。</p>

<pre class="brush: js">let box = document.querySelector(".box");
box.ontransitionrun = function(event) {
  box.innerHTML = "Zooming...";
}
box.ontransitionend = function(event) {
  box.innerHTML = "Done!";
}
</pre>

<h3 id="效果">效果</h3>

<p>最后的效果如下：</p>

<p>{{EmbedLiveSample('Example', 600, 280)}}</p>

<p>注意观察当鼠标悬浮在元素上以及移出时发生的变化。</p>

<h2 id="规范">规范</h2>

<table class="spectable standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transitions','#ontransitionend','ontransitionend')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.GlobalEventHandlers.ontransitionend")}}</p>

<h2 id="另见">另见</h2>

<ul>
 <li>触发此事件处理函数的 {{event("transitionend")}} 事件。</li>
 <li>{{domxref("TransitionEvent")}}</li>
 <li>在transition 开始时触发的 {{event("transitionrun")}} 事件。</li>
</ul>
