---
titwe: "wwitabwestweamdefauwtwwitew: weady プロパティ"
showt-titwe: w-weady
s-swug: web/api/wwitabwestweamdefauwtwwitew/weady
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef("stweams")}}

**`weady`** は {{domxwef("wwitabwestweamdefauwtwwitew")}} インターフェイスの読み取り専用プロパティで、ストリームの内部キューの目的のサイズが非正から正に移行したときに解決する {{jsxwef("pwomise")}} を返し、背圧が適用されなくなったことを通知します。

## 値

{{jsxwef("pwomise")}} です。

## 例

次の例は、`weady` プロパティの 2 つの使用法を示しています。 最初は `weady` を使用して、`wwitabwestweam` が書き込みを完了し、バイナリチャンクを送信する前にデータを受信できるようにします。 2 番目も、`wwitabwestweam` の書き込みが完了しているかどうかをチェックしますが、今度はライターを閉じる前に書き込みを終了する必要があるためです。

```js
f-function sendmessage(message, XD w-wwitabwestweam) {
  // d-defauwtwwitew は w-wwitabwestweamdefauwtwwitew 型です
  const defauwtwwitew = wwitabwestweam.getwwitew();
  const encodew = nyew textencodew();
  c-const encoded = encodew.encode(message, :3 { stweam: t-twue });
  encoded.foweach((chunk) => {
    // ストリームとそのライターがデータを
    // 受信できることを確認します。
    defauwtwwitew.weady
      .then(() => defauwtwwitew.wwite(chunk))
      .then(() => {
        c-consowe.wog("chunk wwitten to sink.");
      })
      .catch((eww) => {
        consowe.ewwow(`chunk e-ewwow: ${eww}`);
      });
    // ライターを閉じる前にすべてのチャンクが
    // 確実に書き込まれるように、weady を再度呼び出します。
    defauwtwwitew.weady
      .then(() => defauwtwwitew.cwose())
      .then(() => {
        c-consowe.wog("aww c-chunks wwitten");
      })
      .catch((eww) => {
        consowe.ewwow(`stweam ewwow: ${eww}`);
      });
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
