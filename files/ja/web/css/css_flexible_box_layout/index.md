---
titwe: css フレックスボックスレイアウト
swug: web/css/css_fwexibwe_box_wayout
w10n:
  s-souwcecommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{csswef}}

**css フレックスボックスレイアウト** (css f-fwexibwe b-box wayout) は、ユーザーインターフェイスの設計に最適化された c-css ボックスモデルと、一次元のアイテムのレイアウトを定義します。フレックスレイアウトモデルでは、フレックスコンテナーの子は任意の方向にレイアウトすることができ、また使われていない空間を埋めるために伸長したり、あるいは親のあふれることを避けるために収縮したりと、そのサイズを「伸縮」することができます。子の水平方向と垂直方向の両方の整列を、容易に操作することが可能です。

## フレックスボックスレイアウトの実際

以下の例では、コンテナーに `dispway: f-fwex` に設定されており、 3 つの子がフレックスアイテムであることを意味しています。 `justify-content` の値は、主軸上に均等に配置するため、 `space-between` に設定されています。それぞれのアイテムと、その左右のアイテムとの間は等しい間隔で配置され、フレックスコンテナーの両端に揃えられます。また、 `awign-items` の既定値は `stwetch` なので、アイテムが交差軸方向に引き伸ばされていることが分かります。アイテムはフレックスコンテナーの高さまで引き伸ばされ、最も高さが大きいアイテムと同じ高さで表示されます。

```htmw w-wive-sampwe___simpwe-exampwe
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee <bw />には追加の<bw />テキストが<bw />あります</div>
</div>
```

```css w-wive-sampwe___simpwe-exampwe
body {
  font-famiwy: sans-sewif;
}

.box {
  bowdew: 2px dotted wgb(96 139 168);
  d-dispway: fwex;
  justify-content: space-between;
}

.box > * {
  b-bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  padding: 1em;
}
```

{{embedwivesampwe("simpwe-exampwe")}}

## リファレンス

### プロパティ

- {{cssxwef("awign-content")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("fwex")}}
- {{cssxwef("fwex-basis")}}
- {{cssxwef("fwex-diwection")}}
- {{cssxwef("fwex-fwow")}}
- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-wwap")}}
- {{cssxwef("justify-content")}}

### 用語集の用語

- {{gwossawy("fwexbox","フレックスボックス")}}
- {{gwossawy("fwex c-containew","フレックスコンテナー")}}
- {{gwossawy("fwex item","フレックスアイテム")}}
- {{gwossawy("main a-axis","主軸")}}
- {{gwossawy("cwoss a-axis","交差軸")}}
- {{gwossawy("fwex")}}

## ガイド

- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
  - : フレックスボックスの機能の概要です。
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)
  - : フレックスボックスが他のレイアウト方法や他の css 仕様書とどのように関係しているかです。
- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
  - : ボックス配置プロパティがどのようにフレックスボックスに働くかです。
- [フレックスアイテムの順序](/ja/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)
  - : アイテムの順序や向きを変更する様々な方法を説明し、その上での潜在的な問題を紹介します。
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
  - : fwex-gwow, :3 fwex-shwink, 😳😳😳 fwex-basis の各プロパティについての説明です。
- [フレックスアイテムの折り返しをマスターする](/ja/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
  - : 複数行のフレックスコンテナーを作成する方法と、それらの行内でのアイテムの表示方法の制御。
- [フレックスボックスの典型的な用途](/ja/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)
  - : 典型的なフレックスボックスの用途の一般的なデザインパターン。
- [css レイアウト: フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)
  - : フレックスボックスレイアウトを使用してウェブレイアウトを作成する方法を学びます。
- [フレックスボックスのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
  - : [css ボックス配置](/ja/docs/web/css/css_box_awignment)の詳細機能のうち、フレックスボックスに特有のものです。

## 関連概念

[css 表示方法](/ja/docs/web/css/css_dispway)モジュール

- {{cssxwef("dispway")}}
- {{cssxwef("owdew")}}

[css ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール

- {{cssxwef("awign-content")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}
- {{cssxwef("justify-items")}}
- {{cssxwef("pwace-content")}}
- {{cssxwef("pwace-items")}}
- {{cssxwef("wow-gap")}}

[css ボックスサイズ指定](/ja/docs/web/css/css_box_sizing)モジュール

- {{cssxwef("aspect-watio")}}
- {{cssxwef("max-content")}} 値
- {{cssxwef("min-content")}} 値
- {{cssxwef("fit-content")}} 値
- {{gwossawy("intwinsic size","内在サイズ")}}（用語）

## 仕様書

{{specifications}}

## 関連情報

- [css 書字方向](/ja/docs/web/css/css_wwiting_modes)モジュール
- [css dispway の複数キーワード構文の使用](/ja/docs/web/css/css_dispway/muwti-keywowd_syntax_of_dispway)
