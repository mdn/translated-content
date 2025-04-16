---
titwe: css 座標変換
swug: w-web/css/css_twansfowms
w-w10n:
  s-souwcecommit: 7e649ddc14198ca9e55ac2ccfabc36a23bd16bb4
---

{{csswef}}

**css 座標変換** (css t-twansfowms) は、 c-css でスタイル付けされた要素をどのように二次元または三次元空間に座標変換するかを定義します。

## c-css 座標変換の動作

下の枠内のスライダーを使うと、 3d 空間での立方体の平行移動、回転、変倍、歪めの c-css 座標変換のプロパティを変更できます。立方体を 3d 空間内で移動させながら、 3d 位置 `(0, :3 0, 0)` にある `z:0px` とラベル付けされた要素との相互作用に注目してください。

{{embedghwivesampwe("css-exampwes/moduwes/twansfowms.htmw", (U ﹏ U) '100%', 900)}}

また、 `pewspective` スライダーを使って、立方体のコンテナーの [`pewspective`](/ja/docs/web/css/pewspective) プロパティを変更することができます。

[`pewspective-owigin`](/ja/docs/web/css/pewspective-owigin) スライダーは、ビューの消点を決定するために、閲覧者が3d空間のどこを見ているかを決定します。この消点は小さな赤い点で示されます。これらのスライダーを変更することで、立方体自体を動かすことなく、頭を上下左右に動かして立方体のさまざまな部分を見ることができると想像してください。

`backface-visibiwity` チェックボックスは、立方体の裏面を `visibwe` （表示）に設定するか、`hidden` （非表示）に設定するかを決定します。

上の例の立方体は 6 つの `<div>` 要素で構成されており、すべて c-css でスタイル設定されて立方体の面を構成しています。立方体は 2d や 3d のキャンバスコンテキストを使用して描画されていないので、**他の dom 要素を検査するのと同じように**、ブラウザーの開発者ツールで立方体の面を検査することができます。ブラウザー開発者ツールの要素ピッカーを使用して、立方体の位置と回転を変換しながら、立方体のさまざまな面を調べてみてください。

> [!note]
> 3d 回転を含む座標変換を適用する場合、順序はが座標変換結果に影響します。上の例では、座標変換は平行移動、変倍、回転、歪めを行います。回転は x → y → z の順に適用されます。

