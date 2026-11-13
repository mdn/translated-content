---
title: "ARIA: scrollbar ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`scrollbar` は、表示領域内のコンテンツのスクロールを制御するグラフィカルオブジェクトです。

## 説明

`scrollbar` は、ビューポートのコンテンツのどの部分が現在ビューポートのフレーム内で見えるかを制御する領域です。ビューポートがブラウザーの完全なサイズ、iframe、または任意の要素の [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context) であるかに関係ありません。

### スクロールバーとは

多くのアプリケーションは、コンテンツ領域がアプリケーションウィンドウよりも大きい場合にネイティブスクロールバーを提供します。スクロールバーは一般的に表示領域の右側または下側に表示されます。ネイティブスクロールバーは、制御するビューポートの長さの薄い長方形のトラック領域として表示され、つまみまたはスクローラーと呼ばれる UI 部品がトラックに沿ってドラッグされて、ビューポート内の関連コンテンツを移動させることができます。一部のスクロールバーには、アクティブになったときに短い設定距離でビューポートをスクロールできる矢印がトラックの両端にあります。

このドキュメントを例に取ってみましょう：ビューポートがブラウザーウィンドウ全体で、コンテンツがビューポートより高い場合、ほとんどのブラウザーでは、ウィンドウの右端のスクロールバーがページの全体の長さを表し、スクロールつまみが現在ビューポートにあるページコンテンツの部分を表します。

スクロールバーは、ブラウザーウィンドウ全体のサブセクションであるビューポートにも表示される場合があります。このコンテンツを例として続けると、このコンテンツが {{HTMLElement('iframe')}} または {{HTMLElement('object')}} に埋め込まれている場合、ネイティブ垂直スクロールバーはフレームの高さになります。スクロールバーは一般的にビューポートの長さですが、そうである必要はありません。

現在スクロールバーが表示されていない場合は、ブラウザーがスクロール時のみスクロールバーを表示するか、要素のコンテンツがブロック整形コンテキストに収まらないほど大きい場合のみ表示するためかもしれません。ブラウザーとオペレーティングシステムによっては、スクロールが不要または不可能な場合でも、コンテンツがビューポートに収まっているときにスクロールバーを表示させることができます。

### ARIA `scrollbar`

