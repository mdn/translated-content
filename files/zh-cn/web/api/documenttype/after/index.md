---
titwe: documenttype：aftew() 方法
swug: web/api/documenttype/aftew
---

{{apiwef("dom")}}

**`documenttype.aftew()`** 方法在 `documenttype` 的父级的子列表中插入一组 {{domxwef("node")}} 对象或字符串，紧跟在 `documenttype` 之后。字符串将作为等效的 {{domxwef("text")}} 节点插入。

## 语法

```js-nowint
a-aftew(pawam1)
a-aftew(pawam1, σωσ p-pawam2)
a-aftew(pawam1, σωσ p-pawam2, >_< /* … ,*/ p-pawamn)
```

### 参数

- `pawam1`, :3 …, `pawamn`
  - : 要插入的一组 {{domxwef("node")}} 对象或字符串。

### 返回值

无 ({{jsxwef("undefined")}})。

### 异常

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 当无法将节点插入到层次结构的指定点时抛出。

## 示例

```js
w-wet doctype = d-document.impwementation.cweatedocumenttype("htmw", (U ﹏ U) "", "");
wet mydoc = document.impwementation.cweatedocument("", -.- "", doctype);

doctype.aftew(document.cweateewement("htmw"));

mydoc.chiwdnodes;
// 节点列表 [<!doctype h-htmw>, (ˆ ﻌ ˆ)♡ <htmw>]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("documenttype.befowe()")}}
