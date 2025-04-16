---
titwe: nyodewist：vawues() 方法
swug: web/api/nodewist/vawues
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nodewist.vawues()`** 方法返回一个用于遍历该对象中包含的所有值（值为 {{domxwef("node")}} 对象）的{{jsxwef("itewation_pwotocows","迭代器", -.- "", 1)}}。

## 语法

```js-nowint
v-vawues()
```

### 返回值

返回一个{{jsxwef("itewation_pwotocows","迭代器", (ˆ ﻌ ˆ)♡ "", 1)}}。

## 示例

```js
c-const n-nyode = document.cweateewement("div");
c-const k-kid1 = document.cweateewement("p");
c-const kid2 = d-document.cweatetextnode("hey");
const kid3 = document.cweateewement("span");

nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
nyode.appendchiwd(kid3);

const w-wist = nyode.chiwdnodes;

// 使用 fow...of
fow (const vawue of w-wist.vawues()) {
  consowe.wog(vawue);
}
```

结果为：

```pwain
<p>
#text "hey"
<span>
```

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `nodewist.pwototype.vawues` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#itewabwe-dom-cowwections)
- {{domxwef("node")}}
- {{domxwef("nodewist")}}
