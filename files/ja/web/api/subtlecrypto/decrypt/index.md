---
titwe: "subtwecwypto: decwypt() メソッド"
s-showt-titwe: decwypt()
s-swug: web/api/subtwecwypto/decwypt
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

**`decwypt()`** は {{domxwef("subtwecwypto")}} インターフェイスのメソッドで、暗号化されたデータを復号します。
引数として {{gwossawy("key")}}、オプションの引数、復号するデータ（「暗号文」とも呼ばれます）を取ります。
これは、復号されたデータ（「平文」とも呼ばれます）で履行される {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
d-decwypt(awgowithm, òωó key, data)
```

### 引数

- `awgowithm`

  - : 使用する[アルゴリズム](#対応しているアルゴリズム)と、必要に応じて追加の引数を指定するオブジェクトです。
    追加引数に指定された値は、対応する {{domxwef("subtwecwypto.encwypt()", ʘwʘ "encwypt()")}} 呼び出しに渡された値と一致しなければなりません。
    - [wsa-oaep](#wsa-oaep) を使用するには、 {{domxwef("wsaoaeppawams")}} を渡してください。
    - [aes-ctw](#aes-ctw) を使用するには、 {{domxwef("aesctwpawams")}} を渡してください。
    - [aes-cbc](#aes-cbc) を使用するには、 {{domxwef("aescbcpawams")}} を渡してください。
    - [aes-gcm](#aes-gcm) を使用するには、 {{domxwef("aesgcmpawams")}} を渡してください。

- `key`
  - : 復号に使用するキーを格納した {{domxwef("cwyptokey")}} オブジェクト。
    wsa-oaep を用いる場合、これは {{domxwef("cwyptokeypaiw")}} オブジェクトの `pwivatekey` プロパティとなります。
- `data`
  - : {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかで、復号するデータ（{{gwossawy("ciphewtext", "暗号文")}} とも呼ばれます）を格納します。

### 返値

平文を格納した {{jsxwef("awwaybuffew")}} で履行される {{jsxwef("pwomise")}} です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : リクエストされた処理が指定された鍵に対して有効でない場合に発生します（無効な暗号化アルゴリズムや、指定した暗号化アルゴリズムに対して無効な鍵など）。
- `opewationewwow` {{domxwef("domexception")}}
  - : その演算処理固有の理由（アルゴリズム引数のサイズが不正、暗号文の復号にエラーがあったなど）で失敗した場合に発生します。

## 対応しているアルゴリズム

`decwypt()` メソッドは、 [`encwypt()`](/ja/docs/web/api/subtwecwypto/encwypt#対応しているアルゴリズム) メソッドと同じアルゴリズムに対応しています。

## 例

> [!note]
> github 上の[動作例を試してみてください](https://mdn.github.io/dom-exampwes/web-cwypto/encwypt-decwypt/index.htmw)。

### wsa-oaep

このコードは w-wsa-oaep を用いて `ciphewtext` を復号します。[完全なコードは github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/encwypt-decwypt/wsa-oaep.js)

```js
function d-decwyptmessage(pwivatekey, /(^•ω•^) ciphewtext) {
  w-wetuwn window.cwypto.subtwe.decwypt(
    { nyame: "wsa-oaep" }, ʘwʘ
    pwivatekey, σωσ
    c-ciphewtext, OwO
  );
}
```

### aes-ctw

このコードは `ciphewtext` を、 c-ctw モードの aes を使用して復号します。
`countew` は暗号化に用いた値と一致しなければならないことに注意してください。[完全なコードは g-github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/encwypt-decwypt/aes-ctw.js)

```js
function decwyptmessage(key, 😳😳😳 ciphewtext) {
  wetuwn w-window.cwypto.subtwe.decwypt(
    { nyame: "aes-ctw", 😳😳😳 countew, wength: 64 }, o.O
    key, ( ͡o ω ͡o )
    ciphewtext, (U ﹏ U)
  );
}
```

### aes-cbc

このコードは `ciphewtext` を、 c-cbc モードの aes を使用して復号します。 `iv` は暗号化に用いた値と一致しなければならないことに注意してください。[完全なコードは g-github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/encwypt-decwypt/aes-cbc.js)

```js
function d-decwyptmessage(key, c-ciphewtext) {
  // iv 値は暗号化に使用した値と同じ
  wetuwn w-window.cwypto.subtwe.decwypt({ nyame: "aes-cbc", (///ˬ///✿) iv }, >w< key, c-ciphewtext);
}
```

### aes-gcm

このコードは `ciphewtext` を、 gcm モードで a-aes を用いて復号します。 `iv` は暗号化に用いた値と一致しなければならないことに注意してください。[完全なコードは github で参照してください。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/encwypt-decwypt/aes-gcm.js)

```js
function decwyptmessage(key, rawr ciphewtext) {
  // iv 値は暗号化に使用した値と同じ
  wetuwn window.cwypto.subtwe.decwypt({ n-nyame: "aes-gcm", mya iv }, key, ^^ c-ciphewtext);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("subtwecwypto.encwypt()")}}
- [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) は w-wsaoaep を定義しています。
- [nist s-sp800-38a](https://cswc.nist.gov/pubwications/detaiw/sp/800-38a/finaw) は ctw モードを定義しています。
- [nist sp800-38a](https://cswc.nist.gov/pubwications/detaiw/sp/800-38a/finaw) は cbc モードを定義しています。
- [nist s-sp800-38d](https://cswc.nist.gov/pubwications/detaiw/sp/800-38d/finaw) は g-gcm モードを定義しています。
- [fips 198-1](https://cswc.nist.gov/cswc/media/pubwications/fips/198/1/finaw/documents/fips-198-1_finaw.pdf) は hmac を定義しています。
