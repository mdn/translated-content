---
title: clearInterval()
slug: Web/API/clearInterval
l10n:
  sourceCommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{APIRef("HTML DOM")}}

グローバルの **`clearInterval()`** メソッドは、以前に {{domxref("setInterval", "setInterval()")}} の呼び出しによって確立されたタイマーを利用した繰り返し動作を取り消します。
指定された引数で前回確立されたアクションを識別できなかった場合、このメソッドは何も行いません。

## 構文

```js-nolint
clearInterval(intervalID)
```

### 引数

- `intervalID`
  - : 取り消す繰り返し動作の識別子です。この ID は対応する `setInterval()` の呼び出しの返値です。

{{domxref("setInterval", "setInterval()")}} と {{domxref("setTimeout", "setTimeout()")}} で使用する ID のプールが共有されていることは注目に値します。つまり、技術的には `clearInterval()` と {{domxref("clearTimeout", "clearTimeout()")}} を交換することができます。
しかし、わかりやすくするために、そうすることは避けるべきです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[`setInterval()` の例](/ja/docs/Web/API/setInterval#examples)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("setTimeout")}}
- {{domxref("setInterval")}}
- {{domxref("clearTimeout")}}
- {{domxref("Window.requestAnimationFrame")}}
