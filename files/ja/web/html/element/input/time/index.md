---
title: <input type="time">
slug: Web/HTML/Element/input/time
tags:
  - 要素
  - フォーム
  - HTML
  - HTML 入力型
  - HTML フォーム
  - HTML 入力
  - Input
  - 入力要素
  - 入力型
  - リファレンス
  - Time
browser-compat: html.elements.input.input-time
translation_of: Web/HTML/Element/input/time
---

{{HTMLRef("Input_types")}}

{{htmlelement("input")}} 要素の **`time`** 型は、ユーザーが簡単に時刻 (時と分、任意で秒) を入力できるように設計された入力欄を生成します。

コントロールのユーザーインターフェイスは、ブラウザーによってまちまちです。最近のブラウザーは対応が進んでおり、 Safari は有名なブラウザーの中で唯一実装していません。対応していないブラウザーでは、このコントロールは単純な [`<input type="text">`](/ja/docs/Web/HTML/Element/input/text) に格下げされます。

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

## 外観

### Chrome と Opera

Chrome/Opera では、 `time` コントロールはシンプルで、時と分をオペレーティングシステムのロケールに従って 12 時制または 24 時制で入力するスロットと、現在選択中の部分を増減するための上下の矢印から成ります。コントロールの値を消去する "X" ボタンが提供されています。

![Chrome の 12 時制の time input](chrome_time.png) 12-hour

![Chrome の 24 時制の time input](chrome-time.png) 24-hour

### Firefox

Firefox の `time` コントロールは Chrome のものとよく似ていますが、上下の矢印がありません。これも時刻の入力には、システムのロケールに従って 12 時制または 24 時制の書式を使用します。コントロールの値を消去するための "X" ボタンがあります。

![Firefox の 12 時制の time input](firefox-time.png) 12-hour

![Firefox の 24 時制の time input](firefox-time-24.png) 24-hour

### Edge

Edge の `time` コントロールはいくらかもっと精巧で、時と分を選択するスライドリールが開きます。 Chrome のように、時刻の入力にはシステムのロケールに従って12時制または24時制を使用します。

![Edge の 12 時制の time input](edge_time.png) 12-hour

