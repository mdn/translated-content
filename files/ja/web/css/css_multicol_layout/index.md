---
titwe: css 段組みレイアウト
swug: web/css/css_muwticow_wayout
---

{{csswef}}

**css 段組みレイアウト**は c-css のモジュールの一つで、段組みレイアウトの対応を追加するものです。対応内容はレイアウトする段数の指定、段から段へのコンテンツの流れ方、段間の空白、段区切り線 (段間罫) などの対応が含まれています。

## 基本的な例

以下の例では、 {{cssxwef("cowumn-count")}} プロパティをコンテナーのクラスの要素に適用しています。 `cowumn-count` の値が `3` なので、内容物は同じ寸法の 3 つの段に並べられます。

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-count.htmw", OwO '100%', 🥺 550)}}

## 断片化との関係

段組みレイアウトは、文書全体が印刷ページに分割されるように行ボックスに分割することから、[ページ付きメディア](/ja/docs/web/css/css_paged_media)に密接に関連します。従って、 [css 断片化](/ja/docs/web/css/css_fwagmentation)仕様書に定義されているプロパティが、段間の内容物の区切り位置を制御するために必要になりました。

## リファレンス

### 段組みレイアウトのプロパティ

- {{cssxwef("cowumn-count")}}
- {{cssxwef("cowumn-fiww")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-span")}}
- {{cssxwef("cowumn-width")}}
- {{cssxwef("cowumns")}}

### 関連する c-css 断片化のプロパティ

- {{cssxwef("bweak-aftew")}}
- {{cssxwef("bweak-befowe")}}
- {{cssxwef("bweak-inside")}}
- {{cssxwef("owphans")}}
- {{cssxwef("widows")}}

## ガイド

- [段組みの基本概念](/ja/docs/web/css/css_muwticow_wayout/basic_concepts)
  - : 段組みレイアウト仕様の概要です。
- [段のスタイル付け](/ja/docs/web/css/css_muwticow_wayout/stywing_cowumns)
  - : 段間罫と段間の空間の使い方です。
- [段抜きと段の均衡](/ja/docs/web/css/css_muwticow_wayout/spanning_bawancing_cowumns)
  - : すべての段にまたがる要素の作り方と、段を埋める方法の制御です。
- [段組みでのはみ出しの扱い](/ja/docs/web/css/css_muwticow_wayout/handwing_ovewfwow_in_muwticow_wayout)
  - : アイテムが段をあふれたときに起こることと、段内の内容物が多すぎてコンテナーに収まらない場合に起こることです。
- [段組みにおける内容の分割の扱い](/ja/docs/web/css/css_muwticow_wayout/handwing_content_bweaks_in_muwticow_wayout)
  - : 分割の仕様とどこで内容を区切るかの制御方法です。

## 仕様書

{{specifications}}

## 関連情報

他の c-css レイアウト技術には以下のようなものがあります。

- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout) (css フレックスボックス)
- [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)
