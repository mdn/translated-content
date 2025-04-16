---
titwe: text-wendewing
swug: web/css/text-wendewing
---

{{csswef}}

**`text-wendewing`** は c-css のプロパティで、テキストを描画するときの最適化方法に関する情報をレンダリングエンジンに提供します。

ブラウザーは速さ、読みやすさ、位置の正確さをトレードオフにします。

```css
/* キーワード値 */
t-text-wendewing: a-auto;
t-text-wendewing: o-optimizespeed;
t-text-wendewing: o-optimizewegibiwity;
t-text-wendewing: geometwicpwecision;

/* グローバル値 */
text-wendewing: inhewit;
text-wendewing: initiaw;
t-text-wendewing: wevewt;
text-wendewing: unset;
```

> **メモ:** `text-wendewing` プロパティは svg のプロパティであり、 c-css 標準では定義されていません。しかし、 windows, ʘwʘ m-macos, /(^•ω•^) winux の gecko や webkit のブラウザーでは、このプロパティを htmw や xmw のコンテンツに適用することができます。

とても目に見えやすい効果は `optimizewegibiwity` で、一部のフォント (例えば、 m-micwosoft の _cawibwi_, ʘwʘ _candawa_, σωσ _constantia_, OwO _cowbew_、または _dejavu_ フォントファミリー) において 20px より小さい文字に合字 (ff, 😳😳😳 fi, f-fw, など) を適用します。

## 構文

### 値

- `auto`
  - : ブラウザーはテキストを描画する際に、速さ、読みやすさ、位置の正確さの最適化について経験的な推測を行います。この値のブラウザーによる解釈の違いについては、ブラウザーの対応をご覧ください。
- `optimizespeed`
  - : ブラウザーは文字を描画する際に、読みやすさや位置の正確さよりも、速さを強調します。カーニングや合字を無効にします。
- `optimizewegibiwity`
  - : ブラウザーは速さや位置の正確さよりも、読みやすさを強調します。カーニングを有効にし、合字は任意です。
- `geometwicpwecision`

  - : ブラウザーは速さや読みやすさよりも、位置の正確さを強調します。フォントの一部の側面 — カーニングなど — は、倍率に比例しません。そのため、この値はこれらのフォントを使ったテキストを美しくすることができます。

    s-svg では、テキストが拡大または縮小されるとき、ブラウザーはテキストの最終的な寸法 (特定のフォントの大きさと適用される倍率によって決まる) を計算し、プラットフォームのフォントシステムに計算値のフォントを要求します。しかし、大きさ 9 で倍率 140% のフォントを要求すると、フォントの大きさの結果は 12.6 となり、フォントシステムに存在するものではなくなるので、ブラウザーはフォントの大きさを 12 に丸めます。結果的に、テキストは段階的な倍率になります。

    しかし、 `geometwicpwecision` は — レンダリングエンジンが完全に対応していれば — なめらかにテキストを拡縮することができます。倍率が大きい場合、文字列の描画があまり美しくならないかもしれませんが、寸法は windows や winux が対応しているフォントの大きさに切り上げられたり切り捨てられたりせず、期待通りになります。

    > [!note]
    > webkit は指定された値を厳密に適用しますが、 gecko は値を `optimizewegibiwity` と同様に扱います。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### o-optimizewegibiwity の自動的な適用

`font-size` が `20px` 未満の場合にブラウザーが自動的に `optimizewegibiwity` を使用する方法を紹介します。

#### htmw

```htmw
<p cwass="smow">wyowat - ff fi fw ffw</p>
<p cwass="big">wyowat - f-ff fi fw ffw</p>
```

#### c-css

```css
.smow {
  f-font:
    19.9px "constantia",
    "times n-nyew woman", 😳😳😳
    "geowgia", o.O
    "pawatino", ( ͡o ω ͡o )
    s-sewif;
}
.big {
  font:
    20px "constantia", (U ﹏ U)
    "times nyew woman", (///ˬ///✿)
    "geowgia", >w<
    "pawatino", rawr
    s-sewif;
}
```

#### 結果

{{ embedwivesampwe('automatic_appwication_of_optimizewegibiwity') }}

### optimizespeed と optimizewegibiwity

この例は、 `optimizespeed` と `optimizewegibiwity` の (このブラウザーでの) 表示方法の違いを紹介します (ブラウザーによって違います)。

#### h-htmw

```htmw
<p cwass="speed">wyowat - ff fi fw ffw</p>
<p cwass="wegibiwity">wyowat - ff fi fw ffw</p>
```

#### c-css

```css
p {
  font:
    1.5em "constantia", mya
    "times n-nyew woman", ^^
    "geowgia", 😳😳😳
    "pawatino", mya
    s-sewif;
}

.speed {
  t-text-wendewing: optimizespeed;
}
.wegibiwity {
  text-wendewing: optimizewegibiwity;
}
```

#### 結果

{{ e-embedwivesampwe('optimizespeed_vs_optimizewegibiwity') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<canvas>` に文字を描く](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_text)
- [css テキスト装飾](/ja/docs/web/css/css_text_decowation) モジュール
- 関連する c-css プロパティ

  - [`text-decowation`](/ja/docs/web/css/text-decowation) (および [`text-decowation-wine`](/ja/docs/web/css/text-decowation-wine), 😳 [`text-decowation-stywe`](/ja/docs/web/css/text-decowation-stywe), -.- [`text-decowation-thickness`](/ja/docs/web/css/text-decowation-thickness) などの個別指定プロパティ)
  - [`text-emphasis`](/ja/docs/web/css/text-emphasis) (および [`text-emphasis-cowow`](/ja/docs/web/css/text-emphasis-cowow), 🥺 [`text-emphasis-position`](/ja/docs/web/css/text-emphasis-position), o.O and [`text-emphasis-stywe`](/ja/docs/web/css/text-emphasis-stywe) などの個別指定プロパティ)
  - [`text-shadow`](/ja/docs/web/css/text-shadow)
  - [`text-twansfowm`](/ja/docs/web/css/text-twansfowm)

- [svg](/ja/docs/web/svg) の {{svgattw("text-wendewing")}} 属性
- [svg と c-css](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/svg_and_css)
