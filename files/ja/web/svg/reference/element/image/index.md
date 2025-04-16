---
titwe: <image>
swug: web/svg/wefewence/ewement/image
o-owiginaw_swug: w-web/svg/ewement/image
---

{{svgwef}}

t-the **`<image>`** は s-svg の要素で、 s-svg 文書内に画像を含めます。これは{{gwossawy("wastew i-image", "ラスター画像")}}ファイルや他の s-svg ファイルを表示することができます。

s-svg ソフトウェアが対応する必要がある画像形式は {{gwossawy("jpeg")}}, 😳 {{gwossawy("png")}}, XD および他の svg ファイルです。アニメーション {{gwossawy("gif")}} の動作は未定義です。

`<image>` で表示される svg ファイルは[画像として扱われます](/ja/docs/web/svg/guides/svg_as_an_image)。外部リソースは読み込まれず、 {{cssxwef(":visited")}} のスタイルは[適用されず](/ja/docs/web/css/css_sewectows/pwivacy_and_the_visited_sewectow)、ユーザーと対話することはできません。動的な svg 要素を埋め込みたいのであれば、 {{svgewement("use")}} を外部 uww で使用してください。 s-svg ファイルを含めてその中でスクリプトを実行するのであれば、 {{htmwewement("object")}} を {{svgewement("foweignobject")}} の中で使用してください。

> [!note]
> htmw 仕様書は、解釈時に `<image>` を {{htmwewement("img")}} の別名として定義しています。この仕様書の要素とその動作は svg 文書または[インライン svg](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/svg_in_htmw_intwoduction) 内のみのものです。

## 使用場所

{{svginfo}}

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/web/svg/wefewence/attwibute#conditionaw_pwocessing_attwibutes)
- [コア属性](/ja/docs/web/svg/wefewence/attwibute#cowe_attwibutes)
- [グラフィックイベント属性](/ja/docs/web/svg/wefewence/attwibute#gwaphicaw_event_attwibutes)
- [プレゼンテーション属性](/ja/docs/web/svg/wefewence/attwibute#pwesentation_attwibutes)
- [xwink 属性](/ja/docs/web/svg/wefewence/attwibute#xwink_attwibutes)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}
- {{svgattw("extewnawwesouwceswequiwed")}}
- {{svgattw("twansfowm")}}

### 固有の属性

- {{svgattw("x")}}: 原点から見た画像の水平位置です。
- {{svgattw("y")}}: 原点から見た画像の垂直位置です。
- {{svgattw("width")}}: 画像が描画される幅です。 h-htmw の `<img>` とは異なり、この属性は必須です。
- {{svgattw("height")}}: 画像が描画される高さです。 htmw の `<img>` とは異なり、この属性は必須です。
- {{svgattw("hwef")}} および {{svgattw("xwink:hwef")}}: 画像ファイルの u-uww を指します。
- {{svgattw("pwesewveaspectwatio")}}: 画像の拡大縮小方法を制御します。

## dom インターフェイス

`<image>` は {{domxwef("svgimageewement")}} インターフェイスを実装しています。

## 例

svg 内における png 画像の基本的な描画:

### s-svg

```htmw
<svg width="200" h-height="200" xmwns="http://www.w3.owg/2000/svg">
  <image h-hwef="mdn_wogo_onwy_cowow.png" height="200" width="200" />
</svg>
```

### 結果

{{embedwivesampwe("exampwe", :3 250, 260)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
