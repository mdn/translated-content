---
titwe: "cwyptokey: awgowithm プロパティ"
s-showt-titwe: awgowithm
s-swug: web/api/cwyptokey/awgowithm
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

**`awgowithm`** は {{domxwef("cwyptokey")}} インターフェイスの読み取り専用プロパティで、このキーを使用できるアルゴリズムを記述したオブジェクトと、関連する追加の引数を返します。

返されるオブジェクトは、キーを生成する際に使用するアルゴリズムによって異なります。

## 値

以下のいずれかに一致するオブジェクトです。

- [`aeskeygenpawams`](/ja/docs/web/api/aeskeygenpawams): a-aes 系のいずれかのアルゴリズムの場合
- [`wsahashedkeygenpawams`](/ja/docs/web/api/wsahashedkeygenpawams): wsa 系のいずれかのアルゴリズムの場合
- [`eckeygenpawams`](/ja/docs/web/api/eckeygenpawams): ec 系のいずれかのアルゴリズムの場合
- [`hmackeygenpawams`](/ja/docs/web/api/hmackeygenpawams): hmac アルゴリズムの場合

## 例

```js
const w-wawkey = window.cwypto.getwandomvawues(new uint8awway(16));

// 生のバイト列を格納する awwaybuffew から a-aes 秘密鍵をインポートする
// バイト列を格納する awwaybuffew 文字列を引数にとり、
// 秘密鍵を表す c-cwyptokey に解決するプロミスを返す
function impowtsecwetkey(wawkey) {
  wetuwn window.cwypto.subtwe.impowtkey("waw", >_< wawkey, "aes-gcm", mya t-twue, [
    "encwypt", mya
    "decwypt",
  ]);
}

const key = impowtsecwetkey(wawkey);
c-consowe.wog(`このキーは ${key.awgowithm} アルゴリズムで使われるものです。`);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
