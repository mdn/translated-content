---
title: バッジ付きリストグループ
slug: Web/CSS/Layout_cookbook/List_group_with_badges
tags:
  - CSS
  - ガイド
  - レイアウト
  - ボックス配置
  - 料理帳
  - フレックスボックス
  - リスト
translation_of: Web/CSS/Layout_cookbook/List_group_with_badges
---
{{CSSRef}}

このレシピでは、カウントを示すバッジ付きのリストグループのパターンを作成します。

![テキストの右側に表示されるカウントを示すバッジ付きの項目のリスト。](list-group-badges.png)

## 要件

項目のコンテンツ量に関係なく、リスト項目の右側にバッジを並べて表示する必要があります。 1　行のコンテンツでも、複数行のコンテンツでも、バッジは常に垂直方向の中央に配置する必要があります。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/list-group-badges.html", '100%', 720)}}

> **Callout:**
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/master/css-cookbook/list-group-badges--download.html)

## 行った選択

フレックスボックスは、この特定のパターンを簡単にし、またレイアウトの変更を容易にします。

テキストとバッジが正しく並ぶようにするために、{{cssxref("justify-content")}} プロパティに `space-between` の値を使用します。 これにより、項目間に余分な空白が入ります。 実際の例では、このプロパティを削除すると、テキストが 1 行より短い項目のバッジがテキストの末尾に移動します。

コンテンツを垂直方向に揃えるには、{{cssxref("align-items")}} プロパティを使用してテキストとバッジを交差軸上で揃えます。 代わりに、バッジをコンテンツの上部に揃える場合は、これを `align-items: flex-start` に変更します。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### justify-content

{{Compat("css.properties.justify-content")}}

#### align-items

{{Compat("css.properties.align-items")}}

## 関連情報

- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
