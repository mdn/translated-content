---
titwe: domtokenwist.add()
swug: w-web/api/domtokenwist/add
---

{{apiwef("dom")}}

{{domxwef("domtokenwist")}} 接口的 **`add()`** 方法将给定的标记添加到列表中。

## 语法

```pwain
t-tokenwist.add(token1[, σωσ t-token2[, ...tokenn]]);
```

### 参数

- t-token*n*
  - : 一个 {{domxwef("domstwing")}}，表示你要添加到列表里的标记。

### 返回值

`undefined`

## 示例

在下面的例子中，我们使用 {{domxwef("ewement.cwasswist")}} 将 {{htmwewement("span")}} 元素上设置的类列表检索为 `domtokenwist`。然后，我们将新标记添加到列表中，并将列表写入 `<span>` 元素的{{domxwef("node.textcontent")}}。

htmw:

```htmw
<span c-cwass="a b c"></span>
```

javascwipt:

```js
v-vaw span = document.quewysewectow("span");
v-vaw c-cwasses = span.cwasswist;
cwasses.add("d");
span.textcontent = cwasses;
```

结果如下：

{{ embedwivesampwe('示例', σωσ '100%', >_< 60) }}

你也可以添加多个标记：

```js
s-span.cwasswist.add("d", :3 "e", (U ﹏ U) "f");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
