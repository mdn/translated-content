---
title: Console API
slug: Web/API/Console_API
---

{{DefaultAPISidebar("Console API")}}

Console API（コンソール API）には、開発者がデバッグ作業（メッセージ、コード内の設定点での変数の値、操作の完了にかかった時間などの記録）を実行できるようにする機能が用意されています。

## 概念と使用方法

Console API は、一貫性のない方法ではありますが、さまざまなブラウザーで実装されている、大部分が独自の API として始まりました。 [Console API 仕様](https://console.spec.whatwg.org/)は、一貫した振る舞いを定義するために作成されました。 すべての最新のブラウザーは、最終的にこの振る舞いの実装に落ち着きましたが、一部の実装には独自の機能がまだ追加されています。 これらについては、次をご覧ください。

- [Google Chrome の開発ツールの実装](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Safari の開発ツールの実装](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

使用方法は非常に簡単です — {{domxref("console")}} オブジェクト — {{domxref("window.console")}} またはワーカーの {{domxref("WorkerGlobalScope.console")}} を介して利用できます。 `console` のみを使用してアクセスできます — 基本的なデバッグ作業を実行するために呼び出すことができる多くのメソッドが含まれています。 通常は、ブラウザーの[ウェブコンソール](/ja/docs/Tools/Web_Console)にさまざまな値を記録することに焦点を当てています。

最も一般的に使用されるメソッドは {{domxref("console.log")}} で、特定の変数に含まれる現在の値を記録するために使用します。

## インターフェイス

- {{domxref("console")}}
  - : 記録、スタックトレース、タイマー、カウンターなどの基本的なデバッグ機能を提供します。

## 例

```js
let myString = "Hello world";

// "Hello world" をコンソールに出力
console.log(myString);
```

その他の例については、[`console` のリファレンスページ](/ja/docs/Web/API/Console#Usage)を参照してください。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [開発ツール](/ja/docs/Tools)
- [ウェブコンソール](/ja/docs/Tools/Web_Console) — Firefox のウェブコンソールが Console API の呼び出しを処理する方法
- [リモートデバッグ](/ja/docs/Tools/Remote_Debugging) — デバッグ対象がモバイルデバイスである場合のコンソール出力の表示方法
