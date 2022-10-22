---
title: URLSearchParams.sort()
slug: Web/API/URLSearchParams/sort
---

{{APIRef("URL API")}}

**`URLSearchParams.sort()`** メソッドは、このオブジェクトに含まれるすべてのキー/値のペアをその場でソートし、`undefined` を返します。 ソート順は、キーの Unicode コードポイントに従っています。 このメソッドは、安定したソートアルゴリズムを使用します（つまり、等しいキーを持つキー/値のペア間の相対的な順序が保持されます）。

{{availableinworkers}}

## 構文

```
searchParams.sort();
```

### パラメーター

なし。

### 戻り値

`undefined`。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
var searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// キー/値のペアのソート
searchParams.sort();

// ソートされたクエリー文字列の表示
console.log(searchParams.toString());
```

結果は次のとおりです。

```
a=2&a=1&b=3&c=4
```

## 仕様

| 仕様                                                                         | 状態                 | コメント |
| ---------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-sort','sort()')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.sort")}}
