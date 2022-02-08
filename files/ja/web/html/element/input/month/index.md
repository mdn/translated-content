---
title: <input type="month">
slug: Web/HTML/Element/input/month
tags:
  - Date picker
  - 要素
  - Form input
  - フォーム
  - HTML
  - HTML フォーム
  - HTML input
  - Input
  - 入力要素
  - 入力型
  - Number
  - リファレンス
  - month
translation_of: Web/HTML/Element/input/month
---
{{HTMLRef("Input_types")}}

<span class="seoSummary">{{HTMLElement("input")}} 要素の <strong>`month`</strong> 型は、ユーザーが年と月を入力できるようにする入力フィールドを作成し、年と月を簡単に入力できるようにします。値は "`YYYY-MM`" の形式の文字列で、 `YYYY` は4桁の年、 `MM` は月の番号です。</span>

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</div>

コントロールのユーザーインターフェイスは、一般にブラウザーによって異なります。現時点では対応が不安定であり、デスクトップ版の Chrome/Opera と Edge — および最新のバージョンのモバイルブラウザー — のみに利用可能な実装があります。 `month` 入力欄に対応していないブラウザーでは、コントロールは単純な `[&lt;input type="text"&gt;](/ja/docs/Web/HTML/Element/input/text)` に格下げされますが、入力されたテキストが期待されている形式であることを保証するための自動検証が行われることもあります。

`month` に対応していないブラウザーを使用している場合のために、このスクリーンショットで Chrome と Opera でどのように見えるかを示します。右端にある下向き矢印をクリックすると、年と月を選択できる日付選択が表示されます。

<img alt="" src="https://mdn.mozillademos.org/files/15391/month-control-chrome.png" style="display: block; height: 216px; margin: 0px auto; width: 273px;">

Microsoft Edge では、 `month` コントロールはこのように表示されます。

