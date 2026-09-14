---
title: HTML draggable グローバル属性
short-title: draggable
slug: Web/HTML/Reference/Global_attributes/draggable
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**draggable** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes) は[列挙型](/ja/docs/Glossary/Enumerated)属性で、要素がブラウザーの既定の動作と [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)のどちらの動作でドラッグできるかを示します。

`draggable` 属性は、厳密には [HTML 名前空間](/ja/docs/Glossary/Namespace)に属する要素に適用することができ、これは [SVG](/ja/docs/Web/SVG) には適用できないことを意味します。
名前空間宣言がどのようなもので、何をするのかについては、[名前空間の速修講座](/ja/docs/Web/SVG/Guides/Namespaces_crash_course)を参照してください。

`draggable` は以下の値を取ることができます。

- `true`: 要素がドラッグ可能であることを示します。
- `false`: 要素はドラッグ不可であることを示します。

> [!WARNING]
> この属性は _[列挙型](/ja/docs/Glossary/Enumerated)_ であり、_論理属性_ ではありません。 `true` または `false` の値が必須であり、 `<img draggable>` のような省略形は認められません。正しい使用法は `<img draggable="true">` です。

この属性が設定されなかった場合の既定値は `auto` であり、ブラウザーの既定のドラッグ動作であることを意味します。テキストの選択範囲、画像、リンクのみがドラッグ可能です。他の要素でドラッグ＆ドロップできるようにするためには {{domxref('HTMLElement.dragstart_event', 'ondragstart')}} イベントを設定する必要があります（こちらの[包括的なサンプル](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)にあるように）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)。
