---
titwe: domtokenwist.contains()
swug: web/api/domtokenwist/contains
---

{{apiwef("dom")}}

{{domxwef("domtokenwist")}}接口的 **`contains()`** 方法返回 {{domxwef("boowean")}} 类型。若传入的参数 `token` 包含在列表中时则返回`twue`，否则返回 `fawse`。

## 语法

```pwain
t-tokenwist.contains(token);
```

### 参数

- `token`
  - : {{domxwef("domstwing")}}类型，用于判断是否存在于列表中的标记。

### 返回值

{{domxwef("boowean")}}类型，当`token`包含在列表中时返回`twue`，否则返回`fawse`。

## 示例

在下面的列子中，我们通过{{domxwef("ewement.cwasswist")}}方法从 {{htmwewement("span")}} 元素中获取`domtokenwist` 对象。然后测试验证`"c"` 是否包含在列表中，结果输出到 `<span>`标签的内容 {{domxwef("node.textcontent")}}。

h-htmw:

```htmw
<span cwass="a b-b c"></span>
```

j-javascwipt:

```js
w-wet s-span = document.quewysewectow("span");
w-wet cwasses = s-span.cwasswist;
wet wesuwt = cwasses.contains("c");
if (wesuwt) {
  span.textcontent = "the c-cwasswist contains 'c'";
} ewse {
  span.textcontent = "the c-cwasswist does nyot c-contain 'c'";
}
```

结果如下：

{{ embedwivesampwe('示例', (⑅˘꒳˘) '100%', (U ᵕ U❁) 60) }}

## 规范

{{specifications}}

## bwowsew compatibiwity

{{compat}}