![Edge の 24 時制の time input](edge-time.png) 24-hour

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("値")}}</strong></td>
   <td>時刻を表す {{domxref("DOMString")}}、または空欄。</td>
  </tr>
  <tr>
   <td><strong>イベント</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} および {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>対応する共通属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("step", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td>`value`, `valueAsDate`, `valueAsNumber`, `list`.</td>
  </tr>
  <tr>
   <td><strong>メソッド</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}</td>
  </tr>
 </tbody>
</table>

## 値

<div id="value-sample1">
入力欄に入力された時刻を表す {{domxref("DOMString")}} です。 `&lt;input&gt;` 要素が作成されたときに、次のように {{htmlattrxref("value", "input")}} 属性の中に時刻を含めることで、既定値を設定することができます。

<pre class="brush: html notranslate">&lt;label for="appt-time"&gt;予約時刻を選んでください: &lt;/label&gt;
&lt;input id="appt-time" type="time" name="appt-time" value="13:30"&gt;</pre>
</div>

{{ EmbedLiveSample('value-sample1', 600, 60) }}

次のように、 {{domxref("HTMLInputElement.value")}} プロパティを使って JavaScript の date 値を取得したり設定したりすることができます。

<pre class="brush: js notranslate">var timeControl = document.querySelector('input[type="time"]');
timeControl.value = '15:30';</pre>

<h3 id="Time_value_format" name="Time_value_format">時刻値の書式</h3>

`time` 入力欄の `value` は、常に先頭にゼロを含む24時制で `hh:mm` の書式であり、ユーザーのロケール (またはユーザーエージェント) に基づいて選択される入力書式とは関係ありません。時刻が秒を含む場合 ({{anch("Using the step attribute", "step 属性の使用")}}を参照) は、書式は常に `hh:mm:ss` です。この入力型で使用される時刻の値の形式について詳しくは、 [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Date_and_time_formats)の[時刻の文字列](/ja/docs/Web/HTML/Date_and_time_formats#Time_strings)をご覧ください。

この例では、時刻を入力すると time 入力欄の値が、どのように変化するかを見ることができます。

最初に、 HTML を見てください。これは以前見たラベルと入力欄だけで十分にシンプルですが、 {{HTMLElement("p")}} 要素と、 `time` 入力欄の値を表示する {{HTMLElement("span")}} があります。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label for="startTime"&gt;開始時刻: &lt;/label&gt;
  &lt;input type="time" id="startTime"&gt;
  &lt;p&gt;
    &lt;code&gt;time&lt;/code&gt; 入力欄の値: &lt;code&gt;
            "&lt;span id="value"&gt;n/a&lt;/span&gt;"&lt;/code&gt;.
  &lt;/p&gt;
&lt;/form&gt;</pre>

JavaScript コードは、 time 入力欄に {{domxref("HTMLElement/input_event", "input")}} イベントを監視するコードを追加し、 input 要素の中身が変更されるたびに呼び出されるようにします。これが発生すると、 `&lt;span&gt;` 要素の中身が input 要素の新しい値で置き換えられます。

<pre class="brush: js notranslate">var startTime = document.getElementById("startTime");
var valueSpan = document.getElementById("value");

startTime.addEventListener("input", function() {
  valueSpan.innerText = startTime.value;
}, false);</pre>

{{EmbedLiveSample("Time_value_format", 600, 80)}}

`time` 入力欄を含むフォームが送信されると、フォームのデータに含められる前に値がエンコードされます。 time 入力欄のフォームのデータ項目は、常に `name=hh%3Amm` の形式か、秒が含まれる場合は `name=hh%3Amm%3ass` の形式になります ({{anch("Using the step attribute", "step 属性の利用")}}を参照してください)。

追加の属性

すべての {{HTMLElement("input")}} 要素で共通する属性に加え、 `time` 型の入力欄は次の属性にも対応しています。

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Attribute</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`{{anch("list")}}`</td>
   <td>任意の定義済みの自動補完オプションを含む&lt;datalist&gt; 要素の id</td>
  </tr>
  <tr>
   <td>`{{anch("max")}}`</td>
   <td>受け付ける最も遅い時刻、{{anch("Time value format", "時刻値の書式")}}の構文による</td>
  </tr>
  <tr>
   <td>`{{anch("min")}}`</td>
   <td>妥当な入力として受け付ける最も早い時刻</td>
  </tr>
  <tr>
   <td>`{{anch("readonly")}}`</td>
   <td>論理属性で、存在する場合、 `time` 入力欄の内容はユーザーが編集できないことを示す</td>
  </tr>
  <tr>
   <td>`{{anch("step")}}`</td>
   <td>ユーザーインターフェイスや制約検証に使用する刻み値</td>
  </tr>
 </tbody>
</table>

<div class="callout-box">多くのデータ型とは異なり、時刻値は<strong>周期的範囲</strong>を持ち、値が最大値に達すると、最初の値に折り返します。例えば、 `min` を `14:00` に、 `max` を `2:00` に設定すると、許可される時間の値は午後2時から始まり、深夜を経て次の日の午前2時で終わります。詳しくは、この記事の[最小値と最大値が真夜中をまたぐようにする](#Making_min_and_max_cross_midnight)の節をご覧ください。</div>

<p id="htmlattrdeflist">{{page("/ja/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}</p>

<h3 id="htmlattrdefmax">{{htmlattrdef("max")}}</h3>

文字列で、受け付ける最も遅い時刻を示し、前述の同じ{{anch("Time value format", "時刻値の書式")}}で指定します。指定された文字列が妥当な時刻でなければ、最大値は設定されません。

<h3 id="htmlattrdefmin">{{htmlattrdef("min")}}</h3>

文字列で、受け付ける最も速い時刻を示し、前述の{{anch("Time value format", "時刻値の書式")}}で与えられます。指定された値が妥当な時刻の文字列でなければ、最小値は設定されません。

{{page("/ja/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

<h3 id="htmlattrdefstep">{{htmlattrdef("step")}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/number", "step-include")}}

`time` 入力欄では、 `step` の値は秒数で指定され、 1000 が乗じられます (ミリ秒単位の数値であるため)。 `step` の既定値は 60 であり、60秒 (1分、60000ミリ秒) を表します。

<em>現時点で、 `time` 入力欄で `step` に `any` の値が何を意味するかが不明確です。これは情報が決定次第、更新されるでしょう。</em>

<h2 id="Using_time_inputs" name="Using_time_inputs">time 入力欄の利用</h2>

日時の入力型の中で `time` はブラウザーが最も広く対応していますが、まだすべてとは言えないため、日付と時刻を入力する代替手段を提供する必要があり、そうすれば Safari のユーザー (およびその他の未対応のブラウザーのユーザー) も簡単に時刻の値を入力できるようになります。

`&lt;input type="time"&gt;` の基本的な使い方と少し複雑な使い方を見てみてから、その後でブラウザーの互換性の問題を緩和するアドバイスを提供しましょう ({{anch("Handling browser support", "ブラウザーの互換性の扱い")}}を参照してください)。

<h3 id="Basic_uses_of_time" name="Basic_uses_of_time">時刻入力欄の基本的な使用</h3>

もっとも単純な `&lt;input type="time"&gt;` の使用方法は、次のような基本的な `&lt;input&gt;` と {{htmlelement("label")}} 要素の組み合わせです。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label for="appt-time"&gt;予約時刻を選んでください: &lt;/label&gt;
  &lt;input id="appt-time" type="time" name="appt-time"&gt;
&lt;/form&gt;</pre>

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

<h3 id="Controlling_input_size" name="Controlling_input_size">入力欄の寸法の制御</h3>

`&lt;input type="time"&gt;` は、 {{htmlattrxref("size", "input")}} のようなコントロールの寸法に関する属性には対応していません。寸法を変更する必要がある場合は、 [CSS](/ja/docs/Web/CSS) を使用する必要があります。

<h3 id="Using_the_step_attribute" name="Using_the_step_attribute">step 属性の使用</h3>

{{htmlattrxref("step", "input")}} 属性を使用して、時刻を上下させるときに加減する時間の大きさを変更することができます (例えば、小さな矢印ウィジェットをクリックしたときに10分単位で時刻が動くように)。

<div class="note">
このプロパティはブラウザー間で異なる結果になることがあり、完全に信頼できるものではありません。
</div>

これは整数の値を取り、増加させたい秒数と同じ値になります。既定値は60秒、または1分です。60秒 (1分) よりも小さな値を指定した場合は、 `time` 入力欄は時と分の隣に秒の入力領域を表示します。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label for="appt-time"&gt;予約時刻を選んでください: &lt;/label&gt;
  &lt;input id="appt-time" type="time" name="appt-time" step="2"&gt;
&lt;/form&gt;</pre>

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

上下の操作を行う矢印を表示するブラウザーである Chrome と Opera では、矢印をクリックすると秒の値が2秒単位で変わりますが、時と分には影響しません。分 (または時) の刻みは、分 (または時) の数を秒数で指定した場合のみ使用されます (120 で2分刻み、 7200 で2時間刻みなど)。

Firefox では矢印はなく、 `step` の値は使用されません。しかし、この値を提供すると、秒の入力欄が分の部分のとなりに追加されます。

step の値は Edge には効果がないようです。

<div class="note">
`step` を使用しても、検証は正しく動作しないようです (次の節にある通り)。
</div>

<h2 id="Validation" name="Validation">検証</h2>

既定では、 `&lt;input type="time"&gt;` は入力された値の検証を行いません。ユーザーインターフェイスの実装は一般的に、日付でないものの入力をさせないからです。 (`time` 入力欄をユーザーエージェントが完全に対応していると仮定すれば) これは便利ですが、値を空文字列 (`""`) にすることが許されているため、値が正しい時刻文字列であることを完全に信頼することはできません。また、およそ妥当な時刻に見えるが正しくない値、例えば `25:05` を入力したりすることが可能です。

<h3 id="Setting_maximum_and_minimum_times" name="Setting_maximum_and_minimum_times">時刻の最大値と最小値の設定</h3>

{{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} 属性を使用して、ユーザーが選択できる時刻を制限することができます。次の例では、時刻の最小値を `12:00` に、時刻の最大値を `18:00` に設定しています。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label for="appt-time"&gt;予約時刻を選んでください (営業時間 12:00～18:00): &lt;/label&gt;
  &lt;input id="appt-time" type="time" name="appt-time"
         min="12:00" max="18:00"&gt;
  &lt;span class="validity"&gt;&lt;/span&gt;
&lt;/form&gt;</pre>

{{EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40)}}

上記の例の CSS です。 CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} プロパティを使用して、現在の値が有効かどうかに基づいてスタイルを設定しています。アイコンは入力欄そのものではなく、入力欄の隣の {{htmlelement("span")}} に置くようにしないと、 Chrome ではコントロールの内側にコンテンツを生成するので、正しく整形したり表示したりすることができません。

<pre class="brush: css notranslate">div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}</pre>

ここでの結果は次のようになります。

<ul>
 <li>12:00 から 18:00 までの時刻だけが有効として表示されます。この範囲を外れた時刻は無効として表示されます。</li>
 <li>使用しているブラウザーによっては、指定された範囲を外れた時刻が選択できることが分かります (Edge など)。</li>
</ul>

<h4 id="Making_min_and_max_cross_midnight" name="Making_min_and_max_cross_midnight">最小値と最大値が真夜中をまたぐようにする</h4>

{{htmlattrxref("min", "input")}} 属性に {{htmlattrxref("max", "input")}} 属性よりも大きな値を設定することで、有効な時間帯が真夜中をまたぐようにするために、有効な時間帯を真夜中で折り返させることができます。この機能は他の入力型では対応していません。この機能は[仕様書内](https://html.spec.whatwg.org/C/#has-a-reversed-range)に存在するものの、まだ全体では対応されていません。 Chrome ベースのブラウザーでは82版から対応しており、 Firefox は76版から対応しています。 Safari が追加するかどうか、いつ追加するかはまだ情報がありません。そうなることを見越して、準備しておきましょう。

<pre class="brush: js notranslate">const input = document.createElement('input');
input.type = 'time';
input.min = '23:00';
input.max = '01:00';
input.value = '23:59';

if (input.validity.valid &amp;&amp; input.type === 'time') {
  // &lt;input type=time&gt; が範囲の折り返しに対応している
} else {
  // &lt;input type=time&gt; が範囲の折り返しに対応していない
}
</pre>

<h3 id="Making_times_required" name="Making_times_required">時刻を必須にする</h3>

加えて、 {{htmlattrxref("required", "input")}} 属性を使用して、時刻の入力を必須にすることができます。結果として、対応するブラウザーでは設定範囲外または空欄の time 入力欄を送信しようとすると、エラーを表示します。

例を見てみましょう。時刻の最小値と最大値を設定し、かつ入力欄を必須に設定しています。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="appt-time"&gt;予約時刻を選んでください (営業時間 12:00～18:00): &lt;/label&gt;
    &lt;input id="appt-time" type="time" name="appt-time"
           min="12:00" max="18:00" required&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type="submit" value="フォームを送信"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

フォームに不完全な時刻 (または設定された範囲外の時刻) を設定して送信しようとすると、ブラウザーはエラーを表示します。例を実行してみてください。

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

`time` 入力欄に対応していないブラウザーを使用している場合は、こちらのスクリーンショットを参照してください。

<img alt="" src="https://mdn.mozillademos.org/files/15405/firefox-validation-message.png" style="display: block; margin: 0 auto;">

<div class="warning">
<strong>重要</strong>: HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ (または大きすぎるデータ、間違った種類のデータなど) が送信された場合に災害が発生するおそれがあります。
</div>

<h2 id="Handling_browser_support" name="Handling_browser_support">ブラウザーの対応の扱い</h2>

前述の通り、 Safari やその他の少数派のブラウザーは、まだ time 入力欄にネイティブに対応していません。一般に、それ以外では、よく対応されています。 — 特にモバイルプラットフォームでは、時刻の値を指定するのにとても良いユーザーインターフェイスを持つ傾向があります。例えば、 Android 版 Chrome の `time` ピッカーは次のようになっています。

<img alt="" src="https://mdn.mozillademos.org/files/15407/chrome-android-time.png" style="display: block; margin: 0 auto;">

対応していないブラウザーでは、文字列入力欄に安全に格下げされますが、これはユーザーインターフェイスの一貫性 (表示されるコントロールが異なること) とデータの扱いの両方で問題を生みます。

2番目の問題はより深刻です。すでに述べたように、 `time` 入力欄では、実際の値が常に `hh:mm` または `hh:mm:ss` の書式で正規化されます。一方、文字列入力欄では、既定でブラウザーは時刻がどの書式で入力されるかの認識がなく、以下のように人間が時刻を書く様々な方法で入力される可能性があります。

<ul>
 <li>`3.00 pm`</li>
 <li>`3:00pm`</li>
 <li>`15:00`</li>
 <li>`午後3時`</li>
 <li>etc.</li>
</ul>

これを回避する方法の一つとして、 `time` 入力欄に {{htmlattrxref("pattern", "input")}} 属性を付けるという方法があります。 `time` 入力欄はこれを使用しないので、 `text` 入力欄にフォールバックされたときにに使用されます。例えば、次の例を未対応のブラウザーで見てみてください。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="appt-time"&gt;予約時刻を選んでください (営業時間 12:00～18:00): &lt;/label&gt;
    &lt;input id="appt-time" type="time" name="appt-time"
           min="12:00" max="18:00" required
           pattern="[0-9]{2}:[0-9]{2}"&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type="submit" value="フォームを送信"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

{{EmbedLiveSample('Handling_browser_support', 600, 100)}}

`nn:nn` のパターン (`n` は数字の0から9) に一致しない文字列を入力して送信しようとすると、エラーメッセージが表示される (そして入力欄が無効として強調表示される) のが分かるでしょう。もちろん、これではユーザーが無効な日付を入力したり、誤った形式で日付や時刻を入力したりすることを止めることはできません。

それから、ユーザーからはどの様な時刻の書式が期待されているかが正確にわからないという問題があります。

<div class="hidden">
<pre class="brush: css notranslate">div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}</pre>
</div>

ブラウザーに依存しない方法によってフォームで時刻を扱う最善の方法は、現時点では、時と分 (および必要であれば秒) を別々なコントロール ({{htmlelement("select")}} 要素が一般的です。以下の実装を見てください) にするか、 [jQuery timepicker plugin](http://timepicker.co/) のような JavaScript ライブラリを使用することです。

<h2 id="Examples" name="Examples">例</h2>

この例では、時刻を選択するユーザーインターフェイスの要素を2組生成します。ネイティブの `&lt;input type="time"&gt;` 入力欄と、ネイティブの入力に対応しない古いブラウザー向けの、2つの {{htmlelement("select")}} 要素による時刻選択です。

{{EmbedLiveSample('Examples', 600, 140)}}

HTML は次のようになります。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div class="nativeTimePicker"&gt;
    &lt;label for="appt-time"&gt;予約時刻を選んでください (営業時間 12:00～18:00): &lt;/label&gt;
      &lt;input id="appt-time" type="time" name="appt-time"
             min="12:00" max="18:00" required&gt;
      &lt;span class="validity"&gt;&lt;/span&gt;
    &lt;/div&gt;
  &lt;p class="fallbackLabel"&gt;予約時刻を選んでください (営業時間 12:00～18:00):&lt;/p&gt;
  &lt;div class="fallbackTimePicker"&gt;
    &lt;div&gt;
      &lt;span&gt;
        &lt;select id="hour" name="hour"&gt;
        &lt;label for="hour"&gt;時&lt;/label&gt;
        &lt;/select&gt;
      &lt;/span&gt;
      &lt;span&gt;
        &lt;select id="minute" name="minute"&gt;
        &lt;label for="minute"&gt;分&lt;/label&gt;
        &lt;/select&gt;
      &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

`&lt;select&gt;` 要素に入れる時と分の値は、動的に生成されます。

<div class="hidden">
<pre class="brush: css notranslate">div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}</pre>
</div>

もう一つの面白い部分は、機能の検出コードです。ブラウザーが `&lt;input type="time"&gt;` に対応しているかどうかを検出するために、新たな {{htmlelement("input")}} 要素を生成し、その `type` を `time` に設定してみて、すぐにどの type に設定されたかをチェックします。 `time` 型に対応していないブラウザーでは、 `time` 型が `text` 型で代替されます。 `&lt;input type="time"&gt;` に対応していない場合は、ネイティブの時刻入力欄を非表示にしてフォールバック用の ({{htmlelement("select")}}) による選択ユーザーインターフェイスを表示します。

<pre class="brush: js notranslate">// 変数の宣言
var nativePicker = document.querySelector('.nativeTimePicker');
var fallbackPicker = document.querySelector('.fallbackTimePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var hourSelect = document.querySelector('#hour');
var minuteSelect = document.querySelector('#minute');

// 最初はフォールバックを非表示にする
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// 新しい日付入力が文字列入力にフォールバックされるかどうか
var test = document.createElement('input');

try {
  test.type = 'time';
} catch (e) {
  console.log(e.description);
}

// もし文字列入力になるならば、 if() {} ブロックの中のコードを実行する
if(test.type === 'text') {
  // ネイティブの日付選択を隠してフォールバック版を表示
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // 時と分を動的に生成する
  populateHours();
  populateMinutes();
}

function populateHours() {
  // 時刻の &lt;select&gt; に営業時間の6時間分を生成する
  for(var i = 12; i &lt;= 18; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // 分の &lt;select&gt; に1時間内の60分を生成する
  for(var i = 0; i &lt;= 59; i++) {
    var option = document.createElement('option');
    option.textContent = (i &lt; 10) ? ("0" + i) : i;
    minuteSelect.appendChild(option);
  }
}

// 時が18になったら、分を00に設定する
// — 18:00 以降を選択できなくする
 function setMinutesToZero() {
   if(hourSelect.value === '18') {
     minuteSelect.value = '00';
   }
 }

 hourSelect.onchange = setMinutesToZero;
 minuteSelect.onchange = setMinutesToZero;</pre>

## 仕様書

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
   <td>{{SpecName('HTML WHATWG', 'forms.html#time-state-(type=time)', '&lt;input type="time"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("html.elements.input.input-time")}}

## 関連情報

<ul>
 <li>全般的な {{HTMLElement("input")}} およびその操作に使用する {{domxref("HTMLInputElement")}} インターフェイス</li>
 <li>[HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Date_and_time_formats)</li>
 <li>[日付と時刻の選択のチュートリアル](/ja/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)</li>
 <li>`[&lt;input type="datetime-local"&gt;](/ja/docs/Web/HTML/Element/input/datetime-local)`, `[&lt;input type="date"&gt;](/ja/docs/Web/HTML/Element/input/date)`, `[&lt;input type="week"&gt;](/ja/docs/Web/HTML/Element/input/week)`, `[&lt;input type="month"&gt;](/ja/docs/Web/HTML/Element/input/month)`</li>
 <li>[CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)</li>
</ul>
