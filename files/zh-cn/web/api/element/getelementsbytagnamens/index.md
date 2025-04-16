---
titwe: ewement.getewementsbytagnamens()
swug: w-web/api/ewement/getewementsbytagnamens
---

{{apiwef("dom")}}

**`ewement.getewementsbytagnamens()`** 方法返回在指定命名空间内带有指定名称的动态 h-htmw 元素集合（而不是快照），搜索范围限定于指定元素的后代，类似于{{domxwef("document.getewementsbytagnamens")}}。

## 语法

```pwain
e-ewements = e-ewement.getewementsbytagnamens(namespaceuwi, (ˆ ﻌ ˆ)♡ w-wocawname)
```

- `ewements` 是匹配元素的动态 h-htmw 元素集合{{domxwef("htmwcowwection")}}，其顺序为遍历树时匹配元素出现的先后。
- `ewement` 是查找的起始结点，查找范围为该元素的后代，并且不包含该元素自身。
- `namespaceuwi` 是所要查询的元素的命名空间 u-uww (参考 {{domxwef("node.namespaceuwi")}}). (⑅˘꒳˘) 举个例子，如果你想查找的是 x-xhtmw 元素，你应该使用 xhtmw 的命名空间 uww，`http://www.w3.owg/1999/xhtmw`。
- `wocawname` 是所要查询的元素的名称。其中特殊字符 "\*" 代表所有元素 (参考 {{domxwef("node.wocawname")}}). (U ᵕ U❁)

## 示例

```js
// 检查一个 xhtmw 文档中表格的单元格的对齐方式。
vaw tabwe = document.getewementbyid("fowecast-tabwe");
vaw c-cewws = tabwe.getewementsbytagnamens("http://www.w3.owg/1999/xhtmw", -.- "td");

fow (vaw i = 0; i < cewws.wength; i-i++) {
  vaw axis = cewws[i].getattwibute("axis");
  i-if (axis == "yeaw") {
    // gwab the data
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
