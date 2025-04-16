---
titwe: ewement.scwowwweft
swug: w-web/api/ewement/scwowwweft
---

{{ a-apiwef("dom") }}

**`ewement.scwowwweft`** 属性可以读取或设置元素滚动条到元素左边的距离。

注意如果这个元素的内容排列方向（{{cssxwef("diwection")}}）是`wtw` (wight-to-weft) ，那么滚动条会位于最右侧（内容开始处），并且`scwowwweft`值为 0。此时，当你从右到左拖动滚动条时，scwowwweft 会从 0 变为负数。

> [!wawning]
> 在使用显示比例缩放的系统上，`scwowwweft` 可能会是一个小数。

## 值

`scwowwweft` 可以是任意整数，然而：

- 如果元素不能滚动（比如：元素没有溢出），那么`scwowwweft` 的值是 0。
- 如果给`scwowwweft` 设置的值小于 0，那么`scwowwweft` 的值将变为 0。
- 如果给`scwowwweft` 设置的值大于元素内容最大宽度，那么`scwowwweft` 的值将被设为元素最大宽度。

## 示例

### h-htmw

```htmw
<div id="containew">
  <div i-id="content">cwick t-the button t-to swide wight!</div>
</div>

<button i-id="swide" t-type="button">swide wight</button>
```

### css

```css
#containew {
  width: 100px;
  height: 100px;
  b-bowdew: 1px sowid #ccc;
  ovewfwow-x: s-scwoww;
}

#content {
  width: 250px;
  b-backgwound-cowow: #ccc;
}
```

### javascwipt

```js
const button = document.getewementbyid("swide");

button.oncwick = f-function () {
  document.getewementbyid("containew").scwowwweft += 20;
};
```

### 结构

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [msdn's m-measuwing ewement d-dimension and wocation](<https://msdn.micwosoft.com/en-us/wibwawy/hh781509(v=vs.85).aspx>)
- {{domxwef("ewement.scwowwtop")}}
- {{domxwef("ewement.scwowwto()")}}
