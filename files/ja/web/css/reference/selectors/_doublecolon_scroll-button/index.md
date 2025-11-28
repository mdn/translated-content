---
title: ::scroll-button()
slug: Web/CSS/Reference/Selectors/::scroll-button
original_slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{SeeCompatTable}}

**`::scroll-button()`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、{{glossary("scroll container", "スクロールコンテナー")}}のスクロールをコントロールするためのボタンを表します。これらは、 {{cssxref("content")}} 値が `none` 以外の場合に、スクロールコンテナー上に生成されます。スクロールの方向は、引数の値によって決まります。

## 構文

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### 引数

- `<scroll-button-direction>`
  - : 選択するスクロールボタンの方向を表す値です。次の値を利用できます。
    - `*`
      - : 元の要素のスクロールボタンをすべて選択し、単一のルールで各ボタンにスタイルを適用できるようにします。
    - `down`
      - : コンテンツを下方向にスクロールするボタンを選択します。
    - `left`
      - : コンテンツを左にスクロールするボタンを選択します。
    - `right`
      - : コンテンツを右にスクロールするボタンを選択します。
    - `up`
      - : コンテンツを上方向にスクロールするボタンを選択します。
    - `block-end`
      - : ブロック末尾方向にコンテンツをスクロールするボタンを選択します。
    - `block-start`
      - : ブロック先頭方向にコンテンツをスクロールするボタンを選択します。
    - `inline-end`
      - : インライン末尾方向にコンテンツをスクロールするボタンを選択します。
    - `inline-start`
      - : インライン先頭方向にコンテンツをスクロールするボタンを選択します。

    仕様では、`next` と `prev` という 2 つの値も定義されていますが、これらは現在どのブラウザーでも対応していません。

## 解説

`::scroll-button()` 擬似要素は、{{glossary("scroll container", "スクロールコンテナー")}}の {{cssxref("content")}} プロパティが `none` 以外の値に設定されている場合にのみ、その中に生成されます。これらは、スクロールコンテナーの子 DOM 要素の兄弟要素として、それらおよびコンテナー上に生成された {{cssxref("::scroll-marker-group")}} の直前に生成されます。

スクロールコンテナーごとに最大 4 つのスクロールボタンを生成することができ、ブロック軸とインライン軸の先頭と末尾に向かってコンテンツをスクロールします。このセレクターの引数は、選択するスクロール方向を指定します。また、`*` の値を指定して、すべての `::scroll-button()` 擬似要素をターゲットにし、1 つのルールですべてのボタンにスタイルを指定することもできます。

生成されるボタンは、既定のブラウザースタイルを共有するなど、通常の {{htmlelement("button")}} 要素とまったく同じように動作します。フォーカス可能、アクセシビリティ対応であり、通常のボタンと同じようにアクティブ化することができます。スクロールボタンが押されると、スクロールコンテナーのコンテンツは、 <kbd>PgUp</kbd> キーおよび <kbd>PgDn</kbd> キーを押した場合と同様に、指定した方向に 1 ページ分、つまりスクロールコンテナーの寸法とほぼ同じ分だけスクロールされます。

