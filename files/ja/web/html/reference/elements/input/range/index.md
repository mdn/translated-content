---
title: '`<input type="range">` 属性値'
short-title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

{{HTMLElement("input")}} 要素の **`range`** 型は、ある値以上で別の値以下の数値をユーザーに指定させるために使用します。ただし、厳密な値は重要ではありません。通常、{{HTMLElement('input/number', 'number')}} 入力型のようなテキスト入力欄ではなく、スライダーやダイアルコントロールで表現されます。

この種のウィジェットは厳密なものではないので、コントロールの正確な値が重要でない限り、通常は使用するべきではありません。

ユーザーのブラウザーが `range` 型に対応していない場合、`{{HTMLElement('input/text', 'text')}}` 入力として扱われます。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;range&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>オーディオ設定:</p>

<div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label for="volume">音量</label>
</div>

<div>
  <input
    type="range"
    id="cowbell"
    name="cowbell"
    min="0"
    max="100"
    value="90"
    step="10" />
  <label for="cowbell">カウベル</label>
</div>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

### 値

`<input type="range">` 要素の値は、[`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性を使用して、選択された数値を表す文字列を指定することで設定されます。値は空文字列 (`""`) になることはありません。デフォルト値は指定した最小値と最大値の中間の値です。ただし、最大値が最小値より小さい場合は、`min` 属性の値がデフォルト値に設定されます。デフォルト値を決定するアルゴリズムは次の通りです。

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

最小値よりも小さな値を設定しようとすると、最小値に設定されます。同様に、最大値よりも大きな値を設定しようとすると、最大値に設定される結果になります。

### 検証

利用可能なパターン検証はありません。しかし、以下の形で自動検証が行われます。

- [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) が何かに設定されており、有効な浮動小数点数に変換できない場合、入力が不正な入力になるので検証に失敗します。
- 値は [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) より小さくはなりません。このデフォルト値は 0 です。
- 値は [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) より大きくはなりません。このデフォルト値は 100 です。
- 値は [`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) の倍数になります。このデフォルト値は 1 です。

## 追加の属性

すべての {{HTMLElement("input")}} 型に共通する属性に加え、`range` 型の入力欄は次の属性にも対応しています。

> [!NOTE]
> range 型の入力欄に適用できない入力属性は、 `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size`, `src` です。これらの属性が指定されても、無視されます。

### list

