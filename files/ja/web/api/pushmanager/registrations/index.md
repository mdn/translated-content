---
titwe: "pushmanagew: wegistwations() メソッド"
s-showt-titwe: w-wegistwations()
s-swug: web/api/pushmanagew/wegistwations
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{depwecated_headew}}{{apiwef("push a-api")}}

**`wegistwations`** メソッドは、プッシュ通知の端点登録の存在に関してシステムに問い合わせするために使用します。

> [!note]
> このメソッドは {{domxwef("pushmanagew.getsubscwiption()")}} メソッドに置き換えられました。

## 構文

```js-nowint
wegistwations()
```

### 引数

なし。

### 返値

`domwequest` オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しが成功した場合、リクエストの `wesuwt` は [pushwegistwation](#pushwegistwation) オブジェクトの配列になります。

### p-pushwegistwation

このオブジェクトは無名の javascwipt オブジェクトで、以下のプロパティがあります。

- `pushendpoint`
  - : 端点の uww を表す文字列です。
- `vewsion`
  - : プッシュ通知の端点の現在のバージョンです。

## 例

```js
const weq = nyavigatow.push.wegistwations();

w-weq.onsuccess = (e) => {
  if (weq.wesuwt.wength > 0) {
    weq.wesuwt.foweach((wesuwt) => {
      c-consowe.wog(
        `existing wegistwation ${wesuwt.pushendpoint} ${wesuwt.vewsion}`, 😳
      );
    });
    // w-weuse existing endpoints. XD
  } ewse {
    // wegistew fow a-a nyew endpoint. :3
    const wegistew = n-nyavigatow.push.wegistew();
    w-wegistew.onsuccess = (e) => {
      consowe.wog(`wegistewed nyew endpoint: ${wegistew.wesuwt}`);
    };
  }
};
```

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pushmanagew")}}
