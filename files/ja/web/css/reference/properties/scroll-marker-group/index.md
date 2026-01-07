---
title: scroll-marker-group
slug: Web/CSS/Reference/Properties/scroll-marker-group
original_slug: Web/CSS/scroll-marker-group
l10n:
  sourceCommit: 898dd2394e7b70daa2c0c212282a64ccf5938341
---

{{seecompattable}}

**`scroll-marker-group`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{glossary("scroll container", "スクロールコンテナー")}}に {{cssxref("::scroll-marker-group")}} 擬似要素を生成するかどうか、生成する場合、既定の視覚的およびタブ順でコンテナーのコンテンツの直前 (`before`) に配置するか、直後 (`after`) に配置するかを制御します。

## 構文

```css
/* 単一値 */
scroll-marker-group: before;
scroll-marker-group: after;
scroll-marker-group: none;

/* グローバル値 */
scroll-marker-group: inherit;
scroll-marker-group: initial;
scroll-marker-group: revert;
scroll-marker-group: revert-layer;
scroll-marker-group: unset;
```

### 値

- `after`
  - : {{cssxref("::scroll-marker-group")}} 擬似要素は、スクロールコンテナーの子 DOM 要素の兄弟として、それらと、生成された {{cssxref("::scroll-button()")}} 擬似要素の直前に生成されます。コンテナーのタブ順およびレイアウトボックス順（DOM 構造順ではない）の最後に表示されます。

- `before`
  - : {{cssxref("::scroll-marker-group")}} 擬似要素は、スクロールコンテナーの子 DOM 要素の兄弟として、それらと、生成された {{cssxref("::scroll-button()")}} 擬似要素の直前に生成されます。コンテナーのタブ順およびレイアウトボックス順（DOM 構造順ではない）の最後に表示されます。

- `none`
  - : 要素には `::scroll-marker-group` 擬似要素は生成されません。これが既定値です。

> [!NOTE]
> スクロールマーカーグループの視覚的な表示位置をタブ順と一致させるのが最善の手法です。 {{cssxref("::scroll-marker-group")}} にスタイルが適用されているマーカーグループをコンテンツの先頭に位置指定する場合は、 `before` を使用してタブ順の先頭に配置してください。グループをコンテンツの最後に位置指定する場合は、 `after` を使用してタブ順の最後に配置してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

`scroll-marker-group` プロパティを使用する完全な例については、「[CSS カルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)」参照してください。

### スクロールマーカーの配置

この例では、`scroll-marker-group` プロパティの 3 つの値を示しています。

#### HTML

基本的な HTML の {{htmlelement("ul")}} リストに、複数の {{htmlelement("li")}} リストアイテムがあります。

```html hidden
<fieldset>
  <legend><code>scroll-marker-group</code> の値を選択:</legend>
  <label><input type="radio" name="p" value="before" />before</label>
  <label><input type="radio" name="p" value="after" checked />after</label>
  <label><input type="radio" name="p" value="none" />none</label>
</fieldset>
```

```html
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

`<ul>` をカルーセルに変換するには、 {{cssxref("display")}} を `flex` に設定し、単一の、折り返しのない `<li>` 要素の行を作成します。 {{cssxref("overflow-x")}} プロパティは `auto` に設定されています。これは、アイテムが X 軸でコンテナーからはみ出した場合、コンテンツが水平方向にスクロールすることを意味します。次に、 `<ul>` を[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)に変換し、コンテナーが {{cssxref("scroll-snap-type")}} 値が `mandatory` の場合に、アイテムが常に所定の場所にスナップするようにします。

`scroll-marker-group` プロパティを使用してスクロールマーカーグループを作成し、そのグループをすべてのコンテンツの後に配置します。

```css
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  margin: 32px 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  scroll-marker-group: after;
}
```

次に、 `<li>` 要素にスタイルを設定し、 {{cssxref("flex")}} プロパティを使用して、コンテナーの幅の `33%` にします。 {{cssxref("scroll-snap-align")}} の値を `start` に設定すると、コンテンツがスクロールされると、一番左に見えるアイテムの左端がコンテナーの左端にスナップします。

```css
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 33%;
  scroll-snap-align: start;
  text-align: center;
  line-height: 5;
}
```

次に、 {{cssxref("::scroll-marker")}} 擬似要素を使用して、赤い境界線のある正方形のマーカーを各リストアイテムに作成し、 {{cssxref("::scroll-marker-group")}} 擬似要素にスタイルを適用して、各マーカーの間に `0.2em` の間隔を空けて、スクロールマーカーを 1 行にレイアウトします。

```css
li::scroll-marker {
  content: " ";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}

::scroll-marker-group {
  display: flex;
  gap: 0.2em;
}
```

最後に、良い使い勝手を得るためには、現在スクロールされている要素のマーカーを他の要素とは異なるスタイルに設定し、 {{cssxref(":target-current")}} 擬似クラスでマーカーを対象とします。

```css
::scroll-marker:target-current {
  background: red;
}
```

```css hidden
fieldset {
  width: 20em;
}

label {
  font-family: monospace;
  display: block;
}

:has([value="before"]:checked) ul {
  scroll-marker-group: before;
}
:has([value="after"]:checked) ul {
  scroll-marker-group: after;
}

:has([value="none"]:checked) ul {
  scroll-marker-group: none;
}
```

#### 結果

{{EmbedLiveSample("Examples", '', '300')}}

スクロールマーカーグループの配置に注意してください。 `before` と `after` でキーボードのタブ順がどのように異なるかを確認し、値を `none` に設定するとグループが消えることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref(":target-current")}}
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
