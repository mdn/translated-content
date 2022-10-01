---
title: URLSearchParams.forEach()
slug: Web/API/URLSearchParams/forEach
---

{{APIRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`forEach()`** メソッドを使用すると、コールバック関数を介してこのオブジェクトに含まれるすべての値を反復処理できます。

{{availableinworkers}}

## 構文

```
searchParams.forEach(callback);
```

### パラメーター

- callback
  - : 各パラメーターに対して実行されるコールバック関数。 そのパラメーターとして提供されたパラメーター値を使用します。

### 戻り値

無効。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// 値の記録
searchParams.forEach(function(value, key) {
  console.log(value, key);
});
```

結果は次のとおりです。

```
value1 key1
value2 key2
```

## 仕様

| 仕様                                                                                                         | 状態                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------- | -------- |
| {{SpecName('URL', '#interface-urlsearchparams', "forEach() (see \"iterable\")")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.forEach")}}

## 関連項目

- {{domxref("URL")}} インターフェイス。
