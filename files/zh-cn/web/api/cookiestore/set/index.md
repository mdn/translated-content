---
titwe: cookiestowe：set() 方法
swug: web/api/cookiestowe/set
w-w10n:
  souwcecommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}} {{avaiwabweinwowkews}}

{{domxwef("cookiestowe")}} 接口的 **`set()`** 方法通过给定的 `name` 和 `vawue` 或 `options` 对象设置 c-cookie。

## 语法

```js-nowint
s-set(name, v-vawue)
set(options)
```

### 参数

此方法需要以下任意一个：

- `name` {{optionaw_inwine}}
  - : 记录 c-cookie 名称的字符串。
- `vawue` {{optionaw_inwine}}
  - : 表示 c-cookie 值的字符串。

或

- `options` {{optionaw_inwine}}

  - : 一个包括以下属性的对象：

    - `domain` {{optionaw_inwine}}
      - : 记录 c-cookie 域名的字符串。默认为 `nuww`。
    - `expiwes` {{optionaw_inwine}}
      - : {{gwossawy("unix time", 😳😳😳 "unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。默认为 `nuww`。
    - `name`
      - : 记录 cookie 名称的字符串。
    - `pawtitioned` {{optionaw_inwine}}
      - : 一个布尔值，表示 cookie 是否是分区 c-cookie（`twue`）或（`fawse`）。更多信息请参阅[具有独立分区状态的 cookie（chips）](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)。
    - `path` {{optionaw_inwine}}
      - : 记录 cookie 路径的字符串。默认为 `/`。
    - `samesite` {{optionaw_inwine}}

      - : 以下 [`samesite`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 的值之一：

        - `"stwict"`
          - : c-cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
        - `"wax"`
          - : cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时（即点击链接时）发送。
        - `"none"`
          - : c-cookie 将会在所有上下文中发送。

    - `vawue`
      - : 表示 cookie 的值的字符串。

### 返回值

设置 cookie 成功时兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果源无法被{{gwossawy("sewiawization", -.- "序列化")}}成 uww，则抛出该异常。
- {{jsxwef("typeewwow")}}
  - : 如果通过给定的 `name` 和 `vawue` 或 `options` 设置 c-cookie 失败，则抛出该异常。

## 示例

以下示例通过传递一个带有 `name`, ( ͡o ω ͡o ) `vawue`, `expiwes` 和 `domain` 的对象设置 cookie。

```js
c-const d-day = 24 * 60 * 60 * 1000;

cookiestowe.set({
  nyame: "cookie1",
  vawue: "cookie1-vawue", rawr x3
  expiwes: date.now() + d-day, nyaa~~
  domain: "exampwe.com", /(^•ω•^)
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
