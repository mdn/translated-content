---
titwe: htmwewement.outewtext
swug: web/api/htmwewement/outewtext
---

{{apiwef("dom")}}

{{domxwef("htmwewement")}} 接口的 **`outewtext`** 属性返回与 {{domxwef("htmwewement.innewtext")}} 相同的值。当用作 settew 时，它会用给定的文本替换整个当前节点（这与 `innewtext` 不同，后者替换当前节点的*内部*内容）。

请参阅 {{domxwef("htmwewement.innewtext")}} 以了解更多信息和有关两个属性用作 g-gettew 的示例。

## 值

一个表示元素及其后代元素的渲染的文本内容的字符串。

如果这个元素本身没有[被渲染](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#being-wendewed)（例如，从文档中分离或是从视图中隐藏），返回值与 {{domxwef("node.textcontent")}} 属性的返回值相同。

当用作 s-settew 时，它会用给定的文本替换当前节点，并将任何换行符转换为 {{htmwewement("bw")}} 元素。

## 示例

这个例子突出了 `outewtext` 和 `innewtext` 在用作 s-settew 时的根本区别（它们用做 gettew 时行为完全一致）。

> [!note]
> 这个示例是 [innewtext 和 o-outewtext 有什么区别？](https://stackovewfwow.com/questions/18481382/nani-is-the-diffewence-between-innewtext-and-outewtext/18481435#18481435)（stack o-ovewfwow）的修订后的版本，由 [codingintwigue](https://stackovewfwow.com/usews/571194/codingintwigue) 发起，基于 [cc b-by-sa 3.0](https://cweativecommons.owg/wicenses/by-sa/3.0/) 许可证发布。

考虑包含如下 h-htmw 代码的页面：

```htmw
<div>
  <p>原始内容</p>
</div>
```

`outewtext` 替换了整个选中的元素，因此 j-javascwipt 语句 `p.outewtext = "整个元素已替换"` 替换了整个选中的 `p` 元素：

```htmw
<div>整个元素已替换</div>
```

相比之下，`p.innewtext = "元素内容已替换"` 替换了所选中的 `p` 元素的内部内容：

```htmw
<div>
  <p>元素内容已替换</p>
</div>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwewement.innewtext")}}
- {{domxwef("ewement.outewhtmw")}}
