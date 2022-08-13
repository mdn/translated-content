---
title: Clipboard
slug: Web/API/Clipboard
tags:
  - API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Editing
  - Interface
  - Pasteboard
  - Reference
  - copy
  - paste
translation_of: Web/API/Clipboard
---
{{APIRef("Clipboard API")}}

> **Note:** **クリップボード**とは、短期間のデータ格納や転送のために使われるバッファであり、文書やアプリケーションの間で使われます。
> これは、通常名前のない一時的な[バッファ](https://ja.wikipedia.org/wiki/バッファ "Data buffer")として実装され、貼り付けバッファと呼ばれることもあり、その環境で定義された[アプリケーションプログラムインターフェイス](https://ja.wikipedia.org/wiki/アプリケーションプログラミングインタフェース "Application programming interface")を使うことで、ほとんど全てのプログラムがアクセスすることができます。多くのアプリケーションでは、[ショートカットキー](https://ja.wikipedia.org/wiki/ショートカットキー)や[メニュー](<https://ja.wikipedia.org/wiki/メニュー_(コンピュータ)>)など、このインターフェイスに結び付けられた[ユーザーからの入力](https://ja.wikipedia.org/wiki/入出力)を使うことにより、クリップボード機能にアクセスします。

**`Clipboard`** インターフェイスは [Clipboard API](/ja/docs/Web/API/Clipboard_API) を実装します。この API は、ユーザーが許可する場合、システムクリップボードの内容に対する読み取りと書き込みの両方を提供します。 Clipboard API は、ウェブアプリケーションにカット (切り取り)、コピー (複写)、ペースト (貼り付け) の機能を実装するために使うことができます。

システムクリップボードは、グローバルの {{domxref("Navigator.clipboard")}} プロパティにより公開されています。

`Clipboard` オブジェクトのメソッド呼び出しは、ユーザーが [Permissions API](/ja/docs/Web/API/Permissions_API) と `"clipboard-read"` や `"clipboard-write"` パーミッションを適切に使って必要なパーミッションを与えていない場合、成功しません。

> **Note:** **注意:** 現実には、ブラウザーがクリップボードへアクセスする場合に必要となることは、非常に多岐に渡ります。詳細は [クリップボードの可用性](#clipboard_availability) を参照してください。

Clipboard API の全てのメソッドは非同期で動作します。つまり、それらはクリップボードにアクセスできたときに解決される {{jsxref("Promise")}} オブジェクトを返します。この Promise は、クリップボードへのアクセスが拒絶された場合には拒否されます。

## メソッド

_`Clipboard` は、{{domxref("EventTarget")}} インターフェイスに基づいており、そのメソッドを含みます。_

- {{domxref("Clipboard.read()","read()")}}
  - : クリップボードから任意のデータ (画像など) を要求し、{jsxref("Promise")}} を返します。データが取得されたとき、この Promise はそのデータを提供する {{domxref("DataTransfer")}} オブジェクトにより解決されます。
- {{domxref("Clipboard.readText()","readText()")}}
  - : システムクリップボードからテキストを要求します。利用可能になるとクリップボードのテキストを含む {{domxref("DOMString")}} により解決される `Promise` を返します。
- {{domxref("Clipboard.write()","write()")}}
  - : システムクリップボードに任意のデータを書き込みます。この非同期操作は、返された `Promise` が解決することにより、その操作が完了したことを示します。
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : システムクリップボードにテキストを書き込み、そのテキストがクリップボードに完全にコピーされたときに解決する `Promise` を返します。

## クリップボードの可用性

非同期の Clipboard API は比較的最近追加されたものであり、ブラウザーへの実装プロセスはまだ完了していません。潜在的なセキュリティ懸念事項や技術的複雑さの両方により、ほとんどのブラウザーはこの API の統合を少しずつ行っています。

例えば、Firefox はまだ `"clipboard-read"` と `"clipboard-write"` パーミッションをサポートしていないため、これとは異なる方法でクリップボードの内容にアクセスし変更するメソッドへのアクセスを制限します。

WebExtension の場合、clipboardRead や clipboardWrite パーミッションを要求することで clipboard.readText() や clipboard.writeText() を使うことができます。HTTP サイトに適用されたコンテンツスクリプトは、Clipboard オブジェクトにアクセスすることはできません。[Extensions in Firefox 63](https://blog.mozilla.org/addons/2018/08/31/extensions-in-firefox-63/) を参照してください。

また、{{domxref("Clipboard.read", "read()")}} と {{domxref("Clipboard.write", "write()")}} はデフォルトで無効にされており、これらを有効にするには設定を変更する必要があります。これらを使う前にブラウザー実装状況の表を確認してください。

## 仕様書

| 仕様書                                                                               | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Clipboard API','#clipboard-interface','Clipboard')}} | {{Spec2('Clipboard API')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.Clipboard")}}

## 関連情報

- {{domxref("Document.execCommand()")}}
