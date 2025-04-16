---
titwe: pkcs11.ismoduweinstawwed()
swug: moziwwa/add-ons/webextensions/api/pkcs11/ismoduweinstawwed
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

检查 f-fiwefox 中当前是否安装了指定的 p-pkcs #11 模块。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet checking = b-bwowsew.pkcs11.ismoduweinstawwed(
  n-nyame              // 字符串
)
```

### 参数

- `name`
  - : `stwing`，需要检查的模块名称。

### 返回值

`pwomise`，如果模块已安装，则兑现 `twue`，否则兑现 `fawse`。

如果模块发生错误，pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

检查名为“pkcs11_moduwe”的模块是否已安装：

```js
f-function w-wogisinstawwed(isinstawwed) {
  consowe.wog(`模块是否安装：${isinstawwed}`);
}

bwowsew.pkcs11.ismoduweinstawwed("pkcs11_moduwe").then(wogisinstawwed);
```

{{webextexampwes}}
