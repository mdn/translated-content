---
title: クリップボード API
slug: Web/API/Clipboard_API
---

{{DefaultAPISidebar("Clipboard API")}}

**クリップボード API** は、クリップボードのコマンド (切り取り、コピー、貼り付け) に応答する機能や、システムクリップボードの非同期の読み取りや書き込みを行う機能を提供します。

> **メモ:** この API は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できません。（{{domxref("WorkerNavigator")}} に公開されていません）。

この API は、 {{domxref("document.execCommand()")}} を使用したクリップボードへのアクセスを置き換えるように設計されています。

> **メモ:** **クリップボード**は、短期間のデータ保存やデータ転送に使用されるデータバッファで、文書間やアプリケーション間で使用することができます。
> 通常、無名で一時的な[データバッファー](https://ja.wikipedia.org/wiki/バッファ)として実装されており、ペーストバッファーと呼ばれることもあります。環境内のほとんどまたはすべてのプログラムから定義された[プログラミングインターフェイス](https://ja.wikipedia.org/wiki/アプリケーションプログラミングインタフェース)を通じてアクセス可能です。
>
> 一般的なアプリケーションでは、これらのインターフェイスに対して、[キーバインド](https://ja.wikipedia.org/wiki/ショートカットキー)、[メニュー選択](<https://ja.wikipedia.org/wiki/メニュー_(コンピュータ)>)などの[ユーザー入力](https://ja.wikipedia.org/wiki/入力)を対応付けることでクリップボード機能にアクセスします。

## クリップボードへのアクセス

`Clipboard` オブジェクトをインスタンス化して生成するのではなく、グローバル変数の {{domxref("Navigator.clipboard")}} を通してシステムクリップボードにアクセスすることができます。

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

このスニペットはクリップボードからテキストを読み取り、最初に見つかった `editor` クラスを持つ要素に追加します。 {{domxref("Clipboard.readText", "readText()")}} (および場合によっては {{domxref("Clipboard.read", "read()")}}) はクリップボードにテキストがないときには空文字列を返すので、このコードは安全です。

## インターフェイス

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : システムクリップボードに対してテキストやデータを読み書きするインターフェイスを提供します。これは仕様書では「非同期クリップボード API」と呼ばれています。
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : クリップボードの変更に関する情報を提供するイベント、すなわち {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}} イベントを表します。これは仕様書では「クリップボードイベント API」と呼ばれています。
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : データの読み書きの際に使用する単一項目形式を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