list 属性の値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} です。 {{HTMLElement("datalist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち、この [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

対応しているブラウザーで、範囲のオプションがどのように表示されるかの例としては、以下の[目盛りの追加](#目盛りの追加)を参照してください。

### max

この入力欄が受け付ける最大値です。要素に入力された [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) がこれを超えた場合、要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗します。 [`max`](/ja/docs/Web/HTML/Reference/Attributes/max) 属性の値が数値でない場合、要素は最大値を持ちません。

この値は [`min`](/ja/docs/Web/HTML/Reference/Attributes/min) 属性の値以上でなければなりません。HTML の [`max`](/ja/docs/Web/HTML/Reference/Attributes/max) 属性を参照してください。

### min

許可されている値の範囲の最小値です。要素の [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) がこれより小さい場合、要素は[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)に失敗します。 `min` 属性の値が数値でない場合、要素は最小値を持ちません。

この値は [`max`](/ja/docs/Web/HTML/Reference/Attributes/max) 属性の値以下でなければなりません。HTML の [`min`](/ja/docs/Web/HTML/Reference/Attributes/min) 属性を参照してください。

> [!NOTE]
> もし `min` と `max` の値が等しかったり、`max` の値が `min` の値より低かったりすると、ユーザーはその範囲を操作することができなくなります。

### step

`step` 属性は値が準拠する粒度を指定する数値、または後述する特殊な値 `any` です。段階の基準値から整数倍の値のみが有効です。段階の基準値は（指定されていれば）[`min`](#min)、そうでなければ [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value)、どちらも提供されていなければ `0` です。

`range` 入力欄のデフォルトの段階値は `1` であり、段階の基準値が整数ではない場合を除き、整数の入力のみを許可します。

文字列値の `any` は段階がないことを意味し、（[`min`](#min) や [`max`](#max) のようなほかの制約を除けば）どの値でも許可されます。対応しているブラウザーでこのように動作するのかについては、[step を `any` に設定](#step_を_any_に設定)の例を参照してください。

> [!NOTE]
> ユーザーが入力した値が段階の設定に従っていない場合、{{Glossary("user agent", "ユーザーエージェント")}}は、その値を最も近い有効な値に丸めることがあります。また、2 つの選択肢が同等に近接している場合は、数値を切り上げることを優先します。

## 標準外の属性

### orient

{{htmlelement('progress')}} 要素と {{htmlelement('meter')}} 要素にも影響する CSS の標準外プロパティ `-moz-orient` と同様に、`orient` 属性は範囲スライダーの向きを定義します。値 `horizontal` は範囲を水平方向に、`vertical` は垂直方向に描画することを示します。

## 例

`number` 型では、ユーザーが数値を入力し、その値を任意で最小値と最大値の範囲内に制限できますが、具体的な値の入力が必要です。一方、`range` 入力型は、選択した数値をユーザーが気にしない、または知る必要がない場合に使えます。

`range` 入力欄がよく使われる場面の例をいくつか示します。

- ボリュームやバランス、フィルター制御のようなオーディオの制御。
- カラーチャネル、透過度、明るさなどの色の構成の制御。
- 難易度、視点距離、ワールドサイズなどのゲームの構成の制御。
- パスワードマネージャーが生成するパスワードの長さ。

原則として、ユーザーが実際の数値よりも最小値と最大値の間の割合に関心がある場合は、`range` 入力が適しています。例えば、家庭用ステレオの音量を調節するとき、ユーザーは通常「音量を 0.5 に設定する」ではなく、「音量を最大値の半分くらいに設定する」と考えます。

### 最小値と最大値の指定

デフォルトでは、最小値は 0 で最大値は 100 です。これが意図した範囲でない場合は、[`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) 属性や [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性の値を変更して、範囲を簡単に指定できます。どちらにも浮動小数点数を指定できます。

例えば、ユーザーに -10 から 10 までの値を指定してもらうには、次のようにします。

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### 値の粒度の設定

デフォルトでは、粒度は 1 であり、値は常に整数になります。粒度は [`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) 属性で変更できます。例えば、5 から 10 までの範囲で中間の値も指定できるようにするには、`step` の値を 0.5 にします。

#### step 属性の設定

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### step を `any` に設定

小数点以下が何桁になろうと、どんな値でも受け入れたい場合は、 [`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) 属性に `any` という値を指定することができます。

##### HTML

```html
<input id="pi_input" type="range" min="0" max="3.14" step="any" />
<p>値: <output id="value"></output></p>
```

##### JavaScript

```js
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
```

##### 結果

{{EmbedLiveSample("Setting_step_to_any", 600, 75)}}

この例では、0 から π までの任意の値を選択でき、小数部の桁数に制限はありません。JavaScript は、ユーザーが範囲入力を操作したときに値がどのように変化するかを示すために使用しています。

### 目盛の追加

範囲コントロールに目盛を追加するには、`list` 属性に、コントロール上の一連の目盛を定義する {{HTMLElement("datalist")}} 要素の `id` を指定します。それぞれの目盛は {{HTMLElement("option")}} 要素で表し、その [`value`](/ja/docs/Web/HTML/Reference/Elements/option#value) には目盛を描画する範囲の値を設定します。

#### HTML

```html
<label for="temp">快適な温度を選択してください。</label><br />
<input type="range" id="temp" name="temp" list="markers" />

<datalist id="markers">
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
```

#### 結果

{{EmbedLiveSample("Adding tick marks", 600, 50)}}

### 同じデータリストを複数の範囲コントロールで使用

コードの重複を防ぐために、同じ {{HTMLElement("datalist")}} を複数の `<input type="range">` 要素や他の {{HTMLElement("input")}} 型に再利用することができます。

> [!NOTE]
> 下記の例のように[ラベルを表示する](#ラベルの追加)こともしたい場合は、それぞれの範囲の入力に対して `datalist` が必要です。

#### HTML

```html
<p>
  <label for="temp1">部屋 1 の温度:</label>
  <input type="range" id="temp1" name="temp1" list="values" />
</p>
<p>
  <label for="temp2">部屋 2 の温度:</label>
  <input type="range" id="temp2" name="temp2" list="values" />
</p>

<p>
  <label for="temp3">部屋 3 の温度:</label>
  <input type="range" id="temp3" name="temp3" list="values" />
</p>

<datalist id="values">
  <option value="0" label="0"></option>
  <option value="25" label="25"></option>
  <option value="50" label="50"></option>
  <option value="75" label="75"></option>
  <option value="100" label="100"></option>
</datalist>
```

#### 結果

{{EmbedLiveSample("Using the same datalist for multiple range controls")}}

### ラベルの追加

`<option>` 要素に `label` 属性を指定すると、目盛にラベルを付けられます。ただし、デフォルトではラベルの内容は表示されません。ラベルを表示し、正しい位置に配置するには CSS を使用します。以下にその方法の一つを示します。

#### HTML

```html
<label for="tempB">快適な温度を選択してください。</label><br />
<input type="range" id="tempB" name="temp" list="values" />

<datalist id="values">
  <option value="0" label="とても寒い"></option>
  <option value="25" label="涼しい"></option>
  <option value="50" label="ふつう"></option>
  <option value="75" label="やや温かい"></option>
  <option value="100" label="暑い"></option>
</datalist>
```

#### CSS

```css
datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 200px;
}

option {
  padding: 0;
}

input[type="range"] {
  width: 200px;
  margin: 0;
}
```

#### 結果

{{EmbedLiveSample("Adding labels")}}

### 垂直の範囲コントロールの作成

デフォルトでは、ブラウザーは範囲入力を、つまみが左右に動くスライダーとして描画します。

つまみが上下に動く垂直方向の範囲コントロールを作成するには、CSS の {{cssxref("writing-mode")}} プロパティを `vertical-rl` または `vertical-lr` に設定します。

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

これにより、範囲スライダーが垂直に描画されます。

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

CSS の {{cssxref('appearance')}} プロパティに標準外の値 `slider-vertical` を設定すると、古いバージョンの Chrome と Safari にも対応できます。また、標準外の `orient="vertical"` 属性を指定すると、古いバージョンの Firefox にも対応できます。

例については[垂直フォームコントロールの作成](/ja/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)をご覧ください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#値">値</a></strong></td>
      <td>
        選択された数値の文字列表現を示す文字列。数値として値を取得するには {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}} を使用してください。
      </td>
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
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>、
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>、
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#max"><code>max</code></a>、
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#min"><code>min</code></a>、
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>、
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>、
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role">slider</a></code>
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} およびそれに基づく {{domxref("HTMLInputElement")}} インターフェイス
- [`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number)
- {{domxref('validityState.rangeOverflow')}} および {{domxref('validityState.rangeUnderflow')}}
- [ConstantSourceNode による複数の引数の制御](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [垂直フォームコントロールの作成](/ja/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [範囲要素のスタイル設定](https://css-tricks.com/sliding-nightmare-understanding-range-input/)<sup>(英語)</sup>
