---
title: KeyboardEvent.key
slug: Web/API/KeyboardEvent/key
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
  - UI Events
  - プロパティ
translation_of: Web/API/KeyboardEvent/key
---
<div>{{APIRef("DOM Events")}}</div>

<p><span class="seoSummary">{{domxref("KeyboardEvent")}} インターフェイスの <code><strong>key</strong></code> はプロパティは読み取り専用で、ユーザーが押したキーの値を、 <kbd>Shift</kbd> キーなどの修飾キーやキーボードのロケールやレイアウトを考慮した値で返します。</span>値は以下のように判断されます。</p>

<div class="moreinfo pull-aside">
<h4 id="Key_values" name="Key_values">キーの値</h4>

<p><a href="/ja/docs/Web/API/KeyboardEvent/key/Key_Values">キーの値</a>の完全なリストを参照してください。</p>
</div>

<ul>
 <li>押されたキーが印刷表現を持っている場合は、返された値は空ではない Unicode 文字の文字列で、キーの印刷表現が入ります。</li>
 <li>押されたキーが制御または特殊文字である場合は、返値は<a href="/ja/docs/Web/API/KeyboardEvent/key/Key_Values">定義済みキー値</a>の内の一つになります。</li>
 <li><code>KeyboardEvent</code> が<a href="https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%83%E3%83%89%E3%82%AD%E3%83%BC">デッドキー</a>が押されたことを表すのであれば、キーの値は "<code>Dead</code>" になります。</li>
 <li>キーボードの一部の特殊なキー (マルチメディアキーボードにおけるメディア制御のための拡張キーなど) は Windows のキーコードを生成しません。代わりに <code>WM_APPCOMMAND</code> イベントを起動します。これらのイベントは DOM キーボードイベントに対応付けられ、 Windows の「仮想キーコード」の中で、実際のキーコードではないものの紹介されます。</li>
 <li>キーが特定できなかった場合は、 <code>Unidentified</code> の値を返します。</li>
</ul>

<h2 id="KeyboardEvent_sequence" name="KeyboardEvent_sequence">KeyboardEvent シーケンス</h2>

<p>それぞれの <code>KeyboardEvent</code> はあらかじめ定められたシーケンスで発生します。キーが押された場合、発生する一連の <code>KeyboardEvent</code> は {{domxref("Event.preventDefault")}} が呼び出されないと想定すれば次のようになります。</p>

<ol>
 <li>最初に {{domxref("Element/keydown_event", "keydown")}} イベントが発生します。キーがそれ以上押され続けてそのキーが文字を入力する場合は、イベントはプラットフォームの実装に依存した間隔で発生し続け、読み取り専用の {{domxref("KeyboardEvent.repeat")}} プロパティが <code>true</code> に設定されます。</li>
 <li>もしキー入力が{{HTMLElement("input")}}、{{HTMLElement("textarea")}}もしくは{{domxref("HTMLElement.contentEditable")}}が <code>true</code> の要素に文字を挿入する場合は、 {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}と{{domxref("HTMLElement/input_event", "input")}}イベント型がその順番で発火されます。 他の実装が{{domxref("Element/keypress_event", "keypress")}}イベントを実装していれば発火する可能性があることに注意してください。イベントはキーが押されている間連続で発火します。</li>
 <li>キーを離した際に{{domxref("Element/keyup_event", "keyup")}}イベントが発火します。これで一連の処理は終わりです。</li>
</ol>

<p>1と3の処理で、 <code>KeyboardEvent.key</code> 属性が定義され、先ほど定義したルールにのっとって値が設定されます。</p>

<h2 id="KeyboardEvent_sequence_example" name="KeyboardEvent_sequence_example">KeyboardEvent シーケンスの例</h2>

<p>Consider the event sequence generated when we interact with the <kbd>Shift</kbd> and the <kbd>2</kbd> key using a U.S keyboard layout as compared to when we do so using a UK keyboard layout.</p>

<p>Try experimenting using the following two test cases:</p>

<ol>
 <li>Press and hold the <kbd>Shift</kbd> key, then press <kbd>2</kbd> and release it. Next, release the <kbd>Shift</kbd> key.</li>
 <li>Press and hold the <kbd>Shift</kbd> key, then press and hold <kbd>2</kbd>. Release the <kbd>Shift</kbd> key. Finally, release <kbd>2</kbd>.</li>
