---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 2a23f650d86d4f5d948614a607224a2bd52cca33
---

{{CSSRef}}

**`image()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、 {{CSSxRef("&lt;image&gt;")}} を {{CSSxRef("url", "url()")}} 関数に似た様式で定義しますが、画像の書字方向を指定したり、メディアフラグメントで定義された画像の一部だけを表示したり、指定された画像がどれも描画できなかった場合の予備として単色を指定するなどの機能が追加されています。

> **メモ:** CSS の `image()` 関数を {{DOMxRef("HTMLImageElement/Image", '<code>HTMLImageElement</code> のコンストラクターである <code>Image()</code>', '', 1)}} と混同しないでください。

## 構文

{{CSSSyntax}}

ここで

- `image-tags`{{Optional_Inline}}
  - : 画像の書字方向、左書きならば `ltr`、右書きならば `rtl` です。
- `image-src` {{Optional_Inline}}
  - : 0 個以上の {{CSSxRef("url", "url()")}} または {{CSSxRef("&lt;string&gt;")}} で、画像のソースをオプションの画像フラグメント識別子と共に指定します。
- `color` {{optional_inline}}
  - : 色であり、`image-src` が見つからなかったり、対応していなかったり、宣言されていなかったりした場合の代替として使用される単色の背景色を指定します。

### 書字方向の認識

`image()` 表記の最初のオプション引数は、画像の書字方向です。この引数が含まれている場合、画像が反対の書字方向を持つ要素で使用されると、横書きモードでは画像が水平に反転します。書字方向を省略した場合は、言語の方向が変わっても画像は反転しません。

### 画像フラグメント

`url()` と `image()` の大きな違いは、メディアフラグメント識別子（開始点の x 軸と y 軸、幅と高さ）を画像ソースに追加することで、ソース画像の一部分のみを表示することができることです。引数で定義された画像の範囲は、独立した画像になります。構文は次のようになります。

```css
background-image: image("myimage.webp#xywh=0,20,40,60");
```

要素の背景画像は、画像 _myImage.webp_ のうち、 0px, 20px の座標 (左上隅) から始まり、幅 40px、高さ 60px の部分になります。

`#xywh=#,#,#,#` というメディアフラグメントの構文は、カンマで区切られた 4 つの数値を取ります。最初の 2 つの値は、作成されるボックスの始点の X および Y 座標を表します。 3 つ目の値はボックスの幅、最後の値は高さです。既定では、これらはピクセル値です。[メディア仕様書の spacial dimension definition](https://www.w3.org/TR/media-frags/#naming-space) によると、パーセント値にも対応しています。

```css
xywh=160,120,320,240        /* 320x240 の画像を x=160 および y=120 の位置から使用 */
xywh=pixel:160,120,320,240  /* 320x240 の画像を x=160 および y=120 の位置から使用 */
xywh=percent:25,25,50,50    /* 50%x50% の画像を x=25% および y=25% の位置から使用 */
```

画像フラグメントは、 `url()` 記法でも使用できます。 `#xywh=#,#,#,#` というメディアフラグメントの構文は「後方互換」であり、メディアフラグメントが理解できない場合は無視され、 `url()` で使用してもソースの呼び出しが壊れることはありません。ブラウザーがメディアフラグメントの表記を理解していない場合、フラグメントを無視して画像全体を表示します。

`image()` を理解できるブラウザーはフラグメント表記も理解できます。したがって、フラグメントが `image()` の中で理解できない場合は、その画像は無効とみなされます。

### 色による代替

`image()` で画像ソースと一緒に色が指定されていると、画像が無効で表示されない場合の代替として機能します。このような場合、`image()` 関数は、画像が含まれていないかのように描画を行い、単一色の画像を生成します。例として、白いテキストの背景に暗い色の画像を使用する場合を考えてみましょう。画像が描画されない場合、前景のテキストを読みやすくするために暗い背景色が必要になることがあります。

画像ソースを省略して色を含めることは有効で、色見本を作成します。背景色を宣言すると、すべての背景画像の下や後ろに配置されるのとは異なり、これは他の画像の上に (通常は半透明の) 色を配置するために使用できます。

色見本の寸法は、 {{CSSxRef("background-size")}} プロパティで設定できます。これは、要素全体を覆うように色を設定する `background-color` とは異なります。 `image(color)` と `background-color` の両方を配置すると、 {{CSSxRef("background-clip")}} と {{CSSxRef("background-origin")}} プロパティの影響を受けます。

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主にスクリーンリーダーにとって重要なことで、スクリーンリーダーはその存在を告知しないため、ユーザーに何も伝えません。画像に、ページ全体の目的を理解するために重要な情報が含まれている場合は、文書内で意味的に記述したほうがよいでしょう。

- [MDN WCAG を理解する, ガイドライン 1.1 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

この機能は、画像の読み込みに失敗したときに予備の色を提供することで、アクセシビリティの向上に役立ちます。この機能は、すべての背景画像に背景色を含めることで実現できますが、 CSS の `image()` 関数では、画像の読み込みに失敗したときに背景色のみを含めることができます。つまり、透過 PNG/GIF/WebP の読み込みに失敗したときに、予備の色を追加することができます。

## 例

### 書字方向を意識した画像

```html
  <li dir="ltr">行頭記号が左側で右向きの矢印になります。</li>
  <li dir="rtl">行頭記号は同じ矢印で、左を指します。</li>
</ul>
```

```css
ul {
  list-style-image: image(ltr "rightarrow.png");
}
```

左書きのリスト項目 (要素自体に `dir="ltr"` が設定されているもの、祖先から書字方向を継承しているもの、ページの既定値) では、画像がそのまま使用されます。 `<li>` に `dir="rtl"` が設定されているリスト項目や、祖先から右から左への指向性を受け継いでいるリスト項目 (アラビア語やヘブライ語に設定されている文書など) では、 `transform: scaleX(-1)` が設定されているかのように、箇条書きのテキストが水平方向に反転して右に表示されます。テキストも左書きで表示されます。

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### 背景画像のある範囲の表示

```html
<div class="box">
  この上にカーソルを移動してください。どのように見えますか？
</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

ユーザーがボックスの上にカーソルを移動させると、カーソルは x=32 と y=64 の位置から始まる 16x16 ピクセルの範囲のスプライト画像に変わります。

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### 背景画像の上に色を配置

```css hidden
.quarterlogo {
  height: 200px;
  width: 200px;
  border: 1px solid;
}
```

```css
.quarterlogo {
  background-image: image(rgba(0, 0, 0, 0.25)), url("firefox.png");
  background-size: 25%;
  background-repeat: no-repeat;
}
```

```html
<div class="quarterlogo">
  対応している場合、この div の 4 分の 1 は、ロゴが暗くなります
</div>
```

上記の例は、 Firefox のロゴの背景画像に半透明の黒いマスクをかぶせています。 {{cssxref("background-color")}} プロパティを使用していた場合は、色はロゴ画像の上ではなく背後に表示されていたでしょう。また、コンテナー全体の背景色も同じになっていたでしょう。 `image()` と {{CSSxRef("background-size")}} プロパティを使用し、 {{CSSxRef("background-repeat")}} プロパティで画像が繰り返されないようにしたため、色見本はコンテナーの 4 分の 1 しか覆っていません。

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{CSSxRef("url", "url()")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("-moz-image-rect")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
