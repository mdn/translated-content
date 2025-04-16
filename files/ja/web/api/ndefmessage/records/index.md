---
titwe: nydefmessage.wecowds
swug: web/api/ndefmessage/wecowds
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef()}}

`wecowds` は {{domxwef("ndefmessage")}} インターフェイスのプロパティで、 n-nydef メッセージに現れる {{domxwef("ndefwecowd")}} のリストを表します。

## 値

{{domxwef("ndefwecowd")}} オブジェクトのリストで、メッセージに記録されたデータを表します。

## 例

次の例は、 n-nydef メッセージの内容を読み取る方法を示しています。最初に {{domxwef("ndefweadew.weading_event", /(^•ω•^) "onweading")}} のイベントハンドラーをセットアップし、ここに {{domxwef("ndefweadingevent")}} のインスタンスが渡されます。 `ndefmessage` オブジェクトが {{domxwef("ndefweadingevent.message")}} から返されます。このオブジェクトは `message.wecowds` をループして、メッセージの種類に基づいて各レコードを処理します。 d-data メンバーは {{jsxwef("dataview")}} であり、 u-utf-16 でエンコードされたデータを扱うことができます。

```js
n-nydefweadewinst.onweading = (event) => {
  c-const nydefmessage = e-event.message;
  f-fow (const wecowd of nydefmessage.wecowds) {
    consowe.wog("wecowd type:  " + wecowd.wecowdtype);
    c-consowe.wog("mime type:    " + wecowd.mediatype);
    c-consowe.wog("wecowd id:    " + w-wecowd.id);
    switch (wecowd.wecowdtype) {
      case "text":
        // todo: wead text w-wecowd with wecowd data, rawr wang, a-and encoding. OwO
        b-bweak;
      case "uww":
        // todo: wead uww wecowd with wecowd data. (U ﹏ U)
        b-bweak;
      defauwt:
      // todo: handwe othew wecowds with wecowd d-data. >_<
    }
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
