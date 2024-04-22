---
title: Clipboard
slug: Web/API/Clipboard
---

{{APIRef("Clipboard API")}} {{SecureContext_Header}}

**`Clipboard`** インターフェイスは[クリップボード API](/ja/docs/Web/API/Clipboard_API) を実装し、ユーザーが許可する場合、システムクリップボードの内容に対する読み取りと書き込みの両方を提供します。クリップボード API は、ウェブアプリケーションに切り取り（カット）、コピー（複写）、貼り付け（ペースト）の機能を実装するために使うことができます。

{{InheritanceDiagram}}

システムクリップボードは、グローバルの {{domxref("Navigator.clipboard")}} プロパティにより公開されています。

`Clipboard` オブジェクトのメソッド呼び出しは、ユーザーが[権限 API](/ja/docs/Web/API/Permissions_API) を使用して `'clipboard-read'` や `'clipboard-write'` 権限を取得していないと、成功しません。

> **メモ:** 現実には、ブラウザーがクリップボードへアクセスする場合に必要となることは、非常に多岐に渡ります。詳細は[クリップボードの可用性](#クリップボードの可用性)を参照してください。

</div>

クリップボード API の全てのメソッドは非同期で動作します。それらはクリップボードにアクセスできたときに解決されるプロミス（{{jsxref("Promise")}} オブジェクト）を返します。このプロミスは、クリップボードへのアクセスが拒否された場合には拒否されます。

## メソッド

_`Clipboard` は、{{domxref("EventTarget")}} インターフェイスに基づいており、そのメソッドを含みます。_

- {{domxref("Clipboard.read()","read()")}}
  - : クリップボードから任意のデータ (画像など) を要求し、プロミス（{{jsxref("Promise")}}）を返します。データが取得されたとき、このプロミスはクリップボードの内容を保持する {{domxref("ClipboardItem")}} オブジェクトの配列に解決されます。
- {{domxref("Clipboard.readText()","readText()")}}
  - : システムクリップボードにテキストを要求します。利用可能になるとクリップボードのテキストを含む文字列により解決される `Promise` を返します。
- {{domxref("Clipboard.write()","write()")}}
  - : システムクリップボードに任意のデータを書き込みます。この非同期操作は、返された `Promise` が解決することにより、その操作が完了したことを示します。
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : システムクリップボードにテキストを書き込み、そのテキストがクリップボードに完全にコピーされたときに解決する `Promise` を返します。

## クリップボードの可用性

非同期のクリップボード API は比較的最近追加されたものであり、ブラウザーへの実装プロセスはまだ完了していません。潜在的なセキュリティ懸念事項や技術的複雑さの両方により、ほとんどのブラウザーはこの API の統合を少しずつ行っています。詳しくは下記の[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

ブラウザー拡張機能の場合、 WebExtension の [`clipboard`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/clipboard) API を使用してシステムクリップボードにアクセスすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.execCommand()")}}
