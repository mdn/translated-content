---
title: aria-grabbed
slug: Web/Accessibility/ARIA/Attributes/aria-grabbed
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`aria-grabbed` の状態は、ドラッグ＆ドロップ処理で要素が「つかまれた」状態を示します。 {{deprecated_inline}}

## 解説

テキスト選択、画像、リンクは既定でドラッグ可能です。 HTML5 の [ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) の一部であるグローバルな [`draggable="true"`](/ja/docs/Web/HTML/Global_attributes/draggable) 属性と [`dragstart` イベントハンドラー](/ja/docs/Web/API/HTMLElement/dragstart_event)を設定するには、任意の DOM ノードもドラッグ可能にすることができます。

`aria-grabbed` 属性は、ドラッグ＆ドロップ処理で要素が「つかまれた」状態かどうかを示すために `aria-grabbed="true"` が使用され、要素はつかまれる可能性があるが、現在はつかまれていない状態を示すために `aria-grabbed="false"` が使用されます。

`aria-grabbed="true"` を設定すると、要素がドラッグのために選択されていることを示しす。 `aria-grabbed="false"` を設定すると、要素がドラッグ＆ドロップ処理でつかまれる可能性があるが、現在はつかまれていないことを示します。

`aria-grabbed` が `true` に設定されている場合、すべてのドロップ対象要素の [`aria-dropeffect`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) 属性は、ドロップされたときにつかまれた要素に発生する機能（効果）の種類で更新されなければなりません。要素がつかまれた状態にない場合、すべてのドロップ対象の `aria-dropeffect` 属性を元に戻してください。

`aria-grabbed` プロパティは WAI-ARIA の将来のバージョンで新しい機能に置き換わることが予定されており、非推奨です。

> [!NOTE]
> ARIA はアクセシビリティのある機能を実現するものではありません。 ARIA は、機能の意図する動作を伝えるだけです。

## 値

- `true`
  - : この要素はドラッグのために選択されています。
- `false`
  - : この要素は現在ドラッグするために選択されていませんが、このプロパティを `true` に設定することでドラッグするために利用できるようになります。
- `undefined` （既定値）
  - : この要素はドラッグに対応していません。

## 関連するロール

**ALL** すべての[ロール](/ja/docs/Web/Accessibility/ARIA/Roles)で使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-dropeffect`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [HTML の `draggable` グローバル属性](/ja/docs/Web/HTML/Global_attributes/draggable)
- HTML の[ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
- [Accessible Drag and Drop](https://dev.opera.com/articles/accessible-drag-and-drop/) by Gez Lemon
