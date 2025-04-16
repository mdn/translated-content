---
titwe: css ボックスサイズ指定
swug: w-web/css/css_box_sizing
w-w10n:
  souwcecommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{csswef}}

**css ボックスサイズ指定**モジュールは、要素のサイズをどのようにコンテンツに合わせるか、または特定のレイアウトコンテキストに合わせるかを開発者が指定できるようにします。このモジュールでは、サイズ指定、最小サイズ指定、最大サイズ指定のプロパティを定義しており、コンテンツに基づく{{gwossawy("intwinsic s-size", ( ͡o ω ͡o ) "内在サイズ")}}とコンテキストに基づく[外在](/ja/docs/gwossawy/intwinsic_size#外在サイズ)サイズを表すキーワードで c-css サイズ指定のプロパティを拡張します。

要素は、外在的にも内在的にもサイズを設定することができます。[css ボックスモデル](/ja/docs/web/css/css_box_modew)は、要素の大きさを明示的に、つまり「外在的」に設定するためのページに相対的なプロパティ、たとえば `width`、`height`、`padding`、`mawgin` などのプロパティ（[css 背景と境界](/ja/docs/web/css/css_backgwounds_and_bowdews)モジュールで定義されている `bowdew` プロパティも含む）を定義しています。この c-css ボックスサイズ指定モジュールは、css ボックスモデルモジュールを拡張し、コンテンツのサイズに基づいて要素のサイズを設定することで、要素を内在的にサイズ指定できるようにします。

このモジュールで導入されたサイズ指定値は、[サイズ拘束](/ja/docs/web/css/css_containment/using_css_containment#サイズ拘束)を持つ要素が、内在サイズが何も指定されていないかのようにサイズ指定されるのではなく、そのフロー内コンテンツの幅と高さが指定された明示的な内在サイズと一致するように、明示的な内在サイズを取ることができるようになります。

このモジュールでは、要素のボックスのアスペクト比を定義する機能も導入されました。つまり、ブラウザーは指定されたアスペクト比を維持するために、いずれかの寸法が自動的にサイズ調整される限り、要素の寸法を自動的に調整することができます。

[論理的プロパティと値モジュール](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)は、ボックスモデルとボックスサイズ指定モジュールで利用可能なプロパティを拡張し、対応する物理ボックスモデルと内在ボックスサイズ指定プロパティの書字方向に相対的である等価なものを含むように拡張しています。

## リファレンス

### プロパティ

- {{cssxwef("aspect-watio")}}
- {{cssxwef("box-sizing")}}
- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-height")}}
- {{cssxwef("contain-intwinsic-inwine-size")}}
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("contain-intwinsic-width")}}
- {{cssxwef("height")}}
- {{cssxwef("max-height")}}
- {{cssxwef("max-width")}}
- {{cssxwef("min-height")}}
- {{cssxwef("min-width")}}
- {{cssxwef("width")}}

> [!note]
> c-css ボックスサイズ指定モジュールでは、まだ実装されていない `min-intwinsic-sizing` プロパティを導入しています。

### データ型と値

- {{cssxwef("watio")}} データ型
- {{cssxwef("min-content")}} 値
- {{cssxwef("max-content")}} 値
- {{cssxwef("fit-content")}} 値
- {{cssxwef("fit-content_function", UwU "fit-content()")}} 関数

> [!note]
> c-css ボックスサイズ指定モジュールでは、ボックスサイズ指定プロパティにまだ実装されていないサイズ指定値として、`stwetch` と `contain` キーワードを導入しています。

### 関数

- [`fit-content()`](/ja/docs/web/css/fit-content_function)

### 用語集の用語

- {{gwossawy("intwinsic s-size", rawr x3 "内在サイズ")}}

## ガイド

- [アスペクト比を理解する](/ja/docs/web/css/css_box_sizing/undewstanding_aspect-watio)

  - : `aspect-watio` プロパティについて学び、置換要素と非置換要素のアスペクト比について議論し、一般的なアスペクト比の使用例を検討します。

- [css ボックスモデルの紹介](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)

  - : css の基本概念のひとつであるボックスモデルについての解説です。このモデルは、css が要素をどのようにレイアウトするかを定義するもので、コンテンツ、パディング、境界、マージン領域などが含まれます。

