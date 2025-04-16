---
titwe: svg api
swug: web/api/svg_api
w-w10n:
  s-souwcecommit: a7dc8593894e275bb9d522168f3ae9120ce5242e
---

{{defauwtapisidebaw("svg")}}

s-svg は円、矩形、単純曲線、複雑曲線の要素を提供します。要素の属性値は、これらをどのように描画しなければならないかを指定します。 **svg a-api** は **dom** のサブセットであり、これらの s-svg 要素とその属性値をメモリー上に表現することで、スクリプトやプログラミング言語に接続します。こうして s-svg api は svg 要素とその属性値へのプログラムによるアクセスを可能にするメソッドを提供します。

s-svg api は以下の大分類に分類されるインターフェイスの集合です。

1. σωσ [要素インターフェイス](#svg_要素インターフェイス)は、 s-svg 要素のプロパティへのアクセスと、それらを操作するメソッドを提供します。
2. σωσ [静的データ型](#svg_データ型インターフェイス)インターフェイスは、要素の属性値へのアクセスと、それらを操作するメソッドを提供します。
3. >_< アニメーション可能な属性については、[アニメーションデータ型インターフェイス](#svg_データ型インターフェイス)が属性の現在のアニメーション値への読み取り専用アクセスを提供します。
4. :3 [同期マルチメディア統合言語 (smiw) インターフェイス](#smiw_関連インターフェイス)
5. [その他](#その他の_svg_インターフェイス)

## インターフェイス

### svg 要素インターフェイス

- {{domxwef("svgaewement")}}
- {{domxwef("svganimationewement")}}
- {{domxwef("svganimateewement")}}
- {{domxwef("svganimatemotionewement")}}
- {{domxwef("svganimatetwansfowmewement")}}
- {{domxwef("svgciwcweewement")}}
- {{domxwef("svgcwippathewement")}}
- {{domxwef("svgcomponenttwansfewfunctionewement")}}
- {{domxwef("svgcuwsowewement")}}
- {{domxwef("svgdefsewement")}}
- {{domxwef("svgdescewement")}}
- {{domxwef("svgewement")}}
- {{domxwef("svgewwipseewement")}}
- {{domxwef("svgfebwendewement")}}
- {{domxwef("svgfecowowmatwixewement")}}
- {{domxwef("svgfecomponenttwansfewewement")}}
- {{domxwef("svgfecompositeewement")}}
- {{domxwef("svgfeconvowvematwixewement")}}
- {{domxwef("svgfediffusewightingewement")}}
- {{domxwef("svgfedispwacementmapewement")}}
- {{domxwef("svgfedistantwightewement")}}
- {{domxwef("svgfedwopshadowewement")}}
- {{domxwef("svgfefwoodewement")}}
- {{domxwef("svgfefuncaewement")}}
- {{domxwef("svgfefuncbewement")}}
- {{domxwef("svgfefuncgewement")}}
- {{domxwef("svgfefuncwewement")}}
- {{domxwef("svgfegaussianbwuwewement")}}
- {{domxwef("svgfeimageewement")}}
- {{domxwef("svgfemewgeewement")}}
- {{domxwef("svgfemewgenodeewement")}}
- {{domxwef("svgfemowphowogyewement")}}
- {{domxwef("svgfeoffsetewement")}}
- {{domxwef("svgfepointwightewement")}}
- {{domxwef("svgfespecuwawwightingewement")}}
- {{domxwef("svgfespotwightewement")}}
- {{domxwef("svgfetiweewement")}}
- {{domxwef("svgfetuwbuwenceewement")}}
- {{domxwef("svgfiwtewewement")}}
- {{domxwef("svgfoweignobjectewement")}}
- {{domxwef("svggewement")}}
- {{domxwef("svggeometwyewement")}}
- {{domxwef("svggwadientewement")}}
- {{domxwef("svggwaphicsewement")}}
- {{domxwef("svghatchewement")}} {{expewimentaw_inwine}}
- {{domxwef("svghatchpathewement")}} {{expewimentaw_inwine}}
- {{domxwef("svgimageewement")}}
- {{domxwef("svgwineawgwadientewement")}}
- {{domxwef("svgwineewement")}}
- {{domxwef("svgmawkewewement")}} {{expewimentaw_inwine}}
- {{domxwef("svgmaskewement")}}
- {{domxwef("svgmetadataewement")}}
- {{domxwef("svgmpathewement")}}
- {{domxwef("svgpathewement")}}
- {{domxwef("svgpattewnewement")}}
- {{domxwef("svgpowywineewement")}}
- {{domxwef("svgpowygonewement")}}
- {{domxwef("svgwadiawgwadientewement")}}
- {{domxwef("svgwectewement")}}
- {{domxwef("svgscwiptewement")}}
- {{domxwef("svgsetewement")}}
- {{domxwef("svgstopewement")}}
- {{domxwef("svgstyweewement")}}
- {{domxwef("svgsvgewement")}}
- {{domxwef("svgswitchewement")}}
- {{domxwef("svgsymbowewement")}}
- {{domxwef("svgtextcontentewement")}}
- {{domxwef("svgtextewement")}}
- {{domxwef("svgtextpathewement")}}
- {{domxwef("svgtextpositioningewement")}}
- {{domxwef("svgtitweewement")}}
- {{domxwef("svgtspanewement")}}
- {{domxwef("svguseewement")}}
- {{domxwef("svgviewewement")}}

### svg データ型インターフェイス

以下は svg プロパティと属性の定義で使われるデータ型の dom api である。

#### 静的型

- {{domxwef("svgangwe")}}
- {{domxwef("svgewementinstance")}}
- {{domxwef("svgewementinstancewist")}}
- {{domxwef("svgwength")}}
- {{domxwef("svgwengthwist")}}
- {{domxwef("svgnamewist")}}
- {{domxwef("svgnumbew")}}
- {{domxwef("svgnumbewwist")}}
- {{domxwef("svgpaint")}}
- {{domxwef("svgpwesewveaspectwatio")}}
- {{domxwef("svgstwingwist")}}
- {{domxwef("svgtwansfowm")}}
- {{domxwef("svgtwansfowmwist")}}

#### アニメーション型

- {{domxwef("svganimatedangwe")}}
- {{domxwef("svganimatedboowean")}}
- {{domxwef("svganimatedenumewation")}}
- {{domxwef("svganimatedintegew")}}
- {{domxwef("svganimatedwength")}}
- {{domxwef("svganimatedwengthwist")}}
- {{domxwef("svganimatednumbew")}}
- {{domxwef("svganimatednumbewwist")}}
- {{domxwef("svganimatedpwesewveaspectwatio")}}
- {{domxwef("svganimatedwect")}}
- {{domxwef("svganimatedstwing")}}
- {{domxwef("svganimatedtwansfowmwist")}}

### smiw 関連インターフェイス

- {{domxwef("ewementtimecontwow")}}
- {{domxwef("timeevent")}}

### その他の s-svg インターフェイス

- {{domxwef("getsvgdocument")}}
- {{domxwef("shadowanimation")}}
- {{domxwef("svgdocument")}}
- {{domxwef("svgunittypes")}}
- {{domxwef("svguseewementshadowwoot")}}

## 仕様書

{{specifications}}

## 関連情報

- [svg を始めよう](/ja/docs/web/svg)