</ol>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="fx"&gt;
  &lt;div&gt;
    &lt;textarea rows="5" name="test-target" id="test-target"&gt;&lt;/textarea&gt;
    &lt;button type="button" name="btn-clear-console" id="btn-clear-console"&gt;clear console&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="flex"&gt;
    &lt;pre id="console-log"&gt;&lt;/pre&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx &gt; div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx &gt; div:first-child {
   width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnClearConsole = document.getElementById('btn-clear-console');

function logMessage(message) {
  document.getElementById("console-log").innerHTML += message + "&lt;br&gt;";
}

textarea.addEventListener('keydown', (e) =&gt; {
  if (!e.repeat)
    logMessage(`Key "${e.key}" pressed  [event: keydown]`);
  else
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
});

textarea.addEventListener('beforeinput', (e) =&gt; {
  logMessage(`Key "${e.data}" about to be input  [event: beforeinput]`);
});

textarea.addEventListener('input', (e) =&gt; {
  logMessage(`Key "${e.data}" input  [event: input]`);
});

textarea.addEventListener('keyup', (e) =&gt; {
  logMessage(`Key "${e.key}" released  [event: keyup]`);
});

btnClearConsole.addEventListener('click', (e) =&gt; {
  let child = consoleLog.firstChild;
  while (child) {
   consoleLog.removeChild(child);
   child = consoleLog.firstChild;
  }
});</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('KeyboardEvent_sequence_example')}}</p>

<div class="blockIndicator note">
<p><strong>注:</strong> On browsers that don't fully implement the {{domxref("InputEvent")}} interface which is used for the {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} and {{domxref("HTMLElement/input_event", "input")}} events, you may get incorrect output on those lines of the log output.</p>
</div>

<h3 id="Case_1" name="Case_1">Case 1</h3>

<p>When the shift key is pressed, a {{domxref("Element/keydown_event", "keydown")}} event is first fired, and the <code>key</code> property value is set to the string <code>Shift</code>. As we keep holding this key, the {{domxref("Element/keydown_event", "keydown")}} event does not continue to fire repeatedly because it does not produce a character key.</p>

<p>When <code>key 2</code> is pressed, another {{domxref("Element/keydown_event", "keydown")}} event is fired for this new key press, and the <code>key</code> property value for the event is set to the string <code>@</code> for the U.S keyboard type and <code>"</code> for the UK keyboard type, because of the active modifier <code>shift</code> key. The {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} and {{domxref("HTMLElement/input_event", "input")}} events are fired next because a character key has been produced.</p>

<p>As we release the <code>key 2</code>, a {{domxref("Element/keyup_event", "keyup")}} event is fired and the <code>key</code> property will maintain the string values <code>@</code> and <code>"</code> for the different keyboard layouts respectively.</p>

<p>As we finally release the <code>shift</code> key, another {{domxref("Element/keyup_event", "keyup")}} event is fired for it, and the key attribute value remains <code>Shift</code>.</p>

<h3 id="Case_2" name="Case_2">Case 2</h3>

<p>When the shift key is pressed, a {{domxref("Element/keydown_event", "keydown")}} event is first fired, and the <code>key</code> property value is set to be the string <code>Shift</code>. As we keep holding this key, the keydown event does not continue to fire repeatedly because it produced no character key.</p>

<p>When <code>key 2</code> is pressed, another {{domxref("Element/keydown_event", "keydown")}} event is fired for this new key press, and the <code>key</code> property value for the event is set to be the string <code>@</code> for the U.S keyboard type and <code>"</code> for the UK keyboard type, because of the active modifier <code>shift</code> key. The {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} and {{domxref("HTMLElement/input_event", "input")}}{{domxref("HTMLElement/beforeinput_event", "beforeinput")}} and {{domxref("HTMLElement/input_event", "input")}} events are fired next because a character key has been produced. As we keep holding the key, the {{domxref("Element/keydown_event", "keydown")}} event continues to fire repeatedly and the {{domxref("KeyboardEvent.repeat")}} property is set to <code>true</code>. The {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} and {{domxref("HTMLElement/input_event", "input")}} events are fired repeatedly as well.</p>

<p>As we release the <code>shift</code> key, a {{domxref("Element/keyup_event", "keyup")}} event is fired for it, and the key attribute value remains <code>Shift</code>. At this point, notice that the <code>key</code> property value for the repeating keydown event of the <code>key 2</code> key press is now "2" because the modifier <code>shift</code> key is no longer active. The same goes for the {{domxref("InputEvent.data")}} property of the {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} and {{domxref("HTMLElement/input_event", "input")}} events.</p>

<p>As we finally release the <code>key 2</code>, a {{domxref("Element/keyup_event", "keyup")}} event is fired but the <code>key</code> property will be set to the string value <code>2</code> for both keyboard layouts because the modifier <code>shift</code> key is no longer active.</p>

<h2 id="Example" name="Example">例</h2>

<p>This example uses {{domxref("EventTarget.addEventListener()")}} to listen for {{domxref("Element/keydown_event", "keydown")}} events. When they occur, the key's value is checked to see if it's one of the keys the code is interested in, and if it is, it gets processed in some way (possibly by steering a spacecraft, perhaps by changing the selected cell in a spreadsheet).</p>

<pre class="brush: js notranslate">window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      // Do something for "down arrow" key press.
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
      // Do something for "up arrow" key press.
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      // Do something for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('UI Events', '#dom-keyboardevent-key', 'KeyboardEvent.key')}}</td>
   <td>{{Spec2('UI Events')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#widl-KeyboardEvent-key', 'KeyboardEvent.key')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>初回定義で、キーの値を含みます。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.KeyboardEvent.key")}}</p>
