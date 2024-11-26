---
title: クリップボード API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: aa02c85428e4ebdf2df8a84f97f0a6cabefdf813
---

{{DefaultAPISidebar("Clipboard API")}}

**クリップボード API** は、クリップボードのコマンド (切り取り、コピー、貼り付け) に応答する機能や、システムクリップボードの非同期の読み取りや書き込みを行う機能を提供します。

> [!NOTE]
> クリップボードにアクセスするには、非推奨の {{domxref("document.execCommand()")}} メソッドよりもこの API を優先して使用してください。

> [!NOTE]
> この API は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できません。（{{domxref("WorkerNavigator")}} に公開されていません）。

## 概念と使用法

システムクリップボードは、ブラウザーが動作しているオペレーティングシステムに属するデータバッファーであり、短期間のデータ保存や文書またはアプリケーション間のデータ転送に使用します。
通常、無名で一時的な[データバッファー](https://ja.wikipedia.org/wiki/バッファ)として実装されており、ペーストバッファーと呼ばれることもあります。環境内のほとんどまたはすべてのプログラムから定義されたプログラミングインターフェイスを通じてアクセス可能です。

クリップボード API を使うと、ユーザーは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)の中で、[セキュリティに関する考慮事項](#セキュリティの考慮)で指定された条件が成立する限り、テキストや他にも様々な種類のデータをクリップボードにプログラムで読み書きすることができます。

イベントは切り取り ({{domxref("Element/cut_event", "cut")}})、コピー ({{domxref("Element/copy_event", "copy")}})、貼り付け ({{domxref("Element/paste_event", "paste")}}) 操作がクリップボードを変更した結果として発行されます。
イベントには既定のアクションがあり、例えば `copy` アクションは既定では現在の選択部分をシステムクリップボードにコピーします。
既定のアクションはイベントハンドラーで上書きすることができます。詳細は各イベントを参照してください。

## インターフェイス

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : システムクリップボードに対してテキストやデータを読み書きするインターフェイスを提供します。
    これは仕様書では「非同期クリップボード API」と呼ばれています。
- {{domxref("ClipboardEvent")}}
  - : クリップボードの変更に関する情報を提供するイベント、すなわち {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}} イベントを表します。これは仕様書では「クリップボードイベント API」と呼ばれています。
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : データの読み書きの際に使用する単一項目形式を表します。

### 他のインターフェイスへの拡張

クリップボード API は以下の API を拡張し、掲載されている機能を追加しています。

- {{domxref("Navigator.clipboard")}} {{readonlyinline}} {{securecontext_inline}}
  - : システムクリップボードへの読み書きアクセスを提供する {{domxref("Clipboard")}} オブジェクトを返します。
- [`Element: copy`](/ja/docs/Web/API/Element/copy_event) イベント
  - : ユーザーがコピー操作を行うたびに発行されるイベントです。
- [`Element: cut`](/ja/docs/Web/API/Element/cut_event) イベント
  - : ユーザーが切り取り操作を行うたびに発行されるイベントです。
- [`Element: paste`](/ja/docs/Web/API/Element/paste_event) イベント
  - : ユーザーが貼り付け操作を行うたびに発行されるイベントです。

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## セキュリティの考慮

クリップボード API は、ユーザーが[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)のシステムクリップボードとの間で、テキストや他の種類のデータをプログラムで読み書きすることをできるようにします。

この仕様では、クリップボードから読み取るために、ユーザーが最近ページを操作したことが要求されます（[単発のユーザーの活性化](/ja/docs/Web/Security/User_activation)が必要です）。
読み取り処理がブラウザーやOSの「貼り付け要素」（コンテキストメニューなど）とのユーザー対話によって発生した場合、ブラウザーはユーザーに確認を促すことが期待されます。
クリップボードに書き込む場合、詳細度はページが[権限 API](/ja/docs/Web/API/Permissions_API) の `clipboard-write` 権限を持つことを期待し、ブラウザーは[単発のユーザー活性化](/ja/docs/Web/Security/User_activation)も要求されるかもしれません。
ブラウザーはクリップボードにアクセスするメソッドを使用する際に、さらに制限を加えるかもしれません。

ブラウザーの実装は仕様から乖離しています。
その違いは[ブラウザーの互換性](#ブラウザーの互換性)の節にまとめられており、現在の状態の概要は下記の通りです。

Chromium 系のブラウザー:

- 読み取りには[権限 API](/ja/docs/Web/API/Permissions_API) の `clipboard-read` 権限が要求されます。
  単発の活性化は要求されません。
- 書き込みには `clipboard-read` 権限または単発の活性化が要求されます。
  権限が付与された場合、その権限は維持され、それ以上の単発の活性化は要求されません。
- クリップボードにアクセスする {{HTMLElement("iframe")}} 要素には、HTTP の[Permissions-Policy](/ja/docs/Web/HTTP/Headers/Permissions-Policy) の `clipboard-read` と `clipboard-write` の権限を許可しなければなりません。
- ブラウザーや OS の「貼り付け要素」によって読み取り処理が発生した場合、持続的な貼り付けプロンプトは表示されません。

Firefox および Safari:

- 読み書きには単発の活性化が要求されます。
- 同じオリジンのクリップボードのコンテンツを読み込む場合、paste-prompt は抑制されますが、オリジン間のコンテンツは抑制されません。
- `clipboard-read` と `clipboard-write` 権限は Firefox や Safari では対応していません（対応する予定もありません）。

Firefox の [Web Extensions](/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- テキストの読み込みは、Web Extension [`clipboardRead`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) 権限を持つ拡張機能でのみ利用できます。
  その権限があれば、拡張機能は単発の活性化や貼り付けのプロンプトを要求されません。
- テキストの書き込みは、安全なコンテキストと単発の活性化で利用できます。
  Web Extension の [`clipboardWrite`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) 権限では、単発の活性化は要求されません。

## 例

## クリップボードへのアクセス

システムクリップボードには、グローバルの {{domxref("Navigator.clipboard")}} を通してアクセスします。

このスニペットはクリップボードからテキストを読み取り、最初に見つかった `editor` クラスを持つ要素に追加します。
{{domxref("Clipboard.readText", "readText()")}} (および場合によっては {{domxref("Clipboard.read", "read()")}}) はクリップボードにテキストがないときには空文字列を返すので、このコードは安全です。

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
