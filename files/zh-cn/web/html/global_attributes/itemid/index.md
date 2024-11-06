---
title: itemid
slug: Web/HTML/Global_attributes/itemid
---

{{HTMLSidebar("Global_attributes")}}

**`itemid`** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 是元素的唯一的全局标识符。`itemid` 属性只能为同时拥有 **`itemscope`** 和 **`itemtype`** 的元素指定。同时，`itemid` 只能为拥有 `itemscope` 的元素指定，它的相应 `itemtype` 引用或定义了支持全局标识符的词汇。

`itemtype` 的全局标识符的准确含义，由该标识符以指定的词汇提供。词汇定义了全局标识符相同的多个元素是否可以共存，并且如果是这样，这些元素如何处理。

**注：**Whatwg.org 的定义规定了 `itemid` 必须是 URL。但是，下面的示例正确展示了 URN 也可以使用。这个不一致性可能反映了 Microdata 规范的不完善性。

## 示例

### HTML

```html
<dl
  itemscope
  itemtype="http://vocab.example.net/book"
  itemid="urn:isbn:0-330-34032-8">
  <dt>Title</dt>
  <dd itemprop="title">The Reality Dysfunction</dd>
  <dt>Author</dt>
  <dd itemprop="author">Peter F. Hamilton</dd>
  <dt>Publication date</dt>
  <dd><time itemprop="pubdate" datetime="1996-01-26">26 January 1996</time></dd>
</dl>
```

### 结构化数据

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2" rowspan="1">
        <div class="jyrRxf-eEDwDf jcd3Mb IZ65Hb-hUbt4d">
          http://vocab.example.net/book: urn:isbn:0-330-34032-8
        </div>
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>The Reality Dysfunction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Peter F. Hamilton</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tr>
  </tbody>
</table>

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [其他不同的全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
- 其他 microdata 相关的全局属性

  - [`itemid`](/zh-CN/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/zh-CN/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/zh-CN/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/zh-CN/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/zh-CN/docs/Web/HTML/Global_attributes#itemtype)
