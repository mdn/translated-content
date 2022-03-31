---
title: <input type="date">
slug: Web/HTML/Element/input/date
tags:
  - 日付
  - 日付選択
  - 要素
  - フォーム入力
  - HTML
  - HTML フォーム
  - Input
  - 入力要素
  - 入力型
  - リファレンス
browser-compat: html.elements.input.input-date
translation_of: Web/HTML/Element/input/date
---

{{HTMLRef}}

{{HTMLElement("input")}} 要素の **`type="date"`** は、ユーザーに日付を入力させる入力欄を、検証付きのテキストボックスまたは特殊な日付選択インターフェイスのどちらかで生成します。

結果の値には年、月、日が含まれますが、時刻は含まれません。 {{HTMLElement("input/time", "time")}} および {{HTMLElement("input/datetime-local", "datetime-local")}} 入力型は時刻や日付と時刻の入力に対応しています。

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

入力欄のユーザーインターフェイスは、一般にブラウザーによってまちまちです。詳細は{{anch("ブラウザーの互換性")}}を参照してください。対応していないブラウザーでは、このコントロールは単純な [`<input type="text">`](/ja/docs/Web/HTML/Element/input/text) に格下げされます。

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("値")}}</strong></td>
      <td>
        {{domxref("DOMString")}} で、 YYYY-MM-DD 形式の日付、または空欄を表す
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
        <code>list</code>, <code>value</code>, <code>valueAsDate</code>,
        <code>valueAsNumber</code>
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

