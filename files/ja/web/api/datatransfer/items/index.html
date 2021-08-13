---
title: DataTransfer.items
slug: Web/API/DataTransfer/items
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/items
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>読み取り専用の {{domxref("DataTransfer")}} プロパティの <code>items</code> プロパティは、ドラッグ操作での {{domxref("DataTransferItemList", "list")}} の {{domxref("DataTransferItem", "DataTransfer items")}} です。リストには操作中の項目ごとに1つの項目が含まれており、操作中に項目がなかった場合はリストは空になります。</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate"><em>itemList</em> = <em>dataTransfer</em>.items;
</pre>

<h3 id="戻り値">戻り値</h3>

<p>ドラッグ操作でドラッグされる項目を表す {{domxref("DataTransferItem")}} オブジェクトを含む {{domxref("DataTransferItemList")}} オブジェクトで、ドラッグされるオブジェクトごとに1つのリスト項目があります。ドラッグ操作にデータがない場合、リストは空です。</p>

<h2 id="例">例</h2>

<p>この例では、<code>items</code> と{{domxref("DataTransfer.types", "types")}} プロパティを使用しています。</p>

<pre class="brush: js notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang=ja&gt;
&lt;title&gt;DataTransfer.{types,item}プロパティの例&lt;/title&gt;
&lt;meta content="width=device-width"&gt;
&lt;style&gt;
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    border: 1px solid black;
  }
&lt;/style&gt;
&lt;script&gt;
function dragstart_handler(ev) {
 console.log("dragStart: target.id = " + ev.target.id);
 // この要素の id をドラッグ ペイロードに追加し、
 // drop ハンドラがどの要素をツリーに追加するかを知ることができるようにします。
 ev.dataTransfer.setData("text/plain", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
 console.log("drop: target.id = " + ev.target.id);
 ev.preventDefault();
 // ターゲットの ID を取得し、移動した要素をターゲットの DOM に追加します。
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // 各フォーマットタイプをプリントする
 if (ev.dataTransfer.types != null) {
   for (var i=0; i &lt; ev.dataTransfer.types.length; i++) {
     console.log("... types[" + i + "] = " + ev.dataTransfer.types[i]);
   }
 }
 // 各項目の "kind" と "type" をプリントする
 if (ev.dataTransfer.items != null) {
   for (var i=0; i &lt; ev.dataTransfer.items.length; i++) {
     console.log("... items[" + i + "].kind = " + ev.dataTransfer.items[i].kind + " ; type = " + ev.dataTransfer.items[i].type);
   }
 }
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
 // dropEffect を移動するように設定します。
 ev.dataTransfer.dropEffect = "move"
}
&lt;/script&gt;
&lt;body&gt;
&lt;h1&gt;&lt;code&gt;DataTransfer&lt;/code&gt;.{&lt;code&gt;types&lt;/code&gt;, &lt;code&gt;items&lt;/code&gt;} プロパティの例&lt;/h1&gt;
 &lt;ul&gt;
   &lt;li id="i1" ondragstart="dragstart_handler(event);" draggable="true"&gt;アイテム1をドロップゾーンにドラッグ&lt;/li&gt;
   &lt;li id="i2" ondragstart="dragstart_handler(event);" draggable="true"&gt;アイテム2をドロップゾーンにドラッグ&lt;/li&gt;
 &lt;/ul&gt;
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
   <td>{{SpecName("HTML WHATWG", "interaction.html#dom-datatransfer-items", "items")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "editing.html#dom-datatransfer-items", "items")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.DataTransfer.items")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<p>{{page("/ja/docs/Web/API/DataTransfer", "あわせて参照")}}</p>
