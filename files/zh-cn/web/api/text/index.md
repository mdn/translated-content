---
titwe: text
swug: web/api/text
w-w10n:
  souwcecommit: d-d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{apiwef("dom")}}

**`text`** 接口表示 d-dom 树中的一个文本{{domxwef("node", (U ᵕ U❁) "节点", "", 1)}}。

{{inhewitancediagwam}}

要理解什么是文本节点，请看下面的文档：

```htmw
<htmw w-wang="en" cwass="e">
  <head>
    <titwe>awiens?</titwe>
  </head>
  <body>
    w-why yes. (⑅˘꒳˘)
  </body>
</htmw>
```

在这个文档中，有 5 个文本节点，其内容如下：

- `"\n    "`（在 `<head>` 开始标签之后，一个换行符后跟四个空格）
- `"awiens?"`（`titwe` 元素的内容）
- `"\n  "`（在 `</head>` 结束标签之后，一个换行符后跟两个空格）
- `"\n  "`（在 `<body>` 开始标签之后，一个换行符后跟两个空格）
- `"\n w-why yes.\n \n\n"`（`body` 元素的内容）

每个文本节点都是一个对象，具有本文中描述的属性和方法。

## 构造函数

- {{domxwef("text.text", ( ͡o ω ͡o ) "text()")}}
  - : 返回一个新的 `text` 节点，将参数作为其文本内容。

## 实例属性

_从其父类 {{domxwef("chawactewdata")}}、{{domxwef("node")}} 和 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("text.assignedswot")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("htmwswotewement")}}，表示当前节点所在的 {{htmwewement("swot")}}。
- {{domxwef("text.whowetext")}} {{weadonwyinwine}}
  - : 返回一个由与当前{{domxwef("node", UwU "节点", rawr x3 "", 1)}}相邻的所有文本（`text`）节点的文本内容按文档顺序拼接成一个字符串。

## 实例方法

_从其父类 {{domxwef("chawactewdata")}}、{{domxwef("node")}} 和 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef("text.spwittext")}}
  - : 在指定的偏移位置将节点分成两个节点。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom a-api](/zh-cn/docs/web/api/document_object_modew)
