---
title: ::scroll-marker
slug: Web/CSS/Reference/Selectors/::scroll-marker
original_slug: Web/CSS/::scroll-marker
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{SeeCompatTable}}

**`::scroll-marker`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、任意の要素内に生成でき、そのスクロールマーカーを表します。すべての要素が `::scroll-marker` 擬似要素を持つことができ、これは最も近い{{glossary("scroll container", "スクロールコンテナー")}}である祖先の {{cssxref("::scroll-marker-group")}} 内に配置されます。スクロールマーカーは、スクロールターゲットがマーカーの元の要素であるアンカー（{{htmlelement("a")}} 要素）のように動作し、アクティブになると、その要素までスクロールコンテナをスクロールします。

## 構文

```css-nolint
::scroll-marker {
  /* ... */
}
```

## 解説

`::scroll-marker` は、 `::scroll-marker` の {{cssxref("content")}} プロパティが `none` 以外の値に設定され、その要素の祖先要素の {{cssxref("scroll-marker-group")}} プロパティの値が `none` 以外のスクロールコンテナーがある場合（つまり、 {{cssxref("::scroll-marker-group")}} 擬似要素が生成される場合）に、要素上に生成されます。

スクロールコンテナーの `::scroll-marker-group` 擬似要素は、スクロールコンテナーまたはその子孫で生成された `::scroll-marker` 擬似要素を自動的にすべて含みます。これにより、それらをグループとして位置指定およびレイアウトすることができ、通常、CSS カルーセルを作成してスクロール位置インジケータを作成する場合に使用されます。個々のスクロールマーカーを使用して、関連付けられたコンテンツアイテムに移動することができます。

アクセシビリティに関しては、スクロールマーカーグループおよびそれに含まれるスクロールマーカーは、 [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の意味づけでレンダリングされます。このグループに <kbd>Tab</kbd> キーを押すと、1 つのアイテムのように動作し （つまり、 <kbd>Tab</kbd> キーをもう一度押すと、グループを過ぎて次のアイテムに移動します）、左右 （または上下） のカーソルキーを使用して、異なるスクロールマーカー間を移動することができます。

## 例

[CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)に、 `::scroll-marker` 擬似要素のその他の使用例があります。

### カルーセルスクロールマーカーの作成

この例では、 CSS カルーセルにスクロールマーカーを作成する方法を示します。

#### HTML

基本的な HTML の {{htmlelement("ul")}} リストに、いくつかの {{htmlelement("li")}} リストアイテムがあります。

```html live-sample___creating-scroll-markers live-sample___custom-numbering
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

`<ul>` をカルーセルに変換するには、 {{cssxref("display")}} を `flex` に設定し、単一の、折り返しのない `<li>` 要素の行を作成します。 {{cssxref("overflow-x")}} プロパティは `auto` に設定されています。これは、アイテムが X 軸でコンテナーからはみ出した場合、コンテンツが水平方向にスクロールすることを意味します。次に、 `<ul>` を[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)に変換し、コンテナーの {{cssxref("scroll-snap-type")}} の値が `mandatory` に設定されている場合に、アイテムが常に所定の位置にスナップするようにします。

`scroll-marker-group` プロパティを使用してスクロールマーカーグループを作成し、そのグループをすべてのコンテンツの後に配置します。

```css live-sample___creating-scroll-markers live-sample___custom-numbering
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-marker-group: after;
}
```

次に、 `<li>` 要素にスタイルを設定し、 {{cssxref("flex")}} プロパティを使用して、コンテナーの幅の `33%` にします。 {{cssxref("scroll-snap-align")}} の値を `start` に設定することで、コンテンツがスクロールされると、左端に表示されているアイテムの左側がコンテナーの左端にスナップします。

```css live-sample___creating-scroll-markers live-sample___custom-numbering
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 33%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

次に、 `::scroll-marker` 擬似要素を使用して、赤い境界線のある正方形のマーカーを各リストアイテムに作成します。

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

また、 {{cssxref("::scroll-marker-group")}} 擬似要素にスタイルを適用して、スクロールマーカーを各マーカー間の間隔を `0.4em` にして行の中央にレイアウトします。

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

最後に、現在スクロールされている要素のマーカーのスタイルを、そのマーカーを {{cssxref(":target-current")}} 擬似クラスで対象とし、他の要素とは異なる形に設定します。

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### 結果

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### カスタムスクロールマーカーの番号付けとスタイル

この例は、スクロールマーカーに別のスタイル設定を適用し、[CSS カウンター](/ja/docs/Web/CSS/Guides/Lists)を使用して各マーカーに表示される数値を増加させる点を除いて、前回の例と同じです。CSS の違いについては、次の節で説明します。

### CSS

この例では、 {{cssxref("counter-increment")}} を使用して、それぞれの `<li>` （マーカー） で増加させたいカウンターの名前を設定します。

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

次に、擬似要素 `::scroll-marker` の {{cssxref("content")}} プロパティを {{cssxref("counter()")}} 関数に設定し、 `markers` のカウンター名を引数として渡します。これにより、各マーカーに数値が挿入され、自動的に増加する効果があります。残りのスタイルはごく基本的なものですが、マーカーのスタイルを完全に設定する方法を示しています。

```css live-sample___custom-numbering
li::scroll-marker {
  content: counter(markers);
  font-family: sans-serif;
  width: fit-content;
  height: 1em;
  padding: 5px;
  color: black;
  text-decoration: none;
  border: 2px solid rgb(0 0 0 / 0.15);
  border-radius: 0.5em;
  background-color: #eee;
}
```

もう 1 つの興味深いカスタマイズとして、セレクターチェーンにそれぞれ {{cssxref(":first-child")}} および {{cssxref(":last-child")}} を挿入して、最初のリストアイテムと最後のリストアイテムのマーカーを選択するための 2 つのルールを含めています。最初のマーカーのテキストコンテンツには「最初」、最後のマーカーのテキストコンテンツには「最後」を指定しました。

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "最初";
}

li:last-child::scroll-marker {
  content: "最後";
}
```

より使いやすくするために、 {{cssxref(":hover")}} のマーカーに別の色を設定し、 `:target-current` 擬似クラスを使用して、現在スクロールされている要素のマーカーに別の {{cssxref("color")}} と {{cssxref("background-color")}} を設定し、ユーザーが現在表示されているアイテムを把握できるようにします。

```css live-sample___custom-numbering
::scroll-marker:hover {
  background-color: #dcc;
}

::scroll-marker:target-current {
  background-color: purple;
  color: white;
}
```

#### 結果

{{EmbedLiveSample("custom-numbering", '', '220')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
