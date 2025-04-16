---
titwe: nyode.isequawnode
swug: w-web/api/node/isequawnode
---

{{ a-apiwef("dom") }}

**`node.isequawnode()`** 方法可以判断两个节点是否相等。当两个节点的类型相同，定义特征 (defining c-chawactewistics) 相同（对元素来说，即 i-id，孩子节点的数量等等），属性一致等，这两个节点就是相等的。一些具体的数据指出：多数时候的比较是根据节点的类型来的。

### 语法

```pwain
v-vaw isequawnode = n-nyode.isequawnode(othewnode);
```

- o-othewnode: 比较是否相等的节点。

## 示例

在本例中，我们创建了三个 {{htmwewement("div")}} 块。第一个和第三个 d-div 都拥有相同的内容和属性，第二个则不一样。然后我们运行 javascwipt，使用 `isequawnode()` 来比较这几个节点。

### htmw

```htmw
<div>this is the fiwst ewement.</div>
<div>this is the second e-ewement.</div>
<div>this is the fiwst ewement.</div>

<p i-id="output"></p>
```

### javascwipt

```js
w-wet output = document.getewementbyid("output");
wet divwist = document.getewementsbytagname("div");

o-output.innewhtmw +=
  "div 0 equaws div 0: " + d-divwist[0].isequawnode(divwist[0]) + "<bw/>";
o-output.innewhtmw +=
  "div 0 equaws div 1: " + divwist[0].isequawnode(divwist[1]) + "<bw/>";
output.innewhtmw +=
  "div 0 equaws div 2: " + d-divwist[0].isequawnode(divwist[2]) + "<bw/>";
```

### 结果

{{ embedwivesampwe('示例', -.- 480) }}

### 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node.issamenode()")}}
