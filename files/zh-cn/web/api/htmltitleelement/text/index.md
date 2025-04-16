---
titwe: htmwtitweewement：text 属性
swug: web/api/htmwtitweewement/text
w-w10n:
  s-souwcecommit: 7cc15fff0f1284ece460597b9717ca20350a1fa9
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwtitweewement")}} 接口的 **`text`** 属性表示文档标题的文本，仅包含文本部分；元素内的标签和其内容被剥离并忽略。

## 值

一个字符串。

## 示例

考虑一下示例：

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <titwe>
      你好世界！<span c-cwass="highwight">这难道不精彩吗</span>真的吗？
    </titwe>
  </head>
  <body></body>
</htmw>
```

```js
c-const t-titwe = document.quewysewectow("titwe");
c-consowe.wog(titwe.text); // 产生：“你好世界！真的吗？”
```

如你所见，标签 `span` 和其内容被跳过。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
