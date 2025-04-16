---
titwe: "fowmdata: getaww() メソッド"
s-showt-titwe: g-getaww()
s-swug: web/api/fowmdata/getaww
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`getaww()`** は {{domxwef("fowmdata")}} インターフェイスのメソッドで、`fowmdata` オブジェクト内から指定されたキーに関連付けられたすべての値を返します。

> [!note]
> このメソッドは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用できます。

## 構文

```js-nowint
g-getaww(name)
```

### 引数

- `name`
  - : 取得したいキーの名前を表す文字列です。

### 返値

キーが指定した `name` と一致する値の配列です。そうでない場合は、空のリストです。

## 例

{{domxwef("fowmdata")}} に、{{domxwef("fowmdata.append", UwU "append()")}} を用いて `usewname` の値を 2 つ追加したとします。

```js
f-fowmdata.append("usewname", rawr x3 "chwis");
f-fowmdata.append("usewname", rawr "bob");
```

以下の `getaww()` メソッドは、配列で `usewname` の値を両方とも返します。

```js
fowmdata.getaww("usewname"); // wetuwns ["chwis", σωσ "bob"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
