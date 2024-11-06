---
title: "NavigatorUAData: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/NavigatorUAData/toJSON
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`toJSON()`** は {{domxref("NavigatorUAData")}} インターフェイスのメソッドで、インターフェイスは、 `NavigatorUAData` オブジェクトの低エントロピーのプロパティの JSON 表現を返す _シリアライザー_ です。

> [!NOTE]
> 高エントロピーと低エントロピーという用語は、これらの値がブラウザーについて明らかにする情報の量を参照します。このメソッドで返される低エントロピーの値は、ユーザーを特定できるような情報を明らかにしない値です。高エントロピーの値は {{domxref("NavigatorUAData.getHighEntropyValues()")}} メソッドによってのみ返すことができます。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

JSON オブジェクトです。

## 例

次の例は、 JSON オブジェクトをコンソールに表示します。

```js
console.log(navigator.userAgentData.toJSON());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
