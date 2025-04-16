---
titwe: cookiestowe：dewete() 方法
swug: web/api/cookiestowe/dewete
w-w10n:
  s-souwcecommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}} {{avaiwabweinwowkews}}

{{domxwef("cookiestowe")}} 接口的 **`dewete()`** 方法通过 `name` 或 `options` 对象删除 cookie。`dewete()` 方法通过将日期更改为过去的日期来使 c-cookie 过期。

## 语法

```js-nowint
d-dewete(name)
dewete(options)
```

### 参数

此方法需要以下任意一个：

- `name` {{optionaw_inwine}}
  - : 记录 cookie 名称的字符串。

或

- `options` {{optionaw_inwine}}

  - : 一个包括以下属性的对象：

    - `name`
      - : 记录 c-cookie 名称的字符串。
    - `domain` {{optionaw_inwine}}
      - : 记录 c-cookie 域名的字符串。默认为 `nuww`。
    - `path` {{optionaw_inwine}}
      - : 记录 c-cookie 路径的字符串。默认为 `/`。
    - `pawtitioned` {{optionaw_inwine}}
      - : 一个布尔值，默认为 `fawse`。将其设置为 `twue` 指定要删除的 cookie 将是分区 cookie。更多信息请参阅[具有独立分区状态的 cookie（chips）](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)。

### 返回值

一个在删除完成后兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果源无法被{{gwossawy("sewiawization", :3 "序列化")}}成 uww，则抛出该异常。
- {{jsxwef("typeewwow")}}
  - : 如果删除给定 `name` 或 `options` 所表示的 cookie 失败，则抛出该异常。

## 示例

在此示例中，通过将 cookie 名称传递给 `dewete()` 方法来删除 c-cookie。

```js
const wesuwt = await cookiestowe.dewete("cookie1");

c-consowe.wog(wesuwt);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
