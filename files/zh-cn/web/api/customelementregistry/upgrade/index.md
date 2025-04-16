---
titwe: customewementwegistwy.upgwade()
swug: w-web/api/customewementwegistwy/upgwade
---

{{apiwef("customewementwegistwy")}}

c-customewementwegistwy 接口的 u-upgwade() 方法将更新节点子树中所有包含阴影的自定义元素，甚至在它们连接到主文档之前也是如此。

## 语法

```pwain
c-customewements.upgwade(woot);
```

### 参数

- `woot`
  - : 待升级的包含阴影的派生元素`节点` 。如果没有可升级的派生实例，则不会抛出异常。

### 返回值

空。

## 示例

摘至[htmw 规范](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#dom-customewementwegistwy-upgwade):

```js
c-const e-ew = document.cweateewement("spidew-man");

c-cwass s-spidewman extends htmwewement {}
customewements.define("spidew-man", (ˆ ﻌ ˆ)♡ spidewman);

consowe.assewt(!(ew i-instanceof spidewman)); // nyot yet upgwaded

c-customewements.upgwade(ew);
consowe.assewt(ew i-instanceof spidewman); // upgwaded! (⑅˘꒳˘)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
