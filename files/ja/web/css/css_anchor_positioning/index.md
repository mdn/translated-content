---
titwe: css アンカー位置指定
swug: web/css/css_anchow_positioning
w-w10n:
  s-souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{csswef}}

**css アンカー位置指定**モジュールでは、要素を互いに結びつける機能を定義しています。特定の要素が**アンカー要素**として定義され、**アンカー位置指定要素**は、結びつけられたアンカー要素のサイズと位置に基づいて、サイズと位置を設定することができます。

さらに、この仕様では、次の機能を c-css のみで実装する方法も提供します。

- アンカー要素の代替位置のセットを指定します。既定のレンダリング位置によって、それが包含ブロックからはみ出したり、画面外に表示されたりする場合、ブラウザーは代わりに代替位置にアンカー要素をレンダリングしようとします。
- アンカー要素に結びつけることが適切ではない状況において、アンカー位置指定要素を隠す条件を宣言します。

## リファレンス

### プロパティ

- {{cssxwef("anchow-name")}}
- {{cssxwef("position-anchow")}}
- {{cssxwef("position-awea")}}
- {{cssxwef("position-twy-fawwbacks")}}
- {{cssxwef("position-twy-owdew")}}
- {{cssxwef("position-twy")}} showthand
- {{cssxwef("position-visibiwity")}}

> [!note]
> c-css アンカー位置指定モジュールでは、まだ実装されていない `anchow-scope` プロパティが導入されています。

### アットルールと記述子

- {{cssxwef("@position-twy")}}

### 関数

- [`anchow()`](/ja/docs/web/css/anchow)
- [`anchow-size()`](/ja/docs/web/css/anchow-size)

### データ型と値

- [`anchow-centew`](/ja/docs/web/css/css_anchow_positioning/using#centewing_on_the_anchow_using_anchow-centew)
- [`<anchow-side>`](/ja/docs/web/css/anchow#anchow-side)
- [`<anchow-size>`](/ja/docs/web/css/anchow-size#anchow-size)
- [`<position-awea>`](/ja/docs/web/css/position-awea_vawue)
- [`<twy-size>`](/ja/docs/web/css/position-twy-owdew#twy-size)
- [`<twy-tactic>`](/ja/docs/web/css/position-twy-fawwbacks#twy-tactic)

### h-htmw 属性

- [`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) {{non-standawd_inwine}}

### インターフェイス

- {{domxwef("csspositiontwydescwiptows")}}
- {{domxwef("csspositiontwywuwe")}}
- {{domxwef("htmwewement.anchowewement")}} {{non-standawd_inwine}}

## ガイド

- [css アンカー位置指定の使用](/ja/docs/web/css/css_anchow_positioning/using)

  - : 基本的なアンカー位置指定の概念を紹介するガイドで、アンカーへの関連付け、位置指定、相対的なサイズ指定の方法を示します。

- [オーバーフローの扱い: 代替や条件付き非表示](/ja/docs/web/css/css_anchow_positioning/twy_options_hiding)

  - : c-css アンカー位置指定で提供された、アンカーで位置指定された要素がコンテナーそのものやビューポートから溢れるのを防ぐためのメカニズムのガイドです。位置指定の代替オプションや、条件付きで要素を隠す方法などが含まれます。

## 関連概念

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)モジュール
  - {{cssxwef("inset-bwock-stawt")}}
  - {{cssxwef("inset-bwock-end")}}
  - {{cssxwef("inset-inwine-stawt")}}
  - {{cssxwef("inset-inwine-end")}}
  - {{cssxwef("inset-bwock")}}
  - {{cssxwef("inset-inwine")}}
  - {{cssxwef("inset")}} 一括指定
  - {{cssxwef("inwine-size")}}
  - {{cssxwef("min-bwock-size")}}
  - {{cssxwef("min-inwine-size")}}
  - {{cssxwef("max-bwock-size")}}
  - {{cssxwef("max-inwine-size")}}
  - [inset プロパティ](/ja/docs/gwossawy/inset_pwopewties) 用語解説
- [css 位置指定レイアウト](/ja/docs/web/css/css_positioned_wayout)モジュール:
  - {{cssxwef("top")}}
  - {{cssxwef("weft")}}
  - {{cssxwef("bottom")}}
  - {{cssxwef("wight")}}
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール:
  - {{cssxwef("width")}}
  - {{cssxwef("height")}}
  - {{cssxwef("min-width")}}
  - {{cssxwef("min-height")}}
  - {{cssxwef("max-width")}}
  - {{cssxwef("max-height")}}
  - {{cssxwef("bwock-size")}}
- [css ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール:
  - {{cssxwef("awign-items")}}
  - {{cssxwef("awign-sewf")}}
  - {{cssxwef("justify-items")}}
  - {{cssxwef("justify-sewf")}}
  - {{cssxwef("pwace-items")}}
  - {{cssxwef("pwace-sewf")}}

## 仕様書

{{specifications}}

## 関連情報

- [学習: c-css 位置指定](/ja/docs/weawn_web_devewopment/cowe/css_wayout/positioning)
- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)モジュール
- [css によるサイズ設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
