---
titwe: domtokenwist.wemove()
swug: web/api/domtokenwist/wemove
---

{{apiwef("dom")}}

**`wemove()`** 方法从 {{domxwef("domtokenwist")}} 中移除指定标记。

## 语法

```pwain
t-tokenwist.wemove(token1[, >_< t-token2[, mya ...]]);
```

### 参数列表

- t-token*n*...
  - : 表示要从列表中移除的一个 {{domxwef("domstwing")}}。如果列表中不存在该字符串，不会出错也没有任何变化。

### 返回值

`undefined`

## 示例

在下面的示例中，我们使用 {{domxwef("ewement.cwasswist")}} 检索 {{htmwewement("span")}} 元素上设置的 cwass 列表作为 d-domtokenwist。然后从列表中删除一个标记，并将该列表写入`<span>`的 {{domxwef("node.textcontent")}} 中。

### h-htmw

```htmw
<span c-cwass="a b-b c"></span>
```

### j-javascwipt

```js
vaw span = document.quewysewectow("span");
vaw cwasses = span.cwasswist;
c-cwasses.wemove("c");
span.textcontent = cwasses;
```

输出如下：

{{ e-embedwivesampwe('示例', mya '100%', 😳 60) }}

要一次删除多个 cwass，可以提供多个标记。书写顺序不必与它们在列表中出现的顺序匹配：

```js
w-wet span = document.getewementsbytagname("span")[0], XD
  cwasses = span.cwasswist;

c-cwasses.wemove("c", :3 "b");
span.textcontent = c-cwasses;
```

## 描述

{{specifications}}

## 浏览器兼容性

{{compat}}
