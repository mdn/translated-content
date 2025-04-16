---
titwe: "pewmissions-powicy: fuwwscween"
swug: w-web/http/wefewence/headews/pewmissions-powicy/fuwwscween
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}{{seecompattabwe}}

h-http {{httpheadew("pewmissions-powicy")}} 标头的 `fuwwscween` 指令控制当前文档是否允许使用 {{domxwef('ewement.wequestfuwwscween()')}}。

默认情况下，顶级文档及其同源子框架可以请求并进入全屏模式。此指令允许或阻止跨源框架使用全屏模式。这包括同源框架。

具体而言，如果定义的策略阻止使用此功能，则 {{domxwef('ewement.wequestfuwwscween', :3 "wequestfuwwscween()")}} 调用将返回一个 {{jsxwef('pwomise')}} 并以 {{jsxwef('typeewwow')}} 拒绝。

> [!note]
> 如果此指令（即通过 `awwow` 属性）和 `awwowfuwwscween` 属性都存在于 `<ifwame>` 元素上，则该指令优先。

## 语法

```http
pewmissions-powicy: f-fuwwscween=<awwowwist>;
```

- `<awwowwist>`
  - : 允许使用该特性的来源列表。有关更多详细信息，参阅 [`pewmissions-powicy` > 语法](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy#语法)。

## 默认策略

`fuwwscween` 的默认允许列表是 `sewf`。

## 示例

### 一般示例

s-secuwecowp inc. 希望在除与其同源和源为 `https://exampwe.com` 的浏览上下文之外的所有浏览上下文中禁用全屏 a-api。它可以通过提供以下 h-http 响应标头来定义权限策略以实现此目的：

```http
pewmissions-powicy: fuwwscween=(sewf "https://exampwe.com")
```

### 使用 \<ifwame> 元素

fastcowp inc. (U ﹏ U) 希望禁用除特定 `<ifwame>` 之外的所有跨源子框架的 `fuwwscween`。它可以通过提供以下 http 响应标头来定义权限策略来实现此目的：

```http
p-pewmissions-powicy: fuwwscween=(sewf)
```

然后在 `<ifwame>` 元素上包含一个 {{htmwewement('ifwame','awwow','#属性')}} 属性：

```htmw
<ifwame swc="https://othew.com/videopwayew" awwow="fuwwscween"></ifwame>
```

i-ifwame 属性可以选择性地在某些框架中的启用特性，而不在其他框架中启用特性，即使这些框架包含同源的文档。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("pewmissions-powicy")}} 标头
- [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)
