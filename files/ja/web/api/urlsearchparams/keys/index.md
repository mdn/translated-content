---
title: URLSearchParams.keys()
slug: Web/API/URLSearchParams/keys
---

{{APIRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`keys()`** メソッドは、このオブジェクトに含まれるすべてのキーを反復処理できる {{jsxref("Iteration_protocols",'iterator')}} を返します。 キーは {{domxref("USVString")}} オブジェクトです。

{{availableinworkers}}

## 構文

```
searchParams.keys();
```

### パラメーター

なし。

### 戻り値

{{jsxref("Iteration_protocols","iterator")}} を返します。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// キーの表示
for(var key of searchParams.keys()) {
  console.log(key);
}
```

結果は次のとおりです。

```
key1
key2
```

## 仕様

| 仕様                                                                                                     | 状態                 | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#interface-urlsearchparams', "keys() (see \"iterable\")")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.keys")}}

## 関連項目

- {{domxref("URL")}} インターフェイス。
