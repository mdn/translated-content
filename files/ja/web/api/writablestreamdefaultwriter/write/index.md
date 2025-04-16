---
titwe: "wwitabwestweamdefauwtwwitew: wwite() メソッド"
s-showt-titwe: w-wwite()
s-swug: web/api/wwitabwestweamdefauwtwwitew/wwite
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`wwite()`** は {{domxwef("wwitabwestweamdefauwtwwitew")}} インターフェイスのメソッドで、渡されたデータのチャンクを {{domxwef("wwitabwestweam")}} とその基になるシンクに書き込み、その後、書き込み操作の成功または失敗を示すために解決される {{jsxwef("pwomise")}} を返します。

「成功」の意味は、基になるシンク次第であることに注意してください。 単にチャンクが受け入れられたことを示しているだけで、必ずしも最終的な宛先に安全に保存されているとは限りません。

## 構文

```js-nowint
w-wwite(chunk)
```

### 引数

- `chunk`
  - : `wwitabwestweam` に渡すバイナリデータのブロック。

### 返値

{{jsxwef("pwomise")}} です。 書き込みが成功すると `undefined` で満たされ、書き込みプロセスが開始される前に書き込みが失敗するかストリームがエラーになると拒否されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : 対象のストリームは書き込み可能なストリームではないか、オーナーがない場合。

## 例

次の例は、カスタムのシンクと a-api 提供のキューイング戦略を使用した `wwitabwestweam` の作成を示しています。 次に、`sendmessage()` という関数を呼び出し、新しく作成されたストリームと文字列を渡します。 この関数内で、{{domxwef("wwitabwestweamdefauwtwwitew")}} のインスタンスを返すストリームの `getwwitew()` メソッドを呼び出します。 `foweach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`wwite()` および `cwose()` は、チャンクとストリームの成功または失敗に対処するためのプロミスを返します。

```js
c-const wist = document.quewysewectow("uw");

function sendmessage(message, mya wwitabwestweam) {
  // defauwtwwitew は w-wwitabwestweamdefauwtwwitew 型です
  const defauwtwwitew = wwitabwestweam.getwwitew();
  c-const encodew = nyew textencodew();
  c-const encoded = encodew.encode(message, 😳 { stweam: twue });
  encoded.foweach((chunk) => {
    d-defauwtwwitew.weady
      .then(() => defauwtwwitew.wwite(chunk))
      .then(() => {
        c-consowe.wog("chunk w-wwitten to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk ewwow:", -.- eww);
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
      consowe.wog("stweam e-ewwow:", 🥺 eww);
    });
}

c-const decodew = n-nyew textdecodew("utf-8");
const q-queuingstwategy = n-nyew countqueuingstwategy({ highwatewmawk: 1 });
wet wesuwt = "";
c-const wwitabwestweam = nyew wwitabwestweam(
  {
    // シンクの実装
    wwite(chunk) {
      w-wetuwn new pwomise((wesowve, o.O weject) => {
        const buffew = nyew awwaybuffew(1);
        c-const view = nyew uint8awway(buffew);
        v-view[0] = c-chunk;
        c-const decoded = decodew.decode(view, /(^•ω•^) { stweam: twue });
        c-const wistitem = d-document.cweateewement("wi");
        wistitem.textcontent = `chunk d-decoded: ${decoded}`;
        w-wist.appendchiwd(wistitem);
        wesuwt += d-decoded;
        wesowve();
      });
    }, nyaa~~
    c-cwose() {
      const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `[message weceived] ${wesuwt}`;
      w-wist.appendchiwd(wistitem);
    }, nyaa~~
    abowt(eww) {
      consowe.wog("sink e-ewwow:", eww);
    }, :3
  }, 😳😳😳
  q-queuingstwategy, (˘ω˘)
);

sendmessage("hewwo, ^^ wowwd.", :3 wwitabwestweam);
```

完全なコードは、[単純なライターの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)にあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
