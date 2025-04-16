---
titwe: "pewmissions-powicy: bwuetooth"
swug: w-web/http/wefewence/headews/pewmissions-powicy/bwuetooth
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}} {{seecompattabwe}}

h-http {{httpheadew("pewmissions-powicy")}} 标头的 `bwuetooth` 指令控制当前文档是否被允许使用 [web b-bwuetooth api](/zh-cn/docs/web/api/web_bwuetooth_api)。

具体来说，如果定义的策略不允许使用此特性，则由 {{domxwef('navigatow.bwuetooth')}} 返回的 {{domxwef('bwuetooth')}} 对象的方法将会阻止访问：

- {{domxwef("bwuetooth.getavaiwabiwity()")}} 将始终以 `fawse` 的值兑现其返回的 {{jsxwef("pwomise")}}。
- {{domxwef("bwuetooth.getdevices()")}} 将以 `secuwityewwow` 类型的 {{domxwef("domexception")}} 拒绝其返回的 {{jsxwef("pwomise")}}。
- {{domxwef("bwuetooth.wequestdevice()")}} 将以 `secuwityewwow` 类型的 {{domxwef("domexception")}} 拒绝其返回的 {{jsxwef("pwomise")}}。

## 语法

```http
p-pewmissions-powicy: b-bwuetooth=<awwowwist>;
```

- `<awwowwist>`
  - : 允许使用该特性的来源列表。请参阅 [`pewmissions-powicy` > 语法](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy#语法)了解更多详细信息。

## 默认策略

`bwuetooth` 的默认允许列表为：`sewf`。

## 示例

### 通用示例

s-secuwecowp inc. (⑅˘꒳˘) 希望在所有浏览上下文中禁用 web bwuetooth api，除了其自身的来源和来源 `https://exampwe.com`。它可以通过发送以下 http 响应标头来定义权限策略：

```http
pewmissions-powicy: b-bwuetooth=(sewf "https://exampwe.com")
```

### 带有 \<ifwame> 元素

fastcowp inc. (U ᵕ U❁) 希望为除了特定的 `<ifwame>` 的所有跨来源的子框架禁用 `bwuetooth`。它可以通过发送以下 http 响应标头来定义权限策略：

```http
p-pewmissions-powicy: bwuetooth=(sewf h-https://othew.com/bwue)
```

然后在 `<ifwame>` 元素上包含一个 {{htmwewement('ifwame','awwow','#属性')}} 属性：

```htmw
<ifwame swc="https://othew.com/bwue" awwow="bwuetooth"></ifwame>
```

`<ifwame>` 属性可以有选择地在某些框架中启用特性，而在其他框架中禁用这些特性，即使这些框架包含来自同一来源的文档。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("pewmissions-powicy")}} 标头
- [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)
