---
title: HTML `<input type="color">` 属性値
short-title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}} 要素の **`color`** は、視覚的なカラーピッカーインターフェイスを使用したり、[CSS 色値](/ja/docs/Web/CSS/Reference/Values/color_value)の決められた形式でテキストフィールドに色を入力したりして、ユーザーが色を指定できるユーザーインターフェイス要素を提供します。

この要素の外見は、ブラウザーやプラットフォームによって大きく異なります。基本的なテキストの入力フィールドで、入力された色情報が文字列の検証のみを行う入力フィールドであったり、プラットフォームの標準カラーピッカーや、独自のピッカーウィンドウを表示するなど、ブラウザーやプラットフォームにより大きく異なることがあります。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;color&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>色を選択してください:</p>

<div>
  <input type="color" id="foreground" name="foreground" value="#e66465" />
  <label for="foreground">前景色</label>
</div>

<div>
  <input
    type="color"
    id="background"
    name="background"
    value="oklab(50% 0.1 0.1 / 0.5)"
    colorspace="display-p3"
    alpha />
  <label for="background">背景色</label>
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

## 値

[CSS 色値](/ja/docs/Web/CSS/Reference/Values/color_value)です。

> [!NOTE]
> 従来は、基本的な 16 進表記の色（アルファチャンネルなし）のみが許可されていました。現在では、名前付きの色、関数記法、アルファチャンネル付きの 16 進表記など、あらゆる CSS の色表記書式を使用することができます。`value` が省略された場合、または無効な場合、デフォルト値は `#000000`（黒）となります。

## 追加の属性

