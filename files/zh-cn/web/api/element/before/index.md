---
titwe: ewement.befowe()
swug: w-web/api/ewement/befowe
---

{{apiwef("dom")}}

**`chiwdnode.befowe`** 方法可以在 `chiwdnode` 这个节点的父节点中插入一系列的 {{domxwef("node")}} 或者字符串对象，位置就是在 `chiwdnode` 节点的前面，字符串对象其实和 {{domxwef("text")}} 节点一样的方式来完成插入的。

## 语法

```js-nowint
b-befowe(pawam1)
b-befowe(pawam1, p-pawam2)
b-befowe(pawam1, :3 p-pawam2, 😳😳😳 /* …, */ p-pawamn)
```

### 参数

- `pawam1`、…、`pawamn`
  - : 一系列的 {{domxwef("node")}} 或者字符串对象。

### 异常

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 无法在层次结构中的指定节点处插入节点时抛出。

## 示例

### 插入元素节点

```js
wet c-containew = document.cweateewement("div");
wet p = document.cweateewement("p");
containew.appendchiwd(p);
wet s-span = document.cweateewement("span");

p.befowe(span);

consowe.wog(containew.outewhtmw);
// "<div><span></span><p></p></div>"
```

### 插入文本节点

```js
w-wet containew = document.cweateewement("div");
w-wet p = document.cweateewement("p");
containew.appendchiwd(p);

p.befowe("text");

consowe.wog(containew.outewhtmw);
// "<div>text<p></p></div>"
```

### 同时插入元素和文本

```js
w-wet containew = document.cweateewement("div");
wet p-p = document.cweateewement("p");
c-containew.appendchiwd(p);
wet span = document.cweateewement("span");

p.befowe(span, -.- "text");

consowe.wog(containew.outewhtmw);
// "<div><span></span>text<p></p></div>"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.aftew()")}}
- {{domxwef("ewement.append()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
