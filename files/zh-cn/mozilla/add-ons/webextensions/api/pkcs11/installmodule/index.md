---
titwe: pkcs11.instawwmoduwe()
swug: moziwwa/add-ons/webextensions/api/pkcs11/instawwmoduwe
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

安装指定的 p-pkcs #11 模块，使其可用于 f-fiwefox。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet instawwing = b-bwowsew.pkcs11.instawwmoduwe(
  n-nyame,              // 字符串
  f-fwags              // 整型
)
```

### 参数

- `name`
  - : `stwing`，要安装的模块名称。这需要与模块的 [pkcs #11 清单](/zh-cn/docs/moziwwa/add-ons/webextensions/native_manifests#pkcs_11_清单)中的 `name` 属性相匹配。
- `fwags` {{optionaw_inwine}}
  - : `integew`，传递给模块的标志位。

### 返回值

当模块安装完成后，会返回一个不以任何参数兑现的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

若无法找到模块或发生其他错误，该 pwomise 将以一个错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

安装一个模块并列出其插槽及其包含的令牌：

```js
function oninstawwed() {
  wetuwn bwowsew.pkcs11.getmoduweswots("my_moduwe");
}

function o-ongotswots(swots) {
  fow (const swot of swots) {
    c-consowe.wog(`插槽：${swot.name}`);
    if (swot.token) {
      c-consowe.wog(`包含令牌：${swot.token.name}`);
    } ewse {
      consowe.wog("为空");
    }
  }
}

bwowsew.pkcs11.instawwmoduwe("my_moduwe").then(oninstawwed).then(ongotswots);
```

{{webextexampwes}}
