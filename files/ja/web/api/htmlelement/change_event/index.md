---
title: 'HTMLElement: change イベント'
slug: Web/API/HTMLElement/change_event
tags:
  - Change
  - Event
  - HTML
  - HTML DOM
  - HTMLElement
  - Reference
  - Web
translation_of: Web/API/HTMLElement/change_event
---
<div>{{APIRef}}</div>

<p><code>change</code> イベントは {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 要素において、ユーザーによる要素の値の変更が確定したときに発生します。 {{domxref("HTMLElement/input_event", "input")}} イベントとは異なり、 <code>change</code> イベントは要素の値 (<code>value</code>) が変更されるたびに発生するとは限りません。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers/onchange", "onchange")}}</td>
  </tr>
 </tbody>
</table>

<p>変更される要素の種類やユーザーが要素を操作する方法によって、 <code>change</code> イベントは異なる時点で発生します。</p>

<ul>
 <li><code>{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}</code> および <code>{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}</code> の場合は、 (クリックまたはキーボードを使用して) 要素が <code>:checked</code> になったとき。</li>
 <li>ユーザが明示的に変更を確定したとき (たとえば、 {{HTMLElement("select")}} のドロップダウンの値をマウスクリックで選択した場合、 <code>{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}</code> の日付ピッカーで日付を選択した場合、 <code>{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}</code> のファイル選択ダイアログでファイルを選択した場合など)。</li>
 <li>要素の値が変更されたが、確定しないうちに要素がフォーカスを失ったとき (たとえば、 {{HTMLElement("textarea")}} または <code>{{HTMLElement('input/text', '&lt;input type="text"&gt;')}}</code> の値を編集した後に、要素がフォーカスを失った場合)。</li>
</ul>

<p>HTML 仕様書には、 <a href="https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply"><code>change</code> イベントを発生させる <code>&lt;input&gt;</code> 型</a>の一覧があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="&lt;select>_element" name="&lt;select>_element">&lt;select&gt; 要素</h3>

<div id="select-example">
<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;label&gt;アイスクリームの味:
  &lt;select class="ice-cream" name="ice-cream"&gt;
    &lt;option value=""&gt;1つ選択してください …&lt;/option&gt;
    &lt;option value="chocolate"&gt;チョコレート&lt;/option&gt;
    &lt;option value="sardine"&gt;イワシ&lt;/option&gt;
    &lt;option value="vanilla"&gt;バニラ&lt;/option&gt;
  &lt;/select&gt;
&lt;/label&gt;

&lt;div class="result"&gt;&lt;/div&gt;</pre>

<div class="hidden">
<pre class="brush: css notranslate">body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}
</pre>
</div>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) =&gt; {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});
</pre>
</div>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('select-example', '100%', '75px') }}</p>

<h3 id="Text_input_element" name="Text_input_element">テキスト入力要素</h3>

<p><code>&lt;input type="text"&gt;</code> など一部の要素では、コントロールがフォーカスを失うまで <code>change</code> イベントが発生しません。以下のフィールドに何かを入力してから、他の部分をクリックするとイベントが発生します。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;input placeholder="何かテキストを入力" name="name"/&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="brush: js notranslate">const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{ EmbedLiveSample('Text_input_element', '100%', '75px') }}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', "indices.html#event-change", "change")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.change_event")}}</p>

<p>すべてのブラウザーにおいて、特定の操作で <code>change</code> イベントが発生するかどうかが同じであるとは限りません。例えば、 Gecko では {{HTMLElement("select")}} 要素をキーボードで操作すると、 <code>change</code> イベントは Enter を押すか <code>&lt;select&gt;</code> からフォーカスが離れるまで発生しませんでした ({{bug("126379")}} を参照)。ただし、 Firefox 63 (Quantum) からは、すべての主要なブラウザーと同じ動作になりました。</p>

<h2 id="See_also" name="See_also">関連情報</h2>