<img alt="" src="https://mdn.mozillademos.org/files/15393/month-control-edge.png" style="display: block; height: 389px; margin: 0px auto; width: 227px;">

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("値")}}</strong></td>
   <td>年と月を表す {{domxref("DOMString")}}、または空欄</td>
  </tr>
  <tr>
   <td><strong>イベント</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} および {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>対応している共通属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("step", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td>`value`</td>
  </tr>
  <tr>
   <td><strong>メソッド</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}</td>
  </tr>
 </tbody>
</table>

## 値

{{domxref("DOMString")}} で、入力欄に入力された年と月の値を YYYY-MM (4桁以上の年に続いてハイフン ("`-`")、続いて2桁の月) の形式で表します。この入力型で使用される時刻の値の形式について詳しくは、 [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Date_and_time_formats)の[月の文字列をご覧ください。](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)

[入力コントロールの既定値は、次のように {{htmlattrxref("value", "input")}} 属性に年と月を入れることで設定することができます。](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)

<div id="value-example-1">
<pre class="brush: html notranslate"><a href="/ja/docs/Web/HTML/Date_and_time_formats#Month_strings">&lt;label for="bday-month"&gt;生まれた月は？&lt;/label&gt;
&lt;input id="bday-month" type="month" name="bday-month" value="2017-06"&gt;</a></pre>

[{{EmbedLiveSample('value-example-1', 600, 60)}}](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)
</div>

[一点気を付けなければならないことは、表示される日付の書式は実際の `value` とは異なるということです。多くの{{Glossary("user agent", "ユーザーエージェント")}}は、年と月をユーザーのオペレーティングシステムに設定されたロケールに適した形式で表示しますが、日付の `value` は常に `yyyy-MM` の書式です。](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)

[When the above value is submitted to the server, for example, it will look like `bday-month=1978-06`.](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)

[次のように、 JavaScript で {{domxref("HTMLInputElement.value", "value")}} プロパティを使用して、日付の値を取得したり設定したりすることもできます。](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)

<div id="value-example-2">
<div class="hidden">
<pre class="brush: html notranslate"><a href="/ja/docs/Web/HTML/Date_and_time_formats#Month_strings">&lt;label for="bday-month"&gt;生まれた月は？&lt;/label&gt;
&lt;input id="bday-month" type="month" name="bday-month" value="2017-06"&gt;</a></pre>
</div>

<pre class="brush: js notranslate"><a href="/ja/docs/Web/HTML/Date_and_time_formats#Month_strings">var monthControl = document.querySelector('input[type="month"]');
monthControl.value = '1978-06';</a></pre>

[{{EmbedLiveSample("value-example-2", 600, 60)}}](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)
</div>

<h2 id="Additional_attributes" name="Additional_attributes">[追加の属性](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</h2>

[すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `month` 型の入力欄は次の属性にも対応しています。](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">[属性](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</th>
   <th scope="col">[説明](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>[`{{anch("list")}}`](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
   <td>[オプションで自動補完の定義済みの選択肢を含む &lt;datalist&gt; 要素の id](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
  </tr>
  <tr>
   <td>[`{{anch("max")}}`](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
   <td>[受け付ける最新の年月](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
  </tr>
  <tr>
   <td>[`{{anch("min")}}`](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
   <td>[受け付ける最古の年月](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
  </tr>
  <tr>
   <td>[`{{anch("readonly")}}`](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
   <td>[論理属性で、存在すれば、入力欄の値が編集できないことを示す](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
  </tr>
  <tr>
   <td>[`{{anch("step")}}`](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
   <td>[上下の矢印で値を調整する時や、検証に使用する刻み値](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</td>
  </tr>
 </tbody>
</table>

<p id="htmlattrdeflist">[{{page("/ja/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</p>

<h3 id="htmlattrdefmax">[{{htmlattrdef("max")}}](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)</h3>

[最新の年月で、上記の{{anch("値")}}で説明した文字列の書式です。要素に入力された {{htmlattrxref("value", "input")}} がこの日付よりも後の場合、要素は](/ja/docs/Web/HTML/Date_and_time_formats#Month_strings)[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。 `max` 属性の値が "`yyyy-MM`" の書式に従う妥当な文字列でない場合、要素は最大値を持ちません。

この値は `min` 属性で指定されたものより後か、同じ年月を指定する必要があります。

<h3 id="htmlattrdefmin">{{htmlattrdef("min")}}</h3>

受け付ける最古の年月で、前述と同じ `yyyy-MM` の書式です。要素の {{htmlattrxref("value", "input")}} がこれより前の場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)に失敗します。 `min` 属性の値が "`yyyy-MM-dd`" の書式に従う妥当な文字列でない場合、要素は最小値を持ちません。

この値は `max` 属性で指定されたものより前か、同じ年月を指定する必要があります。

<h3 id="htmlattrdefreadonly">{{htmlattrdef("readonly")}}</h3>

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `value` は、 JavaScript コードから直接 {{domxref("HTMLInputElement.value")}} プロパティを設定することで変更することができます。

<div class="note">
<strong>注:</strong> 読み取り専用フィールドは値を持てないため、 `required` は `readonly` 属性も指定されている入力欄には効果がありません。
</div>

<h3 id="htmlattrdefstep">{{htmlattrdef("step")}}</h3>

{{page("/ja/docs/Web/HTML/Element/input/number", "step-include")}}

`date` 入力欄では、 `step` の値は月数で指定され、倍率は1です (数値も月単位であるため)。 `step` の既定値は 1 です。

<h2 id="Using_month_inputs" name="Using_month_inputs">month 入力欄の使用</h2>

日付に関する入力欄は (`month` を含め) 一見すると便利に見えます。日付の選択に簡単なユーザーインターフェイスを提供し、サーバーに送信するデータの書式をユーザーのロケールに関係なく正規化してくれます。しかし、現時点ではブラウザーの対応が限定されているため、 `&lt;input type="month"&gt;` には問題があります。

`&lt;input type="month"&gt;` の基本的な使い方と少し複雑な使い方を見てみてから、その後でブラウザーの互換性の問題を緩和するアドバイスを提供しましょう ({{anch("Handling browser support", "ブラウザーの互換性の扱い")}} を参照してください)。

<h3 id="Basic_uses_of_month" name="Basic_uses_of_month">月入力の基本的な使用</h3>

もっとも単純な `&lt;input type="month"&gt;` の使用方法は、次のように基本的な {{HTMLElement("input")}} と {{htmlelement("label")}} 要素の組み合わせです。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label for="bday-month"&gt;生まれた月を入力してください。&lt;/label&gt;
  &lt;input id="bday-month" type="month" name="bday-month"&gt;
&lt;/form&gt;</pre>

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

<h3 id="Setting_maximum_and_minimum_dates" name="Setting_maximum_and_minimum_dates">日付の最大値と最小値の設定</h3>

{{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} 属性を使用して、ユーザーが選択できる日付の範囲を制限することができます。次の例では、日付の最小値を `1900-01` に、日付の最大値を `1999-12` に指定しています。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label for="bday-month"&gt;生まれた月を入力してください。&lt;/label&gt;
  &lt;input id="bday-month" type="month" name="bday-month"
         min="1900-01" max="1999-12"&gt;
&lt;/form&gt;</pre>

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

次のような結果になります。

<ul>
 <li>1900年1月から1999年12月までの間の月のみが選択できます。この範囲から外れた月は、コントロール内でスクロールできません。</li>
 <li>使用しているブラウザーによりますが、指定された範囲外の月が月選択で選択できないか (Edge など)、無効になるものの ({{anch("Validation", "検証")}} を参照) 選択できるか (Chrome など) だということが分かるでしょう。</li>
</ul>

<h3 id="Controlling_input_size" name="Controlling_input_size">入力欄の寸法の制御</h3>

`&lt;input type="month"&gt;` は {{htmlattrxref("size", "input")}} のような寸法に関する属性には対応していません。寸法を変更する必要がある場合は、 [CSS](/ja/docs/Web/CSS) を使用する必要があります。

<h2 id="Validation" name="Validation">検証</h2>

既定で、 `&lt;input type="month"&gt;` は入力された値の検証を行いません。ユーザーインターフェイスの実装は一般的に、日付でないものの入力をさせないからです。これは便利です。しかし、それでも `month` 入力欄を空のまま、または無効な日付 (例えば4月32日など) を入力してフォームを送信することが可能です。

これを防ぐために、 {{htmlattrxref("min", "input")}} と {{htmlattrxref("max", "input")}} を用いて利用可能な日を制限することができ ({{anch("Setting maximum and minimum dates", "日付の最大値と最小値の設定")}} を参照)、加えて {{htmlattrxref("required", "input")}} 属性を用いて、日付を入力することを必須にすることができます。結果として、対応しているブラウザーは、範囲外の日付や空の日付フィールドを送信しようとするとエラーを表示します。

例を見てみましょう。ここで日付の最小値と最大値を設定し、入力欄を必須にしました。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="month"&gt;何月にいらっしゃいますか？ (夏期間のみ、 yyyy-mm)&lt;/label&gt;
    &lt;input id="month" type="month" name="month"
           min="2017-06" max="2017-09" required&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type="submit" value="フォームを送信"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

年と月を指定せずに (または設定した範囲を外れた日付を) 送信しようとすると、ブラウザーはエラーを表示します。例を実行してみましょう。

{{EmbedLiveSample('Validation', 600, 120)}}

対応しているブラウザーで入力しなかった場合のスクリーンショットです。

<img alt="" src="https://mdn.mozillademos.org/files/15395/month-required.png" style="display: block; margin: 0 auto;">

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

<div class="warning">
<strong>重要</strong>: HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ (または大きすぎるデータ、誤った種類のデータなど) が送信された場合に障害が発生するおそれがあります。
</div>

<h2 id="Handling_browser_support" name="Handling_browser_support">ブラウザーの対応の扱い</h2>

前述のように、現時点で日付入力を書く上で一番の問題は、多くの主要なブラウザーがまだすべてを実装している訳ではないということです。デスクトップでは Chrome/Opera と Edge のみが対応しており、モバイルでは多くの最新のブラウザーが対応しています。例えば、 `month` の選択画面は Android 版 Chrome ではこのように表示されます。

<img alt="" src="https://mdn.mozillademos.org/files/15397/month-android.png" style="display: block; margin: 0 auto;">

対応していないブラウザーでは、文字列入力欄に安全に格下げされますが、これはユーザーインターフェイスの一貫性 (表示されるコントロールが異なること) とデータの扱いの両方で問題を生みます。

2番目の問題はより深刻です。すでに述べたように、 `month` 入力欄では、実際の値が常に `yyyy-mm` の書式で正規化されます。一方、既定の設定では、 `text` 入力欄ではどの書式で入力されるかの認識がなく、以下のように人間が日付を書く様々な方法で入力される可能性があります。

<ul>
 <li>`yyyy/mm` (2018/07)</li>
 <li>`yyyymm` (201807)</li>
 <li>`mm-yyyy` (07-2018)</li>
 <li>`yyyy-mm` (2018-07)</li>
 <li>`Month yyyy` (July 2018)</li>
 <li>... などなど。</li>
</ul>

これを回避する方法の一つは、 `month` 入力欄に {{htmlattrxref("pattern", "input")}} 属性を付けることです。 `month` 入力欄はこれを使用しないので、 `text` 入力欄などとして扱うようフォールバックされたときに、このパターンを使用します。例えば、次の例を `month` 入力欄に未対応のブラウザーで見てみてください。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="month"&gt;何月にいらっしゃいますか？ (夏期間のみ、 yyyy-mm)&lt;/label&gt;
    &lt;input id="month" type="month" name="month"
           min="2017-06" max="2017-09" required
           pattern="[0-9]{4}-[0-9]{2}"&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div&gt;
      &lt;input type="submit" value="フォームを送信"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

{{ EmbedLiveSample('Handling_browser_support', 600, 100) }}

`nnnn-nn` のパターン (`n` は数字の0から9) に一致しない文字列を入力して送信しようとすると、エラーメッセージが表示される (そして入力欄が無効として強調表示される) のが分かるでしょう。もちろん、これでユーザーが無効な日付を入力したり (`0000-42` など)、パターンに合わない誤った書式の日付が入力されたりすることを止めることはできません。

また、ユーザーが数ある日付形式の中で期待されるものがどれであるかを知らない可能性もあります。後はその分の作業が残っています。

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

(すべての主要なブラウザーが対応するまでの間) ブラウザーに依存しない方法によってフォームで日付を扱う最善の方法は、ユーザーが年と月を別々なコントロール ({{htmlelement("select")}} 要素が一般的です。以下の実装を見てください) に入力するようにするか、 [jQuery date picker](https://jqueryui.com/datepicker/) のような JavaScript ライブラリを使用することです。

<h2 id="Examples" name="Examples">例</h2>

この例では、ユーザーが都市と月を選択できるよう設計されたユーザーインターフェイスの要素を2組作成します。一つ目はネイティブの `month` 入力欄であり、もう一つは年と月を個別に選択することができる一組の {{HTMLElement("select")}} 要素で、まだ `&lt;input type="month"&gt;` に対応していないブラウザーのためのものです。

{{EmbedLiveSample('Examples', 600, 140)}}

<h3 id="HTML">HTML</h3>

年と月を入力するフォームはこのようになります。

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div class="nativeDatePicker"&gt;
    &lt;label for="month-visit"&gt;何月にいらっしゃいますか？&lt;/label&gt;
    &lt;input type="month" id="month-visit" name="month-visit"&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;p class="fallbackLabel"&gt;何月にいらっしゃいますか？&lt;/p&gt;
  &lt;div class="fallbackDatePicker"&gt;
    &lt;div&gt;
      &lt;span&gt;
        &lt;select id="year" name="year"&gt;
        &lt;/select&gt;
        &lt;label for="year"&gt;年&lt;/label&gt;
      &lt;/span&gt;
      &lt;span&gt;
        &lt;select id="month" name="month"&gt;
          &lt;option selected&gt;1&lt;/option&gt;
          &lt;option&gt;2&lt;/option&gt;
          &lt;option&gt;3&lt;/option&gt;
          &lt;option&gt;4&lt;/option&gt;
          &lt;option&gt;5&lt;/option&gt;
          &lt;option&gt;6&lt;/option&gt;
          &lt;option&gt;7&lt;/option&gt;
          &lt;option&gt;8&lt;/option&gt;
          &lt;option&gt;9&lt;/option&gt;
          &lt;option&gt;10&lt;/option&gt;
          &lt;option&gt;11&lt;/option&gt;
          &lt;option&gt;12&lt;/option&gt;
        &lt;/select&gt;
        &lt;label for="month"&gt;月&lt;/label&gt;
      &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

`nativeDatePicker` の ID がついた {{HTMLElement("div")}} は、年と月をリクエストするために `month` 入力欄を用いるのに対し、 `fallbackDatePicker` の ID がついた `&lt;div&gt;` は代わりに一組の `&lt;select&gt;` 要素を使用します。一つ目は年を、二つ目は月を入力します。

月を選択する `&lt;select&gt;` は、変化しないので月をハードコーディングしています (ローカライズの問題が残っていますが)。年に利用できる値は、現在の年に応じて動的に生成されます (どのように動作するかについての詳細な説明は、以下のコードのコメントを参照してください)。

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

<h3 id="JavaScript">JavaScript</h3>

どちらの方法を使用するかを選択し、非ネイティブの年の `&lt;select&gt;` に年の一覧を設定する JavaScript コードは以下の通りです。

この例の面白いもう一つの部分は、機能の検出コードです。ブラウザーが `&lt;input type="month"&gt;` に対応しているかどうかを検出するために、新たな {{htmlelement("input")}} 要素を生成し、その `type` を `month` に設定して、すぐに type に何が設定されたかをチェックします。対応していないブラウザーでは、 `month` が フォールバックされて `text` が返されます。 `&lt;input type="month"&gt;` に対応していない場合は、ネイティブの日付選択を非表示にしてフォールバック用の選択ユーザーインターフェイスを表示します。

<pre class="brush: js notranslate">// define variables
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');

// hide fallback initially
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// test whether a new date input falls back to a text input or not
var test = document.createElement('input');

try {
  test.type = 'month';
} catch (e) {
  console.log(e.description);
}

// if it does, run the code inside the if() {} block
if(test.type === 'text') {
  // hide the native picker and show the fallback
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // populate the years dynamically
  // (the months are always the same, therefore hardcoded)
  populateYears();
}

function populateYears() {
  // get the current year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year &lt;select&gt;
  for(var i = 0; i &lt;= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}</pre>

<div class="note">
<strong>注</strong>: 53週ある年もあることを忘れないでください（[年あたりの週数](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year)を参照）。商品のアプリを開発するときはこれを念頭に置いておく必要があります。
</div>

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
   <td>{{SpecName('HTML WHATWG', 'forms.html#month-state-(type=month)', '&lt;input type="month"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("html.elements.input.input-month")}}

## 関連情報

<ul>
 <li>全般的な {{HTMLElement("input")}} およびその操作に使用する{{domxref("HTMLInputElement")}} インターフェイス</li>
 <li>[HTML で使用される日付と時刻の書式](/ja/docs/Web/HTML/Date_and_time_formats)</li>
 <li>[日付と時刻の選択のチュートリアル](/ja/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)</li>
 <li>`[&lt;input type="datetime-local"&gt;](/ja/docs/Web/HTML/Element/input/datetime-local)`, `[&lt;input type="date"&gt;](/ja/docs/Web/HTML/Element/input/date)`, `[&lt;input type="time"&gt;](/ja/docs/Web/HTML/Element/input/time)`, `[&lt;input type="week"&gt;](/ja/docs/Web/HTML/Element/input/week)`</li>
 <li>[CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)</li>
</ul>
