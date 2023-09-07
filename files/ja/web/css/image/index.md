---
title: <image>
slug: Web/CSS/image
---

{{CSSRef}}

**`<image>`** は [CSS](/ja/docs/Web/CSS) の [データ型](/ja/docs/Web/CSS/CSS_Types)で、二次元の画像を表現します。

## 構文

`<image>` データ型は以下のいずれかによって表すことができます。

- {{CSSxRef("url()", "url()")}} データ型で記述された画像
- {{CSSxRef("&lt;gradient&gt;")}} データ型
- {{CSSxRef("element()","element()")}} 関数で定義されたウェブページの一部
- {{CSSxRef("image/image()","image()")}} 関数で定義された画像、画像フラグメント、単色の色
- {{CSSxRef("cross-fade()","cross-fade()")}} 関数で定義された 2 つ以上の画像の合成
- {{CSSxRef("image/image-set()","image-set()")}} 関数で定義された、解像度に基づいて定義された画像の選択

## 解説

CSS はさまざま種類の画像を扱うことができます。

- JPEG、PNG、その他の[ラスター形式](https://ja.wikipedia.org/wiki/ビットマップ画像)の画像のように、_自身の寸法_ (自然の寸法) を持つ画像。
- 単一のファイルの中に複数のバージョンが存在する、*複数の自身の寸法*を持つ画像。 (この場合、自身の寸法は領域に収まる最も大きな画像であり、かつ縦横比が包含ボックスに最も近いものになります。)
- SVG またはその他の[ベクター形式](https://ja.wikipedia.org/wiki/ベクター画像)の画像のように、自身の寸法を持たないが、幅と高さの間に自身の縦横比のある画像。
- CSS グラデーションなど、*自身の寸法がなく、固有の縦横比もない*画像。

CSS はオブジェクトの*実際の*寸法を、 (1) _自身の寸法_、 (2) CSS の {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("background-size")}} などのプロパティで定義された*指定の寸法*、 (3) 画像が使用されるプロパティの種類によって指定された、以下のような*既定の寸法*によって特定します。

| オブジェクトの種類 (CSS プロパティ)                                                 | 既定のオブジェクトの寸法                                                                                       |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                     | 要素の背景が配置される領域の寸法                                                                               |
| {{CSSxRef("list-style-image")}}                                                     | `1em` の文字の寸法                                                                                             |
| {{CSSxRef("border-image-source")}}                                                  | 要素の境界画像領域の寸法                                                                                       |
| {{CSSxRef("cursor")}}                                                               | クライアントのシステムにおける通常のカーソルの寸法に合わせたブラウザー定義の寸法                               |
| {{CSSxRef("mask-image")}}                                                           | ?                                                                                                              |
| {{CSSxRef("shape-outside")}}                                                        | ?                                                                                                              |
| {{CSSxRef("mask-border-source")}}                                                   | ?                                                                                                              |
| @counter-style の {{CSSxRef("symbols()")}}                                          | リスクあり。対応している場合、クライアントのシステムにおける通常のカーソルの寸法に合わせたブラウザー定義の寸法 |
| 擬似要素 ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) の {{CSSxRef("content")}} | 300px × 150px の矩形                                                                                           |

正しいオブジェクトの寸法は、次のアルゴリズムを使って計算されます。

- 指定された寸法に*幅と高さの両方*が定義されている場合は、その値が実際の寸法に使われます。
- 指定された寸法に*幅と高さのどちらかのみ*が定義されている場合は、もう一方の値は、画像自身の比率、指定値が一致するなら画像自身の寸法、既定のオブジェクトの寸法の値の何れかを使用して決められます。
- 指定された寸法が*幅も高さも定義していない*場合は、実際のオブジェクトの寸法は、画像自身の縦横比に一致し、かつ既定のオブジェクトの寸法をどちらの方向にも超過しない値が計算されます。画像自身の縦横比がない場合は、適用されるオブジェクト自身の縦横比が使用されます。このオブジェクトにも縦横比が存在しない場合は、残りの幅または高さは既定のオブジェクトの寸法から取られます。

> **メモ:** すべてのブラウザーがすべてのプロパティですべての種類の画像に対応しているわけではありません。詳細は[ブラウザーの互換性の節](#ブラウザーの互換性)を参照してください。

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [MDN WCAG を理解する, ガイドライン 1.1 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 例

### 有効な画像

```css example-good
url(test.jpg)               /* <url>、但し test.jpg は実在する画像 */
linear-gradient(blue, red)  /* <gradient> */
element(#realid)            /* element() 関数で参照されるウェブページの一部、
                               ページ上に "realid" が実在する ID である場合 */
image(ltr 'arrow.png#xywh=0,0,16,16', red)
                            /* arrow.png が対応している画像であれば、 <url> の元画像の
                               左上から 16x16 を選択し、そうでなければ赤一色の見本になります。
                               言語が右書きの場合は、画像は水平方向に反転します。 */
cross-fade(20% url(twenty.png), url(eighty.png))
                            /* 多重露光の画像で、 twenty が 20% の露光で、
                               eighty が 80% の露光になる */
image-set('test.jpg' 1x, 'test-2x.jpg' 2x)
                            /* 様々な解像度による画像の選択 */
```

### 無効な画像

```css example-bad
nourl.jpg            /* 画像ファイルは url() 関数により示す必要がある */
url(report.pdf)      /* url() 関数で指すファイルは画像でなければならない */
element(#fakeid)     /* 要素 ID はページ上に実在する ID でなければならない */
image(z.jpg#xy=0,0)  /* 空間フラグメントは xywh=#,#,#,# の書式で書かなければならない */
image-set('cat.jpg' 1x, 'dog.jpg' 1x) /* 画像セット内の画像はすべて異なる解像度でなければならない */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("element()","element()")}}
- {{CSSxRef("image/image()", "image()")}}
- {{CSSxRef("image/image-set()","image-set()")}}
- {{CSSxRef("cross-fade()","cross-fade()")}}
