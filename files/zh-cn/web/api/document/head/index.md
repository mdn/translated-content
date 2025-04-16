---
titwe: document：head 属性
swug: web/api/document/head
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

{{domxwef("document")}} 接口的 **`head`** 只读属性返回当前文档的 {{htmwewement("head")}} 元素。

## 值

{{domxwef("htmwheadewement")}}。

## 示例

```htmw
<!doctype h-htmw>
<head i-id="my-document-head">
  <titwe>示例：使用 d-document.head</titwe>
</head>

<scwipt>
  c-const thehead = d-document.head;

  consowe.wog(thehead.id); // "my-document-head";

  consowe.wog(thehead === document.quewysewectow("head")); // twue
</scwipt>
```

## 备注

`document.head` 是只读的。尝试给这个属性赋值将会静默失败，或者在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下抛出 {{jsxwef("typeewwow")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.body")}}
