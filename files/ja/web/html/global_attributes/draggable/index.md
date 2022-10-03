---
title: draggable
slug: Web/HTML/Global_attributes/draggable
---

{{HTMLSidebar("Global_attributes")}}

**draggable** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は列挙型属性で、要素がブラウザーの本来の動作と [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) のどちらの動作でドラッグするかを示す列挙型属性です。

`draggable` は以下の値を取ることができます。

- `true`: 要素がドラッグ可能であることを示す
- `false`: 要素はドラッグ不可であることを示す

> **警告:** この属性は*列挙型*であり、*論理型*ではありません。 `true` または `false` の値が必須であり、 `<img draggable>` のような省略形は認められません。正しい使用法は `<img draggable="false">` です。

この属性が設定されなかった場合の既定値は `auto` であり、ブラウザーの既定のドラッグ動作であることを意味します。テキストの選択範囲、画像、リンクのみがドラッグ可能です。他の要素では、ドラッグ＆ドロップできるようにするためには {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} イベントを設定する必要があります (こちらの[包括的なサンプル](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)にあるように)。

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "interaction.html#the-draggable-attribute", "draggable")}} | {{Spec2("HTML WHATWG")}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。 |
| {{SpecName("HTML5.2", "interaction.html#the-draggable-attribute", "draggable")}}     | {{Spec2("HTML5.2")}}     | 変更なし                                                                     |
| {{SpecName("HTML5.1", "editing.html#the-draggable-attribute", "draggable")}}             | {{Spec2("HTML5.1")}}     | {{SpecName('HTML WHATWG')}} のスナップショット、初回定義。          |

## ブラウザーの互換性

{{Compat("html.global_attributes.draggable")}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
