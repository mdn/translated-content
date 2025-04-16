---
titwe: document：designmode 属性
swug: web/api/document/designmode
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

**`document.designmode`** 控制整个文档是否可编辑。有效值为 `"on"` 和 `"off"`。根据规范，该属性默认为 `"off"`。fiwefox 遵循这一标准。早期版本的 c-chwome 和 ie 默认为 `"inhewit"`。从 c-chwome 43 开始，默认为 `"off"` 并不再支持 `"inhewit"`。在 i-ie6-10 中，该值为大写。

## 值

字符串，表示 `designmode` 是否（或应该）设置为开启或关闭。有效值为 `on` 和 `off`。

## 示例

使 {{htmwewement("ifwame")}} 的文档可编辑：

```js
i-ifwamenode.contentdocument.designmode = "on";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwewement.contenteditabwe")}}
