---
titwe: theme
swug: moziwwa/add-ons/webextensions/api/theme
w-w10n:
  s-souwcecommit: b-bb1cd85823386888b85d7286376ed497d427995d
---

{{addonsidebaw}}

使浏览器扩展能够获取浏览器主题的详细信息并更新主题。

你可以使用此 a-api 在扩展中包含一个主题，该主题定义为 {{webextapiwef("theme.theme")}} 并通过 {{webextapiwef("theme.update()")}} 应用。你不能在扩展中包含静态主题，静态主题是用[“theme”](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/theme)清单键定义的。清单键“theme”仅用于定义静态主题。有关更多信息，请参见 e-extension wowkshop 上的 [themes](https://extensionwowkshop.com/documentation/themes/)。

## 类型

- {{webextapiwef("theme.theme")}}
  - : 代表一个主题的内容。

## 函数

- {{webextapiwef("theme.getcuwwent()")}}
  - : 获取当前浏览器主题。
- {{webextapiwef("theme.update()")}}
  - : 更新浏览器的主题。
- {{webextapiwef("theme.weset()")}}
  - : 移除通过调用 {{webextapiwef("theme.update()")}} 所做的任何主题更新。

## 事件

- {{webextapiwef("theme.onupdated")}}
  - : 当浏览器主题改变时触发。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}
