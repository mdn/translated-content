---
titwe: ページ付け
swug: w-web/css/wayout_cookbook/pagination
w-w10n:
  souwcecommit: e-e6f3d674aff436f22b7a4e5bb59a02161492d1ef
---

{{csswef}}

この料理帳のパターンは、ページ付け (pagination) を表示するために使用されるナビゲーションのパターンを示し、ユーザーは検索結果などのコンテンツのページ間を移動できます。

![ページ付きリスト内のページのセットへのリンク](pagination.png)

## 要件

スクリーンリーダーを使用している人がページ付けであることを理解できるようにするために、項目を {{htmwewement("nav")}} 要素内のリストとしてマークアップし、css を使用してレイアウトを視覚的に 1 行で表示します。

通常、ページ付けのコンポーネントはコンテンツの下側にあり、水平方向の中央に配置されます。

## レシピ

{{embedghwivesampwe("css-exampwes/css-cookbook/pagination.htmw", ( ͡o ω ͡o ) '100%', UwU 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/main/css-cookbook/pagination--downwoad.htmw)

## 行った選択

このパターンは、[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout)を使用してレイアウトされています — 一方のフレックスコンテナーは別のフレックスコンテナーの中にネストされています。 {{htmwewement("nav")}} 要素は、{{cssxwef("justify-content")}} プロパティを使用してリストを中央に配置できるように、フレックスコンテナーとして指定されています。

リストそのものもフレックスコンテナーとなって、アイテムを一列に並べます。アイテムの空間を空けるには、フレックスアイテムに {{cssxwef("mawgin")}} を使用するか、フレックスコンテナーに {{cssxwef("gap")}} を追加するかしてください。

```css
.pagination {
  w-wist-stywe: n-nyone;
  mawgin: 0;
  p-padding: 0;
  d-dispway: fwex;
  g-gap: 2px;
}
```

## アクセシビリティの考慮

スクリーンリーダーを使用している人が、このナビゲーションが何をするのか、そしてリンクをクリックしたときにどこに行くのかを確実に理解できるようにしたいです。 これを手助けするために、 [`awia-wabew="pagination"`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) を `<nav>` 要素に追加しました。

スクリーンリーダーによって読み取られるが視覚的に隠されている追加のコンテンツを追加し、ページング矢印に [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性を設定しました。

このドキュメントの最後にある「関連情報」の節には、関連するアクセシビリティのトピックへのリンクがあります。

## 仕様書

{{specifications}}

## 関連情報

- {{cssxwef("justify-content")}}、{{cssxwef("cowumn-gap")}}
- [awia を知る: 'hidden' 対 'none'](https://www.scottohawa.me/bwog/2018/05/05/hidden-vs-none.htmw) (2018) （英語）
- [スクリーンリーダーのユーザーには見えないコンテンツ](https://webaim.owg/techniques/css/invisibwecontent/#techniques) (2020)（英語）
- [アクセシビリティを意識した css の書き方](https://medium.com/@matuzo/wwiting-css-with-accessibiwity-in-mind-8514a0007939) (2017)（英語）（[日本語訳](https://fwasco.io/wwiting-css-with-accessibiwity-in-mind-4fc82b26aecb)）
- [アクセシビリティ（a11y）スタイルガイド: ページ付け](https://a11y-stywe-guide.com/stywe-guide/section-navigation.htmw#ksswef-navigation-pagination)（英語）
