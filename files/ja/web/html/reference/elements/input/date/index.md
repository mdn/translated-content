---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`type="date"`** は、ユーザーが日付を入力できる入力フィールドを作成します。 日付選択入力 UI の表示は、ブラウザーやオペレーティングシステムによって異なります。 値は `yyyy-mm-dd` 形式に正規化されます。

結果の値には年、月、日が含まれますが、時刻は含まれません。 {{HTMLElement("input/time", "time")}} および {{HTMLElement("input/datetime-local", "datetime-local")}} 入力型は時刻や日付と時刻の入力に対応しています。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;date&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="start">Start date:</label>

<input
  type="date"
  id="start"
  name="trip-start"
  value="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## 値

入力欄に入力された日付を表す文字列です。日付は[日付文字列形式](/ja/docs/Web/HTML/Guides/Date_and_time_formats#日付文字列)に従って書式化されます。

次のように、日付の入力欄の既定値を [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性に設定することができます。

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> 表示される日付の書式は実際の `value` とは異なります。 — 表示される日付はユーザーのブラウザーに設定されたロケールに基づいた書式になりますが、解釈される `value` は常に `yyyy-mm-dd` の書式です。

JavaScript での日付値を取得したり設定したりするには、次のように {{domxref("HTMLInputElement")}} の `value` および `valueAsNumber` プロパティで行うことができます。

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // "2017-06-01" と表示
console.log(dateControl.valueAsNumber); // 1496275200000 と JavaScript タイムスタンプを表示
```

このコードは {{HTMLElement("input")}} 要素のうち `type` が `date` である最初のものを探し、値を `2017-06-01` （2017 年 6 月 1 日）に設定します。それからその値を文字列と数字の書式で読み直しています。

## 追加の属性

すべての {{HTMLElement("input")}} 要素に共通する属性は `date` 入力型にも適用されますが、その表示に影響を与えないかもしれません。例えば、 `size` や `placeholder` は動作しないかもしれません。 `date` 入力には以下の追加属性があります。

### max

受け付ける最も遅い日付です。要素に入力された [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) がこれ以降になった場合、要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗します。 `max` 属性の値が `yyyy-mm-dd` の書式のありうる日付ではない場合、要素は最大の日付値を持ちません。

`max` と `min` の両方の属性を設定する場合、この値は `min` 属性にあるもの**より遅いか、同じ**日付文字列でなければなりません。

### min

受け付ける最も早い日付です。要素に入力された [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) がこれ以前になった場合、要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗します。 `min` 属性の値が `yyyy-mm-dd` の書式のありうる日付でない場合、要素は最小の日付値を持ちません。

`max` と `min` の両方の属性を設定する場合、この値は `max` 属性で指定されたもの**より早いか、同じ**日付である必要があります。

### step

`step` 属性は値が準拠する粒度を指定する数値、または後述する特殊な値 `any` です。刻みの基準値（指定されていれば [`min`](#min)、そうでなければ [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value)、どちらも提供されていなければ適切な既定値）に等しい値のみが有効となります。

文字列値の `any` は刻みがないことを意味し、（[`min`](#min) や [`max`](#max) のようなほかの制約を除けば）どの値でも許可されます。

> [!NOTE]
> ユーザーによって入力されたデータが step 設定に従っていない場合、{{Glossary("User agent", "ユーザーエージェント")}}は最も近い有効な値に丸める可能性があり、同じ距離の値が 2 つあった場合は、正の方向の値を優先します。

`date` 入力欄では、 `step` の値は日単位で指定します。また、 86,400,000 に `step` を乗じた値に等しいミリ秒数として扱われます（数値はミリ秒単位であるため）。 `step` の既定値は `1` であり、 1 日を表します。

> [!NOTE]
> `any` を `step` 属性の値として指定すると、 `1` を `date` 入力欄に設定したのと同じ効果になります。

## date 入力欄の使用

日付入力は日付を選ぶための簡単なインターフェイスを提供し、ユーザーのロケールに関係なくサーバーに送信されるデータ形式を正規化します。

この節では、`<input type="date">` の基本的な使用方法から、より複雑な使用方法まで見ていきます。

## 日付入力の基本的な使用

もっとも基本的な `<input type="date">` の使用方法は、次のように基本的な `<input>` と {{htmlelement("label")}} 要素の組み合わせです。

```html
<form action="https://example.com">
  <label>
    誕生日を入力してください。
    <input type="date" name="bday" />
  </label>

  <p><button>Submit</button></p>
</form>
```

{{EmbedLiveSample('Basic_uses_of_date', 600, 40)}}

この HTML は入力された日付を `bday` キーに入れて `https://example.com` に送ります。 — 結果の URL は `https://example.com/?bday=1955-06-08` のようになります。

### 日付の最大値と最小値の設定

[`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) および [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性を使用して、ユーザーが選択できる日付を制限することができます。次の例では、日付の最小値を `2017-04-01` に、日付の最大値を `2017-04-30` に設定しています。

```html
<form>
  <label
    >希望するパーティーの日を選んでください。
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

この結果は、 2017 年の 4 月の日付のみが選択できるようになります。 — テキストボックスの年と月の部分が編集できなくなり、日付選択ウィジェットで 4 月以外にスクロールすることができなくなります。

[`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) 属性を使用すると、日付が加算するたびに飛ばす日数を設定できます（例えば、土曜日のみを選択できるようにしたい場合など）。

### 入力欄の寸法の制御

`<input type="date">` は [`size`](/ja/docs/Web/HTML/Reference/Elements/input#size) のような寸法に関する属性には対応していません。寸法を変更するには [CSS](/ja/docs/Web/CSS) を推奨します。

## 検証

既定で、 `<input type="date">` は入力された値をその書式を超えて検証しません。インターフェイスは一般的に、日付でないものの入力をさせないからです。 — これは便利です。

[`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) および [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) を使用して有効な日付を制限すると（[日付の最大値と最小値の設定](#日付の最大値と最小値の設定)を参照）、このフォームコントロールでは不正な日付を無効化し、範囲を外れた日付を送信しようとしたときにエラーを表示するでしょう。

[`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性を使用して、日付の入力を必須にすることもできます。 — 空の日付欄を送信しようとするとエラーが表示されるでしょう。

日付の最小値と最大値の例と、入力欄を必須にする例を見てみましょう。

```html
<form>
  <label>
    推奨したいパーティーの日を選択してください (必須、4 月 1 日～ 20 日):
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>送信</button>
  </p>
</form>
```

不完全な日付 (または設定した範囲を外れた日付) を送信しようとすると、ブラウザーはエラーを表示します。例を実行してみましょう。

{{EmbedLiveSample('Validation', 600, 100)}}

上記の例で使用されている CSS です。 {{cssxref(":valid")}} および {{cssxref(":invalid")}} [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を使用して、現在の値が妥当かどうかで入力欄の隣にアイコンを追加しています。アイコンは入力欄そのものではなく、入力欄の隣の {{htmlelement("span")}} に置くようにしないと、 Chrome ではコントロールの内側にコンテンツを生成するので、正しく整形したり表示したりすることができません。

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

> [!WARNING]
> クライアント側のフォーム検証は、サーバー上の検証の代用にはなりません。誰かが HTML を改変したり、 HTML を完全にバイパスしてサーバーに直接データを送信したりすることは簡単です。サーバーが受信したデータの検証に失敗した場合、不適切な形式のデータ、大きすぎるデータ、誤った種類のデータなどに遭遇すると、障害が発生するおそれがあります。

## 例

この例では、ネイティブの `<input type="date">` ピッカーを使用して日付ピッカーを作成します。

### HTML

HTML は次のようになります。

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">誕生日を入力してください。</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
</form>
```

### CSS

CSS は次のようになります。

```css
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

### 結果

{{EmbedLiveSample('Examples', 600, 100)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#値">値</a></strong></td>
      <td>
        文字列で、 YYYY-MM-DD 形式の日付、または空欄を表します
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 全般的な {{HTMLElement("input")}} およびその操作に使用する{{domxref("HTMLInputElement")}} インターフェイス
- [日付と時刻の選択のチュートリアル](/ja/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#日付と時刻ピッカー)
- [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Guides/Date_and_time_formats)
