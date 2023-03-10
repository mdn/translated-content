---
title: <input type="range">
slug: Web/HTML/Element/input/range
l10n:
  sourceCommit: ad516ec6fedfc6dd62628b7a4438e215351f5b7e
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`range`** 型は、指定された値より小さくなく、別に指定された値より大きくない値をユーザーに指定させるために使用します。しかし、厳密な値は重要とはされません。これは通常、 {{HTMLElement('input/number', 'number')}} 入力型のようなテキスト入力ボックスではなく、スライダーやダイアルコントロールを用いて表現されます。

この種のウィジェットは厳密なものではないので、コントロールの正確な値が重要でない限り、通常は使用するべきではありません。

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

ユーザーのブラウザーが `range` 型に対応していない場合は、 `{{HTMLElement('input/text', 'text')}}` 入力で代替されて扱われます。

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
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("max", "input")}},
        {{htmlattrxref("min", "input")}},
        {{htmlattrxref("step", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
        および {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
  </tbody>
</table>

### 検証

利用可能なパターン検証はありません。しかし、以下の形で自動検証が行われます。

- {{htmlattrxref("value", "input")}} が何かに設定されており、妥当な浮動小数点数に変換できない場合、入力が不正な入力になるので検証に失敗します。
- 値は {{htmlattrxref("min", "input")}} より小さくはなりません。この既定値は 0 です。
- 値は {{htmlattrxref("max", "input")}} より大きくはなりません。この既定値は 100 です。
- 値は {{htmlattrxref("step", "input")}} の倍数になります。この既定値は 1 です。

### 値

{{htmlattrxref("value", "input")}} 属性は、選択された数値を表す文字列が入った文字列です。値は空文字列 (`""`) にはなりません。既定値は指定された最大値と最小値の中間値で、ただし最大値が最小値を下回っている場合は、既定値は `min` 属性の値に設定されます。既定値を特定するアルゴリズムは次の通りです。

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

最小値よりも小さな値を設定しようとすると、最小値に設定されます。同様に、最大値よりも大きな値を設定しようとすると、最大値に設定される結果になります。

## 追加の属性

すべての {{HTMLElement("input")}} 型で共通する属性に加え、 `range` 型の入力欄は次の属性にも対応しています。

### list

list 属性の値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} です。 {{HTMLElement("datalist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち、この {{htmlattrxref("type", "input")}} と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

対応しているブラウザーで、範囲のオプションがどのように表示されるかの例としては、以下の[目盛り付き範囲コントロール](#目盛り付き範囲コントロール)を参照してください。

### max

この入力欄が受け付ける最大値です。要素に入力された {{htmlattrxref("value", "input")}} がこれを超えた場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 [`max`](/ja/docs/Web/HTML/Attributes/max) 属性の値が数値でない場合、要素は最大値を持ちません。

この値は [`min`](/ja/docs/Web/HTML/Attributes/min) 属性の値より大きいか、等しくしなければなりません。HTML の [`max`](/ja/docs/Web/HTML/Attributes/max) 属性を参照してください。

### min

許可されている値の範囲の最小値です。要素の {{htmlattrxref("value", "input")}} がこれより小さい場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。 `min` 属性の値が数値でない場合、要素は最小値を持ちません。

この値は [`max`](/ja/docs/Web/HTML/Attributes/max) 属性の値以下でなければなりません。 HTML の [`min`](/ja/docs/Web/HTML/Attributes/min) 属性を参照してください。

### step

`step` 属性は値が吸着する粒度を指定する数値、または後述する特殊な値 `any` です。刻みの基準値に等しい値（指定されていれば [`min`](#min)、そうでなければ {{htmlattrxref("value", "input")}}、どちらも設定されていなければ適切な既定値）のみが妥当となります。

文字列値の `any` は、刻みがなく、どの値でも許可されることを意味します（[`min`](#min) や [`max`](#max) など、他の制約には制限されます）。

> **メモ:** ユーザーがデータを入力したときには刻みの設定には吸着せず、{{Glossary("user agent", "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`range` 入力欄の既定の刻み値は 1 であり、刻みの基準値が整数ではない場合を*除いて*、整数の入力のみを許可します。例えば、 `min` に -10 を、 `value` に 1.5 を設定した場合、 `step` が 1 の場合は正の方向に 1.5, 2.5, 3.5,… など、負の方向に -0.5, -1.5, -2.5,… などのみが許可されます。 [HTML の `step` 属性](/ja/docs/Web/HTML/Attributes/step)を参照してください。</p>

### 標準外の属性

### orient

CSS の標準外の -moz-orient non-standard プロパティと同様に {{htmlelement('progress')}} および {{htmlelement('meter')}} 要素に影響を与える `orient` 属性は、範囲スライダーの向きを定義する定義します。値は `horizontal` が範囲を水平方向に描画することを、 `vertical` が範囲を垂直に描画することを意味します。

> **メモ:** input 型の属性のうち、 `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size`, `src`, `width` は範囲入力には適用されません。これらの属性が含まれた場合は無視されます。

## 例

`number` 型がユーザーに数値を入力させ、任意で値を最小値と最大値の間に強制することができるものですので、具体的な値を入力する必要があります。 `range` 入力型は、どの値が選択されているかをユーザーが気にする、または知る必要がない場合に、ユーザーに値を尋ねることができます。

range 入力欄がよく使用される場合の例をいくつか示します。

- ボリュームやバランス、フィルター制御のようなオーディオの制御。
- カラーチャネル、透過度、明るさなどの色の構成の制御。
- 難易度、視点距離、ワールドサイズなどのゲームの構成の制御。
- パスワードマネージャーが生成するパスワードの長さ。

原則として、ユーザーが実際の数値自体よりも最大値と最小値の間のパーセント値に関心がある場合は、 range 入力が最有力候補になります。例えば、ホームステレオの音量制御では、ユーザーは通常「音量を 0.5 に設定する」ではなく、「音量を最大値の半分くらいに設定する」と考えます。

### 最小値と最大値の指定

既定では、最小値は 0 で最大値は 100 です。これが望むものでないのであれば、 {{htmlattrxref("min", "input")}} や {{htmlattrxref("max", "input")}} 属性の値を変更することで、簡単に範囲を変更することができます。浮動小数点値にすることもできます。

例えば、ユーザーに -10 から 10 までの値を尋ねるのであれば、次のようにすることができます。

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### 値の粒度の設定

既定では、粒度は 1 であり、値は常に整数であることを意味します。この粒度は {{htmlattrxref("step")}} 属性を変更することで制御することができます。例えば、 5 から 10 の間の値で、小数点以下 2 桁の精度が必要な場合、 `step` の値を 0.01 に設定します。

#### step 属性の設定

```html
<input type="range" min="5" max="10" step="0.01" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### step を "any" に設定

小数点以下が何桁になろうと、どんな値でも受け入れたい場合は、 {{htmlattrxref("step", "input")}} 属性に `any` という値を指定することができます。

```html
<input type="range" min="0" max="3.14" step="any" />
```

{{EmbedLiveSample("Setting_step_to_any", 600, 40)}}

この例では、 0 から π までの任意の値を選択することができ、選択された値の小数部は制限されません。

### 目盛の追加

範囲コントロールに目盛を追加するには、`list` 属性を記載して、それにコントロール上の一連の目盛を定義する {{HTMLElement("datalist")}} 要素の `id` を指定します。各点は {{HTMLElement("option")}} 要素を使用して表現され、その {{htmlattrxref("value", "option")}} には、マークを描画すべき範囲の値が設定されます。

#### HTML

```html
<label for="temp">快適な温度を選択してください。</label><br />
<input type="range" id="temp" name="temp" list="tickmarks" />

<datalist id="tickmarks">
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
```

#### 結果

{{EmbedLiveSample("Adding hash marks")}}

### ラベルの追加

目盛には `<option>` 要素に `label` 属性を与えることで、ラベル付けをすることができます。ただし、このラベルを表示したり、ラベルを正しい位置に配置するために は CSS を使用しなければなりません。以下はその方法の一つです。

#### HTML

```html
<label for="temp">快適な温度を選択してください。</label><br />
<input type="range" id="temp" name="temp" list="tickmarks" />

<datalist id="tickmarks">
  <option value="0" label="とても冷たい"></option>
  <option value="25" label="冷たい"></option>
  <option value="50" label="ふつう"></option>
  <option value="75" label="やや温かい"></option>
  <option value="100" label="熱い"></option>
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

### 垂直の範囲コントロール

既定では、ブラウザーは範囲入力を、つまみが左右にスライドするスライダーとして描画します。

つまみが上下にスライドする垂直方向の範囲を作成するには、CSS の {{cssxref('appearance')}} プロパティを `slider-vertical` に設定し、Firefox の標準外の `orient` 属性を記載してください。

#### 水平の範囲コントロール

この範囲コントロールを考えてみてください。

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

{{EmbedLiveSample("Horizontal_range_control", 200, 200)}}

このコントロールは水平です（少なくとも主要なブラウザーではそうですが、他のブラウザーでは異なるかもしれません）。

#### appearance プロパティの使用

{{cssxref('appearance')}} プロパティには `slider-vertical` という標準外の値があり、スライダーを縦にします。

これまでの例と同じ HTML を使用します。

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

`range` 型の入力だけを対象にします。

```css
input[type="range"] {
  appearance: slider-vertical;
}
```

{{EmbedLiveSample("Using_the_appearance_property", 200, 200)}}

#### orient 属性の使用

Firefox だけですが、標準外の `orient` プロパティがあります。

前述の例と同様の HTML を使用しますが、この属性に `vertical` の値を設定します。

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

{{EmbedLiveSample("Using_the_orient_attribute", 200, 200)}}

#### writing-mode: bt-lr

{{cssxref('writing-mode')}} プロパティは、一般に国際化やローカライズのためにテキスト方向を変更するために使用するべきではありませんが、特殊効果のために使うことができます。

前述の例と同様の HTML を使用します。

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

入力型が range のものだけを対象に、書字方向を `bt-lr`、すなわち下から上へ、右から左へ設定します。

```css
input[type="range"] {
  writing-mode: bt-lr;
}
```

{{EmbedLiveSample("writing-mode_bt-lr", 200, 200)}}

#### すべて一緒に設定

上記の例は動作するブラウザーが異なるため、単一の例が複数のブラウザーで動作するように一緒に指定することができます。

`orient` 属性に `vertical` の値を設定することで Firefox に対応します。

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

入力型が range のものだけを対象にして、書字方向を既定値から `bt-lr`、すなわち下から上、左から右に指定することで Edge や Internet Explorer に対応し、 `appearance: slider-vertical` で Webkit ベースのブラウザーに対応します。

```css
input[type="range"] {
  writing-mode: bt-lr;
  appearance: slider-vertical;
}
```

{{EmbedLiveSample("Putting_it_all_together", 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォーム](/ja/docs/Learn/Forms)
- {{HTMLElement("input")}} およびそれに基づく {{domxref("HTMLInputElement")}} インターフェイス
- [`<input type="number">`](/ja/docs/Web/HTML/Element/input/number)
- {{domxref('validityState.rangeOverflow')}} および {{domxref('validityState.rangeUnderflow')}}
- [ConstantSourceNode による複数の引数の制御](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Styling the range element](https://css-tricks.com/sliding-nightmare-understanding-range-input)
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
