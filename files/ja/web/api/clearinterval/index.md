---
title: clearInterval()
slug: Web/API/clearInterval
tags:
  - API
  - HTML DOM
  - JavaScript タイマー
  - メソッド
  - リファレンス
  - clearInterval
browser-compat: api.clearInterval
translation_of: Web/API/WindowOrWorkerGlobalScope/clearInterval
original_slug: Web/API/WindowOrWorkerGlobalScope/clearInterval
---
{{APIRef("HTML DOM")}}

グローバルの **`clearInterval()`** メソッドは、以前に {{domxref("setInterval", "setInterval()")}} の呼び出しによって確立されたタイマーを利用した繰り返し動作を取り消します。

## 構文

```js
clearInterval(intervalID)
```

### 引数

- `intervalID`
  - : 取り消す繰り返し動作の識別子です。この ID は対応する `setInterval()` の呼び出しの返値です。

{{domxref("setInterval", "setInterval()")}} と {{domxref("setTimeout", "setTimeout()")}} で使用する ID のプールが共有されていることは注目に値します。つまり、技術的には `clearInterval()` と {{domxref("clearTimeout", "clearTimeout()")}} を交換することができます。
しかし、わかりやすくするために、そうすることは避けるべきです。

### 返値

{{jsxref("undefined")}}

## 例

[`setInterval()` の例](/ja/docs/Web/API/setInterval#examples)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript タイマー](/ja/docs/JavaScript/Timers)
- {{domxref("setTimeout")}}
- {{domxref("setInterval")}}
- {{domxref("clearTimeout")}}
- {{domxref("Window.requestAnimationFrame")}}
- [_デーモン_ 管理](/ja/docs/JavaScript/Timers/Daemons)