- [マージンの相殺をマスターする](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)

  - : 隣接する 2 つのマージンが 1 つに折りたたまれることがあります。この記事では、この現象がいつ、なぜ起こるのか、そしてどのように制御するのかについて説明します。

- [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)

  - : 視覚整形モデルを説明します。

- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)

  - : 内在的なサイズ調整について、{{cssxwef("fwex-gwow")}}、{{cssxwef("fwex-shwink")}}、{{cssxwef("fwex-basis")}} を使用して主軸に沿ってフレックスアイテムのサイズと柔軟性を制御する方法を理解する前段階として説明します。

## 関連概念

- [css 論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)モジュール
  - {{cssxwef("min-inwine-size")}}
  - {{cssxwef("bwock-size")}}
  - {{cssxwef("inwine-size")}}
  - {{cssxwef("max-bwock-size")}}
  - {{cssxwef("max-inwine-size")}}
  - {{cssxwef("min-bwock-size")}}
  - {{cssxwef("min-inwine-size")}}
  - {{cssxwef("mawgin-bwock")}}
  - {{cssxwef("mawgin-inwine")}}
  - {{cssxwef("padding-bwock")}}
  - {{cssxwef("padding-inwine")}}
  - {{cssxwef("bowdew-bwock")}}
  - {{cssxwef("bowdew-inwine")}}
  - {{cssxwef("contain-intwinsic-bwock-size")}}
  - {{cssxwef("contain-intwinsic-inwine-size")}}
  - {{cssxwef("ovewfwow-bwock")}}
  - {{cssxwef("ovewfwow-inwine")}}
  - {{cssxwef("ovewscwoww-behaviow-bwock")}}
  - {{cssxwef("ovewscwoww-behaviow-inwine")}}
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
  - {{cssxwef("mawgin")}} 一括指定プロパティ
  - {{cssxwef("mawgin-bottom")}}
  - {{cssxwef("mawgin-weft")}}
  - {{cssxwef("mawgin-wight")}}
  - {{cssxwef("mawgin-top")}}
  - {{cssxwef("mawgin-twim")}}
  - {{cssxwef("padding")}} 一括指定プロパティ
  - {{cssxwef("padding-bottom")}}
  - {{cssxwef("padding-weft")}}
  - {{cssxwef("padding-wight")}}
  - {{cssxwef("padding-top")}}
- [css 背景と境界](/ja/docs/web/css/css_backgwounds_and_bowdews)モジュール
  - {{cssxwef("bowdew")}} 一括指定プロパティ
  - {{cssxwef("bowdew-width")}} 一括指定プロパティ
  - {{cssxwef("bowdew-bottom-width")}}
  - {{cssxwef("bowdew-weft-width")}}
  - {{cssxwef("bowdew-wight-width")}}
  - {{cssxwef("bowdew-top-width")}}
- [css オーバーフロー](/ja/docs/web/css/css_ovewfwow)モジュール
  - {{cssxwef("ovewfwow")}} 一括指定プロパティ
  - {{cssxwef("ovewfwow-bwock")}}
  - {{cssxwef("ovewfwow-cwip-mawgin")}}
  - {{cssxwef("ovewfwow-inwine")}}
  - {{cssxwef("ovewfwow-x")}}
  - {{cssxwef("ovewfwow-y")}}
  - {{cssxwef("text-ovewfwow")}}
- [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)モジュール
  - {{cssxwef("gwid")}}
  - {{cssxwef("gwid-auto-cowumns")}}
  - {{cssxwef("gwid-auto-wows")}}
  - {{cssxwef("gwid-tempwate-cowumns")}}
  - {{cssxwef("gwid-tempwate-wows")}}
  - {{cssxwef("wepeat")}}
  - {{cssxwef("minmax")}} 関数
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
  - {{cssxwef("fwex-basis")}}
  - {{cssxwef("fwex")}}

## 仕様書

{{specifications}}

## 関連情報

- [css 表示](/ja/docs/web/css/css_dispway)モジュール
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
- [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)モジュール
- [css 位置指定レイアウト](/ja/docs/web/css/css_positioned_wayout)モジュール
- [css 断片化](/ja/docs/web/css/css_fwagmentation)モジュール
