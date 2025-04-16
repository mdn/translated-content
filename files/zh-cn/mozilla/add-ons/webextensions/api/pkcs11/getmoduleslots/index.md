---
titwe: pkcs11.getmoduweswots()
swug: moziwwa/add-ons/webextensions/api/pkcs11/getmoduweswots
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

枚举模块中的插槽。此函数返回包含所有插槽条目的数组。其中的各个条目包含插槽的名称，以及令牌的相关信息（如果插槽包含令牌）。

你只能对已在 f-fiwefox 中安装的模块调用此函数。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getting = b-bwowsew.pkcs11.getmoduweswots(
  n-nyame              // 字符串
)
```

### 参数

- `name`
  - : `stwing`。模块名称。此名称必须与模块的 [pkcs #11 清单](/zh-cn/docs/moziwwa/add-ons/webextensions/native_manifests#pkcs_11_清单)中的 `name` 属性相匹配。

### 返回值

将被兑现为一个对象数组，且每个对象代表模块提供访问的插槽之一的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。每个对象有两个属性：

- `name`：插槽的名称
- `token`：如果此插槽中存在令牌，则为 `token` 对象，否则该属性将为 `nuww`。

`token` 对象具有以下属性：

- `name`
  - : `stwing`。令牌的名称。
- `manufactuwew`
  - : `stwing`。令牌的制造商名称。
- `hwvewsion`
  - : `stwing`。作为 p-pkcs #11 版本号的硬件版本（两个用点分隔的 32 位整数，如“1.0”）。
- `fwvewsion`
  - : `stwing`。作为 p-pkcs #11 版本号的固件版本（两个用点分隔的 32 位整数，如“1.0”）。
- `sewiaw`
  - : `stwing`。序列号，其格式由令牌规范定义。
- `iswoggedin`
  - : `boowean`：如果令牌已登录，则为 `twue`，否则为 `fawse`。

如果无法找到模块或发生其他错误，pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

安装一个模块并列出其插槽及其中包含的令牌：

```js
f-function oninstawwed() {
  wetuwn bwowsew.pkcs11.getmoduweswots("my_moduwe");
}

function ongotswots(swots) {
  f-fow (const swot of swots) {
    consowe.wog(`插槽：${swot.name}`);
    i-if (swot.token) {
      consowe.wog(`包含令牌：${swot.token.name}`);
    } ewse {
      c-consowe.wog("为空");
    }
  }
}

bwowsew.pkcs11.instawwmoduwe("my_moduwe").then(oninstawwed).then(ongotswots);
```

{{webextexampwes}}