入力欄に入力された日付を表す {{domxref("DOMString")}} です。日付は ISO8601 に従って書式化されており、これは [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Date_and_time_formats)の[日付の文字列](/ja/docs/Web/HTML/Date_and_time_formats#date_strings)で説明されています。

次のように、日付の入力欄の既定値を {{htmlattrxref("value", "input")}} 属性に設定することができます。

```html
<input type="date" value="2017-06-01">
```

{{EmbedLiveSample('Value', 600, 40)}}

> **Note:** 表示される日付の書式は実際の `value` とは異なります。 — 表示される日付はユーザーのブラウザーに設定されたロケールに基づいた書式になりますが、解釈される `value` は常に `yyyy-mm-dd` の書式です。

JavaScript での日付値を取得したり設定したりするには、次のように {{domxref("HTMLInputElement")}} の `value` および `valueAsNumber` プロパティで行うことができます。

```js
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';
console.log(dateControl.value); // "2017-06-01" と表示
console.log(dateControl.valueAsNumber); // 1496275200000 と JavaScript タイムスタンプを表示
```

このコードは {{HTMLElement("input")}} 要素のうち `type` が `date` である最初のものを探し、値を `2017-06-01` （2017 年 6 月 1 日）に設定します。それからその値を文字列と数字の書式で読み直しています。

## 追加の属性

すべての {{HTMLElement("input")}} 要素で共通する属性と共に、 `date` 型の入力欄は以下の属性に対応しています。

### max

受け付ける最も遅い日付です。要素に入力された {{htmlattrxref("value", "input")}} がこれ以降になった場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 `max` 属性の値が `yyyy-mm-dd` の書式のありうる日付ではない場合、要素は最大の日付値を持ちません。

`max` と `min` の両方の属性を設定する場合、この値は `min` 属性にあるもの**より遅いか、同じ**日付文字列でなければなりません。

### min

受け付ける最も早い日付です。要素に入力された {{htmlattrxref("value", "input")}} がこれ以前になった場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 `min` 属性の値が `yyyy-mm-dd` の書式のありうる日付でない場合、要素は最小の日付値を持ちません。

`max` と `min` の両方の属性を設定する場合、この値は `max` 属性で指定されたもの**より早いか、同じ**日付である必要があります。

### step

`step` 属性は値が吸着する粒度を指定する数値、または後述する特殊な値 `any` です。刻みの基準値に等しい値（指定されていれば `{{anch("min")}}`、 {{htmlattrxref("value", "input")}} そうでなければ適切な既定値）のみが妥当となります。

文字列値の `any` は刻みがなく、どの値でも許可されることを意味します（`{{anch("min")}}` や `{{anch("max")}}` など、他の制約に制限されます）。

> **Note:** ユーザーがデータを入力したときには刻みの設定には吸着せず、{{Glossary("user agent", "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`date` 入力欄では、 `step` の値は日単位で指定します。また、 86,400,000 に `step` を乗じた値に等しいミリ秒数として扱われます（数値はミリ秒単位であるため）。 `step` の既定値は `1` であり、 1 日を表します。

> **Note:** `any` を `step` 属性の値として指定すると、 `1` を `date` 入力欄に設定したのと同じ効果になります。

## date 入力欄の使用

日付入力は便利に見えます。 — 日付の選択に簡単なインターフェイスを提供し、サーバーに送信するデータの書式をユーザーのロケールに関係なく正規化してくれます。しかし、今のところブラウザーの対応が限定されているため、 `<input type="date">` には問題があります。

この節では、 `<input type="date">` の基本的な使い方と少し複雑な使い方を見てみてから、その後でブラウザーの互換性の問題を緩和するアドバイスを提供しましょう ({{anch("ブラウザーの互換性の扱い")}} を参照してください)。

> **Note:** 今後ブラウザーの互換性がもっと普遍的になり、この問題が消滅することを願います。

## 日付入力の基本的な使用

もっとも単純な `<input type="date">` の使用方法は、次のように基本的な `<input>` と {{htmlelement("label")}} 要素の組み合わせです。

```html
<form action="https://example.com">
  <label>
    誕生日を入力してください。
    <input type="date" name="bday">
  </label>

  <p><button>Submit</button></p>
</form>
```

{{EmbedLiveSample('Basic_uses_of_date', 600, 40)}}

この HTML は入力された日付を `bday` キーに入れて `https://example.com` に送ります。 — 結果の URL は `https://example.com/?bday=1955-06-08` のようになります。

### 日付の最大値と最小値の設定

{{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} 属性を使用して、ユーザーが選択できる日付を制限することができます。次の例では、日付の最小値を `2017-04-01` に、日付の最大値を `2017-04-30` に設定しています。

```html
<form>
  <label>希望するパーティーの日を選んでください。
    <input type="date" name="party" min="2017-04-01" max="2017-04-30">
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

この結果は、 2017 年の 4 月の日付のみが選択できるようになります。 — テキストボックスの年と月の部分が編集できなくなり、日付選択ウィジェットで 4 月以外にスクロールすることができなくなります。

> **Note:** {{htmlattrxref("step", "input")}} 属性を使用すると、日付が加算するたびに飛ばす日数を設定できるはずです（例えば、土曜日のみを選択できるようにしたい場合など）。しかし、執筆時点でどの実装も正しく動作していないようです。

### 入力欄の寸法の制御

`<input type="date">` は {{htmlattrxref("size", "input")}} のような寸法に関する属性には対応していません。寸法を変更するには [CSS](/ja/docs/Web/CSS) を推奨します。

## 検証

既定で、 `<input type="date">` は入力された値をその書式を超えて検証しません。インターフェイスは一般的に、日付でないものの入力をさせないからです。 — これは便利です。 — しかし、入力欄を空のままにしたり、 `text` 型に代替されるするブラウザーにおいて、無効な日付を入力したりすることが可能です（例えば 4 月 32 日など）。

{{htmlattrxref("min", "input")}} および {{htmlattrxref("max", "input")}} を使用して有効な日付を制限すると（{{anch("日付の最大値と最小値の設定")}}を参照）、対応しているブラウザーは、範囲を外れたの日付を送信しようとしたときにエラーを表示するでしょう。しかし、ユーザーの端末が日付選択に完全に対応していない場合、値がこれらの日付の中にあることを保証するためには、送信された結果を再度チェックしなければならないでしょう。

{{htmlattrxref("required", "input")}} 属性を使用して、日付の入力を必須にすることもできます。 — 空の日付欄を送信しようとするとエラーが表示されるでしょう。これは、テキスト入力欄で代替されたとしても、ほとんどのブラウザーで動作するはずです。

日付の最小値と最大値の例と、入力欄を必須にする例を見てみましょう。

```html
<form>
  <label>
    推奨したいパーティーの日を選択してください (必須、4月1日～20日):
    <input type="date" name="party" min="2017-04-01" max="2017-04-20" required>
    <span class="validity"></span>
  </label>

  <p>
    <button>送信</button>
  </p>
</form>
```

不完全な日付 (または設定した範囲を外れた日付) を送信しようとすると、ブラウザーはエラーを表示します。例を実行してみましょう。

{{EmbedLiveSample('Validation', 600, 100)}}

上記の例で使用されている CSS です。 {{cssxref(":valid")}} および {{cssxref(":invalid")}} [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を使用して、現在の値が妥当かどうかで入力欄の隣にアイコンを追加しています。アイコンは入力欄そのものではなく、入力欄の隣の {{htmlelement("span")}} に置くようにしないと、 Chrome ではコントロールの内側にコンテンツを生成するので、正しく整形したり表示したりすることができません。

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: '✖';
}

input:valid+span::after {
  content: '✓';
}
```

> **Warning:** クライアント側のフォーム検証は、サーバー上の検証の代用にはなりません。誰かが HTML を改変したり、 HTML を完全にバイパスしてサーバーに直接データを送信したりすることは簡単です。サーバーが受信したデータの検証に失敗した場合、不適切な形式のデータ、大きすぎるデータ、誤った種類のデータなどに遭遇すると、障害が発生するおそれがあります。

## ブラウザーの対応の扱い

前述のように、現時点で日付入力を書く上で一番の問題は{{anch("ブラウザーの互換性")}}です。

対応していないブラウザーでは、文字列入力欄に安全に格下げされますが、これはユーザーインターフェイスの一貫性（表示されるコントロールが異なること）とデータの扱い方の両方で問題を生みます。

2 番目の問題はより深刻です。日付入力に対応していると、値が `yyyy-mm-dd` の書式で正規化されます。しかし、文字列入力欄では、ブラウザーには日付がどの書式で入力されるかの認識がなく、また、以下のように人間が日付を書く書式は様々なものがあります。

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `Month dd, yyyy`

これを回避する方法の一つは、日付入力欄に {{htmlattrxref("pattern", "input")}} 属性を付けることです。日付選択ではこれを使用しませんが、文字列入力に代替されたときには使用されます。例えば、次の例を未対応のブラウザーで見てみてください。

```html
<form>
  <label>誕生日を入力してください。
    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}">
    <span class="validity"></span>
  </label>
  <p>
    <button>送信</button>
  </p>
</form>
```

{{EmbedLiveSample('Handling_browser_support', 600, 100)}}

送信ボタンを押すと、入力が `####-##-##` のパターン (`#` は数字の 0 から 9) に一致しない場合はエラーメッセージが表示され、入力欄が無効として強調表示されるのが分かるでしょう。もちろん、これでユーザーが無効な日付や不正な書式を入力するのを止めることはできません。ですから、まだ問題があります。

```css hidden
span {
  position: relative;
}

span::after {
  right: -18px;
  position: absolute;
}

input:invalid + span::after {
  content: '✖';
}

input:valid + span::after {
  content: '✓';
}
```

現時点では、ブラウザーに依存しない方法でフォームで日付を扱う最善の方法は、年月日を別々なコントロールに入力するようにするか、 [jQuery date picker](https://jqueryui.com/datepicker/) のような JavaScript ライブラリーを使用することです。

## 例

この例では、日付を選択するユーザーインターフェイスの要素を 2 組作成します。ネイティブの `<input type="date">` による選択と、ネイティブの日付入力に対応していない古いブラウザー向けの、 3 つの {{htmlelement("select")}} 要素です。

### 結果

{{EmbedLiveSample('Examples', 600, 100)}}

### HTML

HTML は次のようになります。

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">誕生日を入力してください。</label>
    <input type="date" id="bday" name="bday">
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">誕生日を入力してください。</p>
  <div class="fallbackDatePicker">
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
</form>
```

月は (常に同じなので) ハードコーディングされていますが、年と日の値は、現在の年、および現在選択されている年と月によってそれぞれ動的に生成されます（どのように動作するかについての詳細な説明は、以下のコードのコメントを参照してください）。

```css hidden
span {
  padding-left: 5px;
}

input:invalid + span::after {
  content: '✖';
}

input:valid + span::after {
  content: '✓';
}
```

### JavaScript

もう一つの面白い部分は、機能の検出コードです。 — ブラウザーが `<input type="date">` に対応しているかどうかを検出するためのものです。

新たな {{htmlelement("input")}} 要素を生成し、その `type` を `date` に設定して、すぐにどの型になったのかをチェックします。対応していないブラウザーでは、 `text` が返されます。これは、 `date` 型が `text` 型へ代替されるためです。 `<input type="date">` に対応していない場合は、ネイティブの日付選択を非表示にして、代替の ({{htmlelement("select")}}) 表示します。

```js
// 変数を定義
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

// 最初は代替を隠す
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// 新しい日付入力が文字列入力に代替されるかどうか
var test = document.createElement('input');

try {
  test.type = 'date';
} catch (e) {
  console.log(e.description);
}

// もし文字列入力になるならば、 if() {} ブロックの中のコードを実行する
if(test.type === 'text') {
  // ネイティブの日付選択を隠して代替版を表示
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // 年と日を動的に生成する
  // （月は常に同じなのでハードコーディング）
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // delete the current set of &lt;option&gt; elements out of the
  // day <select>, ready for the next set to be injected
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // 挿入する日数を保持する変数を作成
  var dayNum;

  // 31 日か 30 日か？
  if(month === '1' | month === '3' | month === '5' | month === '7' | month === '8' | month === '10' | month === '12') {
    dayNum = 31;
  } else if(month === '4' | month === '6' | month === '9' | month === '11') {
    dayNum = 30;
  } else {
  // 2 月の場合は、閏年かどうかを計算する
  var year = yearSelect.value;
  var isLeap = new Date(year, 1, 29).getMonth() == 1;
  isLeap ? dayNum = 29 : dayNum = 28;
  }

  // <select> に正しい数の新しい &lt;option&gt; 要素を挿入
  for(i = 1; i &lt;= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // 前回の日が既に設定されていたら、 daySelect の値を
  // 日に設定し、年を変えたときに1に戻ることを
  // 避ける
  if(previousDay) {
    daySelect.value = previousDay;

    // 前回設定されていた日が大きい数字、例えば31であり、
    // その後で日数が少ない月 (例えば2月) を選択した場合、
    // このコードで空欄の日選択を表示するのではなく、
    // 利用可能な最大の日を選択するように保証する
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
  // 今年を数値として取得
  var date = new Date();
  var year = date.getFullYear();

  // 今年から 100 年前までの年が <select> で選択できるようにする
  for(var i = 0; i &lt;= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
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

// 日の選択を保存
var previousDay;

// 以前どの日が設定されていたかを保存する
// 使い方は populateDays() を参照
daySelect.onchange = function() {
  previousDay = daySelect.value;
}
```

> **Note:** 53 週ある年もあることを忘れないでください（[年あたりの週数](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year)を参照）。商品のアプリを開発するときはこれを念頭に置いておく必要があります。
</div>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 全般的な {{HTMLElement("input")}} およびその操作に使用する{{domxref("HTMLInputElement")}} インターフェイス
- [日付と時刻の選択のチュートリアル](/ja/docs/Learn/Forms/Basic_native_form_controls#date_and_time_picker)
- [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Date_and_time_formats)
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
