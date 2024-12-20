---
title: Selection API
slug: Web/API/Selection_API
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{DefaultAPISidebar("Selection API")}}

> [!NOTE]
> この API は [Web Workers](/ja/docs/Web/API/Web_Workers_API) では _使用できません_。({{domxref("WorkerNavigator")}} 経由では公開されていません)

**Selection API** は、開発者がドキュメントのユーザーに選択されている部分にアクセスしたり操作したりできるようにします。

{{domxref("Window/getSelection()", "Window.getSelection()")}} および {{domxref("Document/getSelection()", "Document.getSelection()")}} メソッドは、ドキュメントのユーザーに選択されている部分を表す {{domxref("Selection")}} オブジェクトを返します。`Selection` オブジェクトは、以下を行うメソッドを提供します。

- 現在選択されているノードにアクセスする。
- 現在の選択を変更する。選択を伸ばしたり、縮めたり、ドキュメントのまったく異なる部分を選択したりする。
- DOM から現在選択されている部分を削除する。

Selection API は、{{domxref("Document")}} で発火する 2 種類のイベントも提供します。

- {{domxref("Node/selectstart_event", "selectstart")}} イベントは、ユーザーが新しく選択を開始したとき発火します。
- {{domxref("Document/selectionchange_event", "selectionchange")}} イベントは、現在の選択範囲が変更されたとき発火します。

## インターフェイス

- {{domxref("Selection")}}
  - : ドキュメントのユーザーによって選択されている部分、またはキャレットの現在の位置を表すインターフェイスです。
- {{domxref("Document/getSelection()", "Document.getSelection()")}}
  - : 現在の選択範囲、またはキャレットの現在の位置を表す `Selection` オブジェクトを返すメソッドです。
- {{domxref("Window/getSelection()", "Window.getSelection()")}}
  - : 現在の選択範囲、またはキャレットの現在の位置を表す `Selection` オブジェクトを返すメソッドです。
- {{domxref("Document/selectionchange_event", "Document.selectionchange")}}
  - : 現在の選択範囲が変更されたとき発火するイベントです。
- {{domxref("Node/selectstart_event", "Node.selectstart")}}
  - : ユーザーが新しく選択を開始したとき発火するイベントです。

## 仕様書

{{Specifications}}
