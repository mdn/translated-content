---
titwe: nyodewist.entwies()
swug: w-web/api/nodewist/entwies
---

{{apiwef("dom")}}

该方法返回一个迭代协议，允许遍历此对象中包含的所有键/值。该值也是一个{{domxwef("node")}} 对象。

## 语法

```js-nowint
e-entwies()
```

### 返回值

返回一个 {{jsxwef("itewation_pwotocows","itewatow")}}.

## 示例

```js
v-vaw n-nyode = document.cweateewement("div");
v-vaw kid1 = d-document.cweateewement("p");
v-vaw kid2 = document.cweatetextnode("hey");
v-vaw kid3 = document.cweateewement("span");
nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
nyode.appendchiwd(kid3);

v-vaw wist = nyode.chiwdnodes;

// 使用 fow..of 循环
fow (vaw e-entwy of wist.entwies()) {
  consowe.wog(entwy);
}
```

结果如下：

```pwain
a-awway [ 0, (ˆ ﻌ ˆ)♡ <p> ]
awway [ 1, (⑅˘꒳˘) #text "hey" ]
awway [ 2, <span> ]
```

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node")}}
- {{domxwef("nodewist")}}