ネイティブスクロールバーを使用するのが常に最適です。CSS {{CSSXref('overflow')}} プロパティを使用してネイティブスクロールバーの外観を保証できます。[CSS scrollbar 仕様](https://drafts.csswg.org/css-scrollbars/) が開発中です。一部のブラウザーでは、[接頭辞付き擬似要素によるスクロールバーのスタイリング](/ja/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) が可能です。

ネイティブスクロールバーのスタイリングが歴史的に制限されてきたため、JavaScript で実装されたスクロールバーに遭遇することがあります。これをサポートし、完全にアクセシブルにする必要があります。これのために、`scrollbar` ロールを使用して、UI コントロールが対話型スクロールバーであることを支援技術に知らせることができます。

`scrollbar` ロールを持つ要素は、表示領域内のコンテンツのスクロールを制御するグラフィカルオブジェクトです。これは、要素がスクロールバーであることを示す ARIA ロールです。最も類似する HTML 要素は、`range` {{HTMLElement('input')}} タイプ、 [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) です。

`scrollbar` 要素には 2 つの必須属性があります： [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) と [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) です。`aria-controls` 属性は、それが制御するスクロール可能領域の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を参照します。`aria-valuenow` プロパティは、スクロールバーの現在の値を定義します。

`aria-valuenow` は常に必須ですが、[`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) および [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) プロパティは、`scrollbar` の最小値が 0 でない場合または最大値が 100 でない場合のみ、scrollbar ロールに設定する必要があります。`aria-valuenow` の値は常に最小値と最大値の包括的な値の間、または最小値と最大値がそれぞれ `0` と `100` にデフォルト設定されている場合は `0` と `100` の包括的な値の間でなければなりません。`aria-valuenow` は、ビューポートがドキュメントの下部にどれだけ近いかを伝えます。進行状況バーのように考えてください。ドキュメントの開始が最小値で、ドキュメントの終了が最大値です。

`scrollbar` は、制御する方向（水平または垂直）の可視範囲に対するスクロールバーのサイズとつまみの位置により、現在の値と可能な値の範囲を表します。つまり、`scrollbar` の長さ（高さまたは幅）は、ビューポート内のすべてのコンテンツを表します。`aria-valuemin` 値はコンテンツとスクロールバーの開始を表し、`aria-valuemax` 値はコンテンツの終了とスクロールバーの終了を表します。`aria-valuenow` は、現在ビューポートに表示されているコンテンツと、移動可能なつまみの現在の位置または値を表します。`aria-valuenow` 値は一般的に、支援技術によって計算された `aria-valuemin` と `aria-valuemax` の間のパーセンテージとして公開されます。

> [!NOTE]
> 支援技術は一般的に、[`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) が設定されていない限り、`aria-valuenow` の値を `aria-valuemin` と `aria-valuemax` の値の間の範囲のパーセントとしてレンダリングします。この計算に適した方法で `aria-valuemin` 、`aria-valuemax` 、`aria-valuenow` の値を設定することを推奨します。

ネイティブスクロールバーのように、ユーザーはマウス、タッチパッド、キーボード、音声入力を使用して `scrollbar` 要素と直接的または間接的に対話します。`scrollbar` ロール実装では、これらすべての対話方法にも対応する必要があります。

マウスを使用する場合、ユーザーは、存在する場合はスクロールバーの両端にあるスクロール矢印をクリックしたり、スクロールトラックの空の部分をクリックしたり、スクロールつまみをクリックしてドラッグしたりして、`scrollbar` をアクティベートできる必要があります。

キーボードスクロールもサポートする必要があります。フォーカスが `scrollbar` によって制御されるビューポート内にある場合、<kbd>↑</kbd> と <kbd>↓</kbd>（または水平スクロールバーの場合は <kbd>←</kbd> と <kbd>→</kbd>）はスクロールバーのつまみを比例的に移動する必要があります。さらに、<kbd>Page Up</kbd>、<kbd>Page Down</kbd>、<kbd>Space</kbd>、<kbd>Shift + Space</kbd> キーは、コンテンツの下部または上部（または左側または右側）が表示されるまで、各キー押下でコンテンツとスクロールつまみをビューポートの高さ（または幅）だけ移動する必要があります。

JavaScript を使用して `scrollbar` アクションをスクロールコマンドに変換し、以下によってユーザーにフィードバックを提供する必要があります：

1. `scrollbar` 要素を視覚的に更新すること、
2. ビューポートのコンテンツをスクロールすること、
3. [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) プロパティ値を更新すること。

`scrollbar` ロールのデフォルトの方向は垂直です。この場合、[`aria-orientation="vertical"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) を含めることはオプションです。方向は、スクロールバーの方向と、スクロールバーによって制御される表示領域へのスクロール効果を表します。スクロールが左から右または右から左で上から下でない場合は、`scrollbar` ロールを持つ要素に `aria-orientation="horizontal"` を含めてください。

> [!NOTE]
> アクセシブル名は**必須**です。`scrollbar` ロールが HTML {{HTMLElement('input')}} 要素（または `<meter>` または `<progress>` 要素）に適用される場合、アクセシブル名は紐づけられる {{HTMLElement('label')}} から得ることができます。そうでなければ、可視ラベルが存在する場合は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用し、可視ラベルが存在しない場合は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。

### すべての子孫は表示用

プラットフォームアクセシビリティ API で表現される場合に、テキストのみを含むことができるユーザーインターフェイスコンポーネントの種類があります。アクセシビリティ API には、`scrollbar` に含まれるセマンティック要素を表現する方法がありません。この制限に対処するために、ブラウザーは、セマンティックな子を対応していないロールである任意の `scrollbar` 要素のすべての子要素にロール [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) を自動的に適用します。

例えば、見出しを含む以下の `scrollbar` 要素を考えてみてください。

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

`scrollbar` の子孫は表示用であるため、以下のコードは同等です：

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

支援技術ユーザーの観点から、以下のコードスニペットは [アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree) で以下と同等であるため、見出しは存在しません：

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) （必須）
  - : スクロールバーによって制御される内容のビューポートを `id` によって識別します。
- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) （必須）
  - : スクロールバーの現在の値を示す `0`、または存在する場合は `aria-valuemin` と `aria-valuemax` の間の十進数に設定されます。
- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : 支援技術は多くの場合、`aria-valuenow` の値をパーセンテージとして表示します。これが役立たない場合は、このプロパティを使用してスクロールバーの値をユーザーにとってより理解しやすくします。
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : 最小値を表す十進値に設定し、`aria-valuemax` より小さくします。存在しない場合、デフォルト値は `0` です。
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : 最大値を表す十進値に設定し、`aria-valuemin` より大きくします。存在しない場合、デフォルト値は `100` です。
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : ネイティブフォームコントロールを使用していないため、スクロールバーを {{HTMLElement('label')}} と関連付けることができない場合、必要なアクセシブル名を提供できる可視テキストが利用可能な場合は、ラベルとして機能するテキストを含む要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) に設定します。そうでなければ、`aria-label` を使用します。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : {{htmlelement('label')}} を使用できず、`aria-labelledby` で参照できる可視テキストが存在しない場合、必要なアクセシブル名を提供する `scrollbar` 要素にラベルを付ける文字列値を提供します。
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : デフォルトでは、方向は `vertical` です。このプロパティを含めて `horizontal`、`undefined`（他に指定がない限り、すべてのロールのデフォルト）、または `vertical` に設定できます。

### キーボード操作

- <kbd>↑</kbd>
  - : ビューポート内のコンテンツは、コンテンツとスクロールバーの上部に到達するまで、つまみがスクロールバースライダーを比例的に上に移動しながら、1 行上に移動します。
- <kbd>↓</kbd>
  - : ビューポート内のコンテンツは、コンテンツとスクロールバーの下部に到達するまで、つまみがスクロールバースライダーを比例的に下に移動しながら、1 行下に移動します。
- <kbd>←</kbd>
  - : 水平スクロールでは、ビューポート内のコンテンツは、コンテンツの左端がビューポートの左端に突き当たり、つまみがスクロールバーの左端に配置されるまで、つまみがスクロールバースライダーを比例的に左に移動しながら、1 文字の幅だけ左に移動します。
- <kbd>→</kbd>
  - : 水平スクロールでは、ビューポート内のコンテンツは、コンテンツの右端がビューポートの右端に突き当たり、つまみがスクロールバーの右端に配置されるまで、つまみがスクロールバースライダーを比例的に右に移動しながら、1 文字の幅だけ右に移動します。
- <kbd>Page Up</kbd> と <kbd>Shift + Space</kbd>
  - : ビューポート内のコンテンツは、コンテンツとスクロールバーの上部に到達するまで、つまみがスクロールバースライダーを比例的に上に移動しながら、1 ビューポート分の高さだけ上に移動します。
- <kbd>Page Down</kbd> と <kbd>Space</kbd>
  - : ビューポート内のコンテンツは、コンテンツとスクロールバーの下部に到達するまで、つまみがスクロールバースライダーを比例的に下に移動しながら、1 ビューポート分の高さだけ下に移動します。

## 例

以下は、親コンテナーに対して単語が長すぎる可能性がある例です。

```html
<div id="pi-label">Pi</div>
<div id="pi">
  3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</div>
<div
  role="scrollbar"
  aria-labelledby="pi-label"
  aria-controls="pi"
  aria-orientation="horizontal"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="100">
  <div id="thumb"></div>
</div>
```

ARIA ロールをネイティブ UI 機能の代わりに使用する場合、CSS を使用してスクロールバーとつまみをスタイリングし、JavaScript を使用してすべてのキーボードとポインターイベントを処理する必要があります。

CSS を使用して、オーバーフローする PI の値がネイティブスクロールバーを持つようにすることができました：

```html
<h3 id="PI">Pi</h3>
<p class="pi" tabindex="0" aria-labelledby="PI">
  3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</p>
```

```css
.pi {
  overflow: auto;
  max-width: 100%;
}
```

上記の CSS は、段落内の最も長い単語の長さが段落を含むボックスより広い場合に、ユーザーが段落のビューポートとやり取りするときにネイティブスクロールバーが表示されることを意味します。`tabindex` 属性は、キーボードを使用している人がオーバーフローしたコンテンツを移動してスクロールできるように追加されました。

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range)
- HTML {{HTMLElement('progress')}} 要素
- HTML {{HTMLElement('meter')}} 要素
- その他の範囲ウィジェットには以下が含まれます：
  - [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) （フォーカス可能な場合）
  - [`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Document の `scroll` イベント](/ja/docs/Web/API/Document/scroll_event)
