---
title: DataTransfer.effectAllowed
slug: Web/API/DataTransfer/effectAllowed
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/effectAllowed
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p><strong><code>DataTransfer.effectAllowed</code></strong> プロパティは、ドラッグ操作で許可される effect を指定します。<em>コピー</em>操作は、ドラッグされるデータが現在の位置からドロップ位置にコピーされることを示すために使用されます。<em>移動</em>操作は、ドラッグされるデータが移動されることを示すために使用され、<em>リンク</em>操作は、ソース・ロケーションとドロップ・ロケーションの間に何らかの形の関係または接続が作成されることを示すために使用されます。</p>

<p>このプロパティは、{{event("dragstart")}} イベントで設定して、ドラッグソースのドラッグ効果を設定する必要があります。イベントハンドラ {{event("dragenter")}} および{{event("dragover")}} 内では、このプロパティは {{event("dragstart")}} イベントで割り当てられた値に設定されるため、どの効果が許可されているかを決定するために <code>effectAllowed</code> を使用することができます。</p>

<p>イベント {{event("dragstart")}} 以外のイベントで <code>effectAllowed</code> に値を代入しても何の効果もありません。</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate"><var>dataTransfer</var>.effectAllowed;
</pre>

<h3 id="値">値</h3>

<p>許可されているドラッグ操作を表す {{domxref("DOMString")}}。可能な値は以下の通りです。</p>

<dl>
 <dt>none</dt>
 <dd>アイテムはドロップしない場合があります。</dd>
 <dt>copy</dt>
 <dd>ソースアイテムのコピーは、新しい場所で作成することができます。</dd>
 <dt>copyLink</dt>
 <dd>コピーやリンク操作は許可されています。</dd>
 <dt>copyMove</dt>
 <dd>コピーや移動の操作は許可されています。</dd>
 <dt>link</dt>
 <dd>新しい場所のソースへのリンクが確立されている場合があります。</dd>
 <dt>linkMove</dt>
 <dd>リンクや移動の操作は許可されています。</dd>
 <dt>move</dt>
 <dd>アイテムは新しい場所に移動することができます。</dd>
 <dt>all</dt>
 <dd>すべての操作が許可されています。</dd>
 <dt>uninitialized</dt>
 <dd>effect が設定されていない場合のデフォルト値で、全ての effect に相当します。</dd>
</dl>

<p><code>effectAllowed</code> に他の値を代入しても効果はなく、古い値が保持されます。</p>

<p>Internet Explorer では、値を小文字に変更するので、<code>linkMove</code> は <code>linkmove</code> になります。</p>

<h2 id="例">例</h2>

<p>この例では、<code>effectAllowed</code> プロパティと {{domxref("DataTransfer.dropEffect", "dropEffect")}} プロパティを使用しています。</p>

<pre class="brush: js notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang=ja&gt;
&lt;title&gt;DataTransfer.{dropEffect,effectAllowed} プロパティの例&lt;/title&gt;
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
&lt;script&gt;
function dragstart_handler(ev) {
 console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
 // この要素の id を drag ペイロードに追加し、
 // drop ハンドラがどの要素をツリーに追加するかを知ることができるようにします。
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
&lt;/script&gt;
&lt;body&gt;
&lt;h1&gt;&lt;code&gt;DataTransfer&lt;/code&gt;.{&lt;code&gt;dropEffect&lt;/code&gt;, &lt;code&gt;effectAllowed&lt;/code&gt;} プロパティの例&lt;/h1&gt;
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
   <td>{{SpecName("HTML WHATWG", "interaction.html#dom-datatransfer-effectallowed", "effectAllowed")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "editing.html#dom-datatransfer-effectallowed", "effectAllowed")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.DataTransfer.effectAllowed")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<p>{{page("/ja/docs/Web/API/DataTransfer", "あわせて参照")}}</p>
