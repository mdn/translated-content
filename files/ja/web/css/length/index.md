---
title: <length>
slug: Web/CSS/length
page-type: css-type
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
  - length
browser-compat: css.types.length
---

{{CSSRef}}

**`<length>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、長さの値を表します。長さは {{Cssxref("width")}}、{{Cssxref("height")}}、{{Cssxref("margin")}}、{{Cssxref("padding")}}、{{Cssxref("border-width")}}、{{Cssxref("font-size")}}、{{Cssxref("text-shadow")}} など数多くの CSS プロパティで使用されています。

> **メモ:** {{cssxref("&lt;percentage&gt;")}} 値も `<length>` 値を受け付ける同じプロパティの一部でも使用することができますが、 `<length>` 値と同じものではありません。 {{cssxref("&lt;length-percentage&gt;")}} を参照してください。

## 構文

`<length>` データ型は一つの {{cssxref("&lt;number&gt;")}} とそれに続く以下に挙げる単位の一つから成ります。すべてのCSSの寸法と同様に、単位と数値の間に空白は置きません。数値 `0` の後の単位は省略可能です。

> **メモ:** 負の `<length>` を許容するプロパティとそうでないプロパティがあります。

長さ (_specified length_) の [指定値](/ja/docs/Web/CSS/specified_value) はその量と単位で表現されます。長さ (_computed length_) の [計算値](/ja/docs/Web/CSS/computed_value) は指定された長さを絶対長に換算したものであり、その単位は区別されません。

 `<length>` 単位は相対的にも絶対的にもなり得ます。相対的な長さとは、他の長さに従って長さを指定することです。単位によって、これは特定の文字の寸法であったり、[行の高さ](/ja/docs/Web/CSS/line-height)であったり、{{glossary("viewport", "ビューポート")}}の寸法であったりします。相対的な長さの単位を使用するスタイルシートは、ある出力環境から別の出力環境への拡張がより容易になります。

> **メモ:** 子要素は、親要素に指定された相対値は継承せずに、計算値を継承します。

ここに記載されている相対的な長さの単位は、フォントとビューポートに基にしたものです。

##### フォントを基にした相対長

フォントの長さでは `<length>` の値を、要素やその親で現在使われているフォントにおける、特定の文字やフォント属性の寸法で定義します。

> **メモ:** これらの単位、特に `em` と `rem` は、ユーザーがフォントサイズを変更しても[ページの縦方向のリズム](https://24ways.org/2006/compose-to-a-vertical-rhythm)を維持する、スケーラブルなレイアウトを作るためによく使われます。

- `cap` {{experimental_inline}}
  - : その要素の {{Cssxref("font")}} における "cap height" (ふつうの大文字の高さ) を表します。
- `ch`
  - : その要素の {{Cssxref("font")}} における "0" (ゼロ、Unicode 文字 U+0030) の幅、より正確に言えば advance measure です。
    "0" の文字の大きさを判断することが不可能または無意味である場合、幅が 0.5em、高さが 1em と仮定します。
- `em`
  - : その要素の {{Cssxref("font-size")}} の計算値を表します。{{Cssxref("font-size")}} プロパティ自身に使われた場合は、要素に<em>継承された</em>フォントの大きさを表します。
- `ex`
  - : その要素の {{Cssxref("font")}} における [x-height](https://en.wikipedia.org/wiki/X-height) です。 'x' の文字を持つフォントでは一般的に、フォントにおける小文字の高さに相当します。多くのフォントでは `1ex ≈ 0.5em` です。
- `ic`
   - : 描画に使用されるフォントにおける「水」 (CJK water ideograph, U+6C34) の文字の {{Glossary("advance measure")}} と同じです。
- `lh` {{experimental_inline}}
  - : 使用されている要素の {{Cssxref("line-height")}} プロパティの計算値と同じで、絶対的な長さに変換されます。
- `rem`
  - : ルート要素 (ふつうは {{HTMLElement("html")}}) の {{Cssxref("font-size")}} を表します。ルート要素の {{Cssxref("font-size")}} で使うと初期値を表します (多くのブラウザーでは既定値は `16px` ですが、ユーザー設定によって変わる可能性があります)。
- `rlh` {{experimental_inline}}
  - : ルート要素 (ふつうは {{HTMLElement("html")}}) の {{Cssxref("line-height")}} プロパティの計算値と同じで、絶対的な長さに変換されます。ルート要素の {{Cssxref("font-size")}} または {{Cssxref("line-height")}} プロパティに使われた場合は、プロパティの初期値になります。

### ビューポートを基にした相対長

ビューポート割合長 (viewport-percentage length) の単位は、small、large、dynamic、default の4種類のビューポートサイズを基にしています。これは、ブラウザのインターフェイスが動的に拡大・縮小し、含まれるコンテンツを隠したり見せたりすることに対応するためです。

- **小さい（Small）**

  - : ブラウザのインターフェイスが動的に拡張されるのに対応して可能な限り小さいビューポートが必要な場合は、小さいビューポートのサイズを使用する必要があります。小さいビューポートのサイズは、ブラウザのインターフェイスが拡張されたときに、デザインしたコンテンツがビューポート全体を埋めることができます。また、このサイズを選択すると、ブラウザのインターフェイスが収縮したときに、空白ができる可能性があります。

    例えば、小さいビューポートサイズ基準でのビューポート割合の単位を使用してサイズを設定した要素は、すべての動的なブラウザのインターフェイスで表示された時に、その内容が隠れることなく完全に画面全体に表示されるでしょう。しかし、これらのブラウザのインターフェイスが隠される時は、余分な余白がその要素の周囲にできる可能性があります。したがって、小さいビューポート割合の単位は、一般的には「より安全」ですが、ユーザーがページとやりとりを始めた後では、最も魅力的なレイアウトを生成しないかもしれません。

    小さいビューポートのサイズは `sv` 接頭詞で表され、 `sv*` というビューポート割合長の単位となります。小さいビューポート割合長の単位のサイズは固定されているため、ビューポート自体のサイズが変更されない限り安定しています。

- **大きい（Large）**

  - : ブラウザのインターフェイスが動的に引き込まれることに対応して、できるだけ大きなビューポートを確保したい場合は、大きなビューポートサイズを使用する必要があります。大きなビューポートサイズを使用すると、ブラウザのインターフェイスが格納された（隠された）ときに、デザインしたコンテンツがビューポート全体を満たすことができます。ただし、ブラウザのインターフェイスが拡大すると、コンテンツが隠れてしまう可能性があることに注意する必要があります。

    例えば、画面占有率がとても高い携帯電話では、ユーザーがページをスクロールし始めると、ブラウザはタイトルバーやアドレスバーの一部または全部を隠すことがよくあります。ある要素が、大きいビューポートサイズに基づくビューポート割合長の単位を使用してサイズ設定されている場合、これらのブラウザのインタフェースが非表示になっていると、その要素のコンテンツは可視ページ全体を満たします。しかし、これらの格納式のブラウザ・インターフェイスが表示されると、_大きな_ ビューポート割合長の単位を使用してサイズ設定または配置されたコンテンツを隠すことができます。

    大きいビューポート単位は `lv` 接頭詞で表され、`lv*` というビューポート割合長の単位となります。大きいビューポート割合長の単位のサイズは固定されているため、ビューポート自体のサイズが変更されない限り安定しています。

- **動的（Dynamic）**

  - : ブラウザのインターフェイスが動的に拡大または縮小するのに応じて、ビューポートのサイズを自動的に調整したい場合は、動的なビューポートサイズを使用できます。動的なビューポートサイズは、動的なブラウザインターフェイスの存在に関係なく、デザインしたコンテンツがビューポート内に正確に収まるようにします。

    動的なビューポート単位は `dv` 接頭詞で表され、`dv*` というビューポート割合長の単位となります。ビューポート自体が変更されていなくても、動的なビューポート割合長は安定しません。

    > **メモ:** 動的なビューポートサイズは、より多くの制御と柔軟性を与えることができますが、動的なビューポートサイズに基づいてビューポート割合の単位を使用すると、ユーザーがページをスクロールしている間にコンテンツのサイズが変更される可能性があります。これは、ユーザー・インターフェースの劣化につながり、パフォーマンスを低下させる可能性があります。

- **デフォルト**

  - : デフォルトのビューポートサイズはブラウザによって定義されます。結果として得られるビューポート割合長の単位は、小さいビューポートサイズ、大きいビューポートサイズ、両者の中間のサイズ、または動的なビューポートサイズに基づくビューポート割合長の単位でのに等しい可能性があります。

    > **メモ:** 例えば、ブラウザのデフォルトのビューポート割合長の単位（`vh`）は、大きなビューポート割合長の単位（`lvh`）と等しいかもしれません。もしそうであれば、ブラウザのインターフェイスが拡張されている間、全ページ表示のコンテンツが見えなくなる可能性があります。

ビューポート割合長は、最初の[包含ブロック](/ja/docs/Web/CSS/Containing_block)のサイズに対する割合で`<length>`値を定義します。これは、{{glossary("viewport", "ビューポート")}}またはページ領域、つまりドキュメントの表示部分のいずれかのサイズに基づきます。最初の包含ブロックの高さや幅が変更されると、それに基づいてサイズ調整される要素も拡大縮小されます。以下に説明するように、各ビューポートサイズに対応するビューポート割合長の単位のバリアントがあります。

> **Note:** ビューポートの寸法は {{cssxref("@page")}} で宣言されたブロックでは無効です。

- `vh`

  - : ビューポートの初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)の高さの割合を表します。`1vh`は ビューポートの高さの 1% です。例えば、ビューポートの高さが`300px`の場合、あるプロパティでの`70vh`という値は`210px`となります。

    小さいビューポートサイズ、大きいビューポートサイズ、ダイナミックビューポートサイズの場合、それぞれのビューポート割合の単位は`svh`、`lvh`、`dvh`となります。`vh`はブラウザのデフォルトのビューポートサイズに基づくビューポート割当長の単位です。

- `vw`
  
  - : ビューポートの初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)の幅の割合を表します。`1vw`はビューポートの幅の 1% です。例えば、ビューポートの幅が`800px`の場合、あるプロパティでの`50vw`という値は`400px`となります。

    小さいビューポートサイズ、大きいビューポートサイズ、ダイナミックビューポートサイズの場合、それぞれのビューポート割合の単位は `svw`、`lvw`、`dvw` となります。
    `vw`はブラウザのデフォルトのビューポートサイズに基づくビューポート割合長の単位です。

- `vmax`

  - : `vw`と`vh`の最大値を割合を表します。

    小さいビューポートサイズ、大きいビューポートサイズ、およびダイナミックビューポートサイズでは、それぞれのビューポート割合の単位は`svmax`、`lvmax`、`dvmax`です。
    `vmax`はブラウザのデフォルトのビューポートサイズに基づくビューポート割合長の単位です。

- `vmin`

  - : `vw`と`vh`の最小値を割合を表します。

    小さいビューポートサイズ、大きいビューポートサイズ、およびダイナミックビューポートサイズでは、それぞれのビューポート割合の単位は`svmin`、`lvmin`、`dvmin`です。
    `vmin`はブラウザのデフォルトのビューポートサイズに基づくビューポート割合長の単位です。

- `vb`

  - : 初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における、ルート要素の[ブロック軸](/ja/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline)のサイズの割合を表します。

    小さいビューポートサイズ、大きいビューポートサイズ、およびダイナミックビューポートサイズでは、それぞれのビューポート割合の単位は `svb`、`lvb`、`dvb`です。
    `vb`はブラウザのデフォルトのビューポートサイズに基づくビューポート割合長の単位です。

- `vi`

  - : 初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における、ルート要素の[インライン軸](/ja/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline)のサイズの割合を表します。

    小さいビューポートサイズ、大きいビューポートサイズ、およびダイナミックビューポートサイズでは、それぞれのビューポート割合の単位は `svi`、`lvi`、`dvi`です。
    `vi`はブラウザのデフォルトのビューポートサイズに基づくビューポート割合長の単位です。

### Container query length units

When applying styles to a container using container queries, you can use container query length units.
These units specify a length relative to the dimensions of a query container.
Components that use units of length relative to their container are more flexible to use in different containers without having to recalculate concrete length values.
For more information, see [Container queries](/en-US/docs/Web/CSS/CSS_Container_Queries).

- `cqw`

  - : Represents a percentage of the width of the query container. `1cqw` is 1% of the query container's width. For example, if the query container's width is `800px`, then a value of `50cqw` on a property will be `400px`.

- `cqh`

  - : Represents a percentage of the height of the query container. `1cqh` is 1% of the query container's height. For example, if the query container's height is `300px`, then a value of `10cqh` on a property will be `30px`.

- `cqi`

  - : Represents a percentage of the inline size of the query container. `1cqi` is 1% of the query container's inline size. For example, if the query container's inline size is `800px`, then a value of `50cqi` on a property will be `400px`.

- `cqb`

  - : Represents a percentage of the block size of the query container. `1cqb` is 1% of the query container's block size. For example, if the query container's block size is `300px`, then a value of `10cqb` on a property will be `30px`.

- `cqmin`

  - : Represents a percentage of the smaller value of either the query container's inline size or block size. `1cqmin` is 1% of the smaller value of either the query container's inline size or block size. For example, if the query container's inline size is `800px` and its block size is `300px`, then a value of `50cqmin` on a property will be `150px`.

- `cqmax`

  - : Represents a percentage of the larger value of either the query container's inline size or block size. `1cqmax` is 1% of the larger value of either the query container's inline size or block size. For example, if the query container's inline size is `800px` and its block size is `300px`, then a value of `50cqmax` on a property will be `400px`.

#### 絶対的な長さの単位

絶対的な長さの単位は、出力メディアの物理的な特性が分かっている場合 (印刷レイアウトなど) に物理的な長さを表します。これはある単位を物理的な単位に固定してから、これを基準に他の単位を定義します。固定する単位は画面のような低解像度の端末か、あるいはプリンターのような高解像度の端末かによって異なります。

低解像度の端末では、`px` の単位が物理的な*参照ピクセル*を表し、その他の単位はこれを基準に定義されます。例えば `1in` は `96px` と定義され、これは `72pt` と等しくなります。このような端末では結果的に、インチ (`in`)、センチメートル (`cm`)、ミリメートル (`mm`) といった単位で表される長さは、同名の物理的な単位と同じ長さになるとは限りません。</p>

高解像度の端末では、インチ (`in`)、センチメートル (`cm`)、ミリメートル (`mm`) は対応する物理的な単位と同じになります。従って、 `px` の単位は、それ (1 インチの 1/96) を基準に定義されます。

> **メモ:** たくさんのユーザーが、テキストが読みやすくなるよう{{glossary("user agent", "ユーザーエージェント")}}の既定のフォントの大きさを拡大しています。絶対的な長さで指定すると、大きさが固定され、ユーザー設定によって拡大しなくなるため、アクセシビリティ上の問題が発生します。この理由から、 `font-size` を設定する場合には、 (`em` や `rem` のような) 相対的な単位が適しています。

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

### 長さの単位の比較

The following example provides you with an input field in which you can enter a `<length>` value (e.g. `300px`, `50%`, `30vw`) to set the width of a result bar that will appear below it once you've pressed the <kbd>Enter</kbd> or the <kbd>Return</kbd> key.　<!-- 以下のデモでは、入力欄に `<length>` の値 (例えば `300px`, `50%`, `30vw`) を入力することができ、 <kbd>Return</kbd> を押したときにバーの長さが反映されます。 -->

これにより、様々な長さの単位の効果を比較し対照させることができます。

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label for="length">Enter width:</label>
    <input type="text" id="length" />
  </div>
  <div class="inner"></div>
</div>
<div class="results"></div>
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
  box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.5), inset -3px -3px 5px
      rgba(0, 0, 0, 0.5);
}

.result {
  height: 20px;
  box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.5), inset -3px -3px 5px
      rgba(0, 0, 0, 0.5);
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
const inputDiv = document.querySelector(".inner");
const inputElem = document.querySelector("input");
const resultsDiv = document.querySelector(".results");

inputElem.addEventListener("change", () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement("div");
  result.className = "result";
  result.style.width = inputElem.value;
  result.innerHTML = `<code>width: ${inputElem.value}</code>`;
  resultsDiv.appendChild(result);

  inputElem.value = "";
  inputElem.focus();
});
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
