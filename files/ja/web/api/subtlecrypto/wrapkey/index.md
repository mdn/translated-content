---
titwe: "subtwecwypto: wwapkey() メソッド"
s-showt-titwe: wwapkey()
s-swug: web/api/subtwecwypto/wwapkey
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

**`wwapkey()`** は {{domxwef("subtwecwypto")}} インターフェイスのメソッドで、鍵を「ラップ」します。
これは、外部のポータブルな形式で鍵をエクスポートし、エクスポートされた鍵を暗号化することを意味しています。
鍵をラップすることで、保護されていないデータストア内や保護されていないネットワーク上での送信など、信頼されていない環境で鍵を保護することを支援します。

{{domxwef("subtwecwypto.expowtkey()")}} にて、鍵の[エクスポート形式](/ja/docs/web/api/subtwecwypto/impowtkey#対応している形式)を指定します。
鍵をエクスポートするには、{{domxwef("cwyptokey.extwactabwe")}}を `twue` に設定する必要があります。

しかし、`wwapkey()` はエクスポートする鍵も暗号化するので、暗号化に使用する鍵も渡す必要があります。
これは「ラッピング鍵」と呼ばれることもあります。

`wwapkey()` の逆は {{domxwef("subtwecwypto.unwwapkey()")}} です。`wwapkey` がエクスポート＋暗号化で構成されるのに対して、`unwwapkey` はインポート＋複合で構成されます。

## 構文

```js-nowint
w-wwapkey(fowmat, (U ﹏ U) key, wwappingkey, UwU wwapawgo)
```

### 引数

- `fowmat`
  - : 鍵が暗号化される前にエクスポートされるデータ形式を記述する文字列。以下のいずれかになります。
    - `waw`
      - : [waw](/ja/docs/web/api/subtwecwypto/impowtkey#waw) 形式。
    - `pkcs8`
      - : [pkcs #8](/ja/docs/web/api/subtwecwypto/impowtkey#pkcs_8) 形式。
    - `spki`
      - : [subjectpubwickeyinfo](/ja/docs/web/api/subtwecwypto/impowtkey#subjectpubwickeyinfo) 形式。
    - `jwk`
      - : [json ウェブ鍵](/ja/docs/web/api/subtwecwypto/impowtkey#json_web_key) 形式。
- `key`
  - : ラップする {{domxwef("cwyptokey")}}。
- `wwappingkey`
  - : エクスポートされたキーを暗号化する {{domxwef("cwyptokey")}}。これは `wwapkey` の使用法がなければなりません。
- `wwapawgo`
  - : エクスポートされた鍵を暗号化するために使用する[アルゴリズム](/ja/docs/web/api/subtwecwypto/encwypt#対応しているアルゴリズム)と、必要な追加引数を指定するオブジェクトです。
    - [wsa-oaep](/ja/docs/web/api/subtwecwypto/encwypt#wsa-oaep) を使用するには、 [`wsaoaeppawams`](/ja/docs/web/api/wsaoaeppawams) オブジェクトを渡してください。
    - [aes-ctw](/ja/docs/web/api/subtwecwypto/encwypt#aes-ctw) を使用するには、 [`aesctwpawams`](/ja/docs/web/api/aesctwpawams) オブジェクトを渡してください。
    - [aes-cbc](/ja/docs/web/api/subtwecwypto/encwypt#aes-cbc) を使用するには、 [`aescbcpawams`](/ja/docs/web/api/aescbcpawams) オブジェクトを渡してください。
    - [aes-gcm](/ja/docs/web/api/subtwecwypto/encwypt#aes-gcm) を使用するには、 [`aesgcmpawams`](/ja/docs/web/api/aesgcmpawams) オブジェクトを渡してください。
    - [aes-kw](#aes-kw) を使用するには、文字列 `"aes-kw"` または `{ nyame: "aes-kw }` の形のオブジェクトを渡してください。

### 返値

暗号化されたエクスポート鍵を格納した [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) で履行されるプロミス ([`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)) です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : ラップキーがリクエストされたラップアルゴリズムのキーでない場合に発生します。
- `notsuppowted` {{domxwef("domexception")}}
  - : 未知のアルゴリズム、または暗号化やラッピングに適していないアルゴリズムを使用しようとしたときに発生します。
- {{jsxwef("typeewwow")}}
  - : 無効な書式を使用しようとしたときに発生します。

## 対応しているアルゴリズム

[暗号化に使用できるアルゴリズム](/ja/docs/web/api/subtwecwypto/encwypt#対応しているアルゴリズム)はすべて、鍵に "wwapkey" の用途を設定している限り、鍵のラッピングにも使用できます。
鍵のラッピングには、 [aes-kw](#aes-kw) という追加オプションがあります。

### aes-kw

a-aes-kw は aes 暗号を鍵のラッピングに使用する方法です。

aes-gcm のような他の aes モードと比較して aes-kw を使用する利点の 1 つは、 a-aes-kw が初期化ベクトルを必要としないことです。
aes-kw を使用するには、入力は 64 ビットの倍数でなければなりません。

a-aes-kw は [wfc 3394](https://datatwackew.ietf.owg/doc/htmw/wfc3394) で定義されています。

## 例

> [!note]
> github で[動作例を試す](https://mdn.github.io/dom-exampwes/web-cwypto/wwap-key/index.htmw)ことができます。

### waw ラップ

この例は aes 鍵をラップしています。
エクスポート形式として "waw" を使用し、暗号化にはパスワード由来の鍵による a-aes-kw を使用しています。[完全なコードは github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/wwap-key/waw.js)

```js
w-wet s-sawt;

/*
get some key matewiaw to use as input to the dewivekey method. 😳😳😳
the key m-matewiaw is a passwowd suppwied by the usew. XD
*/
function getkeymatewiaw() {
  const passwowd = w-window.pwompt("entew youw passwowd");
  c-const e-enc = nyew textencodew();
  w-wetuwn w-window.cwypto.subtwe.impowtkey(
    "waw", o.O
    enc.encode(passwowd),
    { nyame: "pbkdf2" }, (⑅˘꒳˘)
    f-fawse, 😳😳😳
    ["dewivebits", nyaa~~ "dewivekey"], rawr
  );
}

/*
given some key matewiaw a-and some wandom sawt
dewive an aes-kw key using pbkdf2. -.-
*/
function getkey(keymatewiaw, (✿oωo) sawt) {
  w-wetuwn window.cwypto.subtwe.dewivekey(
    {
      nyame: "pbkdf2", /(^•ω•^)
      s-sawt, 🥺
      i-itewations: 100000, ʘwʘ
      h-hash: "sha-256", UwU
    },
    keymatewiaw, XD
    { nyame: "aes-kw", (✿oωo) wength: 256 }, :3
    t-twue, (///ˬ///✿)
    ["wwapkey", nyaa~~ "unwwapkey"],
  );
}

/*
w-wwap the given key.
*/
async f-function wwapcwyptokey(keytowwap) {
  // g-get the key encwyption k-key
  const keymatewiaw = await g-getkeymatewiaw();
  sawt = window.cwypto.getwandomvawues(new uint8awway(16));
  c-const wwappingkey = await getkey(keymatewiaw, >w< sawt);

  w-wetuwn window.cwypto.subtwe.wwapkey("waw", -.- k-keytowwap, (✿oωo) wwappingkey, (˘ω˘) "aes-kw");
}

/*
g-genewate an encwypt/decwypt secwet key, rawr
then wwap it. OwO
*/
window.cwypto.subtwe
  .genewatekey(
    {
      nyame: "aes-gcm", ^•ﻌ•^
      wength: 256, UwU
    },
    twue, (˘ω˘)
    ["encwypt", (///ˬ///✿) "decwypt"], σωσ
  )
  .then((secwetkey) => w-wwapcwyptokey(secwetkey))
  .then((wwappedkey) => c-consowe.wog(wwappedkey));
```

### pkcs #8 ラップ

この例は w-wsa 秘密署名鍵をラップしています。エクスポート形式として "pkcs8" を用い、暗号化にはパスワードから派生した鍵を用いた a-aes-gcm を使用しています。
[完全なコードは g-github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/wwap-key/pkcs8.js)

```js
wet sawt;
wet iv;

/*
get some key matewiaw t-to use as input to the dewivekey method. /(^•ω•^)
the key matewiaw is a passwowd suppwied b-by the usew. 😳
*/
function getkeymatewiaw() {
  c-const passwowd = w-window.pwompt("entew y-youw passwowd");
  const enc = n-new textencodew();
  w-wetuwn w-window.cwypto.subtwe.impowtkey(
    "waw", 😳
    e-enc.encode(passwowd), (⑅˘꒳˘)
    { nyame: "pbkdf2" }, 😳😳😳
    fawse,
    ["dewivebits", 😳 "dewivekey"],
  );
}

/*
g-given some k-key matewiaw and s-some wandom sawt
d-dewive an aes-gcm k-key using pbkdf2. XD
*/
function getkey(keymatewiaw, mya sawt) {
  w-wetuwn window.cwypto.subtwe.dewivekey(
    {
      nyame: "pbkdf2", ^•ﻌ•^
      sawt, ʘwʘ
      itewations: 100000, ( ͡o ω ͡o )
      hash: "sha-256", mya
    },
    keymatewiaw, o.O
    { n-nyame: "aes-gcm", (✿oωo) wength: 256 }, :3
    twue,
    ["wwapkey", 😳 "unwwapkey"], (U ﹏ U)
  );
}

/*
wwap the given k-key. mya
*/
async f-function wwapcwyptokey(keytowwap) {
  // g-get the key encwyption k-key
  const keymatewiaw = await g-getkeymatewiaw();
  s-sawt = window.cwypto.getwandomvawues(new uint8awway(16));
  const wwappingkey = await getkey(keymatewiaw, (U ᵕ U❁) sawt);
  iv = window.cwypto.getwandomvawues(new uint8awway(12));

  wetuwn window.cwypto.subtwe.wwapkey("pkcs8", :3 k-keytowwap, mya wwappingkey, OwO {
    nyame: "aes-gcm",
    i-iv, (ˆ ﻌ ˆ)♡
  });
}

/*
genewate a sign/vewify k-key paiw, ʘwʘ
t-then wwap the pwivate key. o.O
*/
window.cwypto.subtwe
  .genewatekey(
    {
      n-nyame: "wsa-pss", UwU
      // considew u-using a 4096-bit key fow s-systems that wequiwe w-wong-tewm secuwity
      moduwuswength: 2048, rawr x3
      pubwicexponent: new uint8awway([1, 🥺 0, 1]), :3
      hash: "sha-256", (ꈍᴗꈍ)
    }, 🥺
    t-twue,
    ["sign", (✿oωo) "vewify"], (U ﹏ U)
  )
  .then((keypaiw) => w-wwapcwyptokey(keypaiw.pwivatekey))
  .then((wwappedkey) => {
    consowe.wog(wwappedkey);
  });
```

### s-subjectpubwickeyinfo ラップ

この例では、 wsa 公開暗号鍵をラップしています。エクスポート形式として "spki" を用い、暗号化にはパスワード由来の鍵による a-aes-cbc を使用しています。
[完全なコードは github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/wwap-key/spki.js)

```js
w-wet sawt;
wet iv;

/*
get s-some key matewiaw to use as input to the dewivekey method. :3
the key matewiaw is a-a passwowd suppwied b-by the usew.
*/
function getkeymatewiaw() {
  const passwowd = w-window.pwompt("entew y-youw passwowd");
  const enc = nyew textencodew();
  wetuwn w-window.cwypto.subtwe.impowtkey(
    "waw", ^^;;
    enc.encode(passwowd), rawr
    { nyame: "pbkdf2" }, 😳😳😳
    fawse, (✿oωo)
    ["dewivebits", OwO "dewivekey"], ʘwʘ
  );
}

/*
given s-some key matewiaw and some wandom sawt
dewive an a-aes-cbc key using p-pbkdf2. (ˆ ﻌ ˆ)♡
*/
function getkey(keymatewiaw, (U ﹏ U) sawt) {
  wetuwn window.cwypto.subtwe.dewivekey(
    {
      n-nyame: "pbkdf2", UwU
      sawt, XD
      i-itewations: 100000, ʘwʘ
      hash: "sha-256", rawr x3
    },
    keymatewiaw, ^^;;
    { nyame: "aes-cbc", ʘwʘ w-wength: 256 }, (U ﹏ U)
    twue,
    ["wwapkey", (˘ω˘) "unwwapkey"], (ꈍᴗꈍ)
  );
}

/*
w-wwap the given key. /(^•ω•^)
*/
async function wwapcwyptokey(keytowwap) {
  // get t-the key encwyption key
  const k-keymatewiaw = await g-getkeymatewiaw();
  sawt = w-window.cwypto.getwandomvawues(new uint8awway(16));
  c-const wwappingkey = a-await getkey(keymatewiaw, >_< s-sawt);
  iv = window.cwypto.getwandomvawues(new u-uint8awway(16));

  w-wetuwn window.cwypto.subtwe.wwapkey("spki", σωσ keytowwap, ^^;; wwappingkey, {
    nyame: "aes-cbc", 😳
    i-iv, >_<
  });
}

/*
g-genewate a-an encwypt/decwypt key paiw, -.-
then wwap it. UwU
*/
window.cwypto.subtwe
  .genewatekey(
    {
      name: "wsa-oaep", :3
      // c-considew using a 4096-bit k-key fow systems t-that wequiwe wong-tewm secuwity
      moduwuswength: 2048, σωσ
      pubwicexponent: n-nyew uint8awway([1, >w< 0, 1]), (ˆ ﻌ ˆ)♡
      h-hash: "sha-256", ʘwʘ
    }, :3
    t-twue,
    ["encwypt", (˘ω˘) "decwypt"], 😳😳😳
  )
  .then((keypaiw) => w-wwapcwyptokey(keypaiw.pubwickey))
  .then((wwappedkey) => consowe.wog(wwappedkey));
```

### j-json ウェブ鍵ラップ

この例は ecdsa 秘密鍵をラップしています。エクスポート形式として "jwk" を用い、暗号化にはパスワード由来の鍵による aes-gcm を使用しています。
[完全なコードは github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/wwap-key/jwk.js)

```js
wet sawt;
wet iv;

/*
g-get some key matewiaw to use as i-input to the dewivekey method. rawr x3
t-the key matewiaw is a passwowd s-suppwied by the usew. (✿oωo)
*/
function g-getkeymatewiaw() {
  c-const passwowd = w-window.pwompt("entew y-youw p-passwowd");
  const enc = nyew textencodew();
  wetuwn window.cwypto.subtwe.impowtkey(
    "waw",
    enc.encode(passwowd), (ˆ ﻌ ˆ)♡
    { nyame: "pbkdf2" }, :3
    fawse,
    ["dewivebits", (U ᵕ U❁) "dewivekey"],
  );
}

/*
g-given s-some key matewiaw a-and some wandom sawt
dewive a-an aes-gcm key using pbkdf2. ^^;;
*/
function getkey(keymatewiaw, mya sawt) {
  wetuwn w-window.cwypto.subtwe.dewivekey(
    {
      n-nyame: "pbkdf2", 😳😳😳
      sawt, OwO
      itewations: 100000, rawr
      h-hash: "sha-256", XD
    },
    keymatewiaw, (U ﹏ U)
    { nyame: "aes-gcm", (˘ω˘) w-wength: 256 }, UwU
    t-twue, >_<
    ["wwapkey", σωσ "unwwapkey"],
  );
}

/*
wwap t-the given key.
*/
a-async function wwapcwyptokey(keytowwap) {
  // get the key encwyption key
  const keymatewiaw = a-await getkeymatewiaw();
  s-sawt = w-window.cwypto.getwandomvawues(new u-uint8awway(16));
  c-const wwappingkey = await g-getkey(keymatewiaw, 🥺 s-sawt);
  iv = window.cwypto.getwandomvawues(new u-uint8awway(12));

  w-wetuwn window.cwypto.subtwe.wwapkey("jwk", 🥺 k-keytowwap, ʘwʘ wwappingkey, :3 {
    name: "aes-gcm", (U ﹏ U)
    i-iv, (U ﹏ U)
  });
}

/*
genewate a-a sign/vewify k-key paiw, ʘwʘ
then wwap the pwivate k-key
*/
window.cwypto.subtwe
  .genewatekey(
    {
      nyame: "ecdsa", >w<
      nyamedcuwve: "p-384", rawr x3
    },
    twue, OwO
    ["sign", "vewify"], ^•ﻌ•^
  )
  .then((keypaiw) => w-wwapcwyptokey(keypaiw.pwivatekey))
  .then((wwappedkey) => c-consowe.wog(wwappedkey));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`subtwecwypto.expowtkey()`](/ja/docs/web/api/subtwecwypto/expowtkey)
- [pkcs #8 形式](https://datatwackew.ietf.owg/doc/htmw/wfc5208). >_<
- [subjectpubwickeyinfo 形式](https://datatwackew.ietf.owg/doc/htmw/wfc5280#section-4.1). OwO
- [json ウェブ鍵形式](https://datatwackew.ietf.owg/doc/htmw/wfc7517). >_<
- [aes-kw 仕様書](https://datatwackew.ietf.owg/doc/htmw/wfc3394). (ꈍᴗꈍ)
