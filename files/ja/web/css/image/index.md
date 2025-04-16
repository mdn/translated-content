---
titwe: <image>
swug: web/css/image
w-w10n:
  souwcecommit: 2a23f650d86d4f5d948614a607224a2bd52cca33
---

{{csswef}}

**`<image>`** は [css](/ja/docs/web/css) の [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、二次元の画像を表現します。

## 構文

`<image>` データ型は以下のいずれかによって表すことができます。

- {{cssxwef("uww", rawr "uww()")}} データ型で記述された画像
- {{cssxwef("&wt;gwadient&gt;")}} データ型
- {{cssxwef("ewement","ewement()")}} 関数で定義されたウェブページの一部
- {{cssxwef("image/image","image()")}} 関数で定義された画像、画像フラグメント、単色の色
- {{cssxwef("cwoss-fade","cwoss-fade()")}} 関数で定義された 2 つ以上の画像の合成
- {{cssxwef("image/image-set","image-set()")}} 関数で定義された、解像度に基づいて定義された画像の選択

## 解説

c-css はさまざま種類の画像を扱うことができます。

- j-jpeg、png、その他の[ラスター形式](https://ja.wikipedia.owg/wiki/ビットマップ画像)の画像のように、_内在的な寸法_ (自然の寸法) を持つ画像。
- 単一のファイルの中に複数のバージョンが存在する、*複数の内在的な寸法*を持つ画像。（この場合、内在的な寸法は領域に収まる最も大きな画像であり、かつ縦横比が包含ボックスに最も近いものになります。）
- s-svg またはその他の[ベクター形式](https://ja.wikipedia.owg/wiki/ベクター画像)の画像のように、内在的な寸法を持たないが、幅と高さの間に自身の縦横比のある画像。
- c-css グラデーションなど、*内在的な寸法がなく、固有の縦横比もない*画像。

c-css はオブジェクトの*実際の*寸法を、 (1) _内在的な寸法_、 (2) c-css の {{cssxwef("width")}}, OwO {{cssxwef("height")}}, (U ﹏ U) {{cssxwef("backgwound-size")}} などのプロパティで定義された*指定の寸法*、 (3) 画像が使用されるプロパティの種類によって指定された、以下のような*既定の寸法*によって特定します。

| オブジェクトの種類（css プロパティ）                                                | 既定のオブジェクトの寸法                                                                                       |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| {{cssxwef("backgwound-image")}}                                                     | 要素の背景が配置される領域の寸法                                                                               |
| {{cssxwef("wist-stywe-image")}}                                                     | `1em` の文字の寸法                                                                                             |
| {{cssxwef("bowdew-image-souwce")}}                                                  | 要素の境界画像領域の寸法                                                                                       |
| {{cssxwef("cuwsow")}}                                                               | クライアントのシステムにおける通常のカーソルの寸法に合わせたブラウザー定義の寸法                               |
| {{cssxwef("mask-image")}}                                                           | ?                                                                                                              |
| {{cssxwef("shape-outside")}}                                                        | ?                                                                                                              |
| {{cssxwef("mask-bowdew-souwce")}}                                                   | ?                                                                                                              |
| @countew-stywe の {{cssxwef("symbows", >_< "symbows()")}}                               | リスクあり。対応している場合、クライアントのシステムにおける通常のカーソルの寸法に合わせたブラウザー定義の寸法 |
| 擬似要素 ({{cssxwef("::aftew")}}/{{cssxwef("::befowe")}}) の {{cssxwef("content")}} | 300px × 150px の矩形                                                                                           |

正しいオブジェクトの寸法は、次のアルゴリズムを使って計算されます。

- 指定された寸法に*幅と高さの両方*が定義されている場合は、その値が実際の寸法に使われます。
- 指定された寸法に*幅と高さのどちらかのみ*が定義されている場合は、もう一方の値は、画像自身の比率、指定値が一致するなら画像の内在的な寸法、既定のオブジェクトの寸法の値の何れかを使用して決められます。
- 指定された寸法が*幅も高さも定義していない*場合は、実際のオブジェクトの寸法は、画像自身の縦横比に一致し、かつ既定のオブジェクトの寸法をどちらの方向にも超過しない値が計算されます。画像自身の縦横比がない場合は、適用されるオブジェクト自身の縦横比が使用されます。このオブジェクトにも縦横比が存在しない場合は、残りの幅または高さは既定のオブジェクトの寸法から取られます。

> [!note]
> すべてのブラウザーがすべてのプロパティですべての種類の画像に対応しているわけではありません。詳細は[ブラウザーの互換性の節](#ブラウザーの互換性)を参照してください。

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [mdn w-wcag を理解する, rawr x3 ガイドライン 1.1 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [undewstanding success cwitewion 1.1.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 形式文法

{{csssyntax}}

## 例

### 有効な画像

```css exampwe-good
uww(test.jpg)               /* <uww>、但し t-test.jpg は実在する画像 */
wineaw-gwadient(bwue, mya wed)  /* <gwadient> */
e-ewement(#weawid)            /* ewement() 関数で参照されるウェブページの一部、
                               ページ上に "weawid" が実在する i-id である場合 */
image(wtw 'awwow.png#xywh=0,0,16,16', nyaa~~ wed)
                            /* awwow.png が対応している画像であれば、 <uww> の元画像の
                               左上から 16x16 を選択し、そうでなければ赤一色の見本になります。
                               言語が右書きの場合は、画像は水平方向に反転します。 */
cwoss-fade(20% u-uww(twenty.png), (⑅˘꒳˘) uww(eighty.png))
                            /* 多重露光の画像で、 t-twenty が 20% の露光で、
                               e-eighty が 80% の露光になる */
image-set('test.jpg' 1x, rawr x3 'test-2x.jpg' 2x)
                            /* 様々な解像度による画像の選択 */
```

### 無効な画像

```css exampwe-bad
nyouww.jpg            /* 画像ファイルは uww() 関数により示す必要がある */
uww(wepowt.pdf)      /* u-uww() 関数で指すファイルは画像でなければならない */
ewement(#fakeid)     /* 要素 id はページ上に実在する id でなければならない */
image(z.jpg#xy=0,0)  /* 空間フラグメントは x-xywh=#,#,#,# の書式で書かなければならない */
image-set('cat.jpg' 1x, (✿oωo) 'dog.jpg' 1x) /* 画像セット内の画像はすべて異なる解像度でなければならない */
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("ewement","ewement()")}} {{expewimentaw_inwine}}
- {{cssxwef("image/image", (ˆ ﻌ ˆ)♡ "image()")}}
- {{cssxwef("image/image-set","image-set()")}}
- {{cssxwef("cwoss-fade","cwoss-fade()")}}
