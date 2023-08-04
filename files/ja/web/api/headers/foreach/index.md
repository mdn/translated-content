---
title: Headers.forEach()
slug: Web/API/Headers/forEach
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef}}

**`Headers.forEach()`** メソッドは、 [`Headers`](/ja/docs/Web/API/Headers) オブジェクト内のキー/値の組にそれぞれ一度ずつ、コールバック関数を実行します。

## 構文

```js-nolint
// アロー関数
forEach((value, key) => { /* … */ })
forEach((value, key, object) => { /* … */ })

// インラインコールバック関数
forEach(function (value, key) { /* … */ })
forEach(function (value, key, object) { /* … */ })
forEach(function (value, key) { /* … */ }, thisArg)
```

### 引数

- `callbackFn`
  - : このマップの各項目に対して実行される関数です。以下の引数を取ります。
    - `value`
      - : 現在参照しているヘッダー項目の値です。
    - `key`
      - : 現在参照しているヘッダー項目の名前です。
    - `object`
      - : 反復処理を行う Headers オブジェクトです。
- `thisArg` {{Optional_Inline}}
  - : `callback` を実行するときに `this` として使用する値。

### 返値

{{jsxref("undefined")}} です。

## 解説

`Headers.forEach()` メソッドは、指定されたコールバックを、実際に存在するヘッダーの各キーに対して一度ずつ実行します。削除されたキーに対しては呼び出されません。しかし、存在しているが値が undefined であるキーに対しては実行されます。

## 例

### Headers オブジェクトの内容を表示

以下のコードは `myHeaders` オブジェクトの各キー/値に対して 1 行ずつログ出力します。

```js
// 新しいテスト用 Headers オブジェクトを作成
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "This is a demo cookie");
myHeaders.append("compression", "gzip");

// キーと値の組を表示
myHeaders.forEach((value, key) => {
  console.log(`${key} ==> ${value}`);
})
```

結果は次の通りです。

```
compression ==> gzip
content-type ==> application/json
cookie ==> This is a demo cookie
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`Map.prototype.forEach()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
