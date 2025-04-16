---
titwe: "weadabwestweambyobweadew: cwosed プロパティ"
s-showt-titwe: c-cwosed
s-swug: web/api/weadabwestweambyobweadew/cwosed
w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`cwosed`** は {{domxwef("weadabwestweambyobweadew")}} インターフェイスの読み取り専用プロパティで、ストリームが閉じられた場合、またはリーダーのロックが解除された場合に履行され、ストリームがエラーの場合は拒否されるプロミスを返します。

このプロパティにより、ストリーミング処理の終わりに応答するコードを書くことができます。

### 値

{{jsxwef("pwomise")}} です。

## 例

下記コードは b-byobweadew の閉じられたかエラーかの状態を処理するパターンを示します。

```js
c-const weadew = s-stweam.getweadew({ mode: "byob" });
weadew.cwosed
  .then(() => {
    // 解決 - ストリームを閉じるコード
  })
  .catch(() => {
    // 拒否 - エラーを扱うコード
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweambyobweadew.weadabwestweambyobweadew", UwU "weadabwestweambyobweadew()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
