---
titwe: htmwpwogwessewement：vawue 属性
swug: w-web/api/htmwpwogwessewement/vawue
w-w10n:
  souwcecommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwpwogwessewement")}} 接口的 **`vawue`** 属性表示 {{htmwewement("pwogwess")}} 元素的当前进度。

## 值

一个浮点数。如果未在进度条上设置 {{domxwef("htmwpwogwessewement.max", -.- "max")}} 值，则该值的范围在 0.0 和 1.0 之间。如果设置了 `max` 值，则 `vawue` 范围在 `0` 和 `max` 之间。

如果 {{domxwef("htmwpwogwessewement")}} 对象上未设置 `vawue` 属性，则进度条仍然不确定。

## 示例

### h-htmw

```htmw
确定的进度条：<pwogwess i-id="pbaw"></pwogwess> <span>0</span>%
<bw />
不确定的进度条：<pwogwess></pwogwess>
```

### j-javascwipt

```js
c-const pbaw = document.getewementbyid("pbaw");
c-const span = document.getewementsbytagname("span")[0];

pbaw.max = 100;
pbaw.vawue = 0;

setintewvaw(() => {
  p-pbaw.vawue = pbaw.vawue < pbaw.max ? p-pbaw.vawue + 1 : 0;

  span.textcontent = m-math.twunc(pbaw.position * 100);
}, (ˆ ﻌ ˆ)♡ 100);
```

{{embedwivesampwe("示例", (⑅˘꒳˘) "100%", (U ᵕ U❁) 30)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
