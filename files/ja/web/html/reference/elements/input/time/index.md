---
title: HTML `<input type="time">` 属性値
short-title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{htmlelement("input")}} 要素の **`time`** 型は、ユーザーが簡単に時刻（時と分、任意で秒）を入力できるように設計された入力欄を生成します。

コントロールのユーザーインターフェイスはブラウザーとオペレーティングシステムに基づいて現れますが、機能は同じです。 UI の入力形式に関わらず、値は常にゼロが先行する 24 時間表記の `HH:mm` または `HH:mm:ss` に書式化された時刻です。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;time&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="appointment">ミーティングの時間を選択してください:</label>

<input
  type="time"
  id="appointment"
  name="appointment"
  min="09:00"
  max="18:00"
  required />

<small>オフィスアワーは午前9時から午後6時までです</small>
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

## 追加の属性

すべての {{HTMLElement("input")}} 要素で共通する属性に加え、 `time` 型の入力欄は次の属性にも対応しています。

> [!NOTE]
> 多くのデータ型とは異なり、時刻値は**周期的範囲**を持ち、値が最大値に達すると、最初の値に折り返します。例えば、`min` を `14:00` に、`max` を `2:00` に設定すると、許可される時間の値は午後 2 時から始まり、深夜を経て次の日の午前 2 時で終わります。詳しくは、この記事の[最小値と最大値が真夜中をまたぐようにする](#最小値と最大値が真夜中をまたぐようにする)の節をご覧ください。

### list

list 属性の値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} です。 {{HTMLElement("datalist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち、この [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### max

文字列で、受け付ける最も遅い時刻を示し、前述の同じ[時刻値の書式](#時刻値の書式)で指定します。指定された文字列が有効な時刻でなければ、最大値は設定されません。

### min

文字列で、受け付ける最も速い時刻を示し、前述の[時刻値の書式](#時刻値の書式)で与えられます。指定された値が有効な時刻の文字列でなければ、最小値は設定されません。

### readonly

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `value` は、 JavaScript コードから直接 {{domxref("HTMLInputElement")}} の `value` プロパティを設定することで変更することができます。

> [!NOTE]
> 読み取り専用のフィールドは値を持つことができないので、 `required` は `readonly` 属性が指定された入力には何の効果もありません。

### step

`step` 属性は値が準拠する粒度を指定する数値、または後述する特殊な値 `any` です。段階の基準値から整数倍の値のみが有効です。段階の基準値は（指定されていれば）[`min`](#min)、そうでなければ [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value)、どちらも提供されていなければ `0` (`00:00:00`) です。

`time` 入力の場合、`step` の値は秒単位で指定され、`step` の値の 1000 倍に相当するミリ秒数として扱われます（内部の数値はミリ秒単位です）。デフォルト値は 60 で、これは 1 分を示します。

文字列値の `any` は段階がないことを意味し、（[`min`](#min) や [`max`](#max) のようなほかの制約を除けば）どの値でも許可されます。実質的に、`time` 入力の場合、このピッカー UI では分単位でしか選択できないため、`60` と同じ効果になります。

> [!NOTE]
> ユーザーが入力したデータが段階の設定に従っていない場合、{{Glossary("user agent", "ユーザーエージェント")}}は直近の有効な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸めます。

## 検証

デフォルトでは、 `<input type="time">` は入力された値の検証を行いません。ユーザーインターフェイスの実装は一般的に、時刻でないものを入力させないからです。これは便利ですが、その値が必ずしも正規の時刻の文字列であるとは限りません。空文字列 (`""`) であっても許可されているためです。`min`、`max`、`step`、`required` 属性を使用した制約の検証例については、[時刻の上限と下限の設定](#時刻の上限と下限の設定)の節を参照してください。

## 例

### time の基本的な使用

もっとも基本的な `<input type="time">` の使用方法は、次のように基本的な `<input>` と {{htmlelement("label")}} 要素の組み合わせです。

```html
<form>
  <label for="appointment-time">予約時刻を選んでください: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### 時刻ピッカーインターフェイスの生成

この例では、`<input type="time">` で作成されたネイティブのピッカーを使用して時刻が選択できます。

```html
<form>
  <label for="appointment-time">
    予約時刻を選んでください (営業時間 12:00～18:00):
  </label>
  <input
    id="appointment-time"
    type="time"
    name="appointment-time"
    min="12:00"
    max="18:00"
    required />
  <span class="validity"></span>
</form>
```

```css
input[type="time"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

{{ EmbedLiveSample('creating a time picker interface', 600, 140) }}

### 入力欄のサイズの制御

`<input type="time">` は、時刻が常にほぼ同じ文字数であるため、[`size`](/ja/docs/Web/HTML/Reference/Elements/input#size) などのフォームのサイズ指定属性に対応していません。サイズ調整が必要な場合は、[CSS](/ja/docs/Web/CSS) を利用する必要があります。

### value 属性の設定

`<input>` 要素が作成されたときに、次のように [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性に時刻を指定することで、デフォルト値を設定することができます。

```html
<label for="appointment-time">予約時刻を選んでください。</label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### JavaScript を使用した値の設定

次のように、 {{domxref("HTMLInputElement")}} の `value` プロパティを使って JavaScript の日時の値を取得したり設定したりすることができます。

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### 時刻値の書式

`time` 入力欄の `value` は、常に先頭にゼロを含む 24 時制で `HH:mm` の書式であり、ユーザーのロケール（またはユーザーエージェント）に基づいて選択される入力書式とは関係ありません。時刻が秒を含む場合（[step 属性の使用](#step_属性の使用)を参照）は、書式は常に `HH:mm:ss` です。この入力型で使用される時刻の値の形式について詳しくは、[時刻文字列](/ja/docs/Web/HTML/Guides/Date_and_time_formats#時刻文字列)をご覧ください。

この例では、時刻を入力すると time 入力欄の値が、どのように変化するかを見ることができます。

最初に、 HTML を見てください。ラベルと入力欄を設置しており、 {{HTMLElement("p")}} 要素と、 `time` 入力欄の値を表示する {{HTMLElement("span")}} を追加しています。

```html
<form>
  <label for="startTime">開始時刻: </label>
  <input type="time" id="startTime" />
  <p>
    <code>time</code> 入力欄の値:
    <code>"<span id="value">n/a</span>"</code>
  </p>
</form>
```

JavaScript コードは、 time 入力欄に {{domxref("Element/input_event", "input")}} イベントを監視するコードを追加し、 input 要素の中身が変更されるたびに呼び出されるようにします。これが発生すると、 `<span>` 要素の中身が input 要素の新しい値で置き換えられます。

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener("input", () => {
  valueSpan.innerText = startTime.value;
});
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

`time` 入力欄を含むフォームが送信されると、フォームのデータに含められる前に値がエンコードされます。 time 入力欄のフォームのデータ項目は、常に `name=HH%3Amm` の形式か、秒が含まれる場合は `name=HH%3Amm%3ass` の形式になります（[step 属性の利用](#step_属性の利用)を参照してください）。

### step 属性の使用

[`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) 属性を使用して、時刻を上下させるときに加減する時間の大きさを変更することができます（例えば、小さな矢印ウィジェットをクリックしたときに 10 分単位で時刻が動くように）。

増加する秒数を定義する整数値を指定します。デフォルト値は 60 秒です。デフォルトでは、ほとんどのユーザーエージェントの時刻 UI は時分を表示しますが、秒は表示しません。 UI に秒数を追加するには、 [`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) 属性に `60` で割り切れない数値を指定するか、 `min` 値または `max` 値によって秒数を指定します。

```html
<form>
  <label for="appointment-time">予約時刻を選んでください: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

分または時間を step として指定するには、分または時間を秒で指定します。たとえば 2 分であれば 120、 2 時間であれば 7200 のようにします。

### 時刻の上限と下限の設定

[`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) および [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性を使用して、ユーザーが選択できる時刻を制限することができます。次の例では、時刻の最小値を `12:00` に、時刻の最大値を `18:00` に設定しています。

```html
<form>
  <label for="appointment-time">
    予約時刻を選んでください (営業時間 12:00～18:00):
  </label>
  <input
    id="appointment-time"
    type="time"
    name="appointment-time"
    min="12:00"
    max="18:00" />
  <span class="validity"></span>
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40) }}

上記の例の CSS です。 CSS の {{cssxref(":valid")}} および {{cssxref(":invalid")}} プロパティを使用して、現在の値が有効かどうかに基づいてスタイルを設定しています。アイコンは、入力欄の隣の {{htmlelement("span")}} における生成コンテンツとして追加します。

```css
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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

ここでの結果は次のようになります。

- 12:00 から 18:00 までの時刻だけが有効として表示されます。この範囲を外れた時刻は無効として表示されます。

#### 最小値と最大値が真夜中をまたぐようにする

[`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) 属性に [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性よりも大きな値を設定することで、有効な時間帯を、午前 0 時をまたぐようにすることができます。この機能は他の入力型では対応していません。

```js
const input = document.createElement("input");
input.type = "time";
input.min = "23:00";
input.max = "01:00";
input.value = "23:59";

if (input.validity.valid && input.type === "time") {
  // <input type=time> が範囲の折り返しに対応している
} else {
  // <input type=time> が範囲の折り返しに対応していない
}
```

### 時刻を必須にする

加えて、 [`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性を使用して、時刻の入力を必須にすることができます。ブラウザーは設定範囲外または空欄の time 入力欄を送信しようとすると、エラーを表示します。

例を見てみましょう。時刻の最小値と最大値を設定し、かつ入力欄を必須に設定しています。

```html
<form>
  <div>
    <label for="appointment-time">
      予約時刻を選んでください (営業時間 12:00～18:00):
    </label>
    <input
      id="appointment-time"
      type="time"
      name="appointment-time"
      min="12:00"
      max="18:00"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="フォームを送信" />
  </div>
</form>
```

フォームに不完全な時刻（または設定された範囲外の時刻）を設定して送信しようとすると、ブラウザーはエラーを表示します。例を実行してみてください。

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> HTML のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 HTML を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 HTML を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）が送信された場合に災害が発生するおそれがあります。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/ja/docs/Web/HTML/Reference/Elements/input#値">値</a></strong></td>
      <td>時刻を表す文字列、または空欄。</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および
        {{domxref("Element/input_event", "input")}}
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
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
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
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.
      </td>
    </tr>
     <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<input type="date">`](/ja/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="datetime-local">`](/ja/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="week">`](/ja/docs/Web/HTML/Reference/Elements/input/week), [`<input type="month">`](/ja/docs/Web/HTML/Reference/Elements/input/month)
- 全般的な {{HTMLElement("input")}} およびその操作に使用する {{domxref("HTMLInputElement")}} インターフェイス
- [HTML で使われる日付や時刻の形式](/ja/docs/Web/HTML/Guides/Date_and_time_formats)
- [日付と時刻の選択のチュートリアル](/ja/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#日付と時刻ピッカー)
