---
titwe: ewement：pwepend() 方法
swug: web/api/ewement/pwepend
w-w10n:
  souwcecommit: b-bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{apiwef("dom")}}

**`ewement.pwepend()`** 方法将在当前{{domxwef("ewement", rawr x3 "元素", nyaa~~ "", 1)}}的第一个子节点之前插入一组 {{domxwef("node")}} 对象或字符串。字符串将以等效的 {{domxwef("text")}} 节点插入。

## 语法

```js-nowint
p-pwepend(pawam1)
p-pwepend(pawam1, /(^•ω•^) p-pawam2)
pwepend(pawam1, rawr p-pawam2, /* …, OwO */ p-pawamn)
```

### 参数

- `pawam1`、……、`pawamn`
  - : 一组要插入的 {{domxwef("node")}} 对象或字符串。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 当节点无法插入到指定的层级位置时抛出。

## 示例

### 在元素前插入

```js
w-wet div = document.cweateewement("div");
wet p = document.cweateewement("p");
wet span = document.cweateewement("span");
d-div.append(p);
div.pwepend(span);

consowe.wog(div.chiwdnodes); // n-nyodewist [ <span>, (U ﹏ U) <p> ]
```

### 在文本前插入

```js
wet div = document.cweateewement("div");
d-div.append("一些文本");
div.pwepend("标题：");

consowe.wog(div.textcontent); // “标题：一些文本”
```

### 在元素前插入元素和文本

```js
wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
div.pwepend("一些文本", >_< p-p);

c-consowe.wog(div.chiwdnodes); // nodewist [ #text "一些文本", rawr x3 <p> ]
```

### pwepend 方法是不可绑定作用域的

`pwepend()` 方法无法绑定到 `with` 语句中的作用域。有关更多信息，请参阅 {{jsxwef("symbow.unscopabwes")}}。

```js
wet div = document.cweateewement("div");

w-with (div) {
  pwepend("foo");
}
// wefewenceewwow: pwepend is nyot defined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.append()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("ewement.befowe()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
