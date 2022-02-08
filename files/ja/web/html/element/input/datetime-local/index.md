---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
tags:
  - 日付
  - 日付と時刻
  - 要素
  - Form input
  - HTML
  - HTML フォーム
  - Input
  - 入力要素
  - 入力型
  - リファレンス
  - 時刻
  - datetime-local
browser-compat: html.elements.input.input-datetime-local
translation_of: Web/HTML/Element/input/datetime-local
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`datetime-local`** 型は、ユーザーが簡単に日付と時刻、つまり年、月、日と時、分を入力することができる入力コントロールを生成します。ユーザーのローカルタイムゾーンが使用されます。

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

コントロールのユーザーインターフェイスは、ブラウザーが対応していない場合、このコントロールは単純な [`<input type="text">`](/ja/docs/Web/HTML/Element/input/text) に格下げされます。

このコントロールは単純に*ローカルの日付と時刻*を表現するためのものであって、*ユーザーのローカルの日付と時刻*を示すとは限りません。言い換えれば、実装では有効な年、月、日、時、分をすべて、仮にその組み合わせがユーザーのタイムゾーンで無効であったとしても (春の夏時間への移行ギャップなど)、許可するべきです。一部のモバイルブラウザーは (特に iOS のものは) これを正しく実装していません。

`datetime-local` は限られたブラウザーしか対応しておらず、入力欄の動作が様々であるため、現在はこれを表示するためにフレームワークやライブラリを使用するか、独自のカスタム入力欄をした方が良いかもしれません。また、 `date` と `time` の入力欄を別々に使用すると、 `datetime-local` よりも対応が広くなります。

