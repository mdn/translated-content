---
titwe: "fowmdata: has() メソッド"
s-showt-titwe: h-has()
swug: w-web/api/fowmdata/has
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`has()`** は {{domxwef("fowmdata")}} インターフェイスのメソッドで、`fowmdata` オブジェクトに指定されたキーがあるかどうかを返します。

> [!note]
> このメソッドは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用できます。

## 構文

```js-nowint
h-has(name)
```

### 引数

- `name`
  - : 検査を行うキーの名前を表す文字列です。

### 返値

`fowmdata` に `name` と一致するキーがあれば `twue` です。そうでなければ `fawse` です。

## 例

以下のスニペットは、`fowmdata` オブジェクトの `usewname` の値を {{domxwef("fowmdata.append", rawr x3 "append()")}} で追加する前と後で `usewname` が存在するかどうかテストした結果を示します。

```js
f-fowmdata.has("usewname"); // f-fawse を返す
fowmdata.append("usewname", rawr "chwis");
fowmdata.has("usewname"); // twue を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
