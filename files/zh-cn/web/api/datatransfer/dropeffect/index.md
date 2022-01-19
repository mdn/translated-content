---
title: DataTransfer.dropEffect
slug: Web/API/DataTransfer/dropEffect
translation_of: Web/API/DataTransfer/dropEffect
---
<div> {{APIRef("HTML Drag and Drop API")}}</div>

<p><strong><code>DataTransfer.dropEffect</code></strong> 属性控制在拖放操作中给用户的反馈（通常是视觉上的）。它会影响在拖拽过程中光标的手势。例如，当用户 hover 在一个放置目标元素上，浏览器的光标可能会预示了将会发生什么操作。</p>

<p>当 {{domxref("DataTransfer")}} 被创建时， <code>dropEffect</code> 被设置为一个字符串。读这个值时会返回它的当前值。设置这个值时，如果这个新的值是下面列出的值中的一个，这个属性的值就会被设置为这个新的值，其他的值都会被忽略。</p>

<p>对于 {{event("dragenter")}} 和 {{event("dragover")}} 事件， <code>dropEffect</code> 会根据用户的请求的行为进行初始化。具体如何初始化和浏览器平台有关，但是通常来讲，用户可以通过按住修改键，比如 alt 键来修改想要的行为。当我们期望得到一个指定的行为时而不是用户的请求行为时，可以通过 {{event("dragenter")}} 和 {{event("dragover")}} 事件处理修改 <code>dropEffect</code>  的值。</p>

<p>对于 {{event("drop")}} 和 {{event("dragend")}} 事件，<code>dropEffect</code> 会被设置为想要得到的值，即最后一次 {{event("dragenter")}} 或 {{event("dragover")}} 事件后 <code>dropEffect</code> 的值。例如，在一个 {{event("dragend")}} 事件中，如果期望得到的 dropEffect 是 “move”，那么被拖拽的数据会从源中移除。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><var>dataTransfer</var>.dropEffect;
</pre>

<h3 id="值">值</h3>

<p>一个代表拖动操作效果的{{domxref("DOMString")}}，可能的值有：</p>

<dl>
 <dt><code>copy</code></dt>
 <dd>在新位置生成源项的副本</dd>
 <dt><code>move</code></dt>
 <dd>将项目移动到新位置</dd>
 <dt><code>link</code></dt>
 <dd>在新位置建立源项目的链接</dd>
 <dt><code>none</code></dt>
 <dd>项目可能禁止拖放（译者注：还与effectAllowed设置的值相关）</dd>
</dl>

<p>将任何其他值赋给<code>dropEffect</code> 都没有效果，这种情况下会保留旧值。</p>

<h2 id="示例">示例</h2>

<p>这个例子演示了<code>dropEffect</code> 和 {{domxref("DataTransfer.effectAllowed","effectAllowed")}}属性的用法</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p id="source" ondragstart="dragstart_handler(event);" draggable="true"&gt;
    Select this element, drag it to the Drop Zone and then release the selection to move the element.
  &lt;/p&gt;
&lt;/div&gt;
&lt;div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);"&gt;Drop Zone&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  margin: 0em;
  padding: 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function dragstart_handler(ev) {
  console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
  console.log("drop: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();

  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
  console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}
</pre>

<p>{{EmbedLiveSample('Example', 300, 250)}}</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'interaction.html#dom-datatransfer-dropeffect','dropEffect')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'editing.html#dom-datatransfer-dropeffect','dropEffect')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Initial definition</td>
  </tr>
  <tr>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.DataTransfer.dropEffect")}}</p>

<h2 id="另见">另见</h2>

<p>{{page("/en-US/docs/Web/API/DataTransfer", "See also")}}</p>
