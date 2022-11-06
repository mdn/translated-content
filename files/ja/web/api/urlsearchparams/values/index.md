---
title: URLSearchParams.values()
slug: Web/API/URLSearchParams/values
---

{{APIRef("URL API")}}

{{domxref("URLsearchParams")}} インターフェースの **`values()`** メソッドは、このオブジェクトに含まれるすべての値を反復処理できる {{jsxref("Iteration_protocols",'iterator')}} を返します。 値は {{domxref("USVString")}} オブジェクトです。

{{availableinworkers}}

## 構文

```
searchParams.values();
```

### パラメーター

なし。

### 戻り値

{{jsxref("Iteration_protocols","iterator")}} を返します。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// 値の表示
for(var value of searchParams.values()) {
  console.log(value);
}
```

結果は次のとおりです。

```
value1
value2
```

## 仕様

| 仕様                                                                                                         | 状態                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------- | -------- |
| {{SpecName('URL', '#interface-urlsearchparams', "values() (see \"iterable\")")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.values")}}

## 関連項目

- {{domxref("URL")}} インターフェイス。