一部のブラウザーでは、テキストのみの入力要素を表示し、結果をサーバーに送信する前に妥当な日付/時刻値であることを検証するものもありますが、予期しない動作をすることがあるので、この動作に頼るべきではありません。

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("値")}}</strong></td>
      <td>
        (ローカルタイムゾーンでの) 日付と時刻を表す {{domxref("DOMString")}}、または空欄。
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("readonly", "input")}},
        {{htmlattrxref("step", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>valueAsNumber</code>.
      </td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
  </tbody>
</table>

## 値

入力欄に入力された日付の値を表す {{domxref("DOMString")}} です。この入力型で使われる日付と時刻の値の形式は、[ローカル日時の文字列](/ja/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings)で説明されています。

次のように、 {{htmlattrxref("value", "input")}} 属性に日付と時刻を入れることで、入力欄の既定値を設定することができます。

```html
<label for="party">パーティーを予約する日時を入力してください。</label>
<input id="party" type="datetime-local" name="partydate" value="2017-06-01T08:30">
```

{{ EmbedLiveSample('Value', 600, 60) }}

一点気を付けなければならないことは、表示される日付と時刻の書式は実際の `value` とは異なることです。表示される日付と時刻は、オペレーティングシステムからの報告に従ってユーザーのロケールによって書式化されますが、日付や時刻の `value` は常に `YYYY-MM-DDThh:mm` の書式です。例えば、上記の値をサーバーに送信すると、 `partydate=2017-06-01T08:30` のようになります。

> **Note:** このようなデータが HTTP の [`GET`](/ja/docs/Web/HTTP/Methods/GET) を通じて送信されると、コロン文字を URL 引数に含めるために、 `partydate=2017-06-01T08%3A30` のようにエスケープする必要があることもお忘れなく。これを行う方法の一つとして {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} を参照してください。

次のように、 JavaScript で {{domxref("HTMLInputElement")}} の `value` プロパティを使用して日付の値を取得したり設定したりすることもできます。

```js
var dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = '2017-06-01T08:30';
```

JavaScript の {{jsxref("Date")}} には、数値の日時情報を正しく整形された文字列に変換したり、手動で行ったりするメソッドがいくつかあります。例えば、この用途では {{jsxref("Date.toISOString()")}} メソッドが利用できます。

## 追加の属性

すべての {{HTMLElement("input")}} 要素で共通する属性に加え、 `datetime-local` 型の入力欄は次の属性にも対応しています。

### max

受け付ける最新の日時です。要素に入力された {{htmlattrxref("value", "input")}} がこのタイムスタンプよりも後の場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 `max` 属性の値が `YYYY-MM-DDThh:mm` の書式に従う妥当な文字列でない場合、要素は最大値を持ちません。

この値は `min` 属性で指定されたものより後か、同じ日付を指定する必要があります。

### min

受け付ける最古の日時です。これより前のタイムスタンプの場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 `min` 属性の値が `YYYY-MM-DDThh:mm` の書式に従う妥当な文字列でない場合、要素は最小値を持ちません。

この値は `max` 属性で指定されたものより前か、同じ日付を指定する必要があります。

### step

`step` 属性は値が吸着する粒度を指定する数値、または後述する特殊な値 `any` です。刻みの基準値に等しい値（指定されていれば `{{anch("min")}}`、そうでなければ {{htmlattrxref("value", "input")}}、どちらも設定されていなければ適切な既定値）のみが妥当となります。

文字列値の `any` は、刻みがなく、どの値でも許可されることを意味します（`{{anch("min")}}` や `{{anch("max")}}` など、他の制約には制限されます）。

> **Note:** ユーザーがデータを入力したときには刻みの設定には吸着せず、{{Glossary("user agent", "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`datetime-local` 入力欄では、 `step` の値は秒数で指定され、 1000 が乗じられます (ミリ秒単位の数値であるため)。 `step` の既定値は 60 であり、60秒 (1分、60000ミリ秒) を表します。

_現時点で、 `datetime-local` 入力欄で `step` に `any` の値が何を意味するかが不明確です。これは情報が決定次第、更新されるでしょう。_

## datetime-local 入力の使用

日付や時刻の入力欄は一見すると便利に見えます。簡単に日付と時刻を選択するユーザーインターフェイスを提供し、ユーザーのロケールに関係なく、データ形式を正規化してサーバーに送信するからです。しかし、ブラウザーの互換性が限られているため、 `<input type="datetime-local">` には問題があります。

`<input type="datetime-local">` の基本的な使い方と少し複雑な使い方を見てみてから、その後でブラウザーの互換性の問題を緩和するアドバイスを提供しましょう ({{anch("ブラウザーの対応の扱い")}}を参照してください)。

### datetime-local の基本的な使用

もっとも単純な `<input type="datetime-local">` の使用方法は、次のような基本的な `<input>` と {{htmlelement("label")}} 要素の組み合わせです。

```html
<form>
    <label for="party">パーティーを予約する日時を入力してください。</label>
    <input id="party" type="datetime-local" name="partydate">
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### 日時の最大値と最小値の設定

{{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} 属性を使用して、ユーザーが選択できる日時を制限することができます。次の例では、日時の最小値を `2017-06-01T08:30` に、日時の最大値を `2017-06-30T16:30` に設定しています。

```html
  <form>
    <label for="party">パーティーを予約する日時を入力してください。</label>
    <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30">
  </form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

結果は次のようになります。

- この結果は、 2017 年の 6 月の日付のみが選択できるようになります。文字列値の「日」の部分のみが編集可能となり、日付選択ウィジェットで 6 月以外にスクロールすることはできなくなります。
- どのブラウザーを使用するかによって、指定された値の範囲外の時刻が時刻選択画面で選択できなかったり (Edge など)、無効な値 ({{anch("検証")}}を参照) であっても設定できたりすることがあります (Chrome など)。

> **Note:** {{htmlattrxref("step", "input")}} 属性を使用すると、日時を加算するたびに飛ばす日時を設定できるはずです (例えば、土曜日のみを選択できるようにしたい場合など)。しかし、執筆時点でどの実装も正しく動作していないようです。

### 入力欄の寸法の制御

`<input type="datetime-local">` は、 {{htmlattrxref("size", "input")}} のようなコントロールの寸法に関する属性には対応していません。寸法を変更する必要がある場合は、 [CSS](/ja/docs/Web/CSS) を使用する必要があります。

### タイムゾーンの設定

`datetime-local` 入力型はコントロールのタイムゾーンやロケールを設定する方法がありません。これは [`datetime`](/ja/docs/Web/HTML/Element/input/datetime) 入力型では利用できましたが、この入力型は廃止され、仕様書から削除されました。削除された主な理由はブラウザーの互換性がなく、ユーザーインターフェイスや使い勝手が決まっていなかったからです。単に日付と時刻を設定するコントロールを用意して、別なコントロールで地域を設定したほうが簡単です。

例えば、ユーザーがログインしている場所によって地域を設定するようなシステムを開発する場合、タイムゾーンを [`hidden`](/ja/docs/Web/HTML/Element/input/hidden) 入力型で次のように提供することができます。

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00">
```

一方、ユーザーに日時入力と共にタイムゾーンを入力できるようにする必要がある場合、 {{htmlelement("select")}} 要素などでタイムゾーンを入力する手段を提供することができます。

```html
<select name="timezone" id="timezone">
    <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
    <option value="Pacific/Midway">Midway Island, Samoa</option>
    <option value="Pacific/Honolulu">Hawaii</option>
    <option value="Pacific/Marquesas">Taiohae</option>
    <!-- and so on -->
</select>
```

どちらの場合も、日時の値とタイムゾーンの値はサーバーに別々のデータポイントとして送信されるため、サーバー側のデータベースに適切に格納する必要があります。

## 検証

既定では、 `<input type="datetime-local">` は入力された値の検証を行いません。ユーザーインターフェイスの実装は一般的に、日付でないものの入力をさせないからです。これは便利です。しかし、それでも入力欄を空のままにしたり、 (`text` 型にフォールバックするブラウザーにおいて) 無効な日付 (例えば 4 月 32 日など) を入力したりすることが可能です。

{{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} を使用して有効な日付を制限したり ({{anch("日付の最大値と最小値の設定")}}を参照)、 {{htmlattrxref("required", "input")}} 属性を使用して日時の入力を必須にしたりすることができます。その結果、対応しているブラウザーでは、範囲を外れた日付や空の日付欄を送信しようとするとエラーが表示されるでしょう。

例を見てみましょう。ここで日付の最小値と最大値を設定し、入力欄を必須にしました。

```html
<form>
    <div>
        <label for="party">希望するパーティーの日時を選択して下さい (必須、 6 月 1 日午前 8:30 ～ 6 月 30 日午後 4:30) </label>
        <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30" required>
        <span class="validity"></span>
    </div>
    <div>
        <input type="submit" value="予約する！">
    </div>
</form>
```

不完全な日付 (または設定した範囲を外れた日付) を送信しようとすると、ブラウザーはエラーを表示します。例を実行してみましょう。

{{ EmbedLiveSample('Validation', 600, 120) }}

上記の例の CSS です。 CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} プロパティを使用して、現在の値が有効かどうかに基づいてスタイルを設定しています。アイコンは入力欄そのものではなく、入力欄の隣の {{htmlelement("span")}} に置くようにしないと、 Chrome ではコントロールの内側にコンテンツを生成するので、正しく整形したり表示したりすることができません。

```css
div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid+span:after {
    content: '✖';
    padding-left: 5px;
}

input:valid+span:after {
    content: '✓';
    padding-left: 5px;
}
```

> **Warning:** HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ (または大きすぎるデータ、誤った種類のデータなど) が送信された場合に障害が発生するおそれがあります。

## ブラウザーの対応の扱い

前述のように、対応していないブラウザーでは、文字列入力欄に安全に格下げされますが、これはユーザーインターフェイスの一貫性 (表示されるコントロールが異なること) とデータの扱いの両方で問題を生みます。

2 番目の問題はより深刻です。すでに述べたように、 `datetime-local` 入力欄では、実際の値が常に `YYYY-MM-DDThh:mm` の書式で正規化されます。一方、文字列入力欄では、既定でブラウザーは日付がどの書式で入力されるかの認識がなく、以下のように人間が日付と時刻を書く様々な方法で入力される可能性があります。

- `DDMMYYYY`
- `DD/MM/YYYY`
- `MM/DD/YYYY`
- `DD-MM-YYYY`
- `MM-DD-YYYY`
- `MM-DD-YYYY hh:mm` (12 時制)
- `MM-DD-YYYY HH:mm` (24 時制)
- など

これを回避する方法の一つは、日付入力欄に {{htmlattrxref("pattern", "input")}} 属性を付けることです。日付入力欄はこれを使用しないので、 `text` 入力欄にフォールバックされたときは使用します。例えば、次の例を未対応のブラウザーで見てみてください。

```html
<form>
  <div>
    <label for="party">希望するパーティーの日時を選択して下さい (必須、 6 月 1 日午前 8:30 ～ 6 月 30 日午後 4:30) </label>
    <input id="party" type="datetime-local" name="partydate"
           min="2017-06-01T08:30" max="2017-06-30T16:30"
           pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required>
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="予約する！">
  </div>
  <input type="hidden" id="timezone" name="timezone" value="-08:00">
</form>
```

{{EmbedLiveSample('Handling_browser_support', 600, 100)}}

`nnnn-nn-nnTnn:nn` のパターン (`n` は数字の0から9) に一致しない文字列を入力して送信しようとすると、エラーメッセージが表示される (そして入力欄が無効として強調表示される) のが分かるでしょう。もちろん、これではユーザーが無効な日付を入力したり、誤った形式で日付や時刻を入力したりすることを止めることはできません。

また、日付や時刻を入力するパターンをどうやってユーザーに理解させればよいのでしょうか？

まだ問題があります。

```css hidden
div {
  margin-bottom: 10px;
}

input:invalid + span {
  position: relative;
}

input:invalid + span:after {
  content: '✖';
  position: absolute;
  right: -18px;
}

input:valid + span {
  position: relative;
}

input:valid + span:after {
  content: '✓';
  position: absolute;
  right: -18px;
}
```

ブラウザーに依存しない方法によってフォームで日付を扱う最善の方法は、現時点では年月日を別々なコントロール ({{htmlelement("select")}} 要素が一般的です。以下の実装を見てください) にするか、 [jQuery date picker](https://jqueryui.com/datepicker/) や [jQuery timepicker plugin](https://timepicker.co/) のような JavaScript ライブラリを使用することです。

## 2038年問題 (主にサーバー側)

JavaScript は日付を格納するとき、すべての数値と同様に、倍精度浮動小数点を使用しますので、 JavaScript のコードは整数への変換やビット操作が行われない限り、2038 年問題に悩まされることはありません。ビット操作演算は、 32 ビットの符号付き 2 の補数で演算を行っているので影響を受ける可能性があります。

問題はサーバー側で、 2^31-1 よりも大きな日付値を格納する場合です。この問題を解決するには、すべての日付を符号なしの 32 ビット整数、符号付きの 64 ビット整数、または倍精度の浮動小数点のいずれかでサーバーに格納する必要があります。サーバーが PHP で書かれている場合は、PHP 8 または 7 にアップグレードし、ハードウェアを x86_64 または IA64 にアップグレードするだけで解決できるかもしれません。他のハードウェアで行き詰っている場合は、 32 ビット仮想マシン内で 64 ビットハードウェアをエミュレートすることもできますが、ほとんどの仮想マシンはこの種の仮想化をサポートしていないため、安定性が損なわれ、性能が大きく低下する可能性があります。

## 10000年問題 (主にクライアント側)

多くのサーバーでは、日付を文字列ではなく数値として保存します。 10000 年以降は、これらの数字は以前よりも少し大きくなるだけなので、多くのサーバーでは 10000 年以降をフォームで送信しても問題が発生することはありません。

問題はクライアント側の問題です。年に 4 桁以上の数字を持つ日付の解析です。

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00"/>
```

単純なことです。何桁でもいいコードを用意するだけです。 5 桁の数字だけを用意するのではありません。プログラムで値を設定するための JavaScript のコードを紹介します。

```js
function setValue(element, date) {
    var isoString = date.toISOString()
    element.value = isoString.substring(0, (isoString.indexOf("T")|0) + 6|0);
}
```

もしこれがあなたの死後何世紀も経ってから起こるのであれば、なぜ 10000 年問題を心配するのかでしょうか。その通り、あなたはすでに死んでいるので、あなたのソフトウェアを使っている企業は、システムを十分に知っている他のコーダーが入ってきてそれを修正することなく、あなたのソフトウェアを使うと行き詰まってしまうからです。

## 例

この例では、日付を選択するユーザーインターフェイスの要素を 2 組生成します。ネイティブの `<input type="datetime-local">` 入力欄と、ネイティブの入力に対応しない古いブラウザー向けの、 5 つの {{htmlelement("select")}} 要素による日時選択です。

{{EmbedLiveSample('Examples', 600, 140)}}

HTML は次のようになります。

```html
<form>
  <div class="nativeDateTimePicker">
    <label for="party">希望するパーティーの日時を選択して下さい。</label>
    <input type="datetime-local" id="party" name="bday">
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">希望するパーティーの日時を選択して下さい。</p>
  <div class="fallbackDateTimePicker">
    <div>
      <span>
        <select id="year" name="year">
        </select>
        <label for="year">年</label>
      </span>
      <span>
        <select id="month" name="month">
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <label for="month">月</label>
      </span>
      <span>
        <select id="day" name="day">
        </select>
        <label for="day">日</label>
      </span>
    </div>
    <div>
      <span>
        <select id="hour" name="hour">
        <label for="hour">時</label>
        </select>
      </span>
      <span>
        <select id="minute" name="minute">
        <label for="minute">分</label>
        </select>
      </span>
    </div>
  </div>
</form>
```

月は (常に同じなので) ハードコーディングされていますが、年と日の値は、現在の年、および現在選択されている年と月によってそれぞれ動的に生成されます (どのように動作するかについての詳細な説明は、以下のコードのコメントを参照してください)。時と分についても、とても多いので動的に生成するようにしました。

```css hidden
div {
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
}
```

もう一つの面白い部分は、機能の検出コードです。ブラウザーが `<input type="datetime-local">` に対応しているかどうかを検出するために、新たな {{htmlelement("input")}} 要素を生成し、その `type` を `datetime-local` に設定してみて、すぐに type に何が設定されたかをチェックします。 `datetime-local` 型に対応していないブラウザーでは、 `datetime-local` 型が `text` 型へフォールバックされます。 `<input type="datetime-local">` に対応していない場合は、ネイティブの日時入力欄を非表示にしてフォールバック用の ({{htmlelement("select")}}) による選択ユーザーインターフェイスを表示します。

```js
// 変数を定義
var nativePicker = document.querySelector('.nativeDateTimePicker');
var fallbackPicker = document.querySelector('.fallbackDateTimePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');
var hourSelect = document.querySelector('#hour');
var minuteSelect = document.querySelector('#minute');

// 最初はフォールバックを非表示にする
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// 新しい日付入力が文字列入力にフォールバックされるかどうか
var test = document.createElement('input');

try {
  test.type = 'datetime-local';
} catch (e) {
  console.log(e.description);
}

// もし文字列入力になるならば、 if() {} ブロックの中のコードを実行する
if(test.type === 'text') {
  // ネイティブの日付選択を隠してフォールバック版を表示
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // 日と年を動的に生成する
  //  (月は常に同じなのでハードコーディング)
  populateDays(monthSelect.value);
  populateYears();
  populateHours();
  populateMinutes();
}

function populateDays(month) {
  // 日の <select> から現在の一連の &lt;option&gt; 要素を削除し、
  // 挿入のための準備をする
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // 挿入する日数を保持する変数を作成
  var dayNum;

  // 31 か 30 日か
  if(month === '1' || month === '3' || month === '5' || month === '7' || month === '8' || month === '10' || month === '12') {
    dayNum = 31;
  } else if(month === '4' || month === '6' || month === '9' || month === '11') {
    dayNum = 30;
  } else {
  // 2月の場合は、閏年かどうかを計算する
    var year = yearSelect.value;
    var isLeap = new Date(year, 1, 29).getMonth() == 1;
    isLeap ? dayNum = 29 : dayNum = 28;
  }

  // 日付の <select> に正しい数の新しい <option> 要素を
  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // 前回の日が既に設定されていたら、 daySelect の値を
  // 日に設定し、年を変えたときに1に戻ることを避ける
  if(previousDay) {
    daySelect.value = previousDay;

    // 前回設定されていた日が大きい数字、つまり31であった場合、
    // そして日数が少ない月 (例えば2月) を選択した場合、
    // コードのこの部分で空欄を表示するのではなく、一番大きな日が
    // 選択されるようにする
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // 今年を数字として取得
  var date = new Date();
  var year = date.getFullYear();

  // 今年から 100 年前までの年が <select> で選択できるようにする
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

function populateHours() {
  // populate the hours <select> with the 24 hours of the day
  for(var i = 0; i &lt;= 23; i++) {
    var option = document.createElement('option');
    option.textContent = (i &lt; 10) ? ("0" + i) : i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // populate the minutes <select> with the 60 hours of each minute
  for(var i = 0; i &lt;= 59; i++) {
    var option = document.createElement('option');
    option.textContent = (i &lt; 10) ? ("0" + i) : i;
    minuteSelect.appendChild(option);
  }
}

// 年や月の <select> 値が変更されたら、 populateDays() を
// 再実行して日数を調整する
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

//日数を保存
var previousDay;

// 以前どの日が設定されていたかを保存する
// 使い方は populateDays() を参照
daySelect.onchange = function() {
  previousDay = daySelect.value;
}
```

> **Note:** 53 週ある年もあることを忘れないでください ([年あたりの週数](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year)を参照)。商品のアプリを開発するときはこれを念頭に置いておく必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 全般的な {{HTMLElement("input")}} およびその操作に使用する {{domxref("HTMLInputElement")}} インターフェイス
- [`<input type="date">`](/ja/docs/Web/HTML/Element/input/date) および [`<input type="time">`](/ja/docs/Web/HTML/Element/input/time)
- [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Date_and_time_formats)
- [日付と時刻の選択のチュートリアル](/ja/docs/Learn/Forms/Basic_native_form_controls#date_and_time_picker)
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
