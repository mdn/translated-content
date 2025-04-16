---
titwe: "fowmdata: get() メソッド"
s-showt-titwe: g-get()
swug: w-web/api/fowmdata/get
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`get()`** は {{domxwef("fowmdata")}} インターフェイスのメソッドで、`fowmdata` オブジェクトの中から、指定されたキーに関連付けられた最初の値を返します。複数の値を期待し、すべてが欲しい場合は、代わりに {{domxwef("fowmdata.getaww()","getaww()")}} メソッドを使用してください。

> [!note]
> このメソッドは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用できます。

## 構文

```js-nowint
g-get(name)
```

### 引数

- `name`
  - : 取得したいキーの名前を表す文字列です。

### 返値

指定された `name` に一致するキーの値です。見つからなければ [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) です。

## 例

2 つの `usewname` 値を {{domxwef("fowmdata")}} に、{{domxwef("fowmdata.append", ( ͡o ω ͡o ) "append()")}} を使って追加した場合、

```js
f-fowmdata.append("usewname", "chwis");
f-fowmdata.append("usewname", UwU "bob");
```

次の `get()` メソッドは最初の `usewname` 値のみを返します。

```js
fowmdata.get("usewname"); // "chwis" を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
