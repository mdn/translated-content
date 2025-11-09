---
title: CSS によるカルーセルの作成
short-title: カルーセルの作成
slug: Web/CSS/Guides/Overflow/Carousels
original_slug: Web/CSS/CSS_overflow/CSS_carousels
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

[CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュールは、ブラウザーによって生成され、開発者がスタイルを設定したスクロールボタンおよびスクロールマーカーを備えた、柔軟でアクセシビリティの高い純粋な CSS カルーセルを作成するための機能を定義します。このガイドでは、これらの機能を使用してカルーセルを作成する方法について説明します。

## カルーセルの概念

**カルーセル** は、ウェブ上ではよく見られる機能です。通常、プレゼンテーションのスライド、広告、ヘッドラインニュース、製品の主な機能など、複数のアイテムを含むスクロール可能なコンテンツ領域という形で表示されます。

ユーザーは、ナビゲーションボタンをクリックまたは有効にするか、スワイプしてアイテム間を移動することができます。ナビゲーションには通常、以下のものが含まれます。

- **スクロールボタン**
  - : 通常、「前へ」および「次へ」ボタンまたはリンクです。
- **スクロールマーカー**
  - : 一連のボタンまたはリンクアイコンです。各アイコンは、カルーセル内の各スクロール位置に表示されるアイテムの数に応じて、1 つ以上のアイテムを表します。

![中央にコンテンツ領域、左右に「前へ」と「次へ」ボタン、下部にスクロールマーカーがあるカルーセル](carousel.svg)

カルーセルの重要な機能は**ページ分割**です。アイテムは、1 つの連続したコンテンツの区間を形成するのではなく、別個のコンテンツとして移動します。1 つのカルーセル「ページ」に 1 つのアイテム、または複数のアイテムを表示させることができます。複数のアイテムが表示されている場合、「次へ」または「前へ」ボタンを押すたびに、まったく新しいアイテムのグループを表示させることができます。あるいは、リストの一方の端に単一の新しいアイテムを追加し、もう一方の端のアイテムを非表示に移動することもできます。

JavaScript を使用してカルーセルを作成するのは、非常に不安定で実装が難しい場合があります。カルーセルを正しく動作させるには、スクロールマーカーをそれらが表すアイテムに関連付けるスクリプトが必要であり、スクロールボタンを継続的に更新する必要があります。JavaScript を使用してカルーセルを作成する場合は、カルーセルおよび関連付けられたコントロールのアクセシビリティを追加する必要があります。

幸い、CSS のカルーセル機能を使用すれば、JavaScript を使用せずに、関連付けられたコントロールを備えたアクセシブルなカルーセルを作成することができます。

## CSS カルーセル機能

CSS カルーセル機能は、 CSS と HTML だけを使用してカルーセルを作成できる擬似要素と擬似クラスを提供します。ブラウザーは、アクセシビリティ、柔軟性、一貫性を保ちながら、スクロールとリンクの参照のほとんどを処理します。これらの機能は次のとおりです。

- {{cssxref("::scroll-button()")}}
  - : {{glossary("scroll container", "スクロールコンテナー")}}内に生成されるこれらの擬似要素は、指定した方向にコンテナーをスクロールするスクロールボタンを表します。
- {{cssxref("::scroll-marker-group")}}
  - : スクロールコンテナー内に生成されます。スクロールマーカーをまとめてレイアウトするために使用されます。
- {{cssxref("::scroll-marker")}}
  - : スクロールコンテナーの祖先の子要素内、またはスクロールコンテナーの列内に生成され、スクロールマーカーを表します。これらを選択して、関連付けられた子要素または列にコンテナーをスクロールすることができます。また、レイアウトのために、スクロールコンテナーの {{cssxref("::scroll-marker-group")}} 内に収集されます。
- {{cssxref(":target-current")}}
  - : この擬似クラスは、現在アクティブなスクロールマーカーを選択するために使用できます。現在アクティブなマーカーにハイライトスタイルを提供するために使用でき、これはユーザビリティとアクセシビリティにとって重要です。
- {{cssxref("::column")}}
  - : この擬似要素は、[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)を使用して、コンテンツを複数の段で表示するようにコンテナーが設定されている場合に生成される、個々の段を表します。 {{cssxref("::scroll-marker")}} と組み合わせて使用することで、各列にスクロールマーカーを生成することができます。

## 単一ページのカルーセル

最初のデモは、各アイテムがページ全体を占める単一のページのカルーセルです。ページの下部に[スクロールマーカー](#スクロールマーカーの作成)、ページの両側に[スクロールボタン](#スクロールボタンの作成)があり、ユーザーは次のページや前のページに移動することができます。

[フレックスボックス](#フレックスボックスによるカルーセルレイアウト)を使用してカルーセルをレイアウトし、[スクロールスナップ](#リスト内のスクロールスナップの設定)を使用して明確なページ分割を強制し、[アンカー位置指定](#スクロールボタンの位置指定)を使用して、カルーセルに対してスクロールボタンとスクロールマーカーを相対位置に配置します。

HTML は、[見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)と[順序なしリスト](/ja/docs/Web/HTML/Reference/Elements/ul)で構成されており、それぞれの[リストアイテム](/ja/docs/Web/HTML/Reference/Elements/li)にはサンプルコンテンツが含まれています。

```html live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
<h1>ページ当たり単一アイテムの CSS カルーセル</h1>
<ul>
  <li>
    <h2>ページ 1</h2>
  </li>
  <li>
    <h2>ページ 2</h2>
  </li>
  <li>
    <h2>ページ 3</h2>
  </li>
  <li>
    <h2>ページ 4</h2>
  </li>
</ul>
```

### フレックスボックスによるカルーセルレイアウト

[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して、アイテムの単一の行を作成します。 `<ul>` はフレックスコンテナーであり、 `<li>` の子リストアイテムは、各アイテムがカルーセルの全幅を占めるように水平方向に表示されます。

順序なしリストは、{{cssxref("width")}} が `100vw` でビューポートの全幅を埋めるように作成されています。また、 {{cssxref("height")}} が `300px` と、いくらかの {{cssxref("padding")}} も指定されています。次に、フレックスボックスを使用して（{{cssxref("display")}} に `flex` を指定して）リストをレイアウトします。子リストアイテムが 1 行に表示されるように（{{cssxref("flex-direction")}} の既定値が `row` であるため）、各アイテムの間の {{cssxref("gap")}} を `4vw` に設定しています。

```css hidden live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.7rem;
}
```

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  width: 100vw;
  height: 300px;
  padding: 20px;
  display: flex;
  gap: 4vw;
}
```

次に、リストアイテムのスタイルを設定します。最初の宣言は、基本的なスタイルを設定します。重要な宣言は、 {{cssxref("flex")}} の値を `0 0 100%` に設定して、各アイテムをコンテナー (`<ul>`) と同じ幅にするものです。その結果、コンテンツはコンテナーからはみ出し、ビューポートは水平方向にスクロールします。

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  list-style-type: none;
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;

  flex: 0 0 100%;
}

li:nth-child(even) {
  background-color: cyan;
}
```

さらに、 {{cssxref(":nth-child()")}} によって、偶数番号のリストアイテムにはそれぞれ異なる背景色が指定されているため、スクロール効果がわかりやすくなっています。

### リスト内のスクロールスナップの設定

この節では、 `<ul>` にオーバーフロー値を設定して{{glossary("scroll container", "スクロールコンテナー")}}にし、 [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)を適用して、コンテンツがスクロールされるとリストが各リストアイテムの中央にスナップするようにします。

`<ul>` の　{{cssxref("overflow-x")}} の値を `scroll` に設定して、そのコンテンツがビューポート全体ではなくリスト内で水平方向にスクロールするようにします。 [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)を使用して、それぞれの「ページ」にスナップするようにします。 {{cssxref("scroll-snap-type")}} の値を `x mandatory` を設定して、リストを[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)にします。 `x` キーワードにより、コンテナーの[スナップターゲット](/ja/docs/Glossary/Scroll_snap#スナップターゲット)を水平方向にスナップするようにします。 `mandatory` キーワードは、コンテナーがスクロール動作の終わりに、常にスナップターゲットにスナップすることを意味します。

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
ul {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
```

次に、リストアイテムの {{cssxref("scroll-snap-align")}} の値を `center` に設定します。これにより、リストをスクロールすると、各リストアイテムの中心にスナップします。

```css live-sample___first-example live-sample___first-example-step1 live-sample___first-example-step2
li {
  scroll-snap-align: center;
}
```

これまでに示したコードは、次のようにレンダリングされます。

{{EmbedLiveSample("first-example-step1", "100%", "400px")}}

スワイプまたはスクロールバーを使用してリストをスクロールし、スクロールスナップ効果を確認してください。スクロールをどこで終わらせても、アイテムは常にその場所に「スナップ」します。

> [!NOTE]
> CSS スクロールスナップは、CSS カルーセル機能を使用するために必須ではありません。ただし、スクロールスナップを含めると、カルーセルはよりよく動作します。スクロールスナップを使用しないと、スクロールボタンとマーカーがページ間をスムーズに移動できなくなり、結果が不満足なものになります。

### スクロールボタンの作成

この章では、カルーセルページ間を移動するためのツールを提供するために、「前へ」および「次へ」のスクロールボタンをデモに追加します。これは、 {{cssxref("::scroll-button()")}} 擬似要素を使用して実現します。

`::scroll-button()` 擬似要素は、その {{cssxref("content")}} プロパティが `none` 以外の値に設定されている場合にのみ、スクロールコンテナーの中にボタンを生成します。各 `::scroll-button()` はスクロールボタンを表し、そのスクロール方向はセレクタの引数で指定されます。スクロールコンテナーごとに最大 4 つのスクロールボタンを生成でき、各ボタンはコンテナーのコンテンツをブロック軸またはインライン軸の先頭または末尾に向かってスクロールします。

また、引数として `*` を指定して、スタイルが設定されているすべての `::scroll-button()` 擬似要素を対象とすることもできます。

まず、すべてのスクロールボタンに、いくつかの基本的なスタイルと、さまざまな状態に基づくスタイルを設定します。キーボードユーザーのために {{cssxref(":focus")}} スタイルを設定することが重要です。また、その方向にスクロールできなくなった場合、スクロールボタンは自動的に [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) に設定されるため、 {{cssxref(":disabled")}} 擬似クラスを使用して、この状態を対象とします。

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: rgb(0 0 0 / 1);
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
  cursor: unset;
}
```

> [!NOTE]
> また、スクロールボタンの {{cssxref("cursor")}} 値を `pointer` に設定して、スクロールボタンが操作可能であることをより明確にし（一般的な [UX](/ja/docs/Glossary/UX) と[認知アクセシビリティ](/ja/docs/Web/Accessibility/Guides/Cognitive_accessibility)の両方を改善するため）、スクロールボタンが `:disabled` の場合はその設定を解除するようにしました。

次に、 `content` プロパティを使用して、左右のスクロールボタンに適切なアイコンを設定します。このプロパティは、スクロールボタンを生成させる役割も果たします。

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

> [!NOTE]
> スクロールボタンには、自動的に適切なアクセシブル名が指定されるため、支援技術によって適切に読み上げられます。例えば、上記のボタンには、暗黙的に [`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) が `button` に割り当てられており、その{{glossary("accessible name", "アクセシブル名")}}はそれぞれ「左へスクロール」および「右へスクロール」となっています。

### スクロールボタンの位置指定

スクロールボタンを作成しました。これで、 [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を使用して、カルーセルに対して相対的な位置にボタンを配置します。

まず、参照 {{cssxref("anchor-name")}} がリストに設定されます。次に、各スクロールボタンの {{cssxref("position")}} が `absolute` に設定され、 {{cssxref("position-anchor")}} プロパティがリストで定義された同じ参照名に設定され、2 つが関連付けられます。

```css live-sample___first-example live-sample___first-example-step2
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

各スクロールボタンを実際に配置するには、{{glossary("inset properties", "インセットプロパティ")}}に値を設定します。 {{cssxref("anchor()")}} 関数を使用して、カルーセルの辺に対してボタンの指定した辺の位置を指定します。いずれの場合も、 {{cssxref("calc()")}} 関数を使用して、ボタン端とカルーセル端の間にスペースを追加しています。例えば、左スクロールボタンの右端は、カルーセルの左端から 70 ピクセル右に配置されています。

```css live-sample___first-example live-sample___first-example-step2
ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  bottom: calc(anchor(top) + 13px);
}
```

スクロールボタンのコードを追加すると、次の結果を取得します。

{{EmbedLiveSample("first-example-step2", "100%", "400px")}}

スクロールスナップ動作がどのように機能するかを確認するには、「前へ」および「次へ」のスクロールボタンを押してみてください。また、リストがコンテンツの先頭までスクロールされると「前へ」ボタンが自動的に無効になり、リストがコンテンツの末尾までスクロールされると「次へ」ボタンが自動的に無効になる点にも注意してください。

### スクロールマーカーの作成

スクロールマーカーは、コンテンツページに関連する位置にカルーセルをスクロールするボタンのグループです。これらは、カルーセルページ内の進行状況を示す追加のナビゲーションツールを提供します。

この節では、カルーセルにスクロールマーカーを追加します。これには 3 つの主な機能があります。

- {{cssxref("scroll-marker-group")}} プロパティは、スクロールコンテナー要素に設定されます。 {{cssxref("::scroll-marker-group")}} 擬似要素を生成するには、このプロパティの値を `none` 以外の値に設定する必要があります。この値は、スクロールマーカーグループがカルーセルのタブ順およびレイアウトボックスの順（DOM 構造ではない）で表示される位置を指定します。 `before` はスクロールマーカーグループを先頭、スクロールボタンの前に配置し、 `after` は末尾に配置します。
- {{cssxref("::scroll-marker-group")}} 擬似要素は、スクロールコンテナーの中に存在し、スクロールマーカーをまとめてレイアウトするために使用されます。
- {{cssxref("::scroll-marker")}} 擬似要素は、スクロールコンテナーの祖先の {{cssxref("::column")}} フラグメントの子の中に存在し、そのスクロールマーカーを表します。これらは、レイアウトのために、祖先の {{cssxref("::scroll-marker-group")}} の中に集められます。

まず、リストの `scroll-marker-group` プロパティが `after` に設定されているため、 `::scroll-marker-group` 擬似要素は、フォーカスおよびレイアウトボックスの順序でリストの DOM コンテンツの後に配置されます。これは、スクロールボタンよりも後に表示されることを意味します。

```css live-sample___first-example
ul {
  scroll-marker-group: after;
}
```

次に、リストの `::scroll-marker-group` 擬似要素を、スクロールボタンと同様に CSS アンカー位置指定を使用してカルーセルに対して相対的に位置指定します。ただし、 {{cssxref("justify-self")}} 値を `anchor-center` に設定して、カルーセルの水平中央に配置します。このグループは、フレックスボックスを使用して、 {{cssxref("justify-content")}} の値を `center`、 {{cssxref("gap")}} の値を `20px` に設定してレイアウトされます。これにより、子要素（`::scroll-marker` 擬似要素）は、 `::scroll-marker-group` 内に中央に配置され、各要素間に間隔が確保されます。

```css live-sample___first-example
ul::scroll-marker-group {
  position: absolute;
  position-anchor: --myCarousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;

  display: flex;
  justify-content: center;
  gap: 20px;
}
```

次に、スクロールマーカー自体の外観を処理します。スクロールマーカーは、他の[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)と同様にスタイルを設定することができます。スクロールマーカーを実際に生成するには、 `none` 以外の値を `content` プロパティに設定する必要があることに注意してください。また、マーカーが概要の円として現れるように、いくつかの基本的なスタイルも設定します。

```css live-sample___first-example
li::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
}
```

> [!NOTE]
> 生成コンテンツは既定ではインラインです。スクロールマーカーはフレックスアイテムとしてレイアウトされているため、 `width` および `height` を適用することができます。

この節の終わりに、 {{cssxref(":target-current")}} 擬似クラスを使用して、現在表示されている「ページ」に対応するスクロールマーカーを選択し、ユーザーがコンテンツをスクロールした位置を示します。この場合、 `background-color` を `black` に設定して、塗りつぶされた円としてスタイルを設定します。

```css live-sample___first-example
li::scroll-marker:target-current {
  background-color: black;
}
```

> [!NOTE]
> アクセシビリティに関しては、スクロールマーカーグループおよびそれに含まれるスクロールマーカーは、 [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の意味付けでレンダリングされます。キーボードでグループに <kbd>Tab</kbd> で移動すると、グループは単一のアイテムのように動作し（つまり、 <kbd>Tab</kbd> キーをもう一度押すと、グループを過ぎて次のアイテムに移動します）、左右（または上下）のカーソルキーを使用して、異なるスクロールマーカー間を移動することができます。

## 単一のページカルーセルの最終結果

上記のコードはすべて組み合わさって、次の結果を作成します。

{{EmbedLiveSample("first-example", "100%", "400px")}}

前回のライブサンプルから、スクロールマーカーが追加されました。マーカーを押すと、各ページに直接ジャンプできます。現在のマーカーが強調表示され、ページ内の現在の位置を確認できることに注意してください。また、スクロールマーカーグループにタブキーを押して移動し、カーソルキーを使用して各ページを順番に表示してみてください。

また、左または右にスワイプ、スクロールバーをドラッグ、またはスクロールボタンを押して、ページ間を移動することもできます。

## レスポンシブカルーセル: 1 ページに複数のアイテムを表示

2 つ目のデモは、 1 ページに複数のアイテムが表示されるカルーセルです。このデモにも、ページを移動するための[スクロールボタン](#スクロールボタンの作成)と[スクロールマーカー](#スクロールマーカーの作成)が含まれています。このデモもレスポンシブ対応で、ビューポートの幅に応じて各ページに表示されるアイテムの数も異なります。

このデモは、[単一ページカルーセル](#単一ページのカルーセル)のデモとよく似ていますが、レイアウトにフレックスボックスを使用せず、 [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)と {{cssxref("::column")}} 擬似要素を使用して、カルーセルの全幅にまたがり、複数のアイテムを含むことができる任意の段を作成しています。

この手法を使用すると、アイテムのサイズが一定で、ビューポートが伸長または縮小しても、スクロールポートの端からアイテムの一部がはみ出すことがありません。この場合、スクロールマーカーは、アイテムごとに子要素に作成されるのではなく、段ごとにスクロールコンテナーのフラグメントに作成されます。

HTML は前回のデモとよく似ていますが、リストアイテムの数が大幅に増え、一度に複数のアイテムが表示されるため、ページではなくアイテムとしてラベル付けしています。

```html-nolint
...
  <li>
    <h2>アイテム 1</h2>
  </li>
...
```

このデモには、次の節で説明するルールを除いて、よく似た CSS も存在します。

```html hidden live-sample___second-example
<h1>ページ当たり複数のアイテムの CSS カルーセル</h1>
<ul>
  <li>
    <h2>アイテム 1</h2>
  </li>
  <li>
    <h2>アイテム 2</h2>
  </li>
  <li>
    <h2>アイテム 3</h2>
  </li>
  <li>
    <h2>アイテム 4</h2>
  </li>
  <li>
    <h2>アイテム 5</h2>
  </li>
  <li>
    <h2>アイテム 6</h2>
  </li>
  <li>
    <h2>アイテム 7</h2>
  </li>
  <li>
    <h2>アイテム 8</h2>
  </li>
  <li>
    <h2>アイテム 9</h2>
  </li>
  <li>
    <h2>アイテム 10</h2>
  </li>
  <li>
    <h2>アイテム 11</h2>
  </li>
  <li>
    <h2>アイテム 12</h2>
  </li>
  <li>
    <h2>アイテム 13</h2>
  </li>
  <li>
    <h2>アイテム 14</h2>
  </li>
  <li>
    <h2>アイテム 15</h2>
  </li>
</ul>
```

### 段組みを使用したカルーセルレイアウト

この例では、フレックスボックスではなく [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)を使用して、カルーセルアイテムのレイアウトを行っています。 {{cssxref("columns")}} の値を `1` に設定すると、それぞれの列はコンテナーの全幅になり、コンテンツは 1 列ずつ表示されます。また、 {{cssxref("text-align")}} の値を `center` に設定して、コンテンツをリストの中央に配置しています。

```css hidden live-sample___second-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.7rem;
}
```

```css live-sample___second-example
ul {
  width: 100vw;
  height: 300px;
  padding: 10px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  columns: 1;
  text-align: center;
}
```

リストアイテムに基本的なボックスのスタイル設定を提供し、ビューポートの幅に応じて 1 つ以上のアイテムが単一のコンテンツの列に収まるようにレイアウトスタイルを適用します。リストが広くなったり狭くなったりすると、数値は動的に変化します。

```css live-sample___second-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;

  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 0 10px;

  text-align: left;
}

li:nth-child(even) {
  background-color: cyan;
}
```

主要なレイアウトプロパティは次のとおりです。

- {{cssxref("display")}} の値を `inline-block` に設定して、リストアイテムが互いに横に並んだ状態で、リストが水平方向にスクロールするようにしています。
- {{cssxref("width")}} に `200px` の絶対幅を設定し、その大きさを制御しています。つまり、ビューポートの幅に合わせて伸長または縮小する列に 1 つ以上収まるということです。
- `text-align` の値を `left` に設定して、親コンテナーに設定されている `text-align: center` を上書きすることで、アイテムのコンテンツは左揃えになります。

{{cssxref("scroll-snap-align")}} プロパティが、リストアイテムではなく、 `columns` プロパティによって生成されるコンテンツ列を表す {{cssxref("::column")}} 擬似要素に設定されるようになりました。個々のリストアイテムではなく、各列全体にスナップして、スクロールするたびに新しいアイテムがすべて表示されるようにしたいのです。

```css live-sample___second-example
ul::column {
  scroll-snap-align: center;
}
```

```css hidden live-sample___second-example
ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: rgb(0 0 0 / 1);
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
  cursor: unset;
}

ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}

ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}

ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  bottom: calc(anchor(top) + 13px);
}

ul {
  scroll-marker-group: after;
}

ul::scroll-marker-group {
  position: absolute;
  position-anchor: --myCarousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

### 段のスクロールマーカー

このデモでスクロールマーカーを作成するための CSS は、セレクターが異なることを除いて、[前回のデモ](#スクロールマーカーの作成)とほぼ同じです。スクロールマーカーは、リストアイテムではなく、生成された `::column` スクロールマーカー上に作成されます（生成された段にスクロールマーカーを生成するために、2 つの擬似要素を記載していることに注意してください）。

```css live-sample___second-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}

ul::column::scroll-marker:target-current {
  background-color: black;
}
```

## レスポンシブカルーセルの最終結果

レスポンシブカルーセルは次のようにレンダリングされます。

{{EmbedLiveSample("second-example", "100%", "400px")}}

左および右にスワイプしたり、スクロールバーを使用したり、スクロールボタンを押したり、スクロールマーカーを押したりして、さまざまなページ間を移動してみてください。この機能は、単一ページのフレックスボックスの例と似ていますが、移動した位置に複数のリストアイテムがある点が異なります。スクロールマーカーは、各アイテムではなく、複数のアイテムを含む可能性のある段のフラグメントに設定されます。

また、画面の幅を変化させてみてください。リスト内に収まるリストアイテムの数、つまり生成される列の数も変化します。列の数が変化すると、各列がスクロールマーカーグループで表されるように、スクロールマーカーの数が動的に更新されます。

## 関連情報

- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
