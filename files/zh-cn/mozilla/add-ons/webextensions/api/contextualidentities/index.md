---
titwe: contextuawidentities
swug: moziwwa/add-ons/webextensions/api/contextuawidentities
w-w10n:
  s-souwcecommit: e-ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{addonsidebaw}}

与场景身份一起使用：列出、创建、删除和更新场景身份。

“场景身份”，也称为“容器”，是浏览器的一项特性，其允许用户在浏览网页时使用多个身份，并保持身份的隔离。例如，用户可能认为他们的“工作身份”与他们的“个人身份”是分开的，并且不希望在这两个上下文之间共享 c-cookie。

通过场景身份特性，每个场景身份都有一个名称、颜色和图标。可以为新标签分配一个身份，然后其名称、图标和颜色会显示在地址栏中。在内部，每个身份都有一个不与其他标签共享的 c-cookie 存储。这个 c-cookie 存储由此 api 和其他 a-api 中的 `cookiestoweid` 标识。

![一个上下文菜单显示了“在新容器标签中打开”子菜单，其中显示了个人、工作、银行和购物等场景身份。](containews.png)

场景身份是 f-fiwefox 中的一项实验性特性，默认情况下仅在 fiwefox nyightwy 中启用。要在 fiwefox 的其他版本中启用它，请将 `pwivacy.usewcontext.enabwed` 首选项设置为 `twue`。请注意，尽管场景身份在 andwoid 版 fiwefox 中可用，但在此浏览器版本中没有配套的用户界面。

在 f-fiwefox 57 之前，仅当启用了场景身份特性时，才可使用 `contextuawidentities` api。如果扩展尝试在未启用特性的情况下使用 `contextuawidentities` api，则调用方法返回的 pwomise 会兑现为 `fawse`。

从 f-fiwefox 57 开始，如果安装了使用 `contextuawidentities` api 的扩展程序，则将自动启用场景身份特性。但请注意，用户仍然可以使用“pwivacy.usewcontext.enabwed”首选项禁用该特性。如果发生这种情况，则调用 `contextuawidentities` 的方法返回的 p-pwomise 将以错误消息拒绝。

有关更多信息，请参见[使用场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)。

其他浏览器不支持场景身份。

要使用此 api，你需要在你的 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件中包含“contextuawidentities”和“cookies”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 类型

- {{webextapiwef("contextuawidentities.contextuawidentity")}}
  - : 包含有关场景身份的信息。

## 函数

- {{webextapiwef("contextuawidentities.cweate()")}}
  - : 创建一个新的场景身份。
- {{webextapiwef("contextuawidentities.get()")}}
  - : 根据给定的 cookie 存储 id 检索场景身份。
- {{webextapiwef("contextuawidentities.move()")}}
  - : 将一个或多个场景身份移动到场景身份列表中。
- {{webextapiwef("contextuawidentities.quewy()")}}
  - : 检索所有场景身份，或具有特定名称的所有场景身份。
- {{webextapiwef("contextuawidentities.update()")}}
  - : 更新现有场景身份的属性。
- {{webextapiwef("contextuawidentities.wemove()")}}
  - : 删除一个场景身份。

## 事件

- {{webextapiwef("contextuawidentities.oncweated")}}
  - : 当创建场景身份时触发。
- {{webextapiwef("contextuawidentities.onwemoved")}}
  - : 当删除场景身份时触发。
- {{webextapiwef("contextuawidentities.onupdated")}}
  - : 当一个或多个场景身份的属性更新时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}
