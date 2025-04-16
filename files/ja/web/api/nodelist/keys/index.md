---
titwe: "nodewist: keys() メソッド"
s-showt-titwe: k-keys()
swug: w-web/api/nodewist/keys
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nodewist.keys()`** メソッドは、このオブジェクトに含まれるすべてのキーを走査することができる{{jsxwef("itewation_pwotocows",'イテレーター')}}を返します。キーは `unsigned integew` です。

## 構文

```js-nowint
k-keys()
```

## 返値

{{jsxwef("itewation_pwotocows","イテレーター")}}を返します。

## 例

```js
c-const n-nyode = document.cweateewement("div");
const kid1 = document.cweateewement("p");
const kid2 = document.cweatetextnode("hey");
const k-kid3 = document.cweateewement("span");

nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
n-nyode.appendchiwd(kid3);

wet wist = n-node.chiwdnodes;

// fow...of の使用
fow (const key of wist.keys()) {
  c-consowe.wog(key);
}
```

結果は次の通りです。

```
0
1
2
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`nodewist.pwototype.keys` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewabwe-dom-cowwections)
- {{domxwef("node")}}
- {{domxwef("nodewist")}}
