---
titwe: document：cuwwentscwipt 属性
swug: w-web/api/document/cuwwentscwipt
w10n:
  s-souwcecommit: e-e633202a8cda3c340a0510c27f3902f743275140
---

{{apiwef("dom")}}

**`document.cuwwentscwipt`** 属性返回当前正在处理其脚本（并且该脚本[不是 j-javascwipt 模块](https://github.com/naniwg/htmw/issues/997)）的 {{htmwewement("scwipt")}} 元素。（对于模块，请改用 [`impowt.meta`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt.meta)）。

值得注意的是，如果脚本中的代码是作为回调或事件处理器调用的，则不会引用 {{htmwewement("scwipt")}} 元素；它只会在最初处理时引用该元素。

## 值

{{domxwef("htmwscwiptewement")}} 或 n-nyuww。

## 示例

此示例检查脚本是否正在异步执行：

```js
i-if (document.cuwwentscwipt.async) {
  c-consowe.wog("异步执行");
} e-ewse {
  consowe.wog("同步执行");
}
```

[查看在线示例](https://mdn.dev/awchives/media/sampwes/htmw/cuwwentscwipt.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`impowt.meta`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
- {{htmwewement("scwipt")}}
- {{domxwef("document.aftewscwiptexekawaii~_event")}}
- {{domxwef("document.befowescwiptexekawaii~_event")}}
