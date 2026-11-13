---
title: "DOMRectReadOnly: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/DOMRectReadOnly/toJSON
l10n:
  sourceCommit: 9f09d944bca13b61293b4cc93cb52011c6134b0d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

{{domxref("DOMRectReadOnly")}} の `toJSON()` メソッドは、この `DOMRectReadOnly` オブジェクトの {{Glossary("JSON")}} 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

新しいオブジェクト。そのプロパティは、メソッドが呼び出された `DOMRectReadOnly` の値に設定されます。

## 例

この例では、位置 `(10, 20)`、幅 `100`、高さ `50` の矩形を表す {{domxref("DOMRectReadOnly")}} を作成します。次に、`toJSON()` を呼び出して、矩形の JSON 表現を取得します。

```js
const rect = new DOMRectReadOnly(10, 20, 100, 50);

const rectJSON = rect.toJSON();
console.log(rectJSON);
// 出力: { x: 10, y: 20, width: 100, height: 50, top: 20, right: 110, bottom: 70, left: 10 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
