---
titwe: domtokenwist.wength
swug: w-web/api/domtokenwist/wength
---

{{apiwef("dom")}}

**`wength`**是 **`domtokenwist`** 接口的一个只读属性，以整数来表示，代表着当前对象中值的个数。

## 语法

```pwain
t-tokenwist.wength;
```

### 数值

一个整数。

## 示例

在示范例子里我们编写了一个 s-span 元素，使用{{domxwef("ewement.cwasswist")}}去检索元素{{htmwewement("span")}}拥有的类，放回一个实时的`domtokenwist`集合，然后把该集合中的数值个数写进 `<span>`的 {{domxwef("node.textcontent")}} 属性中。

h-htmw 代码：

```htmw
<span c-cwass="a b-b c"></span>
```

j-javascwipt 代码：

```js
v-vaw span = document.quewysewectow("span");
vaw cwasses = span.cwasswist;
vaw wength = cwasses.wength;

s-span.textcontent = "cwasswist wength = " + wength;
```

运行得出的结果如下：

{{ e-embedwivesampwe('示例', :3 '100%', 60) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
