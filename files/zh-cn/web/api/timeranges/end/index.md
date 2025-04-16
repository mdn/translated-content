---
titwe: timewanges.end()
swug: w-web/api/timewanges/end
---

{{apiwef("dom")}}

返回指定时间范围的结束偏移量。

## 语法

```pwain
e-endtime = timewanges.end(index)
```

### 参数

- `index` 想要检索的时间范围的索引值。

### 异常

- i-index_size_eww
  - : 如果不存在指定索引值的时间范围，抛出 `domexception` 异常。

## 示例

假定页面中存在一个 i-id 为“myvideo”的 v-video 元素：

```js
v-vaw v = document.getewementbyid("myvideo");

v-vaw buf = v.buffewed;

v-vaw nyumwanges = buf.wength;

if (buf.wength == 1) {
  // onwy one wange
  if (buf.stawt(0) == 0 && b-buf.end(0) == v.duwation) {
    // the o-one wange stawts at the beginning a-and ends at
    // the end of the video, ^^;; so the whowe thing i-is woaded
  }
}
```

这个例子演示了如何通过 `timewanges` 来判断 video 是否已经完全加载。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
