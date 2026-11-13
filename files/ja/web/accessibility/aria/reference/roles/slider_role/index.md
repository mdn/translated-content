---
title: "ARIA: slider ロール"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

`slider` ロールは、ユーザーが指定された範囲の中から値を選択する入力フィールドを定義します。

## 解説

`slider` ロールは、ユーザーが指定された最小値と最大値の範囲から値を選択する範囲入力ウィジェットのためのものです。

### `slider` ロールと他の範囲選択との比較

ARIA は、開発者に対して、6 種類の[ウィジェットロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles)を提供しています。例えば `progressbar`、`meter`、`slider` などです。

[`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) ロールは、HTML の {{HTMLElement('progress')}} 要素と同様に、タスクの完了度を示す読み取り専用の範囲であり、単一の方向に進んでいきます。例えば、ファイルのアップロード時の進捗バーは、読み込まれた時点で最終的に 100% に到達します。

[`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) ロールは、HTML の {{HTMLElement('meter')}} 要素と同様に、コンピューターのバッテリーインジケーターや自動車のガソリンゲージなど、既知の範囲内の何かの量を示す読み取り専用のゲージです。

`slider` ロールは、HTML の `input` 要素の `range` 型 ([`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range)) と同様に、読み書き可能な入力範囲です。スライダーを使用すると、ユーザーは設定された最小値と最大値の範囲内で値を選択できます。ユーザーは、水平または垂直のスライダー上でスライダーのつまみを移動することで、値を選択します。

これら 3 つの一連の要素はすべて同じ ARIA ステートとプロパティを持っていますが、`slider` ロールだけが読み書き可能な範囲です。つまり、ユーザーの操作によって値が変化するのは `slider` ロールだけです。そのため、`slider` ロールはフォーカスを受け取る必要があります。さらに、キーボード操作、マウスクリック、タッチ操作も対応している必要があります。

> [!WARNING]
> スライダーの値を変更するには、タッチ操作による支援技術が、値を増減させるためのユーザーのジェスチャーに応答し、キーイベントを合成する必要があります。
> `slider` ロール（およびすべての範囲ウィジェット）を使用する前に、タッチ操作が主な入力手段である端末上で、支援技術を用いてスライダーウィジェットを全般的にテストしてください。

### 共通の属性

[`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) 属性は、最小値を設定します。省略された場合、または数値でない場合は、デフォルトで `0`（ゼロ）になります。

[`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) 属性は、最大値を定義します。この属性が指定しなかった場合、または数値でない場合は、デフォルトで 100 になります。

[`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) 属性の値は、最小値以上、最大値以下でなければなりません。この属性は、`slider` および `meter` では必須ですが、`progressbar` ではオプションです。

`slider` については、[`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素を使用している場合を除き、ユーザーが値を更新した際には、`aria-valuenow` の値をプログラムによって更新しなければなりません。

オプションの [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) 属性は、`aria-valuenow` の数値がスライダーの意図した値を反映していない場合に指定します。最小値、最大値、および現在の値はすべて数値であるため、それらの数値が表す値が数値でない場合は、数値を定義する文字列値を `aria-valuetext` 属性に記載する必要があります。例えば、Tシャツのサイズ設定にスライダーを使用する場合、`aria-valuetext` 属性の値は `aria-valuenow` の値が増加するにつれて、xx-small から XX-large へと変化するように設定する必要があります。

`aria-valuetext` の値は、`value` または `aria-valuenow` が更新されるたびに更新しなければならない。`<input type="range">` に対応する HTML 属性はないが、任意の {{htmlelement('input')}} 型に `aria-valuetext` を記載することができます。ARIA 属性は、意味論的な HTML 要素で対応しています。

スライダーにおいて `aria-valuetext` が重要な機能である場合は、代わりに {{HTMLElement('select')}} と {{HTMLElement('option')}} 要素を使用することを考えてみてください。視覚的には範囲として表示されませんが、各オプションの値は、支援技術を利用するユーザーだけでなく、すべての人にとってよりアクセスしやすくなります。

アクセシブル名は**必須**です。範囲のロールが HTML の {{HTMLElement('input')}} 要素（または `<meter>` または `<progress>` 要素）に適用されている場合、アクセシブル名は関連付けられた {{HTMLElement('label')}} から決まります。それ以外の場合は、表示されているラベルが存在する場合は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を、表示されているラベルが存在しない場合は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。

HTML の {{HTMLElement('input')}} 要素を使用してスライダーを生成しない場合は、[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を記載して、スライダーにフォーカスを当てられるようにしてください。3 つの範囲型のうち、`slider` のみがユーザーとの対話が可能であるため、フォーカスを受け取る必要があるのは `slider` のみです。フォーカスはスライダーのつまみに設定する必要があります。

スライダーには、暗黙的に [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) の値として `horizontal` が設定されています。この属性は、`meter` や `progressbar` では対応していません。

### ユーザーによる操作

読み取り専用の `meter` や `progressbar` ロールとは異なり、`slider` は入力要素であり、ユーザーからの操作を受け入れます。スライダーにフォーカスを当てるために [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を記載するほか、キーボードおよびポインティングデバイスへの対応も実装する必要があります。

スライダーは、設定可能な値の範囲を表しています。スライダー上のスライダーつまみの位置は、現在の値を表しています。ユーザー操作に必須なのは、ポインティングデバイスを使用する場合のスライダーつまみのドラッグやスライダーのクリックによる値の変更、およびキーボードユーザー向けの矢印キーなどの方向キーの使用です。下記[キーボード操作](#キーボード操作)を参照してください。

> [!NOTE]
> ネイティブの [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素を使用することを推奨します。`slider` ロールを使用するのは避けてください。ユーザーエージェントは、最小値および最大値に対する現在の `value` に基づいて、範囲入力要素用のスタイル設定されたウィジェットを生成します。意味を伴わない要素を使用する場合、ネイティブの意味を持つ要素のすべての機能を、ARIA 属性、JavaScript、CSS を用いて再現する必要があります。

### 複数のつまみを備えた範囲

複数のつまみを備えたスライダーとは、関連する値のグループ内で、それぞれのつまみが個別の値を設定するスライダーのことです。例えば、商品検索では、2 つのつまみを備えたスライダーを使用して、ユーザーが検索の最小価格と最高価格の制限を設定することができます。

2 つのつまみを備えたスライダーの多くでは、スライダーが範囲の最小値と最大値を設定する場合など、スライダー同士が互いに交差することは許されません。例えば、価格範囲セレクターでは、範囲の下限を設定するつまみの最大値は、範囲の上限を設定するつまみの現在の値によって制限されます。同時に、上限側のつまみの最小値も、下限側のつまみの現在の値によって制限されます。

複数のつまみを備えたスライダーにおいて、それぞれのつまみの値を他のつまみの値に依存させることは必須ではありませんが、直感的な使い勝手が要求されるため、このアンチパターンは避けることができます。

### すべての子要素は表示用である

プラットフォームのアクセシビリティ API で表される際、テキストのみを含むことができるユーザーインターフェイス要素がいくつかあります。アクセシビリティ API は、`slider` に含まれる意味的要素を表す方法を持っていません。
この制限に対処するため、ブラウザーは、`slider` 要素のすべての子孫要素に対して自動的にロール [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) を適用します。これは、意味的なな子要素に対応しないロールであるためです。

例えば、見出しを含む以下の `slider` 要素を考えてみましょう。

```html
<div role="slider"><h3>温度（℃）</h3></div>
```

`slider` の子要素はプレゼンテーション要素であるため、次のコードは以下と同等です。

```html
<div role="slider"><h3 role="presentation">温度（℃）</h3></div>
```

支援技術のユーザーの視点から見ると、この見出しは存在しません。なぜなら、前回のコードスニペットは、[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)において以下と同等だからです。

```html
<div role="slider">温度（℃）</div>
```

## 関連する WAI-ARIA ロール、ステート、プロパティ

- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)（必須）
  - : `aria-valuemin` と `aria-valuemax` の間の 10 進数に設定し、スライダーの現在の値を示します。
- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : 支援技術では、`aria-valuenow` の値が数値として表示されることがよくあります。これが正確でない場合は、`aria-valuetext` を使用して、スライダーの値が理解しやすいようにしてください。
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : 最小値を表す十進数に設定し、`aria-valuemax` より小さい値とします。指定がない場合、デフォルト値は 0 です。
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : 最大値を十進数で表し、`aria-valuemin` より大きい値に設定します。指定がない場合、デフォルト値は 100 です。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : スライダー要素にラベルを付ける文字列値を定義するか、またはその要素（または複数の要素）を特定し、アクセシブル名を指定します。アクセシブル名は必須です。
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : 要素の方向が水平、垂直、不明／曖昧のいずれかを示します。スライダーの場合、暗黙の値は `horizontal` ですが、`vertical` に設定することも可能です。暗黙の値があるため、スライダーの方向が曖昧になることはありません。

### キーボード操作

| キー           | 動作                                                          |
| -------------- | ------------------------------------------------------------- |
| 右矢印と上矢印 | 選択した値を 1 つ増やす                                       |
| 左矢印と下矢印 | 選択した値を 1 つ減らす                                       |
| Page Up        | （オプション）値を 1 つよりも大きなまとまった量だけ増加させる |
| Page Down      | （オプション）値を 1 つよりも大きなまとまった量だけ減少させる |
| Home           | スライダーを最小値に設定する                                  |
| End            | スライダーを最大値に設定する                                  |

オプションの <kbd>Page Up</kbd> および <kbd>Page Down</kbd> キーについては、スライダーの値の変化量は、上矢印キーおよび下矢印キーによる段階的な変化量よりも大きくする必要があります。

## 例

下記の例では、ユーザーが室温を設定可能な縦型の温度計を作成します。

```html
<div>
  <div id="temperatureLabel">気温</div>
  <div id="temperatureValue">20°C</div>
  <div id="temperatureSlider">
    <div
      id="temperatureSliderThumb"
      role="slider"
      aria-labelledby="temperatureLabel"
      aria-orientation="vertical"
      tabindex="0"
      aria-valuemin="15.0"
      aria-valuemax="25.0"
      aria-valuenow="20.0"
      aria-valuetext="20 degrees Celsius"
      style="top: calc((25 - 20)*2rem - 0.5rem)"></div>
  </div>
</div>
```

つまみの位置は、最大値から現在の値に 1 度分の高さを掛けた値を差し引き、さらにつまみの高さの半分を差し引いて中央に配置されます。その他のスタイルは静的です。

```css
[id="temperatureSlider"] {
  position: relative;
  height: 20rem;
  width: 1rem;
  outline: 1px solid;
  margin: 3rem;
}

[id="temperatureSliderThumb"] {
  position: absolute;
  height: 1rem;
  width: 2rem;
  background-color: currentColor;
  left: -0.5rem;
}
```

この例を動作させるには、`pointermove`、`pointerup`、`focus`、`blur`、`keydown` などのイベントリスナーを記載し、すべてのキーボードおよびポインタイベントを処理するスクリプトを作成し、デフォルトの状態や、つまみおよびスライダーがフォーカスを受け取ったときのスタイルを指定する必要があります。つまみの位置、`aria-valuenow` および `aria-valuetext` の値、[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) が ""temperatureValue" である要素の内部テキストは、<kbd>ArrowLeft</kbd>、<kbd>ArrowDown</kbd>、 <kbd>ArrowRight</kbd>、<kbd>ArrowUp</kbd>、<kbd>Home</kbd>、<kbd>End</kbd>、およびオプションで <kbd>PageDown</kbd> と <kbd>PageUp</kbd> キーが離されたとき、あるいはユーザーがスライダーのつまみをドラッグしたり、温度スライダーをクリックしたりした際に更新する必要があります。

意味論的な HTML を使用すれば、次のように記述できるはずです。

```html
<label for="temperature"> 温度 </label>
<output id="temperatureValue">20°C</output>
<input
  type="range"
  id="temperatureSlider"
  min="15"
  max="25"
  step="0.1"
  value="20"
  aria-valuetext="20 degrees celsius" />
```

```css
#temperatureSlider {
  transform: rotate(-90deg);
}
```

{{HTMLElement('input')}} を使用することで、スタイルが適用済みで、キーボードフォーカス、フォーカス時のスタイル設定、キーボード操作に対応し、ユーザーの操作に応じて `value` が自動的に更新される範囲入力ウィジェットを、追加の手間なく取得できます。ただし、`aria-valuetext` および {{HTMLElement('output')}} 要素の値を変更するには、JavaScript を使用する必要があります。

範囲入力を縦方向に配置するには、いくつか方法があります。この例では、[CSS 座標変換](/ja/docs/Web/CSS/Reference/Properties/transform)を使用しました。

## ベストプラクティス

スライダーがページの具体的な領域の読み込み進行状況を表している場合は、スライダーの状態を参照するために [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性を指定し、読み込みが完了するまで、その領域の [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) 属性を `true` に設定してください。

HTML's `<input type="range">` implicitly has the `role` of `slider`. Do not use `aria-valuemax` or `aria-valuemin` attributes on `<input type="range">` elements; use `min` and `max` instead. Otherwise, any global `aria-*` attributes and any other `aria-*` attributes applicable to the slider role.

### 推奨される HTML

ネイティブの {{HTMLElement("input")}} の `range` 型、[`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range)を使用し、`slider` ロールを使用しないことを推奨します。

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}} 要素
- HTML {{HTMLElement('meter')}} 要素
- その他の範囲ウィジェット:
  - [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)（フォーカス可能な場合）
  - [`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C WAI-ARIA 実践の例:
  - [Horizontal Multi-Thumb Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Color Viewer Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Rating Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Media Seek Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertical Temperature Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