[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)や、すべての {{HTMLElement("input")}} 要素に共通する [input 属性](/ja/docs/Web/HTML/Reference/Elements/input#属性) に加え、`color` 入力要素は以下の属性も対応しています。

- `alpha` {{experimental_inline}}
  - : [論理](/ja/docs/Glossary/Boolean/HTML)属性で、存在する場合、その色はエンドユーザーによって不透明度を調整可能であり、完全に不透明であるとは限りません。

- `colorspace` {{experimental_inline}}
  - : 色の{{glossary("color space", "色空間")}}を定義し、カラーピッカーウィジェットの望ましいインターフェイスを示します。取りうる{{Glossary("enumerated", "列挙")}}値は次の通りです。
    - `"limited-srgb"`: 色は {{glossary("RGB", "sRGB")}} 色空間で指定されます。この色空間には {{cssxref("color_value/rgb", "rgb()")}}、{{cssxref("color_value/hsl", "hsl()")}}、 {{cssxref("color_value/hwb", "hwb()")}}、{{cssxref("hex-color")}} 値が含まれます。色値は、`r`、`g`、`b` 各要素につき 8 ビットに制限されます。これがデフォルト値です。
    - `"display-p3"`: [Display P3 色空間](/ja/docs/Glossary/Color_space#display-p3)、例えば `color(display-p3 1.84 -0.19 0.72 / 0.6)` です。

## 色入力フィールドの使用

type が `color` の入力フィールドは、対応する属性の数が限られているので単純です。

### デフォルト色の設定

上記の例でデフォルト値を設定するように変更すると、カラーピッカーがあらかじめデフォルト色で塗りつぶされ、カラーピッカーも（もしあれば）その色がデフォルトになります。

```html
<input type="color" value="#ff0000" />
<input
  type="color"
  id="body"
  name="body"
  value="oklab(50% 0.1 0.1 / 0.5)"
  colorspace="display-p3"
  alpha />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

値を指定しない場合、または値が無効な状態であるか、ブラウザーが対応していない場合、値はデフォルトで `#000000`（不透明な黒）になります。

### 色の変更の追跡

ほかの {{HTMLElement("input")}} 型と同様に、{{domxref("Element/input_event", "input")}} および {{domxref("HTMLElement/change_event", "change")}} イベントで色の変化を検出することができます。`input` は `<input>` 要素で色が変更されるたびに実行されます。`change` イベントはユーザーがカラーピッカーを閉じたときに実行されます。どちらの場合も、新しい値は [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) で調べることができます。

次の例は、色の変更をずっと監視します。

```js
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", watchColorPicker);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### 値の選択

ブラウザーがカラーピッカーインターフェイスに対応していない場合、カラー入力の実装はテキストボックスとなり、値が正しい形式であることを確認するために、自動的に中身を検証することになります。この場合、{{domxref("HTMLInputElement.select", "select()")}}メソッドを使用して、現在編集フィールドに使用されているテキストを選択することができます。

ブラウザーがカラーピッカーなどを提供している場合、`select()` は何もしません。いずれの状況でもコードが動作するように気をつける必要があります。

```js
colorPicker.select();
```

## 検証

{{Glossary("User agent", "ユーザーエージェント")}} が値を正しい形式である 7 桁の小文字の 16 進記法に変換できない場合、値は無効であると見なされます。このときは {{cssxref(":invalid")}} 擬似クラスが要素に適用されます。

## 例

{{domxref("HTMLElement/change_event", "change")}} および {{domxref("Element/input_event", "input")}} イベントを追跡して、新しい色を取得し、その度に文書の {{HTMLElement("p")}} 要素に適用する例をもう少し作成してみましょう。

### HTML

HTML はかなり単純です。数段落の説明的な素材と、 ID が `color-picker` で `color` 型の {{HTMLElement("input")}} があり、これを使用して段落のテキストの色を変更することになります。

```html
<p>
  <code>&lt;input type="color"&gt;</code> コントロールを使用する例です。
</p>

<label for="color-picker">色:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  カラーピッカーを動かしたときに段落の色が変わるのを見てください。カラーピッカーに変更を加えると、最初の段落の色が、プレビューとして変化します（<code>input</code> イベントを使用します）。カラーピッカーを閉じると、<code>change</code> イベントが実行され、全ての段落が選択された色に変化することが分かります。
</p>
```

### JavaScript

#### 初期化

次のコードで色入力フィールドを初期化します。

```js
const defaultColor = "#0000ff";
const colorPicker = document.querySelector("#color-picker");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", updateAll);
colorPicker.select();
```

これは color の `<input>` 要素の参照を取得して `colorPicker` という変数に格納し、色入力フィールドの値を `defaultColor` を設定します。次に、{{domxref("Element/input_event", "input")}} イベントに `updateFirst()` 関数を、{{domxref("HTMLElement/change_event", "change")}} イベントに `updateAll()` 関数を指定します。これらについては後述します。

最後に {{domxref("HTMLInputElement.select", "select()")}} を呼び出し、色入力のテキストコンテンツを選択します。これはカラーピッカーが提供されていないなどで、テキスト入力フィールドとして表示された場合に利用します。

#### 色の変更に応答させる

色の変更に反応する 2 つの関数を与えています。`updateFirst()` 関数は `input` イベントによって呼び出され、文書の最初にある段落要素の色を変えて、入力フィールドの新しい値と一致させます。 `input` イベントは値を調整する（例えば明るさを増加させるなど）たびに実行されるため、カラーピッカーが使用される毎に繰り返して実行されます。

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

カラーピッカーが閉じられると、（ユーザーがカラーピッカーを再び開かない限り）値が再び変化することはないことを示す `change` イベントが要素に送られます。そのイベントを `updateAll()` 関数で処理し、 [`Event.target.value`](/ja/docs/Web/HTML/Reference/Elements/input#value) を使用して最終的に選択された色を取得します。

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

これは、すべての {{HTMLElement("p")}} ブロックの色を設定して、その {{cssxref("color")}} 属性が色入力フィールド（{{domxref("Event.target", "event.target")}} を使用して参照される）の現在の値と一致するようにするものです。

### 結果

最終的な結果は次のようになります。

{{EmbedLiveSample("Example", 700, 200)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>
        小文字の 16 進数で {{cssxref("&lt;color&gt;")}} を定義する 7 文字の文字列
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
      <td><strong>対応する共通属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a> および
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>list</code> および <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
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

- {{domxref('HTMLInputElement.alpha')}}
- {{domxref('HTMLInputElement.colorspace')}}