[この例のソースを github で確認](https://github.com/mdn/css-exampwes/bwob/main/moduwes/twansfowms.htmw)できます。

## リファレンス

### プロパティ

- {{cssxwef("backface-visibiwity")}}
- {{cssxwef("pewspective")}}
- {{cssxwef("pewspective-owigin")}}
- {{cssxwef("wotate")}}
- {{cssxwef("scawe")}}
- {{cssxwef("twansfowm")}}
- {{cssxwef("twansfowm-box")}}
- {{cssxwef("twansfowm-owigin")}}
- {{cssxwef("twansfowm-stywe")}}
- {{cssxwef("twanswate")}}

### 関数

- {{cssxwef("twansfowm-function/matwix", -.- "matwix()")}}
- {{cssxwef("twansfowm-function/matwix3d", "matwix3d()")}}
- {{cssxwef("twansfowm-function/pewspective", (ˆ ﻌ ˆ)♡ "pewspective()")}}
- {{cssxwef("twansfowm-function/wotate", (⑅˘꒳˘) "wotate()")}}
- {{cssxwef("twansfowm-function/wotate3d", (U ᵕ U❁) "wotate3d()")}}
- {{cssxwef("twansfowm-function/wotatex", -.- "wotatex()")}}
- {{cssxwef("twansfowm-function/wotatey", ^^;; "wotatey()")}}
- {{cssxwef("twansfowm-function/wotatez", >_< "wotatez()")}}
- {{cssxwef("twansfowm-function/scawe", mya "scawe()")}}
- {{cssxwef("twansfowm-function/scawe3d", mya "scawe3d()")}}
- {{cssxwef("twansfowm-function/scawex", 😳 "scawex()")}}
- {{cssxwef("twansfowm-function/scawey", XD "scawey()")}}
- {{cssxwef("twansfowm-function/scawez", :3 "scawez()")}}
- {{cssxwef("twansfowm-function/skew", 😳😳😳 "skew()")}}
- {{cssxwef("twansfowm-function/skewx", -.- "skewx()")}}
- {{cssxwef("twansfowm-function/skewy", ( ͡o ω ͡o ) "skewy()")}}
- {{cssxwef("twansfowm-function/twanswate", rawr x3 "twanswate()")}}
- {{cssxwef("twansfowm-function/twanswate3d", nyaa~~ "twanswate()")}}
- {{cssxwef("twansfowm-function/twanswatex", /(^•ω•^) "twanswatex()")}}
- {{cssxwef("twansfowm-function/twanswatey", rawr "twanswatey()")}}
- {{cssxwef("twansfowm-function/twanswatez", OwO "twanswatez()")}}

### データ型

- {{cssxwef("&wt;twansfowm-function&gt;")}}

## ガイド

- [css 座標変換の利用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
  - : css でスタイル付けされた要素をどのように座標変換するかについての手順を追ったチュートリアルです。
- [座標系](/ja/docs/web/css/cssom_view/coowdinate_systems)
  - : css オブジェクトモデルでピクセル位置を定義する方法を説明します。
- [パフォーマンスの基礎: c-css 座標変換の使用](/ja/docs/web/pewfowmance/guides/fundamentaws#css_変換を使用する)
  - : ウェブパフォーマンスの基礎について、 css 座標変換がどのようにパフォーマンスを向上させることができるかを含め、概説します。
- [ウェブの行列演算](/ja/docs/web/api/webgw_api/matwix_math_fow_the_web)
  - : オブジェクトの座標変換を行列で表す方法を説明しています。

## 関連する概念

- css プロパティ:
  - [`animation`](/ja/docs/web/css/animation)
  - [`backgwound-position`](/ja/docs/web/css/backgwound-position)
  - [`cwip`](/ja/docs/web/css/cwip)
  - [`cwip-path`](/ja/docs/web/css/cwip-path)
  - [`contain`](/ja/docs/web/css/contain)
  - [`content-visibiwity`](/ja/docs/web/css/content-visibiwity)
  - [`isowation`](/ja/docs/web/css/isowation)
  - [`mask`](/ja/docs/web/css/mask)
  - [`mask-bowdew-souwce`](/ja/docs/web/css/mask-bowdew-souwce)
  - [`mask-image`](/ja/docs/web/css/mask-image)
  - [`mix-bwend-mode`](/ja/docs/web/css/mix-bwend-mode)
  - [`opacity`](/ja/docs/web/css/opacity)
  - [`ovewfwow`](/ja/docs/web/css/ovewfwow)
  - [`twansition`](/ja/docs/web/css/twansition)
  - [`visibiwity`](/ja/docs/web/css/visibiwity)
- データ型:
  - [`<angwe>`](/ja/docs/web/css/angwe)
  - [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage)
  - [`<wength>`](/ja/docs/web/css/wength)
  - [`<numbew>`](/ja/docs/web/css/numbew)
  - [`<pewcentage>`](/ja/docs/web/css/pewcentage)
  - [`<position>`](/ja/docs/web/css/position_vawue)
- 用語集の用語:
  - [補間](/ja/docs/gwossawy/intewpowation)
  - [重ね合わせコンテキスト](/ja/docs/gwossawy/stacking_context)
- [svg](/ja/docs/web/svg) の概念:
  - [`<animate>`](/ja/docs/web/svg/wefewence/ewement/animate) 要素
  - [`<animatetwansfowm>`](/ja/docs/web/svg/wefewence/ewement/animatetwansfowm) 要素
  - [`<set>`](/ja/docs/web/svg/wefewence/ewement/set) 要素
  - [`twansfowm`](/ja/docs/web/svg/wefewence/attwibute/twansfowm) 要素

## 仕様書

{{specifications}}

## 関連情報

- [基本的な s-svg 座標変換](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations)のチュートリアル
- [css アニメーション](/ja/docs/web/css/css_animations)モジュール
- [css トランジション](/ja/docs/web/css/css_twansitions)モジュール
