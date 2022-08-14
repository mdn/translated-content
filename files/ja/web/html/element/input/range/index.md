---
title: <input type="range">
slug: Web/HTML/Element/input/range
tags:
  - 要素
  - フォーム
  - HTML
  - HTML フォーム
  - HTML input tag
  - Input
  - Range
  - リファレンス
  - ウェブ
  - スライダー
browser-compat: html.elements.input.input-range
translation_of: Web/HTML/Element/input/range
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`range`** 型は、ユーザーに特定の値より小さくなく、別な特定の値より大きくない数値を指定させるために使用します。しかし、厳密な値が重要であるとはされません。これは通常、 {{HTMLElement('input/number', 'number')}} 入力型のようなテキスト入力ボックスではなく、スライダーやダイアルコントロールを用いて表現されます。

この種のウィジェットは厳密なものではないので、コントロールの正確な値が重要でない限り、通常は使用するべきではありません。

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

ユーザーのブラウザーが `range` 型に対応していない場合は、 `{{HTMLElement('input/text', 'text')}}` 入力で代替されて扱われます。

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#値">値</a></strong></td>
      <td>
        選択された数値を表す文字列を含む {{domxref("DOMString")}}。数値として値を取得するには {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}} を使用してください。
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
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
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

{{htmlattrxref("value", "input")}} 属性は、選択された数値を表す文字列が入った {{domxref("DOMString")}} です。値は空文字列 (`""`) にはなりません。既定値は指定された最大値と最小値の中間値で、ただし最大値が最小値を下回っている場合は、既定値は `min` 属性の値に設定されます。既定値を特定するアルゴリズムは次の通りです。

```js
defaultValue = (rangeElem.max < rangeElem.min) ? rangeElem.min
               : rangeElem.min + (rangeElem.max - rangeElem.min)/2;
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

> **Note:** ユーザーがデータを入力したときには刻みの設定には吸着せず、{{Glossary("user agent", "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`range` 入力欄の既定の刻み値は 1 であり、刻みの基準値が整数ではない場合を*除いて*、整数の入力のみを許可します。例えば、 `min` に -10 を、 `value` に 1.5 を設定した場合、 `step` が 1 の場合は正の方向に 1.5, 2.5, 3.5,... など、負の方向に -0.5, -1.5, -2.5,... などのみが許可されます。 [HTML の `step` 属性](/ja/docs/Web/HTML/Attributes/step)を参照してください。</p>

### 標準外の属性

### orient

CSS の標準外の -moz-orient non-standard プロパティと同様に {{htmlelement('progress')}} および {{htmlelement('meter')}} 要素に影響を与える `orient` 属性は、範囲スライダーの向きを定義する定義します。値は `horizontal` が範囲を水平方向に描画することを、 `vertical` が範囲を垂直に描画することを意味します。

> **Note:** input 型の属性のうち、 `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size`, `src`, `width` は範囲入力には適用されません。これらの属性が含まれた場合は無視されます。

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
<input type="range" min="-10" max="10">
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### 値の粒度の設定

既定では、粒度は 1 であり、値は常に整数であることを意味します。この粒度は {{htmlattrxref("step")}} 属性を変更することで制御することができます。例えば、 5 から 10 の間の値で、小数点以下 2 桁の精度が必要な場合、 `step` の値を 0.01 に設定します。

#### step 属性の設定

```html
<input type="range" min="5" max="10" step="0.01">
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### step を "any" に設定

小数点以下が何桁になろうと、どんな値でも受け入れたい場合は、 {{htmlattrxref("step", "input")}} 属性に `any` という値を指定することができます。

```html
<input type="range" min="0" max="3.14" step="any">
```

{{EmbedLiveSample("Setting_step_to_any", 600, 40)}}

この例では、 0 から π までの任意の値を選択することができ、選択された値の小数部は制限されません。

### 目盛りとラベルの追加

HTML の仕様では、範囲コントロールの表示方法について、ブラウザーにある程度の柔軟性を持たせています。この柔軟性は、目盛りやラベルの分野ほど明確なものはありません。この仕様書では、 {{htmlattrxref("list", "input")}} 属性と {{HTMLElement("datalist")}} 要素を使って範囲コントロールに独自のポイントを追加する方法を説明していますが、コントロールの長さに沿った標準的なハッシュや目盛マークについての要件や推奨事項はありません。

#### 範囲コントロールのモックアップ

ブラウザーにはこのような柔軟性がありますが、 HTML が定義する範囲コントロールの機能すべてに対応しているものは今のところありません。ここでは、それらに対応しているブラウザーで、 macOS で得られるかもしれないものを示すモックアップをいくつか紹介します。

##### 簡素な範囲コントロール

