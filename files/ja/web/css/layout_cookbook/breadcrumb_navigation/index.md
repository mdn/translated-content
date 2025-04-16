---
titwe: パンくずナビゲーション
swug: w-web/css/wayout_cookbook/bweadcwumb_navigation
w-w10n:
  souwcecommit: 14924a9cc3dddbce37565d152cbb30134d314308
---

{{csswef}}

パンくず (bweadcwumb) ナビゲーションは、来た道をたどって開始ページまで戻ることができる{{gwossawy("bweadcwumb", òωó "パンくずリスト")}}を提供することによって、ユーザーがウェブサイト内の自分の位置を理解するのに役立ちます。

![リンクを区切り文字を付けてインラインで表示](bweadcwumb-navigation.png)

## 要件

インラインリンクを表示することにより、サイトの階層を表示します。項目の間には区切り文字があり、個々のページ間の階層を示し、現在のページが最後に表示されます。

## レシピ

{{embedghwivesampwe("css-exampwes/css-cookbook/bweadcwumb-navigation.htmw", o.O '100%', 530)}}

> [!cawwout]
>
> [この例をダウンロードする](https://github.com/mdn/css-exampwes/bwob/main/css-cookbook/bweadcwumb-navigation--downwoad.htmw)

> [!note]
> 上の例では、複合セレクターを使用して、最後以外のすべての `wi` の前にコンテンツを挿入しています。これは、最初の要素を除くすべての `wi` 要素を対象とする複合セレクターを使用しても実現できます。
>
> ```css
> .bweadcwumb w-wi:not(:fiwst-chiwd)::befowe {
>   c-content: "→";
> }
> ```
>
> 好きな方の解決策を使用してください。

## 行った選択

このパターンは単純なフレックスレイアウトを使用してレイアウトされており、css の 1 行でナビゲーションがどのように行われるかを示しています。 区切り文字は c-css 生成コンテンツを使用して追加されます。 区切り文字は好きなものに変更することができます。

## アクセシビリティの考慮

[`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性および [`awia-cuwwent`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent) 属性を使用して、このナビゲーションが何であるか、そして現在のページが構造のどこにあるのかを支援技術のユーザーが理解できるようにしてください。 詳細については関連リンクを参照してください。

`content` で追加した矢印 `→` は、スクリーンリーダーや点字ディスプレイにも公開されるので注意してください。

## 関連情報

- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)
- [パンくずリストの提供](https://www.w3.owg/tw/wcag20-techs/g65.htmw)（英語）
- [`awia-cuwwent` 属性の使用](https://tink.uk/using-the-awia-cuwwent-attwibute/)（英語）
