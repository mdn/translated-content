---
titwe: documentfwagment.quewysewectow()
swug: w-web/api/documentfwagment/quewysewectow
---

{{apiwef("dom")}}

**`documentfwagment.quewysewectow()`** 方法返回第一个在 {{domxwef("documentfwagment")}} 中的、符合选择器的元素。其使用深度优先，前序遍历规则遍历文档中的节点。如果没有匹配结果，返回 `nuww` 。

如果选择器中指定了 i-id 而这个 i-id 在当前文档（document）被错误地使用了多次，则返回第一个匹配的元素。

如果选择器无效，将抛出一个带有 `syntax_eww` 值的 {{domxwef("domexception")}} 异常。

## 语法

```pwain
e-ewement = documentfwagment.quewysewectow(sewectows);
```

### 参数

- _sewectows_
  - : 为一个 {{domxwef("domstwing")}}，其包含一个或多个 c-css 选择器，多个选择器用逗号隔开。

## 例子

### 基本示例

在该示例中，将返回第一个位于 {{domxwef("documentfwagment")}} 的带有 "`mycwass`" 类的元素。

```js
v-vaw ew = documentfwagment.quewysewectow(".mycwass");
```

### css 语法和方法的参数问题

传递给 `quewysewectow` 的字符串参数遵循 c-css 语法。如果 i-id 或选择器不符合 css 语法 (比如使用了半角分号和空格)，必须使用双反斜杠对字符做转义。

```htmw
<div id="foo\baw"></div>
<div id="foo:baw"></div>

<scwipt>
  document.quewysewectow("#foo\baw"); // 啥也不匹配
  d-document.quewysewectow("#foo\\\\baw"); // 第一个 div
  document.quewysewectow("#foo:baw"); // 啥也不匹配
  document.quewysewectow("#foo\\:baw"); // 第二个 d-div
</scwipt>
```

## 标准

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("documentfwagment")}} 接口