これは {{htmlattrxref("list", "input")}} 属性を指定しない場合や、ブラウザーが対応していない場合に表示されるものです。

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>例</th>
    </tr>
    <tr>
      <td rowspan="4">
        <pre class="brush: html">&#x3C;input type="range"></pre>
      </td>
      <th>画面ショット</th>
    </tr>
    <tr>
      <td>
        <img alt="macOS の生のスライダーコントロールの画面ショット" src="macslider-plain.png">
      </td>
    </tr>
    <tr>
      <th>ライブ</th>
    </tr>
    <tr>
      <td>
        {{EmbedLiveSample("An_unadorned_range_control",200,55,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

##### 目盛り付きの範囲コントロール

この範囲コントロールは、コントロール上の一連の目盛りを定義する {{HTMLElement("datalist")}} の ID を指定する `list` 属性を使用しています。 11 個の目盛りがあり、 0% と 10% ごとのマークに 1 つずつあります。各ポイントは {{HTMLElement("option")}} 要素で表され、その {{htmlattrxref("value", "option")}} にはマークが描かれるべき範囲の値が設定されています。

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>例</th>
    </tr>
    <tr>
      <td rowspan="4">
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0">&#x3C;/option>
&#x3C;option value="10">&#x3C;/option>
&#x3C;option value="20">&#x3C;/option>
&#x3C;option value="30">&#x3C;/option>
&#x3C;option value="40">&#x3C;/option>
&#x3C;option value="50">&#x3C;/option>
&#x3C;option value="60">&#x3C;/option>
&#x3C;option value="70">&#x3C;/option>
&#x3C;option value="80">&#x3C;/option>
&#x3C;option value="90">&#x3C;/option>
&#x3C;option value="100">&#x3C;/option>
&#x3C;/datalist>

</pre
        >
      </td>
      <th>画面ショット</th>
    </tr>
    <tr>
      <td>
        <img alt="macOS の生のスライダーコントロールの画面ショット" src="macslider-plain.png">
      </td>
    </tr>
    <tr>
      <th>ライブ</th>
    </tr>
    <tr>
      <td>
        {{EmbedLiveSample("A_range_control_with_hash_marks_and_labels",200,55,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

##### 目盛りとラベル付きの範囲コントロール

ラベルを付けたい目盛りに対応する {{HTMLElement("option")}} 要素に {{htmlattrxref("label", "option")}} 属性を追加することにより、範囲コントロールにラベルを追加することができます。

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>例</th>
    </tr>
    <tr>
      <td rowspan="4">
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0" label="0%">&#x3C;/option>
&#x3C;option value="10">&#x3C;/option>
&#x3C;option value="20">&#x3C;/option>
&#x3C;option value="30">&#x3C;/option>
&#x3C;option value="40">&#x3C;/option>
&#x3C;option value="50" label="50%">&#x3C;/option>
&#x3C;option value="60">&#x3C;/option>
&#x3C;option value="70">&#x3C;/option>
&#x3C;option value="80">&#x3C;/option>
&#x3C;option value="90">&#x3C;/option>
&#x3C;option value="100" label="100%">&#x3C;/option>
&#x3C;/datalist>

</pre
        >
      </td>
      <th>画面ショット</th>
    </tr>
    <tr>
      <td>
        <img
          alt="macOS での生のスライダーコントロールの画面ショット"
          src="macslider-labels.png"
        />
      </td>
    </tr>
    <tr>
      <th>ライブ</th>
    </tr>
    <tr>
      <td>
        {{EmbedLiveSample("A_range_control_with_hash_marks_and_labels",200,55,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

> **Note:** 現在、これらの機能に完全に対応しているブラウザーはありません。例えば、 Firefox は目盛りとラベルに全く対応していませんし、 Chrome は目盛りに対応していますが、ラベルには対応していません。 Chrome のバージョン66 (66.0.3359.181) ではラベルには対応していますが、 {{htmlelement("datalist")}} タグの {{cssxref("display")}} プロパティが既定で `none` に設定されておりラベルが非表示なので CSS を使ってスタイル付けする必要があります。

### 方向の変更

既定では、ブラウザーが範囲入力をスライダーとしてレンダリングする場合、つまみが左右にスライドするようにレンダリングされます。対応すれば、 CSS で幅の値より大きい高さの値を宣言することで、範囲を垂直にして上下にスライドさせることができるようになります。これは、実はまだ主要なブラウザーでは実装されていません。（Firefox {{bug(981916)}}, [Chrome bug 341071](https://bugs.chromium.org/p/chromium/issues/detail?id=341071) 参照）。また、おそらく、まだ[議論中](https://github.com/whatwg/html/issues/4177)であるかもしれません。

一方、CSS 座標変換を使って回転させることで、範囲を垂直にすることができます。また、 {{cssxref('appearance')}} を `slider-vertical` に設定する、Firefox で標準ではない `orient` 属性を使う、または Internet Explorer と Edge でテキスト方向を変更するなど、それぞれのブラウザエンジンに合わせた方法で、対象を垂直にしていくことが可能です。

#### 水平の範囲コントロール

この範囲コントロールを考えてください。

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1">
```

{{EmbedLiveSample("Horizontal_range_control", 200, 200, "orientation_sample1.png")}}

このコントロールは水平です（少なくとも主要なブラウザーではそうですが、他のブラウザーでは異なるかもしれません）。

#### 標準ベースの垂直範囲コントロール

仕様によると、縦長にするには、以下のように CSS を追加して、コントロールの寸法を横幅よりも縦幅が大きくなるように変更する必要があるそうです。

```css
#volume {
  height: 150px;
  width: 50px;
}
```

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1">
```

{{EmbedLiveSample("Standards-based_vertical_range_control", 200, 200, "orientation_sample2.png")}}

残念ながら、現在垂直範囲コントロールに直接対応している主要なブラウザーはありません。

#### transform の使用

水平方向の範囲コントロールを横に描画することで、垂直方向の範囲コントロールを作成することができます。最も簡単な方法は CSS を使うことです。 {{cssxref("transform")}} を適用して要素を回転させることで、縦長にすることができます。それでは見てみましょう。

HTML を更新して {{HTMLElement("input")}} を {{HTMLElement("div")}} で囲み、座標変換が行われた後にレイアウトを修正できるようにします（座標変換は自動的にはページのレイアウトに影響しないので）。

```html
<div class="slider-wrapper">
  <input type="range" min="0" max="11" value="7" step="1">
</div>
```

次に、 CSS が必要です。これはページが正しく表示されるように、表示モードとサイズを指定します。要するに、スライダーのためにページの領域を確保し、回転したスライダーが混乱することなく確保したスペースに収まるようにします。

```css
.slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}
```

次に、予約されたスペース内にある `<input>` 要素のスタイル情報です。

```css
.slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
```

コントロールの大きさは、縦 150 ピクセル×横 20 ピクセルに設定されています。マージンは 0 に設定され、{{cssxref("transform-origin")}} はスライダーが回転する空間の中央に移動します。スライダーは幅 150 ピクセルに設定されているので、各辺が 150 ピクセルであるボックスを回転して通過します。原点を各軸で 75px オフセットすることで、その空間の中心を軸に回転することを意味します。最後に、反時計回りに 90° 回転させます。その結果、最大値が上、最小値が下になるように回転された範囲入力が得られます。

{{EmbedLiveSample("Using_transform", 200, 200, "orientation_sample3.png")}}

#### appearance プロパティの使用

{{cssxref('appearance')}} プロパティには `slider-vertical` という標準外の値があり、スライダーを縦にします。

これまでの例と同じ HTML を使用します。

```html
<input type="range" min="0" max="11" value="7" step="1">
```

`range` 型の入力だけを対象にします。

```css
input[type="range"] {
  -webkit-appearance: slider-vertical;
}
```

{{EmbedLiveSample("Using_the_appearance_property", 200, 200)}}

#### orient 属性の使用

Firefox だけですが、標準外の `orient` プロパティがあります。

前述の例と同様の HTML を使用しますが、この属性に `vertical` の値を設定します。

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical">
```

{{EmbedLiveSample("Using_the_orient_attribute", 200, 200)}}

#### writing-mode: bt-lr;

{{cssxref('writing-mode')}} プロパティは、一般に国際化や地域化のためにテキスト方向を変更するために使用するべきではありませんが、特殊効果のために使うことができます。

前述の例と同様の HTML を使用します。

```html
<input type="range" min="0" max="11" value="7" step="1">
```

入力型が range の物だけを対象に、書字方向を `bt-lr`、すなわち下から上へ、右から左へ設定します。

```css
input[type="range"] {
  writing-mode: bt-lr;
}
```

{{EmbedLiveSample("writing-mode_bt-lr", 200, 200)}}

#### すべて一緒に設定

上記の例は異なるブラウザーで動作するため、単一の例が複数のブラウザーで動作するように一緒に指定することができます。

`orient` 属性に `vertical` の値を設定することで Firefox に対応します。

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical">
```

入力型が range のものだけを対象にして、書字方向を既定値から `bt-lr`、すなわち下から上、左から右に指定することで Edge や Internet Explorer に対応し、 `-webkit-appearance: slider-vertical` で WebKit ベースのブラウザーに対応します。

```css
input[type="range"] {
  writing-mode: bt-lr;
  -webkit-appearance: slider-vertical;
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
- [`<input type="number">`](/ja/docs/Web/HTML/Element/input/number)`
- {{domxref('validityState.rangeOverflow')}} および {{domxref('validityState.rangeUnderflow')}}
- [ConstantSourceNode による複数の引数の制御](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Styling the range element](https://css-tricks.com/sliding-nightmare-understanding-range-input)
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
