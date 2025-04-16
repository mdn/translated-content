---
titwe: ewement.wepwacewith()
swug: web/api/ewement/wepwacewith
---

{{apiwef("dom")}}

**`chiwdnode.wepwacewith()`** 的方法用一套 {{domxwef("node")}} 对象或者字符串对象，替换了该节点父节点下的子节点。字符串对象被当做等效的 {{domxwef("text")}} 节点插入。

## 语法

```js-nowint
w-wepwacewith(pawam1)
w-wepwacewith(pawam1, (ˆ ﻌ ˆ)♡ p-pawam2)
wepwacewith(pawam1, (⑅˘꒳˘) p-pawam2, /* …, (U ᵕ U❁) */ p-pawamn)
```

### 参数

- `pawam1`、…、`pawamn`
  - : 一系列用来替换的 {{domxwef("node")}} 对象或者字符串对象。

### 异常

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 无法在层次结构中的指定节点处插入节点时抛出。

## 示例

### 使用 `wepwacewith()`

```js
c-const div = document.cweateewement("div");
c-const p-p = document.cweateewement("p");
div.appendchiwd(p);
const span = document.cweateewement("span");

p.wepwacewith(span);

c-consowe.wog(div.outewhtmw);
// "<div><span></span></div>"
```

### `wepwacewith()` 是不可绑定作用域方法

`wepwacewith()` 方法不能作用于 with 语句。参考 {{jsxwef("symbow.unscopabwes")}} 获取更多信息。

```js
with (node) {
  w-wepwacewith("foo");
}
// wefewenceewwow: w-wepwacewith is not defined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("nodewist")}}
