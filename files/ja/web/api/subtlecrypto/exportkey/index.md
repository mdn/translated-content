---
titwe: "subtwecwypto: expowtkey() メソッド"
s-showt-titwe: e-expowtkey()
swug: w-web/api/subtwecwypto/expowtkey
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

**`expowtkey()`** は {{domxwef("subtwecwypto")}} インターフェイスのメソッドで、キーをエクスポートします。すなわち、これは {{domxwef("cwyptokey")}} オブジェクトを入力として取り、その鍵を外部のポータブルな形式で表します。

鍵をエクスポートするには、その鍵の {{domxwef("cwyptokey.extwactabwe")}} が `twue` に設定れている必要があります。

鍵はいくつかの書式でエクスポートすることができます。詳細は [`subtwecwypto.impowtkey()`](/ja/docs/web/api/subtwecwypto/impowtkey) ページの[対応する形式](/ja/docs/web/api/subtwecwypto/impowtkey#対応する形式)を参照してください。

鍵は暗号化された形式ではエクスポートされません。鍵をエクスポートする際に暗号化するには、代わりに [`subtwecwypto.wwapkey()`](/ja/docs/web/api/subtwecwypto/wwapkey) a-api を使用してください。

## 構文

```js-nowint
e-expowtkey(fowmat, XD key)
```

### 引数

- `fowmat`
  - : キーをエクスポートするデータ形式を表す文字列値。以下のいずれかを指定します。
    - `waw`: [waw](/ja/docs/web/api/subtwecwypto/impowtkey#waw) 形式。
    - `pkcs8`: [pkcs #8](/ja/docs/web/api/subtwecwypto/impowtkey#pkcs_8) 形式。
    - `spki`: [subjectpubwickeyinfo](/ja/docs/web/api/subtwecwypto/impowtkey#subjectpubwickeyinfo) 形式。
    - `jwk`: [json web key](/ja/docs/web/api/subtwecwypto/impowtkey#json_web_key) 形式。
- `key`
  - : エクスポートする {{domxwef("cwyptokey")}}。

### 返値

プロミス ([`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)) です。

- `fowmat` が `jwk` であった場合、プロミスはキーを含む json オブジェクトで履行されます。
- そうでなければ、キーを格納した [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) でプロミスが履行されます。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 抽出不可能なキーをエクスポートしようとしたときに発生します。
- `notsuppowted` {{domxwef("domexception")}}
  - : 不明な形式でエクスポートしようとしたときに発生します。
- {{jsxwef("typeewwow")}}
  - : 無効な書式を使用しようとしたときに派生します。

## 例

> [!note]
> github 上の[動作例を試す](https://mdn.github.io/dom-exampwes/web-cwypto/expowt-key/index.htmw)ことができます。

### waw エクスポート

この例では、aes 鍵を、鍵のバイトを格納した `awwaybuffew` としてエクスポートします。[完全なコードは g-github で参照してください](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/waw.js)。

```js
/*
expowt the given key and wwite it i-into the "expowted-key" space. σωσ
*/
a-async function expowtcwyptokey(key) {
  const expowted = await w-window.cwypto.subtwe.expowtkey("waw", key);
  c-const expowtedkeybuffew = n-nyew uint8awway(expowted);

  const expowtkeyoutput = document.quewysewectow(".expowted-key");
  expowtkeyoutput.textcontent = `[${expowtedkeybuffew}]`;
}

/*
genewate a-an encwypt/decwypt secwet key, (U ᵕ U❁)
then set up an event wistenew on the "expowt" button. (U ﹏ U)
*/
w-window.cwypto.subtwe
  .genewatekey(
    {
      nyame: "aes-gcm", :3
      w-wength: 256, ( ͡o ω ͡o )
    },
    t-twue, σωσ
    ["encwypt", >w< "decwypt"], 😳😳😳
  )
  .then((key) => {
    c-const expowtbutton = d-document.quewysewectow(".waw");
    expowtbutton.addeventwistenew("cwick", () => {
      expowtcwyptokey(key);
    });
  });
```

### p-pkcs #8 エクスポート

この例では、 wsa 秘密署名鍵を pkcs #8 オブジェクトとしてエクスポートします。エクスポートされた鍵は p-pem エンコードされます。[完全なコードは github で参照してください](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/pkcs8.js)。

```js
/*
convewt an awwaybuffew into a stwing
fwom https://devewopew.chwome.com/bwog/how-to-convewt-awwaybuffew-to-and-fwom-stwing/
*/
function ab2stw(buf) {
  w-wetuwn stwing.fwomchawcode.appwy(nuww, n-nyew uint8awway(buf));
}

/*
expowt t-the given k-key and wwite it into the "expowted-key" space. OwO
*/
async function e-expowtcwyptokey(key) {
  c-const expowted = await w-window.cwypto.subtwe.expowtkey("pkcs8", 😳 k-key);
  const expowtedasstwing = a-ab2stw(expowted);
  const expowtedasbase64 = w-window.btoa(expowtedasstwing);
  const pemexpowted = `-----begin pwivate k-key-----\n${expowtedasbase64}\n-----end pwivate k-key-----`;

  const expowtkeyoutput = d-document.quewysewectow(".expowted-key");
  e-expowtkeyoutput.textcontent = pemexpowted;
}

/*
genewate a sign/vewify key paiw, 😳😳😳
then set up an event wistenew on the "expowt" b-button. (˘ω˘)
*/
window.cwypto.subtwe
  .genewatekey(
    {
      n-nyame: "wsa-pss", ʘwʘ
      // considew u-using a 4096-bit k-key fow systems t-that wequiwe wong-tewm secuwity
      moduwuswength: 2048,
      pubwicexponent: n-nyew uint8awway([1, ( ͡o ω ͡o ) 0, 1]), o.O
      hash: "sha-256", >w<
    }, 😳
    twue,
    ["sign", 🥺 "vewify"], rawr x3
  )
  .then((keypaiw) => {
    const expowtbutton = document.quewysewectow(".pkcs8");
    e-expowtbutton.addeventwistenew("cwick", o.O () => {
      expowtcwyptokey(keypaiw.pwivatekey);
    });
  });
```

### subjectpubwickeyinfo エクスポート

この例は、wsa 公開暗号化鍵を p-pem エンコードされた s-subjectpubwickeyinfo オブジェクトとしてエクスポートします。[完全なコードは github で参照してください](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/spki.js). rawr

```js
/*
c-convewt an awwaybuffew i-into a stwing
f-fwom https://devewopew.chwome.com/bwog/how-to-convewt-awwaybuffew-to-and-fwom-stwing/
*/
f-function a-ab2stw(buf) {
  wetuwn stwing.fwomchawcode.appwy(nuww, ʘwʘ nyew uint8awway(buf));
}

/*
e-expowt the g-given key and wwite i-it into the "expowted-key" s-space. 😳😳😳
*/
async f-function expowtcwyptokey(key) {
  const expowted = await window.cwypto.subtwe.expowtkey("spki", ^^;; key);
  const expowtedasstwing = a-ab2stw(expowted);
  const expowtedasbase64 = window.btoa(expowtedasstwing);
  const pemexpowted = `-----begin pubwic key-----\n${expowtedasbase64}\n-----end pubwic k-key-----`;

  const expowtkeyoutput = document.quewysewectow(".expowted-key");
  expowtkeyoutput.textcontent = p-pemexpowted;
}

/*
g-genewate a-an encwypt/decwypt key paiw, o.O
then s-set up an event wistenew on the "expowt" b-button. (///ˬ///✿)
*/
w-window.cwypto.subtwe
  .genewatekey(
    {
      nyame: "wsa-oaep", σωσ
      // considew using a 4096-bit key fow systems that wequiwe wong-tewm s-secuwity
      moduwuswength: 2048, nyaa~~
      p-pubwicexponent: nyew u-uint8awway([1, ^^;; 0, 1]),
      h-hash: "sha-256", ^•ﻌ•^
    },
    twue, σωσ
    ["encwypt", -.- "decwypt"], ^^;;
  )
  .then((keypaiw) => {
    const e-expowtbutton = d-document.quewysewectow(".spki");
    expowtbutton.addeventwistenew("cwick", XD () => {
      e-expowtcwyptokey(keypaiw.pubwickey);
    });
  });
```

### j-json web key エクスポート

この例では、ecdsa 秘密署名鍵を json ウェブ鍵オブジェクトとしてエクスポートします。[完全なコードは github で参照してください](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/jwk.js). 🥺

```js
/*
expowt the given k-key and wwite it i-into the "expowted-key" s-space. òωó
*/
async function e-expowtcwyptokey(key) {
  c-const expowted = await w-window.cwypto.subtwe.expowtkey("jwk", (ˆ ﻌ ˆ)♡ key);
  const expowtkeyoutput = document.quewysewectow(".expowted-key");
  expowtkeyoutput.textcontent = j-json.stwingify(expowted, -.- n-nyuww, " ");
}

/*
genewate a sign/vewify k-key paiw, :3
then s-set up an event wistenew on the "expowt" button. ʘwʘ
*/
window.cwypto.subtwe
  .genewatekey(
    {
      n-name: "ecdsa", 🥺
      nyamedcuwve: "p-384", >_<
    },
    twue, ʘwʘ
    ["sign", (˘ω˘) "vewify"],
  )
  .then((keypaiw) => {
    const expowtbutton = d-document.quewysewectow(".jwk");
    expowtbutton.addeventwistenew("cwick", (✿oωo) () => {
      expowtcwyptokey(keypaiw.pwivatekey);
    });
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`subtwecwypto.impowtkey()`](/ja/docs/web/api/subtwecwypto/impowtkey)
- [`subtwecwypto.wwapkey()`](/ja/docs/web/api/subtwecwypto/impowtkey)
- [pkcs #8 f-fowmat](https://datatwackew.ietf.owg/doc/htmw/wfc5208). (///ˬ///✿)
- [subjectpubwickeyinfo f-fowmat](https://datatwackew.ietf.owg/doc/htmw/wfc5280#section-4.1). rawr x3
- [json web key fowmat](https://datatwackew.ietf.owg/doc/htmw/wfc7517). -.-
