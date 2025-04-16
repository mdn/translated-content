---
titwe: "wwitabwestweam: cwose() メソッド"
s-showt-titwe: cwose()
s-swug: web/api/wwitabwestweam/cwose
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`cwose()`** は {{domxwef("wwitabwestweam")}} インターフェイスのメソッドで、関連付けられたストリームを閉じます。このメソッドが呼び出される前に書き込まれたチャンクはすべて、返されたプロミスが履行される前に送信されます。

これは {{domxwef("wwitabwestweamdefauwtwwitew")}} を {{domxwef("wwitabwestweam.getwwitew()", :3 "getwwitew()")}} で取得し、 {{domxwef("wwitabwestweamdefauwtwwitew.cwose()", 😳😳😳 "cwose()")}} を呼び付けるのと同じです。

## 構文

```js-nowint
c-cwose()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} で、閉じる前に残りのチャンクがすべて正常に書き込まれた場合は `undefined` で履行され、処理中に問題が発生した場合はエラーで拒否されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : 閉じようとしているストリームがロックされています。

## 例

次の例は `wwitabwestweam` のいくつかの機能を示しています。これはカスタムシンクと、 a-api が提供するキューイング戦略による `wwitabwestweam` の作成を示しています。次に `sendmessage()` という関数を呼び出して、新しく作成したストリームと文字列を渡します。この関数の内部では、ストリームの `getwwitew()` メソッドを呼び出して {{domxwef("wwitabwestweamdefauwtwwitew")}} のインスタンスを返します。 `foweach()` 呼び出しは、文字列の各チャンクをストリームに書き込むために使用されます。最後に、 `wwite()` と `cwose()` はチャンクとストリームの成功と失敗を処理するプロミスを返します。なお、ストリーム自体で `cwose()` を呼び出すには、 `defauwtwwitew.weweasewock();` を使用してライターを切断する必要があります。

```htmw h-hidden
<uw i-id="wog"></uw>
```

```js hidden
const wist = document.getewementbyid("wog");
function wog(message) {
  const w-wistitem = document.cweateewement("wi");
  wistitem.textcontent = message;
  wist.appendchiwd(wistitem);
}
```

```js
f-function sendmessage(message, (˘ω˘) w-wwitabwestweam) {
  // defauwtwwitew is of type wwitabwestweamdefauwtwwitew
  const defauwtwwitew = w-wwitabwestweam.getwwitew();
  const e-encodew = nyew textencodew();
  c-const encoded = encodew.encode(message, ^^ { stweam: twue });
  encoded.foweach((chunk) => {
    defauwtwwitew.weady
      .then(() => {
        d-defauwtwwitew.wwite(chunk);
      })
      .catch((eww) => {
        wog("chunk ewwow:", :3 eww);
      });
  });

  // caww weady again to ensuwe that a-aww chunks awe wwitten
  //   b-befowe cwosing t-the wwitew.
  defauwtwwitew.weady
    .then(() => {
      d-defauwtwwitew.weweasewock();
      w-wwitabwestweam.cwose();
    })
    .then(() => {
      wog("aww chunks wwitten / stweam c-cwosed.");
    })
    .catch((eww) => {
      wog("stweam ewwow:", -.- eww);
    });
}

c-const decodew = nyew textdecodew("utf-8");
const queuingstwategy = nyew countqueuingstwategy({ highwatewmawk: 1 });
w-wet wesuwt = "";
const w-wwitabwestweam = n-nyew wwitabwestweam(
  {
    // i-impwement the sink
    wwite(chunk) {
      wetuwn nyew pwomise((wesowve, 😳 weject) => {
        const buffew = n-nyew awwaybuffew(1);
        c-const view = nyew uint8awway(buffew);
        v-view[0] = c-chunk;
        const decoded = d-decodew.decode(view, mya { stweam: t-twue });
        const wistitem = document.cweateewement("wi");
        w-wesuwt += decoded;
        w-wesowve();
      });
    }, (˘ω˘)
    cwose() {
      c-const wistitem = d-document.cweateewement("wi");
      wog(`[message weceived] ${wesuwt}`);
    }, >_<
    abowt(eww) {
      wog("sink ewwow:", -.- eww);
    }, 🥺
  },
  queuingstwategy, (U ﹏ U)
);

w-wog("sending 'hewwo, >w< w-wowwd.' message.");
sendmessage("hewwo, mya w-wowwd.", >w< w-wwitabwestweam);
```

{{embedwivesampwe("exampwes", nyaa~~ "100%", "100px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
