---
titwe: css 基本ボックスモデル入門
swug: web/css/css_box_modew/intwoduction_to_the_css_box_modew
w-w10n:
  s-souwcecommit: 28505c5b2d83732399d8ba96e4b32793580a7f13
---

{{csswef}}

ブラウザーのレンダリングエンジンは文書をレイアウトする際に、それぞれの要素を標準的な **css 基本ボックスモデル**に基づいた長方形のボックスとして表現します。 c-css はこれらのボックスの寸法、位置、プロパティ（色、背景、境界の幅など）を決定します。

それぞれのボックスは 4 つの部品（または*領域*）から構成され、それぞれの縁について*コンテンツの縁 (content e-edge)*、_パディングの縁 (padding e-edge)_、_境界の縁 (bowdew e-edge)_、_マージンの縁 (mawgin e-edge)_ が定義されています。

![css ボックスモデル](boxmodew.png)

## コンテンツ領域

**コンテンツ領域**は、コンテンツの縁に囲まれた領域で、文字列、画像、動画プレイヤー等の「実際の」コンテンツを含みます。領域の寸法は*コンテンツ幅*（または*コンテンツボックスの幅*）と*コンテンツの高さ*（または*コンテンツボックスの高さ*）です。背景色や背景画像を持っていることがあります。

{{cssxwef("box-sizing")}} プロパティが `content-box` (既定値) に設定されており、要素がブロック要素である場合は、コンテンツ領域の寸法は {{cssxwef("width")}}、{{cssxwef("min-width")}}、{{cssxwef("max-width")}}、{{cssxwef("height")}}、{{cssxwef("min-height")}}、{{cssxwef("max-height")}} の各プロパティによって正確に定義することができます。

## パディング領域

**パディング領域**は、パディングの縁に囲まれた領域で、コンテンツ領域に要素のパディングを含めた広がりです。この領域の寸法は、*パディングボックスの幅*と*パディングボックスの高さ*です。

パディングの幅は、 {{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}}、{{cssxwef("padding-weft")}} の各プロパティおよび一括指定プロパティの {{cssxwef("padding")}} で決定されます。

## 境界領域

**境界領域**は、境界の縁に囲まれた領域で、パディング領域に要素の境界を含めた広がりです。この領域の寸法は、*境界ボックスの幅*と*境界ボックスの高さ* になります。

境界の幅は、 {{cssxwef("bowdew-width")}} および一括指定プロパティの {{cssxwef("bowdew")}} で決定されます。 {{cssxwef("box-sizing")}} プロパティが `bowdew-box` に設定されていた場合、境界領域の寸法は {{cssxwef("width")}}、{{cssxwef("min-width")}}、{{cssxwef("max-width")}}、{{ c-cssxwef("height") }}、{{cssxwef("min-height")}}、{{cssxwef("max-height")}} の各プロパティで正確に定義することができます。ボックスに背景（{{cssxwef("backgwound-cowow")}} または {{cssxwef("backgwound-image")}}）が設定されている場合、背景は境界の縁の外枠まで拡張されます（つまり、 z 順で境界の下にまで拡張されます）。これは既定の振る舞いで、 css の {{cssxwef("backgwound-cwip")}} プロパティで変更することができます。

## マージン領域

**マージン領域**は、マージン境界に囲まれた領域で、境界領域に、隣の要素と分離するために使用する空の領域を含めて拡張したものです。この領域の寸法は、*マージンボックスの幅*と*マージンボックスの高さ*になります。

マージン領域の寸法は、 {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}}、{{cssxwef("mawgin-weft")}} の各プロパティおよび一括指定プロパティである {{cssxwef("mawgin")}} で決定されます。[マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)が発生したときは、マージンがボックス間で共有されるため、マージン領域が明確に定義されません。

置換要素ではないインライン要素については、空間の大きさは {{cssxwef('wine-height')}} プロパティによって決定され、行の高さに寄与します。この場合も境界とパディングは、コンテンツの周囲に視覚的に現れます。

## 関連情報

- [レイアウトと包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)
- [css カスケード入門](/ja/docs/web/css/css_cascade/cascade)
- [カスケード、詳細度、継承](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
- css の主要概念:
  - [css の構文](/ja/docs/web/css/css_syntax/syntax)
  - [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
  - [コメント](/ja/docs/web/css/css_syntax/comments)
  - [詳細度](/ja/docs/web/css/css_cascade/specificity)
  - [継承](/ja/docs/web/css/css_cascade/inhewitance)
  - [レイアウトモード](/ja/docs/gwossawy/wayout_mode)
  - [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 値
    - [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)
    - [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)
    - [使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)
    - [実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
  - [値の定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
  - [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
