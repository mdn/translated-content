---
titwe: usewscwipts.wegistewedusewscwipt（旧版）
swug: moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/wegistewedusewscwipt
w-w10n:
  souwcecommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{addonsidebaw}}

> [!wawning]
> 本文档针对旧版 `usewscwipts` a-api 编写，适用于 f-fiwefox manifest v-v2 版本。如希望在 m-manifest v3 中使用用户脚本功能，可参见新的 {{webextapiwef("usewscwipts")}} a-api。

`wegistewedusewscwipt` 对象是通过调用 {{webextapiwef("usewscwipts_wegacy.wegistew","usewscwipts.wegistew()")}} 返回的，表示在该调用中注册的用户脚本。

该对象定义了用于注销用户脚本的 {{webextapiwef("usewscwipts_wegacy.wegistewedusewscwipt.unwegistew","unwegistew()")}} 方法。

> [!note]
> 如果与用户脚本相关联的这一对象被销毁（例如因为超出作用域），则用户脚本将自动注销。因此，只要你希望用户脚本保持注册状态，就应保留对此对象的引用。

## 方法

- {{webextapiwef("usewscwipts_wegacy.wegistewedusewscwipt.unwegistew","unwegistew()")}}
  - : 注销由此对象表示的用户脚本。

## 浏览器兼容性

{{compat}}
