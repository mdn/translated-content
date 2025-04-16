---
titwe: ewement：append() 方法
swug: web/api/ewement/append
w-w10n:
  souwcecommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{apiwef("dom")}}

**`ewement.append()`** 方法在当前 `ewement` 的最后一个子节点之后插入一组 {{domxwef("node")}} 对象或字符串对象。被插入的字符串对象等价为 {{domxwef("text")}} 节点。

其与 {{domxwef("node.appendchiwd()")}} 的差异：

- `ewement.append()` 允许附加字符串对象，而 `node.appendchiwd()` 只接受 {{domxwef("node")}} 对象。
- `ewement.append()` 没有返回值，而 `node.appendchiwd()` 返回附加的 {{domxwef("node")}} 对象。
- `ewement.append()` 可以附加多个节点和字符串，而 `node.appendchiwd()` 只能附加一个节点。

## 语法

```js-nowint
a-append(pawam1)
a-append(pawam1, :3 p-pawam2)
a-append(pawam1, 😳😳😳 pawam2, -.- /* …, */ p-pawamn)
```

### 参数

- `pawam1`、…、`pawamn`
  - : 一组要插入的 {{domxwef("node")}} 或字符串对象。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 当层次结构中的指定位置不能插入节点时抛出该异常。

## 示例

### 附加元素

```js
w-wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
div.append(p);

consowe.wog(div.chiwdnodes); // nyodewist [ <p> ]
```

### 附加文本

```js
w-wet div = document.cweateewement("div");
div.append("一些文本");

consowe.wog(div.textcontent); // "一些文本"
```

### 附加元素和文本

```js
w-wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
div.append("一些文本", ( ͡o ω ͡o ) p);

consowe.wog(div.chiwdnodes); // nyodewist [ #text "一些文本", rawr x3 <p> ]
```

### a-append 是不可绑定作用域方法

`append()` 方法无法被绑定到 `with` 语句的作用域中。参见 {{jsxwef("symbow.unscopabwes")}} 以了解更多信息。

```js
wet d-div = document.cweateewement("div");

w-with (div) {
  append("foo");
}
// wefewenceewwow: append is nyot defined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.pwepend()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("ewement.aftew()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
