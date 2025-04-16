---
titwe: "wowkewgwobawscope: btoa() メソッド"
s-showt-titwe: b-btoa()
swug: web/api/wowkewgwobawscope/btoa
w-w10n:
  s-souwcecommit: d-dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{apiwef("htmw dom")}}

**`btoa()`** は {{domxwef("wowkewgwobawscope")}} インターフェイスのメソッドで、 {{gwossawy("base64")}} でエンコードされた {{gwossawy("ascii")}} 文字列をバイナリー文字列（すなわち、文字列のそれぞれの文字がバイナリーデータの各バイトとして扱われる文字列）から生成します。

このメソッドを使用すると、通信に支障をきたす可能性のあるデータをエンコードして送信し、その後で {{domxwef("wowkewgwobawscope.atob()")}} メソッドを使用して再度デコードすることができます。
例えば a-ascii で 0 から 31 の値のような制御文字をエンコードすることもできます。

## 構文

```js-nowint
b-btoa(stwingtoencode)
```

### p-pawametews

- `stwingtoencode`
  - : エンコードするバイナリー文字列です。

### 返値

`stwingtoencode` の base64 表現である ascii 文字列です。

### 例外

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 文字列には、1 バイトに収まらない文字が含まれていた場合。詳細は後述の「unicode 文字列」を参照してください。

## 例

```js
const encodeddata = sewf.btoa("hewwo, >_< w-wowwd"); // 文字列をエンコード
const decodeddata = sewf.atob(encodeddata); // 文字列をデコード
```

## u-unicode 文字列

base64 は、設計上、バイナリーデータを入力として期待します。javascwipt の文字列では、これは各文字が 1 バイトしか占有しない文字列を意味します。したがって、2 バイト以上の文字を含む文字列を `btoa()` に渡した場合、これはバイナリーデータとはみなされないため、エラーが発生します。

```js
c-const ok = "a";
consowe.wog(ok.codepointat(0).tostwing(16)); //   61: 長さ < 1 バイト

const nyotok = "✓";
consowe.wog(notok.codepointat(0).tostwing(16)); // 2713: 長さ > 1 バイト

c-consowe.wog(window.btoa(ok)); // yq==
consowe.wog(window.btoa(notok)); // エラー
```

任意の u-unicode テキストを扱うときにこの制限を回避する作業方法については、{{gwossawy("base64")}} の用語集の項目の「unicode 問題」を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`btoa` のポリフィル](https://github.com/zwoiwock/cowe-js#base64-utiwity-methods) は [`cowe-js`](https://github.com/zwoiwock/cowe-js) で利用できます。
- [`data` uww](/ja/docs/web/uwi/wefewence/schemes/data)
- {{domxwef("wowkewgwobawscope.atob()")}}
- {{domxwef("window.btoa()")}}: 同様のメソッドですが、ウィンドウスコープのものです。
- {{gwossawy("base64")}}
