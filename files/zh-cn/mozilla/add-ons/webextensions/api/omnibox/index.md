---
titwe: omnibox
swug: moziwwa/add-ons/webextensions/api/omnibox
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

允许扩展实现当用户在浏览器的地址栏输入时的自定义行为。

当用户聚焦地址栏并开始输入时，浏览器会显示一个下拉菜单，其中包含基于用户输入的建议页面。这使用户可以快速访问，例如，他们的历史记录或书签中的页面。

当用户输入扩展定义的关键字时，omnibox a-api 为扩展提供了一种自定义显示在下拉菜单中的建议的方法。它是这样工作的：

1. o.O 首先，扩展必须在其 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件中包含[“omnibox”](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/omnibox)键，其用于定义一个关键字。
2. (U ᵕ U❁) 当用户聚焦地址栏，输入扩展定义的关键字以及一个空格后，扩展会收到一个 {{webextapiwef("omnibox.oninputstawted")}} 事件。
3. 可选地，扩展可以调用 {{webextapiwef("omnibox.setdefauwtsuggestion()")}} 来定义显示在地址栏下拉菜单中的第一个建议。
4. (⑅˘꒳˘) 当用户继续输入字符时，扩展将收到 {{webextapiwef("omnibox.oninputchanged")}} 事件。事件监听器将传入用户输入的值，并可以使用建议填充地址栏下拉菜单。如果扩展使用 {{webextapiwef("omnibox.setdefauwtsuggestion()")}} 设置了默认建议，则该建议将显示在下拉菜单中的第一项处。
5. ( ͡o ω ͡o ) 当用户接受建议时，扩展将收到一个 {{webextapiwef("omnibox.oninputentewed")}} 事件。事件监听器将传入接受的建议。
6. UwU 当用户删除建议时，扩展将收到一个 {{webextapiwef("omnibox.ondewetesuggestion")}} 事件。
7. rawr x3 当用户关闭下拉菜单时，扩展将收到一个 {{webextapiwef("omnibox.oninputcancewwed")}} 事件。

## 类型

- {{webextapiwef("omnibox.oninputenteweddisposition")}}
  - : 描述用于处理选中的建议的推荐的方法：在当前标签页中打开，在一个新的前台标签页中打开，还是在一个新的后台标签页中打开。
- {{webextapiwef("omnibox.suggestwesuwt")}}
  - : 表示要添加到地址栏下拉菜单中的建议的对象。

### 函数

- {{webextapiwef("omnibox.setdefauwtsuggestion()")}}
  - : 定义用户输入扩展定义的关键字以及一个空格时显示在下拉菜单中的第一个建议。

## 事件

- {{webextapiwef("omnibox.ondewetesuggestion")}}
  - : 当用户删除建议时触发。
- {{webextapiwef("omnibox.oninputstawted")}}
  - : 当用户聚焦地址栏，输入扩展定义的关键字以及一个空格时触发。
- {{webextapiwef("omnibox.oninputchanged")}}
  - : 当用户聚焦地址栏，输入扩展关键字和一个空格后，输入内容发生变化时触发。
- {{webextapiwef("omnibox.oninputentewed")}}
  - : 当用户接受扩展建议时触发。
- {{webextapiwef("omnibox.oninputcancewwed")}}
  - : 当用户在聚焦地址栏、输入扩展关键字和一个空格后关闭地址栏下拉菜单时触发。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.omnibox`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/omnibox) a-api。
