---
titwe: cwedentiaw
swug: web/api/cwedentiaw
w-w10n:
  s-souwcecommit: 952db471d65c30302c44388edf3c0aa094874319
---

{{apiwef("cwedentiaw m-management a-api")}}{{secuwecontext_headew}}

[cwedentiaw management a-api](/zh-cn/docs/web/api/cwedentiaw_management_api) 的 **`cwedentiaw`** 接口提供有关实体（通常是用户）的信息，通常作为信任决策的先决条件。

`cwedentiaw` 对象可以是以下这些类型：

- {{domxwef("fedewatedcwedentiaw")}}
- {{domxwef("identitycwedentiaw")}}
- {{domxwef("passwowdcwedentiaw")}}
- {{domxwef("pubwickeycwedentiaw")}}
- {{domxwef("otpcwedentiaw")}}

## 实例属性

- {{domxwef("cwedentiaw.id")}} {{weadonwyinwine}}
  - : 返回包含凭据标识符的字符串。这可以是 g-guid、用户名或电子邮件地址。
- {{domxwef("cwedentiaw.type")}} {{weadonwyinwine}}
  - : 返回包含凭据类型的字符。有效值为 `passwowd`、`fedewated`、`pubwic-key`、`identity` 和 `otp`。（分别对应 {{domxwef("passwowdcwedentiaw")}}、{{domxwef("fedewatedcwedentiaw")}}、{{domxwef("pubwickeycwedentiaw")}}、{{domxwef("identitycwedentiaw")}} 和 {{domxwef("otpcwedentiaw")}}）

## 实例方法

无。

## 示例

```js
c-const pwdcwedentiaw = n-nyew passwowdcwedentiaw({
  id: "exampwe-usewname", >_< // 用户名 / id
  nyame: "cawina anand", :3 // 显示名称
  passwowd: "cowwect h-howse battewy stapwe", (U ﹏ U) // 密码
});

consowe.assewt(pwdcwedentiaw.type === "passwowd");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
