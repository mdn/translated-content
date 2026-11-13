---
title: 置換要素
slug: Web/CSS/Guides/Images/Replaced_element_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

一部の [CSS](/ja/docs/Web/CSS) プロパティは全ての要素に適用されますが、グリッドコンテナーやフレックスコンテナーにのみ適用されるもの、座標変換可能な要素にのみ適用されるものもあります。このガイドでは、置換要素にのみ適用されるプロパティを紹介します。

**{{glossary("replaced elements", "置換要素")}}** とは、その表現が CSS の範囲外にある要素を指します。これらは CSS の整形モデルとは独立した表現を持つ外部オブジェクトです。{{HTMLElement("iframe")}} 要素など、一部の置換要素は独自のスタイルシートを持つ場合がありますが、親文書のスタイルは継承されません。

## 置換要素での CSS の使用

マージンの計算や一部の `auto` 値など、特定の場面において CSS は置換要素を特別に扱います。置換要素のみが、{{glossary("intrinsic size", "内在的な寸法")}}を持つ可能性があります。一部の置換要素（すべてではありません）は内在的な寸法または定義されたベースラインを持ち、これは {{cssxref("vertical-align")}} などの CSS プロパティで使用されます。

文書スタイルは置換要素のサイズや位置を設定できますが、置換要素のコンテンツには影響しません。ただし例外があります。[CSS 画像モジュール](/ja/docs/Web/CSS/Guides/Images)には、要素のコンテンツをそのボックス内で配置する制御を補助するプロパティがあります。

## コンテンツボックス内のオブジェクト位置の制御

CSS 画像モジュールは、 置換要素の中に含まれるオブジェクトを、その要素のボックス領域内でどのように配置するかを指定することができる 2 つのプロパティを定義しています。`object-fit` プロパティは、オブジェクトのサイズ調整に使用され、`object-position` プロパティはオブジェクトの位置決めに使用されます。

### `object-fit` プロパティ

`object-fit` プロパティは、置換要素のコンテンツオブジェクトを親要素のボックスにどのように収めるかを指定します。このプロパティは、画像、動画、その他の埋め込み可能なメディア形式が、置換要素のコンテンツボックスの高さと幅にどのように反応するかを定義します。要素の高さ、幅、またはアスペクト比が、その要素のために確保された領域を占めるリソースと異なる場合、`fill`、`contain`、`cover`、`scale-down`、`none` の各値は、ブラウザーがリソースを拡大縮小するか、割り当てられた領域を覆うか、領域内に収めるか、リソースが歪むことを許容するかを定義します。

収縮や縮小が行われ、置換要素によって覆われない部分ができると、要素の背景が見えるようになります。

`object-fit` プロパティは、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}}、{{HTMLElement("fencedframe")}} の各要素では効果がありません。

![煙突の近くで翻るプログレッシブプライド旗の正方形の写真。](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

アスペクト比 1:1 の正方形画像を、100px × 300px（アスペクト比 1:3）のボックス内に配置すると、デフォルトでは画像がボックスいっぱいに引き伸ばされ、歪んで表示されます。`object-fit` プロパティを使用すると、異なるサイズやアスペクト比のボックスに強制的に収めた際に、画像がどのように表示されるかを定義することができます。

```html hidden live-sample___example1 live-sample___example2
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<p>
  <label><input type="checkbox" /> 次元を切り替え</label>
</p>
```

```css hidden live-sample___example1 live-sample___example2
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  grid-auto-flow: column;
  max-width: 98%;
  margin: 10px auto 0;
}
img {
  width: 100px;
  height: 300px;
  outline: 2px solid purple;
}
body:has(:checked) img {
  width: 300px;
  height: 100px;
}
```

```css live-sample___example1 live-sample___example2
img:nth-of-type(1) {
  object-fit: fill;
}
img:nth-of-type(2) {
  object-fit: cover;
}
img:nth-of-type(3) {
  object-fit: contain;
}
img:nth-of-type(4) {
  object-fit: scale-down;
}
img:nth-of-type(5) {
  object-fit: none;
}
img:nth-of-type(6) {
  /* object-fit プロパティなし */
  outline: 2px dashed red;
}
```

{{EmbedLiveSample('example1','100%','650')}}

チェックボックスを選択すると、高さと幅の値を切り替えます。`fill` 値（デフォルト）のみで元の画像が歪むことに注意してください。その他のすべての値では、画像の内在的なアスペクト比が維持されます。

### `object-position` プロパティ

`object-position` プロパティは、置換要素のコンテンツオブジェクトが要素のボックス内で配置される位置を指定します。

{{cssxref("object-fit")}} プロパティと組み合わせて使用されることが多く、その値として {{cssxref("position_value", "&lt;position&gt;")}} の値を取ります。これは {{cssxref("background-position")}} で使用されるものと同じ型の値です。

```css live-sample___example2
img {
  object-position: bottom right;
}
```

{{EmbedLiveSample('example2','100%','650')}}

```html hidden live-sample___example3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

`object-fit` なしで使用することもできます。この場合、画像は内在的なサイズ（218px × 218px）で描画され、画像の内容の位置は `object-position` の値によって設定されます。

```css hidden live-sample___example3
img {
  margin: 10px 0 0 10px;
}
```

```css live-sample___example3
img {
  outline: 2px solid;
  object-position: 114px 72px;
}
```

{{EmbedLiveSample('example3','100%','250')}}

`object-position` プロパティは、`<iframe>`、`<video>`、`<embed>` の各要素でも `<img>` と同様に動作します。

## 関連情報

- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS 画像](/ja/docs/Web/CSS/Guides/Images)モジュール
- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
