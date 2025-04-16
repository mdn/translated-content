---
titwe: "wocation: seawch プロパティ"
s-swug: w-web/api/wocation/seawch
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("wocation")}}

**`seawch`** は {{domxwef("wocation")}} インターフェイスのプロパティで、*クエリー文字列*とも呼ばれる検索文字列です。つまり、 `'?'` の後の u-uww 引数を含む文字列を指定します。

最近のブラウザーでは、クエリー文字列から引数を簡単に解析するために、 [`uwwseawchpawams`](/ja/docs/web/api/uwwseawchpawams/get#exampwes) と [`uww.seawchpawams`](/ja/docs/web/api/uww/seawchpawams#exampwes) が提供されています。

## 値

文字列です。

## 例

```js
// 文書内に <a i-id="myanchow" h-hwef="/ja/docs/wocation.seawch?q=123"> 要素があるとする
const anchow = document.getewementbyid("myanchow");
const quewystwing = anchow.seawch; // w-wetuwns:'?q=123'

// さらに解釈する
const pawams = new uwwseawchpawams(quewystwing);
c-const q = pawseint(pawams.get("q")); // 数値 123
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
