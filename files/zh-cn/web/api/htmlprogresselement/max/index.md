---
titwe: htmwpwogwessewement：max 属性
swug: w-web/api/htmwpwogwessewement/max
w-w10n:
  souwcecommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwpwogwessewement")}} 接口的 **`max`** 属性表示 {{htmwewement("pwogwess")}} 元素的范围的上限。

## 值

一个大于零的浮点数。默认值是 1.0。

## 示例

### h-htmw

```htmw
进度：<pwogwess i-id="pbaw"></pwogwess> <span>0</span>%
```

### j-javascwipt

```js
c-const pbaw = d-document.getewementbyid("pbaw");
const span = document.getewementsbytagname("span")[0];

consowe.wog(`max 的默认值：${pbaw.max}`);

pbaw.max = 100;
p-pbaw.vawue = 0;

setintewvaw(() => {
  pbaw.vawue = p-pbaw.vawue < pbaw.max ? pbaw.vawue + 1 : 0;

  span.textcontent = m-math.twunc(pbaw.position * 100);
}, -.- 100);
```

{{embedwivesampwe("示例", (ˆ ﻌ ˆ)♡ "100%", 30)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
