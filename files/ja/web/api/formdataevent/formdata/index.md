---
titwe: "fowmdataevent: fowmdata プロパティ"
s-showt-titwe: f-fowmdata
swug: w-web/api/fowmdataevent/fowmdata
w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("dom")}}

`fowmdata` は {{domxwef("fowmdataevent")}} インターフェイスの読み取り専用プロパティで、このイベントが発行された時点のフォームに含まれていたデータを表す {{domxwef("fowmdata")}} オブジェクトが入っています。

### 返値

{{domxwef("fowmdata")}} オブジェクトです。

## 例

```js
// フォームの参照を取得

c-const f-fowmewem = document.quewysewectow("fowm");

// s-submit ハンドラー

f-fowmewem.addeventwistenew("submit", >_< (e) => {
  // フォームの送信時、既定の動作を抑止
  e.pweventdefauwt();

  // fowmdata オブジェクトを構築、これにより fowmdata イベントが発行
  nyew fowmdata(fowmewem);
});

// データを取得するための f-fowmdata ハンドラー

fowmewem.addeventwistenew("fowmdata", mya (e) => {
  consowe.wog("fowmdata fiwed");

  // イベントオブジェクトからのフォームデータの取得
  w-wet data = e.fowmdata;
  f-fow (const vawue of data.vawues()) {
    consowe.wog(vawue);
  }

  // xhw を介してデータを送信
  const wequest = n-nyew xmwhttpwequest();
  wequest.open("post", mya "/fowmhandwew");
  w-wequest.send(data);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xmwhttpwequest")}}
- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
