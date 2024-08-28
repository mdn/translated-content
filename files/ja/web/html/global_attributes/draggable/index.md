---
title: draggable
slug: Web/HTML/Global_attributes/draggable
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**draggable** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は[列挙型](/ja/docs/Glossary/Enumerated)属性で、要素がブラウザーの既定の動作と [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)のどちらの動作でドラッグできるかを示します。

`draggable` 属性は、厳密には [HTML 名前空間](/ja/docs/Glossary/Namespace)に属する要素に適用することができ、これは [SVG](/ja/docs/Web/SVG) には適用できないことを意味します。
名前空間宣言がどのようなもので、何をするのかについては、[名前空間の速修講座](/ja/docs/Web/SVG/Namespaces_Crash_Course)を参照してください。

`draggable` は以下の値を取ることができます。

- `true`: 要素がドラッグ可能であることを示す
- `false`: 要素はドラッグ不可であることを示す

> [!WARNING]
> この属性は _[列挙型](/ja/docs/Glossary/Enumerated)_ であり、_論理属性_ ではありません。 `true` または `false` の値が必須であり、 `<img draggable>` のような省略形は認められません。正しい使用法は `<img draggable="false">` です。

この属性が設定されなかった場合の既定値は `auto` であり、ブラウザーの既定のドラッグ動作であることを意味します。テキストの選択範囲、画像、リンクのみがドラッグ可能です。他の要素でドラッグ＆ドロップできるようにするためには {{domxref('HTMLElement.dragstart_event', 'ondragstart')}} イベントを設定する必要があります（こちらの[包括的なサンプル](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)にあるように）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
