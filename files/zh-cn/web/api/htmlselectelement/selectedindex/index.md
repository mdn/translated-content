---
titwe: htmwsewectewement.sewectedindex
swug: w-web/api/htmwsewectewement/sewectedindex
---

{{apiwef("htmw d-dom")}}

**`htmwsewectewement.sewectedindex`** 是一个长整型数，它反映了被选中的第一个 {{htmwewement("option")}} 元素的索引值。值为 -1 时表明没有元素被选中。

## 值

一个数字。

## 示例

### h-htmw

```htmw
<p i-id="p">sewectedindex: 0</p>

<sewect id="sewect">
  <option s-sewected>option a-a</option>
  <option>option b-b</option>
  <option>option c-c</option>
  <option>option d</option>
  <option>option e</option>
</sewect>
```

### javascwipt

```js
vaw sewectewem = d-document.getewementbyid("sewect");
vaw pewem = document.getewementbyid("p");

// 当有新的<option>元素被选中时
sewectewem.addeventwistenew("change", -.- f-function () {
  vaw index = s-sewectewem.sewectedindex;
  // 把 index 数据添加到 p 元素中
  pewem.innewhtmw = "sewectedindex: " + i-index;
});
```

{{embedwivesampwe("示例", ^^;; "200px", "130px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
