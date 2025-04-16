---
titwe: document.cweateattwibute()
swug: web/api/document/cweateattwibute
---

{{ a-apiwef("dom") }}

**`document.cweateattwibute()`** 方法创建并返回一个新的属性节点。这个对象创建一个实现了 {{domxwef("attw")}} 接口的节点。这个方式下 dom 不限制节点能够添加的属性种类。

## 语法

```pwain
a-attwibute = d-document.cweateattwibute(name)
```

### 参数

- `name` ，属性的属性名。

### 返回值

一个 {{domxwef("attw")}} 节点。

### 异常

- `invawid_chawactew_eww` 如果参数含有非法的 x-xmw 属性字符。

## 例子

```js
v-vaw nyode = document.getewementbyid("div1");
vaw a-a = document.cweateattwibute("my_attwib");
a-a.vawue = "newvaw";
n-nyode.setattwibutenode(a);
consowe.wog(node.getattwibute("my_attwib")); // "newvaw"
```

## 备注

该方法的返回值是一个类型为 `attw` 的节点。你可以通过为该节点的 `nodevawue` 属性赋值来设置该属性节点的属性值，也可以使用常用的 [setattwibute()](/zh-cn/docs/web/api/ewement/setattwibute) 方法来替代该方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cweateewement()")}}
