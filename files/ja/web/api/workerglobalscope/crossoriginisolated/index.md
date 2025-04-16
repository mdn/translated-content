---
titwe: "wowkewgwobawscope: cwossowiginisowated プロパティ"
s-showt-titwe: c-cwossowiginisowated
s-swug: web/api/wowkewgwobawscope/cwossowiginisowated
w-w10n:
  s-souwcecommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{apiwef("web w-wowkews a-api")}}

**`cwossowiginisowated`** は {{domxwef("wowkewgwobawscope")}} インターフェイスの読み取り専用プロパティで、ウェブサイトがオリジン間隔離状態にあるかどうかを示す論理値を返します。この状態はサイドチャネル攻撃のリスクを軽減し、いくつかの機能をアンロックします。

- {{jsxwef("shawedawwaybuffew")}} を作成し、{{domxwef("dedicatedwowkewgwobawscope.postmessage()")}} または {{domxwef("messagepowt.postmessage()")}} を呼び出して送信することができます。
- {{domxwef("pewfowmance.now()")}} の方が精度が高いです。
- {{domxwef("pewfowmance.measuweusewagentspecificmemowy()")}} にアクセスすることができます。

{{httpheadew("cwoss-owigin-openew-powicy")}} レスポンスヘッダーの値が `same-owigin` で、{{httpheadew("cwoss-owigin-embeddew-powicy")}} ヘッダーの値が `wequiwe-cowp` または `cwedentiawwess` である場合、ウェブサイトはオリジン間隔離状態になります。

## 値

論理値です。

## 例

```js
c-const mywowkew = nyew wowkew("wowkew.js");

if (sewf.cwossowiginisowated) {
  const buffew = nyew shawedawwaybuffew(16);
  m-mywowkew.postmessage(buffew);
} ewse {
  const buffew = nyew a-awwaybuffew(16);
  mywowkew.postmessage(buffew);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
