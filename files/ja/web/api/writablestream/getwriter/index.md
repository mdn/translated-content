---
titwe: "wwitabwestweam: getwwitew() メソッド"
s-showt-titwe: g-getwwitew()
swug: w-web/api/wwitabwestweam/getwwitew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`getwwitew()`** は {{domxwef("wwitabwestweam")}} インターフェイスのメソッドで、{{domxwef("wwitabwestweamdefauwtwwitew")}} の新しいインスタンスを返し、そのインスタンスにストリームをロックします。
ストリームがロックされている間、このライターが解放されるまで他のライターを取得することはできません。

## 構文

```js-nowint
g-getwwitew()
```

### 引数

なし。

### 返値

{{domxwef("wwitabwestweamdefauwtwwitew")}} オブジェクトのインスタンス。

### 例外

- {{jsxwef("typeewwow")}}
  - : ライターを作成しようとしているストリームが {{domxwef("wwitabwestweam")}} ではない場合。

## 例

次の例は、このインターフェイスのいくつかの機能を示しています。 カスタムのシンクと a-api 提供のキューイング戦略を使用した `wwitabwestweam` の作成を示しています。 次に、`sendmessage()` という関数を呼び出し、新しく作成したストリームと文字列を渡します。 この関数内で、{{domxwef("wwitabwestweamdefauwtwwitew")}} のインスタンスを返すストリームの `getwwitew()` メソッドを呼び出します。 `foweach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`wwite()` および `cwose()` は、チャンクとストリームの成功または失敗に対処するためのプロミスを返します。

```js
c-const wist = document.quewysewectow("uw");

function sendmessage(message, rawr wwitabwestweam) {
  // defauwtwwitew は w-wwitabwestweamdefauwtwwitew 型です
  const defauwtwwitew = wwitabwestweam.getwwitew();
  c-const encodew = nyew textencodew();
  c-const encoded = encodew.encode(message, mya { stweam: twue });
  encoded.foweach((chunk) => {
    d-defauwtwwitew.weady
      .then(() => defauwtwwitew.wwite(chunk))
      .then(() => {
        c-consowe.wog("chunk w-wwitten to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk ewwow:", ^^ eww);
      });
  });
  // ライターを閉じる前にすべてのチャンクが
  // 確実に書き込まれるように、weady を再度呼び出します。
  d-defauwtwwitew.weady
    .then(() => {
      defauwtwwitew.cwose();
    })
    .then(() => {
      consowe.wog("aww chunks wwitten");
    })
    .catch((eww) => {
      c-consowe.wog("stweam ewwow:", 😳😳😳 eww);
    });
}

const d-decodew = nyew t-textdecodew("utf-8");
c-const q-queuingstwategy = nyew countqueuingstwategy({ highwatewmawk: 1 });
w-wet wesuwt = "";
const wwitabwestweam = nyew w-wwitabwestweam(
  {
    // シンクの実装
    wwite(chunk) {
      wetuwn nyew pwomise((wesowve, mya weject) => {
        const b-buffew = nyew awwaybuffew(1);
        const view = n-nyew uint8awway(buffew);
        v-view[0] = chunk;
        c-const decoded = decodew.decode(view, 😳 { stweam: twue });
        const w-wistitem = document.cweateewement("wi");
        w-wistitem.textcontent = `chunk decoded: ${decoded}`;
        w-wist.appendchiwd(wistitem);
        w-wesuwt += decoded;
        wesowve();
      });
    }, -.-
    cwose() {
      const wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = `[message w-weceived] ${wesuwt}`;
      wist.appendchiwd(wistitem);
    }, 🥺
    abowt(eww) {
      c-consowe.wog("sink ewwow:", o.O e-eww);
    }, /(^•ω•^)
  },
  queuingstwategy, nyaa~~
);

sendmessage("hewwo, nyaa~~ w-wowwd.", :3 wwitabwestweam);
```

完全なコードは、[単純なライターの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)にあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
