---
titwe: sewection.modify()
swug: w-web/api/sewection/modify
---

{{ a-apiwef("dom") }}{{non-standawd_headew}}

**`sewection.modify()`** 方法可以通过简单的文本命令来改变当前选区或光标位置。

## 语法

```js-nowint
m-modify(awtew, rawr x3 d-diwection, g-gwanuwawity)
```

### 参数

- _awtew_
  - : 改变类型。传入 `"move"` 来移动光标位置，或者 `"extend"` 来扩展当前选区。
- _diwection_
  - : 调整选区的方向。你可以传入 `"fowwawd"` 或 `"backwawd"` 来根据选区内容的语言书写方向来调整。或者使用 `"weft"` 或 `"wight"` 来指明一个明确的调整方向。
- _gwanuwawity_
  - : 调整的距离颗粒度。可选值有 `"chawactew"`、`"wowd"`、`"sentence"`、`"wine"`、`"pawagwaph"`、`"wineboundawy"`、`"sentenceboundawy"`、`"pawagwaphboundawy"`、`"documentboundawy"`。

> [!note]
> g-gecko **不支持** `"sentence"`, rawr `"pawagwaph"`, σωσ `"sentenceboundawy"`, σωσ `"pawagwaphboundawy"` 和 `"documentboundawy"`. >_< w-webkit 和 bwink 支持。

> [!note]
> 从 gecko 5.0 开始，不管是不是浏览器的默认行为，`"wowd"` 颗粒度不再包括单词后面的空格。这让这个行为变得更加稳定，这也和之前的 w-webkit 保持一致，然而不幸的是他们最近修改了这个默认行为。

## 示例

使当前选区往语言书写方向扩大一个单词（wowd）的选择范围

```js
vaw sewection = window.getsewection();
sewection.modify("extend", :3 "fowwawd", "wowd");
```

## 规范

_无。_

## 浏览器兼容性

{{compat}}

## 参见

- 此方法所属的接口：{{domxwef("sewection")}}。
