---
title: DataTransfer.dropEffect
slug: Web/API/DataTransfer/dropEffect
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/dropEffect
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p><strong><code>DataTransfer.dropEffect</code></strong> プロパティは、ドラッグ＆ドロップ操作中にユーザに与えられるフィードバック (通常は視覚的) を制御します。これは、ドラッグ中に表示されるカーソルに影響します。例えば、ユーザがターゲットのドロップ要素の上にカーソルを置くと、ブラウザのカーソルは、どのタイプの操作が発生するかを示すことができます。</p>

<p>{{domxref("DataTransfer")}} オブジェクトを作成すると、<code>dropEffect</code> には文字列の値が設定されます。取得時には、現在の値を返します。設定時、新しい値が以下の値のいずれかであれば、プロパティの現在の値が新しい値に設定され、それ以外の値は無視されます。</p>

<p>{{event("dragenter")}} と {{event("dragover")}} イベントでは、ユーザーがどのようなアクションを要求しているかに基づいて、<code>dropEffect</code> が初期化されます。これをどのように決定するかはプラットフォームによって異なりますが、通常、ユーザーは alt キーなどの修飾キーを押して、希望するアクションを調整することができます。{{event("dragenter")}} と {{event("dragover")}} イベントのイベントハンドラ内では、ユーザーが要求しているアクションとは異なるアクションが必要な場合、<code>dropEffect</code> を修正する必要があります。</p>

<p>{{event("drop")}} と {{event("dragend")}} イベントでは、<code>dropEffect</code> には希望するアクションが設定され、前回の {{event("dragenter")}} または {{event("dragover")}} イベントの後の値が <code>dropEffect</code> になります。例えば、{{event("dragend")}} イベントで、希望する dropEffect が  "move" であれば、ドラッグされているデータはソースから削除されるべきです。</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate"><var>dataTransfer</var>.dropEffect;
</pre>

<h3 id="値">値</h3>

<p>ドラッグ操作の効果を表す {{domxref("DOMString")}}。可能な値は以下の通りです。</p>

<dl>
 <dt><code>copy</code></dt>
 <dd>新しい場所にソースアイテムのコピーが作成されます。</dd>
 <dt><code>move</code></dt>
 <dd>アイテムを新しい場所に移動します。</dd>
 <dt><code>link</code></dt>
 <dd>新しい場所のソースにリンクが確立されます。</dd>
 <dt><code>none</code></dt>
 <dd>アイテムはドロップしない場合があります。</dd>
</dl>

<p><code>dropEffect</code> に他の値を代入しても効果はなく、古い値が保持されます。</p>

<h2 id="Example">Example</h2>

<p>この例では、<code>dropEffect</code> と{{domxref("DataTransfer.effectAllowed", "effectAllowed")}} プロパティを使用しています。</p>

<h3 id="HTML_コンテンツ">HTML コンテンツ</h3>

<pre class="brush: html notranslate">&lt;div&gt;
  &lt;p id="source" ondragstart="dragstart_handler(event);" draggable="true"&gt;
    この要素を選択し、ドロップゾーンにドラッグしてから選択を解除して要素を移動します。
  &lt;/p&gt;
&lt;/div&gt;
&lt;div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);"&gt;ドロップゾーン&lt;/div&gt;
</pre>

<h3 id="CSS_コンテンツ">CSS コンテンツ</h3>

<pre class="brush: css notranslate">div {
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

<h3 id="JavaScript_コンテンツ">JavaScript コンテンツ</h3>

<pre class="brush: js notranslate">function dragstart_handler(ev) {
  console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);

  // この要素の id をドラッグ ペイロードに追加し、ドロップ ハンドラが
  // どの要素をツリーに追加するかを知ることができるようにします。
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
  console.log("drop: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();

  // ターゲットの ID を取得し、移動した要素をターゲットの DOM に追加します。
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
  console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();
  // dropEffect を移動するように設定します。
  ev.dataTransfer.dropEffect = "move"
}
</pre>

<p>{{EmbedLiveSample('Example', 300, 250)}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'interaction.html#dom-datatransfer-dropeffect','dropEffect')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'editing.html#dom-datatransfer-dropeffect','dropEffect')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.DataTransfer.dropEffect")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<p>{{page("/ja/docs/Web/API/DataTransfer", "あわせて参照")}}</p>
