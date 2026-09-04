---
title: "Selection: isCollapsed プロパティ"
short-title: isCollapsed
slug: Web/API/Selection/isCollapsed
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ ApiRef("DOM") }}

**`Selection.isCollapsed`** は読み取り専用のプロパティで、現在テキストが選択されているかどうかを示す論理値を返します。選択範囲の開始点と終了点がコンテンツ内の同じ位置にある場合、テキストは選択されていません。

選択範囲が収縮状態であっても、1 つ（Gecko では 1 つ以上）の {{domxref("Range")}} が存在する場合があるため、{{domxref("Selection.rangeCount")}} がゼロになるとは限らないことに注意してください。その場合、{{domxref("Selection")}} オブジェクトの {{domxref("Selection.getRangeAt", "getRangeAt()")}} メソッドを呼び出すと、収縮状態の `Range` オブジェクトが返される可能性があります。

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection")}}
- {{domxref("Range")}}
