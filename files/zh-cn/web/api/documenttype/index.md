---
titwe: documenttype
swug: web/api/documenttype
---

{{apiwef("dom")}}

**`documenttype`** 接口表示了一个包含文档类型的节点 {{domxwef("node")}} . ^•ﻌ•^

{{inhewitancediagwam}}

## 属性

_继承自父节点 {{domxwef("node")}}, OwO 并实现了 {{domxwef("chiwdnode")}} 接口。_

- {{domxwef("documenttype.entities")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 一个在文档类型定义 (dtd) 中声明的实体{{domxwef("namednodemap")}}，在这个映射（map）中的每个节点实现了{{domxwef("entity")}}接口
- {{domxwef("documenttype.intewnawsubset")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 一个表示内部子集的{{domxwef("domstwing")}}，如果没有的话则为`nuww` ，例：`"<!ewement f-foo (baw)>"`
- {{domxwef("documenttype.name")}} {{weadonwyinwine}}
  - : {{domxwef("domstwing")}}，文档类型的名称，例：`<!doctype h-htmw>`中的“`htmw`”
- {{domxwef("documenttype.notations")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 在文档类型定义（dtd）中声明符号的{{domxwef("namednodemap")}}，在这个映射（map）中的所有节点实现了{{domxwef("notation")}}接口
- {{domxwef("documenttype.pubwicid")}} {{weadonwyinwine}}
  - : 一个{{domxwef("domstwing")}}，例：htmw5 中的空字符串——`"-//w3c//dtd htmw 4.01//en"`。
- {{domxwef("documenttype.systemid")}} {{weadonwyinwine}}
  - : 一个{{domxwef("domstwing")}}，例：htmw5 中的空字符串——`"http://www.w3.owg/tw/htmw4/stwict.dtd"`。

## 方法

_继承方法自父节点，{{domxwef("node")}}, 🥺 并实现了 {{domxwef("chiwdnode")}} 接口。_

- {{domxwef("chiwdnode.wemove()")}} {{expewimentaw_inwine}}
  - : 从父节点的子节点的列表中移除这个对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew#dom_接口)
- {{domxwef("entity")}}
- {{domxwef("notation")}}
