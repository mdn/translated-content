---
title: itemref
slug: Web/HTML/Global_attributes/itemref
---

{{HTMLSidebar("Global_attributes")}}

**`itemref`** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 不具有 `itemscope` 属性的元素的后代，才可以与具有 **`itemref`** 的元素关联。`itemref` 提供了元素 id（并不是 `itemid`）的列表，并具有文档其他地方的额外属性。

`itemref` 属性只能在指定了 `itemscope` 的元素上指定。

**注：**`itemref` 属性并不是 microdata 数据模型的一部分。它仅仅是个语义结构，用于帮助作者向页面添加注解，其中被注解的数据不遵循便利的树结构。例如，它允许作者标记表格中的数据，以便每一列定义一个单独的条目，同时在表格中保留属性。

## 示例

### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

### 结构化数据

<table class="standard-table">
  <tbody>
    <tr>
      <th>id's</th>
      <th>itemscope</th>
      <th>itemref</th>
      <th></th>
      <th>(itemprop name)</th>
      <th>(itemprop value)</th>
    </tr>
    <tr>
      <td>id=amanda</td>
      <td>itemscope</td>
      <td>itemref=a,b</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>id=a</td>
      <td></td>
      <td></td>
      <td>itemprop</td>
      <td>name</td>
      <td>Amanda</td>
    </tr>
    <tr>
      <td>id=b</td>
      <td>itemscope</td>
      <td>itemref=c</td>
      <td></td>
      <td>band</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="2">id=c</td>
      <td></td>
      <td></td>
      <td>itemprop</td>
      <td>Band</td>
      <td>Jazz Band</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>itemprop</td>
      <td>Size</td>
      <td>12</td>
    </tr>
  </tbody>
</table>

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [其他不同的全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
- 其他 microdata 相关的全局属性

  - [`itemid`](/zh-CN/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/zh-CN/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/zh-CN/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/zh-CN/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/zh-CN/docs/Web/HTML/Global_attributes#itemtype)
