---
title: DragEvent()
slug: Web/API/DragEvent/DragEvent
tags:
  - API
  - Constructor
  - DOM
  - Reference
  - drag and drop
translation_of: Web/API/DragEvent/DragEvent
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>このコンストラクタを使用して、合成 {{domxref("DragEvent")}} オブジェクトを作成します。</p>

<p class="note">このインターフェイスにはコンストラクタがありますが、{{domxref("DataTransfer")}} オブジェクトは、ドラッグ&amp;ドロップ時にブラウザが調整する処理モデルとセキュリティモデルを持っているため、スクリプトから有用な {{domxref("DataTransfer")}} オブジェクトを作成することはできません。</p>

<p class="note">このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} のプロパティを継承します。</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate"><em>event</em> = new DragEvent(<em>type</em>, <em>DragEventInit</em>);</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><em>type</em></dt>
 <dd>イベントの名前を表す <code>{{domxref("DOMString")}}</code> です (<a href="/ja/docs/Web/API/DragEvent#Event_types">DragEvent イベントの種類</a>を参照)。</dd>
 <dt><em>DragEventInit</em>{{optional_inline}}</dt>
</dl>

<dl>
 <dd>以下のフィールドを持つ <code>DragEventInit</code> ディクショナリです。

 <ul>
  <li><code>"dataTransfer"</code>、オプションで、デフォルトは <code>"null"</code> です。型は <code>{{domxref("DataTransfer")}}</code> です。</li>
 </ul>
 </dd>
</dl>

<p class="note"><code>DragEventInit</code> ディクショナリは、{{domxref("MouseEvent.MouseEvent", "MouseEventInit ディクショナリ")}} を継承しています。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "interaction.html#the-dragevent-interface", "DragEvent")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "editing.html#the-dragevent-interface", "DragEvent")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.DragEvent.DragEvent")}}</p>