スクロールコンテナーに [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)を設定し、スクロールしたいコンテンツの別個のアイテムをそれぞれ[スナップターゲット](/ja/docs/Glossary/Scroll_snap#スナップターゲット)として設定することをお勧めします。こうすると、スクロールボタンを有効にしたとき、コンテンツは 1 ページ分の距離にあるスナップターゲットまでスクロールされます。スクロールスナップを設定しなくてもスクロールボタンは動作しますが、期待した効果が得られない場合があります。

特定のスクロールボタンのスクロール方向にさらにスクロールできない場合、そのボタンは自動的に無効になり、それ以外の場合は有効になります。 {{cssxref(":enabled")}} および {{cssxref(":disabled")}} 擬似クラスを使用して、スクロールボタンの有効および無効の状態のスタイルを設定することができます。

## 例

カルーセルの例については、「[CSS カルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)」をご覧ください。

### スクロールボタンの作成

この例では、CSS カルーセルにスクロールボタンを作成する方法を示します。

#### HTML

基本的な HTML の {{htmlelement("ul")}} リストに、いくつかの {{htmlelement("li")}} リストアイテムがあります。

```html live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
  <li>アイテム 3</li>
  <li>アイテム 4</li>
  <li>アイテム 5</li>
  <li>アイテム 6</li>
  <li>アイテム 7</li>
  <li>アイテム 8</li>
</ul>
```

#### CSS

##### カルーセルのスタイル設定

`<ul>` をカルーセルに変換するには、 {{cssxref("display")}} を `flex` に設定し、単一の、折り返しのない `<li>` 要素の行を作成します。 {{cssxref("overflow-x")}} プロパティは `auto` に設定されています。これは、アイテムが X 軸でコンテナーからはみ出した場合、コンテンツが水平方向にスクロールすることを意味します。次に、 `<ul>` を[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)に変換し、コンテナーの {{cssxref("scroll-snap-type")}} の値が `mandatory` に設定されている場合に、アイテムが常に所定の位置にスナップするようにします。

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

次に、 `<li>` 要素にスタイルを設定し、 {{cssxref("flex")}} プロパティを使用して、コンテナーの幅の 100% にします。 {{cssxref("scroll-snap-align")}} の値を `start` に設定することで、コンテンツがスクロールされると、左端に表示されているアイテムの左側がコンテナーの左端にスナップします。

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 100%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

##### スクロールボタンの作成

まず、すべてのスクロールボタンに、いくつかの基本的なスタイルと、さまざまな状態に基づくスタイル設定を適用します。キーボードユーザーのために {{cssxref(":focus")}} スタイルを設定することが重要です。また、その方向にスクロールできなくなった場合、スクロールボタンは自動的に [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) に設定されるため、この状態を対象とするには {{cssxref(":disabled")}} 擬似クラスを使用します。

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
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
> また、スクロールボタンが操作可能であることをより明確にするため、スクロールボタンの {{cssxref("cursor")}} 値を `pointer` に設定し（一般的な [UX](/ja/docs/Glossary/UX) と[認知アクセシビリティ](/ja/docs/Web/Accessibility/Guides/Cognitive_accessibility)の両方を改善するため）、スクロールボタンが `:disabled` の場合はこの設定を解除します。

次に、`content` プロパティを使用して、左右のスクロールボタンに適切なアイコンを設定します。このプロパティは、スクロールボタンを生成させる役割も果たします。

```css live-sample___creating-scroll-buttons live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

ブラウザーが自動的に適切な{{glossary("accessible name", "アクセシブル名")}}を指定するため、コンテンツ上のアイコンに[代替テキスト](/ja/docs/Web/CSS/Reference/Properties/content#代替テキスト_string_counter)を設定する必要はありません。

#### 結果

{{EmbedLiveSample("creating-scroll-buttons", '', '220')}}

カルーセルの左下にスクロールボタンが作成されていることに注目してください。ボタンを押して、コンテンツがスクロールされる様子を確認してください。

### スクロールボタンの位置設定

前回の例は動作しますが、ボタンの位置は理想的ではありません。この章では、[アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を使用してボタンを配置するための CSS を追加します。

#### CSS

まず、参照 {{cssxref("anchor-name")}} を `<ul>` に設定して、名前付きアンカーとして定義します。次に、各スクロールボタンの {{cssxref("position")}} を `absolute` に設定し、 {{cssxref("position-anchor")}} プロパティをリストの `anchor-name` に設定して、 [2 つを関連付けます](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカー要素と位置指定要素の関連付け)。

```css live-sample___positioning-scroll-buttons
ul {
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
}
```

各スクロールボタンを実際に配置するには、まず、両方の {{cssxref("align-self")}} の値を `anchor-center` に設定して、カルーセル上で垂直方向に中央に配置します。

```css live-sample___positioning-scroll-buttons
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

次に、水平方向の位置指定を行うために、{{glossary("inset properties", "インセットプロパティ")}}に値を設定します。 {{cssxref("anchor()")}} 関数を使用して、カルーセルの辺に対して、ボタンの指定した辺を相対的に位置指定します。いずれの場合も、 {{cssxref("calc()")}} 関数を使用して、ボタンの端とカルーセルの端の間にスペースを追加しています。例えば、左スクロールボタンの右端は、カルーセルの左端から 45 ピクセル右側に位置指定されています。

```css live-sample___positioning-scroll-buttons
ul::scroll-button(left) {
  right: calc(anchor(left) - 45px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 45px);
}
```

#### 結果

{{EmbedLiveSample("positioning-scroll-buttons", '', '220')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
