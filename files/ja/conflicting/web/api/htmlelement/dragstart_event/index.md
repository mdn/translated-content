---
title: GlobalEventHandlers.ondragstart
slug: conflicting/Web/API/HTMLElement/dragstart_event
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
translation_of: Web/API/GlobalEventHandlers/ondragstart
original_slug: Web/API/GlobalEventHandlers/ondragstart
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>{{event("dragstart")}} イベントの {{domxref("GlobalEventHandlers","global event handler")}} 。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">var <var>dragstartHandler</var> = <var>targetElement</var>.ondragstart;
</pre>

<h3 id="返り値">返り値</h3>

<dl>
 <dt><code>dragstartHandler</code></dt>
 <dd>要素 <code>targetElement</code> の <em>dragstart</em> イベントハンドラ。</dd>
</dl>

<h2 id="例">例</h2>

<p>この例では、 {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} 属性ハンドラを使用して、要素 {{event("dragstart")}} イベントハンドラを設定する方法を示します。</p>

<pre class="brush: js notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang=en&gt;
&lt;title&gt;Examples of using the ondrag Global Event Attribute&lt;/title&gt;
&lt;meta content="width=device-width"&gt;
&lt;style&gt;
  div {
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
&lt;/style&gt;
&lt;/head&gt;
&lt;script&gt;
function drag_handler(ev) {
 console.log("Drag");
}

function dragstart_handler(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("text", ev.target.id);
}

function drop_handler(ev) {
 console.log("Drop");
 ev.currentTarget.style.background = "lightyellow";

 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}
&lt;/script&gt;
&lt;body&gt;
&lt;h1&gt;Examples of &lt;code&gt;ondrag&lt;/code&gt;, &lt;code&gt;ondrop&lt;/code&gt;, &lt;code&gt;ondragstart&lt;/code&gt;, &lt;code&gt;ondragover&lt;/code&gt;&lt;/h1&gt;
 &lt;div&gt;
   &lt;p id="source" ondrag="drag_handler(event);" ondragstart="dragstart_handler(event);" draggable="true"&gt;
     Select this element, drag it to the Drop Zone and then release the selection to move the element.&lt;/p&gt;
 &lt;/div&gt;
 &lt;div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);"&gt;Drop Zone&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "indices.html#ix-handler-ondragstart", "ondragstart")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "index.html#ix-handler-ondragstart", "ondragstart")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



<p>{{Compat("api.GlobalEventHandlers.ondragstart")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{event("dragstart")}}</li>
</ul>
