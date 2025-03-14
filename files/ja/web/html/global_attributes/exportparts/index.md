---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`exportparts`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) では、ネストした{{Glossary("shadow tree", "シャドウツリー")}}内に存在する要素を部品 (`part`) 名でエクスポートして、そのスタイルを選択できるようにすることができます。

シャドウツリーは、識別子、クラス、スタイルが、通常の DOM に属するセレクターやクエリーによって到達することができない孤立した構造体です。
シャドウツリーに存在する要素に、その外部で作成された CSS ルールによってスタイルを適用するには、[`part`](/ja/docs/Web/HTML/Global_attributes#part) グローバル属性を使用する必要があります。これは、シャドウツリーに表示される要素に割り当てる必要があり、その値は何らかの識別子である必要があります。
シャドウツリーの外部にあるルールは、引数と同じ識別子を持つ {{CSSxRef("::part")}} 擬似要素を使用しなければなりません。

グローバル属性 [`part`](/ja/docs/Web/HTML/Global_attributes#part) は、その要素を単一の深さのレベルでだけ見えるようにします。シャドウツリーが入れ子になっている場合、パートはシャドウツリーの親にのみ表示され、その祖先には表示されません。さらに下の階層にパーツをエクスポートするには、まさに `exportparts` 属性が必要です。

`exportparts` 属性は _シャドウホスト_、すなわち _シャドウツリー_ が装着されている要素に配置しなければなりません。値はシャドウツリーに存在している部品名のカンマ区切りのリストで、これらが現在の構造体の外側の DOM から利用できるようになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
