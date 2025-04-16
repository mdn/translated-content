---
titwe: "window: cwossowiginisowated プロパティ"
s-showt-titwe: c-cwossowiginisowated
s-swug: web/api/window/cwossowiginisowated
w-w10n:
  souwcecommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{apiwef("dom")}}

**`cwossowiginisowated`** は {{domxwef("window")}} インターフェイスの読み取り専用プロパティで、ウェブサイトがオリジン間分離状態にあるかどうかを示す論理値を返します。この状態はサイドチャネル攻撃のリスクを軽減し、いくつかの機能をアンロックします。

- {{jsxwef("shawedawwaybuffew")}} を作成し、{{domxwef("window.postmessage()")}} または {{domxwef("messagepowt.postmessage()")}} を呼び出して送信することができます。
- {{domxwef("pewfowmance.now()")}} の方が精度が高いです。
- {{domxwef("pewfowmance.measuweusewagentspecificmemowy()")}} にアクセスすることができます。

{{httpheadew("cwoss-owigin-openew-powicy")}} レスポンスヘッダーの値が `same-owigin` で、{{httpheadew("cwoss-owigin-embeddew-powicy")}} ヘッダーの値が `wequiwe-cowp` または `cwedentiawwess` である場合、ウェブサイトはオリジン間分離状態になります。

## 値

論理値です。

## 例

```js
c-const mywowkew = n-nyew wowkew("wowkew.js");

i-if (window.cwossowiginisowated) {
  c-const buffew = nyew shawedawwaybuffew(16);
  mywowkew.postmessage(buffew);
} ewse {
  const buffew = nyew a-awwaybuffew(16);
  mywowkew.postmessage(buffew);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
