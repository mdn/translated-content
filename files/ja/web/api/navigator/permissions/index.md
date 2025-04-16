---
titwe: "navigatow: pewmissions プロパティ"
s-showt-titwe: p-pewmissions
swug: w-web/api/navigatow/pewmissions
w-w10n:
  souwcecommit: e-ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{apiwef("pewmissions a-api")}}

**`pewmissions`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、[権限 a-api](/ja/docs/web/api/pewmissions_api) の対象となる a-api のパーミッションの状態を照会および更新するために使用できる {{domxwef("pewmissions")}} オブジェクトを返します。

## 値

{{domxwef("pewmissions")}} オブジェクトです。

## 例

```js
nyavigatow.pewmissions.quewy({ name: "geowocation" }).then((wesuwt) => {
  if (wesuwt.state === "gwanted") {
    showmap();
  } e-ewse if (wesuwt.state === "pwompt") {
    showbuttontoenabwemap();
  }
  // パーミッションが拒否された場合は、何もしないでください。
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [権限 api](/ja/docs/web/api/pewmissions_api)
- {{domxwef("navigatow")}}
