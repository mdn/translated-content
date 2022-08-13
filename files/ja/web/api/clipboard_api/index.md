---
title: クリップボード API
slug: Web/API/Clipboard_API
tags:
  - API
  - Async Clipboard API
  - Clipboard
  - Clipboard API
  - Clipboard Event API
  - ClipboardEvent
  - Landing
  - Reference
translation_of: Web/API/Clipboard_API
---
{{DefaultAPISidebar("Clipboard API")}}

**クリップボード API** は、クリップボードのコマンド (切り取り、コピー、貼り付け) に応答する機能や、システムクリップボードの非同期の読み取りや書き込みを行う機能を提供します。クリップボードの内容へのアクセスは、 [Permissions API](/ja/docs/Web/API/Permissions_API) によって制限されています。ユーザーの許可がなければ、クリップボードの内容の読み取りや変更は許可されません。

この API は、 {{domxref("document.execCommand()")}} を使用したクリップボードへのアクセスに取って代わるように設計されています。

## クリップボードへのアクセス

`Clipboard` オブジェクトをインスタンス化して生成するのではなく、システムクリップボードにはグローバル変数の {{domxref("Navigator.clipboard")}} を通してアクセスすることができます。

```js
navigator.clipboard.readText().then(
  clipText => document.querySelector(".editor").innerText += clipText);
```

このスニペットはクリップボードからテキストを読み取り、最初に見つかった `editor` クラスを持つ要素に追加します。 {{domxref("Clipboard.readText", "readText()")}} (および場合によっては {{domxref("Clipboard.read", "read()")}}) はクリップボードにテキストがないときには空文字列を返すので、このコードは安全です。

## インターフェイス

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : システムクリップボードに対してテキストやデータを読み書きするインターフェイスを提供します。これは仕様書では 'Async Clipboard API' と呼ばれています。
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : クリップボードの変更に関する情報を提供するイベント、すなわち {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}} イベントを表します。これは仕様書では 'Clipboard Event API' と呼ばれています。

## 仕様書

| 仕様書                                   | 状態                                 | 備考     |
| ---------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Clipboard API')}} | {{Spec2('Clipboard API')}} | 初回定義 |

## ブラウザーの互換性

### `Clipboard`

{{Compat("api.Clipboard")}}

### `ClipboardEvent`

{{Compat("api.ClipboardEvent")}}

## 関連情報

- [Permissions API](/ja/docs/Web/API/Permissions_API)
- [Permissions API の利用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)
