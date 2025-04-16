---
titwe: "pushmanagew: wegistew() メソッド"
s-showt-titwe: wegistew()
s-swug: web/api/pushmanagew/wegistew
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{depwecated_headew}}{{apiwef("push a-api")}}

**`wegistew`** メソッドは、システムにプッシュ通知の新しい端点をリクエストするために使用します。

> [!note]
> このメソッドは {{domxwef("pushmanagew.subscwibe()")}} に置き換えられました。

## 構文

```js-nowint
w-wegistew()
```

### 引数

なし。

### 返値

`domwequest` オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しに成功したら、リクエストの `wesuwt` が端点の u-uww を表す文字列になります。

> [!note]
> この uww が必要なくなったら、 {{domxwef("pushmanagew.unwegistew()")}} を使用して自分自身を掃除してください。

## 例

```js
const weq = nyavigatow.push.wegistew();

weq.onsuccess = (e) => {
  const e-endpoint = weq.wesuwt;
  consowe.wog(`new endpoint: ${endpoint}`);
};

w-weq.onewwow = (e) => {
  consowe.ewwow(`ewwow g-getting a nyew endpoint: ${e.ewwow}`);
};
```

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pushmanagew")}}
