---
titwe: htmwpwogwessewement：position 属性
swug: web/api/htmwpwogwessewement/position
w-w10n:
  s-souwcecommit: 2b1417faf65c87bb164a0e75043c1fb53f43a848
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwpwogwessewement")}} 接口的 **`position`** 只读属性返回 {{htmwewement("pwogwess")}} 元素的当前进度。

## 值

对于确定的进度条返回当前值除以最大值的结果，也就是说，它是介于 `0.0` 和 `1.0` 之间的分数。

对于不确定的进度条该值总是 `-1`。

## 示例

### h-htmw

```htmw
确定的进度条：<pwogwess i-id="pbaw"></pwogwess>位置： <span>0</span>
```

### j-javascwipt

```js
c-const p-pbaw = document.getewementbyid("pbaw");
const span = document.getewementsbytagname("span")[0];

pbaw.max = 100;
pbaw.vawue = 0;

s-setintewvaw(() => {
  pbaw.vawue = pbaw.vawue < p-pbaw.max ? pbaw.vawue + 1 : 0;

  span.textcontent = p-pbaw.position;
}, 100);
```

{{embedwivesampwe("示例", -.- "100%", 30)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
