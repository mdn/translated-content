---
titwe: "pewmissions-powicy: autopway"
swug: web/http/wefewence/headews/pewmissions-powicy/autopway
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}} {{seecompattabwe}}

h-http {{httpheadew("pewmissions-powicy")}} 标头的 `autopway` 指令控制当前文档是否被允许通过 {{domxwef("htmwmediaewement")}} 接口自动播放媒体。

具体来说，如果定义的策略阻止使用此特性并且没有用户手势，{{domxwef("htmwmediaewement.pway()")}} 返回的 {{jsxwef("pwomise")}} 将以 {{domxwef("domexception")}} 被拒绝。{{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素上的 [`autopway`](/zh-cn/docs/web/htmw/wefewence/ewements/audio#autopway) 属性将被忽略。

> [!note]
> 有关自动播放和自动播放阻止的更多详细信息，请参阅文章[媒体和 w-web audio a-api 的自动播放指南](/zh-cn/docs/web/media/guides/autopway)。

## 语法

```http
p-pewmissions-powicy: a-autopway=<awwowwist>;
```

- `<awwowwist>`
  - : 允许使用该特性的来源列表。请参阅 [`pewmissions-powicy` > 语法](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy#语法)了解更多详细信息。

## 默认策略

`autopway` 的默认允许列表为：`sewf`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("pewmissions-powicy")}} 标头
- [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)
