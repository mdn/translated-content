---
title: DataTransfer.clearData()
slug: Web/API/DataTransfer/clearData
tags:
  - API
  - DataTransfer
  - HTML DOM
  - Method
  - Reference
  - clearData
  - drag and drop
translation_of: Web/API/DataTransfer/clearData
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p><strong><code>DataTransfer.clearData()</code></strong> メソッドは、指定されたタイプのドラッグ操作の {{domxref("DataTransfer", "ドラッグデータ")}} を削除します。指定された型のデータが存在しない場合、このメソッドは何もしません。</p>

<p class="note">このメソッドが引数なしで呼び出された場合、またはフォーマットが空の {{domxref("DOMString", "string")}} であった場合、すべての型のデータが削除されます。</p>

<p>このメソッドはドラッグ操作からファイルを削除<em>しない</em>ので、ドラッグに含まれるファイルがある場合、オブジェクトの {{domxref("DataTransfer.types")}} リストに <code>"Files"</code> タイプのエントリが残る可能性があります。</p>

<div class="note">
<p>このメソッドは、{{event("dragstart")}} イベントのハンドラでのみ使用できます。なぜなら、ドラッグ操作のデータストアが書き込み可能なのはその時だけだからです。</p>
</div>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate"><var>DataTransfer</var>.clearData([<em>format</em>]);
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>format</code> {{optional_inline}}</dt>
 <dd>削除するデータの型を指定する {{domxref("DOMString", "文字列")}}。このパラメータが空の文字列であったり、指定されていない場合は、すべての型のデータが削除されます。</dd>
</dl>

<h2 id="Example">Example</h2>

<p>この例では、{{domxref("DataTransfer")}} オブジェクトの{{domxref("DataTransfer.getData()", "getData()")}}、{{domxref("DataTransfer.setData()", "setData()")}}、および {{domxref("DataTransfer.clearData()", "clearData()")}} メソッドを使用しています。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;span class="tweaked" id="source" draggable="true"&gt;
  この要素を選択し、ドロップゾーンにドラッグしてから選択を解除して要素を移動します。
&lt;/span&gt;
&lt;span class="tweaked" id="target"&gt;ドロップゾーン&lt;/span&gt;
&lt;div&gt;ステータス: &lt;span id="status"&gt;ドラッグして開始&lt;/span&gt;&lt;/div&gt;
&lt;div&gt;データ: &lt;span id="data"&gt;未初期化&lt;/span&gt;&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">span.tweaked {
  display: inline-block;
  margin: 1em 0;
  padding: 1em 2em;
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

<pre class="brush: js notranslate">window.addEventListener('DOMContentLoaded', function () {
  // HTML要素を選択する
  var draggable = document.getElementById('source');
  var dropable = document.getElementById('target');
  var status = document.getElementById('status');
  var data = document.getElementById('data');
  var dropped = false;

  // イベントハンドラを登録する
  draggable.addEventListener('dragstart', dragStartHandler);
  draggable.addEventListener('dragend', dragEndHandler);
  dropable.addEventListener('dragover', dragOverHandler);
  dropable.addEventListener('dragleave', dragLeaveHandler);
  dropable.addEventListener('drop', dropHandler);

  function dragStartHandler (event) {
    status.innerHTML = 'ドラッグ中';

    // ドラッグが開始されたことを示すように、ターゲット要素の境界線を変更する
    event.currentTarget.style.border = '1px dashed blue';

    // 既存のクリップボードをクリアすることから始めます。
    // 特定のタイプを指定していないので、これはすべてのタイプに影響します。

    event.dataTransfer.clearData();

    // ドラッグのフォーマットとデータを設定します(データはイベントターゲットのIDを使用)
    event.dataTransfer.setData('text/plain', event.target.id);

    data.innerHTML = event.dataTransfer.getData('text/plain');
  }

  function dragEndHandler (event) {
    if (!dropped) {
      status.innerHTML = 'ドラッグのキャンセル';
    }

    data.innerHTML = event.dataTransfer.getData('text/plain') || 'empty';

    // ドラッグ中ではないことを示すために境界線を変更する
    event.currentTarget.style.border = '1px solid black';

    if (dropped) {
      // すべてのイベントリスナーを削除
      draggable.removeEventListener('dragstart', dragStartHandler);
      draggable.removeEventListener('dragend', dragEndHandler);
      dropable.removeEventListener('dragover', dragOverHandler);
      dropable.removeEventListener('dragleave', dragLeaveHandler);
      dropable.removeEventListener('drop', dropHandler);
    }
  }

  function dragOverHandler (event) {
    status.innerHTML = 'ドロップ可能';

    event.preventDefault();
  }

  function dragLeaveHandler (event) {
    status.innerHTML = 'ドラッグ中 (ドロップは可能)';

    event.preventDefault();
  }

  function dropHandler (event) {
    dropped = true;

    status.innerHTML = 'ドロップしました。';

    event.preventDefault();

    // イベント形式に連動したデータを取得する « text »
    var _data = event.dataTransfer.getData('text/plain');
    var element = document.getElementById(_data);

    // イベントのターゲット要素にドラッグソース要素を追加する
    event.target.appendChild(element);

    // CSSスタイルと表示テキストを変更する
    element.style.cssText = 'border: 1px solid black;display: block; color: red';
    element.innerHTML = "ドロップゾーンに入りました!";
  }
})
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
   <td>{{SpecName('HTML WHATWG', 'interaction.html#dom-datatransfer-cleardata','DataTransfer.clearData()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'editing.html#dom-datatransfer-cleardata','DataTransfer.clearData()')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.DataTransfer.clearData")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<p>{{page("/ja/docs/Web/API/DataTransfer", "あわせて参照")}}</p>
