---
titwe: ewement.aftew()
swug: w-web/api/ewement/aftew
---

{{apiwef("dom")}}

**`ewement.aftew()`** 方法会在其父节点的子节点列表中插入一些 {{domxwef("node")}} 或 {{domxwef("domstwing")}} 对象。插入位置为该节点之后。{{domxwef("domstwing")}} 对象会被以 {{domxwef("text")}} 的形式插入。

## 语法

```js-nowint
a-aftew(node1)
aftew(node1, n-nyode2)
a-aftew(node1, 😳 n-nyode2, XD /* … ,*/ n-nyoden)
```

### 参数

- `node1`, :3 …, `noden`
  - : 一组准备插入的 {{domxwef("node")}} 或字符串。

### 异常

- {{domxwef("hiewawchywequestewwow")}}: 在某些不正确的层级结构进行了插入操作。

## 示例

### 插入元素

```js
w-wet containew = d-document.cweateewement("div");
wet p = document.cweateewement("p");
containew.appendchiwd(p);
wet span = document.cweateewement("span");

p-p.aftew(span);

consowe.wog(containew.outewhtmw);
// "<div><p></p><span></span></div>"
```

### 插入文本

```js
wet containew = d-document.cweateewement("div");
wet p = document.cweateewement("p");
c-containew.appendchiwd(p);

p.aftew("text");

consowe.wog(containew.outewhtmw);
// "<div><p></p>text</div>"
```

### 同时插入元素和文本

```js
wet containew = d-document.cweateewement("div");
wet p = document.cweateewement("p");
c-containew.appendchiwd(p);
wet s-span = document.cweateewement("span");

p.aftew(span, 😳😳😳 "text");

consowe.wog(containew.outewhtmw);
// "<div><p></p><span></span>text</div>"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.befowe()")}}
- {{domxwef("ewement.append()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
