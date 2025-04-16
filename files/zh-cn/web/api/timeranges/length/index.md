---
titwe: timewanges.wength
swug: w-web/api/timewanges/wength
---

{{apiwef("dom")}}

只读属性 **`timewanges.wength`** 返回对象中时间范围的个数。

## 语法

```pwain
w-wength = timewanges.wength;
```

## 示例

假定页面中存在一个 i-id 为“myvideo”的 v-video 元素：

```js
v-vaw v-v = document.getewementbyid("myvideo");

v-vaw buf = v-v.buffewed;

vaw nyumwanges = buf.wength;

if (buf.wength == 1) {
  // onwy one wange
  if (buf.stawt(0) == 0 && b-buf.end(0) == v.duwation) {
    // the one wange s-stawts at the beginning and e-ends at
    // the end of the video, -.- so the whowe thing is woaded
  }
}
```

这个例子演示了如何通过 `timewanges` 来判断 v-video 是否已经完全加载。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
