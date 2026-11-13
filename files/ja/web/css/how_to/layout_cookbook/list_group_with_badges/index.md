---
title: バッジ付きリストグループ
slug: Web/CSS/How_to/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

このレシピでは、個数を示すバッジ付きのリストグループのパターンを作成します。

![テキストの右側に表示される個数を示すバッジ付きのアイテムのリスト。](list-group-badges.png)

## 要件

リストアイテムはバッジをつけて表示させるべきです。バッジは右揃えにし、縦方向に中央揃えに配置します。コンテンツが単一の行であっても複数行であっても、バッジは必ず縦方向に中央揃えにしてください。

## レシピ

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___list-group-badges-example
<ul class="list-group">
  <li>
    Item One
    <span class="badge">2</span>
  </li>
  <li>
    Item Two
    <span class="badge">10</span>
  </li>
  <li>
    Item Three
    <span class="badge">9</span>
  </li>
  <li>
    Item Four
    <span class="badge">0</span>
  </li>
</ul>
```

```css live-sample___list-group-badges-example
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 0;
  margin: 1em;
}
.list-group {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #cccccc;
  border-radius: 0.5em;
  width: 20em;
}

.list-group li {
  border-top: 1px solid #cccccc;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-group li:first-child {
  border-top: 0;
}

.list-group .badge {
  background-color: rebeccapurple;
  color: white;
  font-weight: bold;
  font-size: 80%;
  border-radius: 10em;
  min-width: 1.5em;
  padding: 0.25em;
  text-align: center;
}
```

{{EmbedLiveSample("list-group-badges-example", "", "250px")}}

## 選択したもの

フレックスボックスは、この特定のパターンを簡単にし、またレイアウトの変更を容易にします。

テキストとバッジが正しく並ぶようにするために、{{cssxref("justify-content")}} プロパティに `space-between` の値を使用します。 これにより、アイテム間に余分な空白が入ります。 実際の例では、このプロパティを削除すると、テキストが 1 行より短いアイテムのバッジがテキストの末尾に移動します。

コンテンツを垂直方向に揃えるには、{{cssxref("align-items")}} プロパティを使用してテキストとバッジを交差軸上で揃えます。 代わりに、バッジをコンテンツの上部に揃える場合は、これを `align-items: flex-start` に変更します。

## 関連情報

- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)
