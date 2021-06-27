---
title: DataTransfer.setDragImage()
slug: Web/API/DataTransfer/setDragImage
tags:
  - API
  - H5 DnD
  - HTML DOM
  - Method
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/setDragImage
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>ドラッグが発生すると、ドラッグ対象 ({{event("dragstart")}} イベントが発生した要素) から半透明の画像が生成され、ドラッグ中にマウスポインタに沿って移動します。この画像は自動的に作成されるので、自分で作成する必要はありません。ただし、カスタム画像が必要な場合は、<strong><code>DataTransfer.setDragImage()</code></strong> メソッドを使用して、使用するカスタム画像を設定することができます。画像は通常、{{HTMLElement("image")}} 要素になりますが、{{HTMLElement("canvas")}} やその他の可視要素であっても構いません。</p>

<p>メソッドの <code>x</code> 座標と <code>y</code> 座標は、マウスポインタに対する画像の相対的な表示方法を定義します。これらの座標は、マウスカーソルがあるべき画像のオフセットを定義します。例えば、ポインタが中心に来るように画像を表示するには、画像の幅と高さの半分の値を使用します。</p>

<p>このメソッドは {{event("dragstart")}} イベントハンドラ内で呼び出す必要があります。</p>

<h2 id="Syntax" name="Syntax">シンタックス</h2>

<pre class="syntaxbox notranslate">void <em>dataTransfer</em>.setDragImage(img | element, xOffset, yOffset);
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><em>img | </em>element</dt>
 <dd>ドラッグフィードバック画像に使用する画像 {{domxref("Element")}} 要素。</dd>
 <dd>もし {{domxref("Element")}} が img 要素であれば、ドラッグデータストアのビットマップをその要素の画像に設定します (その要素に固有のサイズで)。そうでなければ、ドラッグデータストアのビットマップを、与えられた要素から生成された画像に設定します (そのための正確なメカニズムは現在のところ指定されていません)。</dd>
 <dt><em>xOffset</em></dt>
 <dd>画像内の水平方向のオフセットを示す <code>long</code>。</dd>
 <dt><em>yOffset</em></dt>
 <dd>画像内の垂直方向のオフセットを示す <code>long</code>。</dd>
</dl>

<h3 id="Return_Value" name="Return_Value">戻り値</h3>

<dl>
 <dt>void</dt>
 <dd></dd>
</dl>

<h2 id="例">例</h2>

<p>この例では、<code>setDragImage()</code> メソッドの使用方法を示します。この例では <code>example.gif</code> という名前の画像ファイルを参照していることに注意しましょう。そのファイルが存在する場合はそのファイルがドラッグ画像として使用され、そのファイルが存在しない場合はブラウザがデフォルトのドラッグ画像を使用します。</p>

<p><a href="https://codepen.io/webgeeker/full/KBzrxE/">demo</a></p>

<pre class="brush: js notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang=ja&gt;
&lt;title&gt;DataTransfer.setDragImage() の例&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width"&gt;
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
&lt;script&gt;
function dragstart_handler(ev) {
 console.log("dragStart");
 // ドラッグのフォーマットとデータを設定します。データにはイベントターゲットの ID を使用します。
 ev.dataTransfer.setData("text/plain", ev.target.id);
 // 画像を作成してドラッグ画像に使用する
 // 注意: "example.gif" を既存の画像に変更しないと画像が作成されず、
 // デフォルトのドラッグ画像が使用されます。
 var img = new Image();
 img.src = 'example.gif';
 ev.dataTransfer.setDragImage(img, 10, 10);
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 // ドロップ対象のIDであるデータを取得します。
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;
&lt;body&gt;
&lt;h1&gt;&lt;code&gt;DataTransfer.setDragImage()&lt;/code&gt; の例&lt;/h1&gt;
 &lt;div&gt;
   &lt;p id="source" ondragstart="dragstart_handler(event);" draggable="true"&gt;
     この要素を選択し、ドロップゾーンにドラッグしてから選択を解除して要素を移動します。&lt;/p&gt;
 &lt;/div&gt;
 &lt;div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);"&gt;ドロップゾーン&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'interaction.html#dom-datatransfer-setdragimage','setDragImage()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'editing.html#dom-datatransfer-setdragimage','setDragImage()')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>W3C HTML5 に含まれない {{Spec2('HTML5 W3C')}}。</td>
  </tr>
  <tr>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.DataTransfer.setDragImage")}}</p>

<h2 id="See_also" name="See_also">あわせて参照</h2>

<p>{{page("/ja/docs/Web/API/DataTransfer", "あわせて参照")}}</p>
