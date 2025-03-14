---
title: コンソール API
slug: Web/API/Console_API
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{DefaultAPISidebar("Console API")}} {{AvailableInWorkers}}

コンソール API (Console API) には、開発者がデバッグ作業（メッセージ、コード内の設定点での変数の値、操作の完了にかかった時間などの記録）を実行できるようにする機能が用意されています。

## 概念と使用方法

コンソール API は、主に独自の API として始められ、さまざまなブラウザーでは、実装上の不整合はあったものの、実装が行われてきました。 [Console API 仕様](https://console.spec.whatwg.org/)は、一貫した振る舞いを定義するために作成されました。 すべての最新のブラウザーは、最終的にこの振る舞いの実装に落ち着きましたが、一部の実装には独自の機能がまだ追加されています。 これらについては、次をご覧ください。

- [Google Chrome の開発ツールの実装](https://developer.chrome.com/docs/devtools/console/api/)
- [Safari の開発ツールの実装](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

使用方法は非常に簡単です。{{domxref("console")}} オブジェクトには、基本的なデバッグ作業を実行するために呼び出すことができる多くのメソッドが含まれており、通常はブラウザーの[ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)にさまざまな値をログ出力することに焦点を当てています。

最も一般的に使用されるメソッドは {{domxref("console/log_static", "console.log()")}} で、特定の変数に含まれる現在の値を記録するために使用します。

## インターフェイス

- {{domxref("console")}}
  - : 記録、スタックトレース、タイマー、カウンターなどの基本的なデバッグ機能を提供します。

## 例

```js
let myString = "Hello world";

// "Hello world" をコンソールに出力
console.log(myString);
```

その他の例については、[console](/ja/docs/Web/API/console) のリファレンスページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [開発ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — Firefox のウェブコンソールがコンソール API の呼び出しを処理する方法
- [リモートデバッグ](https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/index.html) — デバッグ対象がモバイルデバイスである場合のコンソール出力の表示方法
