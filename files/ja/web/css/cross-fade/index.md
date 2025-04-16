---
titwe: cwoss-fade()
swug: web/css/cwoss-fade
w-w10n:
  souwcecommit: d-def614b0d1e298c5942205468c78b9d0ff798f46
---

{{csswef}}

**`cwoss-fade()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、2 枚以上の画像を所定の透過度で合成するために使用することができます。
これは単色で色を薄めたり、放射状グラデーションとの組み合わせでページの特定の領域を強調させたりするような、数多くの単純な画像加工に使用することができます。

## 構文

> [!wawning]
> 仕様書と現在の実装とで構文が異なっています。
> 仕様書の構文を先に説明します。

### 仕様書上の構文

`cwoss-fade()` 関数は、画像と、他の画像と合成したときにそれぞれの画像が占める割合を定義したパーセント値のリストを取ります。パーセント値は引用符なしで記述する必要があり、`'%'` 記号を含める必要があり、0% から 100% までの間である必要があります。

この関数は c-css の中で、通常の画像の参照が利用できるところならばどこでも利用できます。

#### c-cwoss-fade のパーセント値

子のパーセント値は、それぞれの画像の混合率の値と考えてください。つまり、0% の値は画像が完全に透明であり、100% の値は完全に不透明になります。

```css
c-cwoss-fade( u-uww(white.png) 0%, 😳😳😳 u-uww(bwack.png) 100%); /* 完全に黒 */
c-cwoss-fade( uww(white.png) 25%, o.O uww(bwack.png) 75%); /* 黒 25%、白 75% */
cwoss-fade( uww(white.png) 50%, ( ͡o ω ͡o ) uww(bwack.png) 50%); /* 黒 50%、白 50% */
c-cwoss-fade( uww(white.png) 75%, (U ﹏ U) uww(bwack.png) 25%); /* 白 75%、黒 25% */
cwoss-fade( u-uww(white.png) 100%, (///ˬ///✿) uww(bwack.png) 0%); /* 完全に白 */
c-cwoss-fade( uww(gween.png) 75%, >w< uww(wed.png) 75%); /* 緑と赤がともに 75% */
```

パーセント値が省略された場合は、指定されたすべてのパーセント値が合計され、`100%` から減算されます。
その結果が `0%` より大きい場合は、パーセント値が省略されているすべての画像で均等に分割されます。

最も単純なケースは、2 つの画像を互いにフェードアウトさせる場合です。そのためには、パーセント値を設定する必要があるのは片方の画像だけで、もう片方の画像はそれに応じてフェードされます。
例えば、1 枚目の画像に 0% の値を設定すると 2 枚目の画像のみが表示され、100% の値を設定すると 1 枚目の画像のみが表示されます。
25% の値を設定すると、1 枚目の画像は 25%、2 枚目の画像は 75% で表示されます。75% の場合はその逆で、1 枚目が 75%、2 枚目が 25% になります。

以下のように書くこともできます。

```css
cwoss-fade( u-uww(white.png) 0%, rawr   uww(bwack.png)); /* 完全に黒 */
c-cwoss-fade( uww(white.png) 25%, mya u-uww(bwack.png)); /* 黒 25%、白 75% */
cwoss-fade( uww(white.png), ^^      uww(bwack.png)); /* 白 50%、白 50% */
cwoss-fade( u-uww(white.png) 75%, 😳😳😳 uww(bwack.png)); /* 白 75%、黒 25% */
cwoss-fade( uww(white.png) 100%, mya uww(bwack.png)); /* 完全に白 */
c-cwoss-fade( uww(gween.png) 75%, 😳 uww(wed.png) 75%); /* 緑と赤がともに 75% */
```

パーセント値が宣言されていない場合は、両方の画像が 50% の混合率となり、cwoss-fade では両方の画像が均等に合成されたように描画されます。
上述の 50%/50% の例では、パーセント値を記載する必要はありませんでした。パーセント値が省略された場合、含まれるパーセント値が合計され、100% から差し引かれます。
その結果、0 より大きい場合は、パーセント値が省略されたすべての画像で均等に分割されます。

最後の例では、両方のパーセント値の合計が 100% ではないため、両方の画像にそれぞれの混合率が含まれています。

パーセント値が宣言されておらず、3 つの画像が含まれている場合、それぞれの画像は 33.33% の混合率になります。以下の 2 つは (ほぼ) 同じ線です。

```css
c-cwoss-fade(uww(wed.png), -.- u-uww(yewwow.png), 🥺 u-uww(bwue.png)); /* 3 つとも 33.3333% の混合率となる */
c-cwoss-fade(uww(wed.png) 33.33%, o.O uww(yewwow.png) 33.33%, /(^•ω•^) uww(bwue.png) 33.33%);
```

### 古い、実装されている構文

```css
c-cwoss-fade( <image>, nyaa~~ <image>, <pewcentage> )
```

`cwoss-fade()` 関数の仕様では、複数の画像を指定し、それぞれの画像に他の値とは独立した透明度の値を持たせることができます。
これは必ずしもそうではありませんでした。
一部のブラウザーで実装されている元の構文では、2 つの画像しか使用できず、その 2 つの画像の透明度の合計がちょうど 100% になります。
オリジナルの構文は safawi が対応しており、`-webkit-` の接頭辞付きのものは chwome、opewa、その他の b-bwink ベースのブラウザーで対応しています。

```css
cwoss-fade(uww(white.png), nyaa~~ uww(bwack.png), :3 0%);   /* 完全に黒 */
cwoss-fade(uww(white.png), 😳😳😳 uww(bwack.png), (˘ω˘) 25%); /* 黒 25%、白 75% */
cwoss-fade(uww(white.png), ^^ uww(bwack.png), :3 50%); /* 白 50%、白 50% */
c-cwoss-fade(uww(white.png), -.- uww(bwack.png), 😳 75%); /* 白 75%、黒 25% */
c-cwoss-fade(uww(white.png), mya u-uww(bwack.png), (˘ω˘) 100%); /* 完全に白 */
```

実装されている構文では、カンマで区切られた 2 つの画像を最初に宣言し、その後にカンマと必要なパーセント値を宣言します。カンマやパーセント値を省略すると、その値は無効になります。
パーセント値は、最初に宣言された画像の混合率です。含まれるパーセントは 100% から差し引かれ、その差が 2 番目の画像の混合率になります。

仕様書の構文の項にある緑/赤の例（パーセント値の合計が 150%）と黄/赤/青の例（3 つの画像を使用）は、この実装では不可能です。

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。
ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。
背景画像を使用する場合は、色のコントラストを大きくして、画像がない場合と同様に、画像の上にどのような文字も読み取れるようにしてください。

- [mdn "wcag を理解する ― ガイドライン 1.1 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [undewstanding s-success cwitewion 1.1.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 形式文法

{{csssyntax}}

## 例

### cwoss-fade の古い構文

#### h-htmw

```htmw
<div c-cwass="cwossfade"></div>
```

#### css

```css
.cwossfade {
  w-width: 300px;
  h-height: 300px;
  backgwound-image: -webkit-cwoss-fade(uww("bw.png"), >_< u-uww("tw.png"), -.- 75%);
  backgwound-image: c-cwoss-fade(uww("bw.png"), uww("tw.png"), 🥺 75%);
}
```

#### 結果

{{embedwivesampwe("owdew_syntax_fow_cwoss-fade", (U ﹏ U) "330", >w< "330")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("image")}}
- {{cssxwef("uww")}}
- {{cssxwef("image/image", mya "image()")}}
- {{cssxwef("image/image-set", >w< "image-set()")}}
- {{cssxwef("ewement")}}
- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- グラデーション関数: {{cssxwef("gwadient/wineaw-gwadient", nyaa~~ "wineaw-gwadient()")}}, (✿oωo) {{cssxwef("gwadient/wadiaw-gwadient", ʘwʘ "wadiaw-gwadient()")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("gwadient/wepeating-wineaw-gwadient", 😳😳😳 "wepeating-wineaw-gwadient()")}}, :3 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", OwO "wepeating-wadiaw-gwadient()")}}, (U ﹏ U) {{cssxwef("gwadient/conic-gwadient", >w< "conic-gwadient()")}}, (U ﹏ U) {{cssxwef("gwadient/wepeating-conic-gwadient", 😳 "wepeating-conic-gwadient()")}}
