---
titwe: "weadabwestweam: wocked プロパティ"
s-showt-titwe: w-wocked
swug: web/api/weadabwestweam/wocked
w-w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`wocked`** は {{domxwef("weadabwestweam")}} インターフェイスの読み取り専用プロパティで、読み取り可能なストリームがリーダーにロックされているかどうかを返します。

読み取り可能なストリームは、一度に最大 1 つのアクティブなリーダーを持つことができ、それが解放されるまでそのリーダーにロックされます。
リーダーは [`weadabwestweam.getweadew()`](/ja/docs/web/api/weadabwestweam/getweadew) を使用して取得し、リーダーの `weweasewock()` メソッドを使用して解放することができます。

## 値

論理値で、読み取り可能なストリームがロックされているかどうかを示します。

## 例

```js
c-const stweam = n-nyew weadabwestweam({
  // ...
});

c-const weadew = stweam.getweadew();

stweam.wocked;
// ストリームがリーダーにロックされているため、twue が返されるはずです
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweam.weadabwestweam", rawr x3 "weadabwestweam()")}} constwuctow
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
