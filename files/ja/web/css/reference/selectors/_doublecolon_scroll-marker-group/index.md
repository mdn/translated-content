---
title: ::scroll-marker-group
slug: Web/CSS/Reference/Selectors/::scroll-marker-group
original_slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{SeeCompatTable}}

**`::scroll-marker-group`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、{{glossary("scroll container", "スクロールコンテナー")}}の中に生成され、スクロールコンテナーの子孫に生成された {{cssxref("::scroll-marker")}} 擬似要素をすべて含みます。

## 構文

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## 解説

スクロールコンテナーの **`::scroll-marker-group`** 擬似要素は、**スクロールマーカーグループ**を表します。これは、自身またはその子孫で生成された {{cssxref("::scroll-marker")}} 擬似要素を自動的に含むコンテナーです。これにより、それらをグループとして位置指定およびレイアウトすることができ、通常、スクロール位置インジケーターを提供するための CSS カルーセルを作成する場合に使用されます。個々のスクロールマーカーを使用して、関連付けられたコンテンツアイテムに移動することができます。

スクロールコンテナーは、 {{cssxref("scroll-marker-group")}} プロパティを `none` 以外の値に設定して、 `::scroll-marker-group` 擬似要素が生成されるようにする必要があります。 {{cssxref("scroll-marker-group")}} の値は、カルーセルのタブ順およびレイアウトボックスの順（DOM 構造ではない）で、スクロールマーカーグループが表示される位置を決定します。 `before` は先頭に配置し、 `after` は末尾に配置します。

スクロールマーカーグループの視覚的な表示位置をタブの順序と一致させるのが最善の手法です。コンテンツの先頭にグループを位置指定する場合は、 `before` を使用してタブの順序の先頭に配置してください。コンテンツの最後にグループを位置指定する場合は、 `after` を使用してタブの順序の最後に配置してください。

アクセシビリティに関しては、スクロールマーカーグループおよびそれに含まれるスクロールマーカーは、 [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の意味づけでレンダリングされます。このグループに <kbd>Tab</kbd> キーを押すと、1 つのアイテムのように動作し （つまり、 <kbd>Tab</kbd> キーをもう一度押すと、グループを過ぎて次のアイテムに移動します）、左右 （または上下） のカーソルキーを使用して、異なるスクロールマーカー間を移動することができます。

## 例

[CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)に、 `::scroll-marker` 擬似要素のその他の使用例があります。

### カルーセルのスクロールマーカーの作成

このデモは、各アイテムがページ全体を占める単一のページのカルーセルです。ユーザーがマーカーをクリックして任意のページに移動できるように、スクロールマーカーを記載しました。

#### HTML

HTML は、[順序なしリスト](/ja/docs/Web/HTML/Reference/Elements/ul)で構成されており、各[リストアイテム](/ja/docs/Web/HTML/Reference/Elements/li)にはサンプルコンテンツが含まれています。

```html live-sample___carousel-example live-sample___carousel-example_final
<ul>
  <li>
    <h2>Page 1</h2>
  </li>
  <li>
    <h2>Page 2</h2>
  </li>
  <li>
    <h2>Page 3</h2>
  </li>
  <li>
    <h2>Page 4</h2>
  </li>
</ul>
```

#### CSS

まず、 `<ul>` をカルーセルに変換するために、 {{cssxref("display")}} を `flex` に設定して、単一で折り返さない `<li>` 要素の列を作成します。 {{cssxref("overflow-x")}} プロパティは `auto` に設定します。これは、アイテムがコンテナーから X 軸方向にオーバーフローした場合、コンテンツが水平方向にスクロールすることを意味します。次に、 `<ul>` を[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)に変換し、コンテナーが {{cssxref("scroll-snap-type")}} 値が `mandatory` に設定されている場合に、アイテムが常に所定の場所にスナップするようにします。

```css hidden live-sample___carousel-example live-sample___carousel-example_final
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

次に、 `<li>` 要素にスタイルを設定し、 {{cssxref("flex")}} プロパティを使用して、コンテナーの幅の `100%` にします。 {{cssxref("scroll-snap-align")}} の値を `start` に設定することで、コンテンツがスクロールされると、左端に表示されているアイテムの左側がコンテナーの左端にスナップします。

```css live-sample___carousel-example live-sample___carousel-example_final
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 100%;
  height: 200px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

次に、リストの {{cssxref("scroll-marker-group")}} プロパティを `after` に設定します。これにより、 `::scroll-marker-group` 擬似要素が、タブ順およびレイアウトボックスの順でリストの DOM コンテンツの後に配置されます。これは、スクロールボタンよりも後に表示されることを意味します。

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

次に、リストの `::scroll-marker-group` 擬似要素は、フレックスボックスを使用してレイアウトされ、 {{cssxref("justify-content")}} の値は `center`、 {{cssxref("gap")}} は `20px` に設定されています。これにより、その子要素（{{cssxref("::scroll-marker")}} 擬似要素）は、 `::scroll-marker-group` 内に中央に配置され、各要素間に間隔が確保されます。

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

次に、スクロールマーカー自体のスタイルを設定します。それぞれの見た目は、{{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("background-color")}}、{{cssxref("border")}}、{{cssxref("border-radius")}} を設定することで処理しますが、実際に生成されるように、 `none` 以外の値を {{cssxref("content")}} プロパティに設定する必要があります。

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker {
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  content: "";
}
```

> [!NOTE]
> 生成コンテンツは既定ではインラインです。スクロールマーカーはフレックスアイテムとしてレイアウトされているため、`width` および `height` を適用することができます。

最後に、 {{cssxref(":target-current")}} 擬似クラスを使用して、現在表示されている「ページ」に対応するスクロールマーカーを選択し、ユーザーがコンテンツをスクロールした位置を強調表示します。この場合、 `background-color` を `black` に設定して、塗りつぶされた円としてスタイルを設定しています。

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### 結果

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### スクロールマーカーグループを anchor-positioning で位置指定

この例は、前回の例を拡張し、 [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を使用して、カルーセルに対してスクロールマーカーグループを相対的に位置指定する方法を示しています。

#### CSS

リストの `::scroll-marker-group` 擬似要素は、 `<ul>` の {{cssxref("anchor-name")}} と一致する {{cssxref("position-anchor")}} の値をグループに与えることで、CSS アンカー位置指定を使用してカルーセルに対して相対的に位置指定されます。
次に、 {{cssxref("anchor()")}} 関数を記載した {{cssxref("top")}} 値を設定して、グループをブロック方向でスクロールコンテナーに対して相対的に位置指定します。また、 {{cssxref("justify-self")}} 値を `anchor-center` に追加して、グループをインライン方向でスクロールコンテナーの中心に配置します。

```css live-sample___carousel-example_final
ul {
  anchor-name: --myCarousel;
}

ul::scroll-marker-group {
  /* 前の例より */
  display: flex;
  gap: 20px;

  position: absolute;
  position-anchor: --myCarousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
}
```

#### 結果

{{EmbedLiveSample("carousel-example_final", "100%", "260px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
