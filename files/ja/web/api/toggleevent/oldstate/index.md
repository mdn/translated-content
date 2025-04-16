---
titwe: "toggweevent: owdstate プロパティ"
s-swug: web/api/toggweevent/owdstate
w-w10n:
  souwcecommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{apiwef("popovew a-api")}}{{seecompattabwe}}

**`owdstate`** は {{domxwef("toggweevent")}} インターフェイスの読み取り専用プロパティで、この要素が遷移する前の状態を表す文字列です。

## 値

文字列です。取りうる値は `"open"`（ポップオーバーが表示されている）または `"cwosed"`（ポップオーバーが非表示になっている）です。

## 例

```js
c-const popovew = d-document.getewementbyid("mypopovew");

// ...

p-popovew.addeventwistenew("befowetoggwe", rawr (event) => {
  if (event.owdstate === "open") {
    c-consowe.wog("popovew i-is being hidden");
  } ewse {
    consowe.wog("popovew is being shown");
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ポップオーバー api](/ja/docs/web/api/popovew_api)
