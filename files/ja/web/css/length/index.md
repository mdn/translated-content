---
title: <length>
slug: Web/CSS/length
tags:
  - CSS
  - CSS データ型
  - データ型
  - レイアウト
  - リファレンス
  - ウェブ
  - length
browser-compat: css.types.length
translation_of: Web/CSS/length
---
{{CSSRef}}

**`<length>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、長さの値を表します。長さは {{Cssxref("width")}}、{{Cssxref("height")}}、{{Cssxref("margin")}}、{{Cssxref("padding")}}、{{Cssxref("border-width")}}、{{Cssxref("font-size")}}、{{Cssxref("text-shadow")}} など数多くの CSS プロパティで使用されています。

> **Note:** {{cssxref("&lt;percentage&gt;")}} 値も `<length>` 値を受け付ける同じプロパティの一部でも使用することができますが、 `<length>` 値と同じものではありません。 {{cssxref("&lt;length-percentage&gt;")}} を参照してください。

## 構文

`<length>` データ型は一つの {{cssxref("&lt;number&gt;")}} とそれに続く以下に挙げる単位の一つから成ります。単位と数値の間に空白は置きません。数値 `0` の後の単位は省略可能です。

> **Note:** 負の `<length>` を許容するプロパティとそうでないプロパティがあります。

### 単位

#### 相対的な長さの単位

相対的な長さとは、他の長さに従って長さを指定することです。単位によって、これは特定の文字の寸法であったり、[行の高さ](/ja/docs/Web/CSS/line-height)であったり、{{glossary("viewport", "ビューポート")}}の寸法であったりします。

##### フォントの相対長

フォントの相対長では、 `<length>` の値を、要素やその親で現在使われているフォントにおける、特定の文字やフォント属性の寸法で定義します。

> **Note:** これらの単位、特に `em` と `rem` は、ユーザーがフォントサイズを変更しても[ページの縦方向のリズム](https://24ways.org/2006/compose-to-a-vertical-rhythm)を維持する、スケーラブルなレイアウトを作るためによく使われます。

- `cap` {{experimental_inline}}
  - : その要素の {{Cssxref("font")}} における "cap height" (ふつうの大文字の高さ) を表します。
- `ch`

  - : その要素の {{Cssxref("font")}} における "0" (ゼロ、Unicode 文字 U+0030) の幅、より正確に言えば advance measure です。
 
    "0" の文字の大きさを判断することが不可能または無意味である場合、幅が 0.5em、高さが 1em と仮定します。

- `em`
  - : その要素の {{Cssxref("font-size")}} の計算値を表します。{{Cssxref("font-size")}} プロパティ自身に使われた場合は、要素に<em>継承された</em>フォントの大きさを表します。
- `ex`
  - : その要素の {{Cssxref("font")}} における [x-height](https://en.wikipedia.org/wiki/X-height) です。 'x' の文字を持つフォントでは一般的に、フォントにおける小文字の高さに相当します。多くのフォントでは `1ex ≈ 0.5em` です。
- `ic` {{experimental_inline}}
  - : 描画に使用されるフォントにおける「水」 (CJK water ideograph, U+6C34) の文字の advance measure と同じです。
- `lh` {{experimental_inline}}
  - : 使用されている要素の {{Cssxref("line-height")}} プロパティの計算値と同じで、絶対的な長さに変換されます。
- `rem`
  - : ルート要素 (ふつうは {{HTMLElement("html")}}) の {{Cssxref("font-size")}} を表します。ルート要素の {{Cssxref("font-size")}} で使うと初期値を表します (多くのブラウザーでは既定値は `16px` ですが、ユーザー設定によって変わる可能性があります)。
- `rlh` {{experimental_inline}}
  - : ルート要素 (ふつうは {{HTMLElement("html")}}) の {{Cssxref("line-height")}} プロパティの計算値と同じで、絶対的な長さに変換されます。ルート要素の {{Cssxref("font-size")}} または {{Cssxref("line-height")}} プロパティに使われた場合は、プロパティの初期値になります。

##### ビューポートのパーセント値による寸法

ビューポートのパーセント値による寸法は、{{glossary("viewport", "ビューポート")}}、つまり文書の見える範囲の寸法に対する相対的な `<length>` 値を定義します。ビューポートの寸法は {{cssxref("@page")}} で宣言されたブロックでは無効です。

- `vh`
  - : ビューポートの初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における高さの 1% と同じです。
- `vw`
  - : ビューポートの初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における幅の 1% と同じです。
- `vi` {{experimental_inline}}
  - : 初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における、ルート要素の[インライン軸](/ja/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline)の寸法の 1% と同じです。
- `vb` {{experimental_inline}}
  - : 初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における、ルート要素の[ブロック軸](/ja/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline)の寸法の 1% と同じです。
- `vmin`
  - : `vw` と `vh` の小さい方です。
- `vmax`
  - : `vw` と `vh` の大きい方です。

#### 絶対的な長さの単位

絶対的な長さの単位は、出力メディアの物理的な特性が分かっている場合 (印刷レイアウトなど) に物理的な長さを表します。これはある単位を物理的な単位に固定してから、これを基準に他の単位を定義します。固定する単位は画面のような低解像度の端末か、あるいはプリンターのような高解像度の端末かによって異なります。

低解像度の端末では、`px` の単位が物理的な*参照ピクセル*を表し、その他の単位はこれを基準に定義されます。例えば `1in` は `96px` と定義され、これは `72pt` と等しくなります。このような端末では結果的に、インチ (`in`)、センチメートル (`cm`)、ミリメートル (`mm`) といった単位で表される長さは、同名の物理的な単位と同じ長さになるとは限りません。</p>

高解像度の端末では、インチ (`in`)、センチメートル (`cm`)、ミリメートル (`mm`) は対応する物理的な単位と同じになります。従って、 `px` の単位は、それ (1 インチの 1/96) を基準に定義されます。

> **Note:** たくさんのユーザーが、テキストが読みやすくなるよう{{glossary("user agent", "ユーザーエージェント")}}の既定のフォントの大きさを拡大しています。絶対的な長さで指定すると、大きさが固定され、ユーザー設定によって拡大しなくなるため、アクセシビリティ上の問題が発生します。この理由から、 `font-size` を設定する場合には、 (`em` や `rem` のような) 相対的な単位が適しています。

- `px`
  - : 1 ピクセルです。画面表示では、伝統的に端末の 1 ピクセル (ドット) を表します。しかし、*プリンター*や*高解像度の画面*では、 CSS の 1 ピクセルが端末の複数ピクセルになることがあります。 `1px` = `1in` の 1/96 です。
- `cm`
  - : 1センチメートルです。 `1cm` = `96px/2.54` です。
- `mm`
  - : 1ミリメートルです。 `1mm` = `1cm` の1/10です。
- `Q` {{experimental_inline}}
  - : 1/4ミリメートルです。 `1Q` = `1cm` の1/40です。
- `in`
  - : 1インチです。 `1in` = `2.54cm` = `96px` です。
- `pc`
  - : 1パイカです。 `1pc` = `12pt` = `1in` の1/6です。
- `pt`
  - : 1ポイントです。 `1pt` = `1in` の1/72です。

## 補間

アニメーションの場合、 `<length>` データ型の値は浮動小数点の実数として補間されます。補間は計算値に対して行われます。補間の速度は、アニメーションに関連付けられた[タイミング関数](/ja/docs/Web/CSS/easing-function)によって定められます。

## 例

<h3 id="Length_unit_comparison">長さの単位の比較</h3>

以下のデモでは、入力欄に `<length>` の値 (例えば `300px`, `50%`, `30vw`) を入力することができ、 <kbd>Return</kbd> を押したときにバーの長さが反映されます。

これにより、様々な長さの単位の効果を比較し対照させることができます。

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label>長さを入力してください:</label>
    <input type="text" id="length">
  </div>
  <div class="inner">

  </div>
</div>
<div class="results">
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999;
  box-shadow: inset 3px 3px 5px rgba(255,255,255,0.5),
              inset -3px -3px 5px rgba(0,0,0,0.5);
}

.result {
  height: 20px;
  background-color: #999;
  box-shadow: inset 3px 3px 5px rgba(255,255,255,0.5),
              inset -3px -3px 5px rgba(0,0,0,0.5);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector('.inner');
const inputElem = document.querySelector('input');
const resultsDiv = document.querySelector('.results');

inputElem.addEventListener('change', () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement('div');
  result.className = 'result';
  result.style.width = inputElem.value;
  result.innerHTML = `<code>width: ${inputElem.value}</code>`;
  resultsDiv.appendChild(result);

  inputElem.value = '';
  inputElem.focus();
})
```

#### 結果

{{EmbedLiveSample('Length_unit_comparison','100%', 700)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 値と単位チュートリアル](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS 値と単位リファレンス](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model)
