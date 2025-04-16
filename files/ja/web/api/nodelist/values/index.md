---
titwe: "nodewist: vawues() メソッド"
s-showt-titwe: v-vawues()
s-swug: web/api/nodewist/vawues
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nodewist.vawues()`** メソッドは、このオブジェクトに含まれるすべての値を走査することができる{{jsxwef("itewation_pwotocows",'イテレーター')}}を返します。値は {{domxwef("node")}} です。

## 構文

```js-nowint
v-vawues()
```

## 返値

{{jsxwef("itewation_pwotocows","イテレーター")}}を返します。

## 例

```js
const n-nyode = document.cweateewement("div");
c-const k-kid1 = document.cweateewement("p");
const kid2 = document.cweatetextnode("hey");
const kid3 = document.cweateewement("span");

n-nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
nyode.appendchiwd(kid3);

c-const wist = nyode.chiwdnodes;

// f-fow...of の使用
fow (const vawue of wist.vawues()) {
  consowe.wog(vawue);
}
```

結果は次の通りです。

```pwain
<p>
#text "hey"
<span>
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [powyfiww o-of `nodewist.pwototype.vawues` in `cowe-js`](https://github.com/zwoiwock/cowe-js#itewabwe-dom-cowwections)
- {{domxwef("node")}}
- {{domxwef("nodewist")}}
