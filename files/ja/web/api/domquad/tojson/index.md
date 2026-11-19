---
title: "DOMQuad: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/DOMQuad/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`toJSON()`** は {{domxref("DOMQuad")}} インターフェイスのメソッドで、`DOMQuad` オブジェクトを表す、JSON にシリアライズ可能なプレーンオブジェクトを返します。

このメソッドは、[JSON](/ja/docs/Glossary/JSON) のシリアライズ中に `DOMQuad` オブジェクトに遭遇すると、{{jsxref("JSON.stringify()")}} によって自動的に呼び出されます。シリアライズされた値は、その後 {{jsxref("JSON.parse()")}} の復元関数内で {{domxref("DOMQuad/fromQuad_static", "DOMQuad.fromQuad()")}} 関数を使用してデシリアライズできます。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

次のプロパティを含む、JSON にシリアライズ可能なプレーンオブジェクトです。

- {{domxref("DOMQuad/p1", "p1")}}
- {{domxref("DOMQuad/p2", "p2")}}
- {{domxref("DOMQuad/p3", "p3")}}
- {{domxref("DOMQuad/p4", "p4")}}

各プロパティの値はそのままコピーされます。返されたオブジェクトを {{jsxref("JSON.stringify()")}} に渡すと、`p1`、`p2`、`p3`、`p4` プロパティはさらに {{domxref("DOMPointReadOnly/toJSON", "DOMPointReadOnly.toJSON()")}} を使用してシリアライズされます。

## 例

### toJSON() を直接呼び出す

この例では、`DOMQuad` オブジェクトを作成します。`toJSON()` を直接呼び出すと、プレーンオブジェクトが返されます。そのプロパティの値は、元のオブジェクトの対応するプロパティの値と同じです。

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);
const topRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY,
);
const bottomLeft = new DOMPoint(
  window.screenX,
  window.screenY + window.innerHeight,
);
const bottomRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY + window.innerHeight,
);

const quad = new DOMQuad(topLeft, topRight, bottomRight, bottomLeft);

const json = quad.toJSON();
console.log(json); // プレーンオブジェクト
console.log(typeof json); // "object"
console.log(json.p1.x); // quad.p1.x と同じ値
```

### JSON 文字列へのシリアライズ

前の例の `DOMQuad` オブジェクトは、{{jsxref("JSON.stringify()")}} を使用してシリアライズされます。このメソッドは `toJSON()` メソッドを自動的に呼び出します。

```js
const quadJSON = JSON.stringify(quad);
console.log(quadJSON);
```

画面座標が `(0, 0)` で、内側の幅が `800`、内側の高さが `600` のウィンドウの場合、次のような JSON 文字列がログ出力されます（読みやすさのために整形しています）。

```json
{
  "p1": {
    "x": 0,
    "y": 0,
    "z": 0,
    "w": 1
  },
  "p2": {
    "x": 800,
    "y": 0,
    "z": 0,
    "w": 1
  },
  "p3": {
    "x": 800,
    "y": 600,
    "z": 0,
    "w": 1
  },
  "p4": {
    "x": 0,
    "y": 600,
    "z": 0,
    "w": 1
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
