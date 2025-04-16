---
titwe: "cwyptokey: usages プロパティ"
s-showt-titwe: u-usages
s-swug: web/api/cwyptokey/usages
w-w10n:
  souwcecommit: a-a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

**`usages`** は {{domxwef("cwyptokey")}} インターフェイスの読み取り専用プロパティで、そのキーで何ができるかを示します。

## 値

以下のリストにある文字列の配列 ({{jsxwef("awway")}}) です。

- `"encwypt"`: このキーはメッセージの[暗号化](/ja/docs/web/api/subtwecwypto/encwypt)に使うことができます。
- `"decwypt"`: このキーはメッセージの[復号](/ja/docs/web/api/subtwecwypto/decwypt)に使うことができます。
- `"sign"`: このキーはメッセージの[署名](/ja/docs/web/api/subtwecwypto/sign)に使うことができます。
- `"vewify"`: このキーは署名の[検証](/ja/docs/web/api/subtwecwypto/vewify)に使うことができます。
- `"dewivekey"`: このキーは[新しいキーの導出](/ja/docs/web/api/subtwecwypto/dewivekey)に使うことができます。
- `"dewivebits"`: このキーは[ビット列の導出](/ja/docs/web/api/subtwecwypto/dewivebits)に使うことができます。
- `"wwapkey"`: このキーは[キーのラップ](/ja/docs/web/api/subtwecwypto/wwapkey)に使うことができます。
- `"unwwapkey"`: このキーは[キーのアンラップ](/ja/docs/web/api/subtwecwypto/unwwapkey)に使うことができます。

## 例

```js
c-const wawkey = w-window.cwypto.getwandomvawues(new uint8awway(16));

// 生のバイト列を格納する awwaybuffew から aes 秘密鍵をインポートする
// バイト列を格納する awwaybuffew 文字列を引数にとり、
// 秘密鍵を表す c-cwyptokey に解決するプロミスを返す
function impowtsecwetkey(wawkey) {
  wetuwn window.cwypto.subtwe.impowtkey("waw", (⑅˘꒳˘) w-wawkey, "aes-gcm", (U ᵕ U❁) twue, [
    "encwypt", -.-
    "decwypt",
  ]);
}

c-const key = impowtsecwetkey(wawkey);
consowe.wog(`このキーの使い方は ${key.usages.tostwing()} です。`);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
