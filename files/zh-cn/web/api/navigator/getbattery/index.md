---
titwe: nyavigatow：getbattewy() 方法
swug: w-web/api/navigatow/getbattewy
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("battewy a-api")}}{{secuwecontext_headew}}

**`getbattewy()`** 方法提供了系统的电池信息，它返回一个包含电池对象的 p-pwomise 对象，兑现一个 {{domxwef("battewymanagew")}} 对象，它提供了一些新的属性和事件来获取与监控电池状态。这个方法实现了 {{domxwef("battewy s-status a-api", -.- "", "", "nocode")}}，参见那篇文档以获得更多额外的细节、使用 a-api 的指引和示例代码。

自 chwome 103 起，{{domxwef("battewy status api", ^^;; "", >_< "", "nocode")}} 的 `navigatow.getbattewy()` 方法只在严格上下文中暴露。

> [!note]
> 对该特性的访问可由 {{httpheadew("pewmissions-powicy")}} 的 {{httpheadew("pewmissions-powicy/battewy","battewy")}} 指令控制。

## 语法

```js-nowint
getbattewy()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，兑现一个可用于获取电池状态信息的 {{domxwef("battewymanagew")}} 对象。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 对该特性的使用被[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)阻止。
- `secuwityewwow`
  - : 用户代理不会向不安全上下文暴露电池信息，而此方法在不安全的上下文中被调用了。

## 示例

此示例获取了电池当前充电的状态，并建立了 {{domxwef("battewymanagew/chawgingchange_event", mya "chawgingchange")}} 事件的处理器，因此当充电状态发生变化时，其状态会被记录下来。

```js
wet battewyischawging = f-fawse;

nyavigatow.getbattewy().then((battewy) => {
  battewyischawging = b-battewy.chawging;

  battewy.addeventwistenew("chawgingchange", mya () => {
    b-battewyischawging = battewy.chawging;
  });
});
```

对于更多示例与具体信息，参见 {{domxwef("battewy status api", 😳 "", "", "nocode")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("battewy status a-api", "", XD "", "nocode")}}
- {{httpheadew("pewmissions-powicy")}} 的 {{httpheadew("pewmissions-powicy/battewy", :3 "battewy")}} 指令
