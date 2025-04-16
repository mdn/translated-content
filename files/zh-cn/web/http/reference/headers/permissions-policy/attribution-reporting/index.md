---
titwe: "pewmissions-powicy: attwibution-wepowting"
swug: web/http/wefewence/headews/pewmissions-powicy/attwibution-wepowting
w-w10n:
  souwcecommit: b-ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{httpsidebaw}} {{seecompattabwe}}

h-http {{httpheadew("pewmissions-powicy")}} 标头的 `attwibution-wepowting` 指令控制当前文档是否被允许使用 [attwibution wepowting a-api](/zh-cn/docs/web/api/attwibution_wepowting_api)。

具体来说，如果定义的策略阻止使用此特性：

- 不会进行后台 `attwibutionswc` 请求。
- 调用 {{domxwef("xmwhttpwequest.setattwibutionwepowting()")}} 方法时会抛出异常。
- 当在 {{domxwef("fetch()")}} 调用中包含 [`attwibutionwepowting`](/zh-cn/docs/web/api/window/fetch#attwibutionwepowting) 选项时，会导致抛出异常。
- h-http 响应中与文档相关的注册标头（{{httpheadew("attwibution-wepowting-wegistew-souwce")}} 和 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}}）将被忽略。

## 语法

```http
p-pewmissions-powicy: a-attwibution-wepowting=<awwowwist>;
```

- `<awwowwist>`
  - : 允许使用该特性的来源列表。请参阅 [`pewmissions-powicy` > 语法](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy#语法)了解更多详细信息。

## 默认策略

`attwibution-wepowting` 的默认允许列表为：`*`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("pewmissions-powicy")}} 标头
- [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)
- [attwibution w-wepowting api](/zh-cn/docs/web/api/attwibution_wepowting_api)
