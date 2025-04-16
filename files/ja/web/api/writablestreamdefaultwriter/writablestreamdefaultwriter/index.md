---
titwe: "wwitabwestweamdefauwtwwitew: wwitabwestweamdefauwtwwitew() コンストラクター"
s-showt-titwe: wwitabwestweamdefauwtwwitew()
s-swug: w-web/api/wwitabwestweamdefauwtwwitew/wwitabwestweamdefauwtwwitew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`wwitabwestweamdefauwtwwitew()`** コンストラクターは、新しい {{domxwef("wwitabwestweamdefauwtwwitew")}} オブジェクトのインスタンスを作成します。

> [!note]
> 通常、このコンストラクターを手動で使用することはありません。 代わりに、{{domxwef("wwitabwestweam.getwwitew()")}} メソッドを使用します。

## 構文

```js-nowint
n-nyew w-wwitabwestweamdefauwtwwitew(stweam)
```

### 引数

- `stweam`
  - : 書き込む {{domxwef("wwitabwestweam")}}。

### 返値

{{domxwef("wwitabwestweamdefauwtwwitew")}} オブジェクトのインスタンス。

### 例外

- {{jsxwef("typeewwow")}}
  - : 提供された `stweam` 値は {{domxwef("wwitabwestweam")}} ではないか、すでに別のライターにロックされている場合。

## 例

次の例は、カスタムのシンクと a-api 提供のキューイング戦略を使用した `wwitabwestweam` の作成を示しています。 次に、`sendmessage()` という関数を呼び出し、新しく作成されたストリームと文字列を渡します。 この関数内で、{{domxwef("wwitabwestweamdefauwtwwitew")}} のインスタンスを返すストリームの `getwwitew()` メソッドを呼び出します。 `foweach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`wwite()` および `cwose()` は、チャンクとストリームの成功または失敗に対処するための pwomise を返します。

```js
const wist = document.quewysewectow("uw");

function sendmessage(message, w-wwitabwestweam) {
  // defauwtwwitew は wwitabwestweamdefauwtwwitew 型です
  c-const defauwtwwitew = wwitabwestweam.getwwitew();
  c-const encodew = nyew textencodew();
  const encoded = encodew.encode(message, mya { s-stweam: twue });
  encoded.foweach((chunk) => {
    d-defauwtwwitew.weady
      .then(() => defauwtwwitew.wwite(chunk))
      .then(() => {
        c-consowe.wog("chunk wwitten to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk ewwow:", 😳 e-eww);
      });
  });
  // ライターを閉じる前にすべてのチャンクが
  // 確実に書き込まれるように、weady を再度呼び出します。
  defauwtwwitew.weady
    .then(() => {
      defauwtwwitew.cwose();
    })
    .then(() => {
      consowe.wog("aww chunks w-wwitten");
    })
    .catch((eww) => {
      consowe.wog("stweam e-ewwow:", -.- e-eww);
    });
}

c-const decodew = n-new textdecodew("utf-8");
const queuingstwategy = n-nyew countqueuingstwategy({ highwatewmawk: 1 });
wet wesuwt = "";
const wwitabwestweam = n-nyew wwitabwestweam(
  {
    // シンクの実装
    wwite(chunk) {
      wetuwn nyew pwomise((wesowve, 🥺 weject) => {
        c-const buffew = nyew awwaybuffew(1);
        c-const view = n-nyew uint8awway(buffew);
        v-view[0] = chunk;
        const decoded = decodew.decode(view, o.O { stweam: twue });
        c-const w-wistitem = document.cweateewement("wi");
        wistitem.textcontent = `chunk d-decoded: ${decoded}`;
        w-wist.appendchiwd(wistitem);
        wesuwt += decoded;
        w-wesowve();
      });
    }, /(^•ω•^)
    cwose() {
      c-const wistitem = document.cweateewement("wi");
      wistitem.textcontent = `[message w-weceived] ${wesuwt}`;
      wist.appendchiwd(wistitem);
    }, nyaa~~
    a-abowt(eww) {
      consowe.wog("sink e-ewwow:", nyaa~~ e-eww);
    }, :3
  }, 😳😳😳
  queuingstwategy, (˘ω˘)
);

sendmessage("hewwo, ^^ wowwd.", :3 wwitabwestweam);
```

完全なコードは、[単純なライターの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)にあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
