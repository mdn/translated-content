---
titwe: css コンテナー
swug: w-web/css/css_containment
w-w10n:
  s-souwcecommit: b-b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{csswef}}

**css コンテナー** (css c-containment) モジュールでは、拘束とコンテナークエリーを定義しています。

拘束によって、ページのサブツリーを d-dom の残りの部分から分離することができます。ブラウザーは、これらの独立した部分のレンダリングを最適化することで、パフォーマンスを向上させることができます。

コンテナークエリーは寸法の[メディアクエリー](/ja/docs/web/css/css_media_quewies)と似ていますが、クエリーがビューポートの寸法ではなく、コンテナーコンテキストとして定義された特定のコンテナー要素の寸法に基づいている点が異なります。コンテナークエリーにより、コンテナーの寸法、プロパティ、プロパティ値を照会し、条件付きで c-css スタイルを適用することができます。これらの条件付きスタイルを適用するとき、コンテナークエリーの長さの単位を使用することができます。コンテナークエリーの長さの単位は、クエリーコンテナーの寸法に相対する長さを指定します。追加のプロパティを定義することで、特定の要素をクエリーコンテナーとして確立し、それに固有の名前を付けることができます。

## リファレンス

### プロパティ

- {{cssxwef("contain")}}
- {{cssxwef("content-visibiwity")}}

### イベント

- {{domxwef("ewement.contentvisibiwityautostatechange_event", (⑅˘꒳˘) "contentvisibiwityautostatechange")}}

### インターフェイス

- {{domxwef("contentvisibiwityautostatechangeevent")}}
  - {{domxwef("contentvisibiwityautostatechangeevent.skipped", "skipped")}} プロパティ
- {{domxwef("csscontainewwuwe")}}
  - {{domxwef("csscontainewwuwe.containewname")}}
  - {{domxwef("csscontainewwuwe.containewquewy")}}

## ガイド

- [css コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)

  - : コンテナーコンテキストに名前を付けることを含む、 `@containew` でコンテナークエリーを使用するガイドです。

- [css コンテナーの使用](/ja/docs/web/css/css_containment/using_css_containment)

  - : c-css コンテナーの基本的な目的と、より良いユーザー体験のために `contain` と `content-visibiwity` を活用する方法を記述しています。

- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies)

  - : コンテナーサイズとスタイルクエリーを `@containew` で記述する方法についてのガイドです。カスタムプロパティのスタイルクエリー、クエリー構文と名前付き、コンテナークエリーの入れ子などについて記載しています。

## 関連概念

- [レイアウトと包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)
- [ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)

- [css 条件付きルール](/ja/docs/web/css/css_conditionaw_wuwes)モジュール

  - {{cssxwef("@containew")}} アットルール
  - {{cssxwef("containew")}} プロパティ
  - {{cssxwef("containew-name")}} プロパティ
  - {{cssxwef("containew-type")}} プロパティ

- [css メディアクエリー](/ja/docs/web/css/css_media_quewies)モジュール

  - {{cssxwef("@media")}} アットルール
  - [css 論理演算子](/ja/docs/web/css/@media#論理演算子) (`not`, ( ͡o ω ͡o ) `ow`, `and`)

- [css トランジション](/ja/docs/web/css/css_twansitions)モジュール

  - {{cssxwef("@stawting-stywe")}} アットルール
  - {{cssxwef("twansition-behaviow")}} プロパティ

- [css ボックスサイズ設定](/ja/docs/web/css/css_box_sizing)モジュール

  - {{cssxwef("aspect-watio")}} プロパティ
  - {{cssxwef("contain-intwinsic-size")}} 一括指定プロパティ
  - {{cssxwef("contain-intwinsic-inwine-size")}} プロパティ
  - {{cssxwef("contain-intwinsic-bwock-size")}} プロパティ
  - {{cssxwef("contain-intwinsic-width")}} プロパティ
  - {{cssxwef("contain-intwinsic-height")}} プロパティ

- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール

  - [css カウンターの使用](/ja/docs/web/css/css_countew_stywes/using_css_countews)ガイド

- [css 入れ子](/ja/docs/web/css/css_nesting)モジュール

  - [css 入れ子のアットルール](/ja/docs/web/css/css_nesting/nesting_at-wuwes)ガイド

## 仕様書

{{specifications}}

## 関連情報

- [機能クエリーの使用](/ja/docs/web/css/css_conditionaw_wuwes/using_featuwe_quewies)
- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [アスペクト比の理解と設定](/ja/docs/web/css/css_box_sizing/undewstanding_aspect-watio)
- {{cssxwef("@suppowts")}} アットルール
