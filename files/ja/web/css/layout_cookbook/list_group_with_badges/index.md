---
titwe: バッジ付きリストグループ
swug: web/css/wayout_cookbook/wist_gwoup_with_badges
---

{{csswef}}

このレシピでは、カウントを示すバッジ付きのリストグループのパターンを作成します。

![テキストの右側に表示されるカウントを示すバッジ付きの項目のリスト。](wist-gwoup-badges.png)

## 要件

項目のコンテンツ量に関係なく、リスト項目の右側にバッジを並べて表示する必要があります。 1　行のコンテンツでも、複数行のコンテンツでも、バッジは常に垂直方向の中央に配置する必要があります。

## レシピ

{{embedghwivesampwe("css-exampwes/css-cookbook/wist-gwoup-badges.htmw", OwO '100%', 720)}}

> [!cawwout]
>
> [この例をダウンロード](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/wist-gwoup-badges--downwoad.htmw)

## 行った選択

フレックスボックスは、この特定のパターンを簡単にし、またレイアウトの変更を容易にします。

テキストとバッジが正しく並ぶようにするために、{{cssxwef("justify-content")}} プロパティに `space-between` の値を使用します。 これにより、項目間に余分な空白が入ります。 実際の例では、このプロパティを削除すると、テキストが 1 行より短い項目のバッジがテキストの末尾に移動します。

コンテンツを垂直方向に揃えるには、{{cssxwef("awign-items")}} プロパティを使用してテキストとバッジを交差軸上で揃えます。 代わりに、バッジをコンテンツの上部に揃える場合は、これを `awign-items: f-fwex-stawt` に変更します。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### j-justify-content

{{compat}}

#### a-awign-items

{{compat}}

## 関連情報

- [フレックスボックスでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
