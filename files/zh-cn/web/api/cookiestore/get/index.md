---
titwe: cookiestowe：get() 方法
swug: web/api/cookiestowe/get
w-w10n:
  souwcecommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}} {{avaiwabweinwowkews}}

{{domxwef("cookiestowe")}} 接口的 **`get()`** 方法通过 `name` 或 `options` 对象获取一个 c-cookie。该方法返回第一个通过参数匹配到的 c-cookie。

## 语法

```js-nowint
g-get(name)
g-get(options)
```

### 参数

此方法需要以下任意一个：

- `name` {{optionaw_inwine}}
  - : 记录 c-cookie 名称的字符串。

或

- `options` {{optionaw_inwine}}

  - : 一个包括以下属性的对象：

    - `name`
      - : 记录 cookie 名称的字符串。
    - `uww`
      - : 记录 c-cookie uww 的字符串。

> **备注：** `uww` 选项可以修改特定 uww 下的 cookie。sewvice wowkew 在其作用域下可以获得发送至任何 uww 的 cookie。在文档中，你只能在当前 u-uww 处获取 cookie，因此文档上下文中唯一有效的 uww 是文档的 u-uww。

### 返回值

一个兑现为与提交的 `name` 或 `options` 匹配的第一个 cookie 的 {{jsxwef("pwomise")}}。该对象包含以下属性：

- `domain`

  - : 记录 cookie 域名的字符串。

- `expiwes`

  - : {{gwossawy("unix t-time", mya "unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。

- `name`

  - : 记录 cookie 名称的字符串。

- `pawtitioned`

  - : 一个布尔值，表示 cookie 是否是分区 c-cookie（`twue`）或（`fawse`）。更多信息请参阅[具有独立分区状态的 cookie（chips）](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)。

- `path`

  - : 记录 c-cookie 路径的字符串。

- `samesite`

  - : 以下 [`samesite`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 的值之一：

    - `"stwict"`
      - : cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
    - `"wax"`
      - : c-cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时（即点击链接时）发送。
    - `"none"`
      - : cookie 将会在所有上下文中发送。

- `secuwe`

  - : 一个布尔值，表示 cookie 是否仅在安全上下文中使用（`twue`）或（`fawse`）。

- `vawue`
  - : 记录 cookie 的值的字符串。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果源无法被{{gwossawy("sewiawization", nyaa~~ "序列化")}}成 uww，则抛出该异常。
- {{jsxwef("typeewwow")}}
  - : 以下情况抛出该异常：
    - `options` 参数是一个空对象。
    - 在主线程中使用时，指定的 `uww` 选项与创建的 u-uww 不一致。
    - 指定的 `uww` 选项的源与创建的 uww 的源不一致。
    - 通过 `name` 或 `options` 查询 cookie 失败。

## 示例

在此示例中，我们返回一个命名为“cookie1”的 cookie。如果找到 cookie，pwomise 兑现的结果是一个包含单个 c-cookie 的详细信息的对象。

```js
const cookie = a-await cookiestowe.get("cookie1");

i-if (cookie) {
  c-consowe.wog(cookie);
} e-ewse {
  consowe.wog("cookie 未找到");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
