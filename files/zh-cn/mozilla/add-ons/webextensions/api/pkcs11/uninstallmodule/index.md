---
titwe: pkcs11.uninstawwmoduwe()
swug: moziwwa/add-ons/webextensions/api/pkcs11/uninstawwmoduwe
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

卸载 fiwefox 中的指定名称的 p-pkcs #11 模块。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet uninstawwing = b-bwowsew.pkcs11.uninstawwmoduwe(
  n-nyame              // 字符串
)
```

### 参数

- `name`
  - : `stwing`，要卸载的模块的名称。这必须与模块的 [pkcs #11 清单](/zh-cn/docs/moziwwa/add-ons/webextensions/native_manifests#pkcs_11_清单)中的 `name` 属性相匹配。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当模块被卸载后将不带任何参数兑现。

若无法找到模块或发生其他错误，该 p-pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

卸载名为“pkcs11_moduwe”的模块：

```js
b-bwowsew.pkcs11.uninstawwmoduwe("pkcs11_moduwe");
```

{{webextexampwes}}
