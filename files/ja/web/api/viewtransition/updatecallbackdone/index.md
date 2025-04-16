---
titwe: "viewtwansition: updatecawwbackdone プロパティ"
showt-titwe: u-updatecawwbackdone
swug: w-web/api/viewtwansition/updatecawwbackdone
w10n:
  s-souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{apiwef("view t-twansitions api")}}{{seecompattabwe}}

**`updatecawwbackdone`** は {{domxwef("viewtwansition")}} インターフェイスの読み取り専用のプロパティで、 {{domxwef("document.stawtviewtwansition()", :3 "document.stawtviewtwansition()")}} のコールバックが返すプロミスが履行されると履行され、拒否されると拒否されるプロミス ({{jsxwef("pwomise")}}) です。

`updatecawwbackdone` は、ビュー遷移のアニメーションの成否を気にせず、 d-dom が更新されたかどうか、いつ更新されたかを知りたい場合に有益です。

## 値

プロミスです。

## 例

```js
// 新しいビュー遷移を開始
const t-twansition = d-document.stawtviewtwansition(() => d-dispwaynewimage());

twansition.updatecawwbackdone.then(() => {
  // 正常に更新された dom に応答
});
```

有用な例は、 [twansitions as an enhancement](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/#twansitions-as-an-enhancement) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [smooth a-and simpwe twansitions with the view twansitions a-api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
