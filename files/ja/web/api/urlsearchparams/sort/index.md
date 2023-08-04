---
title: "URLSearchParams: sort() メソッド"
short-title: sort()
slug: Web/API/URLSearchParams/sort
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("URL API")}}

**`URLSearchParams.sort()`** メソッドは、このオブジェクトに含まれるすべてのキー/値のペアをその場でソートし、`undefined` を返します。 ソート順は、キーの Unicode コードポイントに従います。 このメソッドは、安定したソートアルゴリズムを使用します（つまり、等しいキーを持つキー/値のペア間の相対的な順序が保持されます）。

{{availableinworkers}}

## 構文

```js-nolint
sort()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// キー/値のペアのソート
searchParams.sort();

// ソートされたクエリー文字列の表示
console.log(searchParams.toString());
```

結果は次のとおりです。

```plain
a=2&a=1&b=3&c=4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
