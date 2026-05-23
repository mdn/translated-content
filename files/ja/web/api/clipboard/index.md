---
title: Clipboard
slug: Web/API/Clipboard
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

**`Clipboard`** は[クリップボード API](/ja/docs/Web/API/Clipboard_API) のインターフェイスで、システムクリップボードの内容に対する読み取りと書き込みのアクセス提供します。
これによって、ウェブアプリケーションに切り取り（カット）、コピー（複写）、貼り付け（ペースト）の機能を実装することができます。

{{InheritanceDiagram}}

システムクリップボードは、グローバルの {{domxref("Navigator.clipboard")}} プロパティにより公開されています。

クリップボード API のすべてのメソッドは非同期で動作します。これらは {{jsxref("Promise")}} を返しますが、これはクリップボードへのアクセスが完了すると解決されます。
クリップボードへのアクセスが拒否された場合、このプロミスは拒否されます。

すべてのメソッドで、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)が要求されます。
API を使用する際のその他の要件については、API の概要トピックにある[セキュリティの注意事項](/ja/docs/Web/API/Clipboard_API#セキュリティの考慮)の節で説明されています。

## インスタンスメソッド

_`Clipboard` は、{{domxref("EventTarget")}} インターフェイスに基づいており、そのメソッドを含みます。_

- {{domxref("Clipboard.read()","read()")}}
  - : クリップボードから任意のデータ (画像など) を要求し、プロミス ({{jsxref("Promise")}}) を返します。データが取得されたとき、このプロミスはクリップボードの内容を保持する {{domxref("ClipboardItem")}} オブジェクトの配列に解決されます。
- {{domxref("Clipboard.readText()","readText()")}}
  - : システムクリップボードにテキストを要求します。利用可能になるとクリップボードのテキストを含む文字列により履行される {{jsxref("Promise")}} を返します。
- {{domxref("Clipboard.write()","write()")}}
  - : システムのクリップボードに任意のデータを書き込み、操作が完了した時点で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : システムクリップボードにテキストを書き込み、そのテキストがクリップボードに完全にコピーされたときに解決する {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("Clipboard.clipboardchange_event","clipboardchange")}} {{experimental_inline}}
  - : システムのクリップボードのコンテンツが何らかの方法で変更された際に発生します。例えば、システムのコピーコマンドや、{{domxref("Clipboard.writeText()")}} のような API メソッドによる変更などが該当します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.execCommand()")}}
