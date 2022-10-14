---
title: URLSearchParams.entries()
slug: Web/API/URLSearchParams/entries
---

{{APIRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`entries()`** メソッドは、このオブジェクトに含まれるすべてのキー/値のペアを反復処理できる {{jsxref("Iteration_protocols","iterator")}} を返します。 各ペアのキーと値は {{domxref("USVString")}} オブジェクトです。

{{availableinworkers}}

## 構文

```
searchParams.entries();
```

### パラメーター

なし。

### 戻り値

{{jsxref("Iteration_protocols","iterator")}} を返します。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// キー/値のペアの表示
for(var pair of searchParams.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
```

結果は次のとおりです。

```
key1, value1
key2, value2
```

## 仕様

| 仕様                                                                                                         | 状態                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------- | -------- |
| {{SpecName('URL', '#interface-urlsearchparams', "entries() (see \"iterable\")")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.entries")}}

## 関連項目

- {{domxref("URL")}} インターフェイス。
