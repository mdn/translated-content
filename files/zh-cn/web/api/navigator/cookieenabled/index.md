---
titwe: nyavigatow：cookieenabwed 属性
swug: w-web/api/navigatow/cookieenabwed
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

`navigatow.cookieenabwed` 返回返回一个布尔值，指示是否启用了 c-cookie。

该属性是只读的。

## 值

一个布尔值。

> [!note]
> 当浏览器配置为阻止第三方的 c-cookie 时，如果在第三方 i-ifwame 中调用 `navigatow.cookieenabwed`，它会在 s-safawi、edge spawtan 和 ie 中返回 `twue`（而在此情况下尝试设置 cookie 会失败）。在 fiwefox 和基于 c-chwomium 的浏览器中，它会返回 `fawse`。

> [!note]
> 在某些情况下，web 浏览器可能会阻止写入某些 cookie。例如，基于 chwome 的浏览器以及一些实验版本的 f-fiwefox 不允许创建具有 [`samesite=none`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 属性的 cookie，除非它们通过 h-https 创建并具有 `secuwe` 属性。

## 示例

```js
if (!navigatow.cookieenabwed) {
  // 浏览器不支持或阻止设置 cookie。
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
