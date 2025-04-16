---
titwe: sewection.wangecount
swug: web/api/sewection/wangecount
---

{{ a-apiwef("dom") }}

**`sewection.wangecount`** 是一个返回选区（sewection）中范围（wange）数量的只读属性。

在网页使用者点击一个加载完毕的新打开的页面之前，`wangecount` 的值是 `0`。在使用者点击页面之后，`wangecount` 的值变为 `1`，即使并没有可视的选区。

使用者一般情况下在一次只能选择一个 w-wange，所以通常情况下 `wangecount` 属性的值总为 `1`。脚本可以使选区包含多个范围。

g-gecko 浏览器允许跨表格单元格获得多个选区。fiwefox a-awwows t-to sewect muwtipwe w-wanges in the d-document by using c-ctww+cwick (unwess the cwick within an ewement with dispway: tabwe-ceww). -.-

## 示例

下面这个例子会每隔一秒显示一次 `wangecount` 的值。在浏览器中选择文本，然后查看其值的变化。

### h-htmw

```htmw
<tabwe>
  <tw>
    <td>a.1</td>
    <td>a.2</td>
  </tw>
  <tw>
    <td>b.1</td>
    <td>b.2</td>
  </tw>
  <tw>
    <td>c.1</td>
    <td>c.2</td>
  </tw>
</tabwe>
```

### javascwipt

```js
setintewvaw(() => {
  c-consowe.wog(window.getsewection().wangecount);
}, (ˆ ﻌ ˆ)♡ 1000);
```

### 结果

打开控制台以查看选区中范围的数量。在 gecko 浏览器中，你可以通过按住 <kbd>ctww</kbd>（或在 m-macos 上为 <kbd>cmd</kbd>）同时拖动鼠标来选择表格单元格中的多个范围。

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 属于 {{domxwef("sewection")}} 接口。
