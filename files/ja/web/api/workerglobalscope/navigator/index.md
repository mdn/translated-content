---
title: "WorkerGlobalScope: navigator プロパティ"
short-title: navigator
slug: Web/API/WorkerGlobalScope/navigator
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("Web Workers API")}}

**`navigator`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、このワーカーに関連付けられた {{domxref("WorkerNavigator")}} を返します。これは特有の navigator オブジェクトであり、大部分は閲覧スコープの {{domxref("Navigator")}} のサブセットですが、ワーカーに合わせたものです。

## 値

{{domxref("WorkerNavigator")}} オブジェクトです。

## 例

ワーカー内で

```js
console.log(navigator);
```

を呼び出すと（これらは基本的に `self.console.log(self.navigator);` と同等であり、ワーカーのスコープで呼び出されたとき、 {{domxref("WorkerGlobalScope.self")}} で参照されるもの）、 {{domxref("WorkerNavigator")}} オブジェクトが次のようにコンソールに出力されるのが分かるでしょう。

```plain
Object {onLine: true, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) Ap…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36", product: "Gecko", platform: "MacIntel", appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKi…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"…}
    appCodeName: "Mozilla"
    appName: "Netscape"
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    hardwareConcurrency: 4
    onLine: true
    platform: "MacIntel"
    product: "Gecko"
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    __proto__: Object
```

この navigator オブジェクトを使用して、通常の {{domxref("Navigator")}} オブジェクトと同様、実行環境に関するより詳細な情報を得ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("WorkerNavigator")}}
